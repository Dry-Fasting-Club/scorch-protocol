/**
 * app/blog/tag/[tag]/page.tsx
 * Lists all published posts with a given tag.
 */

import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const label = decodeURIComponent(tag);
  return {
    title: `Posts tagged "${label}"`,
    description: `Scorch Protocol articles tagged with ${label}.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const label = decodeURIComponent(tag);
  const posts = await getPublishedPosts({ tag: label, limit: 30 });

  return (
    <div className="blog-index">
      <div className="blog-index-header">
        <p className="blog-breadcrumb">
          <Link href="/blog">Blog</Link> / Tag: {label}
        </p>
        <h1>Tagged: {label}</h1>
        <p className="blog-index-subtitle">
          {posts.length} article{posts.length !== 1 ? "s" : ""} tagged &ldquo;{label}&rdquo;.
        </p>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <Link href="/blog" className="blog-filter-btn">
          ← All Posts
        </Link>
      </div>

      {posts.length > 0 ? (
        <section className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <p className="blog-empty">No articles with this tag yet.</p>
      )}
    </div>
  );
}
