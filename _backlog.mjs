import postgres from "postgres";
const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });
const rows = await sql`SELECT slug, title, published_at, reading_time_minutes AS rt, content FROM blog_posts WHERE status='published' ORDER BY published_at DESC NULLS LAST`;
let n = 0;
for (const r of rows) {
  const figs = (r.content.match(/<!-- svg:[a-z0-9-]+ start -->/g) || []).length;
  if (figs > 0) continue;
  n++;
  const d = r.published_at ? new Date(r.published_at).toISOString().slice(0, 10) : "null";
  const target = Math.floor((r.rt || 0) / 2);
  console.log(`${d}  rt=${r.rt} tgt=${target}  ${r.slug}  ::  ${(r.title || "").slice(0, 70)}`);
}
console.log(`\nTOTAL posts with 0 figures: ${n}`);
await sql.end();
