"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem =
  | { type: "link"; href: string; label: string; phase?: string }
  | { type: "group"; label: string };

const navItems: NavItem[] = [
  { type: "link",  href: "/",                    label: "Overview & Principles" },
  { type: "link",  href: "/decision-tree",        label: "Decision Logic Tree" },
  { type: "group", label: "Protocol Phases" },
  { type: "link",  href: "/preparation",          label: "Preparation",             phase: "01" },
  { type: "link",  href: "/dry-fasting",          label: "The Dry Fast",            phase: "02" },
  { type: "link",  href: "/refeeding",            label: "The Refeed",              phase: "03" },
  { type: "link",  href: "/t3-therapy",           label: "T3 Therapy",              phase: "04" },
  { type: "link",  href: "/hgh-therapy",          label: "hGH Therapy",             phase: "05" },
  { type: "group", label: "Supplements & Tools" },
  { type: "link",  href: "/symptom-management",   label: "Symptom Management" },
  { type: "link",  href: "/weight-loss",          label: "Weight Loss Protocol" },
  { type: "link",  href: "/genetic-polymorphisms",label: "Genetic Polymorphisms" },
  { type: "link",  href: "/tips-and-tricks",      label: "Tips and Tricks" },
  { type: "link",  href: "/mindfulness",           label: "Mindfulness & Neurology" },
  { type: "group", label: "Data & Reference" },
  { type: "link",  href: "/success-rate-data",    label: "Success Rate Data" },
  { type: "link",  href: "/refeed-for-bmr",       label: "9-Month BMR Reconstruction" },
  { type: "link",  href: "/list-of-pharmacies",   label: "List of Pharmacies" },
  { type: "link",  href: "/random-thoughts",      label: "Random Thoughts" },
  { type: "group", label: "Knowledge Base" },
  { type: "link",  href: "/faq",                  label: "FAQ Section" },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <h2>The Scorch Protocol</h2>
      <ul>
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
