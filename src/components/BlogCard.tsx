/**
 * components/BlogCard.tsx
 * Post card used in the blog index grid, category pages, and tag pages.
 * Two variants:
 *   - default: compact card for 3-column grid
 *   - featured: large hero card for the top of the blog index
 */

import Link from "next/link";
import type { BlogPostCard } from "@/lib/blog";
import { CATEGORY_LABEL } from "@/lib/blogCategories";

interface Props {
  post: BlogPostCard;
  featured?: boolean;
}

function formatDate(d: Date | null): string {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post, featured = false }: Props) {
  const categoryLabel = CATEGORY_LABEL[post.category] ?? post.category;
  const date = formatDate(post.published_at);
  const readTime = post.reading_time_minutes
    ? `${post.reading_time_minutes} min read`
    : null;

  if (featured) {
    return (
      <article className="blog-card-featured">
        <div className="blog-card-featured-body">
          <div className="blog-card-meta">
            <span className="blog-category-badge">{categoryLabel}</span>
            {date && <span className="blog-card-date">{date}</span>}
            {readTime && <span className="blog-card-date">{readTime}</span>}
          </div>
          <h2 className="blog-card-featured-title">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          {post.subtitle && (
            <p className="blog-card-featured-subtitle">{post.subtitle}</p>
          )}
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="blog-card-read-more">
            Read Article →
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="blog-card">
      <div className="blog-card-meta">
        <span className="blog-category-badge">{categoryLabel}</span>
        {readTime && <span className="blog-card-date">{readTime}</span>}
      </div>
      <h3 className="blog-card-title">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-footer">
        <span className="blog-card-date">{date}</span>
        <Link href={`/blog/${post.slug}`} className="blog-card-arrow">
          Read →
        </Link>
      </div>
    </article>
  );
}
