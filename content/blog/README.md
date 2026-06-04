# Blog content pipeline

Source-of-truth for every published blog post on scorchprotocol.com.
Each `.md` file in this directory is one post. Edit the file, run the publish script, the post goes live.

## The pipeline

```
content/blog/<slug>.md   ─┐
                          │  npm run blog:publish
                          ▼
              Neon → blog_posts table → live at /blog/<slug>
```

- **One file = one post.** Filename must match the `slug` frontmatter field.
- **Idempotent.** Re-running `blog:publish` updates existing posts (matched by slug) and inserts new ones.
- **Word count + reading time are recomputed every run.** Do not set them manually.
- **`published_at` is set on first publish only.** Re-running does not bump the publish date.

## Publishing

From `scorch-app/`:

```bash
npm run blog:publish                    # publish/update every .md in this directory
npm run blog:publish long-covid-recovery-guide   # just one file (no .md extension)
```

Requires `DATABASE_URL` in `.env.local`. The script uses the same Neon connection as everything else.

## Frontmatter spec

Every post starts with a YAML frontmatter block. Required fields are marked.

```yaml
---
slug: long-covid-recovery-guide              # REQUIRED, must match filename
title: "Long Covid Recovery: ..."            # REQUIRED, ≤200 chars
subtitle: "Why post-viral fatigue ..."       # optional, ≤400 chars
category: long-covid                         # REQUIRED, must be a valid slug (see below)
tags:                                        # optional, free-form
  - long-covid
  - recovery
  - dry-fasting
author_name: Yannick Wolfe                   # default "Yannick Wolfe"
status: published                            # draft | published | archived
featured: true                               # only one post should be featured at a time
related_protocol_slug: long-covid-basics     # optional, renders auto-CTA at end of post
seo_title: "Long Covid Recovery: ..."        # ≤60 chars for SERP
seo_description: "A mechanism-based ..."     # ≤160 chars for SERP
excerpt: "Long Covid is not a viral ..."     # REQUIRED, ≤500 chars (shown on index + RSS)
---
```

### Valid `category` values

Defined in `src/lib/blogCategories.ts` (single source of truth):

| slug | label |
|---|---|
| `long-covid` | Long Covid |
| `me-cfs` | ME/CFS |
| `dry-fasting-science` | Dry Fasting Science |
| `t3-therapy` | T3 Therapy |
| `hgh-peptides` | hGH & Peptides |
| `autophagy` | Autophagy |
| `case-studies` | Case Studies |
| `research-breakdown` | Research Breakdown |
| `gut-health` | Gut & Detox |
| `protocol-explainers` | Protocol Explainers |

Add new categories to that file and to the playbook below before using them in frontmatter.

### Valid `related_protocol_slug` values

Any `(main)` route group page slug. Common ones:

`long-covid-basics`, `dry-fasting`, `t3-therapy`, `hgh-therapy`, `refeeding`,
`preparation`, `viral-reactivation`, `symptom-management`, `tips-and-tricks`,
`success-rate-data`, `genetic-polymorphisms`, `weight-loss`, `mindfulness`,
`refeed-for-bmr`, `decision-tree`, `list-of-pharmacies`, `random-thoughts`.

## SEO checklist for every post

Before running `blog:publish`, verify:

- [ ] `seo_title` is ≤60 chars and contains the head keyword near the start
- [ ] `seo_description` is ≤160 chars, contains the head keyword, has an implicit CTA
- [ ] `slug` is lowercase, hyphenated, contains the primary keyword
- [ ] `title` contains the primary keyword (it can be longer than seo_title; both appear in different places)
- [ ] First 150 words contain the primary keyword, the secondary keyword, and a clear value statement
- [ ] At least 6 H2 sections for pillar posts, 4+ for cluster posts
- [ ] At least 3 internal links to `(main)` protocol pages (`/dry-fasting`, `/t3-therapy`, etc.)
- [ ] At least 2 internal links to other blog posts (up to the pillar, sideways to siblings)
- [ ] An H2 named "Frequently Asked Questions" with at least 4 H3 questions (boosts AI Overview / FAQ snippet pickup)
- [ ] An H2 named "Next Steps" or equivalent at the bottom with a clear CTA to a protocol page or email signup
- [ ] Citations are clickable with the paper finding inside the parens (see "Citation format" below)
- [ ] No em dashes (project style rule — use commas, parens, colons, or sentence breaks instead)
- [ ] No emojis (project style rule)

## Two post archetypes

Every post fits one of these patterns. Mix them deliberately, not randomly.

### PILLAR post (~3,500-4,500 words)

The hub of a topic cluster. One per major topic vertical. Mechanism-heavy, comprehensive.

**Structural template:**
1. **Intro (~150 words)** — hook + authority statement + bulleted "what you will learn" list + skip-to link for impatient readers
2. **H2: What [topic] actually is** — mechanism reframe, contrarian angle
3. **H2: Why standard testing/treatment misses it** — addresses the gaslighting experience
4. **H2: The three (or N) reinforcing loops / pillars / mechanisms** — heavy mechanism content with H3 sub-sections
5. **H2: Why most [topic] treatments fail** — competitor teardown, positions the protocol
6. **H2: The Scorch Protocol framework** — phased breakdown with H3 per phase, each phase linking to its `/main` protocol page
7. **H2: What recovery actually looks like** — timeline, expected outcomes, links to `/success-rate-data`
8. **H2: Who this protocol is and is not for** — qualification + disqualification list (builds trust + filters bad-fit readers)
9. **H2: Frequently Asked Questions** — 5-8 H3 questions; answer in 1-3 sentences each
10. **H2: Next Steps** — clear primary CTA (protocol page) + secondary CTA (email signup)

**Featured: true** for the current best pillar (shown as hero on `/blog`).

### CLUSTER post (~1,500-2,500 words)

Long-tail post answering a specific question. 10-15 per pillar. Routes traffic up to the pillar.

**Structural template:**
1. **H2: The Short Answer** — answer the title question in 50-100 words at the top (voice search + featured snippet + AI Overview optimization)
2. **H2: 3-5 focused sections** — the supporting depth, mechanism, common patterns
3. **H2: Common Co-Symptoms / Common Mistakes / Common Misconceptions** — list-format content (good for rich result triggers)
4. **H2: What actually works** — short summary + link UP to the pillar post
5. **H2: Frequently Asked Questions** — 3-5 H3 questions
6. **H2: Where to Start** — CTA back to pillar + protocol page + email

**Featured: false** always for cluster posts.

## Internal linking rules (the cluster funnel magic)

Every cluster post MUST contain:

- One link **up** to its pillar (in the body, not just in the CTA)
- At least one link **sideways** to a sibling cluster post under the same pillar (where the sibling exists)
- At least one link **out** to a `(main)` protocol page (`/dry-fasting`, etc.)
- A final CTA block linking to: protocol page → email capture

Every pillar post MUST contain:

- A link **down** to each cluster post under its umbrella (in the relevant section, not in a generic list)
- At least three links **out** to `(main)` protocol pages
- A "Related Articles" section is auto-generated by the blog post page (same-category posts), so no need to hand-curate one

## Citation format

Every claim that references a study or paper should be a clickable citation with the finding inside the parentheses. This signals scholarly authority to Google's E-E-A-T evaluation (Dec 2025 update extends E-E-A-T to all competitive queries) and dramatically improves AI Overview / Perplexity / ChatGPT pickup, since LLMs prefer to cite sources with traceable links.

**Format:**

```markdown
...claim text... ([Author et al., Year — short description of the finding](URL), *Journal Name*).
```

**Renders as:** *...claim text... ([Author et al., Year — short description of the finding](#), Journal Name).*

**URL preference order:**

1. PubMed PMID: `https://pubmed.ncbi.nlm.nih.gov/{PMID}/`
2. PubMed Central PMC: `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC{ID}/`
3. DOI: `https://doi.org/{DOI}`
4. Publisher landing page (last resort)

**Source the URLs from:**

- The "Corroborating Research" section of each Data-hoard knowledge block — most papers already have PMIDs or PMCIDs listed
- For papers without confirmed URLs in Data-hoard, leave the citation as plain text with the journal name and finding descriptor: `(Author, Year, *Journal*, on finding)`. Better no link than a wrong one. E-E-A-T is more damaged by a broken or wrong link than by a missing one.

**Bad (legacy format, do not use for new posts):**

```
A 1°C drop in body temperature reduces every enzyme-catalyzed reaction in your body (Clarke, 2004).
```

**Good:**

```
A 1°C drop in body temperature reduces every enzyme-catalyzed reaction in your body
([Clarke, 2004 — Functional Ecology study on temperature-dependent enzyme kinetics](URL)).
```

The link text should contain the descriptive finding, not just the citation — this is the anchor text Google reads and is the most important SEO signal in the citation.

## Tone and voice

- Mechanism over marketing. Lead with how it works, not how amazing it is.
- Patient-facing, not academic. Plain English with the technical term once, defined.
- Confident, contrarian, specific. Name the specific failures of conventional approaches.
- Cite real research using `(Author et al., year)` format. Do not invent citations.
- No em dashes (use commas, parens, colons, or sentence breaks).
- No emojis.
- No "in this article" filler. Get to the point in the first paragraph.

## Source material pipeline (the moat)

Most posts should not be written from a cold start. They should be restructured from existing knowledge:

| Source | Where | How to use |
|---|---|---|
| Data-hoard topics | `/Data-hoard/topics/*.md` | Each "knowledge block" already has Core Claim + Mechanism + Citations + Caveats. One block = one cluster post; whole topic = one pillar |
| Study analyses | `/studies/*/` | Source for citation paragraphs and "what the research says" framing |
| YouTube scripts | `/youtube-scripts/*.md` | Already blog-shaped narrative content; just needs SEO formatting + internal links |
| Q&A notes | `/youtube-scripts/Questions and Answers/` | Each question → one focused cluster post answering a specific patient query |

Pulling from these sources keeps the moat real. The posts are not AI-generated wellness slop. They are reformatted clinical knowledge that does not exist anywhere else on the internet.

## Adding a new post

1. Pick the next slot in your pillar/cluster map.
2. Open the relevant Data-hoard topic and find the matching knowledge block(s).
3. Create `content/blog/<slug>.md` with the frontmatter and content.
4. Walk the SEO checklist above.
5. Walk the internal linking rules above.
6. Run `npm run blog:publish <slug>`.
7. Verify at `https://scorchprotocol.com/blog/<slug>` after the next deploy.
8. Commit the `.md` file to the scorch-protocol repo so the source is version-controlled alongside the rest of the codebase.

## Editing an existing post

1. Edit the `.md` file in place.
2. Run `npm run blog:publish <slug>`.
3. The `updated_at` timestamp bumps; the `published_at` is preserved (Google does not see this as a fresh URL).

## Unpublishing a post

Change `status: published` to `status: archived` (or `draft`) in the frontmatter and re-run `npm run blog:publish <slug>`. The post will disappear from `/blog`, the sitemap, and the RSS feed within one revalidation cycle. The row remains in the DB for history.
