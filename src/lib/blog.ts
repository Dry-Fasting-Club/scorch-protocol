/**
 * lib/blog.ts
 * All database queries for the blog system.
 * Single source of truth — import from here instead of writing raw SQL in page files.
 *
 * All functions return plain objects (not Postgres Row proxies) for safe serialization.
 */

import sql from "@/lib/db";
import { estimateReadingTime, countWords } from "@/lib/markdown";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author_name: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  og_image_url: string | null;
  reading_time_minutes: number | null;
  word_count: number | null;
  seo_title: string | null;
  seo_description: string | null;
  related_protocol_slug: string | null;
  view_count: number;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
}

/** Lightweight version used for card grids — no content field */
export type BlogPostCard = Omit<BlogPost, "content">;

export interface CreatePostInput {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string;
  category: string;
  tags?: string[];
  author_name?: string;
  status?: "draft" | "published" | "archived";
  featured?: boolean;
  og_image_url?: string;
  seo_title?: string;
  seo_description?: string;
  related_protocol_slug?: string;
}

export interface UpdatePostInput extends Partial<CreatePostInput> {
  status?: "draft" | "published" | "archived";
}

// ─────────────────────────────────────────────────────────────────────────────
// Read queries (public)
// ─────────────────────────────────────────────────────────────────────────────

/** Get published posts, optionally filtered by category or tag. */
export async function getPublishedPosts(options?: {
  category?: string;
  tag?: string;
  limit?: number;
  offset?: number;
}): Promise<BlogPostCard[]> {
  const limit = options?.limit ?? 20;
  const offset = options?.offset ?? 0;

  let rows;

  if (options?.category) {
    rows = await sql`
      SELECT id, slug, title, subtitle, excerpt, category, tags,
             author_name, status, featured, og_image_url,
             reading_time_minutes, word_count, seo_title, seo_description,
             related_protocol_slug, view_count, published_at, created_at, updated_at
      FROM blog_posts
      WHERE status = 'published'
        AND category = ${options.category}
      ORDER BY published_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (options?.tag) {
    rows = await sql`
      SELECT id, slug, title, subtitle, excerpt, category, tags,
             author_name, status, featured, og_image_url,
             reading_time_minutes, word_count, seo_title, seo_description,
             related_protocol_slug, view_count, published_at, created_at, updated_at
      FROM blog_posts
      WHERE status = 'published'
        AND ${options.tag} = ANY(tags)
      ORDER BY published_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else {
    rows = await sql`
      SELECT id, slug, title, subtitle, excerpt, category, tags,
             author_name, status, featured, og_image_url,
             reading_time_minutes, word_count, seo_title, seo_description,
             related_protocol_slug, view_count, published_at, created_at, updated_at
      FROM blog_posts
      WHERE status = 'published'
      ORDER BY published_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  }

  return rows as unknown as BlogPostCard[];
}

/** Get the single featured post for the blog index hero. */
export async function getFeaturedPost(): Promise<BlogPostCard | null> {
  const rows = await sql`
    SELECT id, slug, title, subtitle, excerpt, category, tags,
           author_name, status, featured, og_image_url,
           reading_time_minutes, word_count, seo_title, seo_description,
           related_protocol_slug, view_count, published_at, created_at, updated_at
    FROM blog_posts
    WHERE status = 'published' AND featured = true
    ORDER BY published_at DESC
    LIMIT 1
  `;
  return (rows[0] as unknown as BlogPostCard) ?? null;
}

/** Get a single published post by slug (includes full content). */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const rows = await sql`
    SELECT *
    FROM blog_posts
    WHERE slug = ${slug} AND status = 'published'
    LIMIT 1
  `;
  return (rows[0] as unknown as BlogPost) ?? null;
}

/** Get related posts (same category, excluding current post). */
export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<BlogPostCard[]> {
  const rows = await sql`
    SELECT id, slug, title, subtitle, excerpt, category, tags,
           author_name, status, featured, og_image_url,
           reading_time_minutes, word_count, seo_title, seo_description,
           related_protocol_slug, view_count, published_at, created_at, updated_at
    FROM blog_posts
    WHERE status = 'published'
      AND category = ${category}
      AND slug != ${currentSlug}
    ORDER BY published_at DESC
    LIMIT ${limit}
  `;
  return rows as unknown as BlogPostCard[];
}

/** Get all unique categories with post counts (for sidebar/nav). */
export async function getCategories(): Promise<
  { category: string; count: number }[]
> {
  const rows = await sql`
    SELECT category, COUNT(*) as count
    FROM blog_posts
    WHERE status = 'published'
    GROUP BY category
    ORDER BY count DESC
  `;
  return rows.map((r) => ({
    category: r.category as string,
    count: Number(r.count),
  }));
}

/** Get all unique tags with post counts. */
export async function getTags(): Promise<{ tag: string; count: number }[]> {
  const rows = await sql`
    SELECT tag, COUNT(*) as count
    FROM blog_posts, UNNEST(tags) AS tag
    WHERE status = 'published'
    GROUP BY tag
    ORDER BY count DESC
    LIMIT 50
  `;
  return rows.map((r) => ({ tag: r.tag as string, count: Number(r.count) }));
}

/** Get all published post slugs (for sitemap). */
export async function getAllPublishedSlugs(): Promise<
  { slug: string; updated_at: Date }[]
> {
  const rows = await sql`
    SELECT slug, updated_at
    FROM blog_posts
    WHERE status = 'published'
    ORDER BY published_at DESC
  `;
  return rows as unknown as { slug: string; updated_at: Date }[];
}

/** Get the 20 most recent posts for RSS feed (includes content). */
export async function getPostsForRss(limit = 20): Promise<BlogPost[]> {
  const rows = await sql`
    SELECT *
    FROM blog_posts
    WHERE status = 'published'
    ORDER BY published_at DESC
    LIMIT ${limit}
  `;
  return rows as unknown as BlogPost[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Write queries (admin only — always call getAdminFromRequest before using)
// ─────────────────────────────────────────────────────────────────────────────

/** Get ALL posts (any status) for the admin list view. */
export async function adminGetAllPosts(): Promise<BlogPostCard[]> {
  const rows = await sql`
    SELECT id, slug, title, subtitle, excerpt, category, tags,
           author_name, status, featured, og_image_url,
           reading_time_minutes, word_count, seo_title, seo_description,
           related_protocol_slug, view_count, published_at, created_at, updated_at
    FROM blog_posts
    ORDER BY updated_at DESC
  `;
  return rows as unknown as BlogPostCard[];
}

/** Get a single post by ID for admin editing (any status). */
export async function adminGetPostById(id: number): Promise<BlogPost | null> {
  const rows = await sql`
    SELECT * FROM blog_posts WHERE id = ${id} LIMIT 1
  `;
  return (rows[0] as unknown as BlogPost) ?? null;
}

/** Create a new blog post. Auto-computes reading_time and word_count. */
export async function adminCreatePost(input: CreatePostInput): Promise<BlogPost> {
  const wordCount = countWords(input.content);
  const readingTime = estimateReadingTime(input.content);
  const publishedAt =
    input.status === "published" ? new Date() : null;

  const rows = await sql`
    INSERT INTO blog_posts (
      slug, title, subtitle, excerpt, content, category, tags,
      author_name, status, featured, og_image_url,
      reading_time_minutes, word_count, seo_title, seo_description,
      related_protocol_slug, published_at
    ) VALUES (
      ${input.slug},
      ${input.title},
      ${input.subtitle ?? null},
      ${input.excerpt},
      ${input.content},
      ${input.category},
      ${input.tags ?? []},
      ${input.author_name ?? "Yannick Wolfe"},
      ${input.status ?? "draft"},
      ${input.featured ?? false},
      ${input.og_image_url ?? null},
      ${readingTime},
      ${wordCount},
      ${input.seo_title ?? null},
      ${input.seo_description ?? null},
      ${input.related_protocol_slug ?? null},
      ${publishedAt}
    )
    RETURNING *
  `;
  return rows[0] as unknown as BlogPost;
}

/** Update an existing post. Recomputes word_count / reading_time if content changed. */
export async function adminUpdatePost(
  id: number,
  input: UpdatePostInput
): Promise<BlogPost> {
  // Build dynamic update — only update fields that were provided
  const updates: Record<string, unknown> = { updated_at: new Date() };

  if (input.title !== undefined) updates.title = input.title;
  if (input.slug !== undefined) updates.slug = input.slug;
  if (input.subtitle !== undefined) updates.subtitle = input.subtitle;
  if (input.excerpt !== undefined) updates.excerpt = input.excerpt;
  if (input.category !== undefined) updates.category = input.category;
  if (input.tags !== undefined) updates.tags = input.tags;
  if (input.author_name !== undefined) updates.author_name = input.author_name;
  if (input.featured !== undefined) updates.featured = input.featured;
  if (input.og_image_url !== undefined) updates.og_image_url = input.og_image_url;
  if (input.seo_title !== undefined) updates.seo_title = input.seo_title;
  if (input.seo_description !== undefined) updates.seo_description = input.seo_description;
  if (input.related_protocol_slug !== undefined) updates.related_protocol_slug = input.related_protocol_slug;

  if (input.content !== undefined) {
    updates.content = input.content;
    updates.word_count = countWords(input.content);
    updates.reading_time_minutes = estimateReadingTime(input.content);
  }

  if (input.status !== undefined) {
    updates.status = input.status;
    // Set published_at when first publishing
    if (input.status === "published") {
      const existing = await adminGetPostById(id);
      if (!existing?.published_at) {
        updates.published_at = new Date();
      }
    }
  }

  // postgres.js doesn't support dynamic column names in tagged templates,
  // so we use the UPDATE helper with explicit fields:
  const rows = await sql`
    UPDATE blog_posts SET
      title               = COALESCE(${updates.title as string | null}, title),
      slug                = COALESCE(${updates.slug as string | null}, slug),
      subtitle            = COALESCE(${updates.subtitle as string | null}, subtitle),
      excerpt             = COALESCE(${updates.excerpt as string | null}, excerpt),
      content             = COALESCE(${updates.content as string | null}, content),
      category            = COALESCE(${updates.category as string | null}, category),
      tags                = COALESCE(${updates.tags as string[] | null}, tags),
      author_name         = COALESCE(${updates.author_name as string | null}, author_name),
      status              = COALESCE(${updates.status as string | null}, status),
      featured            = COALESCE(${updates.featured as boolean | null}, featured),
      og_image_url        = COALESCE(${updates.og_image_url as string | null}, og_image_url),
      reading_time_minutes= COALESCE(${updates.reading_time_minutes as number | null}, reading_time_minutes),
      word_count          = COALESCE(${updates.word_count as number | null}, word_count),
      seo_title           = COALESCE(${updates.seo_title as string | null}, seo_title),
      seo_description     = COALESCE(${updates.seo_description as string | null}, seo_description),
      related_protocol_slug = COALESCE(${updates.related_protocol_slug as string | null}, related_protocol_slug),
      published_at        = COALESCE(${updates.published_at as Date | null}, published_at),
      updated_at          = NOW()
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0] as unknown as BlogPost;
}

/** Permanently delete a post. */
export async function adminDeletePost(id: number): Promise<void> {
  await sql`DELETE FROM blog_posts WHERE id = ${id}`;
}

/** Increment view count (fire-and-forget, never throws). */
export async function incrementViewCount(slug: string): Promise<void> {
  try {
    await sql`
      UPDATE blog_posts SET view_count = view_count + 1 WHERE slug = ${slug}
    `;
  } catch {
    // Non-critical — swallow errors silently
  }
}
