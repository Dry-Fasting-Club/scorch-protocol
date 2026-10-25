import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import PaidContentBlock from "@/components/PaidContentBlock";
import KeyTakeaways from "@/components/KeyTakeaways";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
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
        "Eat light into the fast: oils, meat and anything hard to digest come out for the last one to two days, and the last day is juice only. Everyone also does a colon cleanse, set with me, from a few days of pulp-free juice at the gentle end to a week of higher-dose magnesium citrate (which also lowers the kidney-stone risk) at the strong end. No enemas, no colonics. A liver flush is case by case: for a long history on liver-intensive, fat-soluble medications, or gut motility that has truly failed; on few or no medications, skip it.",
        "Fast first, always. T3 before the fast is only for the person who has struggled with fasting, pushed through, kept getting worse with signs of metabolic trouble, and needs a jump start.",
        "Do not change or stop prescription medications on your own; medication tapering is selective and worked out individually, so bring your list to me before you touch anything.",
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
          below 36.5&deg;C (97.7&deg;F)? Log it from now on. It is the dial the
          T3 course is dosed to after the fast, and a low reading is the main
          sign you will come out of the fast needing that course. If it is very
          low, bring the numbers to me before you plan the fast. (Please see
          the body temp section on the T3 therapy page.)
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
          <tr>
            <td>
              <strong>
                Sex Hormones (Total &amp; Free Testosterone, Estradiol, SHBG)
              </strong>
            </td>
            <td>
              Your baseline before the rebuild. Years of low-carb fasting drive
              SHBG up, which can hide a low free testosterone under a
              normal-looking total. Estradiol goes on the same panel because you
              protect it, not crush it, when testosterone comes online later.
              Retest after carbs return.
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
          <span className="question-label">Known Deficiencies:</span>
          If a blood test already shows a specific vitamin or mineral deficiency,
          correct it before you fast. Do not walk into a fast carrying a known,
          uncorrected shortfall.
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
              <strong>The final week:</strong> Your colon cleanse (see Step 5),
              set with me: anywhere from a few days of fresh juice with no pulp
              at the gentle end to magnesium citrate at a higher dose, daily,
              with plenty of water, at the strong end. The citrate keeps the
              bowel moving as the food gets lighter and lowers the kidney-stone
              risk going into a dry fast.
            </li>
            <li>
              <strong>5 to 3 days out:</strong> Raw fruit, raw vegetables, and
              steamed vegetables only. No grains, beans, nuts, or heavy starches.
              This low-residue step is the real cleanse, clearing fiber out gently
              through food instead of through harsh laxatives.
            </li>
            <li>
              <strong>2 to 1 days out:</strong> No oils, no meat, nothing hard
              to digest. Light plant food only, cooked soft where that helps.
              This is also where you bring electrolytes back up to a safe
              baseline before going in.
            </li>
            <li>
              <strong>The last day:</strong> Juice only, fresh fruit and
              vegetable juice with no pulp, so there is as little as possible
              left in the colon when the fast begins.
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
            exactly what the membership is for: bring me your list and I work it
            out with you. Do not change prescriptions on your own.
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
          The order is fast first, always, with one exception. If fasting has
          already failed you, meaning you have pushed through fasts, kept
          getting worse, and show signs of metabolic trouble (cold, weight that
          will not move, worse after each attempt), fasting is not your entry
          point. You need a T3 jump start to rebuild the metabolism first, and
          then you come back to the fast. Over-adaptation (many months of
          low-carb with weight loss stalled at the same calories that used to
          work) is the usual picture here. See the T3 therapy section, and run
          your numbers past me, before preparing to fast.
        </div>
        <p style={{ marginTop: "0.75rem", fontStyle: "italic" }}>
          What the evidence says: that exception, and the judgement of who
          needs T3 after the fast, are my clinical rules. The literature has no
          published criterion for who needs T3 after a fast; the nearest
          objective candidate is the low free T3 and high reverse T3 pattern
          measured in chronic fatigue patients (Ruiz-Nunez 2018), which is a
          blood test, not the history-and-temperature screen I use.
        </p>
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
          Stock up for the refeed: dried fruit for kompot (prunes, dried
          apples, apricots), coconut water for day 2, and soft foods for the
          days after. Prepare a cool, comfortable space to rest. Remove
          temptations.
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
        <h3>Eat Light, Cleanse the Colon, Skip the Enemas</h3>
        <p>
          Going into the fast with an empty colon means your body is not dealing
          with rotting material in a sealed, waterless environment, which is
          extra toxin load at exactly the time you want nothing pulling your
          immune system the wrong way. That is why I have everyone do some
          form of colon cleanse before a dry fast. But more is not better here.
          The Scorch Protocol focuses on eating light, not on overdoing the
          enemas and flushing, because that flushing is itself a big stressor
          on the body. Enemas, colonics, saltwater flushes and herbal colon
          cleanses irritate the bowel lining and strip out potassium right
          before a fast that already stresses your electrolytes. Enemas are not
          necessary in this protocol, and I do not use them. The plant-based
          taper (or the keto prep) does most of the work of emptying you out
          gently through food. The cleanse finishes the job.
        </p>
        <p>
          The cleanse runs on a spectrum, and where you sit on it is something
          I set with you. The gentle end is simply a few days of fresh juice
          with no pulp. The strong end is magnesium citrate, the tool I keep: I
          run it at a higher dose than a maintenance supplement, daily through
          the final week, rather than as one big purge. It keeps the bowel
          moving as the food gets lighter, and in my experience it minimises
          the chance of a kidney stone forming once you go dry. Once you are in
          the fast, autophagy and fat burning handle the real cellular
          clearance from the inside. There is nothing left to
          &ldquo;flush.&rdquo; A liver flush before the fast is a separate,
          case-by-case question, covered under Liver Support below.
        </p>
        <p>
          <em>
            What the evidence says: the light days match what the German
            fasting clinics call a relief day, a vegetarian day under about
            1,000 kcal before the fast (&Auml;GHE 2002; Wilhelmi de Toledo
            2019). Citrate is a real stone inhibitor: in the pooled trials,
            recurrent stone formers on citrate salts formed markedly fewer new
            stones than on placebo (Phillips 2015), and five dry days doubled
            serum uric acid and concentrated the urine
            (Papagiannopoulos-Vatopaidinos 2020), which is where citrate helps.
            Marked caveat: those trials used modest daily doses for years, not
            a week of laxative doses; at laxative doses magnesium pulls water
            and electrolytes out of you right before a week without water, and
            magnesium toxicity is documented when the kidneys could not clear
            it (Khairi 2014; Bokhari 2018), so the week at a higher dose is my
            practice with no trial behind it. Skipping enemas sides with the
            gastroenterology evidence, which found no supporting trials and
            documented harm from colon cleansing (Acosta and Cash 2009), and
            against the tradition: every dry-fasting school empties the bowel
            once before the fast, by enema or laxative, though none uses enemas
            during the dry days (Khoroshilov 1994). Acosta and Cash looked at
            cleansing for general health, not preparation for a fast, and no
            study tests any pre-fast preparation against a dry-fast outcome, so
            a cleanse for everyone, juice or citrate, is my practice and my
            experience. On the liver flush, the &ldquo;stones&rdquo; people
            pass after an olive-oil flush were analysed and were soap made from
            the oil (Sies and Brooker 2005), so the stones are no sign that a
            flush cleared anything. It is documented that compounds stored in
            fat, pollutants among them, rise in the blood during fasting and
            weight loss, but no trial tests any liver flush for drug clearance
            or for fasting safety: the case-by-case flush below is my reasoning
            and my experience, not a trial result.
          </em>
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
          <span className="question-label">What to Use at the Strong End:</span>
          Magnesium citrate, liquid or capsules, the standard product sold at
          any pharmacy. The dose is higher than you would take as a daily
          supplement and lower than a colonoscopy purge: enough to keep you
          emptying comfortably each day. I do not print an amount here because
          it is set against your bowel response and your kidney history. Either
          form, take every dose with a large amount of water.
        </div>
        <div className="question-item">
          <span className="question-label">How to Do It:</span>
          Take it daily through the final week, with a full glass of water each
          time and plenty more through the day. You are not trying to blast the
          colon empty in one afternoon. You are keeping it moving as the food
          gets lighter, so that by day 0 there is very little left in it and
          nothing violent had to happen to get there.
        </div>
        <div className="question-item">
          <span className="question-label">Timing: The Final Week</span>
          Run the magnesium citrate through the <strong>last seven days
          before the fast</strong>, not as a single clear-out two days out.
          Magnesium citrate pulls water, so keep drinking all week, and let the
          juice-only last day be where you top up before going in. Do not go
          into a dry fast dehydrated by the very thing meant to prepare you.
        </div>
        <div className="question-item">
          <span className="question-label">The Last Two Days: No Oils, No Meat</span>
          One to two days before the fast, drop oils, meat and anything else
          that is hard to digest. Light plant food, cooked soft where that
          helps, is the menu. On the last day, juice only: fresh fruit and
          vegetable juice with no pulp, nothing else, so that there is as
          little as possible sitting in the colon when you go dry. If you came
          through the plant-based path salt, oil, and sugar free, these two days
          are also where you bring electrolytes back up to a safe baseline. You
          shed the excess earlier so the fast starts gently; you do not want to
          walk in actually depleted.
        </div>
        <div className="question-item">
          <span className="question-label">Best Pre-Fast Hydration: Carb Juicing</span>
          Real hydration is more than water. The carbohydrates in fresh juice
          help your body actually hold onto water and carry minerals and
          vitamins into the cells, so carb juicing (fresh fruit and vegetable
          juice, no pulp) is the ideal way to hydrate going into the fast, and
          it is why the last day is juice and nothing else. The one exception
          is the ketogenic path: if you have been specifically cleared for a
          keto prep, stay on water and electrolytes and skip the juice so you
          do not break ketosis before Day 0.
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
          <span className="question-label">Liver Support: TUDCA as the Base, a Liver Flush Case by Case</span>
          My standing liver support is several weeks of TUDCA
          supplementation. TUDCA supports bile flow and liver cell integrity, and the
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
          <br /><br />
          A liver flush is a case-by-case step on top of TUDCA, not a
          replacement for it. If you have spent a long time on
          liver-intensive, fat-soluble medications like these, a flush before
          the fast can be the right call. My reasoning, from what I have seen:
          what is stored in your fat comes back out as the fat burns, so
          clearing out as much of it as aggressively as possible beforehand
          makes the dry fast safer. If you are on few or no medications, skip
          it: there is little or nothing for it to clear, and it adds
          unnecessary stress to your system right before the fast. The other
          case where a flush makes sense is a motility failure so severe that
          you cannot push food out at all. Whether you need one, which flush
          and when it runs are set with me; I do not publish a flush recipe.
          Marked caveat: no trial has tested a flush for drug clearance or
          fasting safety, so this is my reasoning and my experience, not a
          trial result.
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

      <ReferencesSection
        refs={[
          {
            citation:
              "Ärztegesellschaft Heilfasten und Ernährung (ÄGHE). Leitlinien zur Fastentherapie. Forschende Komplementärmedizin und Klassische Naturheilkunde, 2002;9:189-198.",
            href: "https://karger.com/fkm/article-pdf/9/3/189/4207114/000064270.pdf",
            note: "the German fasting-therapy guideline: a vegetarian relief day under about 1,000 kcal before the fast; magnesium sulphate used as a laxative for its water-drawing effect",
          },
          {
            citation:
              "Wilhelmi de Toledo F, Grundler F, Bergouignan A, Drinda S, Michalsen A. Safety, health improvement and well-being during a 4 to 21-day fasting period in an observational study including 1422 subjects. PLoS One, 2019;14(1):e0209353. PMID 30601864. DOI 10.1371/journal.pone.0209353.",
            href: "https://doi.org/10.1371/journal.pone.0209353",
            note: "the Buchinger cohort used a 600 kcal vegetarian day before the fast and a laxative on the first morning of a fast that includes about three litres of fluid a day",
          },
          {
            citation:
              "Phillips R, Hanchanale VS, Myatt A, Somani B, Nabi G, Biyani CS. Citrate salts for preventing and treating calcium containing kidney stones in adults. Cochrane Database Syst Rev, 2015;(10):CD010057. PMID 26439475. DOI 10.1002/14651858.CD010057.pub2.",
            href: "https://doi.org/10.1002/14651858.CD010057.pub2",
            note: "pooled trials of citrate salts in recurrent stone formers: markedly fewer new stones than placebo over one to four years at modest daily doses; upper gastrointestinal upset the commonest side effect",
          },
          {
            citation:
              "Papagiannopoulos-Vatopaidinos IE, Papagiannopoulou M, Sideris V. Dry fasting physiology: responses to hypovolemia and hypertonicity. Complement Med Res, 2020;27(4):242-251. PMID 31958788. DOI 10.1159/000505201.",
            href: "https://doi.org/10.1159/000505201",
            note: "five dry days in healthy adults doubled serum uric acid and concentrated the urine, the setting in which citrate is protective",
          },
          {
            citation:
              "Khairi T, Amer S, Spitalewitz S, Sharon D, et al. Severe symptomatic hypermagnesemia associated with over-the-counter laxatives in a patient with renal failure and sigmoid volvulus. Case Rep Nephrol, 2014;2014:560746. PMID 24563801. DOI 10.1155/2014/560746.",
            href: "https://doi.org/10.1155/2014/560746",
            note: "magnesium toxicity from over-the-counter magnesium laxatives when the kidneys could not clear it",
          },
          {
            citation:
              "Bokhari SR, Siriki R, Teran FJ, Batuman V. Fatal hypermagnesemia due to laxative use. Am J Med Sci, 2018;355(4):390-395. PMID 29661354. DOI 10.1016/j.amjms.2017.08.013.",
            href: "https://doi.org/10.1016/j.amjms.2017.08.013",
            note: "a death from magnesium laxative use in a woman with normal kidney function, serum magnesium climbing within two days",
          },
          {
            citation:
              "Acosta RD, Cash BD. Clinical effects of colonic cleansing for general health promotion: a systematic review. Am J Gastroenterol, 2009;104(11):2830-2836. PMID 19724266. DOI 10.1038/ajg.2009.494.",
            href: "https://doi.org/10.1038/ajg.2009.494",
            note: "no methodologically rigorous trials support colonic cleansing for health, multiple case series of harm; the gastroenterology basis for skipping enemas and colonics",
          },
          {
            citation:
              "Khoroshilov IE. Clinical and hygienic aspects of absolute (dry) fasting. Author's abstract of a Candidate of Medical Sciences thesis, Military Medical Academy, St Petersburg, 1994 (abridged English translation, Siberika Publishing, 2020).",
            note: "the Russian dry-fasting method used a single siphon enema before the dry days and no enemas, baths or laxatives during them; the tradition empties the bowel first, which this protocol does through food and a juice or citrate cleanse instead",
          },
          {
            citation:
              "Sies CW, Brooker J. Could these be gallstones? Lancet, 2005;365(9468):1388. PMID 15836886. DOI 10.1016/S0140-6736(05)66373-8.",
            href: "https://doi.org/10.1016/S0140-6736(05)66373-8",
            note: "the 'stones' passed after an olive-oil and lemon-juice liver flush were analysed and were saponified fatty acids, not gallstones",
          },
          {
            citation:
              "Ruiz-Nunez B, Tarasse R, Vogelaar EF, Janneke Dijck-Brouwer DA, Muskiet FAJ. Higher Prevalence of \"Low T3 Syndrome\" in Patients With Chronic Fatigue Syndrome: A Case-Control Study. Front Endocrinol (Lausanne), 2018;9:97. PMID 29615976. DOI 10.3389/fendo.2018.00097.",
            href: "https://doi.org/10.3389/fendo.2018.00097",
            note: "the nearest thing to a published criterion for who might need T3 after a fast: chronic fatigue patients carried lower free T3 and total T3 and more reverse T3 than matched controls at a similar TSH; a blood pattern, not the history-and-temperature screen used here",
          },
        ]}
      />
    </>
  );
}
