/**
 * components/TopNav.tsx
 * Horizontal top navigation bar used on blog pages.
 * Client component — highlights the active route.
 * Protocol pages use MainNav (sidebar); blog pages use TopNav.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MEMBERSHIP_PATH } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/",              label: "Protocol" },
  { href: "/blog",          label: "Blog" },
  { href: "/faq",           label: "FAQ" },
  { href: "/success-rate-data", label: "Results" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="top-nav">
      <div className="top-nav-inner">
        {/* Brand */}
        <Link href="/" className="top-nav-brand">
          Scorch Protocol
        </Link>

        {/* Center links */}
        <nav className="top-nav-links">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`top-nav-link${isActive ? " active" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTAs */}
        <div className="top-nav-ctas">
          <Link href={MEMBERSHIP_PATH} className="top-nav-members">
            Join for $1 →
          </Link>
          <Link href="/preparation" className="top-nav-cta">
            Start Protocol →
          </Link>
        </div>
      </div>
    </header>
  );
}
