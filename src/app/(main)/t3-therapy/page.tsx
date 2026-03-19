import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Phase 4: T3 Therapy — The Scorch Protocol",
  description:
    "Phase 4: How T3 thyroid therapy reboots suppressed metabolism, bypasses the DIO2 gene mutation, and amplifies dry fasting results.",
};

export default function T3TherapyPage() {
  return (
    <>
      <h1>Phase 4: T3 Thyroid Therapy (Rebooting Your Metabolism)</h1>
      <p>
        Many people with chronic illness are stuck in a state where their body
        is &ldquo;hibernating&rdquo; to save energy. Even if your blood tests
        look normal, your body might not be using thyroid hormones correctly.
        This phase uses a hormone called T3 to &ldquo;reboot&rdquo; your
        body&rsquo;s thermostat and turn your energy back on.
      </p>

      <div className="guiding-questions">
        <h3>Is This Therapy Right for You?</h3>

        <h4>Main Requirements (You must have these)</h4>
        <div className="question-item">
          <span className="question-label">1. Low Waking Temperature:</span>
          Is your temperature consistently{" "}
          <strong>below 36.5&deg;C (97.7&deg;F)</strong> first thing in the
          morning? This is the main sign your metabolism is slow.
        </div>
        <div className="question-item">
          <span className="question-label">2. Low Heart Rate:</span>
          Is your resting heart rate{" "}
          <strong>below 72 beats per minute</strong>? This also suggests a slow
          metabolism.
          <br />
          <em>Warning:</em> If your heart rate is{" "}
          <strong>above 90 beats per minute</strong>, you must talk to a doctor
          before starting this.
        </div>

        <h4>Other Common Symptoms</h4>
        <p>
          <em>
            (Check how many you have &ndash; the more you have, the more likely
            you need this)
          </em>
        </p>
        <ul>
          <li>Always tired or waking up exhausted</li>
          <li>Brain fog, trouble concentrating, or memory loss</li>
          <li>Cold hands and feet even when it&rsquo;s warm</li>
          <li>Gaining weight easily or unable to lose it</li>
          <li>Dry skin or hair that is thinning/falling out</li>
          <li>Feeling low, anxious, or irritable</li>
          <li>Muscle and joint aches</li>
          <li>Frequent headaches or swelling (fluid retention)</li>
        </ul>

        <h4>Quick Check:</h4>
        <p>
          <strong>
            Low Morning Temp + Low Pulse + 3 or more symptoms
          </strong>{" "}
          <span className="action-arrow">&rarr;</span> You may be a good
          candidate for T3 therapy.
        </p>
        <p>
          <em>Track your temp and pulse for one week to be sure.</em>
        </p>

        <div className="guiding-questions box-yellow" style={{ marginTop: "15px" }}>
          <strong>Important:</strong> Always talk to a doctor before starting
          hormone therapy.
        </div>
      </div>

      <h2>Introduction to T3 Therapy</h2>
      <p>
        <strong>Overview:</strong> This therapy uses T3 (thyroid hormone) to
        help with fatigue and low body temperature. The goal is to
        &ldquo;restart&rdquo; your metabolism. You can dive deeper into it on
        this site:{" "}
        <a
          href="https://wilsonssyndrome.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          wilsonssyndrome.com
        </a>
      </p>

      <div
        style={{
          margin: "2rem 0",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
          border: "1px solid rgba(232,93,4,0.3)",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/uxFI17SLQ90"
            title="Wilson's T3 Therapy & Dry Fasting for Chronic Illness"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
        <p
          style={{
            margin: 0,
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(232,93,4,0.08)",
            fontSize: "0.9rem",
            color: "#aaa",
            fontStyle: "italic",
          }}
        >
          Wilson&rsquo;s T3 Therapy &amp; Dry Fasting for Chronic Illness —
          a detailed breakdown of why this combination works when nothing else
          has.
        </p>
      </div>

      <div className="guiding-questions box-purple">
        <h3>The Best Way: Slow-Release T3 (SR-T3)</h3>
        <p>
          <strong>We strongly recommend using Slow-Release T3 (SR-T3).</strong>
        </p>
        <ul>
          <li>
            <strong>Why?</strong> It keeps your hormone levels stable all day
            and night. It doesn&rsquo;t cause sudden spikes like regular T3.
          </li>
          <li>
            <strong>Evening Use:</strong> You can take it in the evening to help
            your metabolism while you sleep.
          </li>
          <li>
            <strong>Easier to Use:</strong> You don&rsquo;t have to keep taking
            small doses throughout the day.
          </li>
        </ul>
      </div>

      <div className="guiding-questions box-blue">
        <h3>Where to Get T3</h3>
        <p>
          One trusted source for Slow-Release T3 is{" "}
          <strong>
            <a
              href="https://chronic-illness.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              chronic-illness.ca
            </a>
          </strong>
          . They specialize in this medication and can ship to many places.
        </p>
        <p>
          <em>
            If you have trouble getting your medication, Yannick can help you
            find a way to get what you need.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-orange">
        <h3>Why Your Blood Tests Might Lie to You</h3>
        <p>
          <strong>The Real Problem: Tissue-Level Resistance</strong>
        </p>
        <p>
          Most doctors look at your blood to see if you have enough T3. But just
          because T3 is in your blood doesn&rsquo;t mean it&rsquo;s getting
          inside your cells where it&rsquo;s needed. This is called{" "}
          <strong>tissue-level resistance</strong>.
        </p>
        <p>
          Think of T3 as a &ldquo;key&rdquo; and your cells as
          &ldquo;doors.&rdquo; In many sick people, the locks are jammed. The T3
          keys are floating around in the hallway (your blood), but they
          can&rsquo;t get into the rooms (your cells) to turn on the power. When
          a doctor draws your blood, they see plenty of keys and say,
          &ldquo;You&rsquo;re fine!&rdquo;&mdash;even though your body is
          actually starving for energy.
        </p>
        <p>
          <strong>Brain Insulin Resistance</strong>
        </p>
        <p>
          This problem is especially serious in the brain. When T3 can&rsquo;t
          get into your brain cells correctly, it leads to a type of
          &ldquo;brain insulin resistance.&rdquo; This causes major brain fog,
          memory problems, and severe fatigue. Even if you eat enough food, your
          brain can&rsquo;t use that energy properly without the T3
          &ldquo;key&rdquo; to unlock the process.
        </p>
        <p>
          <strong>Other Signs of Resistance:</strong>
        </p>
        <ul>
          <li>
            <strong>Low Body Temperature:</strong> If your cells don&rsquo;t
            have enough T3, they can&rsquo;t create heat. This is why you feel
            cold even if your blood tests are &ldquo;normal.&rdquo;
          </li>
          <li>
            <strong>High Reverse T3:</strong> Sometimes your body makes a
            &ldquo;fake key&rdquo; called Reverse T3 that blocks the real T3
            from working.
          </li>
          <li>
            <strong>Adrenal Stress:</strong> When your cells are starving for
            energy, your body pumps out stress hormones (like cortisol) to try
            to keep you going. This eventually leads to total burnout.
          </li>
        </ul>
        <p>
          T3 therapy is used to &ldquo;electrify&rdquo; the body, sending a
          structured &ldquo;electrical signal flood&rdquo; of abundance and
          shock to finally force those jammed locks open and wake your body up.
          This convinces the cells that T3 can enter again and radically
          increases insulin sensitivity. Depending on the case, this may require
          a mix of T4 and high T3, or just T3&mdash;but the concept of a short,
          powerful energy burst remains the same. Do not forget to understand
          the critical co-factors required for T3 therapy to be safe and
          effective.
        </p>
        <p>
          <strong>The Role of Genetics:</strong> In some cases, your genetics
          can play a big role in how your body handles T3. Fasting, stress, and
          low-carb can have different effects on different people. To learn more
          about this, visit the{" "}
          <a href="/genetic-polymorphisms">Genetic Polymorphisms</a> page.
        </p>
      </div>

      <h2>The 30-Day T3 Cycle</h2>
      <p>
        This plan is designed to wake up your body&rsquo;s metabolism. It
        involves a 10-day &ldquo;climb&rdquo; followed by a 20-day
        &ldquo;descend.&rdquo;
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }}>Phase</th>
            <th style={{ width: "20%" }}>Time</th>
            <th style={{ width: "60%" }}>What to Do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>The Climb</strong>
            </td>
            <td>10 Days</td>
            <td>
              <strong>The Hike Up:</strong> Increase your total daily dose by
              about <strong>15 mcg every single day</strong>.
              <br />
              <em>Example:</em> Day 1 = 15mcg, Day 2 = 30mcg, Day 3 = 45mcg...
              <br />
              <strong>Note:</strong> Split your total dose into two
              parts&mdash;one in the morning and one in the evening.
            </td>
          </tr>
          <tr>
            <td>
              <strong>The Peak</strong>
            </td>
            <td>1&ndash;3 Days</td>
            <td>
              Stay at your highest dose for a few days to &ldquo;break&rdquo;
              your metabolism&rsquo;s resistance. If your heart races or you
              feel anxious, stop increasing.
            </td>
          </tr>
          <tr>
            <td>
              <strong>The Taper</strong>
            </td>
            <td>20 Days</td>
            <td>
              <strong>The Hike Down:</strong> Slowly lower your dose back to
              zero.
              <br />
              This lets your thyroid start making its own hormones again without
              a crash.
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src="/assets/t3-protocol-chart.png"
          alt="Simplified T3 Protocol Chart"
          width={900}
          height={500}
          style={{
            maxWidth: "100%",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
          <em>Figure 1: Simplified T3 Protocol Dosing &amp; Tracking Chart</em>
        </p>
      </div>

      <div className="guiding-questions box-red">
        <h3>Safety First</h3>
        <div className="question-item">
          <span className="question-label">Is your heart racing?</span>
          If your resting heart rate is{" "}
          <strong>over 100 beats per minute</strong>,{" "}
          <span className="action-arrow">&rarr;</span>{" "}
          <strong>STOP INCREASING.</strong> Stay at your current dose or lower
          it until your heart rate slows down.
        </div>
        <div className="question-item">
          <span className="question-label">Are you using &ldquo;Instant&rdquo; T3?</span>
          <span className="action-arrow">&rarr;</span>{" "}
          <strong>WARNING:</strong> This fast 10-day climb is only for{" "}
          <strong>Slow-Release T3</strong>. Do not try this with regular
          &ldquo;instant&rdquo; T3 unless you are very careful and take many
          small doses throughout the day.
        </div>
        <div className="question-item">
          <span className="question-label">Having trouble stopping?</span>
          <span className="action-arrow">&rarr;</span> If you feel bad while
          lowering your dose, your doctor might suggest a small dose of{" "}
          <strong>T4</strong> to help your body adjust.
        </div>
      </div>

      <h2>Keeping Your Progress</h2>
      <ul>
        <li>
          <strong>Supplements:</strong> Take B-Complex vitamins, Vitamin C, and
          electrolytes to help your body.
        </li>
        <li>
          <strong>Diet:</strong> Eat plenty of protein to keep your metabolism
          strong.
        </li>
        <li>
          <strong>Bone Health:</strong> Take Vitamin K2 to keep your bones
          healthy during this therapy.
        </li>
        <li>
          <strong>Success:</strong> When you are finished, your waking
          temperature should stay between{" "}
          <strong>36.5&deg;C and 37.0&deg;C (97.7&deg;F - 98.6&deg;F)</strong>{" "}
          without any medicine.
        </li>
      </ul>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src="/assets/images/Your-Natural-Body-Temperature_Graph_Cropped_Simplified.jpg"
          alt="Ideal body temperature curve throughout the day for a healthy person"
          width={900}
          height={500}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
          <em>
            Figure 2: The ideal body temperature curve of a healthy person —
            rising through the day and peaking in the late afternoon. If your
            T3 therapy works, your temperature pattern should begin to match
            this curve.
          </em>
        </p>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="t3-therapy" sectionTitle="Phase 4: T3 Therapy" />
      <CommentSection sectionSlug="t3-therapy" />
    </>
  );
}
