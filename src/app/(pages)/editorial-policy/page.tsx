import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How content on The Scorch Protocol is researched, sourced, reviewed, and corrected — and how outcomes and conflicts of interest are disclosed.",
  alternates: { canonical: `${SITE_URL}/editorial-policy` },
};

export default function EditorialPolicyPage() {
  return (
    <>
      <h1>Editorial Policy</h1>
      <p className="static-page-updated">Last reviewed: July 2026</p>

      <p className="static-lede">
        This is a medical-adjacent site about a health protocol, so how the content
        is made matters as much as what it says. Here is the standard I hold it to.
      </p>

      <h2>Who writes it</h2>
      <p>
        Content is written by Yannick Wolfe, founder of The Scorch Protocol, who
        recovered from severe ME/CFS and Long Covid and now researches and coaches
        the protocol full-time. He is not a licensed physician; the authority here
        is lived experience plus independent research. Read the full{" "}
        <Link href="/about">background</Link>.
      </p>

      <h2>How claims are sourced</h2>
      <p>
        Physiological and mechanistic claims are grounded in the peer-reviewed
        literature wherever possible, including the Khoroshilov absolute-dry-fasting
        research series, Cahill&rsquo;s classic starvation-metabolism work, and the
        osmotic-stress and autophagy literature. The papers behind the protocol are
        collected on the <Link href="/research">research page</Link>, and key claims
        link to their source. Where a statement is experience or observation rather
        than published evidence, it is framed that way rather than dressed up as
        proof.
      </p>

      <h2>How outcomes are reported</h2>
      <p>
        The numbers on the{" "}
        <Link href="/success-rate-data">results page</Link> are observational and
        self-reported, from participants tracked by a single assessor, with no
        control group. We say so plainly, and we report the denominator (who
        started) alongside the success rate (who improved) rather than only the
        flattering figure.
      </p>

      <h2>Review, updates, and corrections</h2>
      <p>
        Protocol pages carry a last-reviewed date and are revised when new evidence
        or field experience warrants it. If you find an error, email{" "}
        <Link href="/contact">us</Link>; substantive corrections are made promptly.
      </p>

      <h2>Conflicts of interest</h2>
      <p>
        This is transparent: the site earns revenue from{" "}
        <Link href="/coaching">coaching</Link> and the{" "}
        <Link href="/membership">$1 membership</Link>. The core protocol is free to
        read in full, and nothing about the medical content is gated behind a
        purchase. We disclose this so you can weigh it.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Everything here is educational and is meant to be used with a qualified
        clinician, never as a replacement for one. See the{" "}
        <Link href="/medical-disclaimer">medical disclaimer</Link>.
      </p>
    </>
  );
}
