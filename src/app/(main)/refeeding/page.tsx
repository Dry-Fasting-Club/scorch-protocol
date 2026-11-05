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
          answer: "The standard protocol path (a 5-day dry fast followed by the standing valacyclovir antiviral backbone, never run during a fast, started on refeed day 3 at the earliest and run daily through the months between fasts) carries a mandatory gut-rebuild rider: kefir first, then kombucha, run alongside the standing course for as long as it runs, paying down the microbiome cost on purpose rather than leaving antiviral coverage weaker to avoid it. If you have any trouble with dairy, skip kefir and use a different probiotic. Patients who complete long dry fasts of 7 or more days, especially 9 or more days, need rebuild work for a second, independent reason: at those durations the biome itself starts eating the gut lining and mucosal lining."
        }
      ])} />
      <h1>Phase 3: The Refeed</h1>
      <StarterKitCallout />
      <KeyTakeaways points={[
        "The refeed is as important as the fast: how you eat in the days after determines how much healing you keep.",
        "Never break a dry fast with solid food. Start with plain water, about a cup an hour for the first four hours, then kompot once you are urinating normally. Coconut water waits for day 2.",
        "Refeeding syndrome is a real danger. Do not eat solid proteins on day 1, avoid caffeine for at least 7 days, and do not combine high-fat and high-carb foods in the first few days.",
        "Refeed days 1 to 14 are the consolidation window, and its mutagen rules are: no alcohol, nicotine, smoked, charred or processed meat, mouldy food, sunburn, elective scans or new drugs you do not need. It rests on one mouse study and nobody has measured it in people, but it costs nothing, so I keep it.",
        "After the first week, ramp calories gradually, building toward the calorie target on the Metabolism Repair Plan page to complete the metabolic reset.",
        "Antivirals keep running across the whole first week, mitochondrial support (methylene blue, and in some cases ethyl pyruvate) is added case by case with no fixed dose, and T3 therapy does not begin until after 7 full days of refeeding.",
        "Watch for a stuck-cortisol pattern after the fast (puffiness, elevated blood pressure, belly fat rebound) and see the dedicated cortisol section if it appears.",
      ]} />
      <p>
        The refeed is the most vulnerable stage of{" "}
        <Link href="/healing-cycle">the whole cycle</Link>. The fast pushed your
        cells out of their defensive state; for the next two weeks, the
        consolidation window, the new cells are settling in and reconnecting,
        and any fresh danger signal (too much food too fast, a protein or
        insulin spike, an infection, a stressful week, a cold room, broken
        sleep, caffeine, alcohol) can lock them straight back in. Every rule on
        this page exists to keep that signal off.
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

      <div className="guiding-questions box-warning">
        <h3>Refeed days 1 to 14: keep the alarm off</h3>
        <p>
          Stay warm, sleep long and dark, keep the diary light and the company
          easy, walk rather than train (light weights come back around day 12),
          keep away from sick people where you can, and treat any new symptom
          as a reason to slow the ladder, not to push through.
        </p>
      </div>

      <h2>The Refeed Schedule</h2>
      <p>
        This schedule is designed to keep what the fast opened and to keep
        refeeding syndrome off the table. Follow it as closely as possible.
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
            <td><strong>Days 5 to 7</strong></td>
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
              first, then increase by 100 calories per week. The calorie
              target for the months after the refeed is set on the{" "}
              <a href="/refeed-for-bmr">Metabolism Repair Plan</a> page. You
              are building up slowly.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="mutagen-holiday">Refeed Days 1 to 14: The Consolidation Window and Its Mutagen Rules</h2>
      <p>
        The first two weeks of eating after a fast are when the body rebuilds
        fastest. I treat that stretch as a window to protect, not a threat to
        fear, and the protection is simple: for refeed days 1 to 14, keep clear
        of the common, avoidable things that can damage DNA, and of anything
        new you do not need. My rule:
      </p>

      <div className="guiding-questions box-warning">
        <h3>For Refeed Days 1 to 14, Keep Clear Of</h3>
        <ul>
          <li>
            <strong>Alcohol</strong>, in any amount.
          </li>
          <li>
            <strong>Tobacco and nicotine</strong> in any form: cigarettes,
            vapes, pouches, gum.
          </li>
          <li>
            <strong>Smoked, charred or processed meat</strong>: bacon, ham,
            salami, sausages, anything blackened on a grill. When protein comes
            back from day 5, make it fresh and gently cooked.
          </li>
          <li>
            <strong>Mouldy or aflatoxin-prone food</strong>: old nuts, poorly
            stored grains, anything with visible mould.
          </li>
          <li>
            <strong>Sunburn</strong>: cover up or stay in the shade rather than
            burn.
          </li>
          <li>
            <strong>Elective X-rays and CT scans</strong>: if a scan can wait
            two weeks, let it wait.
          </li>
          <li>
            <strong>New drugs you do not need</strong>: the stack the protocol
            schedules is the stack. This is not the fortnight to try something
            extra.
          </li>
        </ul>
        <p>
          <em>
            Medical caveat: anything you actually need goes ahead. A scan your
            doctor orders or a medicine you are prescribed is not what this
            rule is about; the consolidation window&rsquo;s mutagen rules
            cover the optional exposures, not medical care.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>Why: The Honest Basis</h3>
        <p>
          A 2024 study in mice found that the first day of eating after a
          24-hour fast is a burst of growth in the gut: stem-cell division and
          protein building peaked at the end of that first day, above the
          level in mice that had never fasted. When the researchers deleted a
          tumour-suppressor gene in the gut&rsquo;s stem cells during that
          burst, the refed mice grew more tumours than mice that kept eating
          normally or stayed fasted (Imada 2024). The burst ran on insulin
          switching mTOR back on, the body&rsquo;s master growth switch, with
          polyamines and protein synthesis climbing behind it, and blocking
          that growth signal (with rapamycin, or by blocking polyamine
          production or protein synthesis) took the extra tumours away.
        </p>
        <p>
          <em>
            What the evidence says: this is one mouse study on a 24-hour fast,
            not a multi-day dry fast. No chemical mutagen was given; the hit
            was a gene deleted on cue, in what the commentary on the paper
            calls a strong tumour-induction model, and the word mutagen in that
            commentary&rsquo;s title is an analogy (Brunner 2024). Nobody has
            measured any of this in people, and the authors say so. I carry it
            as a precaution, not as a finding about you: a mutation landing in
            the burst is the one thing the mouse data says to avoid, and
            staying clear of the common mutagens for two weeks costs nothing.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>Why Days 1 to 3 Stay Low in Growth Signal</h3>
        <p>
          The same study is the clearest reason the first three days carry
          almost no protein. What drove the extra tumours in those mice was the
          growth signal itself, and the slowed ladder above keeps that signal
          low on purpose: water, kompot, coconut water and unsalted broth, then
          cooked fruit and vegetables, with light protein coming back from day
          5. So for days 1 to 3, my rule:
        </p>
        <ul>
          <li>
            <strong>No protein powders or shakes.</strong>
          </li>
          <li>
            <strong>No leucine or BCAA supplements.</strong> Leucine is the
            amino acid best known for switching mTOR on, and BCAA products are
            built around it.
          </li>
          <li>
            <strong>No breaking the fast with steak</strong>, or with any other
            heavy protein meal.
          </li>
        </ul>
        <p>
          The digestive reasons for going slow (an offline gut, low stomach
          acid, the refeeding syndrome rules above) stand on their own. This one
          is the cancer-caution reason, and it rests on the same mouse study
          with the same caveat.
        </p>
      </div>

      <h2>The First 7 Days: What Runs Alongside the Food</h2>
      <p>
        The food schedule above is only half of the first week. Three things
        run in parallel with it, and the timing of each one matters as much as
        what is on your plate. Get this window right and the rest of the
        protocol has a clean foundation to build on.
      </p>

      <div className="guiding-questions box-warning" id="antiviral-coverage">
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
          refeeding, and not into an unsettled refeed: a new symptom, a stalled
          ladder or an infection means T3 waits. It begins once the food is
          back in, once the antiviral coverage has carried you through the
          reactivation window, and once the mitochondrial support has had a
          week to work.
        </p>
        <p>
          After those seven days you decide whether this cycle needs T3 at all.
          If the fast left you running hot, holding your weight and feeling
          great, you skip it. If you came out cold, with your weight stuck and
          the old symptoms still there, that is the metabolic slowdown T3 is
          for, and the 30-day course runs on the Wilson&rsquo;s pattern (ramp,
          hold, taper) as laid out on the{" "}
          <a href="/t3-therapy">T3 Therapy</a> page. Seven days after the
          course ends, the next fast opens. Starting T3 earlier, on top of a
          gut and a metabolism that are still coming back online, is the
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
          <strong>1,800 to 2,000 calories per day</strong>. Do not jump above this
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
              Continue until you reach the floor: the floor is set on the{" "}
              <a href="/refeed-for-bmr">Metabolism Repair Plan</a> page
            </li>
          </ul>
        </div>
        <div className="question-item">
          <span className="question-label">With Any Cancer History: A Week Slower</span>
          If you have any history of cancer, this ramp runs a week slower, and
          no growth-promoting add-on starts before refeed day 14. The exact
          shape is set with me, case by case, before the fast.
        </div>
        <div className="question-item">
          <span className="question-label">Expect Some Weight Gain: Do Not Panic</span>
          Almost every starvation recovery study documents significant weight
          gain during the rebuilding phase. This is normal, expected, and
          necessary. Your body has been in survival mode and will prioritize
          restoring reserves. If you follow the full Scorch Protocol (proper
          sleep, and T3 or hGH where your case calls for them), you will
          minimize fat gain and direct more of those calories into muscle and
          tissue repair. But do not fear the scale. Resisting this phase slows
          healing significantly.
        </div>
        <div className="question-item">
          <span className="question-label">The Goal Is Abundance</span>
          Many people with chronic illness have been eating too little for
          years, which is part of what got them here. The metabolic reset only
          completes when the body feels safe in abundance. The floor is set on
          the <a href="/refeed-for-bmr">Metabolism Repair Plan</a> page, with
          the full long-term calorie strategy, and some will need to go higher.
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
          logging and makes hitting your calorie target (set on the{" "}
          <a href="/refeed-for-bmr">Metabolism Repair Plan</a> page) achievable
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
          body on T3 just burns faster. Because a long-starved appetite fills up fast, the calories have to be dense: load oils, full-fat dairy, eggs, fatty fish and meat, and starchy carbs so you actually cover the window instead of leaving it half-filled and wasting muscle. Retatrutide can further optimize the
          energy-to-composition ratio for people who need additional help here.
          (L-carnitine is no longer used: it works against the peripheral
          thyroid effect the protocol depends on.)
        </div>
        <div className="question-item">
          <span className="question-label">Cyproheptadine: the first-cycle eating-window lever</span>
          When a suppressed appetite or a hypersensitive gut keeps you from
          filling the eating window in the first T3 cycle, cyproheptadine is
          the primary tool, and it is set out in the co-factor stack on the{" "}
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
          (10 to 20 mmHg above your baseline), wired-but-tired anxiety,
          early-morning waking around 3 to 5 AM, post-fast weight rebound
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

      <h2>Per-Case Add-Ons</h2>
      <div className="guiding-questions box-info">
        <p>
          BPC-157, Thymalin and the growth-hormone peptides are special cases
          I set with people individually, never a general recommendation, and
          never before refeed day 8.
        </p>
        <div className="question-item">
          <span className="question-label">If You Have Any Cancer History:</span>
          The wait is longer. With any cancer history, no growth-promoting
          add-on (BPC-157, CJC-1295 and Ipamorelin, retatrutide or hGH) starts
          before refeed day 14, and the calorie ramp above runs a week slower.
          Every cancer history is a conversation with me before the fast, not
          after it; see the{" "}
          <Link href="/contraindications">contraindications page</Link>.
        </div>
      </div>

      <h2>Viral Reactivation During the Refeed</h2>
      <p>
        The refeed is the biggest of the five windows where latent
        herpesviruses wake up. Its plan is above, under{" "}
        <a href="#antiviral-coverage">
          Keep the Antiviral Coverage Running the Whole Week
        </a>
        : valacyclovir from refeed day 3 at the earliest, never during a fast,
        and arginine-rich foods kept out through week 2. All five windows, with
        the prodrome checklist, are on the{" "}
        <a href="/viral-reactivation#five-windows">Viral Reactivation</a> page.
      </p>

      <h2>Rebuilding the Gut Microbiome (and the Virome You Didn&rsquo;t Know You Had)</h2>
      <p>
        Your gut carries two biomes: the bacteria, and a virome of
        bacteriophages and commensal viruses that keeps the bacterial side in
        check. Both take damage in two situations.
      </p>

      <div className="guiding-questions box-info">
        <h3>Who Actually Needs Deliberate Biome Rebuild?</h3>
        <div className="question-item">
          <span className="question-label">The standing valacyclovir course:</span>
          It starts on refeed day 3 at the earliest, never during a fast, and
          runs through the months between fasts, long enough to damage both
          biomes. There is no established way to rebuild the virome; it
          recovers on its own once the antiviral pressure stops. So the course
          carries a mandatory gut-rebuild rider: kefir first, from about refeed
          day 4, then kombucha once the kefir sits well, for as long as the
          course runs. If you have any trouble with dairy, skip kefir and use a
          different probiotic. The tradeoff is deliberate: stronger antiviral
          coverage, with the biome cost paid down on purpose. Ivermectin runs
          alongside for its gentler gut profile, but it does not stand in for
          valacyclovir.
        </div>
        <div className="question-item">
          <span className="question-label">Long dry fasts (7 days and more, especially 9 and more):</span>
          A second, independent reason: at those lengths the biome starts
          eating the gut lining and the mucosal lining. For some that is
          therapeutic, but the rebuild is not optional here either.
        </div>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Full Rebuild: The Trinity</h3>
        <p>
          Deliberate repopulation comes later: after the second round of
          cycles, or sooner when antivirals or antifungals are part of your
          path. I set the timing case by case. The stack is three raw fermented
          foods:
        </p>
        <ul>
          <li>
            <strong>Kefir:</strong> dairy kefir or water kefir. If you have any
            trouble with dairy, skip kefir and use a different probiotic.
          </li>
          <li>
            <strong>Kombucha:</strong> most commercial kombuchas carry live
            cultures; check the label.
          </li>
          <li>
            <strong>Kimchi or sauerkraut:</strong> the jar must say{" "}
            <strong>raw</strong> or <strong>unpasteurized</strong>.
            Shelf-stable sauerkraut and pasteurized kimchi are functionally
            inactive.
          </li>
        </ul>
        <p>
          Run it daily for about four weeks; a depleted gut colonizes faster.
        </p>
        <p>
          <Link href="/membership?ref=refeed-timing">
            Get Yannick&rsquo;s direct guidance on your refeed &rarr;
          </Link>
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
              "Papagiannopoulos IA, Sideris VI, Boschmann M, Koutsoni OS, Dotsika EN. Anthropometric, Hemodynamic, Metabolic, and Renal Responses during 5 Days of Food and Water Deprivation. Forsch Komplementmed, 2013;20(6):427-433.",
            href: "https://doi.org/10.1159/000357718",
            note: "renal filtration rises sharply during the fast and settles afterward, the basis for a gradual, monitored refeed",
          },
          {
            citation:
              "Imada S, Khawaled S, Shin H, et al. Short-term post-fast refeeding enhances intestinal stemness via polyamines. Nature, 2024;633(8031):895-904. PMID 39169180. DOI 10.1038/s41586-024-07840-z.",
            href: "https://doi.org/10.1038/s41586-024-07840-z",
            note: "in mice after a 24-hour fast, the first day of refeeding was a peak of intestinal stem-cell proliferation driven by mTORC1 and polyamines, and deleting a tumour suppressor in that window produced more tumours; blocking the growth signal removed the excess; no human data; the basis for the consolidation window's mutagen rules and the low-growth-signal first days",
          },
          {
            citation:
              "Brunner S, Janssen KP, Ecker J. Post-fast refeeding: rise of intestinal stemness and mutagen-induced cancer risk through polyamine metabolism. Signal Transduct Target Ther, 2024;9:317. PMID 39528467. DOI 10.1038/s41392-024-02038-1.",
            href: "https://doi.org/10.1038/s41392-024-02038-1",
            note: "the commentary on Imada 2024: a strong tumour-induction model in mice, the word mutagen an analogy for an engineered gene deletion, and in humans the scenario is more complicated and further studies are needed",
          },
        ]}
      />

      <ProtocolFurtherReading protocolSlug="refeeding" />
    </>
  );
}
