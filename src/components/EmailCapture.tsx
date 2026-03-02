"use client";

/**
 * EmailCapture.tsx
 * Inline email signup widget — used in blog post footers, blog index sidebar,
 * and the home page hero section.
 *
 * Props:
 *   heading  - Optional custom heading (default: "Get Protocol Updates")
 *   body     - Optional description text
 *   source   - Passed to the API for analytics (default: "unknown")
 *   compact  - Renders a slim horizontal variant (no body text)
 */

import { useState } from "react";

interface Props {
  heading?: string;
  body?: string;
  source?: string;
  compact?: boolean;
}

const DEFAULT_HEADING = "Get Protocol Updates";
const DEFAULT_BODY =
  "New articles on dry fasting, T3 therapy, and recovery — delivered straight to your inbox. No spam, ever.";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function EmailCapture({
  heading = DEFAULT_HEADING,
  body = DEFAULT_BODY,
  source = "unknown",
  compact = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/email-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), source }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Subscription failed.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className={`email-capture email-capture--success${compact ? " email-capture--compact" : ""}`}>
        <p className="email-capture-success-msg">
          You&rsquo;re in. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className={`email-capture${compact ? " email-capture--compact" : ""}`}>
      {!compact && (
        <>
          <h3>{heading}</h3>
          <p>{body}</p>
        </>
      )}

      <form className="email-capture-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          className="email-capture-input"
          placeholder={compact ? "Your email address" : "your@email.com"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading"}
          aria-label="Email address"
          required
        />
        <button
          type="submit"
          className="email-capture-btn"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {status === "error" && errorMsg && (
        <p className="email-capture-error">{errorMsg}</p>
      )}
    </div>
  );
}
