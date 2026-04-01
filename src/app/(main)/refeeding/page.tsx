import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";

export const metadata: Metadata = {
  title: "Phase 3: The Refeed — The Scorch Protocol",
  description:
    "Phase 3: The Scorch Protocol refeeding plan — what to eat, when, and how to avoid refeeding syndrome after a dry fast.",
};

export default function RefeedingPage() {
  return (
    <>
      <h1>Phase 3: The Refeed</h1>
      <p>
        The refeed is just as important as the fast itself. How you eat after
        the fast determines how much healing you keep — and whether you trigger
        the stem cell activation that makes this protocol so powerful. Do not
        rush this phase.
      </p>

      <div className="guiding-questions box-red">
        <h3>Critical Safety Rules (Refeeding Syndrome)</h3>
        <div className="question-item">
          <span className="question-label">Never Eat Solid Food First:</span>
          Starting with solid food after a dry fast can cause dangerous electrolyte
          shifts. Always start with coconut water. This is not optional.
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
              <strong>Coconut water only.</strong> Take your first sip after 1
              hour of waking. Take tiny sips (½ cup over the first hour). By
              the evening, you can have a small bowl of very soft, overcooked
              white rice if you feel stable. Nothing else.
            </td>
          </tr>
          <tr>
            <td><strong>Day 2</strong></td>
            <td>
              Coconut water, soft white rice, and small amounts of fresh fruit
              (watermelon, banana, peach). Keep portions small.
            </td>
          </tr>
          <tr>
            <td><strong>Day 3–4</strong></td>
            <td>
              Expand to include cooked vegetables, more fruit varieties, and
              diluted fruit juices. Still no proteins or fats from animal
              sources. Continue with rice as the main carbohydrate.
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

      <h2>How Many Calories to Eat During Recovery</h2>
      <div className="guiding-questions box-blue">
        <h3>The Calorie Ramp: Day 8 Onward</h3>
        <p>
          Once you exit the first 7 days of the refeed, the goal is not to
          stay light — it is to deliberately rebuild. Here is the framework:
        </p>
        <div className="question-item">
          <span className="question-label">Day 8: Return to Your Pre-Fast Baseline</span>
          Resume eating roughly the same number of calories you were eating
          before the fast. For most people this is around{" "}
          <strong>1,800–2,000 calories per day</strong>. Do not jump above this
          yet — your digestive system needs a few days to handle regular food
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
          <span className="question-label">Expect Some Weight Gain — Do Not Panic</span>
          Almost every starvation recovery study documents significant weight
          gain during the rebuilding phase. This is normal, expected, and
          necessary. Your body has been in survival mode and will prioritize
          restoring reserves. If you follow the full Scorch Protocol — T3
          therapy, hGH, BPC-157, proper sleep — you will minimize fat gain and
          direct more of those calories into muscle and tissue repair. But do
          not fear the scale. Resisting this phase slows healing significantly.
        </div>
        <div className="question-item">
          <span className="question-label">The Goal Is 3,000+ Cal/Day</span>
          Many people with chronic illness have been eating too little for
          years, which is part of what got them here. The metabolic reset only
          completes when the body feels safe in abundance. 3,000 is the floor
          for most — some will need to go higher. See the{" "}
          <a href="/refeed-for-bmr">9-Month BMR Reconstruction</a> page for
          the full long-term calorie strategy.
        </div>
      </div>

      <h2>How to Track Your Calories</h2>
      <div className="guiding-questions box-green">
        <h3>Use a Calorie Counting App — With the Image Scan Feature</h3>
        <p>
          Hitting your calorie targets is not guesswork. The most practical
          tool available right now is a dedicated calorie tracking app with
          image-based food scanning. Both <strong>MyFitnessPal</strong> and{" "}
          <strong>Cronometer</strong> offer this — pay for the subscription
          and use the photo upload feature so you can point your phone at a
          meal and get an automatic breakdown. It removes the friction of
          logging and makes hitting 2,000–3,000+ calories per day achievable
          without obsessing over every ingredient.
        </p>
        <div className="question-item">
          <span className="question-label">Minimum Carbohydrates: 100g Per Day</span>
          During the refeed and recovery phase, your carbohydrate floor is{" "}
          <strong>100 grams per day</strong> — double the 50g keto limit.
          This is not optional. Carbohydrates are the primary signal that
          tells your thyroid to convert T4 into active T3, which powers your
          metabolism and muscle preservation. Going too low on carbs during
          recovery is one of the most common mistakes — it pushes the body
          back toward a catabolic, low-energy state exactly when you are
          trying to climb out of one.
        </div>
        <div className="question-item">
          <span className="question-label">Gaining Weight Too Fast? Lower Carbs.</span>
          If the scale is moving up faster than you are comfortable with,
          reduce your carbohydrate intake first — not your total calories.
          Shift some of those calories toward protein and fat instead.
          Protein is your best ally here: it is thermogenic, highly
          satiating, and preferentially used for muscle repair rather than
          fat storage. Keep carbs at or above 100g but redistribute the
          rest of your calorie budget.
        </div>
        <div className="question-item">
          <span className="question-label">Losing Weight Too Fast? Increase Carbs.</span>
          If you are losing weight during the ramp-up phase, you are
          under-fueling. Add carbohydrates first — rice, fruit, potatoes,
          oats. Your body is still in a deficit state and needs the
          carbohydrate signal to come out of it. Insufficient calories
          during this phase can cause muscle catabolism, especially once
          you start T3 therapy, which raises metabolic demand significantly.
        </div>
        <div className="question-item">
          <span className="question-label">Insulin Resistance: A Reason to Limit Carbs Further</span>
          If you have a known history of insulin resistance — or symptoms like
          fatigue after high-carb meals, neuropathy, blood sugar spikes, or
          difficulty losing fat — be cautious about pushing carbohydrates
          aggressively. Forcing high carbohydrate intake against significant
          insulin resistance does not produce energy; it produces diabetic-type
          symptoms. Peripheral neuropathy, numbness, brain fog after eating,
          and erratic energy are all signs that your carb tolerance is lower
          than average. In this case, keep carbs closer to the 100g minimum
          rather than the higher end, and prioritize improving insulin
          sensitivity first — through resistance training, T3 therapy with
          adequate caloric energy, MOTS-c, or aspirin — before ramping carbs
          higher.
        </div>
        <div className="question-item">
          <span className="question-label">The Core Goal: Energy Abundance Without Excess Fat Gain</span>
          The aim is to keep your body in a clear state of energy abundance
          — enough fuel that it never needs to cannibalize muscle for
          energy, but calibrated so fat accumulation stays manageable.
          This balance is what allows the T3 therapy phase to work at its
          best: a well-fueled body on T3 rebuilds tissue; an underfueled
          body on T3 just burns faster. Peptides like Retatrutide, Carnitine, and
          BPC-157 can further optimize the energy-to-composition ratio for
          people who need additional help here.
        </div>
      </div>

      <h2>Why Coconut Water First?</h2>
      <div className="guiding-questions box-green">
        <h3>The Science of Coconut Water</h3>
        <div className="question-item">
          <span className="question-label">Electrolyte Balance:</span>
          Coconut water has a nearly perfect ratio of electrolytes (especially
          potassium) that matches what your dehydrated cells need to safely
          rehydrate. Plain water after a dry fast can cause dangerous
          over-hydration in cells that are ready to absorb.
        </div>
        <div className="question-item">
          <span className="question-label">Stem Cell Signal:</span>
          The specific combination of sugars and electrolytes in coconut water
          sends a &ldquo;growth&rdquo; signal to newly released stem cells,
          directing them toward healing.
        </div>
        <div className="question-item">
          <span className="question-label">Kidney Protection:</span>
          After a dry fast, your kidneys are under stress. Coconut water&rsquo;s
          gentle mineral content helps them restart safely without the shock of
          plain water.
        </div>
      </div>

      <h2>The Rice &amp; Fruit Protocol: Why These Foods?</h2>
      <div className="guiding-questions box-blue">
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
      <div className="guiding-questions box-purple">
        <h3>The Most Overlooked Upgrade to the Refeed</h3>
        <p>
          You&rsquo;ve already done something incredible by dry fasting — your
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
          BPC-157 is particularly effective at healing the gut lining — exactly
          the tissue that takes the most stress during a dry fast and needs to
          come back online cleanly during the refeed.
        </div>
        <div className="question-item">
          <span className="question-label">When to Take It:</span>
          Begin BPC-157 from Day 2–3 of the refeed, once coconut water
          rehydration has started and the gut is beginning to wake up. Continue
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

      <h2>Viral Reactivation Protocol</h2>
      <div className="guiding-questions box-red">
        <h3>Critical for Herpesvirus Carriers</h3>
        <p>
          Every time your body swings between major energetic states — dry
          fasting to refeeding, or the peak of one T3 cycle to the trough
          before the next — you create what can be thought of as{" "}
          <strong>energetic peaks and troughs</strong>. The troughs are the
          dangerous windows: low-energy states where your immune system is
          momentarily off-balance and cellular resources are in flux.
        </p>
        <p>
          There are <strong>nine known human herpesviruses</strong>, and all of
          them are exquisitely sensitive to these metabolic shifts. They have
          evolved to sense exactly these kinds of changes in the body&rsquo;s
          energy landscape, and they use those troughs as a signal to reactivate
          from dormancy in the nerve cells where they hide:
        </p>
        <ul>
          <li>
            <strong>HSV-1</strong> (Herpes Simplex Virus 1) — cold sores, oral
            herpes, sometimes genital
          </li>
          <li>
            <strong>HSV-2</strong> (Herpes Simplex Virus 2) — genital herpes,
            recurring outbreaks
          </li>
          <li>
            <strong>VZV</strong> (Varicella-Zoster Virus) — chickenpox on first
            infection, shingles on reactivation
          </li>
          <li>
            <strong>EBV</strong> (Epstein-Barr Virus) — mononucleosis, chronic
            fatigue, implicated strongly in Long Covid and ME/CFS
          </li>
          <li>
            <strong>CMV</strong> (Cytomegalovirus) — often asymptomatic but
            reactivates under immune stress, contributes to fatigue
          </li>
          <li>
            <strong>HHV-6A</strong> — neurological effects, chronic fatigue,
            encephalitis in severe cases
          </li>
          <li>
            <strong>HHV-6B</strong> — roseola in children; in adults, linked to
            brain fog and immune dysfunction
          </li>
          <li>
            <strong>HHV-7</strong> (Roseolovirus) — reactivates alongside HHV-6,
            less studied but present in most chronically ill patients
          </li>
          <li>
            <strong>HHV-8</strong> (Kaposi&rsquo;s sarcoma-associated
            herpesvirus) — primarily a concern in immunocompromised individuals
          </li>
        </ul>
        <p>
          This is not a rare edge case — viral reactivation is a predictable,
          biological event that happens to a significant subset of chronically
          ill patients every time they go through a major protocol transition.
        </p>
        <p>
          <strong>Do You Have a Persistent Reactivated Herpesvirus?</strong>{" "}
          Look up the symptom profiles of each of the nine viruses above. If the
          symptoms match patterns you have experienced throughout your illness
          — not a single episode, but a recurring pattern over months or years
          — that virus is likely playing a role in your condition. You do not
          need a confirmed lab diagnosis to take precautions; the symptom
          pattern is enough reason to act.
        </p>
        <p>
          <strong>Stopping reactivation is critical.</strong> The Scorch
          Protocol addresses this directly through the structure of the fasting
          block: the 5-day water fast that follows the dry fast serves as the
          bridge, allowing T3 to be initiated before the fast ends and
          antivirals to begin at the very first meal.
        </p>
        <div className="question-item">
          <span className="question-label">L-Lysine + Monolaurin — Start on Refeeding Day 1:</span>
          Because T3 therapy is already running by the time you break the fast
          (you started T3 on day 3 of the water fast, so you are on T3 day 3
          when you have your first calories), your kidneys are supported and
          your metabolism is already primed. This means you can start{" "}
          <strong>L-Lysine (2–4g/day)</strong> and{" "}
          <strong>monolaurin</strong> immediately on refeeding day 1 — you do
          not need to wait for kidney rehydration. Lysine directly blocks viral
          replication by competing with arginine. Monolaurin disrupts the lipid
          envelope of herpesviruses, making it a strong complement to lysine.
        </div>
        <div className="question-item">
          <span className="question-label">Avoid Arginine-Rich Foods:</span>
          During the refeed, temporarily avoid nuts, seeds, chocolate, and
          peanut butter — these are high in arginine, which fuels herpesvirus
          replication.
        </div>
        <div className="question-item">
          <span className="question-label">Acyclovir — Have It On Hand:</span>
          If your symptom history matches any of the nine herpesviruses listed
          above, obtain <strong>acyclovir</strong> (or valacyclovir) before
          beginning the protocol — do not wait until symptoms appear. It covers
          HSV-1, HSV-2, VZV, and has partial activity against EBV and CMV.
          Having it available and starting it at the first sign of reactivation
          is far more effective than scrambling for a prescription mid-refeed.
          If you are experiencing monthly outbreaks, discuss suppressive dosing
          (typically 500mg–1g/day valacyclovir) with your doctor before you
          start — this reduces outbreak frequency by 70–80% and significantly
          lowers the risk of viral expansion during protocol transitions.
        </div>
        <div className="question-item">
          <span className="question-label">HSV Outbreaks Are More Dangerous in Chronic Illness:</span>
          In a healthy person, CD8+ T cells rapidly contain each HSV
          reactivation within 12–24 hours — limiting damage to a small cluster
          of epithelial cells. In chronic illness, this immune surveillance is
          disrupted. Stress hormones (cortisol) reduce both the number and
          function of these guard cells, allowing higher viral loads during
          outbreaks. In the most severely immunocompromised patients, the virus
          can potentially move into new nerve territories rather than staying
          locked to its original ganglion. Monthly HSV outbreaks in a
          chronically ill patient are not just a nuisance — they are a signal
          that immune containment is failing and suppressive antiviral therapy
          is warranted, not optional.
        </div>
        <div className="question-item">
          <span className="question-label">The T3 Cycle Off-Ramp Is Another High-Risk Window:</span>
          Viral reactivation risk does not end with the refeed. When you step
          off a T3 cycle — as exogenous T3 doses taper and the thyroid takes
          time to restabilize its own output — your metabolic rate temporarily
          dips. This creates the same energetic trough that triggers
          reactivation during the fast-to-refeed transition. Continue antiviral
          coverage during any T3 wind-down until your waking body temperature
          has returned to your pre-T3 baseline for at least 5–7 consecutive
          days.
        </div>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="refeeding" sectionTitle="Phase 3: The Refeed" />
    </>
  );
}
