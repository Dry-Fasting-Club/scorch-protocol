import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import sql from "@/lib/db";
import { accessCookieName } from "@/lib/tokens";
import stripe from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Purchase Successful — The Scorch Protocol",
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function PurchaseSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  // Verify the Stripe session
  let sectionSlug: string | null = null;
  try {
    const session = await stripe().checkout.sessions.retrieve(session_id);
    if (session.payment_status === "paid") {
      sectionSlug = session.metadata?.section_slug ?? null;
    }
  } catch {
    // Invalid session_id
  }

  if (!sectionSlug) {
    redirect("/");
  }

  // Look up the access token from the DB (inserted by webhook)
  const rows = await sql`
    SELECT access_token FROM purchases
    WHERE stripe_session_id = ${session_id}
    LIMIT 1
  `;

  if (rows.length) {
    const { access_token } = rows[0];
    const cookieStore = await cookies();
    cookieStore.set(accessCookieName(sectionSlug), access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }

  const sectionRows = await sql`
    SELECT title FROM sections WHERE slug = ${sectionSlug} LIMIT 1
  `;
  const sectionTitle = sectionRows[0]?.title ?? "this section";

  return (
    <div className="purchase-success">
      <div className="purchase-success-icon">✓</div>
      <h1>Access Unlocked</h1>

      <div className="purchase-success-box">
        <h3>You now have lifetime access to:</h3>
        <p className="purchase-success-title">{sectionTitle} — Deep Dive</p>
        <p>
          Your access is saved in this browser for one year. You will never need
          to log in or pay again on this device.
        </p>
      </div>

      <div className="purchase-success-actions">
        <Link href={`/content/${sectionSlug}`} className="access-btn">
          Open Deep Dive →
        </Link>
        <Link href={`/${sectionSlug}`} className="purchase-back-link">
          ← Back to protocol page
        </Link>
      </div>

      <p className="purchase-success-note">
        Using a different device? Contact us and we can restore your access manually.
      </p>
    </div>
  );
}
