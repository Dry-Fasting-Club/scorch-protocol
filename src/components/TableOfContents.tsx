/**
 * components/TableOfContents.tsx
 * Client component — sticky sidebar on desktop, collapsible on mobile.
 * Highlights the currently visible section as the user scrolls.
 * Receives headings extracted server-side by parseMarkdown().
 */

"use client";

import { useEffect, useState } from "react";
import type { HeadingItem } from "@/lib/markdown";

interface Props {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false); // mobile toggle

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav className="toc" aria-label="Table of contents">
      {/* Mobile toggle */}
      <button
        className="toc-mobile-toggle"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        Contents {open ? "▲" : "▼"}
      </button>

      <div className={`toc-list${open ? " toc-list-open" : ""}`}>
        <p className="toc-label">On this page</p>
        <ul>
          {headings.map(({ id, text, level }) => (
            <li
              key={id}
              className={`toc-item toc-level-${level}${
                activeId === id ? " toc-active" : ""
              }`}
            >
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
