import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://scorchprotocol.com";
const DESCRIPTION =
  "A data-driven protocol for metabolic recovery using dry fasting, T3 therapy, and hGH, designed for ME/CFS and Long Covid patients. 97% success rate across 141 participants.";

export const metadata: Metadata = {
  title: {
    default: "The Scorch Protocol",
    template: "%s | The Scorch Protocol",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "The Scorch Protocol",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "The Scorch Protocol",
    images: [
      {
        url: "/assets/images/faith/faith-preparation.png",
        width: 1280,
        height: 832,
        alt: "The Scorch Protocol | Dry Fasting, T3 Therapy & hGH for Chronic Illness Recovery",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Scorch Protocol",
    description: DESCRIPTION,
    images: ["/assets/images/faith/faith-preparation.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "The Scorch Protocol",
      description: DESCRIPTION,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/faq?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "The Scorch Protocol",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/scorch-og.png`,
      },
      founder: {
        "@type": "Person",
        name: "Yannick Wolfe",
        url: "https://dryfastingclub.com",
      },
      sameAs: ["https://dryfastingclub.com"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* RSS autodiscovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Scorch Protocol Blog"
          href="/api/rss"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
