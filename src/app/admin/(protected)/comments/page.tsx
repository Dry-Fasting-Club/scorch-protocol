"use client";

import { useEffect, useState, useCallback } from "react";

interface Comment {
  id: number;
  section_slug: string;
  author_name: string;
  body: string;
  status: string;
  submitted_at: string;
  ip_address: string;
}

type Filter = "pending" | "approved" | "rejected";

async function fetchComments(status: Filter): Promise<Comment[]> {
  const res = await fetch(`/api/admin/comments?status=${status}`);
  if (!res.ok) throw new Error("Failed to load");
  return res.json();
}

async function moderate(id: number, action: "approve" | "reject") {
  const res = await fetch(`/api/comments/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action }),
  });
  if (!res.ok) throw new Error("Moderation failed");
}

export default function AdminCommentsPage() {
  const [filter, setFilter] = useState<Filter>("pending");
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState<Record<Filter, number>>({
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const [pending, approved, rejected] = await Promise.all([
        fetchComments("pending"),
        fetchComments("approved"),
        fetchComments("rejected"),
      ]);
      setCounts({
        pending: pending.length,
        approved: approved.length,
        rejected: rejected.length,
      });
      const map: Record<Filter, Comment[]> = { pending, approved, rejected };
      setComments(map[filter]);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    reload();
  }, [reload]);

  async function handleModerate(id: number, action: "approve" | "reject") {
    // Optimistic remove from list
    setComments((prev) => prev.filter((c) => c.id !== id));
    try {
      await moderate(id, action);
      // Refresh counts
      reload();
    } catch {
      reload(); // revert on failure
    }
  }

  const FILTERS: Filter[] = ["pending", "approved", "rejected"];

  return (
    <>
      <h1 style={{ marginTop: 0 }}>Comment Moderation</h1>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "6px 16px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              background: filter === f ? "#2c3e50" : "white",
              color: filter === f ? "white" : "#333",
              fontWeight: filter === f ? 600 : 400,
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {f}
            {f === "pending" && counts.pending > 0 && (
              <span className="badge" style={{ marginLeft: "6px" }}>
                {counts.pending}
              </span>
            )}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: "#888" }}>Loading…</p>
      ) : comments.length === 0 ? (
        <p style={{ color: "#888", fontStyle: "italic" }}>
          No {filter} comments.
        </p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Section</th>
              <th style={{ width: "15%" }}>Author</th>
              <th>Comment</th>
              <th style={{ width: "12%" }}>Date</th>
              {filter === "pending" && <th style={{ width: "12%" }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {comments.map((c) => (
              <tr key={c.id}>
                <td>
                  <code style={{ fontSize: "0.8rem" }}>{c.section_slug}</code>
                </td>
                <td>{c.author_name}</td>
                <td style={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}>
                  {c.body}
                </td>
                <td style={{ fontSize: "0.8rem", color: "#888" }}>
                  {new Date(c.submitted_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </td>
                {filter === "pending" && (
                  <td>
                    <button
                      className="admin-btn approve"
                      onClick={() => handleModerate(c.id, "approve")}
                    >
                      Approve
                    </button>
                    <button
                      className="admin-btn reject"
                      onClick={() => handleModerate(c.id, "reject")}
                    >
                      Reject
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
