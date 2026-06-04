/**
 * scripts/publish-blog.mjs
 *
 * Reads every .md file in content/blog/, parses YAML frontmatter,
 * and upserts each into the blog_posts table on Neon.
 *
 * Idempotent: re-running updates existing posts (matched by slug) and
 * inserts new ones. Word count and reading time are recomputed every run.
 * published_at is set on first publish only (preserved on re-runs).
 *
 * Usage:
 *   node scripts/publish-blog.mjs            # publish/update all .md files
 *   node scripts/publish-blog.mjs <slug>     # publish/update just one slug
 *
 * Requires DATABASE_URL in .env.local.
 *
 * The frontmatter parser supports the subset of YAML we use:
 *   key: "string value" or key: bare value
 *   key: true / false
 *   key:
 *     - list item 1
 *     - list item 2
 * No nesting, no anchors, no flow style. Keep it simple.
 */

import { readFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT_DIR = join(ROOT, "content", "blog");

// ─── Load .env.local ───────────────────────────────────────────
try {
  const envFile = readFileSync(join(ROOT, ".env.local"), "utf-8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (key && !process.env[key]) process.env[key] = val;
  }
} catch {
  console.warn("No .env.local found, using existing process.env");
}

if (!process.env.DATABASE_URL) {
  console.error("ERROR: DATABASE_URL is not set. Add it to .env.local first.");
  process.exit(1);
}

// ─── Frontmatter parser (small, purpose-built) ─────────────────
function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Missing YAML frontmatter (--- ... ---)");
  }
  const [, yaml, body] = match;
  const data = {};
  const lines = yaml.split(/\r?\n/);

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith("#")) { i++; continue; }

    const keyMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*):\s*(.*)$/);
    if (!keyMatch) { i++; continue; }
    const [, key, rawVal] = keyMatch;

    if (rawVal === "" || rawVal === undefined) {
      // List under this key, collect the indented `-` items below
      const items = [];
      i++;
      while (i < lines.length && /^\s+-\s+/.test(lines[i])) {
        const itemMatch = lines[i].match(/^\s+-\s+(.+)$/);
        if (itemMatch) items.push(unquote(itemMatch[1].trim()));
        i++;
      }
      data[key] = items;
      continue;
    }

    const val = unquote(rawVal.trim());
    if (val === "true") data[key] = true;
    else if (val === "false") data[key] = false;
    else if (val === "null" || val === "~") data[key] = null;
    else data[key] = val;
    i++;
  }

  return { data, content: body.trim() };
}

function unquote(s) {
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

// ─── Content helpers ───────────────────────────────────────────
function countWords(content) {
  return content.trim().split(/\s+/).length;
}

function estimateReadingTime(content) {
  return Math.max(1, Math.ceil(countWords(content) / 238));
}

// ─── Main ──────────────────────────────────────────────────────
const targetSlug = process.argv[2] || null;
const { default: postgres } = await import("postgres");
const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

let files;
try {
  files = readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md") && f !== "README.md");
} catch (err) {
  console.error(`ERROR: cannot read ${CONTENT_DIR}:`, err.message);
  process.exit(1);
}

if (targetSlug) {
  files = files.filter((f) => f === `${targetSlug}.md`);
  if (files.length === 0) {
    console.error(`ERROR: no file named ${targetSlug}.md in ${CONTENT_DIR}`);
    process.exit(1);
  }
}

console.log(`\n=== Publish blog posts (${files.length} file${files.length === 1 ? "" : "s"}) ===\n`);

let inserted = 0;
let updated = 0;
let failed = 0;

for (const filename of files) {
  const filepath = join(CONTENT_DIR, filename);
  let frontmatter, content;
  try {
    const raw = readFileSync(filepath, "utf-8");
    const parsed = parseFrontmatter(raw);
    frontmatter = parsed.data;
    content = parsed.content;
  } catch (err) {
    console.error(`  ✗ ${filename}: ${err.message}`);
    failed++;
    continue;
  }

  // Required fields
  const required = ["slug", "title", "excerpt", "category"];
  const missing = required.filter((f) => !frontmatter[f]);
  if (missing.length) {
    console.error(`  ✗ ${filename}: missing required field(s): ${missing.join(", ")}`);
    failed++;
    continue;
  }

  const wordCount = countWords(content);
  const readingTime = estimateReadingTime(content);

  try {
    const existing = await sql`SELECT id, published_at FROM blog_posts WHERE slug = ${frontmatter.slug} LIMIT 1`;

    if (existing.length === 0) {
      // INSERT
      const publishedAt = frontmatter.status === "published" ? new Date() : null;
      await sql`
        INSERT INTO blog_posts (
          slug, title, subtitle, excerpt, content, category, tags,
          author_name, status, featured, og_image_url,
          reading_time_minutes, word_count, seo_title, seo_description,
          related_protocol_slug, published_at
        ) VALUES (
          ${frontmatter.slug},
          ${frontmatter.title},
          ${frontmatter.subtitle ?? null},
          ${frontmatter.excerpt},
          ${content},
          ${frontmatter.category},
          ${frontmatter.tags ?? []},
          ${frontmatter.author_name ?? "Yannick Wolfe"},
          ${frontmatter.status ?? "draft"},
          ${frontmatter.featured ?? false},
          ${frontmatter.og_image_url ?? null},
          ${readingTime},
          ${wordCount},
          ${frontmatter.seo_title ?? null},
          ${frontmatter.seo_description ?? null},
          ${frontmatter.related_protocol_slug ?? null},
          ${publishedAt}
        )
      `;
      inserted++;
      console.log(`  + ${frontmatter.slug} (inserted, ${wordCount} words, ${readingTime} min read)`);
    } else {
      // UPDATE; preserve published_at if already set, otherwise set it when status becomes published
      const existingPublishedAt = existing[0].published_at;
      const publishedAt = existingPublishedAt ?? (frontmatter.status === "published" ? new Date() : null);

      await sql`
        UPDATE blog_posts SET
          title                 = ${frontmatter.title},
          subtitle              = ${frontmatter.subtitle ?? null},
          excerpt               = ${frontmatter.excerpt},
          content               = ${content},
          category              = ${frontmatter.category},
          tags                  = ${frontmatter.tags ?? []},
          author_name           = ${frontmatter.author_name ?? "Yannick Wolfe"},
          status                = ${frontmatter.status ?? "draft"},
          featured              = ${frontmatter.featured ?? false},
          og_image_url          = ${frontmatter.og_image_url ?? null},
          reading_time_minutes  = ${readingTime},
          word_count            = ${wordCount},
          seo_title             = ${frontmatter.seo_title ?? null},
          seo_description       = ${frontmatter.seo_description ?? null},
          related_protocol_slug = ${frontmatter.related_protocol_slug ?? null},
          published_at          = ${publishedAt},
          updated_at            = NOW()
        WHERE slug = ${frontmatter.slug}
      `;
      updated++;
      console.log(`  ~ ${frontmatter.slug} (updated, ${wordCount} words, ${readingTime} min read)`);
    }
  } catch (err) {
    console.error(`  ✗ ${frontmatter.slug}: ${err.message}`);
    failed++;
  }
}

await sql.end();

console.log(`\n=== Done. Inserted: ${inserted}, Updated: ${updated}, Failed: ${failed} ===\n`);
process.exit(failed > 0 ? 1 : 0);
