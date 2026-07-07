import Link from "next/link";
import { getPostsByProtocolSlug } from "@/lib/blog";

/**
 * "Further reading from the blog" block for protocol pages. Reverse-looks-up blog
 * posts whose related_protocol_slug points at this page, closing the protocol→blog
 * internal-linking loop. Renders nothing when there are no matching posts.
 */
export default async function ProtocolFurtherReading({
  protocolSlug,
}: {
  protocolSlug: string;
}) {
  const posts = await getPostsByProtocolSlug(protocolSlug, 4);
  if (posts.length === 0) return null;

  return (
    <section className="further-reading" aria-label="Further reading from the blog">
      <h2>Further reading from the blog</h2>
      <ul className="further-reading-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            {p.reading_time_minutes ? (
              <span className="further-reading-time"> · {p.reading_time_minutes} min read</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
