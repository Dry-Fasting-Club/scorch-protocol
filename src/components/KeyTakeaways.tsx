/**
 * KeyTakeaways — a "What you need to know" TL;DR box for the top of a long
 * protocol page. Built for a cognitively-impaired audience (brain fog, fatigue):
 * a scannable 3-5 bullet gist before the full content. Reuses the site's
 * left-bordered callout look in scorch orange so it reads as the page anchor.
 *
 * Summarize only what the page already says — no new claims, numbers, or doses.
 */
export default function KeyTakeaways({ points }: { points: string[] }) {
  return (
    <aside className="key-takeaways" aria-label="Key takeaways">
      <p className="key-takeaways-title">What you need to know</p>
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </aside>
  );
}
