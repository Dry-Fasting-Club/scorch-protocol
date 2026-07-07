import Link from "next/link";

export type Reference = {
  /** Full citation text (title + authors/source). */
  citation: string;
  /** Real, verified DOI/PMC/PubMed URL — only when one exists. */
  href?: string;
  /** One line on what it establishes for this page. */
  note?: string;
};

/**
 * End-of-page References block for the medical protocol pages. Citations without
 * a verified external URL are listed as text (we don't fabricate links); the full
 * annotated bibliography lives on /research.
 */
export default function ReferencesSection({ refs }: { refs: Reference[] }) {
  if (refs.length === 0) return null;
  return (
    <section className="references-section" aria-label="References">
      <h2>References</h2>
      <ol className="references-list">
        {refs.map((r, i) => (
          <li key={i} style={{ marginBottom: "0.6rem" }}>
            {r.href ? (
              <a href={r.href} rel="noopener nofollow" target="_blank">
                {r.citation}
              </a>
            ) : (
              <span>{r.citation}</span>
            )}
            {r.note && (
              <span style={{ color: "var(--text-muted)" }}> — {r.note}</span>
            )}
          </li>
        ))}
      </ol>
      <p style={{ fontSize: "0.9rem" }}>
        See the full <Link href="/research">research &amp; citations</Link> page for
        the complete evidence base and how each study is used.
      </p>
    </section>
  );
}
