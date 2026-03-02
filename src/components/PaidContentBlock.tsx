/**
 * PaidContentBlock.tsx
 * Server component rendered at the bottom of each protocol page.
 *
 * Locked state:  shows teaser rows (blurred descriptions) + price + unlock CTA.
 * Unlocked state: shows a link to /content/[slug] where the actual player lives.
 *
 * Graceful degradation:
 * - If paid_content_items is empty/null, falls back to the legacy paid_content_type display.
 * - If DB is unavailable, renders nothing.
 */

import Link from "next/link";
import sql from "@/lib/db";
import { hasAccess } from "@/lib/tokens";
import UnlockButton from "./UnlockButton";

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

async function getSectionConfig(sectionSlug: string): Promise<SectionConfig | null> {
  try {
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
  } catch {
    return null;
  }
}

function ItemIcon({ type }: { type: "video" | "pdf" }) {
  if (type === "pdf") {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
        <path d="M3 1h7l3 3v10H3V1zm7 0v3h3M6 8h4M6 11h4M6 5h2" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
      <path d="M4 2.5l9 5-9 5V2.5z" />
    </svg>
  );
}

function ItemMeta({ item }: { item: ContentItem }) {
  if (item.type === "video" && item.duration_minutes) {
    return <span className="paid-video-meta">{item.duration_minutes} min</span>;
  }
  if (item.type === "pdf" && item.page_count) {
    return <span className="paid-video-meta">{item.page_count} pages</span>;
  }
  return null;
}

export default async function PaidContentBlock({ sectionSlug, sectionTitle }: Props) {
  const config = await getSectionConfig(sectionSlug);

  // Hide if section not configured or not published
  if (!config || !config.published) return null;

  // Nothing to show if no items AND no legacy type
  const items = config.paid_content_items;
  if (!items.length && !config.paid_content_type) return null;

  const priceDollars = (config.price_cents / 100).toFixed(0);
  const unlocked = await hasAccess(sectionSlug);

  // ── UNLOCKED STATE ──────────────────────────────────────────────────────────
  if (unlocked) {
    return (
      <div className="paid-content-block">
        <div className="paid-content-block-header">
          <h3>Deep Dive — Unlocked</h3>
          <h4>{sectionTitle}: Full Content</h4>
          <p>You have access. Watch videos and read the deep-dive material below.</p>
        </div>

        {items.length > 0 && (
          <div className="paid-video-list">
            {items.map((item, i) => (
              <div key={i} className="paid-video-row paid-video-row--unlocked">
                <div className="paid-video-icon paid-video-icon--unlocked">
                  <ItemIcon type={item.type} />
                </div>
                <div className="paid-video-info">
                  <p className="paid-video-title">{item.title}</p>
                  <p className="paid-video-desc paid-video-desc--visible">{item.description}</p>
                </div>
                <ItemMeta item={item} />
              </div>
            ))}
          </div>
        )}

        <div className="paid-content-cta">
          <Link href={`/content/${sectionSlug}`} className="access-btn">
            Open Deep Dive →
          </Link>
        </div>
      </div>
    );
  }

  // ── LOCKED STATE ────────────────────────────────────────────────────────────
  const displayItems = items.length > 0
    ? items.slice(0, 3)
    : [{ type: config.paid_content_type ?? "video", title: `${sectionTitle} Deep Dive`, description: "In-depth walkthrough covering everything you need to know — patient data, dosing, common pitfalls, and clinical outcomes.", key: "" } as ContentItem];

  return (
    <div className="paid-content-block">
      <div className="paid-content-block-header">
        <h3>Deep Dive Content</h3>
        <h4>{sectionTitle}: Unlock Full Access</h4>
        <p>
          Evidence-based video walkthroughs and research summaries — not available
          anywhere else.
        </p>
      </div>

      <div className="paid-video-list">
        {displayItems.map((item, i) => (
          <div key={i} className="paid-video-row">
            <div className="paid-video-icon">
              <ItemIcon type={item.type as "video" | "pdf"} />
            </div>
            <div className="paid-video-info">
              <p className="paid-video-title">{item.title}</p>
              <p className="paid-video-desc">{item.description}</p>
            </div>
            {item.duration_minutes && (
              <span className="paid-video-meta">{item.duration_minutes} min</span>
            )}
            {item.page_count && (
              <span className="paid-video-meta">{item.page_count} pages</span>
            )}
          </div>
        ))}
      </div>

      <div className="paid-content-cta">
        <p>One-time unlock · Stored on your device · No subscription</p>
        <UnlockButton sectionSlug={sectionSlug} priceDollars={priceDollars} />
      </div>
    </div>
  );
}
