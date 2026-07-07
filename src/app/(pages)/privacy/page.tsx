import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Scorch Protocol collects, uses, and protects your information — email subscriptions, analytics, comments, and payments.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="static-page-updated">Last updated: July 2026</p>

      <p className="static-lede">
        The Scorch Protocol (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
        privacy. This page explains what we collect, why, and your choices. We
        collect as little as we can to run the site.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Email address</strong> — only if you subscribe to updates or
          contact us. We use it to send you what you asked for.
        </li>
        <li>
          <strong>Comments</strong> — if you leave a comment, we store the content
          and any name or email you provide with it.
        </li>
        <li>
          <strong>Usage analytics</strong> — privacy-friendly, aggregate analytics
          (via Vercel Analytics) about page visits and performance. This is not used
          to build advertising profiles.
        </li>
        <li>
          <strong>Server logs</strong> — standard technical logs (such as IP address
          and browser type) kept briefly for security and diagnostics.
        </li>
        <li>
          <strong>Payment information</strong> — if you join the paid membership,
          payments are processed by Stripe. We never see or store your full card
          details.
        </li>
      </ul>

      <h2>How we use it</h2>
      <p>
        To operate and improve the site, respond to you, deliver anything you
        subscribed to or purchased, and keep the service secure. We do not sell your
        personal information.
      </p>

      <h2>Service providers</h2>
      <p>
        We rely on a few trusted processors to run the site: <strong>Vercel</strong>{" "}
        (hosting and analytics), <strong>Stripe</strong> (payments), and{" "}
        <strong>Brevo</strong> (email delivery). They process data only to provide
        their service to us.
      </p>

      <h2>Cookies</h2>
      <p>
        The public site uses minimal cookies, primarily for essential functionality.
        We do not run third-party advertising trackers.
      </p>

      <h2>Data retention &amp; your rights</h2>
      <p>
        We keep personal data only as long as needed for the purpose it was
        collected. You can ask us to access or delete your information at any time —
        email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
        take care of it.
      </p>

      <h2>Children</h2>
      <p>This site is intended for adults and is not directed at children under 16.</p>

      <h2>Changes</h2>
      <p>
        We may update this policy; material changes will be reflected by the date
        above. Questions? <Link href="/contact">Contact us</Link>.
      </p>
    </>
  );
}
