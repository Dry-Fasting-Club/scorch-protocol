/**
 * app/blog/page.tsx
 * Blog index page.
 * Layout: featured hero post → category filter → 3-column post grid → load more.
 */

import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPost, getPublishedPosts, getCategories } from "@/lib/blog";
import { CATEGORY_LABEL } from "@/lib/blogCategories";

export const metadata: Metadata = {
  title: "Blog — Chronic Illness Research & Recovery",
  description:
    "Evidence-based articles on Long Covid, ME/CFS, dry fasting, T3 therapy, and the science of full recovery from chronic illness.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page ?? 1));
  const postsPerPage = 9;
  const offset = (page - 1) * postsPerPage;

  const [featured, posts, categories] = await Promise.all([
    getFeaturedPost(),
    getPublishedPosts({ limit: postsPerPage, offset }),
    getCategories(),
  ]);

  // Exclude featured post from the grid to avoid duplication
  const gridPosts = featured
    ? posts.filter((p) => p.slug !== featured.slug)
    : posts;

  return (
    <div className="blog-index">
      {/* Page header */}
      <div className="blog-index-header">
        <h1>Chronic Illness Research Hub</h1>
        <p className="blog-index-subtitle">
          Evidence-based articles on Long Covid, ME/CFS, dry fasting, T3
          therapy, and the science of full recovery.
        </p>
      </div>

      {/* Category filter */}
      {categories.length > 0 && (
        <div className="blog-category-filter">
          <Link href="/blog" className="blog-filter-btn active-filter">
            All
          </Link>
          {categories.map(({ category }) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className="blog-filter-btn"
            >
              {CATEGORY_LABEL[category] ?? category}
            </Link>
          ))}
        </div>
      )}

      {/* Featured post */}
      {featured && (
        <section className="blog-featured-section">
          <BlogCard post={featured} featured />
        </section>
      )}

      {/* Post grid */}
      {gridPosts.length > 0 ? (
        <section className="blog-grid">
          {gridPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <p className="blog-empty">No posts published yet.</p>
      )}

      {/* Pagination */}
      <div className="blog-pagination">
        {page > 1 && (
          <Link href={`/blog?page=${page - 1}`} className="blog-page-btn">
            ← Previous
          </Link>
        )}
        {posts.length === postsPerPage && (
          <Link href={`/blog?page=${page + 1}`} className="blog-page-btn">
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
