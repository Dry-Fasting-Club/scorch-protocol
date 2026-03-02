/**
 * app/sitemap.ts
 * Generates the XML sitemap for scorchprotocol.com.
 * Includes static protocol/FAQ pages + all published blog posts from the DB.
 */

import type { MetadataRoute } from "next";
import { getAllPublishedSlugs } from "@/lib/blog";

const BASE_URL = "https://scorchprotocol.com";

const protocolPages = [
  "/decision-tree",
  "/preparation",
  "/dry-fasting",
  "/refeeding",
  "/t3-therapy",
  "/hgh-therapy",
  "/symptom-management",
  "/weight-loss",
  "/genetic-polymorphisms",
  "/tips-and-tricks",
  "/success-rate-data",
  "/refeed-for-bmr",
  "/list-of-pharmacies",
  "/random-thoughts",
];

const faqPages = [
  "/faq",
  "/faq/general-questions",
  "/faq/autophagy",
  "/faq/refeeding",
  "/faq/kidneys",
  "/faq/liver",
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
    ...protocolPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...faqPages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogEntries,
  ];
}
