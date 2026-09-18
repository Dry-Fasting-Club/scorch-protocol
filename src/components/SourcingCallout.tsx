import Link from "next/link";

/**
 * Inline upsell: the protocol is free to read, but SOURCING the medications is the
 * wall. The verified, current supplier contacts (slow-release T3, peptides, hGH,
 * cyproheptadine) live inside the members portal (Inner Circle). Drops onto the
 * T3, hGH, and pharmacy pages. Links to /membership. Heading overridable per page.
 */
export default function SourcingCallout({
  heading = "Can't actually get slow-release T3, peptides, or hGH?",
}: {
  heading?: string;
}) {
  return (
    <div
      className="guidance-box"
      style={{ borderColor: "rgba(232, 93, 4, 0.6)", background: "rgba(232, 93, 4, 0.06)" }}
    >
      <h3>{heading}</h3>
      <p>
        This is the wall almost everyone hits. No doctor will prescribe slow-release T3,
        and the peptide and hGH markets are full of fakes. Inside the members portal I
        share my current, personally verified supplier contacts for slow-release T3,
        peptides, hGH, and cyproheptadine, plus exactly what to order and how to dose it,
        worked out with you directly.
      </p>
      <Link href="/membership" className="guidance-btn">
        How the members portal works →
      </Link>
    </div>
  );
}
