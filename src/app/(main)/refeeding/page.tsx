import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import CommentSection from "@/components/CommentSection";

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

      <h2>Viral Reactivation Protocol</h2>
      <div className="guiding-questions box-red">
        <h3>Critical for EBV and HSV Carriers</h3>
        <p>
          If you have a history of Herpes (HSV 1 or 2), Epstein-Barr (EBV), or
          any chronic viral illness, the immune activation during the refeed can
          trigger a viral reactivation. This is normal, but it must be managed.
        </p>
        <div className="question-item">
          <span className="question-label">Lysine:</span>
          Start taking L-Lysine (2–4g/day) beginning 1–2 days before breaking
          the fast. Lysine directly blocks viral replication by competing with
          arginine.
        </div>
        <div className="question-item">
          <span className="question-label">Avoid Arginine-Rich Foods:</span>
          During the refeed, temporarily avoid nuts, seeds, chocolate, and
          peanut butter — these are high in arginine, which feeds the herpes
          virus.
        </div>
        <div className="question-item">
          <span className="question-label">Antivirals (If Available):</span>
          If you have access to Acyclovir or Valacyclovir, taking a short course
          during the refeed window is strongly recommended if you are an HSV/EBV
          carrier.
        </div>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="refeeding" sectionTitle="Phase 3: The Refeed" />
      <CommentSection sectionSlug="refeeding" />
    </>
  );
}
