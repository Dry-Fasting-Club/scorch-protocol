import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Research & Citations",
  description:
    "The peer-reviewed and specialized fasting literature behind The Scorch Protocol: renal safety, ketone metabolism, growth hormone, osmotic-stress autophagy, and the Khoroshilov dry-fasting series.",
  alternates: { canonical: `${SITE_URL}/research` },
};

type Ref = {
  title: string;
  authors?: string;
  source?: string;
  href?: string;
  shows: string;
  phase?: { label: string; href: string };
};

const MODERN: Ref[] = [
  {
    title:
      "Anthropometric, Hemodynamic, Metabolic, and Renal Responses during 5 Days of Food and Water Deprivation",
    authors: "Papagiannopoulos IA, Sideris VI, Boschmann M, Koutsoni OS, Dotsika EN",
    source: "Forschende Komplementärmedizin (Research in Complementary Medicine), 2013; 20(6):427–433",
    href: "https://doi.org/10.1159/000357718",
    shows:
      "In healthy adults, five days of total food and water deprivation was hemodynamically stable (blood pressure and heart rate steady, no arrhythmias, no clinical dehydration), with mean weight loss ~1.4 kg/day. Kidney filtration (GFR) rose rather than fell. This is the clinical backbone for the safety framing of a supervised dry fast.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title: "Starvation in Man",
    authors: "Cahill GF Jr.",
    source: "New England Journal of Medicine, 1970 (foundational review)",
    shows:
      "The classic map of fasting metabolism: glycogen depletion in the first 24 hours, gluconeogenesis breaking down muscle protein in the 24–72 hour window, then the brain shifting to ketones (glucose demand falling from ~100 g/day to <40 g/day) and muscle breakdown sparing once ketosis is established. Underpins the day-by-day physiology and the case for pairing T3 with adequate fuel.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
];

const MECHANISM: Ref[] = [
  {
    title: "Hyperosmotic Stress Induces Unconventional Autophagy Independent of the Ulk1 Complex",
    source: "Molecular and cellular autophagy literature",
    shows:
      "Hyperosmotic (dehydration-like) conditions initiate autophagy even when nutrients are present, bypassing the normal amino-acid-sensing Ulk1/mTOR pathway. This is the mechanistic basis for why dry fasting drives a distinct, faster cellular clean-out than water fasting.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
  {
    title: "Hypertonic stress promotes autophagy and microtubule-dependent autophagosomal clusters",
    source: "Autophagy, 2013",
    shows:
      "Hypertonic (dehydration) stress is a potent, rapid trigger of autophagy that specifically clears p62-positive, misfolded protein aggregates via microtubule-dependent remodeling. Supports the 'deep clean' rationale behind the dry-fast and hGH rebuild phases.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Kinetics of osmotic stress regulate a cell-fate switch",
    source: "Osmotic-stress cell-biology literature",
    shows:
      "How the timing and intensity of osmotic stress push cells toward adaptation versus clearance — relevant to why dry-fast duration and refeed timing matter.",
    phase: { label: "Refeeding", href: "/refeeding" },
  },
];

const DRY_FASTING_SERIES: Ref[] = [
  {
    title: "The state of water and mineral metabolism under conditions of absolute (dry) fasting",
    shows:
      "Documents maximal urinary concentration (osmolality ~1,080 mOsm/kg by day 3), a large ADH rise, oliguria, and aggressive renal sodium/potassium conservation during a 3-day dry fast.",
    phase: { label: "Kidneys FAQ", href: "/faq/kidneys" },
  },
  {
    title: "Change of the indices of protein metabolism under conditions of absolute (dry) fasting",
    shows:
      "Serum creatinine rises modestly (attributed to hemoconcentration, not renal damage) while urine creatinine output stays constant (muscle preserved); urea stays within normal clinical limits and albumin is maintained.",
    phase: { label: "Kidneys FAQ", href: "/faq/kidneys" },
  },
  {
    title: "Comprehensive assessment of body composition during absolute (dry) fasting",
    shows:
      "A large growth-hormone surge acts anti-catabolically (favoring fat breakdown over muscle), with lean mass almost entirely preserved. Supports the protein-sparing and hGH rationale.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Influence of absolute (dry) fasting on metabolic processes and organ function",
    shows:
      "Profound insulin suppression and a large improvement in insulin sensitivity (HOMA-IR) during dry fasting — the metabolic reset the protocol builds on.",
    phase: { label: "T3 Therapy", href: "/t3-therapy" },
  },
  {
    title: "Dry fasting and the immune system",
    shows:
      "Describes fasting as an immune 'reset,' with increases in cytotoxic T-cell and NK-cell activity that persist after a short fast.",
    phase: { label: "hGH Therapy", href: "/hgh-therapy" },
  },
  {
    title: "Absolute fasting: the effect of the complete absence of food and water on the human body",
    shows:
      "Metabolic-water production (~0.5–0.8 L/day) from the oxidation of fat and glycogen, the mechanism by which the body 'drinks' its own fat during a dry fast.",
    phase: { label: "Dry Fasting", href: "/dry-fasting" },
  },
];

function RefList({ refs }: { refs: Ref[] }) {
  return (
    <ul className="research-list">
      {refs.map((r) => (
        <li key={r.title} style={{ marginBottom: "1.25rem" }}>
          <div style={{ fontWeight: 600 }}>
            {r.href ? (
              <a href={r.href} rel="noopener nofollow" target="_blank">
                {r.title}
              </a>
            ) : (
              r.title
            )}
          </div>
          {(r.authors || r.source) && (
            <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: "0.15rem 0" }}>
              {[r.authors, r.source].filter(Boolean).join(". ")}
            </div>
          )}
          <p style={{ margin: "0.25rem 0 0" }}>{r.shows}</p>
          {r.phase && (
            <div style={{ fontSize: "0.85rem", marginTop: "0.25rem" }}>
              Used in: <Link href={r.phase.href}>{r.phase.label}</Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ResearchPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Research & Citations",
    url: `${SITE_URL}/research`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@type": "MedicalCondition", name: "Long COVID" },
  };

  return (
    <>
      <JsonLd data={collectionLd} />

      <h1>Research &amp; Citations</h1>
      <p className="static-lede">
        The protocol is built on physiology, and this page is where that
        physiology is sourced. Below is the literature the protocol draws on,
        grouped by what it establishes and linked to the protocol phase it informs.
      </p>

      <p>
        A note on honesty, because this is medical content: the evidence base is a
        mix. Some of it is modern, indexed, peer-reviewed research with a DOI you can
        open. Much of the dry-fasting-specific work comes from a specialized (largely
        Russian-language) clinical literature that is harder to link but real, and a
        few figures cited across the site are our own summaries of that work rather
        than a single indexed source. We try to make that distinction visible rather
        than dress every number up as a landmark trial.
      </p>

      <h2>Modern peer-reviewed research</h2>
      <RefList refs={MODERN} />

      <h2>Mechanism: osmotic stress &amp; autophagy</h2>
      <RefList refs={MECHANISM} />

      <h2>The absolute (dry) fasting clinical series</h2>
      <p>
        A body of specialized dry-fasting research (associated with the Khoroshilov
        line of work) documenting how the body handles total food-and-water
        deprivation — renal conservation, protein sparing, hormonal shifts, and
        immune effects. We cite it for mechanism and direction, and we flag where a
        specific number is an interpretation rather than a headline finding.
      </p>
      <RefList refs={DRY_FASTING_SERIES} />

      <h2>Have a correction?</h2>
      <p>
        If a citation is wrong, outdated, or better sourced elsewhere, tell us and
        we&rsquo;ll fix it. See our <Link href="/editorial-policy">editorial policy</Link>{" "}
        for how claims are sourced and corrected, and{" "}
        <Link href="/contact">get in touch</Link>.
      </p>
    </>
  );
}
