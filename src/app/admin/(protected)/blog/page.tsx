/**
 * app/admin/(protected)/blog/page.tsx
 * Admin blog post list — shows all posts (any status) with actions.
 * Server component — auth is handled by the parent (protected) layout.
 */

import Link from "next/link";
import { adminGetAllPosts } from "@/lib/blog";
import { CATEGORY_LABEL } from "@/lib/blogCategories";

const STATUS_COLORS: Record<string, string> = {
  published: "#166534",
  draft:     "#1d4a6e",
  archived:  "#44403c",
};

export default async function AdminBlogListPage() {
  const posts = await adminGetAllPosts();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h1 style={{ margin: 0, color: "var(--heading-color)", fontSize: "1.4rem" }}>
          Blog Posts
        </h1>
        <Link
          href="/admin/blog/new"
          style={{
            background: "var(--scorch)",
            color: "#fff",
            padding: "0.5rem 1.1rem",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p style={{ color: "var(--text-muted)" }}>No posts yet. Create your first post.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Words</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td style={{ maxWidth: 320 }}>
                  <span style={{ fontWeight: 600, color: "var(--heading-color)" }}>
                    {post.title}
                  </span>
                  <br />
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    /blog/{post.slug}
                  </span>
                </td>
                <td style={{ fontSize: "0.85rem" }}>
                  {CATEGORY_LABEL[post.category] ?? post.category}
                </td>
                <td>
                  <span
                    style={{
                      display: "inline-block",
                      background: STATUS_COLORS[post.status] ?? "#333",
                      color: "#fff",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.status}
                  </span>
                </td>
                <td style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  {post.word_count ?? "—"}
                </td>
                <td style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      })
                    : "—"}
                </td>
                <td>
                  <Link
                    href={`/admin/blog/${post.id}`}
                    className="admin-btn approve"
                    style={{ textDecoration: "none", display: "inline-block" }}
                  >
                    Edit
                  </Link>
                  {post.status === "published" && (
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="admin-btn"
                      style={{ background: "#1e293b", color: "#94a3b8", textDecoration: "none", display: "inline-block" }}
                    >
                      View
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
