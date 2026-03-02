/**
 * BlogEditorForm.tsx
 * Client component — the interactive blog post editor.
 * Features: all post fields, live markdown preview, SEO char counters,
 * auto-slug generation from title, save draft / publish buttons.
 */

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";
import { BLOG_CATEGORIES } from "@/lib/blogCategories";
import { generateSlug } from "@/lib/markdown";
import type { BlogPost } from "@/lib/blog";

const PROTOCOL_SLUGS = [
  "", "preparation", "dry-fasting", "refeeding", "t3-therapy",
  "hgh-therapy", "symptom-management", "weight-loss",
  "genetic-polymorphisms", "tips-and-tricks", "success-rate-data",
  "refeed-for-bmr", "list-of-pharmacies", "random-thoughts",
];

interface Props {
  postId: number | null;
  initialData: BlogPost | null;
}

export default function BlogEditorForm({ postId, initialData }: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form fields
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [subtitle, setSubtitle] = useState(initialData?.subtitle ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [category, setCategory] = useState(initialData?.category ?? BLOG_CATEGORIES[0].slug);
  const [tags, setTags] = useState(initialData?.tags?.join(", ") ?? "");
  const [seoTitle, setSeoTitle] = useState(initialData?.seo_title ?? "");
  const [seoDesc, setSeoDesc] = useState(initialData?.seo_description ?? "");
  const [ogImage, setOgImage] = useState(initialData?.og_image_url ?? "");
  const [relatedSlug, setRelatedSlug] = useState(initialData?.related_protocol_slug ?? "");
  const [featured, setFeatured] = useState(initialData?.featured ?? false);
  const [slugEdited, setSlugEdited] = useState(Boolean(initialData?.slug));

  // Auto-generate slug from title (only while not manually edited)
  useEffect(() => {
    if (!slugEdited && title) {
      setSlug(generateSlug(title));
    }
  }, [title, slugEdited]);

  function buildPayload(status: "draft" | "published") {
    return {
      title: title.trim(),
      slug: slug.trim(),
      subtitle: subtitle.trim() || undefined,
      excerpt: excerpt.trim(),
      content,
      category,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      seo_title: seoTitle.trim() || undefined,
      seo_description: seoDesc.trim() || undefined,
      og_image_url: ogImage.trim() || undefined,
      related_protocol_slug: relatedSlug || undefined,
      featured,
      status,
    };
  }

  async function save(status: "draft" | "published") {
    setSaving(true);
    setMessage(null);

    const method = postId ? "PATCH" : "POST";
    const url = postId ? `/api/admin/blog/${postId}` : "/api/admin/blog";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(status)),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Save failed");

      setMessage({ type: "success", text: status === "published" ? "Published!" : "Draft saved." });

      // Redirect to list after save
      setTimeout(() => router.push("/admin/blog"), 1000);
    } catch (err: unknown) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong",
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="blog-editor">
      {/* Two-column: fields left, markdown right */}
      <div className="blog-editor-grid">
        {/* ── Left column: metadata fields ── */}
        <div className="blog-editor-meta">
          <div className="blog-editor-field">
            <label>Title <span className="field-required">*</span></label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="blog-editor-input"
            />
          </div>

          <div className="blog-editor-field">
            <label>Slug</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => { setSlug(e.target.value); setSlugEdited(true); }}
              placeholder="auto-generated-from-title"
              className="blog-editor-input"
            />
            <small>/blog/{slug || "..."}</small>
          </div>

          <div className="blog-editor-field">
            <label>Subtitle</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Optional subtitle shown under title"
              className="blog-editor-input"
            />
          </div>

          <div className="blog-editor-field">
            <label>Excerpt <span className="field-required">*</span></label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="1-2 sentence summary shown on blog cards and in SEO"
              rows={3}
              className="blog-editor-input"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="blog-editor-field">
              <label>Category <span className="field-required">*</span></label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="blog-editor-input"
              >
                {BLOG_CATEGORIES.map(({ slug: s, label }) => (
                  <option key={s} value={s}>{label}</option>
                ))}
              </select>
            </div>

            <div className="blog-editor-field">
              <label>Related Protocol Page</label>
              <select
                value={relatedSlug}
                onChange={(e) => setRelatedSlug(e.target.value)}
                className="blog-editor-input"
              >
                {PROTOCOL_SLUGS.map((s) => (
                  <option key={s} value={s}>{s || "— none —"}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="blog-editor-field">
            <label>Tags <small style={{ color: "var(--text-muted)" }}>(comma-separated)</small></label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="long-covid, t3, me-cfs"
              className="blog-editor-input"
            />
          </div>

          <div className="blog-editor-field">
            <label>SEO Title <small style={{ color: seoTitle.length > 60 ? "var(--danger)" : "var(--text-muted)" }}>{seoTitle.length}/60</small></label>
            <input
              type="text"
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              placeholder="Defaults to post title"
              maxLength={70}
              className="blog-editor-input"
            />
          </div>

          <div className="blog-editor-field">
            <label>SEO Description <small style={{ color: seoDesc.length > 160 ? "var(--danger)" : "var(--text-muted)" }}>{seoDesc.length}/160</small></label>
            <textarea
              value={seoDesc}
              onChange={(e) => setSeoDesc(e.target.value)}
              placeholder="Defaults to excerpt"
              rows={2}
              maxLength={180}
              className="blog-editor-input"
            />
          </div>

          <div className="blog-editor-field">
            <label>OG Image URL</label>
            <input
              type="text"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              placeholder="https://... or /assets/..."
              className="blog-editor-input"
            />
          </div>

          <div className="blog-editor-field" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              id="featured"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              style={{ width: "auto", margin: 0 }}
            />
            <label htmlFor="featured" style={{ marginBottom: 0 }}>Featured post (shown as hero on blog index)</label>
          </div>
        </div>

        {/* ── Right column: content editor ── */}
        <div className="blog-editor-content">
          <div className="blog-editor-tabs">
            <button
              type="button"
              className={`blog-editor-tab${activeTab === "write" ? " active" : ""}`}
              onClick={() => setActiveTab("write")}
            >
              Write
            </button>
            <button
              type="button"
              className={`blog-editor-tab${activeTab === "preview" ? " active" : ""}`}
              onClick={() => setActiveTab("preview")}
            >
              Preview
            </button>
            <span style={{ marginLeft: "auto", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {content.trim().split(/\s+/).length} words
            </span>
          </div>

          {activeTab === "write" ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post in Markdown..."
              className="blog-editor-textarea"
              spellCheck
            />
          ) : (
            <div
              className="prose blog-editor-preview"
              dangerouslySetInnerHTML={{ __html: marked.parse(content) as string }}
            />
          )}
        </div>
      </div>

      {/* ── Action bar ── */}
      <div className="blog-editor-actions">
        {message && (
          <span
            style={{
              fontSize: "0.9rem",
              color: message.type === "success" ? "var(--success)" : "var(--danger)",
            }}
          >
            {message.text}
          </span>
        )}
        <button
          type="button"
          className="admin-btn"
          style={{ background: "var(--surface-2)", color: "var(--text-secondary)", padding: "0.5rem 1.1rem" }}
          onClick={() => save("draft")}
          disabled={saving}
        >
          {saving ? "Saving…" : "Save Draft"}
        </button>
        <button
          type="button"
          className="admin-btn approve"
          style={{ padding: "0.5rem 1.4rem", fontSize: "0.9rem" }}
          onClick={() => save("published")}
          disabled={saving}
        >
          {saving ? "Publishing…" : "Publish"}
        </button>
      </div>
    </div>
  );
}
