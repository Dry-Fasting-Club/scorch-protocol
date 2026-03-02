/**
 * lib/blogCategories.ts
 * Single source of truth for all blog category slugs and display names.
 * Shared between server components, client components, and API routes.
 */

export const BLOG_CATEGORIES = [
  { slug: "long-covid",          label: "Long Covid" },
  { slug: "me-cfs",              label: "ME/CFS" },
  { slug: "dry-fasting-science", label: "Dry Fasting Science" },
  { slug: "t3-therapy",          label: "T3 Therapy" },
  { slug: "hgh-peptides",        label: "hGH & Peptides" },
  { slug: "autophagy",           label: "Autophagy" },
  { slug: "case-studies",        label: "Case Studies" },
  { slug: "research-breakdown",  label: "Research Breakdown" },
  { slug: "gut-health",          label: "Gut & Detox" },
  { slug: "protocol-explainers", label: "Protocol Explainers" },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

/** Map slug → display label, e.g. "t3-therapy" → "T3 Therapy" */
export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  BLOG_CATEGORIES.map(({ slug, label }) => [slug, label])
);
