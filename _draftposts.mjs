import postgres from "postgres";
const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });
const APPLY = process.argv.includes("--apply");
const slugs = process.argv.slice(2).filter((a) => !a.startsWith("--"));
for (const slug of slugs) {
  const [r] = await sql`SELECT slug, title, status FROM blog_posts WHERE slug=${slug}`;
  if (!r) { console.log(`MISSING  ${slug}`); continue; }
  if (APPLY && r.status === "published") {
    await sql`UPDATE blog_posts SET status='draft', updated_at=now() WHERE slug=${slug}`;
    console.log(`DRAFTED  ${r.status} -> draft  ${slug}  ::  ${(r.title || "").slice(0, 60)}`);
  } else {
    console.log(`${APPLY ? "SKIP(" + r.status + ")" : r.status.padEnd(9)}  ${slug}  ::  ${(r.title || "").slice(0, 60)}`);
  }
}
await sql.end();
