import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "About Yannick Wolfe",
  description:
    "Yannick Wolfe founded The Scorch Protocol after recovering from severe ME/CFS and Long Covid. His story, how the protocol came together, and what he is and isn't.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/about#yannick`,
  name: "Yannick Wolfe",
  url: `${SITE_URL}/about`,
  description:
    "Founder of The Scorch Protocol. Recovered from severe ME/CFS and Long Covid and now an independent researcher documenting a dry-fasting, T3, and hGH recovery protocol.",
  knowsAbout: [
    "ME/CFS",
    "Long Covid",
    "dry fasting",
    "T3 thyroid therapy",
    "human growth hormone",
    "metabolic recovery",
    "autophagy",
  ],
  sameAs: ["https://dryfastingclub.com"],
  worksFor: { "@id": `${SITE_URL}/#organization` },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personLd} />

      <h1>About Yannick Wolfe</h1>
      <p className="static-page-updated">Founder, The Scorch Protocol</p>

      <p className="static-lede">
        I built this site because I was the patient first. The Scorch Protocol is
        the recovery approach I pieced together for myself after conventional
        medicine ran out of answers, then refined by tracking it across other
        people living the same nightmare.
      </p>

      <h2>How this started</h2>
      <p>
        I crashed with severe ME/CFS and Long Covid. For a long stretch the basics
        of a normal life were gone, and the standard workups kept coming back with
        the same message: nothing definitive, nothing that helped. So I did what a
        lot of people in this position eventually do. I started reading everything,
        running careful self-experiments, and paying attention to what actually
        moved the needle instead of what was supposed to.
      </p>
      <p>
        Dry fasting was the turning point. Layered with thyroid (T3) support to
        restart a stalled metabolism, and later a growth-hormone phase to rebuild,
        it pulled me out. That sequence — prepare, dry fast, refeed, T3, hGH — is
        what became the protocol on this site.
      </p>

      <h2>What the Scorch Protocol is</h2>
      <p>
        It is a structured, data-driven metabolic recovery protocol aimed at ME/CFS
        and Long Covid, grounded in the physiology of{" "}
        <Link href="/dry-fasting">dry fasting</Link>,{" "}
        <Link href="/t3-therapy">T3 therapy</Link>, and{" "}
        <Link href="/hgh-therapy">hGH</Link>. It is not a single miracle switch; it
        is a sequence with preparation, timing, and exit steps that matter. The
        outcomes I publish come from real people I have tracked, laid out honestly
        on the <Link href="/success-rate-data">results page</Link>, methodology and
        limitations included.
      </p>

      <h2>What I am, and what I&rsquo;m not</h2>
      <p>
        I am not a physician and I hold no medical license. My authority here is
        lived experience plus years of independent research and hands-on work with
        others running the protocol. That is a real form of expertise, and it is
        also a boundary I take seriously: everything on this site is educational,
        not medical advice, and it is written to be used <em>with</em> a doctor,
        not instead of one. Several phases involve prescription medication and are
        genuinely not safe for everyone — the{" "}
        <Link href="/contraindications">contraindications page</Link> exists for a
        reason, and I would rather you skip the protocol than get hurt by it.
      </p>

      <h2>How I work now</h2>
      <p>
        Recovered, I now spend my time documenting the protocol in the open,
        working one-on-one with people through{" "}
        <Link href="/coaching">coaching</Link> and the{" "}
        <Link href="/membership">members portal</Link>, and running the{" "}
        <a href="https://dryfastingclub.com" rel="noopener" target="_blank">
          Dry Fasting Club
        </a>{" "}
        community. Every claim I make, I try to tie back to the{" "}
        <Link href="/research">research it came from</Link>.
      </p>

      <p>
        Questions, corrections, or your own story?{" "}
        <Link href="/contact">Get in touch</Link>.
      </p>
    </>
  );
}
