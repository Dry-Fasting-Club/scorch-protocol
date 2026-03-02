import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import sql from "@/lib/db";
import { generateAccessToken } from "@/lib/tokens";
import Stripe from "stripe";

// Disable automatic body parsing — Stripe needs the raw body to verify signature
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe().webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Stripe webhook signature failed:", msg);
    return NextResponse.json({ error: `Webhook Error: ${msg}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const sectionSlug = session.metadata?.section_slug;
    if (!sectionSlug) {
      console.error("Webhook: no section_slug in metadata");
      return NextResponse.json({ ok: true }); // ack to avoid Stripe retries
    }

    const amountTotal = session.amount_total ?? 1000;
    const stripeSessionId = session.id;

    // Check for duplicate webhook delivery
    const existing = await sql`
      SELECT id FROM purchases WHERE stripe_session_id = ${stripeSessionId} LIMIT 1
    `;
    if (existing.length > 0) {
      return NextResponse.json({ ok: true }); // idempotent
    }

    const accessToken = generateAccessToken();

    await sql`
      INSERT INTO purchases (section_slug, stripe_session_id, amount_cents, access_token)
      VALUES (${sectionSlug}, ${stripeSessionId}, ${amountTotal}, ${accessToken})
    `;
    // Cookie is set by /purchase/success when the user's browser returns
  }

  return NextResponse.json({ ok: true });
}
