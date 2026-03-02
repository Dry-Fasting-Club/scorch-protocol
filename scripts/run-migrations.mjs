/**
 * scripts/run-migrations.mjs
 *
 * Runs all SQL migrations in order against your Neon database.
 * Requires DATABASE_URL to be set in .env.local.
 *
 * Usage:
 *   node scripts/run-migrations.mjs
 *
 * Safe to run multiple times — all DDL uses IF NOT EXISTS / ON CONFLICT DO NOTHING.
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Load .env.local
try {
  const envFile = readFileSync(join(ROOT, ".env.local"), "utf-8");
  for (const line of envFile.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (key) process.env[key] = val;
  }
} catch {
  console.warn("No .env.local found — using existing process.env");
}

if (!process.env.DATABASE_URL) {
  console.error("ERROR: DATABASE_URL is not set. Add it to .env.local first.");
  process.exit(1);
}

const { default: postgres } = await import("postgres");
const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

// Ordered migration files
const MIGRATIONS = [
  "001_schema.sql",
  "001_comments_threading_and_blog.sql",
  "002_sections_paid_meta.sql",
];

console.log("\n=== Scorch Protocol — Database Migrations ===\n");

for (const filename of MIGRATIONS) {
  const filepath = join(ROOT, "migrations", filename);
  let content;
  try {
    content = readFileSync(filepath, "utf-8");
  } catch {
    console.error(`ERROR: Migration file not found: ${filepath}`);
    process.exit(1);
  }

  console.log(`Running: ${filename} ...`);
  try {
    // sql.unsafe() executes the full file as-is, supporting multi-statement SQL.
    await sql.unsafe(content);
    console.log(`  ✓ ${filename} complete`);
  } catch (err) {
    console.error(`  ✗ Failed on ${filename}:`, err.message);
    await sql.end();
    process.exit(1);
  }
}

// Verify tables exist
console.log("\nVerifying tables...");
const tables = await sql`
  SELECT tablename FROM pg_tables
  WHERE schemaname = 'public'
  ORDER BY tablename
`;
const names = tables.map((r) => r.tablename);
console.log("  Tables found:", names.join(", "));

const required = ["admin_users", "blog_posts", "blog_views", "comments", "email_subscribers", "purchases", "sections"];
const missing = required.filter((t) => !names.includes(t));
if (missing.length) {
  console.error("\nERROR: Missing expected tables:", missing.join(", "));
} else {
  console.log("  ✓ All required tables present");
}

const sectionCount = await sql`SELECT COUNT(*) as c FROM sections`;
console.log(`  ✓ Sections seeded: ${sectionCount[0].c} rows`);

await sql.end();
console.log("\n✓ Migration complete. Database is ready.\n");
