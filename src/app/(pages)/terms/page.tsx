import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of The Scorch Protocol, including the educational-only nature of the content and limitations of liability.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Use</h1>
      <p className="static-page-updated">Last updated: July 2026</p>

      <p className="static-lede">
        By using The Scorch Protocol (the &ldquo;site&rdquo;), you agree to these
        terms. If you don&rsquo;t agree, please don&rsquo;t use the site.
      </p>

      <h2>Educational information, not medical advice</h2>
      <p>
        All content is provided for general educational and informational purposes
        only and is not medical advice, diagnosis, or treatment. Using the site does
        not create a doctor-patient relationship. Always consult a qualified
        physician before acting on anything you read here. See the full{" "}
        <Link href="/medical-disclaimer">medical disclaimer</Link>.
      </p>

      <h2>Assumption of risk</h2>
      <p>
        The protocol discusses fasting and prescription medications (including T3 and
        hGH) that carry real risks and are not suitable for everyone. You are solely
        responsible for your own health decisions and for obtaining appropriate
        medical supervision. You use this information at your own risk.
      </p>

      <h2>No warranties</h2>
      <p>
        The site is provided &ldquo;as is,&rdquo; without warranties of any kind,
        express or implied. We do not warrant that the information is complete,
        current, or error-free, and outcomes described here are not a guarantee of
        your results.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, The Scorch Protocol and its founder
        are not liable for any damages arising from your use of, or reliance on, the
        site or its content.
      </p>

      <h2>Acceptable use &amp; intellectual property</h2>
      <p>
        Don&rsquo;t misuse the site, attempt to disrupt it, or scrape it in ways that
        harm the service. The content, design, and branding are owned by The Scorch
        Protocol; you may share and link to it, but not republish it wholesale as
        your own.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site links to external resources we don&rsquo;t control and aren&rsquo;t
        responsible for.
      </p>

      <h2>Changes &amp; contact</h2>
      <p>
        We may update these terms; continued use after changes means you accept them.
        Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
