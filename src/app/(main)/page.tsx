import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Scorch Protocol | Reverse Long Covid, ME/CFS & Chronic Illness",
  description:
    "The Scorch Protocol combines dry fasting, T3 therapy, and hGH to reverse Long Covid, ME/CFS, and autoimmune disease. 97% success rate across 141 participants.",
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <h1 className="hero-headline">
          Still Exhausted After Trying Everything for Long Covid?
        </h1>
        <p className="hero-sub">
          The Scorch Protocol combines dry fasting, T3 therapy, and hGH to
          reset your immune system at the root, not just manage symptoms. Built
          by someone who recovered from severe ME/CFS and Long Covid.
        </p>
        <div className="hero-cta-group">
          <Link href="/success-rate-data" className="hero-btn hero-btn-primary">
            See the 97% Success Data &rarr;
          </Link>
          <Link href="/preparation" className="hero-btn hero-btn-secondary">
            Start the Protocol &rarr;
          </Link>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div className="proof-bar">
        <div className="proof-stat">
          <span className="proof-number">141</span>
          <span className="proof-label">Participants Tracked</span>
        </div>
        <div className="proof-stat">
          <span className="proof-number">97%</span>
          <span className="proof-label">Success Rate After Full Protocol</span>
        </div>
        <div className="proof-stat">
          <span className="proof-number">21+</span>
          <span className="proof-label">Symptoms Measured &amp; Improved</span>
        </div>
        <div className="proof-stat">
          <span className="proof-number">5</span>
          <span className="proof-label">Phase System With Clear Steps</span>
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
            <strong>European ancestry</strong>: 45–60% chance of carrying the
            DIO2 gene variant that blocks T3 conversion and makes this protocol
            especially important
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
        <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#555" }}>
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
            <span style={{ opacity: 0.3 }}>02.</span> T3 Therapy: The Metabolism Bridge
          </h3>
          <p>
            Chronic illness often puts your body into a state of
            &ldquo;hibernation.&rdquo; T3 therapy acts as a bridge by
            electrifying the body. We send a short, structured electrical signal
            flood of abundance and shock to the cells, convincing them to let T3
            back in and radically increase insulin sensitivity. This speeds up
            healing that would normally take years.
          </p>
          <p className="pillar-outcome">
            <em>
              Reverses metabolic suppression from years of illness, often
              within weeks.
            </em>
          </p>
        </div>
        <div className="pillar-item">
          <h3>
            <span style={{ opacity: 0.3 }}>03.</span> hGH Therapy: The Rebuilding Signal
          </h3>
          <p>
            While dry fasting clears the junk, hGH acts as a &ldquo;calorie and
            building flood.&rdquo; This phase focuses on a massive influx of
            calories and energy to signal abundance and regeneration. It can
            take months or even years, sometimes requiring much higher caloric
            intake than ever before to force tissue rebuilding.
          </p>
          <p className="pillar-outcome">
            <em>
              Rebuilds muscle, nerve, and immune tissue using the stem cells
              released by fasting.
            </em>
          </p>
        </div>
      </div>

      {/* ── THE SCORCH ADVANTAGE + VIDEO ── */}
      <div className="guiding-questions box-dark">
        <h3>The Double Advantage: Metabolism &amp; Cleaning</h3>
        <p>
          Healing chronic illness requires two things:{" "}
          <strong>Fixing Metabolism</strong> and{" "}
          <strong>Clearing Out Junk</strong> (like viral fragments).
        </p>
        <div className="question-item">
          <span className="question-label">The Cleaning Limit:</span>
          While dry fasting is the best tool for cleaning your body, it only
          works as well as your metabolism allows. If your metabolism is
          &ldquo;shut down,&rdquo; your body doesn&rsquo;t have the energy to
          make the fast fully productive.
        </div>
        <div className="question-item">
          <span className="question-label">The Scorch Advantage:</span>
          By using <strong>T3 and hGH therapies</strong>, we put your body into
          an &ldquo;artificially healthy&rdquo; state. This gives your body a
          surge of energy that makes dry fasting{" "}
          <strong>10 times more effective</strong>. It allows the body to reach
          hidden pockets of disease that it would normally miss.
        </div>

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

      {/* ── ENERGY ABUNDANCE PRINCIPLE ── */}
      <div className="guiding-questions box-orange">
        <h3>The Other Half of Healing: Energy Abundance</h3>
        <p>
          You are already here because you believe in fasting. You believe in
          autophagy. You believe the body has an innate, incredible ability to
          heal itself when you strip everything away and let it clean house.
          That belief is correct, and it is one half of the equation.
        </p>
        <p>
          <strong>Here is what most people in the fasting world miss:</strong>{" "}
          the body has an equally powerful, equally innate ability to heal
          itself when you flood it with energy. Not empty calories, but real
          energy abundance, delivered with the right hormonal signal. Given
          enough fuel and enough time, the body will repair damage that fasting
          alone cannot reach.
        </p>
        <div className="question-item">
          <span className="question-label">Scarcity Mode vs. Abundance Mode:</span>
          Fasting triggers <strong>scarcity mode</strong>: autophagy, cellular
          cleanup, pathogen clearance, stem cell mobilization. This is
          irreplaceable. But once that window closes, the body needs to switch
          into <strong>abundance mode</strong> to actually build the new tissue,
          restore the nervous system, and lock in what the fast started. Without
          deliberately entering abundance mode, many people clean the slate and
          then write the same broken story back onto it.
        </div>
        <div className="question-item">
          <span className="question-label">This Is What T3, hGH, and Calories Are For:</span>
          T3 therapy restores the metabolic signal that tells every cell it is
          safe to burn energy again. hGH gives the command to rebuild: muscle,
          nerves, immune tissue. And calories are the raw material that makes it
          possible. All three together create a hormonal and energetic
          environment where the body can finally complete repairs it has been
          deferring for years.
        </div>
        <div className="question-item">
          <span className="question-label">Expand Your Model:</span>
          Think of it this way: a construction crew cannot rebuild a city by
          only demolishing old buildings. The demolition phase (fasting) is
          essential, but so is the rebuild phase (energy abundance). The Scorch
          Protocol is one of the only protocols that takes both seriously, in
          the right order, with the right tools.
        </div>
      </div>

      {/* ── CONDITIONS ── */}
      <div className="guiding-questions box-teal2">
        <h3>Conditions That Respond to The Scorch Protocol</h3>
        <p>
          This protocol is effective at reaching hidden pathogens, viral
          fragments, and metabolic dysfunction underlying these conditions:
        </p>
        <ul>
          <li>
            <strong>Long Covid &amp; Chronic Fatigue (ME/CFS)</strong>: spike
            protein clearance, mitochondrial reboot, POTS resolution
          </li>
          <li>
            <strong>Lyme Disease</strong>: biofilm disruption, intracellular
            pathogen elimination, brain detox
          </li>
          <li>
            <strong>Herpes (HSV 1 &amp; 2) &amp; Epstein-Barr (EBV)</strong>:
            viral suppression through deep immune reset
          </li>
          <li>
            <strong>Autoimmune Disorders</strong>: Arthritis, MS, and
            conditions where the body attacks itself
          </li>
          <li>
            <strong>Thyroid &amp; Metabolism Failure</strong>: low body
            temperature, stubborn weight gain, brain fog, hair loss
          </li>
          <li>
            <strong>Nerve &amp; Bone Issues</strong>: spine disc regeneration
            using released stem cells
          </li>
          <li>
            <strong>Cysts &amp; Growths</strong>: shrinkage of non-cancerous
            growths like fibroids
          </li>
          <li>
            <strong>Lung &amp; Skin Issues</strong>: Asthma, Bronchitis, Eczema
          </li>
          <li>
            <strong>Liver Issues</strong>: Fatty Liver and other liver problems
          </li>
        </ul>
        <p>
          <strong>The Final Goal:</strong> Your immune system becomes so strong
          that it keeps hidden viruses quiet forever, not just suppressed, but
          replaced with a new immune system built from fresh stem cells.
        </p>
      </div>

      {/* ── SUCCESS DATA CALLOUT ── */}
      <div className="outcomes-callout">
        <h3>Real Outcomes from 141 Protocol Participants</h3>
        <div className="outcomes-grid">
          <div className="outcome-item">
            <span className="outcome-phase">Before Protocol</span>
            <span className="outcome-stat">75%</span>
            <span className="outcome-desc">
              scored 5 or lower on energy, cognition &amp; sleep
            </span>
          </div>
          <div className="outcome-item">
            <span className="outcome-phase">After Dry + Water Fast</span>
            <span className="outcome-stat">35%</span>
            <span className="outcome-desc">
              reached level 8–10 (near-normal function)
            </span>
          </div>
          <div className="outcome-item">
            <span className="outcome-phase">After T3 Therapy</span>
            <span className="outcome-stat">97%</span>
            <span className="outcome-desc">
              experienced significant improvement across all symptoms
            </span>
          </div>
        </div>
        <Link href="/success-rate-data" className="outcomes-link">
          View Full Success Rate Data &rarr;
        </Link>
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
              after a virus. You might start seeing some improvement in 1–2
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

      {/* ── FOUNDER STORY ── */}
      <div
        className="guidance-box"
        style={{
          margin: "2rem 0",
        }}
      >
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          I have been exactly where you are. I suffered through severe Long
          Covid and autoimmune issues, feeling trapped with no way out.
          Then I discovered dry fasting and spent years experimenting to unlock
          its full power. I gamed the system that tried to keep this knowledge
          hidden, and now I give it back to you freely through the Dry Fasting
          Club.
        </p>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          That is why I share the core of my Scorch Protocol openly, with
          detailed guides anyone can access. It combines strategic dry fasting
          to trigger intense autophagy, burn away damaged cells and DNA, and
          rebuild with fresh stem cells, together with T3 therapy and hGH
          therapy. You deserve this truth. You deserve to reclaim your body,
          sharpen your mind, and experience real regeneration.
        </p>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          We all deserve better than scripted suffering. Come join our
          community, explore the resources, and take the first step toward
          getting your life back. I am here because I believe in you, and
          together we can glimpse real freedom.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginTop: "1.5rem",
            fontStyle: "italic",
            color: "var(--text-secondary)",
          }}
        >
          With care and hope,
          <br />
          <strong>Yannick Wolfe</strong>
        </p>
      </div>

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
            T3 (liothyronine) is available through a number of compounding
            pharmacies, some without prescription depending on your country. See
            the{" "}
            <Link href="/list-of-pharmacies">List of Pharmacies</Link> for
            country-specific sourcing options. The{" "}
            <a
              href="https://dryfastingclub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dry Fasting Club
            </a>{" "}
            coaching service also provides personal help with medication
            acquisition.
          </p>
        </div>
        <div className="faq-inline-item">
          <p className="faq-inline-q">How long before I see results?</p>
          <p className="faq-inline-a">
            Most participants notice energy improvements within 2–4 weeks of
            completing Phase 2 (the dry fast). Significant symptom reduction
            typically follows the T3 therapy phase. Full recovery takes 6–12
            months, but you will feel the clock moving in the right direction
            far sooner.
          </p>
        </div>
      </div>

      {/* ── HOW TO USE ── */}
      <h2>How to Use This System</h2>
      <p>
        Each section (see sidebar) contains specific steps and{" "}
        <strong>Guiding Questions</strong>. Use these questions to determine
        your readiness for each phase. For detailed refeeds for various levels
        (beginner, intermediate, advanced), see the{" "}
        <strong>Scorch Protocol Miro Board</strong> which is provided to paid
        subscribers on the{" "}
        <a
          href="https://dryfastingclub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          dryfastingclub.com
        </a>{" "}
        website.
      </p>

      <FaithBlock
        title="Healing the Whole Person: Body, Mind, and Spirit"
        imageSrc="/assets/images/faith/faith-home.jpg"
        imageAlt="Light breaking through storm clouds, hope and healing"
      >
        <p>
          <strong>Matthew 11:28: &ldquo;Come to me, all who are weary and burdened, and I will give you rest.&rdquo;</strong>
        </p>
        <p>
          My journey with chronic illness did not begin in a lab. It began in a crisis of spirit: years of unresolved stress, buried grief, and the corrosion that comes from staying silent when evil walks past. The patients I see heal fastest are not always the mildest cases. They are the ones who do the inner work too, who choose forgiveness and release chronic resentment. <strong>Chronic illness is often a symptom of a life disconnected from God.</strong> The Epstein files are court-documented proof that institutional evil against children is real. In Gaza, the innocent suffer under war. <em>Evil propagates when good men look away.</em> Part of healing is reclaiming your voice.
        </p>
        <p>
          The armor of God is not metaphor. It is instruction. Come to Him weary. <strong>Leave restored.</strong>
        </p>
        <p>
          <em>Romans 1:16: &ldquo;For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile.&rdquo;</em> Yeshua is for you too.
        </p>
      </FaithBlock>

      {/* ── CTA SECTION ── */}
      <div className="cta-group">
        <GuidanceBox />
        <div className="cta-secondary-links">
          <Link href="/preparation" className="cta-secondary-btn">
            Start Phase 1: Preparation &rarr;
          </Link>
          <Link href="/success-rate-data" className="cta-secondary-btn">
            View Success Rate Data &rarr;
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
