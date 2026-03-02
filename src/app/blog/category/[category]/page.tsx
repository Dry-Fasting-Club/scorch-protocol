/**
 * app/blog/category/[category]/page.tsx
 * Lists all published posts in a given category.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getPublishedPosts } from "@/lib/blog";
import { CATEGORY_LABEL, BLOG_CATEGORIES } from "@/lib/blogCategories";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = CATEGORY_LABEL[category];
  if (!label) return { title: "Not Found" };
  return {
    title: `${label} Articles`,
    description: `Browse all Scorch Protocol articles on ${label}.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = CATEGORY_LABEL[category];
  if (!label) notFound();

  const posts = await getPublishedPosts({ category, limit: 30 });

  return (
    <div className="blog-index">
      <div className="blog-index-header">
        <p className="blog-breadcrumb">
          <Link href="/blog">Blog</Link> / {label}
        </p>
        <h1>{label}</h1>
        <p className="blog-index-subtitle">
          {posts.length} article{posts.length !== 1 ? "s" : ""} on {label}.
        </p>
      </div>

      {/* Category chips for easy navigation */}
      <div className="blog-category-filter">
        <Link href="/blog" className="blog-filter-btn">
          ← All Posts
        </Link>
        {BLOG_CATEGORIES.map(({ slug, label: catLabel }) => (
          <Link
            key={slug}
            href={`/blog/category/${slug}`}
            className={`blog-filter-btn${slug === category ? " active-filter" : ""}`}
          >
            {catLabel}
          </Link>
        ))}
      </div>

      {posts.length > 0 ? (
        <section className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
      ) : (
        <p className="blog-empty">No articles in this category yet.</p>
      )}
    </div>
  );
}
