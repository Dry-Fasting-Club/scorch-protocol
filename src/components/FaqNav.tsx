"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/faq", label: "FAQ Hub" },
  { href: "/faq/general-questions", label: "General Questions" },
  { href: "/faq/autophagy", label: "Autophagy & Fasting" },
  { href: "/faq/refeeding", label: "Refeeding" },
  { href: "/faq/kidneys", label: "Kidneys" },
  { href: "/faq/liver", label: "Liver" },
];

export default function FaqNav() {
  const pathname = usePathname();

  return (
    <nav>
      <h2>FAQ Section</h2>
      <ul>
        <li>
          <Link href="/" style={{ color: "#e74c3c", fontWeight: 700 }}>
            ← Back to Main Protocol
          </Link>
        </li>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={pathname === href ? "active" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
