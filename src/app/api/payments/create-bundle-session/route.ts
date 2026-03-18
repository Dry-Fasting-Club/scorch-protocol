import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";

// ── POST /api/payments/create-bundle-session ────────────────────────────────
export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_BASE_URL ?? "";

  const session = await stripe().checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: 9900, // $99
          product_data: {
            name: "Full Protocol Bundle — All Deep Dives",
            description:
              "Lifetime access to every deep-dive video and document across the entire Scorch Protocol. One payment, all 21 sections unlocked.",
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      section_slug: "bundle",
    },
    success_url: `${origin}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/overview`,
  });

  return NextResponse.json({ url: session.url });
}
