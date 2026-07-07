// Builders for page-level JSON-LD structured data. Centralized so every
// protocol page emits consistent, valid schema.org markup via the <JsonLd>
// component. Keep these in sync with the WebSite/Organization graph in the
// root layout.

const SITE = "https://scorchprotocol.com";

// Date the protocol pages were last editorially reviewed. Surfaced as a YMYL
// freshness/trust signal via `lastReviewed`. Bump when the pages are re-reviewed.
const REVIEWED_DATE = "2026-07-01";

// Reference the same Organization/Person entities defined in full in the root
// layout @graph, by @id, so search engines consolidate one authoritative node.
const ORG = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "The Scorch Protocol",
  url: SITE,
};

const AUTHOR = {
  "@type": "Person",
  "@id": `${SITE}/about#yannick`,
  name: "Yannick Wolfe",
  url: `${SITE}/about`,
};

export interface MedicalWebPageInput {
  /** Page name (no " | The Scorch Protocol" suffix). */
  name: string;
  description: string;
  /** Absolute path, e.g. "/dry-fasting". */
  path: string;
  /** Short label for the breadcrumb trail. */
  breadcrumbName: string;
  /** Optional MedicalCondition names the page is about. */
  about?: string[];
  /** ISO date this page was last reviewed; defaults to the site-wide review date. */
  lastReviewed?: string;
}

/**
 * Returns a [MedicalWebPage, BreadcrumbList] pair for a protocol page.
 * Pass the array straight to <JsonLd data={...} />.
 */
export function medicalWebPageLd(input: MedicalWebPageInput): object[] {
  const url = `${SITE}${input.path}`;

  const page: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: input.name,
    description: input.description,
    url,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "The Scorch Protocol", url: SITE },
    author: AUTHOR,
    reviewedBy: AUTHOR,
    lastReviewed: input.lastReviewed ?? REVIEWED_DATE,
    publisher: ORG,
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };

  if (input.about && input.about.length > 0) {
    page.about = input.about.map((name) => ({ "@type": "MedicalCondition", name }));
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: input.breadcrumbName, item: url },
    ],
  };

  return [page, breadcrumb];
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQPage schema. Pass every visible Q&A on the page (Google requires the
 * marked-up Q&A to match what the user can see). `answer` is plain text.
 */
export function faqPageLd(items: FaqItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/**
 * MedicalStudy schema for the success-rate-data page. Frames the outcome data
 * honestly: observational, self-reported, single assessor, no control group.
 */
export function medicalStudyLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalStudy",
    name: "The Scorch Protocol outcome data",
    description:
      "Observational outcome data from 141 tracked participants. Of the 32 who completed the full protocol (dry fasting, T3, and hGH therapy), 97% experienced significant improvement. Self-reported symptom scores, single assessor, no control group.",
    url: `${SITE}/success-rate-data`,
    studySubject: { "@type": "MedicalCondition", name: "Long COVID" },
    author: AUTHOR,
    sponsor: ORG,
  };
}
