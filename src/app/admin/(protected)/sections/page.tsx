"use client";

import { useEffect, useState } from "react";

interface Section {
  slug: string;
  title: string;
  paid_content_type: string | null;
  paid_content_key: string | null;
  price_cents: number;
  published: boolean;
}

export default function AdminSectionsPage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null); // slug being uploaded
  const [saving, setSaving] = useState<string | null>(null); // slug being saved

  async function loadSections() {
    setLoading(true);
    const res = await fetch("/api/admin/sections");
    if (res.ok) setSections(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    loadSections();
  }, []);

  async function handleTogglePublished(section: Section) {
    setSaving(section.slug);
    await fetch("/api/admin/sections", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: section.slug, published: !section.published }),
    });
    await loadSections();
    setSaving(null);
  }

  async function handleUpload(section: Section, file: File) {
    setUploading(section.slug);
    try {
      // 1. Get a pre-signed upload URL from our server
      const urlRes = await fetch("/api/admin/upload-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionSlug: section.slug, contentType: file.type }),
      });
      if (!urlRes.ok) {
        const err = await urlRes.json();
        alert("Error: " + err.error);
        return;
      }
      const { uploadUrl, objectKey } = await urlRes.json();

      // 2. Upload file directly to R2
      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!uploadRes.ok) {
        alert("Upload to R2 failed.");
        return;
      }

      // 3. Save objectKey + type to section record
      const ext = file.type === "application/pdf" ? "pdf" : "video";
      await fetch("/api/admin/sections", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: section.slug,
          paid_content_key: objectKey,
          paid_content_type: ext,
        }),
      });

      await loadSections();
      alert("Upload successful!");
    } finally {
      setUploading(null);
    }
  }

  if (loading) return <p style={{ color: "#888" }}>Loading sections…</p>;

  return (
    <>
      <h1 style={{ marginTop: 0 }}>Manage Sections</h1>
      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        Upload a video (MP4/WebM) or PDF for each section, then toggle
        &ldquo;Published&rdquo; to make it visible to paying users.
      </p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Section</th>
            <th>Content</th>
            <th>Price</th>
            <th>Published</th>
            <th>Upload</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((s) => (
            <tr key={s.slug}>
              <td>
                <strong>{s.title}</strong>
                <br />
                <code style={{ fontSize: "0.75rem", color: "#888" }}>{s.slug}</code>
              </td>
              <td>
                {s.paid_content_type ? (
                  <span style={{ color: "#27ae60" }}>
                    ✓ {s.paid_content_type.toUpperCase()}
                  </span>
                ) : (
                  <span style={{ color: "#999" }}>—</span>
                )}
              </td>
              <td>${((s.price_cents ?? 1000) / 100).toFixed(0)}</td>
              <td>
                <button
                  onClick={() => handleTogglePublished(s)}
                  disabled={saving === s.slug || !s.paid_content_key}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: s.paid_content_key ? "pointer" : "not-allowed",
                    background: s.published ? "#27ae60" : "#ccc",
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    opacity: !s.paid_content_key ? 0.5 : 1,
                  }}
                >
                  {s.published ? "Live" : "Draft"}
                </button>
              </td>
              <td>
                <label
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    background: uploading === s.slug ? "#999" : "#2c3e50",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    cursor: uploading === s.slug ? "not-allowed" : "pointer",
                    fontWeight: 600,
                  }}
                >
                  {uploading === s.slug ? "Uploading…" : "Choose File"}
                  <input
                    type="file"
                    accept="video/mp4,video/webm,application/pdf"
                    style={{ display: "none" }}
                    disabled={uploading !== null}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUpload(s, file);
                      e.target.value = ""; // reset so same file can be re-selected
                    }}
                  />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
