/**
 * PaidContentBlock.tsx
 * Server component rendered at the bottom of each protocol/faq page.
 *
 * Fetches the per-section paid-content config (cached, same for every visitor)
 * and hands it to PaidContentClient, which renders the locked teaser and flips
 * to the unlocked view client-side after checking /api/access. Because this no
 * longer reads the access cookie during render, the pages that use it stay
 * static/CDN-cached instead of rendering dynamically on every request.
 *
 * Graceful degradation:
 * - If paid_content_items is empty/null, falls back to the legacy paid_content_type display.
 * - If DB is unavailable, renders nothing.
 */

import { unstable_cache } from "next/cache";
import sql from "@/lib/db";
import PaidContentClient from "./PaidContentClient";

interface ContentItem {
  type: "video" | "pdf";
  title: string;
  description: string;
  key: string;
  duration_minutes?: number;
  page_count?: number;
}

interface SectionConfig {
  published: boolean;
  paid_content_type: "video" | "pdf" | null;
  price_cents: number;
  paid_content_items: ContentItem[];
}

interface Props {
  sectionSlug: string;
  sectionTitle: string;
}

// Cached reader for the per-section paid-content config. This config is the
// same for every visitor and changes only on an admin edit, so caching it keeps
// the public pages from querying Neon on every build/regeneration. The cache key
// includes the sectionSlug arg; invalidated by revalidateTag("sections") on
// admin save and by the 1h TTL backstop. A DB error throws here so a transient
// failure is NOT cached; the caller below catches it and returns null.
const getSectionConfigCached = unstable_cache(
  async (sectionSlug: string): Promise<SectionConfig | null> => {
    const rows = await sql`
      SELECT published, paid_content_type, price_cents,
             COALESCE(paid_content_items, '[]'::jsonb) AS paid_content_items
      FROM sections
      WHERE slug = ${sectionSlug}
      LIMIT 1
    `;
    if (!rows.length) return null;
    const row = rows[0];
    return {
      published: row.published,
      paid_content_type: row.paid_content_type,
      price_cents: row.price_cents ?? 1000,
      paid_content_items: (row.paid_content_items as ContentItem[]) ?? [],
    };
  },
  ["section-config"],
  { tags: ["sections"], revalidate: 3600 },
);

async function getSectionConfig(sectionSlug: string): Promise<SectionConfig | null> {
  try {
    return await getSectionConfigCached(sectionSlug);
  } catch {
    return null;
  }
}

export default async function PaidContentBlock({ sectionSlug, sectionTitle }: Props) {
  const config = await getSectionConfig(sectionSlug);

  // Hide if section not configured or not published
  if (!config || !config.published) return null;

  // Nothing to show if no items AND no legacy type
  const items = config.paid_content_items;
  if (!items.length && !config.paid_content_type) return null;

  const priceDollars = (config.price_cents / 100).toFixed(0);

  return (
    <PaidContentClient
      sectionSlug={sectionSlug}
      sectionTitle={sectionTitle}
      items={items}
      paidContentType={config.paid_content_type}
      priceDollars={priceDollars}
    />
  );
}
