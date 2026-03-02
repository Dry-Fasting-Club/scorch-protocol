import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import CommentSection from "@/components/CommentSection";

export const metadata: Metadata = {
  title: "Phase 2: The Dry Fast — The Scorch Protocol",
  description:
    "Phase 2: A step-by-step guide to dry fasting safely — day-by-day breakdown, red flags, weight milestones, and refeeding timing.",
};

export default function DryFastingPage() {
  return (
    <>
      <h1>Phase 2: The Dry Fast (The Scorch)</h1>

      <div
        style={{
          backgroundColor: "#f8d7da",
          border: "1px solid #f5c6cb",
          borderRadius: "8px",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#721c24", marginTop: 0 }}>
          Read This First (Safety Warning)
        </h3>
        <p style={{ color: "#721c24", marginBottom: 0 }}>
          Dry fasting (no food or water) is an advanced tool with serious risks.
          It can lead to severe dehydration, mineral imbalances, and organ
          strain. This is not for everyone.{" "}
          <strong>Talk to a doctor before trying this</strong>, especially if
          you have heart or kidney problems, are underweight, pregnant, or on
          medications. For fasts longer than 2 days, you must have medical help
          or regular check-ins. This guide is for teaching purposes only.
        </p>
      </div>

      <h2>Phase 1: Getting Ready</h2>
      <p>Preparing correctly avoids a &ldquo;detox crash&rdquo; and makes the fast easier.</p>

      <div className="guiding-questions">
        <h3>Pre-Fast Checklist</h3>
        <div className="question-item">
          <span className="question-label">Who Should NOT Fast:</span>
          Do <strong>NOT</strong> start if you: Are pregnant, have Kidney or
          Heart disease, are underweight (BMI under 18), have a sudden
          infection, or are on water pills (diuretics).
        </div>
        <div className="question-item">
          <span className="question-label">Support Team:</span>
          Have you set up a way to check in daily with someone you trust? (Very
          important for fasts over 3 days).
        </div>
      </div>

      <ul>
        <li>
          <strong>Choosing Your Diet:</strong>
          <ul>
            <li>
              <em>If you are sick or in high pain:</em> You{" "}
              <strong>should</strong> eat a Ketogenic (high fat, low carb) diet
              for <strong>1 to 2 months</strong> before you start. If your body
              has struggled with fasting before, you must do this first.
            </li>
            <li>
              <em>Standard Prep:</em> For everyone else, you don&rsquo;t need
              major dietary changes, but eating low-carb for 3 days before the
              fast can help reduce hunger.
            </li>
          </ul>
        </li>
        <li>
          <strong>Get Your Mind Right:</strong> Write down why you are doing
          this and focus your mind. A strong mindset helps you through the tough
          emotional parts.
        </li>
      </ul>

      <h2>Phase 2: Starting Slowly</h2>
      <p>
        <strong>Do NOT jump straight to 5 days.</strong> You must build up your
        body&rsquo;s strength.
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>
              <strong>1. Beginner</strong>
              <br />
              &ldquo;The First Step&rdquo;
            </td>
            <td>
              Start with a <strong>36-hour</strong> dry fast. Then recover fully.
            </td>
          </tr>
          <tr>
            <td>
              <strong>2. Intermediate</strong>
              <br />
              &ldquo;The Scorch&rdquo;
            </td>
            <td>
              After a successful 36-hour fast (and a week-long break), try{" "}
              <strong>72 hours</strong>.
            </td>
          </tr>
          <tr>
            <td>
              <strong>3. Advanced</strong>
              <br />
              &ldquo;Deep Repair&rdquo;
            </td>
            <td>
              Only after finishing 72 hours successfully, move to{" "}
              <strong>5 days</strong>.
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <em>
          Between Fasts: Wait 5 to 10 days while eating normally to recover.
        </em>
      </p>

      <h2>Phase 3: The Dry Fast (The Scorch)</h2>
      <p>
        <strong>How it works:</strong> Your body starts getting water by
        burning old, damaged cells and fat. This speeds up deep cleaning
        (autophagy) and releases new building blocks (stem cells).
      </p>

      <h3>The Stages of a 5-Day Fast</h3>
      <ul>
        <li>
          <strong>Burning Sugar (0–24h):</strong> Your body uses up its sugar
          stores. You will feel hungry, but thirst is usually okay.
        </li>
        <li>
          <strong>The Acidosis Stage (24–72h):</strong> Your body switches to
          burning fat. This creates a mild &ldquo;acid&rdquo; state that
          triggers a massive &ldquo;deep clean&rdquo; (The Scorch). You might
          feel heat inside your body.
        </li>
        <li>
          <strong>The Peak Stage (Day 4–5):</strong> This is the deepest repair
          phase. You might feel a &ldquo;healing fever.&rdquo; You will pee
          less, and your energy might dip before you feel clear-headed.
        </li>
        <li>
          <strong>Regeneration (Day 5+):</strong> New cells are released, and
          you might feel a surge of energy as your body adapts.
        </li>
      </ul>

      <h3>What to do During the Fast</h3>
      <ul>
        <li>
          <strong>Environment:</strong> Stay in a cool room with fresh air.
          Rest as much as possible — only do very light walking.
        </li>
        <li>
          <strong>Daily Habits:</strong> Try gentle belly massage, dry skin
          brushing, and light stretching.
        </li>
        <li>
          <strong>Tracking:</strong> Watch your weight (you will lose 1–2 lbs
          per day), heart rate, and the coating on your tongue.
        </li>
      </ul>

      <div className="guiding-questions box-red">
        <h3>When to Stop Immediately (Red Flags)</h3>
        <ul>
          <li>Heart rate stays over 120 bpm while resting</li>
          <li>Feeling very dizzy or fainting</li>
          <li>Strong pain in your kidneys</li>
          <li>Feeling confused or having blurry vision</li>
          <li>Swelling in your legs or hands</li>
          <li>Not peeing for more than 12 hours</li>
        </ul>
      </div>

      <h2>Phase 4: Breaking the Fast</h2>
      <p>
        <strong>Very Important:</strong> Eating too much too fast can be
        dangerous. Your &ldquo;refeed&rdquo; should last 2 to 3 times longer
        than the fast itself.
      </p>
      <ul>
        <li>
          <strong>The First Hour:</strong>{" "}
          <strong>Drink Coconut Water only.</strong> Do not drink plain water
          yet. Take tiny sips (half a cup over a whole hour). This tells your
          new cells to start growing correctly.
        </li>
        <li>
          <strong>Hours 2–4:</strong> Keep drinking coconut water very slowly
          (about one cup every hour).
        </li>
        <li>
          <strong>Day 1 After the Fast:</strong> Stick to coconut water. In the
          late afternoon, you can have a small bowl of soft, mushy rice if you
          feel stable.
        </li>
        <li>
          <strong>Day 2 to 7:</strong> Follow the rice and fruit schedule. (See
          the <a href="/refeeding">Refeeding Page</a> for the full plan).
        </li>
      </ul>

      <h3>What to Expect at Each Stage</h3>
      <ul>
        <li>
          <strong>36 Hours:</strong> A quick energy reset and light detox.
        </li>
        <li>
          <strong>72 Hours:</strong> Deep cleaning starts and inflammation goes
          down.
        </li>
        <li>
          <strong>5 Days:</strong> Maximum repair, new stem cells are released,
          and you feel much better.
        </li>
      </ul>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="dry-fasting" sectionTitle="Phase 2: The Dry Fast" />
      <CommentSection sectionSlug="dry-fasting" />
    </>
  );
}
