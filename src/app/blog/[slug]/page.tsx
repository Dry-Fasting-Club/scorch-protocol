/**
 * app/blog/[slug]/page.tsx
 * Individual blog post page.
 * Layout: post header → two-column (prose + TOC sidebar) → related posts → comments.
 * Tracks view count via a client-side fire-and-forget POST after render.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogPostRenderer from "@/components/BlogPostRenderer";
import TableOfContents from "@/components/TableOfContents";
import SocialShare from "@/components/SocialShare";
import BlogCard from "@/components/BlogCard";
import ViewTracker from "./ViewTracker";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { parseMarkdown } from "@/lib/markdown";
import { CATEGORY_LABEL } from "@/lib/blogCategories";

const SITE_URL = "https://scorchprotocol.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt;
  const ogImage = post.og_image_url || "/assets/scorch-og.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.published_at?.toISOString(),
      modifiedTime: post.updated_at.toISOString(),
      authors: [post.author_name],
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const { headings } = parseMarkdown(post.content);
  const relatedPosts = await getRelatedPosts(post.slug, post.category, 3);
  const categoryLabel = CATEGORY_LABEL[post.category] ?? post.category;
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  // Article JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author_name,
      url: "https://dryfastingclub.com",
    },
    publisher: {
      "@type": "Organization",
      name: "The Scorch Protocol",
      url: SITE_URL,
    },
    datePublished: post.published_at?.toISOString(),
    dateModified: post.updated_at.toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    ...(post.og_image_url && {
      image: { "@type": "ImageObject", url: post.og_image_url },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Fire-and-forget view count increment */}
      <ViewTracker slug={post.slug} />

      <article className="blog-post-page">
        {/* Post header */}
        <header className="blog-post-header">
          <div className="blog-post-header-meta">
            <Link
              href={`/blog/category/${post.category}`}
              className="blog-category-badge"
            >
              {categoryLabel}
            </Link>
            {post.published_at && (
              <span className="blog-card-date">
                {new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {post.reading_time_minutes && (
              <span className="blog-card-date">
                {post.reading_time_minutes} min read
              </span>
            )}
          </div>

          <h1 className="blog-post-title">{post.title}</h1>
          {post.subtitle && (
            <p className="blog-post-subtitle">{post.subtitle}</p>
          )}

          <div className="blog-post-author">
            <span>By {post.author_name}</span>
          </div>
        </header>

        {/* Two-column: prose + TOC */}
        <div className="blog-post-layout">
          <div className="blog-post-content">
            <BlogPostRenderer content={post.content} />

            {/* Link to related protocol section */}
            {post.related_protocol_slug && (
              <div
                className="guiding-questions box-orange"
                style={{ marginTop: "3rem" }}
              >
                <h3>Related Protocol Section</h3>
                <p>
                  This article explains the science behind a specific phase of
                  the Scorch Protocol.
                </p>
                <Link
                  href={`/${post.related_protocol_slug}`}
                  style={{ fontWeight: 600, color: "var(--scorch)" }}
                >
                  Read the full protocol section →
                </Link>
              </div>
            )}

            {/* Social share */}
            <SocialShare url={postUrl} title={post.title} />
          </div>

          {/* Sticky TOC sidebar */}
          {headings.length >= 2 && (
            <aside className="blog-post-toc">
              <TableOfContents headings={headings} />
            </aside>
          )}
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="blog-related">
            <h2>Related Articles</h2>
            <div className="blog-grid blog-grid-related">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}

        {/* Comments */}
      </article>
    </>
  );
}
