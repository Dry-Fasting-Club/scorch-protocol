"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MEMBERSHIP_PATH } from "@/lib/constants";

type NavItem =
  | { type: "link"; href: string; label: string; phase?: string }
  | { type: "group"; label: string };

const navItems: NavItem[] = [
  { type: "link",  href: "/",                    label: "Overview & Principles" },
  { type: "link",  href: "/decision-tree",        label: "Decision Logic Tree" },
  { type: "link",  href: "/long-covid-basics",    label: "Long Covid Basics (start here)" },
  { type: "group", label: "Protocol Phases" },
  { type: "link",  href: "/preparation",          label: "Preparation",             phase: "01" },
  { type: "link",  href: "/dry-fasting",          label: "The Dry Fast",            phase: "02" },
  { type: "link",  href: "/refeeding",            label: "The Refeed",              phase: "03" },
  { type: "link",  href: "/t3-therapy",           label: "T3 Therapy",              phase: "04" },
  { type: "link",  href: "/hgh-therapy",          label: "hGH Therapy",             phase: "05" },
  { type: "group", label: "Supplements & Tools" },
  { type: "link",  href: "/viral-reactivation",  label: "Viral Reactivation" },
  { type: "link",  href: "/symptom-management",   label: "Symptom Management" },
  { type: "link",  href: "/weight-loss",          label: "Weight Loss Protocol" },
  { type: "link",  href: "/genetic-polymorphisms",label: "Genetic Polymorphisms" },
  { type: "link",  href: "/tips-and-tricks",      label: "Tips and Tricks" },
  { type: "link",  href: "/mindfulness",           label: "Mindfulness & Neurology" },
  { type: "group", label: "Data & Reference" },
  { type: "link",  href: "/success-rate-data",    label: "Success Rate Data" },
  { type: "link",  href: "/contraindications",    label: "Who Should Not Do This" },
  { type: "link",  href: "/refeed-for-bmr",       label: "9-Month BMR Reconstruction" },
  { type: "link",  href: "/list-of-pharmacies",   label: "List of Pharmacies" },
  { type: "link",  href: "/random-thoughts",      label: "Random Thoughts" },
  { type: "group", label: "Knowledge Base" },
  { type: "link",  href: "/blog",                 label: "Blog" },
  { type: "link",  href: "/faq",                  label: "FAQ Section" },
];

export default function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="main-nav" aria-label="Protocol navigation">
      <div className="main-nav-top">
        <h2>The Scorch Protocol</h2>
        <button
          type="button"
          className="main-nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav-list"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕ Close" : "☰ Menu"}
        </button>
      </div>
      <Link href={MEMBERSHIP_PATH} className="main-nav-members" onClick={() => setOpen(false)}>
        Join for $1 →
      </Link>
      <ul id="main-nav-list" className={open ? "main-nav-list open" : "main-nav-list"}>
        {navItems.map((item, i) => {
          if (item.type === "group") {
            return (
              <li key={`group-${i}`} style={{ listStyle: "none" }}>
                <span className="nav-group-label">{item.label}</span>
              </li>
            );
          }
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.phase && (
                  <span className="nav-phase-num">{item.phase}</span>
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
