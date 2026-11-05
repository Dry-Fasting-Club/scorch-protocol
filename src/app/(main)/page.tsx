import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import ProtocolTLDR from "@/components/ProtocolTLDR";
import PaidContentBlock from "@/components/PaidContentBlock";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";
import { MEMBERSHIP_PATH } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "The Scorch Protocol | Reverse Long Covid, ME/CFS & Chronic Illness" },
  description:
    "The Scorch Protocol combines dry fasting, T3 therapy, and regeneration bioenergetics to reverse Long Covid, ME/CFS, and autoimmune disease, for people whose labs read normal but who are still exhausted.",
  alternates: { canonical: "https://scorchprotocol.com/" },
};

const homeLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "The Scorch Protocol",
  description:
    "A protocol for reversing Long Covid and ME/CFS using dry fasting, T3 therapy, and regeneration bioenergetics.",
  url: "https://scorchprotocol.com/",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", name: "The Scorch Protocol", url: "https://scorchprotocol.com" },
  author: { "@type": "Person", name: "Yannick Wolfe" },
  publisher: { "@type": "Organization", name: "The Scorch Protocol", url: "https://scorchprotocol.com" },
  about: [
    { "@type": "MedicalCondition", name: "Long COVID" },
    { "@type": "MedicalCondition", name: "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome" },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeLd} />
      {/* ── HERO ── */}
      <section className="hero">
        <h1 className="hero-headline">
          Still Exhausted After Trying Everything for Long Covid?
        </h1>
        <p className="hero-sub">
          The Scorch Protocol combines dry fasting, T3 therapy, and
          regeneration bioenergetics to reset your immune system at the root,
          not just manage symptoms.
          Sometimes the orders change and sometimes fasting may not even be
          advisable. There is no one identical chronic illness sufferer. I built
          this protocol after recovering from severe ME/CFS and Long Covid.
        </p>
        <div className="hero-cta-group">
          <Link href="/success-rate-data" className="hero-btn hero-btn-primary">
            See What Improves, and For Whom &rarr;
          </Link>
          <Link href="/preparation" className="hero-btn hero-btn-secondary">
            Start the Protocol &rarr;
          </Link>
          <Link href={MEMBERSHIP_PATH} className="hero-btn hero-btn-secondary">
            Get a personalized plan &rarr;
          </Link>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          Not sure this is safe for you?{" "}
          <Link href="/contraindications">See who should not do this &rarr;</Link>
        </p>
      </section>

      <ProtocolTLDR />

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="proof-bar">
        <Link href="/success-rate-data" className="proof-stat" style={{ textDecoration: "none", color: "inherit" }}>
          <span className="proof-number">21+</span>
          <span className="proof-label">Symptoms Tracked &amp; Improved</span>
        </Link>
        <div className="proof-stat">
          <span className="proof-number">5</span>
          <span className="proof-label">Phase System With Clear Steps</span>
        </div>
        <div className="proof-stat">
          <span className="proof-number">10</span>
          <span className="proof-label">Day Fast Block: 5 Dry, 5 Water</span>
        </div>
      </div>

      {/* ── PAIN POINT QUALIFIER ── */}
      <div className="guiding-questions">
        <h3>You May Be a Candidate If You Have:</h3>
        <ul className="candidate-list">
          <li>
            <strong>Chronic illness</strong> (Long Covid, ME/CFS, Lyme disease,
            or autoimmune conditions that haven&rsquo;t responded to conventional
            treatment)
          </li>
          <li>
            <strong>Suppressed metabolism</strong>: low morning body
            temperature (below 37°C / 98.6°F), stubborn weight gain, or
            constant cold hands and feet
          </li>
          <li>
            <strong>Persistent fatigue or brain fog</strong>: feeling sick
            after exercise, cognitive impairment, or PEM (post-exertional
            malaise)
          </li>
          <li>
            <strong>A common gene variant (DIO2)</strong> that blunts T3
            conversion, which makes this protocol especially important
          </li>
          <li>
            <strong>Active viral load</strong>: EBV, HSV, spike protein
            persistence, or Lyme co-infections that conventional antivirals
            have not cleared
          </li>
          <li>
            <strong>Thyroid or hormonal dysfunction</strong>: even if labs
            look &ldquo;normal,&rdquo; your cells may not be using thyroid
            hormones correctly
          </li>
        </ul>
        <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          Not sure? Use the{" "}
          <Link href="/decision-tree">Decision Logic Tree &rarr;</Link> to find
          your starting point.
        </p>
      </div>

      {/* ── THREE PILLARS ── */}
      <h2>The Three Main Pillars</h2>
      <div className="core-pillars">
        <div className="pillar-item">
          <h3>
            <span style={{ opacity: 0.3 }}>01.</span> Dry Fasting: Deep Cleaning
          </h3>
          <p>
            This is the most powerful way to reverse illness. Chronic sickness
            often hides deep in your body and ties up your nervous system. The
            Scorch Protocol uses dry fasting to trigger a &ldquo;deep
            clean&rdquo; (autophagy). It forces the body to burn away old, sick
            cells and make room for new ones.{" "}
            <strong>This is the engine of the entire protocol.</strong>
          </p>
          <p className="pillar-outcome">
            <em>
              Eliminates the cellular debris and pathogens driving your chronic
              symptoms.
            </em>
          </p>
        </div>
        <div className="pillar-item">
          <h3>
            <span style={{ opacity: 0.3 }}>02.</span> T3 Therapy: The Reboot
          </h3>
          <p>
            Chronic illness often puts your body into a state of
            &ldquo;hibernation.&rdquo; Not everyone needs T3. It is the reboot
            for the person who comes out of the fast and the refeed still cold,
            with whole-body and brain fatigue that does not lift: a short course
            that brings the metabolism up to speed and then hands the job back
            to your own thyroid, set case by case. If you come out of the fast
            running hot, holding your weight and feeling great, you skip it.
          </p>
          <p className="pillar-outcome">
            <em>
              Reverses metabolic suppression from years of illness; how fast
              varies with how long you have been ill.
            </em>
          </p>
        </div>
        <div className="pillar-item">
          <h3>
            <span style={{ opacity: 0.3 }}>03.</span> Regeneration Bioenergetics: The Rebuild
          </h3>
          <p>
            Once the fasts have cleared the damage and the T3 course, where it
            was needed, has restored the energy, your body rebuilds on its own
            with food, sleep, sunlight and time. hGH is the last step, not a
            standard one: I reach for it only when someone is really struggling
            and the body cannot enter regeneration at all, around the third
            cycle at the earliest. It is hard to get and controversial, so
            otherwise we avoid it.
          </p>
          <p className="pillar-outcome">
            <em>
              Rebuilds muscle, nerve, and immune tissue using the stem cells
              released by fasting.
            </em>
          </p>
        </div>
      </div>

      {/* ── WHY IT WORKS: THE HEALING CYCLE + VIDEO ── */}
      <div className="guiding-questions box-info">
        <h3>Why it works: the healing cycle</h3>
        <p>
          Every infection, injury or toxin sets off the same defensive program
          in your cells, and healing is meant to move through it in stages:
          lock down and clean up, rebuild, reconnect, back to normal life.
          Chronic illness is what happens when cells get stuck partway, still
          defending against a threat that has passed. The dry fast is a short,
          deliberate stress that clears the blockages and pushes the cells out
          of that stuck state. The refeed is the moment they are most fragile,
          when any new danger signal can lock them back in. Restoring the
          metabolism afterwards is what keeps them out. That is the order of
          this protocol, and the full model is on the{" "}
          <Link href="/healing-cycle">healing cycle page</Link>.
        </p>

        <div style={{ margin: "2rem 0" }}>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
              border: "1px solid rgba(232,93,4,0.4)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/8n01dL62V7o"
              title="The Scorch Protocol | Full Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
          <p style={{ marginTop: "0.75rem", color: "#888", fontStyle: "italic", textAlign: "center", fontSize: "0.9rem" }}>
            The Scorch Protocol explained: what it is, why it works, and how to start.
          </p>
        </div>
      </div>

      {/* ── CONDITIONS ── */}
      <div className="guiding-questions box-info">
        <h3>Conditions That Respond to The Scorch Protocol</h3>
        <p>
          These are the improvements people report on the protocol; the full
          list is on the <Link href="/success-rate-data">Results page</Link>:
        </p>
        <ul>
          <li>
            <strong>Long Covid &amp; Chronic Fatigue (ME/CFS)</strong>: fatigue,
            brain fog, insomnia, post-exertional malaise, POTS
          </li>
          <li>
            <strong>Herpes &amp; Cold Sores</strong>: fewer recurrences, or none
          </li>
          <li>
            <strong>Thyroid &amp; Metabolism</strong>: cold hands and feet, heat
            and cold intolerance, stubborn weight, hair loss
          </li>
          <li>
            <strong>Mood &amp; Headaches</strong>: anxiety, depression, panic
            attacks, migraines
          </li>
          <li>
            <strong>Gut</strong>: IBS and constipation
          </li>
          <li>
            <strong>Lungs, Skin &amp; Joints</strong>: asthma, shortness of
            breath, dry skin, arthritis and joint aches, allergies
          </li>
        </ul>
        <p>
          <strong>What about cancer and other serious or rare diseases?</strong>{" "}
          Cancer first, because it is the exception: the protocol makes no
          cancer claims, and I do not offer dry fasting as a cancer therapy.
          Active cancer is a hard stop for any multi-day dry fast. Short dry
          fasts, or longer water fasts during therapy where your oncology team
          allows them, are case by case with me, and any cancer history,
          however old, is a conversation with me before you start (the full
          rules are on the{" "}
          <Link href="/contraindications">contraindications page</Link>).
        </p>
        <p>
          For other serious and rarer diseases, the principle behind the list
          above still holds: at the root sits a metabolic and immune problem, a
          body that lost the energy or the immune capacity to keep something in
          check. Those conditions may respond to a <em>modified</em> version of
          the protocol. But these are exactly the cases where a generic template
          is not enough. The real work is figuring out what went wrong for{" "}
          <em>you</em> and reshaping the protocol to match.
        </p>
        <p>
          That is detective work, and it is hardest to do alone. The{" "}
          <Link href="/membership">members portal</Link> is built for it:
          dissect your own numbers, ask the right questions, and get me on the
          case.
          For those diagnoses, the goal is to find and fix the root cause
          alongside your medical care, not in place of it.
        </p>
        <p>
          <strong>The Final Goal:</strong> Your immune system becomes so strong
          that it keeps hidden viruses quiet forever, not just suppressed.
        </p>
      </div>

      {/* ── EXTRA TOOLS ── */}
      <h2>Extra Helping Tools</h2>
      <p>Depending on your blood work and symptoms, we may use other tools:</p>
      <ul>
        <li>
          <strong>Fixing Insulin Resistance:</strong> Using supplements to help
          your body use sugar correctly. This gives your brain and nerves the
          energy they need to stay calm and repair.
        </li>
        <li>
          <strong>Immune Boosters (Peptides):</strong> Tools like{" "}
          <strong>Thymalin</strong> help the body fight off hidden germs or
          viruses.
        </li>
        <li>
          <strong>Organ Support:</strong> Supplements to help your Liver and
          Kidneys. This keeps your body&rsquo;s &ldquo;filter&rdquo; clean and
          avoids problems during fasting.
        </li>
        <li>
          <strong>Fighting Germs and Viruses:</strong> Using medications like{" "}
          <strong>Fluconazole</strong> for fungus or{" "}
          <strong>Ivermectin</strong> to help support the liver and fight
          parasites.
        </li>
        <li>
          <strong>Nicotine:</strong> Used in specific ways to help your{" "}
          <strong>thyroid (T3) work better</strong> and protect your brain.
        </li>
      </ul>

      {/* ── TIMELINE ── */}
      <section
        id="why-it-takes-long"
        style={{
          marginTop: "3rem",
          backgroundColor: "rgba(243,156,18,0.09)",
          padding: "1.5rem",
          borderRadius: "8px",
          borderLeft: "5px solid #f39c12",
        }}
      >
        <h2>Why Does This Protocol Take So Long?</h2>
        <p>
          One of the most common questions is why the Scorch Protocol takes so
          much time. It is important to know that the body has a set schedule
          for healing that we cannot rush.{" "}
          <strong>
            The sooner you start, the sooner your recovery clock begins to tick.
          </strong>
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          <div>
            <h4>1. Repairing Your Tissues</h4>
            <p>
              Even if your blood levels look normal, your cells might still be
              &ldquo;starved&rdquo; for energy. It takes time to clear out
              hormones that block your metabolism and rebuild your body&rsquo;s
              energy stores.
            </p>
          </div>
          <div>
            <h4>2. Rebuilding Your &ldquo;Batteries&rdquo;</h4>
            <p>
              Your cells&rsquo; energy centers (mitochondria) need to be
              replaced. Old ones are cleared out and new ones are grown. This
              is a slow process that often takes{" "}
              <strong>6 to 12 months</strong> of consistent effort.
            </p>
          </div>
          <div>
            <h4>3. Brain Healing</h4>
            <p>
              Brain scans show that it takes time for the brain to recover
              after a virus. You might start seeing some improvement in 1 to 2
              months, but full recovery often takes{" "}
              <strong>9 to 12 months</strong>.
            </p>
          </div>
          <div>
            <h4>4. Whole Body Recovery</h4>
            <p>
              Things like long-term inflammation and nerve issues need to be
              fixed one by one. Your body has to heal in a specific order to
              get your organs and nervous system working correctly again.
            </p>
          </div>
        </div>
        <p
          style={{
            marginTop: "1rem",
            fontWeight: "bold",
            color: "#f6ad55",
          }}
        >
          The &ldquo;wait and see&rdquo; approach is the enemy of recovery.
          Delaying the start of the Scorch Protocol simply pushes your eventual
          recovery date further into the future.
        </p>
      </section>


      {/* ── INLINE OBJECTION FAQ ── */}
      <div className="faq-inline">
        <h3>Common Questions</h3>
        <div className="faq-inline-item">
          <p className="faq-inline-q">Is dry fasting dangerous?</p>
          <p className="faq-inline-a">
            When done with proper preparation (baseline blood tests, supplement
            loading, and monitoring), serious complications are rare. The
            protocol includes explicit stop signals and daily safety checks.
            Read the <Link href="/preparation">Preparation guide</Link> before
            starting.
          </p>
        </div>
        <div className="faq-inline-item">
          <p className="faq-inline-q">
            Do I need a prescription for T3 or hGH?
          </p>
          <p className="faq-inline-a">
            A prescription is my first choice: a doctor who will write for T3,
            ideally compounded slow-release T3. When that route is closed,
            chronic-illness.st is my source for slow-release T3, and IdeaLabs
            Tyronene or Tyromix is the third option. See the{" "}
            <Link href="/list-of-pharmacies">List of Pharmacies</Link> for the
            full order and country-specific options.
          </p>
        </div>
        <div className="faq-inline-item">
          <p className="faq-inline-q">How long before I see results?</p>
          <p className="faq-inline-a">
            Energy usually returns in the weeks after the refeed, once your
            metabolism is fed, and if you need the T3 course the change usually
            shows after it. Full recovery takes months, not weeks; how many
            depends on how long you have been ill, but you will feel the clock
            moving in the right direction far sooner.
          </p>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <h2>How to Use This System</h2>
      <p>
        The sidebar is your navigation spine: each entry is a phase or topic
        with its own page of steps, safety checkpoints, and{" "}
        <strong>Guiding Questions</strong> to assess your readiness before
        moving forward. If you are unsure where to begin, start with the{" "}
        <Link href="/decision-tree">Decision Logic Tree</Link> to find your
        level (beginner, intermediate, or advanced) based on your current
        symptoms and history. Then move to{" "}
        <Link href="/preparation">Phase 1: Preparation</Link> and work through
        each phase in order. Fast first, always; T3 before the fast is only for
        the person fasting has already failed. A cycle is a fast, a refeed and
        a 30-day T3 course, and the next fast opens seven days after the T3
        course ends. Do not skip the preparation phase: the baseline blood
        tests and supplement loading it requires directly affect how safe and
        effective the fasting phases will be.
      </p>

      <RefeedPlanPromo source="home" />

      <EmailCapture
        heading="Not ready to start? Get the protocol by email"
        body="New write-ups on dry fasting, T3 therapy, refeeding, and recovery, sent straight to your inbox. No spam, ever."
        source="homepage"
      />

      {/* ── CTA SECTION ── */}
      <div className="cta-group">
        <GuidanceBox />
        <div className="cta-secondary-links">
          <Link href="/preparation" className="cta-secondary-btn">
            Start Phase 1: Preparation &rarr;
          </Link>
          <Link href="/success-rate-data" className="cta-secondary-btn">
            View the Results Page &rarr;
          </Link>
          <Link href="/decision-tree" className="cta-secondary-btn">
            Use the Decision Tree &rarr;
          </Link>
        </div>
      </div>

      <PaidContentBlock
        sectionSlug="overview"
        sectionTitle="Overview & Principles"
      />
    </>
  );
}
