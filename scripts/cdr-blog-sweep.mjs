/**
 * scripts/cdr-blog-sweep.mjs
 *
 * The CDR weave's sweep of the live blog rows (plan Task 15, 2026-11-05).
 * Scans every published blog_posts row for the retired wording, prints each
 * hit with 200 characters of context, and applies the reviewed replacements
 * encoded in RULES below, then the dash fixer. Ledger:
 * docs/superpowers/research/2026-11-03-cdr/blog-sweep-ledger.md (scorch-knowledge).
 *
 * Usage (from scorch-app/):
 *   node scripts/cdr-blog-sweep.mjs --scan                 # list every hit
 *   node scripts/cdr-blog-sweep.mjs                        # dry run: print the proposed replacements
 *   node scripts/cdr-blog-sweep.mjs --apply                # write them, one transaction per post
 *   add --site=dfc to run against dryfastingclub.com's own database
 *   add --env=<path> to read DATABASE_URL from another env file
 *   add --slug=<slug> to limit any mode to one post
 *   add --from-json=<dump> to scan or dry-run a JSON backup of blog_posts (no database)
 *
 * dryfastingclub.com pages cache for 24 hours; after an --apply there, revalidate
 * each changed post through the site's admin route (PATCH /api/admin/blog/<id>
 * with an empty body, on the www host: the apex redirects and the cookie is
 * dropped on the way; see the ledger).
 *
 * Fix round 1 (2026-11-05, after review) widened the scan terms and added or
 * revised rules; revised rules carry `was` (the first pass's text) so the live
 * rows and a replay from the pre-sweep backup end in the same place.
 *
 * --apply updates only the body column (`content`) and `updated_at`. It never
 * touches title, slug, published_at or any other column. Every rule names the
 * post by id and slug and states how many times its exact text must occur;
 * a post whose text no longer matches is skipped with a message, and a post
 * whose row changed between the read and the write is skipped too, so a
 * re-run after a successful apply changes nothing.
 *
 * On the scorch site the same rules and the dash fixer are mirrored into
 * content/blog/<slug>.md when that source file exists, so a re-publish with
 * scripts/publish-blog.mjs does not undo the sweep (the inline SVG figures
 * live only in the rows, so figure rules simply do not match the files).
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT_DIR = join(ROOT, "content", "blog");

// ─── Arguments ─────────────────────────────────────────────────
const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : null;
};
const SITE = opt("site") ?? "scorch";
if (!["scorch", "dfc"].includes(SITE)) {
  console.error(`ERROR: --site must be scorch or dfc, not ${SITE}`);
  process.exit(1);
}
const MODE = flag("scan") ? "scan" : flag("apply") ? "apply" : "propose";
const ONLY_SLUG = opt("slug");
// The DFC site's live env file sits in the copy of dryfastingclub-site inside
// the project root (the sibling checkout has none); pass --env to override.
const ENV_FILE = resolve(
  opt("env") ??
    (SITE === "scorch" ? join(ROOT, ".env.local") : join(ROOT, "..", "dryfastingclub-site", ".env.local")),
);

// --from-json=<file> scans or dry-runs a JSON dump of blog_posts rows (a backup)
// instead of the database; --apply is refused in that mode.
const FROM_JSON = opt("from-json");
if (FROM_JSON && MODE === "apply") {
  console.error("ERROR: --apply works on the database only, not on --from-json");
  process.exit(1);
}

// ─── Load the env file (DATABASE_URL only) ─────────────────────
let databaseUrl = null;
if (!FROM_JSON) {
  try {
    for (const line of readFileSync(ENV_FILE, "utf-8").split(/\r?\n/)) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const eq = t.indexOf("=");
      if (eq === -1) continue;
      if (t.slice(0, eq).trim() === "DATABASE_URL") {
        databaseUrl = t.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      }
    }
  } catch {
    console.error(`ERROR: cannot read ${ENV_FILE}`);
    process.exit(1);
  }
  if (!databaseUrl) {
    console.error(`ERROR: DATABASE_URL is not set in ${ENV_FILE}`);
    process.exit(1);
  }
}

// The dash and alpha characters are built from code points so this file
// itself carries no dash characters.
const EM = String.fromCharCode(0x2014);
const EN = String.fromCharCode(0x2013);
const ALPHA = String.fromCharCode(0x3b1);
const NBSP = String.fromCharCode(0xa0);
// A dash written as an HTML entity renders like the character itself.
const DASH_SOURCE = "[" + EM + EN + "]|&#821[12];|&[nm]dash;|&#x201[34];";
const isEnDash = (s) => s === EN || /^&(?:#8211|ndash|#x2013);$/i.test(s);

// ─── Scan terms ────────────────────────────────────────────────
// Each term finds candidate positions; `near` keeps only hits with a second
// pattern within 60 characters (or `nearWindow`), unless the text at the hit
// matches `alwaysIf`; `paragraphCheck` reports whether the hit's paragraph
// carries the refeed caveat. Every hit is judged by hand in the ledger; the
// scan never edits anything. Fix round 1 (2026-11-05) widened the flood
// window to 200 characters and made "flood the system" a hit anywhere, let
// the T3-for-everyone gap hold a markdown link of any length, added the
// thymus peptides and the other named peptides, the HTML-entity dashes, and
// percentages "of people" (outcome rates).
const NEAR = 60;
const T3_NEAR = /\bT3\b|liothyronine|cytomel|thyroid hormone/i;
const T3T4_NEAR = /\bT[34]\b|thyroid/i;
const DOSE_SUBSTANCE = new RegExp(
  "\\bT3\\b|\\bT4\\b|desiccated|\\bNDT\\b|armour|liothyronine|levothyroxine|cytomel|\\bhGH\\b|growth hormone|somatropin|" +
    "methylene blue|aspirin|ivermectin|BPC[- ]?157|CJC[- ]?1295|ipamorelin|thymalin|thymosin|T&#945;1|T" + ALPHA + "1|peptide",
  "i",
);

const TERMS = [
  { id: "stem-cell", label: '"maximize stem cell activation"', re: /maximi[sz]\w*\s+(?:the\s+)?stem[- ]cell/gi },
  { id: "flood-t3", label: '"flood" within 200 characters of T3, and "flood the system" anywhere (judged: T3, or calories and stress hormones)', re: /flood\w*/gi, near: T3_NEAR, nearWindow: 200, alwaysIf: /^flood\w*\s+(?:the|your)\s+(?:system|body|cells?)\b/i },
  { id: "hibernation", label: '"hibernation" or "torpor" (judged: the explanation, or a passing mention)', re: /hibernat\w*|torpor/gi },
  { id: "multiplier", label: '"10 times", "100 times", "10x", "100x", "2x", "-fold"', re: /\b(?:10|100|ten|a hundred|one hundred)(?:\s+times\b|x\b|[- ]?fold\b)|\b2x\b/gi },
  { id: "label-mutagen", label: '"mutagen holiday" as a label', re: /mutagen holiday/gi },
  { id: "label-vuln", label: '"vulnerability window" as a label (also "vulnerable window")', re: /vulnerab\w*\s+windows?/gi },
  { id: "label-deadzone", label: '"dead zone" (allowed only as the name of refeed days 1 to 3)', re: /dead[- ]zone/gi },
  { id: "consolidation", label: '"consolidation" (the one name for refeed days 1 to 14; any other period clashes)', re: /consolidat\w*/gi },
  { id: "deeper", label: '"deeper" claims (paragraph checked for the refeed caveat)', re: /\bdeeper\b/gi, paragraphCheck: /refeed/i },
  { id: "depth-days", label: "seven-to-nine-day and nine-day fasts (depth claims; paragraph checked for the refeed caveat)", re: new RegExp("\\b(?:7|seven)(?:-day)?\\s*(?:to|-|" + EN + ")\\s*(?:9|nine)(?:-day)?\\b|\\bnine[- ]day\\b|\\b9[- ]day\\b", "gi"), paragraphCheck: /refeed/i },
  {
    id: "peptide",
    label: "BPC-157, CJC-1295, Ipamorelin, Thymalin, Thymulin, Thymosin and Thymosin alpha-1, thymus peptides, TB-500, Tesamorelin, Sermorelin, KPV, GHK, Epitalon, MOTS-c, LL-37, Selank, Semax, secretagogues (schedule and framing judged)",
    re: new RegExp(
      "BPC[- ]?157|CJC[- ]?1295|ipamorelin|thymalin|thymulin|thymosin|thymus[- ]peptides?|T(?:&#945;|" + ALPHA + ")1|\\bTA-?1\\b|TB[- ]?500|" +
        "tesamorelin|sermorelin|\\bKPV\\b|\\bGHK\\b|epitha?lon|MOTS-?c\\b|\\bLL-?37\\b|selank|semax|secretagogues?",
      "gi",
    ),
  },
  { id: "rate", label: '"most patients", "most participants" (up to two words between), "1-on-1", "one-on-one", "worked directly with"', re: /\bmost (?:[\w'/-]+ ){0,2}(?:patients|participants)\b|1[- ]on[- ]1|one[- ]on[- ]one|worked directly with/gi },
  { id: "count-claim", label: '"hundreds of patients" and similar head counts', re: /\b(?:hundreds|dozens|thousands) of (?:patients|people|participants|clients|cases|members)\b/gi },
  { id: "dash", label: "em and en dashes, as characters or as HTML entities (&#8211; &#8212; &ndash; &mdash;)", re: new RegExp(DASH_SOURCE, "gi") },
  { id: "ratio", label: '"2:1" near T3 or T4', re: /\b2\s*:\s*1\b/g, near: T3T4_NEAR },
  { id: "dose", label: "mcg, mg, IU or grain figures near T3, T4, desiccated, hGH, peptides, methylene blue, aspirin, ivermectin (within 120 characters)", re: /\d[\d.,]*\s*(?:-|to)?\s*\d*[\d.,]*\s*(?:mcg|µg|μg|mg|IU|grains?)\b|\b(?:half|one|two)[- ]grain\b/gi, near: DOSE_SUBSTANCE, nearWindow: 120 },
  { id: "iu", label: "any IU figure (hGH is dosed in IU; vitamin D figures are allowed)", re: /\d[\d.,]*\s*(?:-|to)?\s*\d*[\d.,]*\s*IU\b/g },
  { id: "retired-link", label: "links to /weight-loss or /random-thoughts", re: /\/(?:weight-loss|random-thoughts)(?![\w-])/g },
  { id: "naming", label: '"Naviaux" or "cell danger response" (never named in blog posts)', re: /naviaux|cell danger/gi },
  { id: "retired-number", label: "retired outcome numbers (97%, 141, 117, over 100, 30 of 32)", re: /\b97\s?%|\b141\b|\b117\b|over 100 (?:people|patients|participants|clients|cases)|30 of 32/gi },
  {
    id: "outcome-percent",
    label: 'a percentage "of people", "of patients" and the like, or "works for" a percentage (outcome rates judged; study and population figures stay)',
    re: /\b\d{1,3}(?:\.\d+)?\s?(?:%|percent)\s+of\s+(?:people|patients|participants|clients|cases|members|those|you|users|subscribers|respondents)\b|\bwork(?:s|ed)?\s+for\s+\d{1,3}\s?%/gi,
  },
  // The gap between the words stays inside one sentence (no full stop, no line
  // break) and counts a markdown link's "](url)" as one step, whatever its length.
  {
    id: "t3-everyone",
    label: "T3 said to be for everyone (or not optional), with a markdown link of any length allowed between the words",
    re: /\b(?:everyone|everybody|anyone|every patient|all patients)\b(?:\]\([^)\n]*\)|[^.\n]){0,80}\bT3\b|\bT3\b(?:\]\([^)\n]*\)|[^.\n]){0,80}\b(?:everyone|everybody|anyone|every patient|all patients|not optional|mandatory for)\b/gi,
  },
  { id: "bad-batch", label: '"bad batch" (never on a public page)', re: /bad batch/gi },
];

// Where a hit sits: prose, an HTML comment (never rendered), a tag attribute,
// or a text node inside an inline SVG figure (title, desc, text, tspan).
function locate(content, idx) {
  const cOpen = content.lastIndexOf("<!--", idx);
  if (cOpen !== -1) {
    const cClose = content.indexOf("-->", cOpen);
    if (cClose === -1 || cClose + 3 > idx) return "html-comment";
  }
  const lt = content.lastIndexOf("<", idx);
  const gt = content.lastIndexOf(">", idx - 1);
  const inTag = lt > gt && /^<\/?[a-zA-Z]/.test(content.slice(lt, lt + 2));
  const sOpen = content.lastIndexOf("<svg", idx);
  const inSvg = sOpen !== -1 && content.indexOf("</svg>", sOpen) > idx;
  if (inSvg) {
    if (inTag) return "svg-attr";
    const opens = [...content.slice(sOpen, idx).matchAll(/<(\/?)(text|tspan|title|desc)\b/g)];
    const last = opens[opens.length - 1];
    if (last && last[1] === "") return `svg-${last[2]}`;
    return "svg-other";
  }
  if (inTag) return "html-attr";
  return "prose";
}

function paragraphAt(content, idx) {
  const start = content.lastIndexOf("\n\n", idx);
  const end = content.indexOf("\n\n", idx);
  return content.slice(start === -1 ? 0 : start + 2, end === -1 ? content.length : end);
}

function context(content, idx, len = 0) {
  const from = Math.max(0, idx - 100);
  const to = Math.min(content.length, idx + len + 100);
  return content.slice(from, to).replace(/\r?\n/g, " \\n ");
}

function scanPost(post) {
  const hits = [];
  const c = post.content ?? "";
  for (const term of TERMS) {
    term.re.lastIndex = 0;
    let m;
    while ((m = term.re.exec(c)) !== null) {
      const idx = m.index;
      if (term.near && !(term.alwaysIf && term.alwaysIf.test(c.slice(idx, idx + 60)))) {
        const w = term.nearWindow ?? NEAR;
        const win = c.slice(Math.max(0, idx - w), idx + m[0].length + w);
        if (!term.near.test(win)) continue;
      }
      const hit = { term: term.id, idx, match: m[0], where: locate(c, idx), context: context(c, idx, m[0].length) };
      if (term.paragraphCheck) hit.caveat = term.paragraphCheck.test(paragraphAt(c, idx)) ? "refeed in paragraph" : "NO refeed in paragraph";
      hits.push(hit);
    }
  }
  return hits;
}

// ─── Dash fixer ────────────────────────────────────────────────
// Every em or en dash outside an HTML comment or a tag attribute is replaced
// by the punctuation it stands for: a range ("2 to 3", or "2-3" inside a
// figure label where space is tight), a colon before an explanation, a comma
// before a word that continues the sentence, commas (or brackets, when the
// aside holds a comma) around a paired aside, and nothing at the start of a
// line. The dry run prints every change; cases the fixer reads wrongly are
// handled first by exact rules in RULES. A dash written as an HTML entity is
// read the same way (fix round 1), and its ranges are written out with "to".
const COMMA_WORDS = new Set(
  ("and but or nor so yet which who whom whose where when while not because even especially including like such " +
    "whether if then plus without with though although as for from to in on at of by than until unless since after " +
    "before through rather instead only just often usually sometimes mostly never always also too almost maybe " +
    "perhaps possibly probably except via per").split(" "),
);
const PUNCT_DASH = new RegExp("[" + EM + EN + "]");

// `len` is the dash's length in the text: 1 for the character, more for an
// HTML entity ("&#8211;"). A degree sign before the dash may be an entity too.
function isRange(text, l, r, i, len = 1) {
  const left = text.slice(Math.max(0, l - 12), l);
  const right = text.slice(r, r + 12);
  const numL = /[\d%]$/.test(left) || /\d\s?(?:°|&#176;|&deg;)[FC]?$/.test(left);
  const numR = /^[~$£€]?\d/.test(right);
  if (!numL || !numR) return false;
  // An en dash between numbers is a range; a spaced em dash between numbers is punctuation.
  return isEnDash(text.slice(i, i + len)) || (l === i && r === i + len);
}

function dashSpan(text, i, len = 1) {
  let l = i;
  while (l > 0 && (text[l - 1] === " " || text[l - 1] === NBSP)) l--;
  let r = i + len;
  if (len === 1) while (r < text.length && (text[r] === EM || text[r] === "-" && text[r - 1] === EM)) r++;
  while (r < text.length && (text[r] === " " || text[r] === NBSP)) r++;
  return [l, r];
}

// True when the dash sits inside the text of a markdown link ("[Author, 2021" + dash + "finding](url)").
function inLinkText(text, i) {
  const open = text.lastIndexOf("[", i);
  if (open === -1 || text.lastIndexOf("]", i) > open || text.slice(open, i).includes("\n")) return false;
  const close = text.indexOf("](", i);
  return close !== -1 && !text.slice(i, close).includes("[") && !text.slice(i, close).includes("\n");
}

function sentenceAround(text, i) {
  let s = i;
  while (s > 0 && text[s - 1] !== "\n" && !(/[.!?]/.test(text[s - 1]) && /\s/.test(text[s] ?? ""))) s--;
  let e = i;
  while (e < text.length && text[e] !== "\n" && !(/[.!?]/.test(text[e]) && /[\s]/.test(text[e + 1] ?? " "))) e++;
  return [s, e];
}

function fixDashes(text) {
  const spots = [];
  const re = new RegExp(DASH_SOURCE, "gi");
  let m;
  while ((m = re.exec(text)) !== null) {
    const where = locate(text, m.index);
    if (where === "html-comment" || where === "svg-attr" || where === "html-attr") continue;
    const len = m[0].length;
    const [l, r] = dashSpan(text, m.index, len);
    spots.push({ i: m.index, l, r, where, len, entity: len > 1 });
    re.lastIndex = Math.max(re.lastIndex, r);
  }
  const plan = new Map();
  const lineBefore = (l) => text.slice(text.lastIndexOf("\n", l - 1) + 1, l);
  // A label: a time of day ("8 am" then a dash) or a bold label opening a line
  // ("- **Day 3** \[72 hours\]" then a dash).
  const isTimeLabel = (l) => /\b\d{1,2}(?::\d\d)?\s?(?:am|pm)$/i.test(text.slice(Math.max(0, l - 10), l));
  const isBoldLabel = (l) => /^\s*(?:[-*>]\s+|\d+\.\s*)?(?:\*\*|\*|_)[^*_\n]+(?:(?:\*\*|\*|_)(?:\s*\\?\[[^\]\n]*\\?\])?)?$/.test(lineBefore(l));
  // A bare quantity ("250;", "100 grams"), not a compound label ("5-DAY").
  const isQuantity = (r) => /^[~$£€]?\d[\d.,]*(?=[\s;:,.)%°a-zA-Z]|$)/.test(text.slice(r));
  for (let k = 0; k < spots.length; k++) {
    const s = spots[k];
    if (plan.has(s.i)) continue;
    const { i, l, r, where, len, entity } = s;
    const before = text[l - 1];
    const after = text[r];
    if (isRange(text, l, r, i, len)) {
      // A figure label's range takes a hyphen where space is tight; a range
      // written with an entity dash (fix round 1) is written out with "to".
      plan.set(i, { l, r, put: where === "svg-text" && !entity ? "-" : " to " });
      continue;
    }
    if (isEnDash(text.slice(i, i + len)) && l === i && r === i + len && /[A-Za-z]/.test(before ?? "") && /[A-Za-z]/.test(after ?? "")) {
      plan.set(i, { l, r, put: "-" });
      continue;
    }
    if (l === 0 || before === "\n") {
      plan.set(i, { l, r, put: "" });
      continue;
    }
    if (r >= text.length || after === "\n") {
      plan.set(i, { l, r, put: /[.,;:!?]/.test(before) ? "" : ":" });
      continue;
    }
    if (/[.,;:!?)\]]/.test(after)) {
      plan.set(i, { l, r, put: "" });
      continue;
    }
    // Between two tags (a range of linked reference numbers): a hyphen.
    if (before === ">" && after === "<") {
      plan.set(i, { l, r, put: "-" });
      continue;
    }
    // An attribution after a quote: an embedded tweet ("</p>" then the name), a
    // markdown blockquote line ("> " then the name), or a dash after the quote's
    // closing punctuation. The dash goes.
    const tweet = text.slice(l - 4, l) === "</p>";
    const prev4 = text.slice(Math.max(0, l - 4), l);
    const quoteEnd = /[.!?]["”*)]*$/.test(prev4) && (after === "[" || /[”"]\*?$/.test(prev4));
    if (tweet || /^\s*>\s*$/.test(lineBefore(l)) || quoteEnd) {
      plan.set(i, { l, r, put: tweet ? "" : " " });
      continue;
    }
    // A citation's link text: "[Author et al., 2021: what the paper found](url)".
    if (inLinkText(text, i)) {
      plan.set(i, { l, r, put: ": " });
      continue;
    }
    if (isTimeLabel(l) || isBoldLabel(l)) {
      plan.set(i, { l, r, put: (after === "*" || after === "_") && r === i + len ? ":" : ": " });
      continue;
    }
    const headingLine = text[text.lastIndexOf("\n", i) + 1] === "#";
    // A quantity after the dash ("soup" then a dash then "250"): a comma, or a colon in a heading.
    if (isQuantity(r)) {
      plan.set(i, { l, r, put: headingLine ? ": " : ", " });
      continue;
    }
    // A paired aside: another punctuation dash later in the same sentence.
    const [, sEnd] = sentenceAround(text, i);
    const partner = spots
      .slice(k + 1)
      .find(
        (o) =>
          o.i < sEnd &&
          !isRange(text, o.l, o.r, o.i, o.len) &&
          !plan.has(o.i) &&
          !inLinkText(text, o.i) &&
          !isTimeLabel(o.l) &&
          !isBoldLabel(o.l) &&
          !isQuantity(o.r),
      );
    if (partner) {
      const aside = text.slice(r, partner.l);
      const paren = aside.includes(",");
      plan.set(i, { l, r, put: paren ? " (" : ", " });
      const pAfter = text[partner.r];
      const closeEnd = partner.r >= text.length || pAfter === "\n" || /[.,;:!?)\]]/.test(pAfter ?? "");
      plan.set(partner.i, { l: partner.l, r: partner.r, put: paren ? (closeEnd ? ")" : ") ") : closeEnd ? "" : ", " });
      continue;
    }
    const nextWord = (/^\**([A-Za-z']+)/.exec(text.slice(r)) ?? [])[1]?.toLowerCase();
    const [sStart, sStop] = sentenceAround(text, i);
    const lineStart = text.lastIndexOf("\n", i) + 1;
    const isHeading = text[lineStart] === "#";
    const sentenceHasColon = text.slice(sStart, sStop).replace(/https?:\/\//g, "").includes(":");
    let put = ": ";
    if (!isHeading && (COMMA_WORDS.has(nextWord) || sentenceHasColon)) put = ", ";
    // A dash glued to closing emphasis ("**Note" + dash + "**") keeps the bold
    // tight, and a dash ending a figure's text line leaves no trailing space.
    if (((after === "*" || after === "_") && r === i + len) || after === "<") put = put.trimEnd();
    plan.set(i, { l, r, put });
  }
  const changes = [];
  let out = text;
  for (const i of [...plan.keys()].sort((a, b) => b - a)) {
    const { l, r, put } = plan.get(i);
    out = out.slice(0, l) + put + out.slice(r);
    changes.push({
      before: text.slice(Math.max(0, l - 60), Math.min(text.length, r + 60)).replace(/\r?\n/g, " \\n "),
      after: (text.slice(Math.max(0, l - 60), l) + put + text.slice(r, Math.min(text.length, r + 60))).replace(/\r?\n/g, " \\n "),
    });
  }
  return { body: out, changes: changes.reverse() };
}

// ─── Replacement rules (reviewed; see the ledger) ──────────────
// { id, slug, find, replace, count = 1, why, was } or { id, slug, removeBlock: [start, end], why }.
// `find` must occur exactly `count` times in the post's current body or the
// post is skipped; `removeBlock` cuts an inline figure from its start marker
// through its end marker; `was` (fix round 1) names the text the first pass
// wrote, so a revised rule also updates rows that already carry it. A rule
// whose `find` is the first pass's text and whose `replace` is the original
// takes a first-pass change back out (a replay from the backup skips it).
const HC = "Why the order matters is on [the healing cycle page](/healing-cycle).";
const HC_FULL = "Why the order matters is on [the healing cycle page](https://scorchprotocol.com/healing-cycle).";
const DEPTH = "Deeper fasts go deeper and may bring results faster, but they demand a stricter refeed and more care; how far is set with me.";
const T3_WHO = "Not everyone needs T3. It is for the person who comes out of the fast and the refeed still cold, with whole-body and brain fatigue that does not lift.";
const PER_CASE = "never a general recommendation, and never before refeed day 8";

const W = {
  hc: "the healing-cycle pointer sentence (the post explains why the fast works)",
  depth: "depth claim given the refeed caveat in the same paragraph (John 2026-11-04 wording)",
  voice: "third-person \"Yannick's experience\" put in his first person",
  rate: "outcome rate or timeline said qualitatively",
  mult: "multiplier claim said qualitatively",
  t3: "T3 for everyone replaced with the reboot wording (not everyone needs T3)",
  dose: "dose figure removed, set case by case",
  cons: "\"consolidation\" is the one name for refeed days 1 to 14; the later period renamed",
  pep: "peptide made a per-case add-on, never a general recommendation and never before refeed day 8",
  ta1: "Thymus Alpha-1 retired 2026-08-20 (Yannick's research and experience); Thymalin is the only thymus peptide",
  bridge: "taper bridge aligned to the T4-first doctrine (desiccated is the fallback)",
  link: "retired /weight-loss link replaced with the Metabolism Repair Plan",
  flood: "\"flood\" never used for T3",
  count: "head-count claim removed",
  // Fix round 1 (2026-11-05)
  depthOnce: "depth caveat kept once per post, at the main depth claim; this mention shortened to \"set with me\" (John: do not oversaturate)",
  course: "the 30-day course wording of posts 6 and 11 (a full course run to the temperature target, read at day 30, then weaned)",
  dz: "the house names: the defenses dip is the dead zone (refeed days 1 to 3), the whole period the consolidation window (refeed days 1 to 14); no new name",
  hcMove: "the healing-cycle sentence moved off a sign-off or a quote, into the part of the post that explains why the fast works",
};
// The two caption lines of the rebuild figure (posts 18 and 29).
const CAPTION_RULES = [
  {
    find: ">Thymus peptides are bridges. They support immune function</text>",
    replace: ">Thymus peptides are per-case add-ons, never before refeed day 8.</text>",
    why: `${W.pep} (figure caption)`,
  },
  {
    find: ">during cleanup and energy phases. They do not substitute for hGH.</text>",
    replace: ">They support immune function. They do not substitute for hGH.</text>",
    why: `${W.pep} (figure caption)`,
  },
];
// The cellular-resistance paragraph shared by Scorch 33 and DFC 202.
const FLOOD_FIND =
  "In my clinical experience, even when reverse T3 is not elevated, aggressively restoring T3 still fixes these patients. It is almost as if the cell membrane itself thickens, like a biofilm coating the cell wall, and you have to flood the system to push through it.";
const FLOOD_REPLACE =
  "In my clinical experience, even when reverse T3 is not elevated, restoring T3 still fixes these patients. It is almost as if the cell membrane itself thickens, like a biofilm coating the cell wall, and it takes a full 30-day T3 course to push through it: run to the temperature target, read at day 30, then weaned.";

const SCORCH_RULES = {
  "1 long-covid-recovery-guide": [
    {
      find: "For some severely ill patients a 5-day fast is not enough, and in Yannick's experience the best results then come from a 7-to-9-day fast, but only once five days is very comfortable. The deeper the fast, the more aggressive the immune reset.",
      replace: `For some severely ill patients a 5-day fast is not enough, and in my experience the best results then come from a 7-to-9-day fast, but only once five days is very comfortable. ${DEPTH.replace(".", ", and five days dry is the cap at home.")}`,
      why: `${W.depth}; ${W.voice}`,
    },
    {
      find: "The Scorch Protocol recommends T3 therapy for anyone undertaking the protocol. The reasoning is risk-reward: when used correctly with proper preparation and dose calibration, T3 has a low downside",
      replace: `${T3_WHO} For that person the 30-day course is a reboot, set case by case and started after refeed day 7. Used correctly, with proper preparation, T3 has a low downside`,
      why: W.t3,
    },
    {
      find: "opening of the caloric window required for Phase 3).\n\nT3 is not optional in the protocol because *the caloric window cannot open without it*.",
      replace: "opening of the caloric window required for Phase 3), and then it hands the job back to your own thyroid.\n\nFor that person, *the caloric window cannot open without it*.",
      why: W.t3,
    },
    { find: "Read the practical protocol: [Dry Fasting](/dry-fasting).", replace: `${HC}\n\nRead the practical protocol: [Dry Fasting](/dry-fasting).`, why: W.hc },
    { find: "- **Months 6-12 (consolidation)**:", replace: "- **Months 6-12 (banking the gains)**:", why: W.cons },
    {
      find: "Most patients reach significant functional recovery within 6-12 months. Complete recovery in severe long-duration cases can take 12-24 months including the neuroplasticity phase.",
      replace: "It is measured in months, not weeks. How many depends on how long someone has been ill and how deep the damage goes; severe, long-duration cases take the longest, including the neuroplasticity phase.",
      why: W.rate,
    },
  ],
  "3 dry-fasting-complete-guide": [
    {
      find: "Once five is very comfortable you can extend a little, and in my experience some people get their best results from seven to nine days: the deeper the fast, the more aggressive the immune reset, and the more it seems to clear the allergic and autoimmune layer that drives chronic illness.",
      replace: "Once five is very comfortable you can extend a little, and in my experience some people get their best results from seven to nine days. Deeper fasts go deeper and may bring results faster, and they seem to clear more of the allergic and autoimmune layer that drives chronic illness, but they demand a stricter refeed and more care; how far is set with me.",
      why: W.depth,
    },
    {
      find: "For this cohort, Yannick's experience is that the best results often come from 7-day to 9-day dry fasts, often more than one, once five days is very comfortable.",
      replace: "For this cohort, my experience is that the best results often come from 7-day to 9-day dry fasts, often more than one, once five days is very comfortable, set with me.",
      was: "For this cohort, my experience is that the best results often come from 7-day to 9-day dry fasts, often more than one, once five days is very comfortable, and always with the stricter refeed and extra care those fasts demand.",
      why: `${W.depthOnce}; ${W.voice}`,
    },
    {
      find: "Once you are very comfortable with it you can extend a little; some people get their best results from seven to nine days, and the deeper you go the more aggressive the immune reset.",
      replace: "Once you are very comfortable with it you can extend a little; some people get their best results from seven to nine days, set with me.",
      was: `Once you are very comfortable with it you can extend a little; some people get their best results from seven to nine days. ${DEPTH}`,
      why: W.depthOnce,
    },
    {
      find: "is one of the reasons the protocol caps most patients at 5-7 days.",
      replace: "is one of the reasons the protocol caps the fast at five days at home.",
      why: "\"most patients\" cap line aligned to the five-day home cap",
    },
    {
      find: "For the patient population that needs all four steps, every other approach falls short.",
      replace: `For the patient population that needs all four steps, every other approach falls short.\n\n${HC}`,
      why: W.hc,
    },
  ],
  "5 chronic-fatigue-syndrome-treatments-that-work": [
    {
      find: "The conservative estimate is approximately 2x speedup relative to natural unassisted recovery, with additional speedup possible with the full stack.",
      replace: "It shortens the road compared with unassisted recovery, and the full stack shortens it further, but I do not put a number on how much.",
      why: W.mult,
    },
    {
      find: "Most patients notice initial symptom reduction in weeks 1-4 of T3 therapy reaching therapeutic effect. Substantial improvement typically appears in months 3-6. Complete recovery in long-duration cases takes 18-24+ months.",
      replace: "The first changes usually come in the weeks after the refeed, once the metabolism is fed and warm again; how fast varies with how long someone has been ill, and long-duration cases take the longest.",
      why: W.rate,
    },
  ],
  "6 chronic-lyme-recovery-guide": [
    {
      find: "responds clinically to aggressive T3 flooding even when rT3 is not the primary issue.",
      replace: "responds clinically to a short, structured T3 course, set case by case, even when rT3 is not the primary issue.",
      why: W.flood,
    },
    {
      find: "a 5-day fast is sometimes not enough, and in Yannick's experience the best results then come from the 7-day to 9-day range, but only once five days is very comfortable. The protocol itself is capped at five.",
      replace: `a 5-day fast is sometimes not enough, and in my experience the best results then come from the 7-day to 9-day range, but only once five days is very comfortable. Those deeper fasts demand a stricter refeed and more care, and how far is set with me. The protocol itself is capped at five.\n\n${HC}`,
      why: `${W.depth}; ${W.voice}; ${W.hc}`,
    },
    {
      find: "T3 is not optional in this protocol. The caloric window for Phase 3 cannot open without it.",
      replace: `${T3_WHO.replace("does not lift.", "does not lift; for that person the caloric window for Phase 3 cannot open without it.")}`,
      why: W.t3,
    },
    { find: "- **Months 6-12** (consolidation): additional fasts", replace: "- **Months 6-12** (banking the gains): additional fasts", why: W.cons },
    {
      find: "The conservative estimate for total recovery time is approximately 2x faster than the natural unassisted timeline with T3 therapy alone, and potentially faster with the full protocol stack. For a patient ill for five years, this is approximately 18-24 months to substantial recovery.",
      replace: "Recovery comes faster than the natural unassisted timeline, and faster again with the full protocol stack, but I do not put a number on how much. For someone ill for five years, expect many months, not weeks.",
      why: `${W.mult}; ${W.rate}`,
    },
    {
      find: "- Anyone unable to commit to the full sequence, particularly the T3 + hGH layer; partial implementation",
      replace: "- Anyone unable to commit to the full sequence of fast, refeed and rebuild; partial implementation",
      why: W.t3,
    },
  ],
  "7 long-covid-brain-fog-mechanism": [
    { find: "The reason most patients recover is that neurons", replace: "The reason recovery is possible is that neurons", why: W.rate },
    { find: "- **Months 6-12** (consolidation): residual fog", replace: "- **Months 6-12** (banking the gains): residual fog", why: W.cons },
    { find: "Full return of capacity in the majority of cases.", replace: "The aim is a full return of capacity.", why: W.rate },
    {
      find: "Most patients notice meaningful improvement within 2-4 weeks of T3 reaching therapeutic effect. Substantial improvement typically takes 3-6 months. Complete resolution in severe long-duration cases can take 12-18 months.",
      replace: "In my experience the fog starts to lift once the metabolism is fed and warm again, in the weeks after the refeed, with the T3 course for those who need it. How fast varies with how long someone has been ill; severe, long-duration cases take the longest.",
      why: W.rate,
    },
  ],
  "8 long-covid-mcas-connection": [
    {
      find: "- **Months 12-24** (consolidation): substantial MCAS resolution in most patients, allowing",
      replace: "- **Months 12-24** (banking the gains): substantial MCAS resolution is the aim, allowing",
      why: `${W.cons}; ${W.rate}`,
    },
    {
      find: "T3 specifically is well-tolerated in most MCAS patients; some report transient reactivity",
      replace: "In my experience T3 is usually well tolerated in MCAS; some people report transient reactivity",
      why: W.rate,
    },
    {
      find: "Most patients on the Scorch Protocol are able to taper antihistamine and mast cell stabilizer use substantially or completely as the protocol progresses.",
      replace: "In my experience, people on the Scorch Protocol can usually taper antihistamine and mast cell stabilizer use substantially, sometimes completely, as the protocol progresses.",
      why: W.rate,
    },
  ],
  "9 me-cfs-recovery-guide": [
    {
      find: "Yannick's experience is that the best results often come from the 7-day to 9-day range, but only once five days is very comfortable.",
      replace: "my experience is that the best results often come from the 7-day to 9-day range, but only once five days is very comfortable; those deeper fasts demand a stricter refeed and more care, and how far is set with me.",
      why: `${W.depth}; ${W.voice}`,
    },
    {
      find: "one of the most direct mechanisms by which the viral burden is maintained.",
      replace: `one of the most direct mechanisms by which the viral burden is maintained.\n\n${HC}`,
      why: W.hc,
    },
    {
      find: "The conservative timeline of approximately 2x speedup relative to natural unassisted recovery still applies, but",
      replace: "The protocol still shortens the road compared with unassisted recovery, but",
      why: W.mult,
    },
    { find: "- **Months 6-12** (consolidation): full functional recovery in most cases", replace: "- **Months 6-12** (banking the gains): full functional recovery is the aim", why: `${W.cons}; ${W.rate}` },
    { find: "- **Months 9-18** (consolidation): full functional recovery typical", replace: "- **Months 9-18** (banking the gains): full functional recovery is the aim", why: `${W.cons}; ${W.rate}` },
    { find: "Most patients reach a maintenance state where", replace: "The aim is a maintenance state where", why: W.rate },
  ],
  "10 pots-after-covid-mechanism": [
    {
      find: "- **Months 6-12** (consolidation): substantial POTS resolution in most patients; orthostatic vitals normalize",
      replace: "- **Months 6-12** (banking the gains): substantial POTS resolution is the aim, with orthostatic vitals normalizing",
      why: `${W.cons}; ${W.rate}`,
    },
    {
      find: "After the fast, no; most patients see a net reduction in POTS symptoms 2-4 weeks post-fast.",
      replace: "After the fast, no; in my experience POTS symptoms usually ease in the weeks after the fast.",
      why: W.rate,
    },
  ],
  "11 t3-therapy-complete-guide": [
    {
      find: "**The \"biofilm-like\" cellular wall resistance.** Beyond the well-characterized mechanisms, severely chronically ill patients clinically respond to aggressive T3 flooding even when none of the above is the dominant explanation. The mechanism is not fully mapped by current science but appears to be a membrane-level resistance that requires cellular T3 supply to be elevated substantially above standard physiological levels to overcome.",
      replace: `**The resistance the labs cannot see.** Beyond the well-characterized mechanisms, some chronically ill people stay cold and exhausted even when none of the above is the dominant explanation. ${T3_WHO} For that person the 30-day course is a reboot: it brings the metabolism up to speed, lets the body use the calories, and then hands the job back to their own thyroid, set case by case.`,
      why: `${W.flood}; ${W.t3}`,
    },
    {
      find: "Start at a low dose (typically 12.5-25 mcg SR-T3 daily, split into morning and afternoon doses) and increase by 12.5-25 mcg every 3-5 days, tracking basal body temperature, resting heart rate, and symptom response at each step.",
      replace: "Start at a low dose of SR-T3, split into morning and afternoon doses, and step it up every few days, tracking basal body temperature, resting heart rate, and symptom response at each step. The starting dose and the size of each step are set case by case.",
      why: W.dose,
    },
    {
      find: "Different patients reach this at different doses. The typical range is 60-150 mcg SR-T3 per day, with some patients requiring up to 250 mcg.",
      replace: "Different patients reach this at different doses, which is why the dose is set case by case.",
      why: W.dose,
    },
    {
      find: "Taper by 12.5-25 mcg every 3-5 days. Many patients add a desiccated thyroid bridge (Armour Thyroid, NP Thyroid) during the taper to provide a gradual T4 source as the HPT axis reboots, smoothing the transition. Desiccated thyroid contains both T3 and T4 in physiologic ratios and is generally better tolerated than levothyroxine alone in this transition.",
      replace: "Taper in steps every few days, set case by case. Some people add a little T4 on top of the tapering T3 as a short bridge while the HPT axis reboots, smoothing the transition; desiccated thyroid (Armour Thyroid, NP Thyroid), which contains both T3 and T4, is the fallback when T4 is not an option. Which, and how much, is set case by case.",
      why: `${W.dose}; ${W.bridge}`,
    },
    { find: "Cardiac monitoring is recommended above 150 mcg/day.", replace: "Cardiac monitoring is recommended at higher doses.", why: W.dose },
    { find: "- Above 150 mcg/day: more frequent cardiovascular monitoring", replace: "- At higher doses: more frequent cardiovascular monitoring", why: W.dose },
    {
      find: "T3 therapy is Phase 2 of the four-phase Scorch Protocol recovery sequence:\n\n1. **Phase 1: Dry fasting** clears the viral and inflammatory load that suppressed the thyroid set-point in the first place\n2. **Phase 2: T3 therapy** restores cellular electricity and reopens the caloric window\n3. **Phase 3: Refeeding plus hGH** rebuilds what years of low energy depleted\n4. **Phase 4: Rotation** cycles back into dry fasting plus T3 maintenance\n\nT3 is not optional in this protocol because the caloric window for Phase 3 cannot open without it.",
      replace: `A Scorch cycle is a fast, a refeed, and then, for the person who needs it, the 30-day T3 course:\n\n1. **The dry fast** clears the viral and inflammatory load that suppressed the thyroid set-point in the first place\n2. **The refeed** brings food back slowly; refeed days 1 to 14 are the consolidation window\n3. **The 30-day T3 course** starts after refeed day 7, once the refeed has settled, and reopens the caloric window for the person who comes out of the refeed still cold\n4. **The next fast** comes seven days after the course ends; hGH is an add-on around the third cycle, only if the first two have not done enough\n\n${T3_WHO} For that person, the caloric window cannot open without it.`,
      why: `${W.t3}; the four-phase list (T3 before the refeed, hGH with it) replaced with the current cycle`,
    },
  ],
  "13 wilsons-temperature-syndrome-treatment": [
    {
      find: "Start at a low dose (typically 12.5-25 mcg SR-T3 twice daily) and increase by 12.5-25 mcg every 3-5 days, tracking basal body temperature daily.",
      replace: "Start at a low dose of SR-T3 twice daily and step it up every few days, tracking basal body temperature daily. The starting dose and the size of each step are set case by case.",
      why: W.dose,
    },
    {
      find: "Patients reach the temperature endpoint at different doses; the typical range is 60-150 mcg per day with some requiring up to 250 mcg.",
      replace: "Patients reach the temperature endpoint at different doses, which is why the dose is set case by case.",
      why: W.dose,
    },
    {
      find: "Taper by 12.5-25 mcg every 3-5 days. Many patients add a desiccated thyroid bridge (Armour Thyroid, NP Thyroid) during the taper to provide a gradual T4 source as the HPT axis reboots.",
      replace: "Taper in steps every few days, set case by case. Some people add a little T4 on top of the tapering T3 as a short bridge while the HPT axis reboots; desiccated thyroid (Armour Thyroid, NP Thyroid) is the fallback when T4 is not an option.",
      why: `${W.dose}; ${W.bridge}`,
    },
    {
      find: "Most Wilson's patients require multiple cycles for full restoration; the typical course is 2-4 cycles spaced 30-60 days apart.",
      replace: "Wilson's patients usually need multiple cycles for full restoration; how many, and how far apart, is set case by case.",
      why: W.rate,
    },
    {
      find: "Most patients require multiple cycles for full restoration. The conservative timeline is 2-3 cycles over 6-12 months for substantial recovery in classic Wilson's presentations.",
      replace: "Multiple cycles are usually needed for full restoration; how many varies with the case.",
      why: W.rate,
    },
    {
      find: "If basal body temperature does not respond to gradually escalating SR-T3 doses up to 150 mcg, the issue",
      replace: "If basal body temperature does not respond over the course, wean off rather than climb: the issue",
      why: `${W.dose}; the day-30 read (if it does little, wean off rather than climb)`,
    },
  ],
  "14 autophagy-science-explained": [
    {
      find: "it is one of the few clinically available mechanisms.",
      replace: `it is one of the few clinically available mechanisms.\n\n${HC}`,
      why: W.hc,
    },
  ],
  "15 composite-recovery-case-long-covid": [
    {
      find: "T3 begun in week 3 of month 2 at 12.5 mcg SR-T3 twice daily. Climbed by 12.5 mcg every 4 days over the following weeks.",
      replace: "T3 begun in week 3 of month 2 at a low dose of SR-T3 twice daily, climbing in small steps every few days over the following weeks.",
      why: W.dose,
    },
    { find: "By mid-month, at 75 mcg SR-T3 daily, basal body temperature climbing", replace: "By mid-month, basal body temperature climbing", why: W.dose },
    { find: "End of month 3: T3 dose at 100 mcg/day, basal body temperature averaging", replace: "End of month 3: basal body temperature averaging", why: W.dose },
    { find: "T3 dose reached 125 mcg/day, basal body temperature stabilized", replace: "T3 dose reached the level where basal body temperature stabilized", why: W.dose },
    {
      find: "T3 taper begun: 12.5 mcg reduction every 4 days. Desiccated thyroid bridge initiated at half-grain (30 mg) daily during the taper to smooth the HPT recovery.",
      replace: "T3 taper begun in small steps every few days. A desiccated thyroid bridge was added during the taper to smooth the HPT recovery.",
      why: W.dose,
    },
    { find: "hGH initiated at 1 IU subcutaneous in the evening.", replace: "hGH initiated at a low dose, subcutaneous in the evening.", why: W.dose },
    { find: "hGH dose increased to 2 IU.", replace: "hGH dose stepped up.", why: W.dose },
    {
      find: "T3 cycle initiated again at lower starting dose (25 mcg/day) and lower peak (75 mcg/day);",
      replace: "T3 cycle initiated again at a lower starting dose and a lower peak;",
      why: W.dose,
    },
    { find: "Second hGH cycle begun at 1.5 IU/day for 3 months.", replace: "Second hGH cycle begun for 3 months.", why: W.dose },
    {
      find: "- The specific medications and dosing differ; the T3 dose range (60-150 mcg) is what most patients require, but outliers exist",
      replace: "- The specific medications and dosing differ, and every dose is set case by case",
      why: `${W.dose}; ${W.rate}`,
    },
    { find: "## Months 10-12: Consolidation and Second hGH Cycle", replace: "## Months 10-12: Banking the Gains and a Second hGH Cycle", why: W.cons },
    { find: ">climb &#8594; peak 125 mcg</text>", replace: ">climb &#8594; peak hold</text>", why: `${W.dose} (figure label)` },
    { find: ">cycle 2 (75 mcg)</text>", replace: ">cycle 2 (lower)</text>", why: `${W.dose} (figure label)` },
    { find: ">hGH cycle 1 (1-2 IU)</text>", replace: ">hGH cycle 1</text>", why: `${W.dose} (figure label)` },
  ],
  "16 dry-fasting-vs-water-fasting": [
    {
      find: "some people get their best results from seven to nine days once five is very comfortable. Progression matters;",
      replace: `some people get their best results from seven to nine days once five is very comfortable. ${DEPTH} Progression matters;`,
      why: W.depth,
    },
    {
      find: "are accessible to the second pathway in ways they are not to the first.",
      replace: `are accessible to the second pathway in ways they are not to the first.\n\n${HC}`,
      why: W.hc,
    },
  ],
  "17 me-cfs-5-year-protocol-walkthrough": [
    { find: "## Days 60-90: First Short Fasts and Foundation Consolidation", replace: "## Days 60-90: First Short Fasts and a Firmer Foundation", why: W.cons },
    {
      find: "**Starting dose:** 12.5 mcg SR-T3 twice daily (morning and afternoon). Lower than the standard starting dose because",
      replace: "**Starting dose:** a low dose of SR-T3 twice daily (morning and afternoon), set case by case and lower than the usual start, because",
      why: W.dose,
    },
    { find: "**End of week 4:** T3 at 25-37.5 mcg/day, basal body temperature", replace: "**End of week 4:** basal body temperature", why: W.dose },
    {
      find: "- If temperature is flat after 2 weeks at a given dose, increase by 12.5-25 mcg",
      replace: "- If temperature is flat after 2 weeks at a given dose, step up by one small increment, set case by case",
      why: W.dose,
    },
    {
      find: "By end of week 8, the typical patient in this profile is at 60-100 mcg SR-T3 daily and basal body temperature has climbed from sub-96°F baseline to 96.8-97.4°F average.",
      replace: "By end of week 8, basal body temperature in this profile has usually climbed from a sub-96°F baseline to a 96.8-97.4°F average.",
      why: W.dose,
    },
    { find: "Most patients in this profile begin reducing antihistamine", replace: "Many people in this profile begin reducing antihistamine", why: W.rate },
    {
      find: "**Energy improvement.** Most patients in this profile experience first substantial energy improvement during weeks 5-8 of T3 therapy.",
      replace: "**Energy improvement.** In this profile the first substantial energy improvement usually comes during the T3 phase.",
      why: W.rate,
    },
    {
      find: "If basal body temperature does not respond to gradually escalating SR-T3 doses up to 150 mcg by week 10, the issue",
      replace: "If basal body temperature does not respond to a gradually escalating SR-T3 course, wean off rather than climb further: the issue",
      why: `${W.dose}; the day-30 read (wean off rather than climb)`,
    },
    { find: ">SR-T3 12.5 mcg</text>", replace: ">SR-T3, low dose</text>", why: `${W.dose} (figure label)` },
    { find: ">60-100 mcg by wk 8</text>", replace: ">dose set case by case</text>", why: `${W.dose} (figure label)` },
  ],
  "18 rebuild-phase-complete-guide": [
    { find: "which are 5-10x the doses used in the Scorch Protocol's rebuild phase.", replace: "which are many times the doses used in the Scorch Protocol's rebuild phase.", why: W.mult },
    {
      find: "Standard protocol range:\n\n- 1-2 IU per day for most patients, occasionally up to 4 IU for severely depleted long-duration cases",
      replace: "How it is used:\n\n- A low, physiologic dose set case by case, higher only for severely depleted long-duration cases",
      why: `${W.dose}; ${W.rate}`,
    },
    {
      find: "At physiologic replacement doses used in the Scorch Protocol (typically 1-2 IU/day), the safety profile is meaningfully different from the supraphysiologic bodybuilding doses (10-20+ IU/day) that produce",
      replace: "At the physiologic replacement doses used in the Scorch Protocol, the safety profile is meaningfully different from the supraphysiologic bodybuilding doses that produce",
      why: W.dose,
    },
    { find: "**Months 9-12 (consolidation):**", replace: "**Months 9-12 (banking the gains):**", why: W.cons },
    {
      find: "Thymus peptides are useful as bridges during the cleanup and energy phases of the protocol; they are not a substitute",
      replace: "Thymus peptides are per-case add-ons I set with people individually, never before refeed day 8; they are not a substitute",
      why: W.pep,
    },
    {
      find: ">Thymus peptides are bridges. They support immune function</text>",
      replace: ">Thymus peptides are per-case add-ons, never before refeed day 8.</text>",
      why: `${W.pep} (figure caption)`,
    },
    {
      find: ">during cleanup and energy phases. They do not substitute for hGH.</text>",
      replace: ">They support immune function. They do not substitute for hGH.</text>",
      why: `${W.pep} (figure caption)`,
    },
  ],
  "19 dry-fasting-for-weight-loss": [
    {
      find: "or the [weight loss page](/weight-loss) for the full clinical context.",
      replace: "or [the Metabolism Repair Plan](/refeed-for-bmr) for the full clinical context.",
      why: W.link,
    },
    { find: "**Late-rebuild and consolidation (months 6-12).**", replace: "**Late rebuild and banking the gains (months 6-12).**", why: W.cons },
  ],
  "20 is-dry-fasting-safe": [
    {
      find: "Most patients tolerate a 5-day dry fast with predictable discomfort and no actual warning signs.",
      replace: "A 5-day dry fast usually brings predictable discomfort and no actual warning signs.",
      why: W.rate,
    },
  ],
  "21 bpc-157-chronic-illness-recovery": [
    {
      find: "In the Scorch Protocol it is used as a structural rebuild adjunct, layered after dry fasting has cleared the underlying viral and inflammatory drivers of gut damage.",
      replace: `In the Scorch Protocol it is a per-case add-on, layered after dry fasting has cleared the underlying viral and inflammatory drivers of gut damage: BPC-157, Thymalin and the growth-hormone peptides are special cases I set with people individually, ${PER_CASE}.`,
      why: W.pep,
    },
    {
      find: "**Phase 2 (refeeding window): Initial BPC-157.** During the refeeding window after the fast, BPC-157 is introduced. The protected stem cell crypts are now producing",
      replace: "**Phase 2 (the refeed, from day 8 at the earliest): BPC-157 where the case calls for it.** For the people I set it with, BPC-157 comes in during the refeed, never before refeed day 8. By then the protected stem cell crypts are producing",
      why: W.pep,
    },
    {
      find: "The cellular ATP supply that allows tissue repair to happen at meaningful pace requires T3 therapy in the Scorch Protocol framework.",
      replace: "In the Scorch Protocol framework, the cellular ATP supply that allows tissue repair to happen at meaningful pace comes from restoring the metabolism: calories, warmth, and a T3 course for the person who stays cold after the refeed.",
      why: W.t3,
    },
    {
      find: "Thymus peptides (Thymalin, T" + ALPHA + "1) and BPC-157 provide immune-modulatory support during the cleanup and energy phases of the protocol; they do not produce",
      replace: "Thymalin and BPC-157 can support immune function and repair as per-case add-ons, never before refeed day 8; they do not produce",
      why: `${W.pep}; ${W.ta1}`,
    },
    {
      find: "Standard protocol dosing ranges:\n\n- **For gut-specific applications:** 250-500 mcg orally or subcutaneously,",
      replace: "The dose is set case by case. How it is used:\n\n- **For gut-specific applications:** orally or subcutaneously,",
      why: W.dose,
    },
    { find: "- **For systemic tissue repair:** 250 mcg subcutaneously near", replace: "- **For systemic tissue repair:** subcutaneously near", why: W.dose },
    { find: "- **For nerve repair:** 250 mcg subcutaneously, daily,", replace: "- **For nerve repair:** subcutaneously, daily,", why: W.dose },
    {
      find: "The standard sequencing is to begin BPC-157 during the refeeding window after the first dry fast, not before.",
      replace: "BPC-157 is a per-case add-on, not a standard step. For the people I set it with, it starts during the refeed after the first dry fast, never before refeed day 8.",
      why: W.pep,
    },
    {
      find: "These are different peptides with different mechanisms. Thymalin and Thymosin alpha-1 (T" + ALPHA + "1) are immune-modulatory peptides covered in [Thymalin and Thymus Peptides Explained](/blog/thymalin-thymus-peptides-explained). They complement BPC-157 in the protocol; they are not alternatives.",
      replace: "These are different peptides with different mechanisms, covered in [Thymalin and Thymus Peptides Explained](/blog/thymalin-thymus-peptides-explained). Thymalin is the only thymus peptide I still use, and like BPC-157 it is a per-case add-on, never before refeed day 8; I retired Thymosin alpha-1 because in my research and experience it can hypersensitize immune cells and backfire into new allergies. Thymalin and BPC-157 complement each other where a case calls for both; they are not alternatives.",
      why: `${W.pep}; ${W.ta1}`,
    },
    {
      find: "Yes, and the combination is what the rebuild phase of the Scorch Protocol uses.",
      replace: "Yes, where both are warranted: hGH comes in around the third cycle, only if the first two have not done enough, and BPC-157 is a per-case add-on.",
      why: W.pep,
    },
    {
      find: "If you are in the Scorch Protocol and have completed your first dry fast, BPC-157 in the refeeding window is the standard entry point.",
      replace: "BPC-157 is not a standard step. If you are in the Scorch Protocol and have completed your first dry fast, it is something I set case by case, never before refeed day 8.",
      why: W.pep,
    },
    {
      find: "BPC-157 fits into the rebuild phase of the Scorch Protocol, after the cleanup that dry fasting provides.",
      replace: "BPC-157 is a per-case add-on in the rebuild phase of the Scorch Protocol, after the cleanup that dry fasting provides and never before refeed day 8.",
      why: W.pep,
    },
  ],
  "23 dry-fasting-or-t3-first": [
    {
      find: "Slow-release T3 starting at 12.5 mcg twice daily. Climb by 12.5 mcg every 3-5 days based on temperature response.",
      replace: "Slow-release T3 starting at a low dose twice daily, climbing in small steps every few days based on temperature response; the dose is set case by case.",
      why: W.dose,
    },
    {
      find: "Dose climbs as temperature responds. Most patients reach 60-100 mcg/day during this window with temperature climbing 0.1-0.2°F per week.",
      replace: "Dose climbs as temperature responds, with temperature usually climbing 0.1-0.2°F per week.",
      why: `${W.dose}; ${W.rate}`,
    },
    {
      find: "Most patients see initial temperature movement within 2-4 weeks of T3 reaching therapeutic effect. Substantial temperature climb (from sub-96°F to above 96°F) typically takes 6-10 weeks of T3 therapy with appropriate dose titration.",
      replace: "Temperature usually starts to move within a few weeks of T3 reaching its working level. The substantial climb (from sub-96°F to above 96°F) takes longer, and how long varies with the person.",
      why: W.rate,
    },
    {
      find: "If basal body temperature does not respond to gradually escalating SR-T3 doses up to 150 mcg by week 10, the issue",
      replace: "If basal body temperature does not respond to a gradually escalating SR-T3 course, wean off rather than climb further: the issue",
      why: `${W.dose}; the day-30 read (wean off rather than climb)`,
    },
    { find: ">SR-T3 12.5 mcg</text>", replace: ">SR-T3, low dose</text>", why: `${W.dose} (figure label)` },
    { find: ">60-100 mcg by wk 8</text>", replace: ">dose set case by case</text>", why: `${W.dose} (figure label)` },
  ],
  "24 minnesota-starvation-experiment-chronic-illness": [
    {
      find: "T3 and hGH compress the rebuild timeline somewhat (conservatively 2x speedup, potentially more with full protocol stack) but do not eliminate the biological time required for tissue rebuild. The 9-12 month floor applies; with accelerants, the realistic timeline for severely chronically ill patients is 12-18 months for substantial rebuild.",
      replace: "T3 and hGH, where they are needed, compress the rebuild timeline somewhat but do not eliminate the biological time required for tissue rebuild. The 9-12 month floor applies, and for severely chronically ill patients the realistic timeline runs past it.",
      why: `${W.mult}; ${W.rate}`,
    },
  ],
  "25 scorch-protocol-decision-tree": [
    {
      find: "some in this cohort get their best results from 7-day or 9-day fasts once five days is very comfortable.",
      replace: "some in this cohort get their best results from 7-day or 9-day fasts once five days is very comfortable, with the stricter refeed and extra care those fasts demand.",
      why: W.depth,
    },
    { find: `>18 mo ${EN} 2 yrs</text>`, replace: ">18 mo to 2 yrs</text>", why: "dash in a figure label written as a range" },
    { find: `>weeks${EN}months</text>`, replace: ">weeks to months</text>", why: "dash in a figure label written as a range" },
  ],
  "27 why-hgh-rebuilds-thymus": [
    {
      find: "This is the central distinction underlying Yannick's framing: peptides are bridges and supports during the protocol.",
      replace: `This is the central distinction in how I use them: peptides are per-case add-ons I set with people individually, ${PER_CASE}.`,
      why: `${W.pep}; ${W.voice}`,
    },
    { find: "The energy restoration (T3) is necessary.", replace: "Restoring the metabolism is necessary, with a T3 course for the person who stays cold after the refeed.", why: W.t3 },
    {
      find: "### Can I take Thymalin instead of hGH?\n\nFor immune support during the protocol, yes.",
      replace: "### Can I take Thymalin instead of hGH?\n\nFor immune support, sometimes, as a per-case add-on I set with people individually, never before refeed day 8.",
      why: W.pep,
    },
    { find: "plus the protocol experience over hundreds of patients;", replace: "plus the protocol experience;", why: W.count },
  ],
  "28 refeeding-syndrome-after-dry-fasting": [
    { find: "during the refeed window. Most patients tolerate this well.", replace: "during the refeed window. It is usually well tolerated.", why: W.rate },
  ],
  "29 thymalin-thymus-peptides-explained": [
    {
      find: "They are useful in the cleanup and energy phases of the Scorch Protocol as bridges supporting immune function during a vulnerable window. They are not, however, the structural thymus regeneration they are sometimes marketed as.",
      replace: `In the Scorch Protocol, Thymalin is the only one I still use, and only as a per-case add-on I set with people individually, ${PER_CASE}. I retired T${ALPHA}1: in my research and experience it can hypersensitize immune cells and backfire into new allergies. Neither is the structural thymus regeneration they are sometimes marketed as.`,
      why: `${W.pep}; the "vulnerable window" label removed; ${W.ta1}`,
    },
    {
      find: "Thymus peptides do useful immune-modulatory work during the cleanup and energy phases of the protocol.",
      replace: "Thymus peptides can do useful immune-modulatory work as a per-case add-on, never before refeed day 8.",
      why: W.pep,
    },
    {
      removeBlock: ["<!-- svg:scorch-thymalin-02-protocol-bridge start -->", "<!-- svg:scorch-thymalin-02-protocol-bridge end -->"],
      why: "figure removed: Thymalin and T" + ALPHA + "1 drawn as a bridge across pre-fast, fast, T3 and refeed (\"vulnerable windows\") contradicts the per-case, day-8 rule and the T" + ALPHA + "1 retirement; a Thymalin-only redraw is a follow-up",
    },
    { find: "## Where Thymalin and T" + ALPHA + "1 Fit in the Scorch Protocol", replace: "## Where Thymalin Fits in the Scorch Protocol", why: W.ta1 },
    {
      find: "The protocol uses thymus peptides as bridges during specific windows:\n\n**Pre-fast and during fast (if appropriate).** For patients with significant immune compromise, Thymalin or T" + ALPHA + "1 in the weeks before and during the first extended dry fast can support immune function during the vulnerable window when the body is undergoing major cellular cleanup. This is supportive, not curative.\n\n**During T3 cycle.** Immune function is undergoing reorganization as cellular ATP supply restores. Thymus peptide support can smooth this transition.\n\n**During refeed and rebuild.** Peptides continue to support immune function while hGH (if appropriate for the patient) does the underlying structural rebuild.\n\n**For patients not using hGH.** Some patients have contraindications to hGH or choose not to use it. Thymus peptides provide the best available immune-modulatory support in this case, with the explicit understanding that the structural rebuild will be slower and less complete than the hGH-supported version.\n\nDosing varies by formulation and indication. Thymalin is typically administered intramuscularly at doses ranging from 5-30 mg per cycle (depending on the source preparation). T" + ALPHA + "1 is typically administered subcutaneously at 1.6 mg twice weekly for 4-8 week cycles. The compounding pharmacy and prescribing physician relationship matters substantially for both.",
      replace: "Thymalin is not a standard step. It is a per-case add-on I set with people individually, never a general recommendation:\n\n**Never before refeed day 8.** Refeed days 1 to 14 are the consolidation window. Where a case calls for Thymalin, it starts on refeed day 8 at the earliest, later in the refeed or in the rebuild.\n\n**During refeed and rebuild.** For the person who needs it, Thymalin supports immune function while hGH (if appropriate for the patient) does the underlying structural rebuild.\n\n**For patients not using hGH.** Some patients have contraindications to hGH or choose not to use it. Thymalin then provides the best available immune-modulatory support, with the explicit understanding that the structural rebuild will be slower and less complete than the hGH-supported version.\n\nThe dose varies by formulation and is set case by case. The compounding pharmacy and prescribing physician relationship matters substantially.",
      why: `${W.pep}; the pre-fast, fast and T3-cycle schedule and the "vulnerable window" label removed; ${W.dose}; ${W.ta1}`,
    },
    {
      find: "This is the version Yannick has been clear about in clinical practice: peptides are bridges and supports during the protocol.",
      replace: `This is the version I hold to in practice: peptides are per-case add-ons, ${PER_CASE}.`,
      why: `${W.pep}; ${W.voice}`,
    },
    {
      find: "For immune support during the protocol, Thymalin is a reasonable component. For structural thymic rebuild, no, the peptide does not produce that effect. If you have a contraindication to hGH, Thymalin and T" + ALPHA + "1 are the best available immune-modulatory adjuncts;",
      replace: "For immune support, sometimes, as a per-case add-on I set with people individually, never before refeed day 8. For structural thymic rebuild, no, the peptide does not produce that effect. If you have a contraindication to hGH, Thymalin is the best available immune-modulatory adjunct;",
      why: `${W.pep}; ${W.ta1}`,
    },
    {
      find: "Both have documented immune-modulatory effects. T" + ALPHA + "1 has more characterized Western clinical research and is approved for specific indications. Thymalin has longer history in Russian clinical practice. The choice often depends on availability, prescribing physician familiarity, and cost.",
      replace: "Both have documented immune-modulatory effects, and T" + ALPHA + "1 has more characterized Western clinical research and is approved for specific indications. I no longer use T" + ALPHA + "1: in my research and experience it can hypersensitize immune cells and backfire into new allergies instead of balancing the immune system. Thymalin, with its longer history in Russian clinical practice, is the only thymus peptide I use, and only per case.",
      why: `${W.pep}; ${W.ta1}`,
    },
    {
      find: "For chronic illness patients in the Scorch Protocol, thymus peptides fit into the cleanup and energy phases as immune-modulatory support. They do not substitute",
      replace: "In the Scorch Protocol, Thymalin is a per-case add-on for immune support, set with me and never before refeed day 8. It does not substitute",
      why: W.pep,
    },
    {
      find: "Thymalin and T" + ALPHA + "1 provide useful immune-modulatory support during chronic illness recovery. They are not the structural",
      replace: "Thymalin can provide useful immune-modulatory support during chronic illness recovery, as a per-case add-on; I no longer use T" + ALPHA + "1. Neither is the structural",
      why: `${W.pep}; ${W.ta1}`,
    },
    // Fix round 1: the rebuild figure's caption, as in post 18.
    ...CAPTION_RULES,
  ],
  "30 cortisol-off-switch-after-extended-fasting": [
    {
      find: "For most patients on the Scorch refeed stack, the visible symptoms (puffiness, blood pressure, anxiety) reduce substantially within 2-3 weeks of beginning the refeed. Full enzyme normalization to pre-fast baseline can take 4-12 weeks depending on individual variation and severity. Severely chronically ill patients with sustained inflammation may take longer.",
      replace: "In my experience, on the Scorch refeed stack the visible symptoms (puffiness, blood pressure, anxiety) usually ease within a few weeks of beginning the refeed. Full enzyme normalization to the pre-fast baseline takes longer and varies with the person and the severity; severely chronically ill people with sustained inflammation may take longer still.",
      why: W.rate,
    },
  ],
  "31 dry-fasting-autophagy-regeneration": [
    {
      find: "The longer, deeper fasts that the most entrenched cases sometimes need are done at specialized retreats",
      replace: "The longer, deeper fasts that the most entrenched cases sometimes need demand a stricter refeed and more care: they are done at specialized retreats",
      why: W.depth,
    },
    {
      find: "Skip a step or run them out of order and the body cannot use what you are giving it.",
      replace: `Skip a step or run them out of order and the body cannot use what you are giving it.\n\n${HC}`,
      why: W.hc,
    },
  ],
  "32 is-long-covid-me-cfs-reversible": [
    {
      find: "As the protocol has been refined, mandatory antivirals, a desiccated thyroid bridge on the comedown, sustained-release T3, peptides, that ratio has improved",
      replace: "As the protocol has been refined, with mandatory antivirals, a thyroid bridge on the comedown, sustained-release T3, and peptides where a case calls for them, that ratio has improved",
      why: `${W.pep}; ${W.bridge}`,
    },
    {
      find: "You clear the drivers, you turn the machinery back on, and then you feed the rebuild. In that order.",
      replace: `You clear the drivers, you turn the machinery back on, and then you feed the rebuild. In that order.\n\n${HC}`,
      why: W.hc,
    },
  ],
  "33 thyroid-labs-normal-but-still-hypothyroid": [
    // Fix round 1
    { find: FLOOD_FIND, replace: FLOOD_REPLACE, why: `${W.flood}; ${W.course}` },
  ],
  "43 chronic-lyme-after-antibiotics-what-to-try": [
    {
      find: "That sequencing, knowing what to do and when, is the entire protocol.",
      replace: `That sequencing, knowing what to do and when, is the entire protocol.\n\n${HC}`,
      why: W.hc,
    },
  ],
  "45 dry-fasting-spike-protein-long-covid": [
    {
      find: "The depth is the whole point, because depth is what reaches the virus.",
      replace: `The depth is the whole point, because depth is what reaches the virus.\n\n${HC}`,
      why: W.hc,
    },
    {
      find: "Here is why. The deeper you go, the more aggressive the immune reset, and the more it seems to clear the allergic and autoimmune layer that drives so much chronic illness.",
      replace: "Here is why. Deeper fasts go deeper and may bring results faster, and they seem to clear more of the allergic and autoimmune layer that drives so much chronic illness, but they demand a stricter refeed and more care; how far is set with me.",
      why: W.depth,
    },
    {
      find: "For these cases, some people get their best results from a seven-to-nine-day dry fast.",
      replace: "For these cases, some people get their best results from a seven-to-nine-day dry fast, set with me.",
      was: "For these cases, some people get their best results from a seven-to-nine-day dry fast, set with me and followed by a stricter refeed.",
      why: W.depthOnce,
    },
    {
      find: "The deeper, longer fasts that severe viral cases need are done at specialized retreats",
      replace: "The deeper, longer fasts that severe viral cases need are set with me and done at specialized retreats",
      was: "The deeper, longer fasts that severe viral cases need demand a stricter refeed and more care: they are done at specialized retreats",
      why: W.depthOnce,
    },
  ],
  "50 post-viral-fatigue-recovery-roadmap": [
    {
      find: "So the rebuild is measured in months of patient, sustained eating, supported by hGH and peptides that steer those incoming calories into tissue repair instead of fat storage.",
      replace: "So the rebuild is measured in months of patient, sustained eating, supported where it is needed by hGH, which steers those incoming calories into tissue repair instead of fat storage; peptides are per-case add-ons I set with people individually, never before refeed day 8.",
      why: W.pep,
    },
  ],
  "61 dry-fasting-vs-water-fasting-chronic-illness": [
    { find: "So that is the power. Now the honest cost.", replace: `${HC}\n\nSo that is the power. Now the honest cost.`, why: W.hc },
  ],
  "62 dry-fasting-vs-water-fasting-osmotic-stress": [
    {
      find: "I compare them head to head in [dry vs water fasting for chronic illness recovery](/blog/dry-fasting-vs-water-fasting-chronic-illness).",
      replace: `I compare them head to head in [dry vs water fasting for chronic illness recovery](/blog/dry-fasting-vs-water-fasting-chronic-illness).\n\n${HC}`,
      why: W.hc,
    },
  ],
};

// dryfastingclub.com: the same rules in Yannick's voice; links to the healing
// cycle page use the full URL. Older diary posts get dated update notes rather
// than rewritten history.
const DFC_DEPTH = "Deeper fasts demand a stricter refeed and more care, and how far you go is set with me.";
const W_ONE = "the retired 1-on-1 coaching offer removed or reworded";

const DFC_RULES = {
  "22 can-dry-fasting-cure-herpes": [
    {
      find: "eventually be ready to perform a deeper dry fast that can target the herpes-infected nerve cells.",
      replace: `eventually be ready to perform a deeper dry fast that can target the herpes-infected nerve cells. ${DFC_DEPTH}`,
      why: W.depth,
    },
  ],
  "23 dry-fasting-vs-water-fasting-is-dry-or-wet-better": [
    {
      find: "because it requires the body to build up a tolerance and for you to build up experience and knowledge.",
      replace: `because it requires the body to build up a tolerance and for you to build up experience and knowledge. ${DFC_DEPTH}`,
      why: W.depth,
    },
  ],
  "27 what-is-dry-fasting-is-it-safe-to-dry-fast": [
    {
      find: "But if you are planning to go into deeper healing and perform extended dry fasting then you need to prepare yourself more thoroughly.",
      replace: "But if you are planning to go into deeper healing and perform extended dry fasting then you need to prepare yourself more thoroughly and refeed more strictly; how far you go is set with me.",
      why: W.depth,
    },
  ],
  "28 my-3-day-dry-fasting-results-72-hour-dry-fast": [
    { find: "This guide will make it 10x easier and safer when you dry fast next.", replace: "This guide will make it much easier and safer when you dry fast next.", why: W.mult },
  ],
  "41 how-berberine-can-help-prepare-you-for-fasting": [
    { find: "that will make fasting 100x easier for most people.", replace: "that will make fasting much easier for most people.", why: W.mult },
  ],
  "46 episode-5-sauna-and-dehydration-while-fasting": [
    { find: "usually 3 " + EN + " 15-20minute sessions", replace: "usually three 15-20 minute sessions", why: "dash: a count, not a range" },
  ],
  "48 episode-7-weight-loss-and-fasting": [
    { find: "are way more effective for permanent weight loss, and about 100 times easier.", replace: "are way more effective for permanent weight loss, and far easier.", why: W.mult },
  ],
  "49 dry-fasting-club-8-wolfe-beginners-guide-to-dry-fasting-with-refeeding-schedule": [
    {
      find: "swear that you need to reach day 11 to truly rid yourself of the problem.",
      replace: "swear that you need to reach day 11 to truly rid yourself of the problem. Fasts that long go far past the five-day home cap; they demand a stricter refeed and more care, and how far you go is set with me.",
      why: W.depth,
    },
    {
      find: "you want to be able to reach past day 3 and the acidotic crisis, where deeper healing mechanisms are activated.",
      replace: "you want to be able to reach past day 3 and the acidotic crisis, where deeper healing mechanisms are activated; how far you go is set with me.",
      was: `you want to be able to reach past day 3 and the acidotic crisis, where deeper healing mechanisms are activated. ${DFC_DEPTH.replace(".", "; five days dry is the cap at home.")}`,
      why: `${W.depthOnce} (the full caveat sits at the day-11 claim just above)`,
    },
  ],
  "53 is-dry-fasting-dangerous-dangers-explained": [
    { find: "I would argue that dry fasting is 100x safer than performing riskier exercises", replace: "I would argue that dry fasting is far safer than performing riskier exercises", why: W.mult },
  ],
  "56 healing-long-covid-part-1": [
    { find: "Set up a one-on-one call with me to talk about this and possible strategies.", replace: "You can ask me about this, and about possible strategies, in [the members portal](https://members.scorchprotocol.com).", why: W_ONE },
    { find: "The deeper you go you unlock more powerful forms of it.", replace: `The deeper you go you unlock more powerful forms of it. ${DFC_DEPTH}`, why: W.depth },
    { find: "it's very common to take a 12mg ivermectin tablet every single month", replace: "it's very common to take an ivermectin tablet every month", why: W.dose },
  ],
  "64 how-to-refeed-after-a-dry-fast-filonov-protocol-variation": [
    { find: "please consider subscribing to the website, and setting up a one-on-one chat.", replace: "please consider subscribing to the website.", why: W_ONE },
  ],
  "69 why-i-do-not-agree-with-filonovs-refeed-protocol": [
    {
      find: "work in progress - set up a one-on-one to discuss this and let me guide you through your healing journey.",
      replace: "Work in progress. You can ask me about this in [the members portal](https://members.scorchprotocol.com).",
      why: W_ONE,
    },
  ],
  "73 dry-fasting-benefits-explained": [
    // Fix round 1: the first pass put the sentence after the NHS quote; it now
    // closes the "How Does Dry Fasting Work?" explanation.
    { find: `\n\n${HC_FULL}\n\n## The Benefits of Dry Fasting`, replace: "\n\n## The Benefits of Dry Fasting", why: W.hcMove },
    {
      find: "It may also improve **blood sugar levels, blood pressure, and insulin sensitivity**.",
      replace: `It may also improve **blood sugar levels, blood pressure, and insulin sensitivity**.\n\n${HC_FULL}`,
      why: W.hcMove,
    },
  ],
  "78 healing-long-covid-yannicks-story-part-2": [
    { find: "I ordered about 200x 12mg ivermectin tablets and 500x hydroxychloroquine.", replace: "I ordered about 200 ivermectin tablets and 500 hydroxychloroquine tablets.", why: W.dose },
    { find: "I took a 12mg pill, followed by another one a few hours later.", replace: "I took a pill, followed by another one a few hours later.", why: W.dose },
    { find: "Ivermectin 12mg once per day", replace: "Ivermectin once per day (dose set case by case)", why: W.dose },
  ],
  "81 ibs-sibo-fasting-and-the-migrating-motor-complex": [
    { find: "It includes ivermectin at 0.2mg/kg body weight for a week,", replace: "It includes ivermectin for a week,", why: W.dose },
  ],
  "87 dry-fasting-motivations-hippocrates-of-kos": [
    {
      find: "you'll get access to some hidden content, and if you subscribe to the yearly subscription you can request to get a link to 1-on-1 communication with me to guide and chat throughout the fasting. Maybe you just need a friend to help you push through.",
      replace: "you'll get access to some hidden content.",
      why: W_ONE,
    },
  ],
  "88 long-covid-july-2023-update": [
    { find: "receive access to a lot more hidden content as well as an opportunity to chat with me one on one.", replace: "receive access to a lot more hidden content.", why: W_ONE },
  ],
  "91 how-much-muscle-will-you-lose-on-a-dry-fast": [
    { find: "you will be conserving at least 2x the amount of muscle.", replace: "you will be conserving far more muscle.", why: W.mult },
  ],
  "93 how-long-can-you-safely-do-a-dry-fast": [
    {
      find: "In this case 5 days of dry fasting into 5 days of refeeding and then back into a 7-day dry fast.",
      replace: "In this case 5 days of dry fasting into 5 days of refeeding and then back into a 7-day dry fast. (Update, November 2026: I no longer go back into a fast inside the first two weeks of a refeed. Refeed days 1 to 14 are the consolidation window, and a new fast is a new stress landing in it.)",
      why: "a second fast inside refeed days 1 to 14 conflicts with the consolidation window; dated update note added",
    },
  ],
  "100 dry-fasting-stress-manging-viral-reactivations-for-long-covid": [
    { find: "it's 100 times more important to manage them when it comes to post-viral diseases.", replace: "it's far more important to manage them when it comes to post-viral diseases.", why: W.mult },
  ],
  "102 sunrise-to-sunset-dry-fasting-why-it-works": [
    {
      find: "If you're looking for miraculous healing benefits, you will need to dive much deeper into dry fasting. Good luck.",
      replace: `If you're looking for miraculous healing benefits, you will need to dive much deeper into dry fasting. ${DFC_DEPTH} Good luck.`,
      why: W.depth,
    },
    // Fix round 1: the first pass put the sentence after "Good luck."; it now
    // follows the paragraph on why sunrise-to-sunset fasting works.
    { find: `\n\n${HC_FULL}\n\n## The Spiritual Significance of Ramadan Fasting`, replace: "\n\n## The Spiritual Significance of Ramadan Fasting", why: W.hcMove },
    { find: "which eventually get turned into ketones).", replace: `which eventually get turned into ketones).\n\n${HC_FULL}`, why: W.hcMove },
  ],
  "104 everything-you-wanted-to-know-about-cortisol-adrenal-fatigue-and-dry-fasting": [
    {
      find: "however, this is also why the 'vulnerability window' is so critical (read about it more in the scorch protocol).",
      replace: "however, this is also why the dead zone after the fast, refeed days 1 to 3, is so critical (read about it more in the scorch protocol).",
      was: "however, this is also why the consolidation window after the fast, refeed days 1 to 14, is so critical (read about it more in the scorch protocol).",
      why: `"vulnerability window" label replaced: the next paragraph's 72-hour immune dip is the dead zone; ${W.dz}`,
    },
  ],
  "113 do-you-absorb-water-through-the-skin-during-fasting": [
    // Fix round 1: the first pass also gave this sentence the caveat; the
    // full caveat sits at the nine-day comparison a paragraph later, so this
    // one is taken back out.
    {
      find: "leading to discussions about 7 to 9-day dry fasts as more effective for ultimate healing, with the stricter refeed they demand.",
      replace: "leading to discussions about 7 to 9-day dry fasts as more effective for ultimate healing.",
      why: `${W.depthOnce}: the first-pass caveat here taken out, the full one kept a paragraph later`,
    },
    {
      find: "and how quickly you want to progress while maintaining safety.",
      replace: `and how quickly you want to progress while maintaining safety. ${DFC_DEPTH.replace(".", "; five days dry is the cap at home.")}`,
      why: W.depth,
    },
  ],
  "120 the-science-behind-how-a-1-day-dry-fast-is-equivalent-to-a-3-day-water-fast": [
    {
      find: "The longer ones are for speeding up healing and addressing deeper issues that may require things like acidotic crises.",
      replace: "The longer ones are for speeding up healing and addressing deeper issues that may require things like acidotic crises; they demand a stricter refeed and more care, and how far you go is set with me.",
      why: W.depth,
    },
    // Fix round 1: the first pass put the sentence after "Good luck!"; it now
    // follows the paragraph on why dehydration and no food work together.
    { find: `\n\n${HC_FULL}\n\n## Some quick Questions that come to mind`, replace: "\n\n## Some quick Questions that come to mind", why: W.hcMove },
    { find: "is one of the leading factors in its autophagy? Crazy.", replace: `is one of the leading factors in its autophagy? Crazy.\n\n${HC_FULL}`, why: W.hcMove },
  ],
  "122 simplified-scorch-protocol-2024": [
    // Fix round 1 (the new outcome-percent term): a success rate in Yannick's voice, and a rate in the figure note.
    {
      find: "compressed everything into a protocol that should work for 95% of people.",
      replace: "compressed everything into a single protocol.",
      why: "outcome rate removed (95% of people); outcome numbers are retired",
    },
    {
      find: "Most people need 3-6 cycles over 12-18 months.</text>",
      replace: "How many cycles is set case by case.</text>",
      why: `${W.rate} (figure note)`,
    },
  ],
  "127 can-dry-fasting-too-much-exhaust-stem-cells-comprehensive-guide": [
    { find: "## What would you eat after dry fasting to maximize stem cell benefit?", replace: "## What would you eat after dry fasting to keep what the fast opened?", why: "\"maximize stem cell\" replaced (the refeed page wording, B3)" },
    { find: "we want to limit stress to maximize stem cell regeneration.", replace: "we want to limit stress so the refeed keeps what the fast opened.", why: "\"maximize stem cell\" replaced (the refeed page wording, B3)" },
    {
      find: "Yes, the deeper you go into the fast the more the stem cell regeneration occurs.",
      replace: "Yes, the deeper you go into the fast the more the stem cell regeneration occurs, and the stricter the refeed it demands.",
      why: W.depth,
    },
  ],
  "133 the-science-behind-how-dry-fasting-reboots-your-autophagy-and-fixes-your-cellular-health": [
    {
      find: "This is one of the reasons you want to reach the acidotic crisis to get deeper healing.",
      replace: `This is one of the reasons you want to reach the acidotic crisis to get deeper healing. ${DFC_DEPTH}`,
      why: W.depth,
    },
    { find: "dry fasting is 100x more potent and (IMO) safer.", replace: "dry fasting is far more potent and (IMO) safer.", why: W.mult },
    // Fix round 1: the first pass put the sentence after the closing paragraph;
    // it now follows the figure that lays out the three steps in order.
    {
      find: `\n\n${HC_FULL}\n\n## What does this mean for healing and hypertonic conditions?`,
      replace: "\n\n## What does this mean for healing and hypertonic conditions?",
      why: W.hcMove,
    },
    { find: "<!-- svg:dfc-09-renovation-light end -->", replace: `<!-- svg:dfc-09-renovation-light end -->\n\n${HC_FULL}`, why: W.hcMove },
  ],
  "136 hippocrates-kykeon-eleusinian-mysteries-psilocybin-and-dry-fasting-insights": [
    // Fix round 1: "low-defense window" was a new name; the dip is the dead
    // zone (refeed days 1 to 3) inside the consolidation window (days 1 to 14),
    // and the figure, which draws the dip during the fast, says what it is.
    {
      find: "In my protocols, and especially the scorch protocol I talk a lot about the 'vulnerability window'. In this case, we see this window in action.",
      replace: "In my protocols, and especially the scorch protocol, I talk a lot about the dead zone: refeed days 1 to 3, when the immune defenses are at their lowest, at the start of the consolidation window (refeed days 1 to 14). In this case, we see that dip in action.",
      was: "In my protocols, and especially the scorch protocol, I talk a lot about the consolidation window, refeed days 1 to 14, when the defenses the fast built are down. In this case, we see that low-defense state in action.",
      why: `"vulnerability window" label replaced; ${W.dz}`,
    },
    {
      find: "The vulnerability window: immune state during a dry fast</title>",
      replace: "When defenses dip: immune state during a dry fast</title>",
      was: "The low-defense window: immune state during a dry fast</title>",
      why: `"vulnerability window" label replaced (figure title); ${W.dz}`,
    },
    {
      find: "lymphocytes drop, creating a vulnerability window. Exiting the fast during this window while still ill stops the autophagy mechanism and leaves the immune system suppressed, causing relapse.",
      replace: "lymphocytes drop and defenses dip. Exiting the fast during this dip while still ill stops the autophagy mechanism and carries the suppressed immune system into the dead zone, refeed days 1 to 3, causing relapse.",
      was: "lymphocytes drop, creating a low-defense window. Exiting the fast during this window while still ill stops the autophagy mechanism and leaves the immune system suppressed, causing relapse.",
      why: `"vulnerability window" label replaced (figure description); ${W.dz}`,
    },
    { find: ">THE VULNERABILITY WINDOW</text>", replace: ">WHEN DEFENSES DIP</text>", was: ">THE LOW-DEFENSE WINDOW</text>", why: `"vulnerability window" label replaced (figure label); ${W.dz}` },
    { find: ">VULNERABILITY WINDOW</text>", replace: ">DEFENSES DIP</text>", was: ">LOW-DEFENSE WINDOW</text>", why: `"vulnerability window" label replaced (figure label); ${W.dz}` },
  ],
  "150 healing-long-covid-update-may-2024": [
    {
      find: "You either throw years and many mistakes at it or buckle down from the start.",
      replace: "You either throw years and many mistakes at it or buckle down from the start. (Update, November 2026: deeper fasts demand a stricter refeed and more care; how far you go is set with me.)",
      why: W.depth,
    },
  ],
  "155 why-you-need-to-watch-out-for-polyunsaturated-fats-with-dry-fasting-and-health": [
    { find: "I might start trialing a way to improve my one-on-one chats", replace: "I might start trialing a way to improve my consultation chats", why: W_ONE },
  ],
  "157 why-exercise-makes-long-covid-and-cfs-symptoms-worse-and-how-to-fix-it-2": [
    {
      find: "Supplementing during the vulnerability window between exercise-induced IgG suppression and immune recovery is crucial.",
      replace: "Supplementing in the gap after exercise, while IgG is suppressed and before the immune system recovers, is crucial.",
      was: "Supplementing during the low-defense window between exercise-induced IgG suppression and immune recovery is crucial.",
      why: "\"vulnerability window\" label replaced with a plain description (an exercise dip, not the refeed, so neither house name; no new name)",
    },
    {
      find: "nutritional support, and careful monitoring of immune function/pacing.",
      replace: `nutritional support, and careful monitoring of immune function/pacing. ${DFC_DEPTH}`,
      why: W.depth,
    },
  ],
  "170 the-heart-thyroid-connection-through-dry-fasting": [
    { find: "can flood a depleted system and worsen symptoms.</desc>", replace: "can overwhelm a depleted system and worsen symptoms.</desc>", why: `${W.flood} (figure description)` },
    // Fix round 1 (the widened peptide list found Thymulin recommended to all readers).
    {
      find: "I've played and researched a bit with peptides such as thymulin. I recommend you look into it. If you work with me, we can go deeper on this too.",
      replace: "I've played and researched a bit with peptides such as thymulin. I recommend you look into it. If you work with me, we can go deeper on this too. (Update, November 2026: Thymalin is the only thymus peptide I use now, and only as a per-case add-on I set with people individually, never before refeed day 8.)",
      why: `${W.pep}; Thymalin is the only thymus peptide (dated update note on the older recommendation)`,
    },
  ],
  "174 cancer-risk-and-dry-fasting-what-are-mutagens": [
    {
      find: "My rule now is a strict mutagen holiday for refeed days 1 to 14.",
      replace: "My rule now: refeed days 1 to 14 are the consolidation window, and the mutagen rules run the whole of it.",
      why: "\"mutagen holiday\" label replaced; the rules stay (the consolidation window)",
    },
    {
      find: "This correlates to my 72 hour vulnerability window theory as a MINIMUM.",
      replace: "This correlates with my theory that the immune dip after a fast, the dead zone of refeed days 1 to 3, lasts at least 72 hours.",
      was: "This correlates with my theory that the low-defense window after a fast lasts at least 72 hours.",
      why: `"vulnerability window" label replaced; ${W.dz}`,
    },
  ],
  "175 long-covid-dry-fasting-update-dec-2024": [
    {
      find: "You've probably heard of things like BPC157, but it's important to remember that fasting triggers HSCs and lots of growth.",
      replace: "You've probably heard of things like BPC157, but it's important to remember that fasting triggers HSCs and lots of growth. (Update, November 2026: Thymalin is the only thymus peptide I use now. It and BPC-157 are per-case add-ons I set with people individually, never a general recommendation, and never before refeed day 8. I no longer use thymosin alpha 1: in my research and experience it can hypersensitize immune cells and backfire into new allergies.)",
      was: "You've probably heard of things like BPC157, but it's important to remember that fasting triggers HSCs and lots of growth. (Update, November 2026: thymus peptides and BPC-157 are now per-case add-ons I set with people individually, never a general recommendation, and never before refeed day 8. I no longer use thymosin alpha 1: in my research and experience it can hypersensitize immune cells and backfire into new allergies.)",
      why: `${W.pep}; ${W.ta1} (fix round 1: the note names Thymalin, since the section recommends Thymulin)`,
    },
  ],
  "176 dry-fasting-club-2025-dos-and-donts": [
    { find: "after discussing dry fasting with hundreds of people.", replace: "after discussing dry fasting with a great many people.", why: W.count },
  ],
  "181 whats-really-going-on-with-long-covid": [
    { find: ">Hits 97% of Long COVID patients</text>", replace: ">Very common in Long COVID</text>", why: "unsourced 97% in a figure label said qualitatively" },
  ],
  "182 may-2025-update-chronic-illness-conquered": [
    { find: "it's been spent helping people in one-on-ones more than anything else.", replace: "it's been spent helping people in consultations more than anything else.", why: W_ONE },
    // Fix round 1
    {
      find: "Thymus peptides/organ (T-Cell maturation/immunity),",
      replace: "Thymus peptides/organ (T-Cell maturation/immunity; the peptides per case, set with me),",
      why: W.pep,
    },
  ],
  "183 start-of-the-dry-fasting-club-2-0": [
    // Fix round 1
    {
      find: "However, it also means that 9-day dry fasts come with their own set of complications and problems that are not currently adequately addressed.",
      replace: `However, it also means that 9-day dry fasts come with their own set of complications and problems that are not currently adequately addressed. ${DFC_DEPTH.replace("Deeper fasts", "Deeper fasts like these")}`,
      why: W.depth,
    },
  ],
  "185 is-growth-hormone-release-stronger-with-dry-fasting-compared-to-water-fasting": [
    {
      find: "My most common recommendation for GH supplementation when completing the Scorch Protocol is to work up to 2 IU/day.",
      replace: "When GH supplementation is warranted on the Scorch Protocol, I work up to the dose slowly and set it case by case.",
      why: W.dose,
    },
    {
      find: "and finally, you explore growth hormone and other peptide options to complete the process.",
      replace: "and finally, where the first cycles have not done enough, you explore growth hormone, with peptides as per-case add-ons, to complete the process.",
      why: W.pep,
    },
  ],
  "189 you-need-carbs-restoring-glucose-oxidation": [
    { find: "**Aspirin (500" + EN + "1000 mg/day)**", replace: "**Aspirin (dose set case by case)**", why: W.dose },
    { find: "with 1 g aspirin + Pyrucet on waking", replace: "with aspirin + Pyrucet on waking", why: W.dose },
    { find: "**Methylene Blue (0.5" + EN + "2 mg/kg)**", replace: "**Methylene Blue (dose set case by case)**", why: W.dose },
    { find: "**Aspirin**" + NBSP + "(325" + EN + "1000 mg daily once a day or with each meal if needed)", replace: "**Aspirin**" + NBSP + "(dose set case by case, once a day or with each meal if needed)", why: W.dose },
    { find: "**Aspirin (500" + EN + "1000 mg in the morning)**", replace: "**Aspirin (in the morning, dose set case by case)**", why: W.dose },
    {
      find: "**Aspirin " + EM + " 325" + EN + "1000 mg/day or per meal if needed.**" + NBSP + "In many studies, the researches gave diabetic patients 4g of aspirin a day to improve insulin sensitivity. There is even a study where they gave type 1 diabetic men 8-9g of aspirin a day and 2 men were able to completely stop their insulin shots.",
      replace: "**Aspirin, dose set case by case, daily or per meal if needed.**" + NBSP + "In studies, researchers gave diabetic patients high doses of aspirin to improve insulin sensitivity, and in one study a few type 1 diabetic men on very high doses were able to stop their insulin shots.",
      why: W.dose,
    },
    { find: "**Methylene Blue " + EM + " 0.5" + EN + "2 mg/kg/day (optional)**", replace: "**Methylene Blue, dose set case by case (optional)**", why: W.dose },
    { find: "1 g Aspirin + dose of Pyrucet", replace: "Aspirin + a dose of Pyrucet", why: W.dose },
    { find: "Use a higher aspirin dose (1-2g) with or just before the meal.", replace: "Use a higher aspirin dose, set case by case, with or just before the meal.", why: W.dose },
    { find: "Cycle methylene blue (1" + EN + "2 mg/kg) for a week", replace: "Cycle methylene blue (dose set case by case) for a week", why: W.dose },
    { find: "1 g aspirin + Pyrucet on waking = eliminates", replace: "Aspirin + Pyrucet on waking = eliminates", why: W.dose },
    { find: "+ Aspirin (325mg morning).</text>", replace: "+ Aspirin (morning).</text>", why: `${W.dose} (figure label)` },
    { find: "Aspirin (325 mg morning).", replace: "Aspirin (morning, dose set case by case).", why: W.dose },
    { find: "add 1 g aspirin + Pyrucet on waking", replace: "add aspirin + Pyrucet on waking", why: W.dose },
    { find: "Optional Methylene Blue (1 mg/kg) if tolerated.", replace: "Optional Methylene Blue (dose set case by case) if tolerated.", why: W.dose },
    { find: ">325-1000mg/day. Inhibits lipolysis,", replace: ">Dose set case by case. Inhibits lipolysis,", why: `${W.dose} (figure label)` },
  ],
  "193 the-data-behind-fatigue-brain-fog-insomnia-dry-fasting-and-the-scorch-protocol": [
    {
      find: "Only one (1) patient did not experience a significant improvement after T3 therapy (97% did). I did not monitor them under clinical settings,",
      replace: "The people who reached the T3 course were the ones who most often described a real change. For those who did not, I did not monitor them under clinical settings,",
      was: "Nearly everyone who reached T3 therapy reported a significant improvement. For the few who did not, I did not monitor them under clinical settings,",
      why: "the retired 97% removed: who responds, not how many (fix round 1: \"nearly everyone\" restated the rate in words)",
    },
    {
      find: "Strategies for continuation include peptide therapy, human growth hormone, and additional T3 therapy, ensuring it is slow-release.",
      replace: "Strategies for continuation include additional T3 therapy (slow-release), human growth hormone around the third cycle if the first two have not done enough, and peptides as per-case add-ons I set with people individually, never before refeed day 8.",
      why: W.pep,
    },
    {
      find: "Most participants improve significantly here. Phase 3 is T3 thyroid therapy for those who need a further push. 97% of participants who reached Phase 3 experienced significant improvement.</desc>",
      replace: "Many improve significantly here. Phase 3 is T3 thyroid therapy for those who stay cold and exhausted after the refeed, and they reported strong improvement.</desc>",
      why: "the retired 97% and a rate said qualitatively (figure description)",
    },
    { find: ">97%</text>", replace: ">Strong</text>", why: "the retired 97% said qualitatively (figure label)" },
    { find: ">significant improvement</text>", replace: ">improvement</text>", why: "the retired 97% said qualitatively (figure label)" },
    { find: ">Most see dramatic gains.</text>", replace: ">Many see dramatic gains.</text>", why: "rate said qualitatively (figure label)" },
    { find: "<!-- Key stat: 97% -->", replace: "<!-- Key stat -->", why: "the retired 97% removed from the figure's source comment" },
  ],
  "194 refeed-scorch-protocol-advanced": [
    // Fix round 1 (the widened peptide list): a thymus peptide from refeed day 7, and the retired Thymosin Alpha-1.
    {
      find: "-   Thymosin Alpha-1 or Thymulin peptides (if available)",
      replace: "-   Thymalin, only where your case calls for it: a per-case add-on set with me, never before refeed day 8 (I no longer use Thymosin Alpha-1)",
      why: `${W.pep}; ${W.ta1}`,
    },
    { find: ">5" + EN + "10 mcg<", replace: ">Low, set case by case<", why: `${W.dose} (T3 table)` },
    { find: ">10" + EN + "15 mcg<", replace: ">Small step up, set case by case<", why: `${W.dose} (T3 table)` },
    { find: ">15" + EN + "25 mcg<", replace: ">Further small steps, set case by case<", why: `${W.dose} (T3 table)` },
    { find: ">81" + EN + "325 mg + 300", replace: ">Aspirin dose set case by case + 300", why: `${W.dose} (supplement table)` },
  ],
  "197 a-sample-meeting-with-yannick-a-i-overview-scorch-protocol": [
    // Fix round 1: a verbatim quote stays; a dated note follows it.
    {
      find: "\n\nThey described T3 therapy as:",
      replace: "\n\n(Update, November 2026: not everyone needs T3; it is the reboot for the person still cold and exhausted after the refeed, set case by case.)\n\nThey described T3 therapy as:",
      why: `${W.t3} (dated update note after the verbatim "recommend it to everybody" quote)`,
    },
  ],
  "202 cellular-hypothyroidism-and-t3-therapy": [
    // Fix round 1
    { find: FLOOD_FIND, replace: FLOOD_REPLACE, why: `${W.flood}; ${W.course}` },
  ],
  "203 dry-fasting-autophagy-and-regeneration": [
    {
      find: "The longer, deeper fasts that the most entrenched cases sometimes need belong at specialized retreats",
      replace: "The longer, deeper fasts that the most entrenched cases sometimes need demand a stricter refeed and more care: they belong at specialized retreats",
      why: W.depth,
    },
    {
      find: "Run the steps out of order, or stop at the fast, and the body cannot use what you gave it.\n:::",
      replace: `Run the steps out of order, or stop at the fast, and the body cannot use what you gave it.\n:::\n\n${HC_FULL}`,
      why: W.hc,
    },
  ],
  "204 is-chronic-illness-reversible": [
    {
      find: "and metabolomic work showing the whole system locked into a hypometabolic \"cell danger response\" (Naviaux 2016).",
      replace: "and metabolomic work showing the whole system locked into a hypometabolic, defensive state (a 2016 metabolomics study of ME/CFS).",
      why: "Naviaux and the cell danger response are not named in blog posts",
    },
    {
      find: "As the protocol has been refined, mandatory antivirals, a desiccated thyroid bridge on the comedown, sustained-release T3, peptides like BPC-157 and thymalin, that ratio has improved",
      replace: "As the protocol has been refined, with mandatory antivirals, a thyroid bridge on the comedown, sustained-release T3, and peptides like BPC-157 and Thymalin where a case calls for them, that ratio has improved",
      why: `${W.pep}; ${W.bridge}`,
    },
    { find: "That is the whole logic.\n\n## The honest shape of recovery", replace: `That is the whole logic.\n\n${HC_FULL}\n\n## The honest shape of recovery`, why: W.hc },
  ],
  "209 dry-fasting-for-women": [
    // Fix round 1 (the widened T3-for-everyone pattern: a link sat between the words).
    {
      find: "This is why the [T3 and the growth hormone rebuild layers](/dry-fasting-autophagy-and-regeneration) are not optional add-ons for a woman. They are often the main event, and the fast is what opens the window for them.",
      replace: "This is why the [T3 and the growth hormone rebuild layers](/dry-fasting-autophagy-and-regeneration) matter so much for a woman who needs them, and the fast is what opens the window for them. T3 is for the woman who comes out of the refeed still cold and exhausted, set case by case; hGH enters around the third cycle, when two were not enough.",
      why: `${W.t3}; hGH around the third cycle`,
    },
  ],
};

// Dashes the fixer would read wrongly on dryfastingclub.com, fixed by hand
// (applied after the content rules above, before the fixer).
const W_DASH = "dash replaced by hand (the fixer's reading did not fit)";
const DFC_DASH_RULES = {
  "18 hard-dry-fast-and-soft-dry-fast-which-one-is-better": [
    { find: "only 3 days without water.”* " + EN + " Everyone in the world", replace: "only 3 days without water.”* (everyone in the world)", why: W_DASH },
  ],
  "29 what-is-the-acidotic-crisis-in-dry-fasting-and-water-fasting": [
    { find: "Blood sugar levels can be elevated. " + EN + " the onset of diabetes.", replace: "Blood sugar levels can be elevated, which can mean the onset of diabetes.", why: W_DASH },
  ],
  "43 episode-2-introduction-to-refeeding": [
    {
      find: "Think of it as hypertonic " + EN + " too little water, hypotonic " + EN + " too much water, and isotonic " + EN + " just right.",
      replace: "Think of it as hypertonic: too little water; hypotonic: too much water; and isotonic: just right.",
      why: W_DASH,
    },
  ],
  "44 episode-3-how-dry-fasting-healed-my-long-covid": [
    { find: "3 days on " + EN + " 3 days off", replace: "3 days on, 3 days off", why: W_DASH },
  ],
  "64 how-to-refeed-after-a-dry-fast-filonov-protocol-variation": [
    {
      find: "If you feel discomfort during or after eating " + EN + " stomach pain, dry mouth, or reluctance to keep eating it " + EN + " stop eating this food.",
      replace: "If you feel discomfort during or after eating (stomach pain, dry mouth, or reluctance to keep eating it), stop eating this food.",
      why: W_DASH,
    },
  ],
  "87 dry-fasting-motivations-hippocrates-of-kos": [
    { find: "and foretell the future " + EM + " must mediate these things,", replace: "and foretell the future; must mediate these things,", why: W_DASH },
  ],
  "93 how-long-can-you-safely-do-a-dry-fast": [
    { find: "(1 day) " + EN + " eat for 48 hours", replace: "(1 day), then eat for 48 hours", why: W_DASH },
    { find: "(2 days) " + EN + " eat for 72 hours", replace: "(2 days), then eat for 72 hours", why: W_DASH },
    { find: "(3 days) " + EN + " eat for 96 hours", replace: "(3 days), then eat for 96 hours", why: W_DASH },
    { find: "(4 days) " + EN + " eat for 120 hours", replace: "(4 days), then eat for 120 hours", why: W_DASH },
    { find: "(5 days) " + EN + " withdrawal from dry fasting", replace: "(5 days), then withdrawal from dry fasting", why: W_DASH },
  ],
  "104 everything-you-wanted-to-know-about-cortisol-adrenal-fatigue-and-dry-fasting": [
    { find: "expired CO2 " + EN + " incorporated O2", replace: "expired CO2 minus incorporated O2", why: "dash: a minus sign in a quoted abstract" },
  ],
  "133 the-science-behind-how-dry-fasting-reboots-your-autophagy-and-fixes-your-cellular-health": [
    { find: "expired CO2 " + EN + " incorporated O2", replace: "expired CO2 minus incorporated O2", why: "dash: a minus sign in a quoted abstract" },
  ],
  "135 the-science-behind-how-a-5-day-dry-fast-is-safe-for-healthy-individuals": [
    { find: "expired CO2 " + EN + " incorporated O2", replace: "expired CO2 minus incorporated O2", why: "dash: a minus sign in a quoted abstract" },
  ],
  "150 healing-long-covid-update-may-2024": [
    { find: "gives you access to protocols " + EN + " Which I promise", replace: "gives you access to protocols, which I promise", why: W_DASH },
  ],
  "154 improve-your-dry-fasting-refeed-with-a-cgm-continuous-glucose-monitor-and-a-note-about-hrv": [
    {
      find: "track cellular resistance " + EN + " the topic I recently talked about in another blog post " + EN + " And therefore don't sleep on it.",
      replace: "track cellular resistance (the topic I recently talked about in another blog post), and therefore don't sleep on it.",
      why: W_DASH,
    },
    {
      find: "are more powerful " + EN + " but let's keep that between us because this is still " + EN + " The Dry Fasting Club ;)",
      replace: "are more powerful, but let's keep that between us because this is still The Dry Fasting Club ;)",
      why: W_DASH,
    },
  ],
  "156 gallstones-and-dry-fasting-how-to-heal-the-gallbladder": [
    {
      find: "It's the most powerful form of healing " + EN + " It is a MIRACLE MAKER " + EN + " but it should never be taken lightly.",
      replace: "It's the most powerful form of healing. It is a MIRACLE MAKER, but it should never be taken lightly.",
      why: W_DASH,
    },
  ],
  "168 miro-board-scorch-and-general-update": [
    {
      find: "changed their lives for the better " + EN + " This really motivates me to keep going " + EN + " however I'm also still",
      replace: "changed their lives for the better. This really motivates me to keep going, however I'm also still",
      why: W_DASH,
    },
  ],
  "169 the-counter-argument-to-the-fasting-lifestyle": [
    { find: "most of the magic happens " + EN + " Just remember", replace: "most of the magic happens. Just remember", why: W_DASH },
  ],
  "170 the-heart-thyroid-connection-through-dry-fasting": [
    {
      find: "intermittent fasting " + EM + "&nbsp;an effective tool for losing weight and improving metabolic health " + EM + " can disrupt your thyroid.",
      replace: "intermittent fasting, an effective tool for losing weight and improving metabolic health, can disrupt your thyroid.",
      why: W_DASH,
    },
  ],
  "174 cancer-risk-and-dry-fasting-what-are-mutagens": [
    {
      find: "While not all mutations are harmful" + EM + "some are neutral, and a few can even be beneficial" + EM + "certain mutations",
      replace: "While not all mutations are harmful (some are neutral, and a few can even be beneficial), certain mutations",
      why: W_DASH,
    },
  ],
  "189 you-need-carbs-restoring-glucose-oxidation": [
    { find: "**Afternoon**" + EN + "Evening: heavier", replace: "**Afternoon to evening**: heavier", why: W_DASH },
  ],
  "194 refeed-scorch-protocol-advanced": [
    { find: "Food + ½" + EN + "1 tsp KCl", replace: "Food + ½ to 1 tsp KCl", why: W_DASH },
  ],
  "209 dry-fasting-for-women": [
    {
      find: "luteal Nurture Phase " + EM + " progesterone is high and cortisol-sensitive " + EM + " do not dry fast.",
      replace: "luteal Nurture Phase: progesterone is high and cortisol-sensitive, so do not dry fast.",
      why: W_DASH,
    },
  ],
  "164 review-of-the-most-popular-strategies-for-healing-long-covid-and-autoimmune-diseases-in-2024": [
    // Fix round 1: the fixer's comma made a comma splice.
    {
      find: "nearly as good as a long dry fast" + EM + "when I talk about this",
      replace: "nearly as good as a long dry fast. When I talk about this",
      was: "nearly as good as a long dry fast, when I talk about this",
      why: W_DASH,
    },
  ],
  "210 dry-fasting-and-medications": [
    { find: "flag three things for each one " + EM + " whether your kidneys", replace: "flag three things for each one: whether your kidneys", why: W_DASH },
  ],
};

function expand(table) {
  const out = [];
  for (const [key, list] of Object.entries(table)) {
    const sp = key.indexOf(" ");
    const id = Number(key.slice(0, sp));
    const slug = key.slice(sp + 1);
    for (const rule of list) out.push({ id, slug, ...rule });
  }
  return out;
}
const RULES = { scorch: expand(SCORCH_RULES), dfc: expand(DFC_RULES).concat(expand(DFC_DASH_RULES)) };

// ─── Engine ────────────────────────────────────────────────────
function countOf(body, find) {
  return body.split(find).length - 1;
}

// Apply a post's rules in order, then the dash fixer. `loose` (the markdown
// mirror) applies a rule wherever its text occurs and skips it otherwise.
function transform(body, rules, { loose = false } = {}) {
  const changes = [];
  const problems = [];
  for (const rule of rules) {
    if (rule.removeBlock) {
      const [startMark, endMark] = rule.removeBlock;
      const s = body.indexOf(startMark);
      const e = body.indexOf(endMark);
      if (s === -1 && e === -1) continue; // already removed
      if (s === -1 || e === -1 || e < s || countOf(body, startMark) !== 1) {
        if (!loose) problems.push(`block not found once: ${startMark}`);
        continue;
      }
      const end = e + endMark.length;
      changes.push({ why: rule.why, before: context(body, s, end - s).slice(0, 220) + "...", after: "(figure removed)" });
      body = body.slice(0, s).replace(/\s+$/, "") + "\n\n" + body.slice(end).replace(/^\s+/, "");
      continue;
    }
    // Revised in fix round 1: `was` holds the text the first pass put in. Where
    // that text is still in the body, it is replaced by the revised text; a
    // replay from the pre-sweep backup goes straight from `find` to `replace`.
    const old = rule.was && !body.includes(rule.replace) ? [].concat(rule.was).find((w) => body.includes(w)) : null;
    if (old) {
      const at = body.indexOf(old);
      const before = context(body, at, old.length);
      body = body.split(old).join(rule.replace);
      changes.push({ why: `${rule.why} (revised in fix round 1)`, before, after: context(body, at, rule.replace.length) });
      continue;
    }
    const want = rule.count ?? 1;
    const have = countOf(body, rule.find);
    // Already applied: the `find` text is gone and the replacement is in place,
    // or, for a rule that appends a sentence after its `find`, the whole
    // replacement is already there (so a re-run never appends twice).
    if (rule.replace && rule.replace.includes(rule.find) ? body.includes(rule.replace) : have === 0 && rule.replace && body.includes(rule.replace)) continue;
    if (loose ? have === 0 : have !== want) {
      if (!loose) problems.push(`expected ${want} match(es), found ${have}: ${JSON.stringify(rule.find.slice(0, 90))}`);
      continue;
    }
    const at = body.indexOf(rule.find);
    const before = context(body, at, rule.find.length);
    body = body.split(rule.find).join(rule.replace);
    changes.push({ why: rule.why, before, after: context(body, at, rule.replace.length) });
  }
  const dashes = fixDashes(body);
  return { body: dashes.body, changes, dashChanges: dashes.changes, problems };
}

// ─── Markdown mirror (scorch only) ─────────────────────────────
function mirrorMarkdown(slug, rules) {
  const file = join(CONTENT_DIR, `${slug}.md`);
  if (SITE !== "scorch" || !existsSync(file)) return null;
  const raw = readFileSync(file, "utf-8");
  const m = raw.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n)([\s\S]*)$/);
  if (!m) return { file, error: "no frontmatter" };
  const crlf = m[2].includes("\r\n");
  const body = crlf ? m[2].replace(/\r\n/g, "\n") : m[2];
  const res = transform(body, rules, { loose: true });
  const newBody = crlf ? res.body.replace(/\n/g, "\r\n") : res.body;
  return { file, changed: newBody !== m[2], text: m[1] + newBody, res };
}

// ─── Main ──────────────────────────────────────────────────────
const { default: postgres } = await import("postgres");
const sql = FROM_JSON
  ? Object.assign(
      // A stand-in for the two read queries when scanning a JSON dump.
      async () =>
        JSON.parse(readFileSync(resolve(FROM_JSON), "utf-8"))
          .filter((p) => p.status === "published" && (!ONLY_SLUG || p.slug === ONLY_SLUG))
          .sort((a, b) => a.id - b.id),
      { end: async () => {} },
    )
  : postgres(databaseUrl, { ssl: "require" });

try {
  const posts = ONLY_SLUG
    ? await sql`SELECT id, slug, title, content, updated_at FROM blog_posts WHERE status = 'published' AND slug = ${ONLY_SLUG} ORDER BY id`
    : await sql`SELECT id, slug, title, content, updated_at FROM blog_posts WHERE status = 'published' ORDER BY id`;

  if (MODE === "scan") {
    const totals = {};
    let postsWithHits = 0;
    console.log(`\n=== CDR blog sweep: scan (${SITE}, ${posts.length} published rows) ===\n`);
    for (const post of posts) {
      const hits = scanPost(post);
      if (hits.length === 0) continue;
      postsWithHits++;
      console.log(`## ${post.id} ${post.slug}`);
      for (const h of hits) {
        const key = `${h.term} [${h.where}]`;
        totals[key] = (totals[key] ?? 0) + 1;
        console.log(`  - ${h.term} [${h.where}]${h.caveat ? ` (${h.caveat})` : ""} @${h.idx} "${h.match}"`);
        console.log(`    ...${h.context}...`);
      }
      console.log("");
    }
    console.log(`=== ${postsWithHits} of ${posts.length} posts with hits ===`);
    for (const [k, n] of Object.entries(totals).sort()) console.log(`  ${k}: ${n}`);
  } else {
    const rules = RULES[SITE].filter((r) => !ONLY_SLUG || r.slug === ONLY_SLUG);
    const known = new Map(posts.map((p) => [p.id, p.slug]));
    for (const r of rules) {
      if (known.get(r.id) !== r.slug && !ONLY_SLUG) console.log(`  WARNING: rule for ${r.id} ${r.slug} matches no published row`);
    }
    console.log(`\n=== CDR blog sweep: ${MODE === "apply" ? "APPLY" : "dry run"} (${SITE}, ${rules.length} rules, ${posts.length} published rows) ===\n`);
    let changed = 0;
    let skipped = 0;
    let dashTotal = 0;
    let mdChanged = 0;
    for (const post of posts) {
      const postRules = rules.filter((r) => r.id === post.id);
      if (postRules.some((r) => r.slug !== post.slug)) throw new Error(`rules for id ${post.id} name another slug`);
      const res = transform(post.content, postRules);
      if (res.problems.length) {
        skipped++;
        console.log(`  SKIP ${post.id} ${post.slug}: ${res.problems.join("; ")}`);
        continue;
      }
      if (res.body === post.content) continue;
      if (MODE === "apply") {
        const outcome = await sql.begin(async (tx) => {
          const rows = await tx`SELECT content FROM blog_posts WHERE id = ${post.id} AND slug = ${post.slug} FOR UPDATE`;
          if (rows.length !== 1 || rows[0].content !== post.content) return "row changed since it was read";
          const upd = await tx`UPDATE blog_posts SET content = ${res.body}, updated_at = NOW() WHERE id = ${post.id} AND slug = ${post.slug}`;
          if (upd.count !== 1) throw new Error(`update of ${post.id} ${post.slug} touched ${upd.count} rows`);
          return null;
        });
        if (outcome) {
          skipped++;
          console.log(`  SKIP ${post.id} ${post.slug}: ${outcome}`);
          continue;
        }
      }
      changed++;
      dashTotal += res.dashChanges.length;
      console.log(`## ${post.id} ${post.slug}: ${res.changes.length} rule change(s), ${res.dashChanges.length} dash fix(es)${MODE === "apply" ? " APPLIED" : ""}`);
      for (const ch of res.changes) {
        console.log(`  - ${ch.why}`);
        console.log(`    before: ...${ch.before}...`);
        console.log(`    after:  ...${ch.after}...`);
      }
      for (const ch of res.dashChanges) {
        console.log(`  ~ dash: ...${ch.before}...`);
        console.log(`       => ...${ch.after}...`);
      }
      const md = mirrorMarkdown(post.slug, postRules);
      if (md) {
        if (md.error) console.log(`  md: ${md.file}: ${md.error}`);
        else if (md.changed) {
          mdChanged++;
          if (MODE === "apply") writeFileSync(md.file, md.text);
          console.log(`  md: content/blog/${post.slug}.md ${MODE === "apply" ? "written" : "would change"} (${md.res.changes.length} rule change(s), ${md.res.dashChanges.length} dash fix(es))`);
        }
      }
      console.log("");
    }
    console.log(`=== ${MODE === "apply" ? "Applied" : "Would change"}: ${changed} post(s), ${dashTotal} dash fix(es), ${mdChanged} markdown source(s); skipped: ${skipped} ===`);
  }
} finally {
  await sql.end();
}
