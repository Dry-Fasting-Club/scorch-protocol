import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import PaidContentBlock from "@/components/PaidContentBlock";
import KeyTakeaways from "@/components/KeyTakeaways";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Phase 1: Preparation",
  description:
    "Phase 1: Baseline blood tests, supplement stacks, the two preparation paths (plant-based and ketogenic), and readiness checks required before beginning The Scorch Protocol.",
  alternates: { canonical: "https://scorchprotocol.com/preparation" },
};

export default function PreparationPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Phase 1: Preparation", description: "Phase 1: Baseline blood tests, supplement stacks, the two preparation paths (plant-based and ketogenic), and readiness checks required before beginning The Scorch Protocol.", path: "/preparation", breadcrumbName: "Preparation" })} />
      <h1>Phase 1: Preparation</h1>

      <KeyTakeaways points={[
        "Get baseline blood tests (thyroid, CBC, metabolic panel, Vitamin D, B12, iron, cortisol) and fix critical deficiencies before fasting.",
        "Choose between two preparation paths: plant-based (gold standard, highest healing ceiling) or ketogenic (safer fallback, more forgiving for sicker or more medicated patients).",
        "Do one single magnesium citrate clear-out 2 days before the fast, then spend that window rehydrating with water, juice, and electrolytes only.",
        "Do not change or stop prescription medications on your own; medication tapering is selective and worked out individually, so bring your list to Yannick before you touch anything.",
      ]} />

      <p>
        Before starting the Scorch Protocol, you must get your body ready. Think
        of this as &ldquo;turning on the lights&rdquo; before the deep work
        begins. Preparation means testing your baseline health, fixing major
        deficiencies, and then choosing one of two roads into the fast: a
        plant-based path that heals deeper, or a ketogenic path that is safer
        and far more forgiving. This page walks you through both.
      </p>

      <div className="guiding-questions">
        <h3>Are You Ready to Start?</h3>
        <div className="question-item">
          <span className="question-label">Blood Tests Done:</span>
          Have you tested your Thyroid (TSH, Free T3, Free T4), Complete Blood
          Count (CBC), Metabolic Panel, Vitamin D, B12, Iron, Ferritin, and
          Cortisol? This tells you what you are working with. (It is not
          required for all these tests, in fact with most people we go off of
          symptoms only &mdash; not everyone has access to tests).
        </div>
        <div className="question-item">
          <span className="question-label">Body Temperature:</span>
          Is your waking body temperature (taken before getting out of bed)
          below 36.5&deg;C (98&deg;F)? If yes, you almost certainly need T3
          therapy as part of your preparation. (Please see body temp chart
          under T3 therapy section)
        </div>
        <div className="question-item">
          <span className="question-label">Liver Health:</span>
          Are your liver enzymes (AST, ALT) within a normal range? A stressed
          liver makes fasting more dangerous. If they are high, prioritize liver
          support first. (Sometimes powerful extended fasting is enough to fix a
          fatty, dysfunctional liver, but if you have liver issues it is good to
          do some liver therapies and binding)
        </div>
        <div className="question-item">
          <span className="question-label">Medications:</span>
          Are you on any medications, especially ones that are hard on the
          kidneys or liver? Some medications make fasting dangerous or
          impossible. Use A.I. to scan your medication list and ask which ones
          are the worst for liver health, which ones have a long half-life, and
          which ones have the worst withdrawal.
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
              is suppressed, a key target of the protocol.
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
        start the fast with known, severe deficiencies, as your body will not
        respond well.
      </p>
      <div className="guiding-questions box-warning">
        <h3>Priority Supplements Before Fasting</h3>
        <div className="question-item">
          <span className="question-label">Vitamin D3 + K2:</span>
          If your Vitamin D is below 40 ng/mL, supplement aggressively (often
          5,000 to 10,000 IU/day with K2) for at least 4 to 8 weeks before your fast.
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

      <h2>Step 3: Choose Your Preparation Path</h2>
      <p>
        There are two ways to prepare for the fast, and they are not equal. One
        gets you closer to fully healed. The other is safer and far more
        forgiving. The right choice depends on how sick you are, how many
        medications you are on, and how precisely you can follow a plan. Pick
        honestly.
      </p>
      <p>
        Both paths begin the same way. Starting at least <strong>3 weeks
        out</strong>, remove alcohol, caffeine, nicotine, and ultra-processed
        food completely. This clears the caffeine-withdrawal headache and the
        dopamine crash out of the way now, so they do not land on top of you
        during the fast itself. From there the two paths diverge.
      </p>
      <div className="core-pillars">
        <div
          className="pillar-item"
          style={{ borderLeftColor: "#27ae60" }}
        >
          <h3>Path 1: Plant-Based Preparation (The Gold Standard)</h3>
          <p>
            This is the stronger path. Done correctly, it gets you closest to
            fully healed, because it builds exactly the baseline a dry fast heals
            best from: a higher metabolic rate, higher T3, and a body primed so
            that the Day 3 acidotic shift hits with full force. That shift is the
            therapeutic event, and the larger your metabolic gap entering
            ketosis, the deeper it goes. It demands precision, so choose it only
            if you can follow the steps closely.
          </p>
          <p>
            <strong>After cutting those inputs, the taper counts down to the
            fast.</strong> Day 0 is the day the dry fast begins:
          </p>
          <ul>
            <li>
              <strong>2 weeks to 5 days out:</strong> Strict whole-food
              plant-based, with no added salt, oil, or sugar. Stripping these out
              sheds excess stored sodium so the fluid and blood-pressure swings of
              the first fasting days are gentler. This is about removing the
              excess, not depleting you. You bring electrolytes back up to a safe
              baseline on the rehydrate day below.
            </li>
            <li>
              <strong>5 to 3 days out:</strong> Raw fruit, raw vegetables, and
              steamed vegetables only. No grains, beans, nuts, or heavy starches.
              This low-residue step is the real cleanse, clearing fiber out gently
              through food instead of through harsh laxatives.
            </li>
            <li>
              <strong>2 days out:</strong> The single magnesium citrate clear-out
              (see Step 5), followed by a 1 to 2 day window of water, juice,
              broth, and electrolytes only, with no fiber, fat, or protein. This
              is where you reload electrolytes to baseline before going in.
            </li>
            <li>
              <strong>Day 0:</strong> Begin the dry fast.
            </li>
          </ul>
          <p>
            This path is also where medications come down, where appropriate.
            Two kinds of drugs matter
            most: ones that stress the kidneys or raise dehydration risk, which
            generally need to be off before a dry fast, and fat-soluble drugs that
            sit in your fat stores and re-enter the bloodstream as you burn fat,
            which are tapered over the weeks beforehand. This is selective, not a
            clean sweep. Anything load-bearing that is holding you together, like a
            Lyme protocol or an antifungal or antiviral you depend on, stays.
            Which specific drugs and what schedule is individual, and this is
            exactly what the membership is for: bring Yannick your list and he
            works it out with you. Do not change prescriptions on your own.
          </p>
        </div>
        <div
          className="pillar-item"
          style={{ borderLeftColor: "#3498db" }}
        >
          <h3>Path 2: Ketogenic Preparation (The Safer Fallback)</h3>
          <p>
            This is the forgiving path. Eat <strong>50 grams of carbohydrate a
            day or less for at least 1 to 2 months</strong> before the fast, with
            the same cleanse prep below. Keto-adapting first means your body is
            already burning fat when the fast begins, which makes the fast
            dramatically easier and safer and leaves a large margin for error.
            Because the fast itself is softened, the medication picture is usually
            less drastic too.
          </p>
          <p>
            The trade-off is ceiling. A body that eased into ketosis meets a
            smaller Day 3 shock, so the healing is gentler than the plant-based
            path. This is a tolerance accommodation, not a depth multiplier.
            Choose it if you are seriously ill, on many medications, have failed
            fasts before, cannot follow the plant-based steps precisely, or simply
            want the largest safety margin for your first attempts.
          </p>
        </div>
      </div>
      <div className="guiding-questions box-info">
        <h3>Which Path Is Right for You?</h3>
        <div className="question-item">
          <span className="question-label">Choose Plant-Based if:</span>
          You can follow a plan precisely, you are stable enough to taper
          medications on a worked-out schedule, and you want the highest healing
          ceiling.
        </div>
        <div className="question-item">
          <span className="question-label">Choose Keto if:</span>
          You are sicker, on many medications, have struggled with fasts before,
          or want the safest and most forgiving on-ramp.
        </div>
        <div className="question-item">
          <span className="question-label">Neither, yet:</span>
          If you are over-adapted (many months of low-carb with weight loss
          stalled at the same calories that used to work) or your waking
          temperature is under 96&deg;F, fasting is not your entry point. You need
          T3 therapy to rebuild your metabolism first. See the T3 therapy section
          before preparing to fast.
        </div>
      </div>

      <h2>Step 4: Mental Preparation</h2>
      <div className="guiding-questions box-info">
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
        <div className="question-item">
          <span className="question-label">Pray or Meditate Deep Into the Fast:</span>
          This one matters more than most people realize, so do not sleep on
          it. A dry fast pushes you into a depth of ketosis you have likely
          never been in before. Carnivore eating does not reach this depth.
          Even long water fasting does not reach it. Something happens to
          the brain in that state that no amount of normal meditation
          practice reproduces: the mental noise drops away, the body
          settles, and you can hold a focused inner state that meditation
          teachers spend decades training toward. People who have never
          meditated a day in their life will sit down on day 3 or 4 of a
          dry fast and feel what a thirty-year practitioner feels. The fast
          hands you a state that is otherwise reached only through years of
          training. You do not have to earn it. It is a gift of the
          protocol.
          <br /><br />
          A contemplative or prayer practice helps many people settle into and
          hold this state once they reach it on day 3 or 4. If that appeals to
          you, the{" "}
          <Link href="/mindfulness">Mindfulness &amp; Neurology</Link> page
          covers specific approaches that work well in the deep-fast window.
        </div>
      </div>

      <h2>Step 5: The Cleanse and the Final Days</h2>
      <div className="guiding-questions box-info">
        <h3>One Clean-Out, Not a Cascade of Cleanses</h3>
        <p>
          Going into the fast with an empty colon means your body is not dealing
          with rotting material in a sealed, waterless environment, which is
          extra toxin load at exactly the time you want nothing pulling your
          immune system the wrong way. But more is not better here. Repeated
          laxatives, enemas, colonics, saltwater flushes, and herbal colon
          cleanses irritate the bowel lining and strip out potassium right before
          a fast that already stresses your electrolytes. We do not do them. The
          plant-based taper (or the keto prep) already does most of the work of
          emptying you out gently through food. One single, gentle clear-out
          finishes the job.
        </p>
        <p>
          The one exception we keep is magnesium citrate, the least stressful of
          all the options. A dry fast is not a multi-day water flush of the colon,
          so a single clear-out beforehand plays a specific role it would not in a
          water fast. Once you are in the fast, autophagy and fat burning handle
          the real cellular clearance from the inside. There is nothing left to
          &ldquo;flush.&rdquo;
        </p>

        <div style={{ margin: "1.5rem 0", textAlign: "center" }}>
          <Image
            src="/assets/images/magnesium%20citrate%20laxative.png"
            alt="Magnesium citrate laxative bottle, available at CVS"
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
            Standard magnesium citrate laxative, available at CVS and most pharmacies
          </p>
        </div>

        <div className="question-item">
          <span className="question-label">What to Use:</span>
          A standard magnesium citrate laxative, the kind sold at CVS for
          colonoscopy prep. One bottle of the liquid is the typical dose.
          Magnesium citrate pills also work but you will need a significant
          number of them (follow the label for equivalent dosing). Either way,
          take every dose with a large amount of water.
        </div>
        <div className="question-item">
          <span className="question-label">How to Do It:</span>
          Follow the same protocol used for colonoscopy preparation. Take your
          magnesium citrate dose with a full glass of water, then keep drinking
          water throughout. The goal is to fully flush the colon, which
          typically takes several hours. Do not fight the process; let your
          body clear everything out.
        </div>
        <div className="question-item">
          <span className="question-label">Timing: 2 Days Before the Fast</span>
          Start the cleanse <strong>2 days before you begin the fast</strong>.
          This gives you the following day to rehydrate and replenish
          electrolytes before entering the dry fast. Magnesium citrate is
          aggressively dehydrating, so do not go straight from the cleanse
          into a dry fast without this recovery window.
        </div>
        <div className="question-item">
          <span className="question-label">The 2-Day Window: Rehydrate and Replenish</span>
          After taking the laxative, spend the next 1 to 2 days drinking water,
          fresh juices, and electrolytes. <strong>No fiber, fat, or
          protein</strong> during this period. Stick to water, juice (no
          pulp), broths, and electrolyte drinks only. You want your colon
          to remain empty and your body to be well-hydrated going into the
          fast. Think of it as a juice fast bridging you into the dry fast.
          If you came through the plant-based path salt, oil, and sugar free,
          this is the window where you bring electrolytes back up to a safe
          baseline. You shed the excess earlier so the fast starts gently;
          you do not want to walk in actually depleted.
        </div>
        <div className="question-item">
          <span className="question-label">Why It Matters:</span>
          A clean, empty colon going into the fast means less endotoxin
          recirculation, less digestive distraction for your immune system,
          and a higher-quality autophagic state throughout. You are already
          committing to something powerful. This preparation step costs
          almost nothing and meaningfully improves what your fast can
          accomplish.
        </div>
        <div className="question-item">
          <span className="question-label">Liver Support: TUDCA Over Liver Flushing</span>
          I prefer several weeks of TUDCA supplementation over liver flushing
          protocols. TUDCA supports bile flow and liver cell integrity, and the
          extended window allows long-persisting medications and their active
          metabolites to begin clearing before the fast begins. This matters
          because drugs processed via the liver&rsquo;s CYP450 enzyme system
          are often fat-soluble and accumulate in fatty tissues, and as you
          burn fat during the fast, those residues re-enter the bloodstream.
          Long-acting benzodiazepines (Diazepam, Librium), SSRIs like Prozac
          (whose norfluoxetine metabolite takes up to 5 weeks to wash out),
          antipsychotics like Vraylar (active metabolites persist 1&ndash;3 weeks),
          and cardiovascular drugs like Amiodarone (half-life up to 78 days)
          all fall into this category. Starting TUDCA weeks in advance, not
          days, gives your liver a meaningful head start before the added
          metabolic demands of fasting arrive.
        </div>
        <div className="question-item">
          <span className="question-label">Stop Exercising, Rest Into It:</span>
          In the final days before the fast, stop hard exercise and avoid sauna
          or any trick meant to &ldquo;burn off&rdquo; glycogen faster. Your body
          has a transition speed that took millions of years to evolve, and
          forcing it faster only adds risk while protecting nothing. Conserve your
          energy and your muscle for the fast itself. Strict physical rest going
          in is part of the protocol, not laziness.
        </div>
      </div>

      <EmailCapture compact source="preparation-footer" />
      <RefeedPlanPromo source="preparation" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="preparation" sectionTitle="Phase 1: Preparation" />
    </>
  );
}
