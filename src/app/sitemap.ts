/**
 * app/sitemap.ts
 * Generates the XML sitemap for scorchprotocol.com.
 * Includes static protocol/FAQ pages + all published blog posts from the DB.
 */

import type { MetadataRoute } from "next";
import { getAllPublishedSlugs } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blogCategories";

const BASE_URL = "https://scorchprotocol.com";

// Indexed protocol pages with differentiated priority. Excludes pages marked
// noindex (weight-loss, random-thoughts, purchase/success).
const protocolPages: { path: string; priority: number }[] = [
  { path: "/decision-tree", priority: 0.9 },
  { path: "/preparation", priority: 0.9 },
  { path: "/dry-fasting", priority: 0.9 },
  { path: "/dry-fasting-vs-water-fasting", priority: 0.9 },
  { path: "/dry-fasting-for-pots", priority: 0.8 },
  { path: "/ebv-chronic-fatigue", priority: 0.8 },
  { path: "/mcas-and-dry-fasting", priority: 0.8 },
  { path: "/refeeding", priority: 0.9 },
  { path: "/t3-therapy", priority: 0.9 },
  { path: "/viral-reactivation", priority: 0.9 },
  { path: "/success-rate-data", priority: 0.9 },
  { path: "/long-covid-basics", priority: 0.9 },
  { path: "/hgh-therapy", priority: 0.8 },
  { path: "/symptom-management", priority: 0.8 },
  { path: "/genetic-polymorphisms", priority: 0.8 },
  { path: "/tips-and-tricks", priority: 0.8 },
  { path: "/contraindications", priority: 0.8 },
  { path: "/mindfulness", priority: 0.7 },
  { path: "/refeed-for-bmr", priority: 0.7 },
  { path: "/membership", priority: 0.7 },
  { path: "/coaching", priority: 0.7 },
  { path: "/list-of-pharmacies", priority: 0.6 },
];

const faqPages = [
  "/faq",
  "/faq/general-questions",
  "/faq/autophagy",
  "/faq/refeeding",
  "/faq/kidneys",
  "/faq/liver",
];

// Trust / about / policy pages.
const staticPages: { path: string; priority: number }[] = [
  { path: "/about", priority: 0.6 },
  { path: "/research", priority: 0.6 },
  { path: "/contact", priority: 0.4 },
  { path: "/editorial-policy", priority: 0.4 },
  { path: "/medical-disclaimer", priority: 0.4 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Fetch published blog post slugs + their publish dates from the DB
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const slugs = await getAllPublishedSlugs();
    blogEntries = slugs.map(({ slug, updated_at }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: updated_at ? new Date(updated_at) : now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // DB unavailable — omit blog entries rather than crashing
  }

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...protocolPages.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...faqPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...staticPages.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
    // Blog category hubs (indexable, linked from every post card).
    ...BLOG_CATEGORIES.map(({ slug }) => ({
      url: `${BASE_URL}/blog/category/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...blogEntries,
  ];
}
