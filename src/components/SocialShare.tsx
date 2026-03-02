/**
 * components/SocialShare.tsx
 * Simple static share links (no JS libraries, no tracking).
 * Uses platform share URL schemes — Twitter/X, Facebook, Reddit, copy link.
 */

"use client";

import { useState } from "react";

interface Props {
  url: string;   // Full URL to share, e.g. "https://scorchprotocol.com/blog/..."
  title: string; // Post title for pre-fill
}

export default function SocialShare({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    },
    {
      label: "Reddit",
      href: `https://reddit.com/submit?url=${encoded}&title=${encodedTitle}`,
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  }

  return (
    <div className="share-buttons">
      <span className="share-label">Share:</span>
      {shareLinks.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          {label}
        </a>
      ))}
      <button className="share-btn" onClick={handleCopy} type="button">
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
