#!/usr/bin/env node
// Public-text scan: the retired numbers, doses, dashes and the healing-cycle naming rule.
//
// Parses every page.tsx under src/app/(main), src/app/faq and src/app/(pages) with the
// TypeScript compiler, pulls the text a reader (or a search engine) can see, in render
// order with source line numbers, and reports every hit for the term list below. Text
// runs inside one block element are joined (so "over <strong>100</strong>" is caught),
// HTML entities are decoded (so &mdash; counts as a dash), and each text item carries a
// kind: jsx, attr, string, jsonld, metadata, citation, reference-note, link, plus a
// "hidden" flag for blocks wrapped in `false && (...)`.
//
// Exit 1 on any hit outside the allowed cases; exit 0 when clean.
//
// Usage:
//   node scripts/scan-public-text.mjs                 scan and report
//   node scripts/scan-public-text.mjs --verbose       also list every excluded match
//   node scripts/scan-public-text.mjs --dump <part>   print the extracted text of every
//                                                     page whose path contains <part>

import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const APP_ROOT = fileURLToPath(new URL("..", import.meta.url));
const SCAN_DIRS = ["src/app/(main)", "src/app/faq", "src/app/(pages)"];

// ---------------------------------------------------------------------------
// The term list (Task 12 brief) and its exceptions (controller additions).
// ---------------------------------------------------------------------------

const HEALING_CYCLE = /^src\/app\/\(main\)\/healing-cycle\/page\.tsx$/;
const RESEARCH_PAGE = /^src\/app\/\(pages\)\/research\/page\.tsx$/;
const VIRAL_PAGE = /^src\/app\/\(main\)\/viral-reactivation\/page\.tsx$/;

// Citation strings (ReferencesSection `citation`, the research page's title/authors/source)
// carry volume and page numbers such as "2020;42:101082"; they are not doses or ratios.
const NOT_IN_CITATIONS = {
  when: (h) => h.kind === "citation",
  reason: "inside a reference citation: volume and page numbers, not a dose or ratio",
};

// Every regex is global; case rules follow the term (IU is case-sensitive).
const TERMS = [
  { term: "\u2014 (em dash)", re: /\u2014/g },
  { term: "\u2013 (en dash)", re: /\u2013/g },
  { term: "97%", re: /(?<![\d.,])97\s?(?:%|percent\b)/gi },
  { term: "141", re: /(?<![\d.,])141(?![\d]|[.,]\d)/g },
  { term: "117", re: /(?<![\d.,])117(?![\d]|[.,]\d)/g },
  { term: "over 100", re: /\bover 100(?![\d]|[.,]\d)/gi },
  { term: "1-on-1", re: /\b1[\s-]on[\s-]1\b/gi },
  { term: "one-on-one", re: /\bone[\s-]on[\s-]one\b/gi },
  { term: "worked directly with", re: /\bworked directly with\b/gi },
  { term: "most participants", re: /\bmost participants\b/gi },
  { term: "most patients", re: /\bmost patients\b/gi },
  { term: "10 times", re: /(?<![\d.,])10 times\b/gi },
  { term: "100 times", re: /(?<![\d.,])100 times\b/gi },
  { term: "2x", re: /(?<![\w.,])2[x\u00D7](?!\w)/gi },
  { term: "flood", re: /flood/gi },
  { term: "2:1", re: /(?<![\d.])2:1(?!\d)/g, exclude: [NOT_IN_CITATIONS] },
  // Units are matched with letter-only lookarounds so "200mcg" and "5000IU" are caught.
  { term: "mcg", re: /(?<![a-z])(?:mcg|\u00B5g|\u03BCg)(?![a-z])/gi, exclude: [NOT_IN_CITATIONS] },
  { term: "IU", re: /(?<![A-Za-z])IUs?(?![A-Za-z])/g, exclude: [NOT_IN_CITATIONS] },
  { term: "mg/day", re: /(?<![a-z])mg\s?\/\s?day\b/gi, exclude: [NOT_IN_CITATIONS] },
  { term: "Naviaux", re: /naviaux/gi },
  { term: "cell danger", re: /cell danger/gi },
  { term: "maximize stem cell", re: /maximi[sz]e stem cell/gi },
  {
    term: "Epstein",
    re: /epstein/gi,
    exclude: [
      {
        when: (h) => /^epstein[\s\u2010\u2011-]?barr/i.test(h.text.slice(h.index, h.index + 14)),
        reason: "the Epstein-Barr virus name",
      },
    ],
  },
  { term: "Gaza", re: /\bgaza\b/gi },
  { term: "progress photos", re: /\bprogress photos?\b/gi },
  { term: "random-thoughts", re: /random-thoughts/gi, links: true },
  { term: "weight-loss", re: /weight-loss/gi, links: true },
  // B1: the consolidation window is the one name for refeed days 1 to 14.
  { term: "vulnerability window", re: /vulnerability window/gi },
  { term: "mutagen holiday", re: /mutagen holiday/gi },
];

// Hits that are reported but do not fail the scan, each with its reason.
const ALLOW = [
  {
    term: "Naviaux",
    file: HEALING_CYCLE,
    reason: "decision A1: the healing-cycle page names the model and its author",
  },
  {
    term: "cell danger",
    file: HEALING_CYCLE,
    reason: "decision A1: the healing-cycle page names the cell danger response",
  },
  {
    term: "Naviaux",
    file: RESEARCH_PAGE,
    reason: "research trust page: a reference list that may cite the paper (reported, not failed)",
  },
  {
    term: "cell danger",
    file: RESEARCH_PAGE,
    reason: "research trust page: a reference list that may cite the paper (reported, not failed)",
  },
  {
    term: "weight-loss",
    file: /^src\/app\/(?:\(main\)\/t3-therapy|\(pages\)\/research)\/page\.tsx$/,
    when: (h) => /weight-loss-induced/i.test(h.text.slice(h.index, h.index + 20)) && h.kind !== "link",
    reason: "the Rosenbaum 2018 paper title (\"weight-loss-induced\"), not a link",
  },
  {
    term: "IU",
    file: /^src\/app\/\(main\)\/t3-therapy\/page\.tsx$/,
    when: (h) => /vitamin d/i.test(h.text.slice(Math.max(0, h.index - 80), h.index)),
    reason: "a vitamin D figure: vitamin D is not on the no-dose list (Task 10 ruling)",
  },
  {
    term: "mcg",
    file: /^src\/app\/\(main\)\/genetic-polymorphisms\/page\.tsx$/,
    when: (h) => /selenium/i.test(h.text.slice(Math.max(0, h.index - 40), h.index + 40)),
    reason: "a selenium figure: selenium is not on the no-dose list (the vitamin D ruling)",
  },
  {
    term: "over 100",
    file: /^src\/app\/\(main\)\/t3-therapy\/page\.tsx$/,
    when: (h) => /^over 100 (?:beats per minute|bpm)/i.test(h.text.slice(h.index, h.index + 30)),
    reason: "the T3 heart-rate rule (resting heart rate over 100: stop increasing), a stop rule, not an outcome number",
  },
  {
    term: "vulnerability window",
    file: VIRAL_PAGE,
    when: (h) => /what I used to call the vulnerability window/i.test(h.text.slice(Math.max(0, h.index - 30), h.index + 30)),
    reason: "the one bridging mention on the Viral page (decision B1)",
  },
];

// ---------------------------------------------------------------------------
// Extraction
// ---------------------------------------------------------------------------

// Inline elements do not break a block's text run; everything else (p, li, h2, div,
// custom components) starts a new block.
const INLINE_TAGS = new Set([
  "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn", "em", "i", "kbd",
  "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var",
  "wbr", "Link",
]);

// Attribute and property names that never hold prose, anywhere.
const SKIP_ALWAYS = new Set([
  "className", "style", "key", "id", "rel", "target", "viewBox", "xmlns", "strokeWidth",
  "strokeLinecap", "strokeLinejoin", "aria-hidden", "tabIndex", "htmlFor", "referrerPolicy",
  "frameBorder", "scrolling", "allow", "allowFullScreen", "allowTransparency", "sandbox",
  "crossOrigin", "autoPlay", "muted", "loop", "playsInline", "controls", "preload",
]);
// Names that hold no prose as attributes of intrinsic (lower-case) tags, but may hold prose
// as component props or object properties (a JSON-LD `name`, a citation's `source`).
const SKIP_ON_INTRINSIC = new Set([
  "type", "name", "width", "height", "d", "fill", "stroke", "points", "source", "x", "y",
  "cx", "cy", "r", "rx", "ry", "transform", "role", "loading", "sizes", "method", "lang",
  "dir", "media", "as", "decoding", "fontSize", "fontWeight", "textAnchor", "opacity", "slot",
]);

const LINK_NAMES = /^(?:href|src|url|path|canonical|slug|poster|action|[a-z]+(?:Src|Url|Href|Poster))$/;
const CITATION_FIELDS = new Set(["citation", "title", "authors", "source", "journal", "doi", "pmid"]);

const ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00A0", mdash: "\u2014",
  ndash: "\u2013", rsquo: "\u2019", lsquo: "\u2018", ldquo: "\u201C", rdquo: "\u201D",
  hellip: "\u2026", times: "\u00D7", middot: "\u00B7", deg: "\u00B0", rarr: "\u2192",
  larr: "\u2190", uarr: "\u2191", darr: "\u2193", bull: "\u2022", copy: "\u00A9",
  trade: "\u2122", reg: "\u00AE", minus: "\u2212", le: "\u2264", ge: "\u2265",
  plusmn: "\u00B1", micro: "\u00B5", frac12: "\u00BD", frac14: "\u00BC", frac34: "\u00BE",
  shy: "\u00AD", laquo: "\u00AB", raquo: "\u00BB", sect: "\u00A7", para: "\u00B6",
};

/** Decode HTML entities, keeping a source position for every output character. */
function decodeEntities(chars, pos) {
  const outC = [];
  const outP = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "&") {
      let j = i + 1;
      while (j < chars.length && j - i <= 10 && chars[j] !== ";" && chars[j] !== "&") j++;
      if (chars[j] === ";") {
        const name = chars.slice(i + 1, j).join("");
        let decoded = null;
        if (/^#\d+$/.test(name)) decoded = String.fromCodePoint(Number(name.slice(1)));
        else if (/^#x[0-9a-f]+$/i.test(name)) decoded = String.fromCodePoint(parseInt(name.slice(2), 16));
        else if (Object.prototype.hasOwnProperty.call(ENTITIES, name)) decoded = ENTITIES[name];
        if (decoded !== null) {
          for (const c of decoded) {
            outC.push(c);
            outP.push(pos[i]);
          }
          i = j;
          continue;
        }
      }
    }
    outC.push(chars[i]);
    outP.push(pos[i]);
  }
  return { chars: outC, pos: outP };
}

/** Collapse whitespace runs to one space (JSX rendering), keeping positions; trim ends. */
function collapse(chars, pos) {
  const outC = [];
  const outP = [];
  let inWs = false;
  for (let i = 0; i < chars.length; i++) {
    if (/\s/.test(chars[i])) {
      if (!inWs) {
        outC.push(" ");
        outP.push(pos[i]);
        inWs = true;
      }
    } else {
      outC.push(chars[i]);
      outP.push(pos[i]);
      inWs = false;
    }
  }
  let s = 0;
  let e = outC.length;
  while (s < e && outC[s] === " ") s++;
  while (e > s && outC[e - 1] === " ") e--;
  return { text: outC.slice(s, e).join(""), pos: outP.slice(s, e) };
}

function listPages() {
  const out = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name === "page.tsx") out.push(p);
    }
  };
  for (const d of SCAN_DIRS) walk(join(APP_ROOT, d));
  return out.sort();
}

function propName(nameNode, sf) {
  if (ts.isIdentifier(nameNode) || ts.isStringLiteral(nameNode) || ts.isNumericLiteral(nameNode)) return nameNode.text;
  return nameNode.getText(sf);
}

function extract(absPath) {
  const src = readFileSync(absPath, "utf8");
  const sf = ts.createSourceFile(absPath, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const items = [];

  // Top-level declarations, so `refs={x}` and `data={x}` can be followed to their values.
  const topDecls = new Map();
  for (const st of sf.statements) {
    if (ts.isVariableStatement(st)) {
      for (const d of st.declarationList.declarations) {
        if (ts.isIdentifier(d.name)) topDecls.set(d.name.text, d);
      }
    }
  }
  const declRole = new Map();
  const markRoles = (node) => {
    if (ts.isJsxAttribute(node) && node.initializer && ts.isJsxExpression(node.initializer)) {
      const tag = node.parent.parent.tagName.getText(sf);
      const attr = node.name.getText(sf);
      const e = node.initializer.expression;
      if (e && ts.isIdentifier(e) && topDecls.has(e.text)) {
        if (tag === "ReferencesSection" && attr === "refs") declRole.set(topDecls.get(e.text), "reference");
        if (tag === "JsonLd" && attr === "data") declRole.set(topDecls.get(e.text), "jsonld");
      }
    }
    ts.forEachChild(node, markRoles);
  };
  markRoles(sf);

  // The open block's text run.
  let buf = null;
  const flush = () => {
    if (buf && buf.chars.length) {
      const { text, pos } = collapse(buf.chars, buf.pos);
      if (text) items.push({ kind: buf.kind, hidden: buf.hidden, text, pos });
    }
    buf = null;
  };
  const append = (chars, pos, ctx) => {
    if (!buf) buf = { chars: [], pos: [], kind: "jsx", hidden: ctx.hidden };
    for (let i = 0; i < chars.length; i++) {
      buf.chars.push(chars[i]);
      buf.pos.push(pos[i]);
    }
  };
  const isolated = (fn) => {
    const saved = buf;
    buf = null;
    fn();
    flush();
    buf = saved;
  };

  const literalChars = (node) => {
    // Cooked text with a per-character source position; exact when cooked equals raw.
    const start = node.getStart(sf) + 1;
    const cooked = node.text;
    const raw = src.slice(start, node.end - 1);
    const chars = Array.from(cooked);
    const pos =
      raw === cooked
        ? (() => {
            const p = [];
            let off = 0;
            for (const c of chars) {
              p.push(start + off);
              off += c.length;
            }
            return p;
          })()
        : chars.map(() => node.getStart(sf));
    return decodeEntities(chars, pos);
  };
  const emitLiteral = (node, ctx) => {
    if (ctx.kind === "skip") return;
    const { chars, pos } = literalChars(node);
    const { text, pos: p } = collapse(chars, pos);
    if (text) items.push({ kind: ctx.kind, hidden: ctx.hidden, text, pos: p });
  };
  const emitTemplatePart = (part, ctx) => {
    if (ctx.kind === "skip") return;
    const at = part.getStart(sf);
    const chars = Array.from(part.text);
    const dec = decodeEntities(chars, chars.map(() => at));
    const { text, pos } = collapse(dec.chars, dec.pos);
    if (text) items.push({ kind: ctx.kind, hidden: ctx.hidden, text, pos });
  };

  const isSkipped = (name, tag) =>
    SKIP_ALWAYS.has(name) || (tag !== undefined && /^[a-z]/.test(tag) && SKIP_ON_INTRINSIC.has(name));

  const visitJsxChild = (ch, ctx) => {
    if (ts.isJsxText(ch)) {
      // A JsxText's leading whitespace is part of the text: slice from its full start,
      // not getStart(), which skips it as trivia.
      const start = ch.pos;
      const raw = src.slice(start, ch.end);
      const chars = Array.from(raw);
      const pos = [];
      let off = 0;
      for (const c of chars) {
        pos.push(start + off);
        off += c.length;
      }
      const dec = decodeEntities(chars, pos);
      append(dec.chars, dec.pos, ctx);
      return;
    }
    if (ts.isJsxExpression(ch)) {
      const e = ch.expression;
      if (!e) return; // a JSX comment
      if (ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e)) {
        const { chars, pos } = literalChars(e);
        append(chars, pos, ctx);
        return;
      }
      append([" "], [e.getStart(sf)], ctx);
      visit(e, { ...ctx, kind: "string" });
      return;
    }
    visit(ch, ctx);
  };

  const visitJsx = (node, ctx) => {
    if (ts.isJsxFragment(node)) {
      for (const ch of node.children) visitJsxChild(ch, { ...ctx, kind: "jsx" });
      return;
    }
    const opening = ts.isJsxElement(node) ? node.openingElement : node;
    const tag = opening.tagName.getText(sf);
    const inline = INLINE_TAGS.has(tag);
    if (tag === "br") {
      append([" "], [opening.getStart(sf)], ctx);
      return;
    }
    for (const attr of opening.attributes.properties) {
      if (ts.isJsxSpreadAttribute(attr)) {
        isolated(() => visit(attr.expression, { ...ctx, kind: "attr" }));
        continue;
      }
      const name = attr.name.getText(sf);
      if (isSkipped(name, tag) || !attr.initializer) continue;
      let kind = "attr";
      if (LINK_NAMES.test(name)) kind = "link";
      if (tag === "ReferencesSection" && name === "refs") kind = "reference";
      if (tag === "JsonLd" && name === "data") kind = "jsonld";
      const c = { ...ctx, kind };
      isolated(() => {
        if (ts.isStringLiteral(attr.initializer)) emitLiteral(attr.initializer, c);
        else visit(attr.initializer, c);
      });
    }
    if (!ts.isJsxElement(node)) return;
    if (!inline) flush();
    for (const ch of node.children) visitJsxChild(ch, { ...ctx, kind: "jsx" });
    if (!inline) flush();
  };

  const visit = (node, ctx) => {
    if (!node || ctx.kind === "skip") return;
    if (
      ts.isImportDeclaration(node) ||
      ts.isExportDeclaration(node) ||
      ts.isInterfaceDeclaration(node) ||
      ts.isTypeAliasDeclaration(node) ||
      ts.isTypeNode(node)
    ) {
      return;
    }
    if (ts.isVariableDeclaration(node)) {
      let c = ctx;
      const name = node.name.getText(sf);
      if (name === "metadata") c = { ...c, kind: "metadata" };
      const typeText = node.type ? node.type.getText(sf) : "";
      if (/^(?:Ref|Reference)\[\]$|^Array<(?:Ref|Reference)>$/.test(typeText)) c = { ...c, kind: "reference" };
      if (declRole.get(node) === "reference") c = { ...c, kind: "reference" };
      if (declRole.get(node) === "jsonld") c = { ...c, kind: "jsonld" };
      if (node.initializer) visit(node.initializer, c);
      return;
    }
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken &&
      node.left.kind === ts.SyntaxKind.FalseKeyword
    ) {
      visit(node.right, { ...ctx, hidden: true });
      return;
    }
    if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node) || ts.isJsxFragment(node)) {
      visitJsx(node, ctx);
      return;
    }
    if (ts.isPropertyAssignment(node)) {
      const name = propName(node.name, sf);
      if (isSkipped(name)) return;
      let kind = ctx.kind;
      if (LINK_NAMES.test(name)) kind = "link";
      else if (ctx.kind === "reference") kind = CITATION_FIELDS.has(name) ? "citation" : "reference-note";
      visit(node.initializer, { ...ctx, kind });
      return;
    }
    if (ts.isCallExpression(node) && /Ld$/.test(node.expression.getText(sf))) {
      for (const a of node.arguments) visit(a, { ...ctx, kind: "jsonld" });
      return;
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      emitLiteral(node, ctx);
      return;
    }
    if (ts.isTemplateExpression(node)) {
      emitTemplatePart(node.head, ctx);
      for (const span of node.templateSpans) {
        visit(span.expression, ctx);
        emitTemplatePart(span.literal, ctx);
      }
      return;
    }
    // Comparisons and switch cases compare values; they do not render them.
    if (ts.isCaseClause(node)) {
      for (const s of node.statements) visit(s, ctx);
      return;
    }
    if (
      ts.isBinaryExpression(node) &&
      [
        ts.SyntaxKind.EqualsEqualsEqualsToken,
        ts.SyntaxKind.ExclamationEqualsEqualsToken,
        ts.SyntaxKind.EqualsEqualsToken,
        ts.SyntaxKind.ExclamationEqualsToken,
      ].includes(node.operatorToken.kind)
    ) {
      return;
    }
    ts.forEachChild(node, (ch) => visit(ch, ctx));
  };

  visit(sf, { kind: "string", hidden: false });
  flush();

  for (const it of items) {
    it.lines = it.pos.map((p) => sf.getLineAndCharacterOfPosition(p).line + 1);
  }
  items.sort((a, b) => a.pos[0] - b.pos[0]);
  return items;
}

// ---------------------------------------------------------------------------
// Matching and report
// ---------------------------------------------------------------------------

function context(text, index, length) {
  const width = 120;
  let s = Math.max(0, index - Math.floor((width - length) / 2));
  let e = Math.min(text.length, s + width);
  s = Math.max(0, e - width);
  return (s > 0 ? "..." : "") + text.slice(s, e) + (e < text.length ? "..." : "");
}

function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes("--verbose");
  const dumpAt = args.indexOf("--dump");
  const dumpPart = dumpAt >= 0 ? args[dumpAt + 1] : null;

  const pages = listPages();
  const real = [];
  const allowed = [];
  const excluded = new Map();
  let itemCount = 0;

  for (const abs of pages) {
    const rel = relative(APP_ROOT, abs).split("\\").join("/");
    const items = extract(abs);
    itemCount += items.length;

    if (dumpPart && rel.includes(dumpPart)) {
      console.log(`\n=== ${rel} (${items.length} text items)`);
      for (const it of items) {
        console.log(`L${it.lines[0]} [${it.kind}${it.hidden ? ",hidden" : ""}] ${it.text}`);
      }
    }

    for (const it of items) {
      for (const t of TERMS) {
        if (it.kind === "link" && !t.links) continue;
        t.re.lastIndex = 0;
        let m;
        while ((m = t.re.exec(it.text)) !== null) {
          const hit = {
            term: t.term,
            file: rel,
            line: it.lines[m.index],
            kind: it.kind + (it.hidden ? ",hidden" : ""),
            text: it.text,
            index: m.index,
            match: m[0],
          };
          hit.context = context(it.text, m.index, m[0].length);
          const ex = (t.exclude || []).find((x) => x.when({ ...hit, kind: it.kind }));
          if (ex) {
            const key = `${t.term}: ${ex.reason}`;
            if (!excluded.has(key)) excluded.set(key, []);
            excluded.get(key).push(hit);
            continue;
          }
          const ok = ALLOW.find(
            (a) => a.term === t.term && (!a.file || a.file.test(rel)) && (!a.when || a.when({ ...hit, kind: it.kind })),
          );
          if (ok) allowed.push({ ...hit, reason: ok.reason });
          else real.push(hit);
        }
      }
    }
  }

  if (dumpPart) return 0;

  const line = (h) => `  ${h.file}:${h.line}  [${h.term}]  (${h.kind})  ${h.context}`;
  console.log(`scan-public-text: ${pages.length} pages, ${itemCount} text items, ${TERMS.length} terms`);

  console.log(`\nREAL HITS: ${real.length}`);
  for (const h of real) console.log(line(h));

  console.log(`\nALLOWED: ${allowed.length}`);
  for (const h of allowed) console.log(`${line(h)}\n      reason: ${h.reason}`);

  let exCount = 0;
  for (const v of excluded.values()) exCount += v.length;
  console.log(`\nEXCLUDED (not hits): ${exCount}`);
  for (const [key, hits] of excluded) {
    console.log(`  ${hits.length} x ${key}`);
    if (verbose) for (const h of hits) console.log(`  ${line(h)}`);
  }

  console.log(`\n${real.length === 0 ? "CLEAN" : "FAIL"}: ${real.length} real, ${allowed.length} allowed, ${exCount} excluded`);
  return real.length === 0 ? 0 : 1;
}

process.exitCode = main();
