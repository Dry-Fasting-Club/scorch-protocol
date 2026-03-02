"use client";

import { useState } from "react";

interface Props {
  sectionSlug: string;
  priceDollars: string;
}

export default function UnlockButton({ sectionSlug, priceDollars }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/payments/create-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sectionSlug }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Failed to start checkout.");
      }
      window.location.href = data.url;
    } catch (err: unknown) {
      setLoading(false);
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <button
        className="unlock-btn"
        onClick={handleClick}
        disabled={loading}
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? "Redirecting to checkout…" : `Unlock Deep Dive ($${priceDollars})`}
      </button>
      {error && (
        <p style={{ color: "#e74c3c", marginTop: "0.5rem", fontSize: "0.9rem" }}>
          {error}
        </p>
      )}
    </>
  );
}
