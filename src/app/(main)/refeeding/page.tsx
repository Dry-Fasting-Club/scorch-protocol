import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import InterestingVideoBlock from "@/components/InterestingVideoBlock";

export const metadata: Metadata = {
  title: "Phase 3: The Refeed | The Scorch Protocol",
  description:
    "Phase 3: The Scorch Protocol refeeding plan: what to eat, when, and how to avoid refeeding syndrome after a dry fast.",
};

export default function RefeedingPage() {
  return (
    <>
      <h1>Phase 3: The Refeed</h1>
      <p>
        The refeed is just as important as the fast itself. How you eat after
        the fast determines how much healing you keep, and whether you trigger
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
      <div className="guiding-questions box-green">
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
          body on T3 just burns faster. Peptides like Retatrutide, Carnitine, and
          BPC-157 can further optimize the energy-to-composition ratio for
          people who need additional help here.
        </div>
      </div>

      <h2>Watch For Post-Fast Cortisol Stuck State</h2>
      <div className="guiding-questions box-purple">
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
          cortisol output). Slow-release T3 restores the metabolic clearance
          pathway that pulls active cortisol out of the bloodstream. Low-dose
          aspirin blocks the inflammatory cytokines (TNF-α especially) that
          jam the off-switch closed. The three together flip the switch back
          to its normal balance.
        </div>
        <div className="question-item">
          <span className="question-label">Full Mechanism:</span>
          See{" "}
          <a href="/blog/cortisol-off-switch-after-extended-fasting">
            The Cortisol Off-Switch That Gets Stuck After Extended Fasting
          </a>{" "}
          for the enzyme story, the three reasons it stays stuck (sex
          differences, fat tissue upregulation, systemic inflammation), and
          the safer adjuncts (potassium, inositol, progesterone) that layer
          on top.
        </div>
      </div>

      <h2>Why Coconut Water First?</h2>
      <div className="guiding-questions box-green">
        <h3>The Science of Coconut Water</h3>
        <div className="question-item">
          <span className="question-label">Electrolyte Balance:</span>
          Coconut water has a nearly perfect ratio of electrolytes (especially
          potassium) that matches what your dehydrated cells need to safely
          rehydrate. If you&rsquo;re drinking water, you should be using
          high quality spring water, but in general if you are introducing
          calories, real coconut water is superior.
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

      <div className="guiding-questions box-red">
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

      <div className="guiding-questions box-orange">
        <h3>The Refeed-Day Action Checklist</h3>
        <p>
          Three things to have in place by the time you take your first
          calories. All three are explained in full mechanistic detail on
          the Viral Reactivation page; this is the action shortlist.
        </p>
        <div className="question-item">
          <span className="question-label">L-Lysine + Monolaurin from Refeed Day 1</span>
          Lysine competes with arginine for the amino acid transporter
          herpesviruses depend on. Monolaurin disrupts the lipid envelope
          of every human herpesvirus. Start both with the first meal.
        </div>
        <div className="question-item">
          <span className="question-label">Avoid Arginine-Rich Foods for the First Two Weeks</span>
          Nuts, seeds, chocolate, peanut butter, gelatin. These spike free
          arginine and undo the work lysine is doing.
        </div>
        <div className="question-item">
          <span className="question-label">Have Ivermectin (Primary) and Valacyclovir (Prodrome Rescue) On Hand BEFORE Breaking the Fast</span>
          The protocol now uses ivermectin as the primary antiviral
          (better gut microbiome compatibility during refeed and double
          duty as antiparasitic). Valacyclovir is reserved for prodromal
          tingling, the early signal of an oncoming HSV outbreak. Both
          need to be in your possession before the fast ends, not after.
        </div>
      </div>

      <div className="guiding-questions box-red">
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

      <div className="guiding-questions box-orange">
        <h3>Who Actually Needs Deliberate Biome Rebuild?</h3>
        <p>
          For the standard protocol path &ndash; a 5-day dry fast plus short
          antiviral coverage during the refeed &ndash; the biome recovers
          on its own. No deliberate rebuild work is required. The body
          handles it.
        </p>
        <p>
          The two populations that <em>do</em> need to focus on rebuild:
        </p>
        <div className="question-item">
          <span className="question-label">Long suppressive antiviral therapy:</span>
          Patients on months of valacyclovir or similar suppressive
          antivirals (typically because of aggressive ongoing viral
          reactivations) take real damage to both the bacterial biome
          and the virome. Recent research confirms that long antiviral
          courses nuke beneficial bacteria alongside the targeted viruses.
          This population needs deliberate rebuild after the antiviral
          course winds down.
        </div>
        <div className="question-item">
          <span className="question-label">Long dry fasts (7+ days, especially 9+):</span>
          At those durations the biome starts eating your gut lining and
          mucosal lining. For some patients this is therapeutic &ndash;
          it trims back negative bacterial populations and clears space
          for repopulation with beneficial cultures. But it does mean the
          rebuild step is no longer optional.
        </div>
      </div>

      <div className="guiding-questions box-deepgreen">
        <h3>The Sequencing Inside the Scorch Protocol</h3>
        <p>
          Biome rebuild is not a Day-1-of-refeed activity for most patients.
          The Scorch Protocol enters phases where it becomes critical, and
          phases where it would actively get in the way:
        </p>
        <div className="question-item">
          <span className="question-label">Early protocol (first cycles):</span>
          Focus is dry fast stem cell regeneration, autophagy, and
          metabolic foundation (T3). We are setting the main structure
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
          one of the moments where working with Yannick directly is the
          difference between a clean recovery and a frustrating one. The
          Scorch Protocol is closer to having a fasting detective on your
          team than following a generic checklist.
        </p>
      </div>

      <div className="guiding-questions box-purple">
        <h3>The Rebuild Stack: The Trinity</h3>
        <p>
          When repopulation time comes, the foundational stack is three
          fermented foods. Yannick calls it the trinity:
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

      <div className="guiding-questions box-blue">
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

      <div className="guiding-questions box-blue">
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

      <div className="guiding-questions box-orange">
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
          on its own. The job is to <em>not destroy it unnecessarily</em>{" "}
          in the first place &ndash; which is one of the reasons the
          protocol uses ivermectin (better gut microbiome profile) as
          the primary antiviral rather than long-course valacyclovir
          where possible.
        </p>
      </div>

      <InterestingVideoBlock
        videoSrc="https://www.youtube.com/embed/pHJSNYGQYcU"
      />

      <GuidanceBox />
      <PaidContentBlock sectionSlug="refeeding" sectionTitle="Phase 3: The Refeed" />
    </>
  );
}
