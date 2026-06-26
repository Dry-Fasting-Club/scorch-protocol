// Builders for page-level JSON-LD structured data. Centralized so every
// protocol page emits consistent, valid schema.org markup via the <JsonLd>
// component. Keep these in sync with the WebSite/Organization graph in the
// root layout.

const SITE = "https://scorchprotocol.com";

const ORG = {
  "@type": "Organization",
  name: "The Scorch Protocol",
  url: SITE,
};

const AUTHOR = {
  "@type": "Person",
  name: "Yannick Wolfe",
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
    publisher: ORG,
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
