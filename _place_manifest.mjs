import postgres from "postgres";
import { readFileSync } from "node:fs";
import { basename } from "node:path";
const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });
const SVGDIR = "C:/Users/johnp/Desktop/Coding Projects/The-scorch-protocol/content-drafts/blog-svgs/";
const manifest = JSON.parse(readFileSync(process.argv[2], "utf8"));
const DRY = process.argv.includes("--dry");

function snippet(file) {
  const f = readFileSync(SVGDIR + file, "utf8");
  const body = f.slice(f.indexOf("<div"));
  return body.split(/\r?\n/).filter((l) => l.trim() !== "").join("\n");
}
function validFile(file) {
  let f;
  try { f = readFileSync(SVGDIR + file, "utf8"); } catch { return "missing"; }
  const c = (re) => (f.match(re) || []).length;
  if (c(/<svg/g) !== 1 || c(/<\/svg>/g) !== 1) return "svg-count";
  if (c(/<div/g) !== 1 || c(/<\/div>/g) !== 1) return "div-count";
  if (f.includes('height="auto"')) return "bad-height-attr";
  if (!f.includes('style="width:100%;height:auto;display:block"')) return "no-sizing";
  if (!f.includes("max-width:760px")) return "no-wrap";
  return "ok";
}

let totalPlaced = 0, totalSkip = 0, totalMiss = 0, totalBad = 0;
for (const post of manifest.posts) {
  const [row] = await sql`SELECT content FROM blog_posts WHERE slug=${post.slug}`;
  if (!row) { console.log(`MISSING POST  ${post.slug}`); continue; }
  let content = row.content;
  let placed = 0, skip = 0, miss = 0, bad = 0;
  const notes = [];
  for (const p of post.placements) {
    const name = basename(p.file, ".html");
    const v = validFile(p.file);
    if (v !== "ok") { bad++; notes.push(`BAD(${v}):${p.file}`); continue; }
    if (content.includes(`<!-- svg:${name} start -->`)) { skip++; continue; }
    const idx = content.indexOf(p.anchor);
    if (idx === -1) { miss++; notes.push(`MISS-ANCHOR:${name} <- "${p.anchor.slice(0, 40)}"`); continue; }
    const nl = content.indexOf("\n", idx + p.anchor.length);
    const at = nl === -1 ? content.length : nl + 1;
    const block = `\n<!-- svg:${name} start -->\n\n${snippet(p.file)}\n\n<!-- svg:${name} end -->\n`;
    content = content.slice(0, at) + block + content.slice(at);
    placed++;
  }
  if (!DRY && placed > 0) await sql`UPDATE blog_posts SET content=${content}, updated_at=now() WHERE slug=${post.slug}`;
  totalPlaced += placed; totalSkip += skip; totalMiss += miss; totalBad += bad;
  console.log(`${DRY ? "[dry] " : ""}${post.slug}  placed=${placed} skip=${skip} miss=${miss} bad=${bad}${notes.length ? "  " + notes.join("; ") : ""}`);
}
console.log(`\n${DRY ? "[DRY] " : ""}TOTAL placed=${totalPlaced} skip=${totalSkip} miss=${totalMiss} bad=${totalBad}`);
await sql.end();
