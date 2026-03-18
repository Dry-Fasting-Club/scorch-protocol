import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import sql from "@/lib/db";

// ── POST /api/payments/create-session ──────────────────────────────────────
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { sectionSlug } = body;
  if (typeof sectionSlug !== "string" || !sectionSlug.trim()) {
    return NextResponse.json({ error: "sectionSlug required" }, { status: 400 });
  }

  // Look up section metadata
  const rows = await sql`
    SELECT slug, title, price_cents, stripe_price_id, published, paid_content_type
    FROM sections
    WHERE slug = ${sectionSlug}
    LIMIT 1
  `;

  if (!rows.length) {
    return NextResponse.json({ error: "Section not found" }, { status: 404 });
  }

  const section = rows[0];

  if (!section.published || !section.paid_content_type) {
    return NextResponse.json({ error: "Paid content not available for this section" }, { status: 400 });
  }

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "";

  const session = await stripe().checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: section.price_cents ?? 2900,
          product_data: {
            name: `${section.title} — Deep Dive`,
            description: "Access to the full protocol deep dive video and information for this section.",
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      section_slug: sectionSlug,
    },
    success_url: `${origin}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/${sectionSlug}`,
  });

  return NextResponse.json({ url: session.url });
}
