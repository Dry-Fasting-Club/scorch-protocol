import type { Metadata } from "next";
import Image from "next/image";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import CommentSection from "@/components/CommentSection";

export const metadata: Metadata = {
  title: "Phase 1: Preparation — The Scorch Protocol",
  description:
    "Phase 1: Baseline blood tests, supplement stacks, and readiness checks required before beginning The Scorch Protocol.",
};

export default function PreparationPage() {
  return (
    <>
      <h1>Phase 1: Preparation</h1>
      <p>
        Before starting the Scorch Protocol, you must get your body ready. Think
        of this as &ldquo;turning on the lights&rdquo; before the deep work
        begins. This phase involves testing your baseline health, fixing major
        deficiencies, and choosing the right diet to support your fast.
      </p>

      <div className="guiding-questions">
        <h3>Are You Ready to Start?</h3>
        <div className="question-item">
          <span className="question-label">Blood Tests Done:</span>
          Have you tested your Thyroid (TSH, Free T3, Free T4), Complete Blood
          Count (CBC), Metabolic Panel, Vitamin D, B12, Iron, Ferritin, and
          Cortisol? This tells you what you are working with.
        </div>
        <div className="question-item">
          <span className="question-label">Body Temperature:</span>
          Is your waking body temperature (taken before getting out of bed)
          below 37°C (98.6°F)? If yes, you almost certainly need T3 therapy as
          part of your preparation.
        </div>
        <div className="question-item">
          <span className="question-label">Liver Health:</span>
          Are your liver enzymes (AST, ALT) within a normal range? A stressed
          liver makes fasting more dangerous. If they are high, prioritize liver
          support first.
        </div>
        <div className="question-item">
          <span className="question-label">Medications:</span>
          Are you on any medications, especially ones that are hard on the
          kidneys or liver? Some medications make fasting dangerous or
          impossible. Consult your doctor.
        </div>
      </div>

      <h2>Step 1: Baseline Testing</h2>
      <p>
        You cannot fix what you cannot measure. Get these tests done before
        starting:
      </p>
      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Test</th>
            <th style={{ width: "70%" }}>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Thyroid Panel</strong></td>
            <td>
              TSH, Free T3, Free T4. A low T3 or high TSH means your metabolism
              is suppressed — a key target of the protocol.
            </td>
          </tr>
          <tr>
            <td><strong>Complete Blood Count (CBC)</strong></td>
            <td>
              Checks for anemia, infection, and immune system status. Low white
              blood cells or hemoglobin can make fasting risky.
            </td>
          </tr>
          <tr>
            <td><strong>Metabolic Panel</strong></td>
            <td>
              Checks kidney and liver function. Your kidneys will be working hard
              during a dry fast, so they must be healthy.
            </td>
          </tr>
          <tr>
            <td><strong>Vitamin D &amp; B12</strong></td>
            <td>
              Severe deficiencies in these can cause fatigue, nerve damage, and
              immune failure. Fix these before fasting.
            </td>
          </tr>
          <tr>
            <td><strong>Ferritin / Iron</strong></td>
            <td>
              Low iron (anemia) causes fatigue and makes fasting much harder.
              Your body needs iron to transport oxygen during healing.
            </td>
          </tr>
          <tr>
            <td><strong>Morning Cortisol</strong></td>
            <td>
              Low cortisol (adrenal fatigue) is very common in chronic illness.
              It affects how well your body handles stress, including fasting.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Step 2: Fix Critical Deficiencies</h2>
      <p>
        Based on your test results, address these common deficiencies. Do not
        start the fast with known, severe deficiencies — your body will not
        respond well.
      </p>
      <div className="guiding-questions box-yellow">
        <h3>Priority Supplements Before Fasting</h3>
        <div className="question-item">
          <span className="question-label">Vitamin D3 + K2:</span>
          If your Vitamin D is below 40 ng/mL, supplement aggressively (often
          5,000–10,000 IU/day with K2) for at least 4–8 weeks before your fast.
        </div>
        <div className="question-item">
          <span className="question-label">B12 (Methylcobalamin):</span>
          Critical for nerve function and energy. Low B12 is extremely common in
          chronic illness. Sublingual B12 is absorbed better than pills.
        </div>
        <div className="question-item">
          <span className="question-label">Magnesium (Glycinate or Malate):</span>
          Most people are deficient. Magnesium is involved in hundreds of
          enzymatic reactions and is critical for proper insulin function and
          sleep.
        </div>
        <div className="question-item">
          <span className="question-label">Potassium:</span>
          Ensure adequate intake from food (avocado, coconut water, fruit) before
          fasting. Low potassium during a dry fast can affect the heart.
        </div>
      </div>

      <h2>Step 3: Dietary Preparation</h2>
      <p>
        What you eat in the weeks before the fast significantly affects how your
        body responds to it.
      </p>
      <div className="core-pillars">
        <div
          className="pillar-item"
          style={{ borderLeftColor: "#27ae60" }}
        >
          <h3>Option A: Ketogenic Pre-Fast Diet (Recommended for Sick Patients)</h3>
          <p>
            If you are dealing with significant chronic illness, fatigue, or have
            failed previous fasting attempts: eat a strict ketogenic diet
            (high-fat, very low carb) for <strong>4–8 weeks</strong> before your
            fast. This trains your body to burn fat efficiently, making the
            transition into dry fasting much smoother. It also reduces
            inflammation and improves insulin sensitivity before you begin.
          </p>
        </div>
        <div
          className="pillar-item"
          style={{ borderLeftColor: "#3498db" }}
        >
          <h3>Option B: Standard Pre-Fast Approach (For Healthier Individuals)</h3>
          <p>
            If you are relatively healthy and doing a shorter fast (36–72 hours):
            a strict ketogenic diet for just <strong>3–5 days</strong> before
            starting is sufficient. This depletes glycogen stores and puts your
            body into a mild ketogenic state, reducing the difficulty of the first
            24 hours of the dry fast.
          </p>
        </div>
      </div>

      <h2>Step 4: Mental Preparation</h2>
      <div className="guiding-questions box-purple">
        <h3>Setting Your Intention</h3>
        <div className="question-item">
          <span className="question-label">Write Down Your Why:</span>
          Before you start, write down exactly why you are doing this. On day 2
          or 3, when it feels hardest, you will need to revisit this.
        </div>
        <div className="question-item">
          <span className="question-label">Inform Your Support System:</span>
          Tell someone you trust that you are doing this fast. For fasts over 72
          hours, arrange daily check-ins with this person.
        </div>
        <div className="question-item">
          <span className="question-label">Clear Your Schedule:</span>
          The fast works best when you can fully rest. Try to schedule it during
          a period where you have minimal responsibilities. This is not the time
          for work deadlines or social obligations.
        </div>
        <div className="question-item">
          <span className="question-label">Prepare Your Environment:</span>
          Stock up on coconut water and soft foods for the refeed. Prepare a
          cool, comfortable space to rest. Remove temptations.
        </div>
      </div>

      <h2>Step 5: Colon Cleanse — 2 Days Before the Fast</h2>
      <div className="guiding-questions box-indigo">
        <h3>Magnesium Citrate Cleanse — Starting 2 Days Before the Fast</h3>
        <p>
          One of the most underrated preparation steps is clearing out the
          colon before you begin. A full colon during a dry fast means your
          body is dealing with rotting material in a sealed environment — that
          is extra toxin load during a time when you want nothing pulling your
          immune system in the wrong direction. A clean colon means a cleaner,
          more productive fast.
        </p>

        <div style={{ margin: "1.5rem 0", textAlign: "center" }}>
          <Image
            src="/assets/images/magnesium%20citrate%20laxative.png"
            alt="Magnesium citrate laxative bottle — available at CVS"
            width={300}
            height={400}
            style={{
              maxWidth: "280px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic" }}>
            Standard magnesium citrate laxative — available at CVS and most pharmacies
          </p>
        </div>

        <div className="question-item">
          <span className="question-label">What to Use:</span>
          A standard magnesium citrate laxative, the kind sold at CVS for
          colonoscopy prep — one bottle of the liquid is the typical dose.
          Magnesium citrate pills also work but you will need a significant
          number of them (follow the label for equivalent dosing). Either way,
          take every dose with a large amount of water.
        </div>
        <div className="question-item">
          <span className="question-label">How to Do It:</span>
          Follow the same protocol used for colonoscopy preparation. Take your
          magnesium citrate dose with a full glass of water, then keep drinking
          water throughout. The goal is to fully flush the colon — this
          typically takes several hours. Do not fight the process; let your
          body clear everything out.
        </div>
        <div className="question-item">
          <span className="question-label">Timing — 2 Days Before the Fast:</span>
          Start the cleanse <strong>2 days before you begin the fast</strong>.
          This gives you the following day to rehydrate and replenish
          electrolytes before entering the dry fast. Magnesium citrate is
          aggressively dehydrating — do not go straight from the cleanse
          into a dry fast without this recovery window.
        </div>
        <div className="question-item">
          <span className="question-label">The 2-Day Window — Rehydrate and Replenish:</span>
          After taking the laxative, spend the next 1–2 days drinking water,
          fresh juices, and electrolytes. <strong>No fiber, fat, or
          protein</strong> during this period — stick to water, juice (no
          pulp), broths, and electrolyte drinks only. You want your colon
          to remain empty and your body to be well-hydrated going into the
          fast. Think of it as a juice fast bridging you into the dry fast.
        </div>
        <div className="question-item">
          <span className="question-label">Why It Matters:</span>
          A clean, empty colon going into the fast means less endotoxin
          recirculation, less digestive distraction for your immune system,
          and a higher-quality autophagic state throughout. You are already
          committing to something powerful — this preparation step costs
          almost nothing and meaningfully improves what your fast can
          accomplish.
        </div>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="preparation" sectionTitle="Phase 1: Preparation" />
      <CommentSection sectionSlug="preparation" />
    </>
  );
}
