import { readFileSync, readdirSync } from "node:fs";
const D = "C:/Users/johnp/Desktop/Coding Projects/The-scorch-protocol/content-drafts/blog-svgs/";
const files = readdirSync(D).filter((f) => f.endsWith(".html")).sort();
const want = process.argv[2] || "all"; // "dark" | "light" | "all"
for (const f of files) {
  const isLight = f.includes("-light") || f.startsWith("dfc-");
  if (want === "dark" && isLight) continue;
  if (want === "light" && !isLight) continue;
  const s = readFileSync(D + f, "utf8");
  const m = s.match(/<!--([\s\S]*?)-->/);
  let concept = m ? m[1].replace(/\s+/g, " ").trim() : "(no comment)";
  concept = concept.replace(/Image #\d+[^.]*\.\s*/i, "").slice(0, 150);
  const name = f.replace(/\.html$/, "");
  console.log(`${isLight ? "LIGHT" : "DARK "}  file=${name}  ::  ${concept}`);
}
