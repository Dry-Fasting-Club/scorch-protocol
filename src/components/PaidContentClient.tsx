"use client";

/**
 * PaidContentClient.tsx
 * Client half of the paid-content block.
 *
 * Renders the LOCKED teaser by default — that is the state server-rendered into
 * the static HTML, so it is what crawlers and no-JS visitors see (unchanged from
 * before). On mount it asks /api/access/<slug> whether this browser holds a valid
 * access token and, if so, swaps to the unlocked view. Moving the cookie check
 * here (instead of a server-side hasAccess call) is what lets the protocol/faq
 * pages render statically.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import UnlockButton from "./UnlockButton";
import BundleButton from "./BundleButton";

interface ContentItem {
  type: "video" | "pdf";
  title: string;
  description: string;
  key: string;
  duration_minutes?: number;
  page_count?: number;
}

interface Props {
  sectionSlug: string;
  sectionTitle: string;
  items: ContentItem[];
  paidContentType: "video" | "pdf" | null;
  priceDollars: string;
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

export default function PaidContentClient({ sectionSlug, sectionTitle, items, paidContentType, priceDollars }: Props) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(`/api/access/${sectionSlug}`)
      .then((res) => (res.ok ? res.json() : { unlocked: false }))
      .then((data) => {
        if (active && data?.unlocked) setUnlocked(true);
      })
      .catch(() => {
        // Non-critical: leave the teaser shown. The user can still reach their
        // content directly at /content/<slug>.
      });
    return () => {
      active = false;
    };
  }, [sectionSlug]);

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
  const displayItems: ContentItem[] = items.length > 0
    ? items.slice(0, 3)
    : [{ type: paidContentType ?? "video", title: `${sectionTitle} Deep Dive`, description: "In-depth walkthrough covering everything you need to know — patient data, dosing, common pitfalls, and clinical outcomes.", key: "" }];

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

      <div className="bundle-upsell">
        <p className="bundle-upsell-label">Or unlock the entire protocol at once</p>
        <BundleButton />
        <p className="bundle-upsell-note">
          All 21 sections · One payment of $99 · Save $510 vs. individual
        </p>
      </div>
    </div>
  );
}
