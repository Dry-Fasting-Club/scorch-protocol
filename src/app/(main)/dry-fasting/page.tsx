import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";

export const metadata: Metadata = {
  title: "Phase 2: The Dry Fast | The Scorch Protocol",
  description:
    "Phase 2: A step-by-step guide to dry fasting safely: day-by-day breakdown, red flags, weight milestones, and refeeding timing.",
};

export default function DryFastingPage() {
  return (
    <>
      <h1>Phase 2: The Dry Fast (The Scorch)</h1>

      <div
        style={{
          backgroundColor: "rgba(220,53,69,0.12)",
          border: "1px solid rgba(220,53,69,0.35)",
          borderRadius: "8px",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#ff6b6b", marginTop: 0 }}>
          Read This First (Safety Warning)
        </h3>
        <p style={{ marginBottom: 0 }}>
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
              <strong>5 days dry</strong>, followed immediately by{" "}
              <strong>5 days water</strong> (10 days total). This is the full
              Scorch Protocol fasting block.
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
          Rest as much as possible, only do very light walking.
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

      <h2>Phase 3B: The Water Fast (Days 6–10)</h2>
      <p>
        After completing the 5-day dry fast, you do <strong>not</strong> break
        the fast with food. You transition directly into a 5-day water fast.
        This is not a cool-down period: it is its own distinct and powerful
        therapeutic phase.
      </p>

      <div
        style={{
          backgroundColor: "rgba(220,53,69,0.12)",
          border: "1px solid rgba(220,53,69,0.35)",
          borderRadius: "8px",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#ff6b6b", marginTop: 0 }}>
          Order Is Locked: Never Reverse This
        </h3>
        <p style={{ marginBottom: 0 }}>
          The sequence is always <strong>dry fast first, water fast second.</strong>{" "}
          Going the other way (water fasting before a dry fast) is dangerous
          and defeats the purpose. The dry fast creates the internal conditions
          that make the water fast supercharged. Do not attempt this in reverse.
        </p>
      </div>

      <h3>Why the Water Fast After a Dry Fast Is Different</h3>
      <p>
        A water fast done after a 5-day dry fast is not the same as a
        standalone water fast. The dry fast has already completed the deep
        cellular cleanup: the old damaged cells are gone, toxins have been
        burned, and your body is primed at a cellular level it cannot reach
        through water fasting alone. The water fast that follows is supercharged
        by this state: you are washing through a body that has already been
        restructured from the inside.
      </p>

      <h3>What Is Allowed During the Water Fast Phase</h3>
      <ul>
        <li>
          <strong>Water:</strong> drink freely. Your body is now able to absorb
          it properly.
        </li>
        <li>
          <strong>T3 therapy,</strong> started on day 3 of the water fast (see
          below).
        </li>
        <li>
          <strong>L-Carnitine (optional):</strong> if energy is a significant
          issue, small amounts of L-carnitine can help. This is not necessary
          for everyone.
        </li>
        <li>
          <strong>Nothing else:</strong> no food, no juice, no broth, no
          electrolyte supplements.
        </li>
      </ul>

      <h3>Starting T3 Therapy During the Water Fast</h3>
      <p>
        T3 therapy begins on <strong>day 3 of the water fast</strong>, not at
        the end of the fast, and not at the start of the refeed. The timing is
        deliberate: by starting T3 on day 3, you are on{" "}
        <strong>day 3 of T3 therapy</strong> when you have your first calories.
        This matters because T3 needs to already be running when refeeding
        begins, shifting your metabolism into a state that allows the
        antiviral protocol (L-lysine + monolaurin) to start immediately on
        refeeding day 1, rather than waiting.
      </p>
      <p>
        Follow the standard T3 ramp: start at <strong>15 mcg on day 3</strong>{" "}
        of the water fast, adding 15 mcg each day per the T3 therapy protocol.
        So:
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>
              <strong>Water Fast Day 1–2</strong>
            </td>
            <td>Water only. No T3 yet.</td>
          </tr>
          <tr>
            <td>
              <strong>Water Fast Day 3</strong>
              <br />
              <em>(T3 Day 1)</em>
            </td>
            <td>15 mcg T3</td>
          </tr>
          <tr>
            <td>
              <strong>Water Fast Day 4</strong>
              <br />
              <em>(T3 Day 2)</em>
            </td>
            <td>30 mcg T3</td>
          </tr>
          <tr>
            <td>
              <strong>Water Fast Day 5</strong>
              <br />
              <em>(T3 Day 3)</em>
            </td>
            <td>
              45 mcg T3 (end of the water fast). You are now on T3 day 3 when
              you break the fast with your first calories.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Phase 4: Breaking the Fast (Refeeding)</h2>
      <p>
        <strong>Very Important:</strong> Eating too much too fast can be
        dangerous. Your refeed should last roughly as long as the fasting block.
        For a 10-day fast (5 dry + 5 water), give your body at least 10 days
        before returning to normal eating. By this point, your T3 therapy is
        already running at day 4, which is intentional and allows your
        antiviral protocol to begin immediately.
      </p>
      <ul>
        <li>
          <strong>The First Hour:</strong>{" "}
          <strong>Drink Coconut Water only.</strong> Do not start with plain
          water. Take tiny sips (half a cup over a whole hour). This tells your
          new cells to start growing correctly.
        </li>
        <li>
          <strong>Hours 2–4:</strong> Keep drinking coconut water very slowly
          (about one cup every hour).
        </li>
        <li>
          <strong>Day 1 After the Fast:</strong> Stick to coconut water. In the
          late afternoon, you can have a small bowl of soft, mushy rice if you
          feel stable. Start your antiviral protocol (L-lysine + monolaurin)
          today. T3 is already active and your kidneys can handle it.
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
          <strong>5 Days Dry:</strong> Maximum repair, new stem cells are
          released. The body is primed for the water phase.
        </li>
        <li>
          <strong>5 Days Dry + 5 Days Water (10 Days Total):</strong> The full
          protocol fasting block. Deep cellular restructuring followed by a
          supercharged water fast with T3 already running. This is the
          definitive version.
        </li>
      </ul>

      <FaithBlock
        title="Jesus on Fasting: What is Done in Secret, God Rewards"
        imageSrc="/assets/images/faith/faith-dry-fasting.png"
        imageAlt="Fire and light, purification through the fast"
      >
        <p>
          <strong>Matthew 6:17-18: &ldquo;But when you fast, put oil on your head and wash your face, so that it will not be obvious to others that you are fasting, but only to your Father, who is unseen; and your Father, who sees what is done in secret, will reward you.&rdquo;</strong>
        </p>
        <p>
          Jesus did not debate whether fasting was valid. He assumed you would do it, and told you how. The dry fast is one of the most private things a person can do: no food, no water, no performance. Just you and God and the silence. In that silence, old grief surfaces and old fears dissolve. I found that the fast was also a confrontation with truth: the named, specific kind. The Epstein files document what powerful men did to children with impunity. The suffering in Gaza is real. <em>Evil propagates when good men look away.</em> The fast is a recommitment to looking directly at what is true, in your body, your spirit, and the world.
        </p>
        <p>
          <strong>Your Father sees what is done in secret. He will reward you.</strong>
        </p>
      </FaithBlock>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="dry-fasting" sectionTitle="Phase 2: The Dry Fast" />
    </>
  );
}
