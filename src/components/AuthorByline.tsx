import Link from "next/link";

/**
 * AuthorByline — a small end-of-page author box for E-E-A-T. Names the founder
 * so readers (and AI crawlers) can see who stands behind the protocol. Rendered
 * via the (main) layout and on blog posts, above the medical disclaimer.
 */
export default function AuthorByline() {
  return (
    <aside className="author-byline" aria-label="About the author">
      <p>
        <strong>Written by Yannick Wolfe</strong>, founder of The Scorch
        Protocol. He recovered from severe ME/CFS and Long Covid after
        conventional medicine had run out of answers, and has since worked
        one-on-one with the people whose outcomes are tracked on this site.{" "}
        <Link href="/about">Read his story →</Link>
      </p>
    </aside>
  );
}
