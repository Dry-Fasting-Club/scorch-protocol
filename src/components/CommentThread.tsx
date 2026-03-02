"use client";

import { useState } from "react";
import type { ThreadedComment } from "./CommentSection";
import CommentForm from "./CommentForm";

function formatDate(d: Date) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

interface CardProps {
  comment: ThreadedComment;
  sectionSlug: string;
  depth: number;
}

function CommentCard({ comment, sectionSlug, depth }: CardProps) {
  const [showReply, setShowReply] = useState(false);

  function handleReplySuccess() {
    setShowReply(false);
  }

  const isTop = depth === 0;

  return (
    <div className={isTop ? "comment-card" : `comment-reply-card${comment.is_admin_reply ? " admin-reply" : ""}`}>
      {/* Meta row */}
      <div className="comment-meta">
        {!isTop && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "var(--surface-3)",
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "var(--text-secondary)",
              flexShrink: 0,
            }}
          >
            {initials(comment.author_name)}
          </span>
        )}
        {comment.is_admin_reply && (
          <span className="comment-admin-badge">Yannick</span>
        )}
        <span className="comment-author">{comment.author_name}</span>
        <span>{formatDate(comment.submitted_at)}</span>
      </div>

      {/* Body */}
      <p>{comment.body}</p>

      {/* Reply button — only on top-level, only if not admin reply */}
      {isTop && !comment.is_admin_reply && (
        <button
          className="reply-btn"
          onClick={() => setShowReply((v) => !v)}
          type="button"
        >
          {showReply ? "Cancel" : "Reply"}
        </button>
      )}

      {/* Inline reply form */}
      {showReply && (
        <div className="inline-reply-form">
          <CommentForm
            sectionSlug={sectionSlug}
            parentId={comment.id}
            onSuccess={handleReplySuccess}
            compact
          />
        </div>
      )}

      {/* Nested replies */}
      {comment.replies.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.id}
              comment={reply}
              sectionSlug={sectionSlug}
              depth={1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface Props {
  comments: ThreadedComment[];
  sectionSlug: string;
}

export default function CommentThread({ comments, sectionSlug }: Props) {
  return (
    <div className="comment-list">
      {comments.map((c) => (
        <CommentCard key={c.id} comment={c} sectionSlug={sectionSlug} depth={0} />
      ))}
    </div>
  );
}
