"use client";

import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface Props {
  sectionSlug: string;
  /** If set, this form submits a reply to the given comment ID */
  parentId?: number;
  /** Called after a successful submission (used to close inline reply forms) */
  onSuccess?: () => void;
  /** Compact mode: smaller heading, used inside inline reply form */
  compact?: boolean;
}

export default function CommentForm({ sectionSlug, parentId, onSuccess, compact }: Props) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const isReply = parentId !== undefined;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hcaptchaToken) {
      setStatus("error");
      setMessage("Please complete the captcha.");
      return;
    }

    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      setStatus("success");
      setMessage("Your comment has been submitted for review. Thank you!");
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sectionSlug,
          authorName: name.trim(),
          body: body.trim(),
          hcaptchaToken,
          ...(isReply && { parentId }),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Submission failed.");
      }

      setStatus("success");
      setMessage("Submitted for review — thanks!");
      setName("");
      setBody("");
      setHcaptchaToken(null);
      captchaRef.current?.resetCaptcha();

      if (onSuccess) {
        // Small delay so the user reads the success message
        setTimeout(onSuccess, 1400);
      }
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      {!compact && (
        <h3>{isReply ? "Leave a Reply" : "Leave a Comment"}</h3>
      )}

      {/* Honeypot — hidden from real users */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor={`website-${parentId ?? "root"}`}>Website</label>
        <input
          id={`website-${parentId ?? "root"}`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label htmlFor={`name-${parentId ?? "root"}`}>Name</label>
      <input
        id={`name-${parentId ?? "root"}`}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
        maxLength={100}
      />

      <label htmlFor={`body-${parentId ?? "root"}`}>
        {isReply ? "Reply" : "Comment"}
      </label>
      <textarea
        id={`body-${parentId ?? "root"}`}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={isReply ? "Write your reply…" : "Share your experience or question…"}
        required
        maxLength={2000}
        style={compact ? { height: 80 } : undefined}
      />

      <div style={{ marginBottom: "1rem" }}>
        {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ? (
          <HCaptcha
            ref={captchaRef}
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            onVerify={(token) => setHcaptchaToken(token)}
            onExpire={() => setHcaptchaToken(null)}
          />
        ) : (
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", fontStyle: "italic" }}>
            Captcha not configured — set NEXT_PUBLIC_HCAPTCHA_SITE_KEY in .env.local
          </p>
        )}
      </div>

      <button
        type="submit"
        className="comment-submit-btn"
        disabled={status === "loading"}
      >
        {status === "loading"
          ? "Submitting…"
          : isReply
          ? "Post Reply"
          : "Submit Comment"}
      </button>

      {status !== "idle" && status !== "loading" && (
        <div className={`form-message ${status}`}>{message}</div>
      )}
    </form>
  );
}
