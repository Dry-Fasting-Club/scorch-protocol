/**
 * app/content/[slug]/page.tsx
 * Paid content viewer — videos and PDFs unlocked via Stripe.
 *
 * Auth flow:
 *   1. Verify access cookie via hasAccess(slug).
 *   2. If no access → redirect to /<slug> (protocol page) with ?locked=1.
 *   3. Load section config from DB, including paid_content_items JSONB.
 *   4. Generate signed R2 URLs server-side (1-hour expiry).
 *   5. Pass signed URLs as props to <VideoPlayer> client components.
 */

import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import sql from "@/lib/db";
import { hasAccess } from "@/lib/tokens";
import { getSignedContentUrl } from "@/lib/r2";
import VideoPlayer from "@/components/VideoPlayer";

export const dynamic = "force-dynamic"; // Always re-check access cookie

interface ContentItem {
  type: "video" | "pdf";
  title: string;
  description: string;
  key: string;
  duration_minutes?: number;
  page_count?: number;
}

interface SectionRow {
  slug: string;
  title: string;
  paid_content_type: "video" | "pdf" | null;
  paid_content_key: string | null;
  paid_content_items: ContentItem[];
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rows = await sql`SELECT title FROM sections WHERE slug = ${slug} LIMIT 1`;
  const title = rows[0]?.title ?? "Deep Dive";
  return {
    title: `${title}: Deep Dive`,
    robots: { index: false, follow: false }, // Never index paid content pages
  };
}

async function loadSection(slug: string): Promise<SectionRow | null> {
  try {
    const rows = await sql`
      SELECT slug, title, paid_content_type, paid_content_key,
             COALESCE(paid_content_items, '[]'::jsonb) AS paid_content_items
      FROM sections
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `;
    if (!rows.length) return null;
    return rows[0] as SectionRow;
  } catch {
    return null;
  }
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;

  // 1. Auth check
  const unlocked = await hasAccess(slug);
  if (!unlocked) {
    redirect(`/${slug}?locked=1`);
  }

  // 2. Load section
  const section = await loadSection(slug);
  if (!section) {
    redirect(`/${slug}?locked=1`);
  }

  // 3. Resolve content items — prefer JSONB array, fall back to legacy single key
  type ResolvedItem = {
    type: "video" | "pdf";
    title: string;
    description: string;
    signedUrl: string;
    duration_minutes?: number;
    page_count?: number;
  };

  const resolved: ResolvedItem[] = [];

  if (section.paid_content_items.length > 0) {
    for (const item of section.paid_content_items) {
      if (!item.key) continue;
      try {
        const signedUrl = await getSignedContentUrl(item.key, 3600);
        resolved.push({ ...item, signedUrl });
      } catch {
        // Skip items where R2 signing fails
      }
    }
  } else if (section.paid_content_key) {
    // Legacy single-item fallback
    try {
      const signedUrl = await getSignedContentUrl(section.paid_content_key, 3600);
      resolved.push({
        type: section.paid_content_type ?? "video",
        title: `${section.title} Deep Dive`,
        description: "",
        signedUrl,
      });
    } catch {
      // Fall through to empty state
    }
  }

  return (
    <div className="content-viewer">
      <div className="content-viewer-header">
        <Link href={`/${slug}`} className="content-back-link">
          ← Back to {section.title}
        </Link>
        <h1 className="content-viewer-title">{section.title}</h1>
        <p className="content-viewer-subtitle">Deep Dive: Unlocked Content</p>
      </div>

      {resolved.length === 0 ? (
        <div className="content-viewer-empty">
          <p>Content is being prepared. Check back soon.</p>
          <Link href={`/${slug}`}>← Return to protocol page</Link>
        </div>
      ) : (
        <div className="content-viewer-items">
          {resolved.map((item, i) => (
            <div key={i} className="content-viewer-item">
              <h2 className="content-item-title">{item.title}</h2>
              {item.description && (
                <p className="content-item-desc">{item.description}</p>
              )}

              {item.type === "video" ? (
                <VideoPlayer src={item.signedUrl} title={item.title} />
              ) : (
                <div className="content-pdf-wrapper">
                  <iframe
                    src={item.signedUrl}
                    className="content-pdf-frame"
                    title={item.title}
                  />
                  <a
                    href={item.signedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-pdf-download"
                  >
                    Open PDF in new tab →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
