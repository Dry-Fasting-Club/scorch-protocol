# Scorch Protocol — App Architecture

> Quick-reference for future Claude sessions. Read this first.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 19) |
| Language | TypeScript (strict) |
| Database | Neon PostgreSQL (serverless) via `postgres` npm package |
| ORM | Raw SQL — tagged template literals (`sql\`...\``) |
| Storage | Cloudflare R2 (S3-compatible) for videos & PDFs |
| Payments | Stripe (checkout sessions + webhooks) |
| Captcha | hCaptcha (comment spam protection) |
| Auth | JWT via `jose` — admin-only (cookie: `sp_admin`, 12h) |
| Fonts | Fraunces (headings/display) + Inter (body) via Google Fonts |
| Deployment | Vercel (Next.js native) |

---

## Directory Map

```
scorch-app/
├── migrations/          # SQL migration files (run manually against Neon)
│   ├── 001_schema.sql           — base schema (sections, comments, purchases, admin_users)
│   ├── 001_comments_threading_and_blog.sql — parent_id threading, blog_posts table
│   └── 002_sections_paid_meta.sql          — paid_content_items JSONB, email_subscribers table
│
├── src/
│   ├── app/             # Next.js App Router pages & API routes
│   ├── components/      # Shared React components
│   └── lib/             # Server-side utilities (DB, auth, R2, etc.)
```

---

## Route Groups

### `(main)` — Public protocol site
Layout: [src/app/(main)/layout.tsx](src/app/(main)/layout.tsx)
Includes: `<ProgressBar>` + `<MainNav>` sidebar

| Path | File | Notes |
|---|---|---|
| `/` | `(main)/page.tsx` | Home page — sales funnel |
| `/<section>` | `(main)/[section]/page.tsx` | 22 protocol pages |
| `/faq` | `(main)/faq/page.tsx` | FAQ hub |
| `/faq/<topic>` | `(main)/faq/[topic]/page.tsx` | FAQ sub-pages |
| `/content/[slug]` | `content/[slug]/page.tsx` | **Paid content viewer** — auth-gated, force-dynamic |

### `blog/` — Blog (separate layout, TopNav)
Layout: [src/app/blog/layout.tsx](src/app/blog/layout.tsx)
Includes: `<ProgressBar>` + `<TopNav>` (horizontal nav)

| Path | File | Notes |
|---|---|---|
| `/blog` | `blog/page.tsx` | Blog index — featured hero + 9-post grid |
| `/blog/[slug]` | `blog/[slug]/page.tsx` | Post page — Article JSON-LD, TOC, social share |
| `/blog/category/[category]` | `blog/category/[category]/page.tsx` | Category filter |
| `/blog/tag/[tag]` | `blog/tag/[tag]/page.tsx` | Tag filter |

### `admin/(protected)` — Admin panel
Layout: [src/app/admin/(protected)/layout.tsx](src/app/admin/(protected)/layout.tsx)
Auth: `getAdminFromCookie()` → redirect to `/admin/login` if not authenticated

| Path | Notes |
|---|---|
| `/admin` | Dashboard |
| `/admin/blog` | Post list (all statuses) |
| `/admin/blog/new` | Create new post |
| `/admin/blog/[id]` | Edit existing post |
| `/admin/comments` | Comment moderation |
| `/admin/sections` | Paid content configuration |

---

## API Routes

### Public
| Method | Path | Purpose |
|---|---|---|
| GET | `/api/blog` | Paginated published posts — `?category`, `?tag`, `?limit`, `?page` |
| GET | `/api/blog/[slug]` | Single published post |
| POST | `/api/blog/[slug]/view` | Increment view count (fire-and-forget) |
| GET | `/api/comments?section=<slug>` | Approved comments for a section |
| POST | `/api/comments` | Submit comment (hCaptcha + rate-limit) |
| GET | `/api/rss` | RSS 2.0 feed — 20 most recent posts |
| POST | `/api/email-subscribe` | Email signup → DB + optional Brevo sync |
| POST | `/api/payments/create-session` | Create Stripe checkout session |
| POST | `/api/payments/webhook` | Stripe webhook handler |
| GET | `/api/content/[section]` | Get signed R2 URL (requires valid purchase cookie) |

### Admin (require `sp_admin` JWT cookie)
| Method | Path | Purpose |
|---|---|---|
| POST | `/api/admin/login` | Authenticate admin, set `sp_admin` cookie |
| GET | `/api/admin/blog` | All posts (any status) |
| POST | `/api/admin/blog` | Create post |
| GET | `/api/admin/blog/[id]` | Get post by ID |
| PATCH | `/api/admin/blog/[id]` | Partial update |
| DELETE | `/api/admin/blog/[id]` | Delete post |
| GET | `/api/admin/comments` | All pending comments |
| PATCH | `/api/admin/comments` | Approve/reject comment |
| GET/POST | `/api/admin/sections` | Section paid content config |
| POST | `/api/admin/upload-url` | Get pre-signed R2 PUT URL for uploads |

---

## Components

### Server Components
| Component | Purpose |
|---|---|
| `PaidContentBlock` | Paid content teaser/unlock block — reads DB + checks access cookie |
| `CommentSection` | Fetches + groups comments, renders `<CommentThread>` |
| `BlogPostRenderer` | Parses Markdown → HTML via `marked`, renders `<div className="prose">` |

### Client Components (`"use client"`)
| Component | Purpose |
|---|---|
| `MainNav` | Sidebar navigation for protocol pages (phase groups + badges) |
| `TopNav` | Horizontal sticky nav for blog pages |
| `ProgressBar` | Reading progress bar (scroll-based, fixed top) |
| `CommentThread` | Threaded comment tree — reply UI with inline form |
| `CommentForm` | Comment/reply submission form with hCaptcha |
| `UnlockButton` | Triggers Stripe checkout for paid content |
| `VideoPlayer` | Native HTML5 video player — custom dark-themed controls |
| `TableOfContents` | Sticky TOC with IntersectionObserver active heading tracking |
| `SocialShare` | Twitter/X, Facebook, Reddit share links + clipboard copy |
| `BlogCard` | Post card — `featured` prop for hero vs. grid variant |
| `EmailCapture` | Email signup form — `compact` prop for slim variant |
| `BlogEditorForm` | Full admin markdown editor with Write/Preview tabs |

---

## Library (`src/lib/`)

| File | Exports |
|---|---|
| `db.ts` | `sql` — Neon postgres.js tagged-template client |
| `auth.ts` | `signAdminToken`, `verifyAdminToken`, `getAdminFromCookie`, `getAdminFromRequest` |
| `tokens.ts` | `generateAccessToken`, `accessCookieName`, `setAccessCookie`, `getAccessToken`, `validateAccessToken`, `hasAccess` |
| `r2.ts` | `getSignedContentUrl`, `getSignedUploadUrl` |
| `blog.ts` | All DB queries for blog — see below |
| `markdown.ts` | `parseMarkdown` (→ html + headings[]), `estimateReadingTime`, `countWords`, `generateSlug`, `headingToId` |
| `blogCategories.ts` | `BLOG_CATEGORIES` array, `BlogCategorySlug` type, `CATEGORY_LABEL` record |

### `lib/blog.ts` public functions
- `getPublishedPosts({ category?, tag?, limit?, offset? })`
- `getFeaturedPost()`
- `getPostBySlug(slug)`
- `getRelatedPosts(currentSlug, category, limit?)`
- `getCategories()` → `{ category, count }[]`
- `getTags()` → `{ tag, count }[]`
- `getAllPublishedSlugs()` → `{ slug, updated_at }[]`
- `getPostsForRss(limit?)`
- `incrementViewCount(slug)` — fire-and-forget

### `lib/blog.ts` admin functions
- `adminGetAllPosts()`, `adminGetPostById(id)`
- `adminCreatePost(input)` — auto-computes word_count, reading_time, published_at
- `adminUpdatePost(id, input)` — partial update via COALESCE
- `adminDeletePost(id)`

---

## Database Schema

### `sections` table
Primary table for protocol pages. One row per section.
```
slug                VARCHAR(100) PK
title               VARCHAR(255)
paid_content_type   VARCHAR(10)  — 'video' | 'pdf' | NULL
paid_content_key    VARCHAR(500) — R2 object key (legacy single-item)
paid_content_items  JSONB        — [{type, title, description, key, duration_minutes?, page_count?}, ...]
price_cents         INTEGER      DEFAULT 1000
stripe_price_id     VARCHAR(100)
published           BOOLEAN
```

### `comments` table
Used for both protocol page comments AND blog post comments.
Blog posts use `section_slug = 'blog-<slug>'`.
```
id             SERIAL PK
section_slug   VARCHAR(100) FK→sections.slug
author_name    VARCHAR(100)
body           TEXT
status         VARCHAR(20)  — 'pending' | 'approved' | 'rejected'
ip_address     VARCHAR(45)
hcaptcha_ok    BOOLEAN
parent_id      INTEGER      FK→comments.id  (NULL = top-level, non-NULL = reply)
is_admin_reply BOOLEAN      DEFAULT false
submitted_at   TIMESTAMPTZ
```
Threading: max 2 levels. Server enforces `parent_id IS NULL` on parent to block 3rd level.

### `purchases` table
```
id                SERIAL PK
section_slug      VARCHAR(100) FK→sections.slug
stripe_session_id VARCHAR(255) UNIQUE
amount_cents      INTEGER
access_token      VARCHAR(64)  UNIQUE
purchased_at      TIMESTAMPTZ
```

### `admin_users` table
```
id            SERIAL PK
email         VARCHAR(255) UNIQUE
password_hash VARCHAR(255)
created_at    TIMESTAMPTZ
```

### `blog_posts` table
```
id                    SERIAL PK
slug                  VARCHAR(255) UNIQUE
title                 VARCHAR(500)
subtitle              VARCHAR(500)
excerpt               TEXT
content               TEXT         — Markdown source
category              VARCHAR(100)
tags                  TEXT[]
author_name           VARCHAR(255) DEFAULT 'Yannick Wolfe'
status                VARCHAR(20)  — 'draft' | 'published' | 'archived'
featured              BOOLEAN      DEFAULT false
og_image_url          VARCHAR(500)
reading_time_minutes  INTEGER
word_count            INTEGER
seo_title             VARCHAR(70)
seo_description       VARCHAR(160)
related_protocol_slug VARCHAR(100) — FK-like reference to sections.slug
view_count            INTEGER      DEFAULT 0
published_at          TIMESTAMPTZ
created_at            TIMESTAMPTZ  DEFAULT NOW()
updated_at            TIMESTAMPTZ  DEFAULT NOW()
```

### `blog_views` table
Lightweight analytics (IP + slug + timestamp).
```
id         SERIAL PK
post_slug  VARCHAR(255)
ip_address VARCHAR(45)
viewed_at  TIMESTAMPTZ DEFAULT NOW()
```

### `email_subscribers` table
```
id            SERIAL PK
email         VARCHAR(255) UNIQUE
source        VARCHAR(100)  — origin of signup ('blog-footer', 'home-hero', etc.)
confirmed     BOOLEAN       DEFAULT false
subscribed_at TIMESTAMPTZ   DEFAULT NOW()
```

---

## Auth Flows

### Admin Auth
1. POST `/api/admin/login` with `{ email, password }` → bcrypt compare → JWT signed with `ADMIN_JWT_SECRET`
2. `sp_admin` cookie set (httpOnly, secure, 12h)
3. All admin routes call `getAdminFromRequest(req)` or `getAdminFromCookie()` → returns adminId or null
4. Admin layout redirects to `/admin/login` if no valid cookie

### Paid Content Auth
1. User clicks "Unlock" → `UnlockButton` POSTs to `/api/payments/create-session` → Stripe checkout URL
2. After payment, Stripe webhook calls `/api/payments/webhook` → inserts purchase row + calls `setAccessCookie(slug, token)`
3. `sp_access_<slug>` cookie set (httpOnly, secure, 1-year)
4. `PaidContentBlock` calls `hasAccess(slug)` server-side → checks cookie token against `purchases` table
5. `/content/[slug]` page calls `hasAccess(slug)` → redirect if denied, else generate signed R2 URLs

---

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://...@neon.tech/...

# Admin JWT
ADMIN_JWT_SECRET=<random 64-char string>

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Cloudflare R2
CLOUDFLARE_ACCOUNT_ID=<account id>
R2_ACCESS_KEY_ID=<key id>
R2_SECRET_ACCESS_KEY=<secret>
R2_BUCKET_NAME=scorch-content

# hCaptcha
HCAPTCHA_SECRET_KEY=<secret>
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=<site key>

# Email (optional)
BREVO_API_KEY=<v3 api key>
BREVO_LIST_ID=<list id number>
```

---

## Key Design Decisions

1. **Single `comments` table for all pages** — blog posts use `section_slug = 'blog-<slug>'`. No sections-table FK check in the API (removed to allow blog slugs).

2. **2-level comment threading** — enforced server-side: `parent_id` target must have `parent_id IS NULL`. No Reply button on reply cards (depth===1 check in `CommentThread`).

3. **Blog paid content integration** — each blog post can set `related_protocol_slug`. When set, a CTA box links to the relevant protocol page at the bottom of the post.

4. **JSONB for paid content items** — `paid_content_items JSONB` on sections allows multiple videos/PDFs per section without schema changes. Backwards compatible — falls back to legacy `paid_content_key` if array is empty.

5. **Signed R2 URLs generated server-side** — `/content/[slug]/page.tsx` is a Server Component that calls `getSignedContentUrl()` directly. Signed URLs passed as props to `<VideoPlayer>`. 1-hour expiry.

6. **Markdown parsed server-side** — `BlogPostRenderer` calls `parseMarkdown()` at render time. Custom heading renderer extracts IDs for `TableOfContents`. Same `marked` library used client-side in `BlogEditorForm` for live preview.

7. **Sitemap is async** — `getAllPublishedSlugs()` fetches from DB. DB failure is caught and omitted gracefully (doesn't crash the sitemap).

8. **Email capture is non-blocking** — Brevo sync is fire-and-forget. DB is source of truth. Brevo failure is logged but never surfaces to the user.

---

## CSS Architecture

All styles live in `src/app/globals.css`. Organized into labeled sections:

1. CSS Variables (dark theme tokens)
2. Reset / Base
3. Layout (sidebar + main content)
4. Navigation (MainNav, progress bar, nav groups)
5. Protocol Pages (content typography, guidance boxes, etc.)
6. Comments (thread, cards, form, admin badges)
7. Paid Content Block (teaser rows, lock state, unlock button)
8. TopNav (blog horizontal nav)
9. Blog Layout & Index
10. Blog Cards
11. Blog Post Page (two-column layout)
12. Prose Typography (article body styles)
13. Table of Contents
14. Social Share
15. Email Capture
16. Blog Admin Editor
17. Video Player
18. Content Viewer Page
19. Responsive breakpoints (900px, 640px)

**Key CSS variables:**
```css
--bg-color: #0a0d12       /* near-black page background */
--surface: #111827        /* card / block backgrounds */
--surface-2: #1a2234      /* elevated surfaces */
--accent-color: #e85d04   /* scorch orange */
--scorch: #e85d04
--scorch-light: #ff7a1a
--scorch-dim: rgba(232,93,4,0.12)
--border: rgba(255,255,255,0.08)
--heading-color: #f1f5f9
--text-color: #cbd5e1
--text-secondary: #94a3b8
--text-muted: #64748b
--success: #22c55e
```
