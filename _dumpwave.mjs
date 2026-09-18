import postgres from "postgres";
import { writeFileSync, mkdirSync } from "node:fs";
const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });
const OUT = process.env.WAVE_DIR;
mkdirSync(OUT, { recursive: true });
const slugs = process.argv.slice(2);
for (const slug of slugs) {
  const [r] = await sql`SELECT slug, title, reading_time_minutes AS rt, content FROM blog_posts WHERE slug=${slug}`;
  if (!r) { console.log(`MISSING  ${slug}`); continue; }
  writeFileSync(`${OUT}/${slug}.md`, `# ${r.title}\n\n(reading_time=${r.rt}, target_figures=${Math.floor((r.rt || 0) / 2)})\n\n${r.content}`, "utf8");
  const h2 = (r.content.match(/^##\s+.+$/gm) || []).map((h) => h.trim());
  console.log(`WROTE ${slug}  rt=${r.rt} tgt=${Math.floor((r.rt || 0) / 2)}  h2=${h2.length}`);
  for (const h of h2) console.log(`    ${h}`);
}
await sql.end();
