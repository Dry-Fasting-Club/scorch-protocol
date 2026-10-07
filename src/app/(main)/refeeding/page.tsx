import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import PaidContentBlock from "@/components/PaidContentBlock";
import InterestingVideoBlock from "@/components/InterestingVideoBlock";
import KeyTakeaways from "@/components/KeyTakeaways";
import StarterKitCallout from "@/components/StarterKitCallout";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import ProtocolFurtherReading from "@/components/ProtocolFurtherReading";
import { medicalWebPageLd, faqPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Phase 3: The Refeed",
  description:
    "Phase 3: The Scorch Protocol refeeding plan: what to eat, when, and how to avoid refeeding syndrome after a dry fast.",
  alternates: { canonical: "https://scorchprotocol.com/refeeding" },
};

export default function RefeedingPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Phase 3: The Refeed", description: "Phase 3: The Scorch Protocol refeeding plan: what to eat, when, and how to avoid refeeding syndrome after a dry fast.", path: "/refeeding", breadcrumbName: "The Refeed" })} />
      <JsonLd data={faqPageLd([
        {
          question: "Why plain water first, and when does coconut water come in?",
          answer: "After days without water the kidneys are in full water-retention mode and the blood is thicker than normal. Coconut water carries about 600 mg of potassium per cup and acts as a diuretic by suppressing the very hormones that are holding water in, so taking it as the first drink, into concentrated blood and lagging kidneys, is the recipe for a potassium spike. The refeed after a dry fast of 5 days or more therefore starts on plain water: room temperature, small sips, about a cup an hour for the first four hours, 1 litre at most, so the kidneys can wake up. After hour four, once urination is normal, kompot (a weak unsweetened fruit infusion) joins at the same pace, adding gentle minerals and a little sugar without the load. Coconut water comes in on day 2, unsweetened and in small amounts, alongside unsalted broth. The only day-1 exception is a small unsweetened coconut water if a diuretic kick-start is clearly needed, not before about 12 hours after the first water, at most 250 ml in an hour and 500 ml for the day."
        },
        {
          question: "Why white rice?",
          answer: "White rice is one of the most digestible foods on the planet. After a fast, your gut lining has repaired and is rebuilding, and white rice does not irritate this process. Rice also provides a gentle glucose signal that tells your thyroid to start converting T4 into active T3 again, which is critical for restarting your metabolism. White rice has been stripped of the bran and germ, removing phytates and lectins that can irritate a healing gut."
        },
        {
          question: "Who actually needs deliberate biome rebuild?",
          answer: "The standard protocol path (a 5-day dry fast followed by the standing valacyclovir antiviral backbone, started on refeed day 3 at the earliest and run daily through the months between fasts) carries a mandatory gut-rebuild rider: kefir first, then kombucha, run alongside the standing course for as long as it runs, paying down the microbiome cost on purpose rather than leaving antiviral coverage weaker to avoid it. Patients who complete long dry fasts of 7 or more days, especially 9 or more days, need rebuild work for a second, independent reason: at those durations the biome itself starts eating the gut lining and mucosal lining."
        }
      ])} />
      <h1>Phase 3: The Refeed</h1>
      <StarterKitCallout />
      <KeyTakeaways points={[
        "The refeed is as important as the fast: how you eat in the days after determines how much healing you keep.",
        "Never break a dry fast with solid food. Start with plain water, about a cup an hour for the first four hours, then kompot once you are urinating normally. Coconut water waits for day 2.",
        "Refeeding syndrome is a real danger. Do not eat solid proteins on day 1, avoid caffeine for at least 7 days, and do not combine high-fat and high-carb foods in the first few days.",
        "After the first week, ramp calories gradually, targeting 3,000 or more per day to complete the metabolic reset.",
        "Antivirals keep running across the whole first week, mitochondrial support (methylene blue, and in some cases ethyl pyruvate) is added case by case with no fixed dose, and T3 therapy does not begin until after 7 full days of refeeding.",
        "Watch for a stuck-cortisol pattern after the fast (puffiness, elevated blood pressure, belly fat rebound) and see the dedicated cortisol section if it appears.",
      ]} />
      <p>
        The refeed is just as important as the fast itself. How you eat after
        the fast determines how much healing you keep, and whether you trigger
        the stem cell activation that makes this protocol so powerful. Do not
        rush this phase.
      </p>

      <div className="guiding-questions box-danger">
        <h3>Critical Safety Rules (Refeeding Syndrome)</h3>
        <p>
          Refeeding syndrome is what can happen when food, especially
          carbohydrate, comes back too fast after a long fast. As insulin rises,
          the body pulls phosphate, potassium, and magnesium out of the blood
          and into cells all at once. Those minerals are what the heart,
          muscles, and nerves run on, so a sudden drop can cause an irregular
          heartbeat, muscle weakness, breathing trouble, confusion, and in
          severe cases it can be fatal. The rules below exist to prevent exactly
          this.
        </p>
        <div className="question-item">
          <span className="question-label">Never Eat Solid Food First:</span>
          Starting with solid food after a dry fast can cause dangerous electrolyte
          shifts. Always start with plain water, then kompot. Nothing else goes
          in on day 1. This is not optional.
        </div>
        <div className="question-item">
          <span className="question-label">No Heavy Proteins on Day 1:</span>
          Your digestive system has been offline. Heavy proteins (meat, eggs) can
          cause severe digestive distress and block the stem cell activation signal.
        </div>
        <div className="question-item">
          <span className="question-label">No Caffeine in the First Week:</span>
          Caffeine interferes with the refeeding signal and increases cortisol,
          which slows healing. Avoid it completely for at least 7 days.
        </div>
        <div className="question-item">
          <span className="question-label">Avoid Fat &amp; Carbs Together:</span>
          In the first few days, do not combine high-fat and high-carb foods.
          Your metabolism is restarting and cannot handle this combination yet.
        </div>
        <div className="question-item">
          <span className="question-label">Warning Signs That Mean Stop Now:</span>
          If during the refeed you feel a racing or irregular heartbeat, marked
          muscle weakness, trouble breathing, swelling, or confusion, treat it
          as an emergency. These are the early signs of refeeding syndrome, and
          it can turn fatal fast, so get to an ER, do not wait it out.
        </div>
      </div>

      <h2>The Refeed Schedule</h2>
      <p>
        This schedule is designed to maximize stem cell activation and minimize
        the risk of refeeding syndrome. Follow it as closely as possible.
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Day</th>
            <th style={{ width: "80%" }}>What to Eat &amp; When</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Day 1</strong><br />(Breaking the Fast)</td>
            <td>
              <strong>Water, then kompot. No food.</strong> For the first 4
              hours, plain water only: room temperature, small sips, about a
              cup (200 to 250 ml) an hour, 1 litre at most over the four hours.
              No gulping. After hour 4, once you are urinating normally, kompot
              joins at the same pace, never more than a cup an hour. Day 1
              total is about 2.5 litres across water and kompot. Nothing else.
              <br />
              <em>Caveat:</em> coconut water is not part of day 1. If a
              diuretic kick-start is clearly needed, a small unsweetened
              coconut water may be added, not before about 12 hours after the
              first water, starting very small, at most 250 ml in an hour and
              500 ml for the day.
            </td>
          </tr>
          <tr>
            <td><strong>Day 2</strong></td>
            <td>
              Kompot, unsweetened coconut water in small amounts (at most 1
              litre, still a cup an hour at most), and broth with no added
              salt (vegetable broth, or unsalted bone broth). Still liquids
              only.
            </td>
          </tr>
          <tr>
            <td><strong>Day 3</strong></td>
            <td>
              Cooked fruit and cooked vegetables. This is the first solid
              food: soft, well cooked, small portions. The calorie climb
              begins here. Still no proteins or fats from animal sources.
            </td>
          </tr>
          <tr>
            <td><strong>Day 4</strong></td>
            <td>
              White rice joins, with small amounts of fresh fruit (watermelon,
              banana, peach) alongside the cooked fruit and vegetables. Rice is
              the main carbohydrate from here. Still no proteins or fats from
              animal sources, and do not salt the food: tiny amounts are fine,
              food carries its own sodium.
            </td>
          </tr>
          <tr>
            <td><strong>Day 5–7</strong></td>
            <td>
              You can now slowly add back light proteins: a soft-boiled egg,
              some fish, or legumes. Keep fat intake very low. This is when the
              second wave of stem cell proliferation happens.
            </td>
          </tr>
          <tr>
            <td><strong>Week 2+</strong></td>
            <td>
              Gradually return to a normal, whole-foods diet. Start increasing
              calories deliberately. Return to your regular calorie baseline
              first, then increase by 100 calories per week. For metabolism
              recovery, eventually target 3,000–4,000+ calories per day (see
              the{" "}
              <a href="/refeed-for-bmr">9-Month BMR Reconstruction</a> page).
              You are building up slowly.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>The First 7 Days: What Runs Alongside the Food</h2>
      <p>
        The food schedule above is only half of the first week. Three things
        run in parallel with it, and the timing of each one matters as much as
        what is on your plate. Get this window right and the rest of the
        protocol has a clean foundation to build on.
      </p>

      <div className="guiding-questions box-warning">
        <h3>Keep the Antiviral Coverage Running the Whole Week</h3>
        <p>
          The viral reactivation window does not close when you take your first
          sip of water. It stays open across the entire fast-to-refeed
          transition and through the first seven days, because that is exactly
          the stretch where your immune system is still rebuilding and latent
          herpesviruses look for a gap. Do not treat antivirals as a day-1
          checkbox. Carry them all the way through the week.
        </p>
        <div className="question-item">
          <span className="question-label">Valacyclovir is the standing backbone:</span>
          It never runs during the fast, dry or water. A water fast still
          purges water through the kidneys, so the body stays systemically
          dehydrated and cannot clear a renally cleared drug, whatever the
          electrolytes are doing. The standing course starts on refeed day 3
          at the earliest, after at least two days of eating with heavy
          rehydration, and is then held through the calorie ramp, into
          maintenance and through the months between fasts. If your waking
          temperature was very low going in, kidney function may lag until T3
          brings it back. There is no hard gate there, it is your own decision
          at your own risk, but my advice is to wait until day 3 at minimum
          and stay on L-lysine and monolaurin until you feel ready. Have it in
          your possession before the fast ends so it is ready on that day, and
          once it starts, keep it running through the whole refeed, not just
          for a week.
        </div>
        <div className="question-item">
          <span className="question-label">Ivermectin runs alongside it as supportive coverage:</span>
          It has the better gut microbiome profile during the refeed and pulls
          double duty as the primary antiparasitic, with supportive antiviral
          value on top (a supportive antiviral, not a standalone
          virus-killer). Keep it running through the transition and across
          the refeed, not just on the first day.
        </div>
        <div className="question-item">
          <span className="question-label">A prodrome loading dose escalates on top:</span>
          The moment you feel tingling, the early signal of an oncoming HSV
          outbreak, add a loading dose of valacyclovir on top of the
          standing course, once that course is running. It is an escalation,
          not valacyclovir&rsquo;s only role. On refeed day 1 or 2, before the
          course has started, it is your decision: if you feel rehydrated you
          can start early, knowing why the drug is held during the water fast.
        </div>
        <div className="question-item">
          <span className="question-label">L-lysine, monolaurin and olive leaf continue daily:</span>
          L-lysine comes back on water day 1, the moment water does. Monolaurin
          and olive leaf come in with your first meal. Keep all three going
          through the week while you also hold off on arginine-rich foods (nuts, seeds,
          chocolate, peanut butter). The full mechanism and the
          nine-herpesvirus breakdown live on the{" "}
          <a href="/viral-reactivation">Viral Reactivation</a> page.
        </div>
      </div>

      <div className="guiding-questions box-info">
        <h3>Mitochondrial Support During the First 7 Days: Methylene Blue (and Sometimes Ethyl Pyruvate)</h3>
        <p>
          Coming out of the fast, your mitochondria are the bottleneck. They
          have been through autophagy and are rebuilding, and the first week of
          refeeding is when they are most responsive to being pushed in the
          right direction. This is where methylene blue earns its place, and in
          selected cases ethyl pyruvate alongside it.
        </p>
        <div className="question-item">
          <span className="question-label">Methylene blue, as electron-transport support:</span>
          Coming out of a fast, the cell is carrying a heavy load of NADH from
          all the fat-burning, a kind of reductive stress, and if the electron
          transport chain cannot clear it that NADH backs up and stalls energy
          production. Methylene blue acts as an alternative electron carrier: it
          accepts electrons from the backed-up NADH and passes them down the
          chain, restoring the NAD+ to NADH balance so the mitochondria can make
          energy again. It keeps the respiratory chain moving even where
          individual complexes are still damaged, which in a body climbing out
          of the metabolic trough of a fast can be the difference between an
          energetic refeed and a flat one.
        </div>
        <div className="question-item">
          <span className="question-label">Ethyl pyruvate, in selected cases:</span>
          For some patients I layer in ethyl pyruvate as an additional
          metabolic and anti-inflammatory support during the same window.
          Whether it belongs in your stack depends on your specific
          presentation.
        </div>
        <div className="question-item">
          <span className="question-label">This is decided case by case, with no fixed number:</span>
          Methylene blue and ethyl pyruvate are individualized. There is no
          one-size dose, no drop count, no amount published here, and that is
          deliberate. The right approach is worked out with each person in the
          consult, weighed against their medications (methylene blue interacts
          dangerously with serotonergic drugs, a real hard-stop that has to be
          screened for) and their history. This is exactly the kind of call the
          fasting detective approach exists to make. Do not self-prescribe a
          number off the internet.
        </div>
      </div>

      <div className="guiding-questions box-warning">
        <h3>T3 Does Not Start Yet</h3>
        <p>
          This is worth stating plainly, because it is a change from how the
          protocol used to be sequenced. You finish the fast, the dry fast and
          then the water fast, with no T3 on board. You do not start T3 during
          the fast, and you do not start it in the first week of refeeding. T3
          therapy begins only after you have completed seven full days of
          refeeding: once the food is back in, once the antiviral coverage has
          carried you through the reactivation window, and once the
          mitochondrial support has had a week to work.
        </p>
        <p>
          After those seven days, the T3 protocol starts and the climb, hold,
          and taper run exactly as laid out on the{" "}
          <a href="/t3-therapy">T3 Therapy</a> page. Starting T3 earlier, on top
          of a gut and a metabolism that are still coming back online, is the
          mistake this sequence is built to prevent.
        </p>
      </div>

      <h2>How Many Calories to Eat During Recovery</h2>
      <div className="guiding-questions box-info">
        <h3>The Calorie Ramp: Day 8 Onward</h3>
        <p>
          Once you exit the first 7 days of the refeed, the goal is not to
          stay light: the goal is to deliberately rebuild. Here is the framework:
        </p>
        <div className="question-item">
          <span className="question-label">Day 8: Return to Your Pre-Fast Baseline</span>
          Resume eating roughly the same number of calories you were eating
          before the fast. For most people this is around{" "}
          <strong>1,800–2,000 calories per day</strong>. Do not jump above this
          yet. Your digestive system needs a few days to handle regular food
          volumes again.
        </div>
        <div className="question-item">
          <span className="question-label">Week 2 Onward: Add 100 Calories Per Week</span>
          Once you are stable at your baseline, increase your daily calories by
          approximately <strong>100 per week</strong>, consistently:
          <ul style={{ marginTop: "0.5rem" }}>
            <li>Week 2: ~2,100 cal/day</li>
            <li>Week 3: ~2,200 cal/day</li>
            <li>Week 4: ~2,300 cal/day</li>
            <li>
              Continue until you reach at least{" "}
              <strong>3,000 calories per day</strong>
            </li>
          </ul>
        </div>
        <div className="question-item">
          <span className="question-label">Expect Some Weight Gain: Do Not Panic</span>
          Almost every starvation recovery study documents significant weight
          gain during the rebuilding phase. This is normal, expected, and
          necessary. Your body has been in survival mode and will prioritize
          restoring reserves. If you follow the full Scorch Protocol (T3
          therapy, hGH, BPC-157, proper sleep), you will minimize fat gain and
          direct more of those calories into muscle and tissue repair. But do
          not fear the scale. Resisting this phase slows healing significantly.
        </div>
        <div className="question-item">
          <span className="question-label">The Goal Is 3,000+ Cal/Day</span>
          Many people with chronic illness have been eating too little for
          years, which is part of what got them here. The metabolic reset only
          completes when the body feels safe in abundance. 3,000 is the floor
          for most, and some will need to go higher. See the{" "}
          <a href="/refeed-for-bmr">9-Month BMR Reconstruction</a> page for
          the full long-term calorie strategy.
        </div>
      </div>

      <h2>How to Track Your Calories</h2>
      <div className="guiding-questions box-info">
        <h3>Use a Calorie Counting App (With the Image Scan Feature)</h3>
        <p>
          Hitting your calorie targets is not guesswork. The most practical
          tool available right now is a dedicated calorie tracking app with
          image-based food scanning. Both <strong>MyFitnessPal</strong> and{" "}
          <strong>Cronometer</strong> offer this. Pay for the subscription
          and use the photo upload feature so you can point your phone at a
          meal and get an automatic breakdown. It removes the friction of
          logging and makes hitting 2,000–3,000+ calories per day achievable
          without obsessing over every ingredient.
        </p>
        <div className="question-item">
          <span className="question-label">Minimum Carbohydrates: 100g Per Day</span>
          During the refeed and recovery phase, your carbohydrate floor is{" "}
          <strong>100 grams per day</strong>, double the 50g keto limit.
          This is not optional. Carbohydrates are the primary signal that
          tells your thyroid to convert T4 into active T3, which powers your
          metabolism and muscle preservation. Going too low on carbs during
          recovery is one of the most common mistakes, as it pushes the body
          back toward a catabolic, low-energy state exactly when you are
          trying to climb out of one.
        </div>
        <div className="question-item">
          <span className="question-label">Gaining Weight Too Fast? Lower Carbs.</span>
          If the scale is moving up faster than you are comfortable with,
          reduce your carbohydrate intake first, not your total calories.
          Shift some of those calories toward protein and fat instead.
          Protein is your best ally here: it is thermogenic, highly
          satiating, and preferentially used for muscle repair rather than
          fat storage. Keep carbs at or above 100g but redistribute the
          rest of your calorie budget.
        </div>
        <div className="question-item">
          <span className="question-label">Losing Weight Too Fast? Increase Carbs.</span>
          If you are losing weight during the ramp-up phase, you are
          under-fueling. Add carbohydrates first: rice, fruit, potatoes,
          oats. Your body is still in a deficit state and needs the
          carbohydrate signal to come out of it. Insufficient calories
          during this phase can cause muscle catabolism, especially once
          you start T3 therapy, which raises metabolic demand significantly.
        </div>
        <div className="question-item">
          <span className="question-label">Insulin Resistance: A Reason to Limit Carbs Further</span>
          If you have a known history of insulin resistance (or symptoms like
          fatigue after high-carb meals, neuropathy, blood sugar spikes, or
          difficulty losing fat), be cautious about pushing carbohydrates
          aggressively. Forcing high carbohydrate intake against significant
          insulin resistance does not produce energy; it produces diabetic-type
          symptoms. Peripheral neuropathy, numbness, brain fog after eating,
          and erratic energy are all signs that your carb tolerance is lower
          than average. In this case, keep carbs closer to the 100g minimum
          rather than the higher end, and prioritize improving insulin
          sensitivity first (through resistance training, T3 therapy with
          adequate caloric energy, MOTS-c, or aspirin) before ramping carbs
          higher.
        </div>
        <div className="question-item">
          <span className="question-label">The Core Goal: Energy Abundance Without Excess Fat Gain</span>
          The aim is to keep your body in a clear state of energy abundance
          with enough fuel that it never needs to cannibalize muscle for
          energy, but calibrated so fat accumulation stays manageable.
          This balance is what allows the T3 therapy phase to work at its
          best: a well-fueled body on T3 rebuilds tissue; an underfueled
          body on T3 just burns faster. Because a long-starved appetite fills up fast, the calories have to be dense: load oils, full-fat dairy, eggs, fatty fish and meat, and starchy carbs so you actually cover the window instead of leaving it half-filled and wasting muscle. Peptides like Retatrutide and BPC-157 can further optimize the
          energy-to-composition ratio for people who need additional help here.
          (L-carnitine is no longer used: it works against the peripheral
          thyroid effect the protocol depends on.)
        </div>
        <div className="question-item">
          <span className="question-label">Cyproheptadine: the first-cycle eating-window lever</span>
          When suppressed appetite or a hypersensitive gut is the bottleneck
          in the first T3 cycle,{" "}
          <strong>cyproheptadine</strong> is the primary tool. Its job is to
          drive you to eat dramatically more food so you fill the wider
          metabolic eating window T3 opens: an underfueled body on T3 just
          burns muscle. It also calms the brain-gut nerves that make large
          meals nauseating (the same action behind its established use for
          cyclic vomiting and abdominal migraine in children), so eating more becomes tolerable
          even when the gut is not ready. It also improves sleep and lowers
          the serotonin-driven cortisol surge T3 can provoke.
          Dose is 1 to 4 mg in the evening, set in your consult.
          For the full mechanism, and why cyproheptadine can continue into the
          hGH cycle (injected hGH bypasses the pituitary signal cyproheptadine
          blunts), see the{" "}
          <a href="/t3-therapy#cyproheptadine-caveat">T3 Therapy page</a>.
        </div>
      </div>

      <h2>Watch For Post-Fast Cortisol Stuck State</h2>
      <div className="guiding-questions box-warning">
        <h3>The 11β-HSD2 Off-Switch That Can Get Stuck</h3>
        <p>
          Some patients come out of an extended fast puffier than they went
          in, with sustained high blood pressure, anxiety, and post-fast
          weight rebound that lands disproportionately on the belly. This is
          not a sign that your fast failed. It is a sign that an enzyme
          called 11β-HSD2 (the cortisol off-switch) has gotten stuck in the
          off position, and your body is locked in a high-cortisol loop
          even after refeed begins.
        </p>
        <div className="question-item">
          <span className="question-label">Signs To Watch For:</span>
          Facial or abdominal puffiness, sustained elevated blood pressure
          (10–20 mmHg above your baseline), wired-but-tired anxiety,
          early-morning waking around 3–5 AM, post-fast weight rebound
          concentrated in visceral fat.
        </div>
        <div className="question-item">
          <span className="question-label">Why This Refeed Stack Targets It:</span>
          Carbohydrates signal abundance to the hypothalamus (reducing
          cortisol output). Low-dose aspirin blocks the inflammatory cytokines
          (TNF-α especially) that jam the off-switch closed. In the first seven
          days of refeeding these two do the work, because T3 is not on board
          yet. Once T3 therapy begins after day 7 of refeeding, slow-release T3
          restores the metabolic clearance pathway that pulls active cortisol
          out of the bloodstream and completes the correction. Together they
          flip the switch back to its normal balance.
        </div>
        <div className="question-item">
          <span className="question-label">Full Mechanism:</span>
          See{" "}
          <Link href="/blog/cortisol-off-switch-after-extended-fasting">
            The Cortisol Off-Switch That Gets Stuck After Extended Fasting
          </Link>{" "}
          for the enzyme story, the three reasons it stays stuck (sex
          differences, fat tissue upregulation, systemic inflammation), and
          the safer adjuncts (potassium, inositol, progesterone) that layer
          on top.
        </div>
      </div>

      <h2>Why Plain Water First, and Why Kompot</h2>
      <div className="guiding-questions box-info">
        <h3>The Reasoning Behind the New Day 1</h3>
        <p>
          For years I broke long dry fasts on coconut water, and I taught it
          that way. Looking back, I now think that sped the break up by
          mistake. After a dry fast of 5 days or more the refeed starts on
          plain water, then kompot, and coconut water waits for day 2. Here is
          the reasoning.
        </p>
        <div className="question-item">
          <span className="question-label">Your kidneys are still holding water:</span>
          After days without water the kidneys are in full water-retention
          mode. A 1994 clinical thesis from the Military Medical Academy in St
          Petersburg measured aldosterone, the hormone that tells the kidneys
          to hold on to water, up 87% at 56 hours, with the blood 4 to 6%
          thicker. That is the state you are in when the first fluid goes
          down.
        </div>
        <div className="question-item">
          <span className="question-label">Why coconut water is the wrong first drink:</span>
          Coconut water does two things that fight that state at once. It
          carries about 600 mg of potassium per cup, and it acts as a diuretic
          by suppressing the very hormones that are holding the water in (a
          2022 rat study in Frontiers in Nutrition found it lowers ADH,
          angiotensin II and aldosterone; it is a rat study, but the direction
          is the point). Concentrated blood, lagging kidneys and a potassium
          load is the recipe for a potassium spike. There is a published case,
          a 2014 case report in Circulation: Arrhythmia and Electrophysiology,
          of a healthy 42-year-old whose heart rhythm failed after several
          servings of coconut water. I am not willing to run that risk on the
          first morning after a dry fast.
        </div>
        <div className="question-item">
          <span className="question-label">Plain water first lets the kidneys wake up:</span>
          Room temperature, small sips, about a cup (200 to 250 ml) an hour for
          the first four hours, 1 litre at most. No gulping. That pacing is the
          Filonov tradition, the Russian dry-fasting school. Once you are
          urinating normally, the kidneys are back on duty and can handle what
          comes next.
        </div>
        <div className="question-item">
          <span className="question-label">Why kompot:</span>
          Kompot is a large pot of water with a small amount of fruit, fresh or
          dried (apples, plums or prunes, apricots), simmered, strained, no
          sugar added, cooled to room temperature. It should taste like faintly
          flavoured water, not juice: lighter in sugar than unsweetened coconut
          water. It adds gentle minerals and a little sugar without the
          potassium load. The same 1994 St Petersburg thesis started its
          patients on dilute fruit and vegetable liquids, about 20 to 30 ml per
          kg a day for a mild case, with fruit and vegetables next and unsalted
          rice and porridge from day 4 to 5, and the new ladder follows that
          shape. Make the kompot the evening before the fast ends.
        </div>
        <div className="question-item">
          <span className="question-label">Where coconut water belongs now:</span>
          Day 2, unsweetened, in small amounts: at most 1 litre across the day
          and still no more than a cup an hour, alongside kompot and unsalted
          broth. Its potassium and its diuretic kick are useful once the
          kidneys are awake and the blood has thinned out. The one day-1
          exception is marked in the schedule above: if a diuretic kick-start
          is clearly needed, a small unsweetened coconut water, not before
          about 12 hours after the first water, at most 250 ml in an hour and
          500 ml for the day.
        </div>
        <div className="question-item">
          <span className="question-label">Salt, all week:</span>
          Do not salt your food. Tiny amounts are fine, and food carries its
          own sodium. Potassium matters more than sodium here, and the kompot,
          coconut water and broth supply it. Potassium salt (KCl) as a
          seasoning waits for day 3 and stays light. Someone eating low-carb
          would need more salt, but low-carb is not what this protocol
          recommends.
        </div>
      </div>

      <h2>The Rice &amp; Fruit Protocol: Why These Foods?</h2>
      <div className="guiding-questions box-info">
        <h3>Why White Rice?</h3>
        <div className="question-item">
          <span className="question-label">Easy to Digest:</span>
          White rice is one of the most digestible foods on the planet. After a
          fast, your gut lining has repaired and is rebuilding. White rice does
          not irritate this process.
        </div>
        <div className="question-item">
          <span className="question-label">Glucose Signal:</span>
          Rice provides a gentle glucose signal that tells your thyroid to start
          converting T4 into active T3 again. This is critical for restarting
          your metabolism.
        </div>
        <div className="question-item">
          <span className="question-label">No Anti-nutrients:</span>
          White rice has been stripped of the bran and germ, removing
          phytates and lectins that can irritate a healing gut. Whole grains
          would be wrong here.
        </div>
      </div>

      <h2>BPC-157: Doubling Your Stem Cell Regeneration</h2>
      <div className="guiding-questions box-success">
        <h3>The Most Overlooked Upgrade to the Refeed</h3>
        <p>
          You&rsquo;ve already done something incredible by dry fasting, and your
          body has mobilized stem cells and cleared cellular debris. BPC-157
          (Body Protection Compound) is a peptide that can dramatically amplify
          what happens next.
        </p>
        <div className="question-item">
          <span className="question-label">Stem Cell Synergy:</span>
          Stem cell clinics around the world have observed that pairing
          BPC-157 with stem cell therapy produces significantly better
          distribution and acceptance of new cells. The same principle applies
          here: the stem cells your fast has mobilized integrate more
          effectively into damaged tissues when BPC-157 is present during the
          refeed window.
        </div>
        <div className="question-item">
          <span className="question-label">Gut Repair:</span>
          BPC-157 is particularly effective at healing the gut lining, exactly
          the tissue that takes the most stress during a dry fast and needs to
          come back online cleanly during the refeed.
        </div>
        <div className="question-item">
          <span className="question-label">When to Take It:</span>
          Begin BPC-157 from Day 2–3 of the refeed, once rehydration is under
          way and the gut is beginning to wake up. Continue
          for 4–8 weeks through the refeed and rebuild phase.
        </div>
        <p>
          <em>
            You&rsquo;re already doing something powerful. BPC-157 is a small
            addition that can double its effect for a fraction of the cost of
            any other intervention.
          </em>
        </p>
      </div>

      <h2>Viral Reactivation During the Refeed (Quick Reference)</h2>
      <p>
        The refeed is the most dangerous moment in chronic illness recovery,
        and it is not because of food itself. It is the energetic trough
        between the fasted state (when your immune system is biologically
        hostile to viral replication) and the fully refed state (when your
        immune system has rebuilt). For the few days inside that gap, latent
        herpesviruses (HSV-1, HSV-2, EBV, HHV-6, and the rest of the nine
        human herpesviruses) get an open window to reactivate. This is the
        single most important reason the refeed must be planned, not
        improvised.
      </p>

      <div className="guiding-questions box-danger">
        <h3>Read the Full Deep Dive Before You Refeed</h3>
        <p>
          The mechanism, the studies, the full list of nine human
          herpesviruses with symptom profiles, the pharmacological stack
          with all dosing logic, the HSV-containment biology, and the
          safety protocol all live on the dedicated{" "}
          <strong>
            <a href="/viral-reactivation">Viral Reactivation</a>
          </strong>{" "}
          page. If you have any history of cold sores, mono, shingles,
          or unexplained chronic fatigue, do not begin the refeed without
          reading it first. The summary below covers only the practical
          refeed actions.
        </p>
      </div>

      <div className="guiding-questions box-warning">
        <h3>The Refeed-Day Action Checklist</h3>
        <p>
          Three things to have in place by the time you take your first
          calories, and to keep running across the whole first week, not just
          on day one. The reactivation window stays open through the entire
          fast-to-refeed transition and the first seven days of refeeding. All
          three are explained in full mechanistic detail on the Viral
          Reactivation page; this is the action shortlist.
        </p>
        <div className="question-item">
          <span className="question-label">L-Lysine from Refeed Day 1, Monolaurin from the first cooked food</span>
          Lysine competes with arginine for the amino acid transporter
          herpesviruses depend on. Monolaurin disrupts the lipid envelope
          of every human herpesvirus. Lysine goes in your water from day 1 (empty stomach); monolaurin joins with the first cooked food on day 3.
        </div>
        <div className="question-item">
          <span className="question-label">Avoid Arginine-Rich Foods for the First Two Weeks</span>
          Nuts, seeds, chocolate, peanut butter. These spike free
          arginine and undo the work lysine is doing.
        </div>
        <div className="question-item">
          <span className="question-label">Have Valacyclovir (Standing Backbone) and Ivermectin (Supportive) On Hand BEFORE Breaking the Fast</span>
          Valacyclovir is the standing antiviral backbone: off for the whole
          fast, dry and water, then started on refeed day 3 at the earliest,
          after two days of eating with heavy rehydration, and held through
          the calorie ramp, into maintenance and through the months between
          fasts. Ivermectin runs alongside
          it through the window (better gut microbiome compatibility during
          refeed and double duty as the primary antiparasitic, with
          supportive antiviral value on top). Both need to be in your
          possession before the fast ends, not after, and a prodrome
          loading dose of valacyclovir sits ready as an escalation on top
          of the standing course if tingling shows up.
        </div>
      </div>

      <div className="guiding-questions box-danger">
        <h3>The T3 Cycle Off-Ramp Is Another High-Risk Window</h3>
        <p>
          Viral reactivation risk does not end with the refeed. When you
          step off a T3 cycle, your metabolic rate temporarily dips as
          the thyroid takes time to restart its own output. This creates
          the same energetic trough that triggers reactivation during the
          fast-to-refeed transition. Continue antiviral coverage during
          any T3 wind-down until your waking body temperature has returned
          to your pre-T3 baseline for at least 5&ndash;7 consecutive days.
        </p>
      </div>

      <h2>Rebuilding the Gut Microbiome (and the Virome You Didn&rsquo;t Know You Had)</h2>
      <p>
        Most people walking into a fasting protocol think about their{" "}
        <strong>bacterial</strong> microbiome. Almost nobody thinks about
        their <strong>virome</strong> &ndash; the beneficial viral biome
        of bacteriophages and commensal viruses that lives alongside the
        bacteria. Both of them take collateral damage during the protocol,
        but only in specific scenarios. Most patients don&rsquo;t need
        aggressive rebuild work. Some absolutely do.
      </p>

      <div className="guiding-questions box-info">
        <h3>Who Actually Needs Deliberate Biome Rebuild?</h3>
        <p>
          The standard protocol path is a 5-day dry fast followed by the
          standing valacyclovir antiviral backbone, started on refeed day 3
          at the earliest and run daily through the months between fasts.
          Because that course runs long enough to
          take real damage to both the bacterial biome and the virome, the
          gut-rebuild rider is mandatory for it, not optional. This is the
          default population now, not an edge case.
        </p>
        <div className="question-item">
          <span className="question-label">The standing valacyclovir course:</span>
          Kefir first, then kombucha, run alongside the standing course for
          as long as it runs, paying down the microbiome cost on purpose
          instead of leaving the antiviral coverage weaker to avoid it.
        </div>
        <div className="question-item">
          <span className="question-label">Long dry fasts (7+ days, especially 9+):</span>
          A second, independent reason to rebuild: at those durations the
          biome itself starts eating your gut lining and mucosal lining.
          For some patients this is therapeutic &ndash; it trims back
          negative bacterial populations and clears space for
          repopulation with beneficial cultures. But it does mean the
          rebuild step is not optional here either.
        </div>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Sequencing Inside the Scorch Protocol</h3>
        <p>
          Biome rebuild is not a Day-1-of-refeed activity for most patients.
          The Scorch Protocol enters phases where it becomes critical, and
          phases where it would actively get in the way:
        </p>
        <div className="question-item">
          <span className="question-label">Early protocol (first cycles):</span>
          Focus is dry fast stem cell regeneration, autophagy, and
          metabolic foundation (T3). I am setting the main structure
          up. Aggressive probiotic loading here is not the priority.
        </div>
        <div className="question-item">
          <span className="question-label">Repopulation phase:</span>
          Deliberate rebuild work starts after the second round of cycles,
          or when antiviral / antifungal use has been identified as part
          of the patient&rsquo;s specific protocol path. Everyone is a
          little different, and the timing differs.
        </div>
        <p>
          It is genuinely difficult to nail this timing without individual
          assessment, and doing it wrong can set a patient back. This is
          one of the moments where working with me directly is the
          difference between a clean recovery and a frustrating one. The
          Scorch Protocol is closer to having a fasting detective on your
          team than following a generic checklist.
        </p>
        <p>
          <Link href="/membership?ref=refeed-timing">
            Get Yannick&rsquo;s direct guidance on your refeed &rarr;
          </Link>
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Rebuild Stack: The Trinity</h3>
        <p>
          When repopulation time comes, the foundational stack is three
          fermented foods. I call it the trinity:
        </p>
        <ul>
          <li>
            <strong>Kefir</strong> &ndash; live bacterial cultures
            naturally present. Both dairy kefir and water kefir work.
          </li>
          <li>
            <strong>Kombucha</strong> &ndash; most commercial kombuchas
            contain live cultures. Check the label.
          </li>
          <li>
            <strong>Kimchi or sauerkraut</strong> &ndash; this one is
            where most people get it wrong. The jar <em>must</em> say{" "}
            <strong>raw</strong> or <strong>unpasteurized</strong> to
            contain live bacteria. Shelf-stable supermarket sauerkraut
            and pasteurized kimchi are functionally inactive.
          </li>
        </ul>
        <p>
          In Filonov&rsquo;s Russian dry fasting tradition, the same role
          is played by a sour cream / sour cultured water drink. The
          principle is identical: deliver live cultures to a depleted
          gut at the moment it is most receptive to colonization.
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>Timing: How Long Until It Actually Shifts</h3>
        <div className="question-item">
          <span className="question-label">For regular people:</span>
          About <strong>four weeks</strong> of continuous daily
          consumption to produce a meaningful, lasting shift in the
          biome.
        </div>
        <div className="question-item">
          <span className="question-label">For depleted patients (post-long-fast or post-long-antiviral):</span>
          Faster. The empty territory in a depleted gut allows new
          cultures to colonize quicker than they would in a fully
          populated baseline gut. The exact compression of the timeline
          varies per patient.
        </div>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Bacterial Exception: Lyme, Babesia, Bartonella</h3>
        <p>
          The Scorch Protocol targets fungal, parasitic, and viral
          pathogens. <strong>Bacterial is its own category</strong>, and
          it requires its own approach.
        </p>
        <p>
          Bacterial infections in chronic illness usually mean Lyme
          disease and its co-infections (babesia and bartonella). These
          typically require antibiotics, and that is the one place
          antibiotics are recommended in this protocol. Otherwise,
          antibiotic use is avoided because of the collateral damage
          to the biome.
        </p>
        <p>
          A common pattern: patients complete an antibiotic course for
          Lyme, eventually test negative for the bacteria, but their
          chronic illness symptoms stay the same or get worse. The
          Scorch Protocol picks up at exactly that point &ndash; the
          residual mitochondrial, immune, and metabolic damage that
          antibiotics cannot reach. Continue any active Lyme protocol
          (herbal or antibiotic) alongside Scorch. Do not stop one to
          start the other.
        </p>
        <p>
          For repairing the biome damage antibiotics cause, live
          fermented cultures during early refeed work better than
          capsule probiotics. At Filonov&rsquo;s dry fasting retreats,
          participants are given a sour cream cultured probiotic drink
          at the start of refeed. When a retreat occasionally runs out
          or forgets to prepare it, I&rsquo;ve heard from participants
          who simply bought a few jugs of kefir from a local store and
          used that as a substitute, with similar reported results. The
          principle is the same either way: live cultures, in volume,
          delivered when the gut is most receptive.
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Virome: The Biome You Were Never Told About</h3>
        <p>
          The bacterial microbiome gets all the attention. The virome
          gets none. But you have one &ndash; trillions of beneficial
          bacteriophages and commensal viruses that regulate the
          bacterial side, train your immune system, and maintain
          equilibrium with your tissues.
        </p>
        <p>
          Suppressive antiviral therapy doesn&rsquo;t just kill the
          herpesviruses it&rsquo;s aimed at. It nukes the beneficial
          virome alongside. There is currently no established way to
          deliberately rebuild the virome the way kefir rebuilds the
          bacterial side. Phage therapy exists experimentally but is
          not yet a protocol component. The pragmatic position: once
          you stop the antiviral pressure, the virome auto-recovers
          on its own.
        </p>
        <p>
          This cost is exactly why valacyclovir, now run as the standing
          antiviral backbone (started on refeed day 3 at the earliest, never
          during the fast in either form, and held through the calorie ramp,
          into maintenance and through the months between fasts),
          carries a mandatory gut-rebuild rider alongside it: kefir first,
          then kombucha. This is a deliberate tradeoff, not an oversight.
          The standing course gives you the stronger, more reliable
          antiviral coverage across the whole refeed, and the rider pays
          the biome cost down on purpose instead of leaving that coverage
          weaker to avoid the cost. Ivermectin still runs alongside the
          standing course for its gentler gut profile and its double duty
          as the primary antiparasitic, but it no longer stands in for
          valacyclovir&rsquo;s job.
        </p>
      </div>

      <InterestingVideoBlock
        videoSrc="https://www.youtube.com/embed/pHJSNYGQYcU"
      />

      <EmailCapture compact source="refeeding-footer" />
      <RefeedPlanPromo source="refeeding" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="refeeding" sectionTitle="Phase 3: The Refeed" />

      <ReferencesSection
        refs={[
          {
            citation:
              "Papagiannopoulos IA, Sideris VI, Boschmann M, Koutsoni OS, Dotsika EN. Anthropometric, Hemodynamic, Metabolic, and Renal Responses during 5 Days of Food and Water Deprivation. Forsch Komplementmed, 2013;20(6):427–433.",
            href: "https://doi.org/10.1159/000357718",
            note: "renal filtration rises sharply during the fast and settles afterward, the basis for a gradual, monitored refeed",
          },
        ]}
      />

      <ProtocolFurtherReading protocolSlug="refeeding" />
    </>
  );
}
