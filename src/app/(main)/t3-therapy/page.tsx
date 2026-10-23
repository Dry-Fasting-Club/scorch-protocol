import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import InterestingVideoBlock from "@/components/InterestingVideoBlock";
import Image from "next/image";
import MermaidCharts from "@/components/MermaidCharts";
import KeyTakeaways from "@/components/KeyTakeaways";
import StarterKitCallout from "@/components/StarterKitCallout";
import EmailCapture from "@/components/EmailCapture";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import SourcingCallout from "@/components/SourcingCallout";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import ProtocolFurtherReading from "@/components/ProtocolFurtherReading";
import { medicalWebPageLd } from "@/lib/structured-data";

const t3ResistanceChart = `graph LR
  subgraph Healthy["HEALTHY PERSON"]
    direction TB
    HA["T3 in blood<br/>(normal labs)"] --> HB["Enters cell freely<br/>(transporters working)"]
    HB --> HC["Binds nuclear receptor<br/>activates mitochondria"]
    HC --> HD["Energy + heat<br/>NORMAL FUNCTION"]
  end

  subgraph Chronic["CHRONIC ILLNESS PATIENT"]
    direction TB
    CA["T3 in blood<br/>(labs ALSO look NORMAL)"] --> CB["Cell membrane resistant<br/>T3 cannot enter properly"]
    CB --> CC["Mitochondria starved<br/>despite 'normal' labs"]
    CC --> CD["Fatigue + brain fog<br/>+ low temperature<br/>= dismissed as anxiety"]
  end

  style HA fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#cbd5e1
  style HB fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style HC fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style HD fill:#14532d,stroke:#22c55e,stroke-width:3px,color:#86efac
  style CA fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#cbd5e1
  style CB fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style CC fill:#7c2d12,stroke:#f97316,stroke-width:2px,color:#fdba74
  style CD fill:#7f1d1d,stroke:#ef4444,stroke-width:3px,color:#fca5a5`;

export const metadata: Metadata = {
  title: "Phase 4: T3 Therapy",
  description:
    "Phase 4: How T3 thyroid therapy reboots suppressed metabolism, bypasses the DIO2 gene mutation, and amplifies dry fasting results.",
  alternates: { canonical: "https://scorchprotocol.com/t3-therapy" },
};

export default function T3TherapyPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Phase 4: T3 Therapy", description: "Phase 4: How T3 thyroid therapy reboots suppressed metabolism, bypasses the DIO2 gene mutation, and amplifies dry fasting results.", path: "/t3-therapy", breadcrumbName: "T3 Therapy" })} />
      <h1>Phase 4: T3 Thyroid Therapy (Rebooting Your Metabolism)</h1>
      <StarterKitCallout />

      <KeyTakeaways points={[
        "T3 is for the post-fast metabolic slowdown, not for everyone. If you come out of the fast cold, with weight that will not move and the old symptoms still there, you run the course. If you run hot, hold your weight and feel great after the fast, you skip it. The long-term sufferer who has done many fasts and seen many doctors runs fast then T3 at least once to test the water, and weans off if it does little.",
        "The signs I look for: a low waking temperature (below 36.5C / 97.7F) and a low resting heart rate (below 72 bpm). Normal blood tests do not rule it out, because the problem is cells not responding to T3, not T3 being absent.",
        "The 30-day course follows Wilson's Temperature Syndrome cycling: ramp to your temperature target, hold, taper off, and let your own thyroid come back. The dose numbers on this page are a worked example of that shape, not a schedule to copy. Use slow-release T3, not instant-release.",
        "If you are already on thyroid medication, the taper is much harder: your own thyroid has been asleep, and asking it to reboot as the T3 comes off puts you in a trough that is really rough. Plan that stretch with me.",
        "From the first taper step to a week after the last dose, everyone runs the full antiviral stack: L-lysine, monolaurin and valacyclovir. The taper and the trough are where the published cell work points; the ramp is watched too, because I have seen it trigger HSV in many cases.",
        "Stop increasing your dose if your resting heart rate goes above 100 bpm. If it goes above 90 bpm before you even start, resolve that first.",
        "T3 must be paired with enough calories and some physical movement. Without sufficient fuel, T3 burns muscle instead of fat.",
        "In the Scorch Protocol, T3 does not run during the fast. You finish the entire fast (dry fast then water fast) with no T3, continue your antiviral coverage through the refeed, and start T3 only after the first 7 days of refeeding. A cycle is a fast, a refeed and this 30-day course, and the next fast opens seven days after the course ends.",
      ]} />

      <div className="guiding-questions box-danger">
        <h3>Where T3 can actually hurt you</h3>
        <p>
          T3 raises your heart rate and metabolic demand. At the doses described
          here it is real medicine with real force behind it. These are the cases
          where you slow down and build the prep first, and a couple where you get
          my eyes on your numbers before you touch it.
        </p>
        <div className="question-item">
          <span className="question-label">A heart rhythm problem or heart disease</span>
          Arrhythmia, atrial fibrillation, or known heart disease. T3 can push
          an unstable heart into dangerous territory. This is one to run past
          me with your own numbers before you start.
        </div>
        <div className="question-item">
          <span className="question-label">Known osteoporosis or low bone density</span>
          Long-term, high-dose T3 can accelerate bone loss. Load the K2 and
          bone-support stack (below) before you climb.
        </div>
        <div className="question-item">
          <span className="question-label">On anticoagulants such as warfarin</span>
          T3 changes how these drugs behave, so the anticoagulant dose usually
          needs to come down as thyroid comes up. Get this dialed in before you
          start, not mid-climb.
        </div>
        <div className="question-item">
          <span className="question-label">Pregnant, or a history of thyrotoxicosis</span>
          These are the two here where you want real oversight before any thyroid
          hormone. Worth running past me first.
        </div>
        <div className="question-item">
          <span className="question-label">Resting heart rate already above 90 bpm</span>
          Resolve that first. An elevated resting heart rate is a
          contraindication to starting T3.
        </div>
      </div>

      <p>
        Many people with chronic illness are stuck in a state where their body
        is &ldquo;hibernating&rdquo; to save energy. Even if your blood tests
        look normal, your body might not be using thyroid hormones correctly.
        This phase uses a hormone called T3 to &ldquo;reboot&rdquo; your
        body&rsquo;s thermostat and turn your energy back on.
      </p>

      <div className="guiding-questions">
        <h3>Is This Therapy Right for You?</h3>

        <h4>First Gate: How Did the Fast Leave You?</h4>
        <div className="question-item">
          <span className="question-label">Not everyone who fasts runs T3.</span>
          Some people come out of the fast running hot, holding their weight
          and feeling great. They do not have the metabolic problem this phase
          treats, and they skip the T3 cycle. T3 is for the person who gets out
          of the fast and feels the metabolic slowdown: cannot lose the weight,
          runs cold, and continues to have the same issues. For them it is a
          reboot. If you are the serious chronic-illness sufferer who has done
          many fasts, been to tons of doctors and had nothing work, assume you
          run the Scorch Protocol as written: fast, then T3, at least once to
          test the water. Sometimes the T3 does not do much; then you wean off
          it and bounce back, and that result is itself an answer.
        </div>

        <h4>The Signs I Look For</h4>
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
          <strong>Note:</strong> If your resting heart rate is{" "}
          <strong>above 90 bpm</strong>, resolve that first. An elevated resting
          HR is a contraindication for starting T3 therapy.
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
            Metabolic slowdown after the fast + Low Morning Temp + Low Pulse + 3 or more symptoms
          </strong>{" "}
          <span className="action-arrow">&rarr;</span> You may be a good
          candidate for T3 therapy.
        </p>
        <p>
          <em>Track your temp and pulse for one week to be sure.</em>
        </p>
        <p>
          <em>
            Order note: fast first, always. T3 before the fast is only for the
            person who has struggled with fasting, pushed through it,
            kept getting worse with signs of metabolic trouble, and needs a jump
            start. That is a decision to make with me, not from a chart.
          </em>
        </p>

      </div>

      <h2>Getting an Accurate Temperature Reading</h2>
      <div className="guiding-questions box-info">
        <h3>Use a Basal Body Thermometer, Not a Standard One</h3>
        <p>
          Your waking temperature is one of the most important data points in
          this entire protocol. A cheap drugstore thermometer that reads to
          one decimal place is not good enough. You need a thermometer
          precise enough to detect meaningful shifts, the kind used for
          tracking fertility windows.
        </p>

        <div style={{ margin: "1.5rem 0", textAlign: "center" }}>
          <Image
            src="/assets/images/basal%20body%20temperature%20thermometer.png"
            alt="Digital basal body temperature thermometer for precise tracking"
            width={500}
            height={300}
            style={{
              maxWidth: "420px",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <p style={{ fontSize: "0.85rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic" }}>
            A digital basal body thermometer that reads to two decimal places and
            holds the result for easy reading
          </p>
        </div>

        <div className="question-item">
          <span className="question-label">What to Use:</span>
          A <strong>digital basal body thermometer</strong>, the kind sold
          for fertility tracking (ovulation monitoring). These read to two
          decimal places (e.g., 36.48°C rather than 36.5°C), which gives
          you the precision needed to track real trends over days and weeks.
          They are inexpensive and widely available online or at pharmacies.
        </div>
        <div className="question-item">
          <span className="question-label">How to Take It Correctly:</span>
          Place the thermometer under the tongue and hold it there for at
          least <strong>60 seconds</strong> before the reading locks. Most
          standard thermometers beep too early. A basal thermometer is
          designed to wait for a true stable reading. Take it{" "}
          <strong>before getting out of bed</strong>, before drinking
          anything, and at roughly the same time each morning. Movement,
          eating, and even sitting up will raise your temperature and give
          you a false reading.
        </div>
        <div className="question-item">
          <span className="question-label">What You Are Looking For:</span>
          Log your temperature every morning. You are tracking a trend, not
          a single number. As T3 therapy works, you should see your waking
          temperature gradually climb toward{" "}
          <strong>36.5 to 37.0°C (97.7 to 98.6°F)</strong> and stabilize there.
          Erratic readings, persistent sub-36°C temperatures, or a
          temperature that rises but then drops again are all meaningful
          signals worth noting.
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
          Wilson&rsquo;s T3 Therapy &amp; Dry Fasting for Chronic Illness:
          a detailed breakdown of why this combination works when nothing else
          has.
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Best Way: Slow-Release T3 (SR-T3)</h3>
        <p>
          <strong>I strongly recommend using Slow-Release T3 (SR-T3).</strong>
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

      <div className="guiding-questions box-info">
        <h3>Where to Get T3</h3>
        <p>My recommendations, in this order:</p>
        <ol>
          <li>
            <strong>A prescription first.</strong> A doctor who will write for
            T3, ideally compounded slow-release T3, is the first choice. Most
            doctors will not, so if yours will, take that route.
          </li>
          <li>
            <strong>
              <a
                href="https://chronic-illness.st"
                target="_blank"
                rel="noopener noreferrer"
              >
                chronic-illness.st
              </a>
            </strong>{" "}
            for slow-release T3 when the prescription route is closed. They
            specialize in this medication and can ship to many places.{" "}
            <em style={{ fontSize: "0.9em", opacity: 0.75 }}>
              (Previously chronic-illness.ca, the site has recently migrated.)
            </em>
          </li>
          <li>
            <strong>IdeaLabs Tyronene (T3) or Tyromix (T3 plus T4)</strong> as
            the third option. Both are immediate-release, so they are dosed
            more often through the day, and the stepwise ramp on this page is
            written for slow-release only.
          </li>
        </ol>
        <p>
          <em>
            If you have trouble getting your medication, I can help you
            find a way to get what you need.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-info">
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

        <div style={{ margin: "1.5rem 0" }}>
          <MermaidCharts charts={[t3ResistanceChart]} />
          <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic", textAlign: "center" }}>
            Side-by-side: the same lab result, two completely different cellular realities. This is why &ldquo;your labs are normal&rdquo; is not the answer chronic illness patients need.
          </p>
        </div>
        <p>
          Think of T3 as a &ldquo;key&rdquo; and your cells as
          &ldquo;doors.&rdquo; In many sick people, the locks are jammed. The T3
          keys are floating around in the hallway (your blood), but they
          can&rsquo;t get into the rooms (your cells) to turn on the power. When
          a doctor draws your blood, they see plenty of keys and say,
          &ldquo;You&rsquo;re fine!&rdquo; Even though your body is
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
          a mix of T4 and high T3, or just T3, but the concept of a short,
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

      <h2>When to Start T3: After the First 7 Days of Refeeding</h2>
      <div className="guiding-questions box-info">
        <h3>Finish the Fast First. T3 Starts After 7 Days of Refeeding.</h3>
        <p>
          In the Scorch Protocol, T3 does not run during the fast. You finish
          the whole fast, the dry fast first and then the water fast, with no T3
          on board. The fast is doing its own work: clearing damaged cells,
          draining the viral reservoir, resetting insulin signaling. Loading a
          metabolic accelerant on top of that while zero calories are coming in
          is how you burn muscle and stress the heart for nothing. Let the fast
          finish clean.
        </p>
        <p>
          What you do carry straight through the fast-to-refeed transition is
          your viral reactivation protocol. L-lysine comes back on water day
          1 and monolaurin and olive leaf come in with the first meal, holding
          the natural line. Valacyclovir joins as the standing antiviral
          backbone on refeed day 3 at the earliest (never during the fast,
          dry or water, since a water fast still leaves the body dehydrated
          and the drug is renally cleared), with ivermectin alongside it as
          supportive coverage plus the primary antiparasitic, and a
          valacyclovir loading dose layered on top if you feel a prodrome
          coming on once the course is running. None of it pauses once the
          standing course is running. That handoff from fasting to eating is the
          exact energetic trough where dormant herpesviruses wake up, so the
          antivirals stay on through the transition and across the entire
          refeed. Do not drop them the moment you start eating.
        </p>
        <div className="question-item">
          <span className="question-label">The First 7 Days of Refeeding: Rebuild the Engine Before You Rev It</span>
          During the first 7 days of refeeding, before any T3, the job is
          mitochondrial and metabolic support. This is where methylene blue
          comes in, and in some cases ethyl pyruvate as well. Coming out of a
          fast, the cell is carrying a heavy load of NADH from all that
          fat-burning, a kind of reductive stress, and if the electron
          transport chain cannot clear it that NADH backs up and stalls energy
          production. Methylene blue fixes the electron redox directly: it acts
          as an alternative electron carrier, accepting electrons from the
          backed-up NADH and passing them down the chain, restoring the NAD+ to
          NADH balance so the mitochondria can make energy again. These are
          decided case by case with each individual. There is no dose printed
          here, and that is deliberate: methylene blue and ethyl pyruvate are
          individualized in your consult, matched to your own presentation,
          never a generic number pulled off a webpage.
        </div>
        <div className="question-item">
          <span className="question-label">Day 7 Is Also the Decision Point: Do You Need This Cycle At All?</span>
          A week into the refeed you know how the fast left you. Running hot,
          holding your weight, feeling great: you do not need the T3 cycle, and
          you skip it. Cold, weight that will not move, the old symptoms still
          there: that is the metabolic slowdown T3 is for, and the course
          begins. If you are the long-term sufferer who has tried everything,
          run it at least once to test the water; if it does little, wean off
          and you bounce back.
        </div>
        <div className="question-item">
          <span className="question-label">Then T3 Starts: After Day 7 of the Refeed</span>
          Once you have 7 days of refeeding behind you, with fuel flowing and
          the mitochondria supported, T3 begins. From there the 30-day course
          below runs on the Wilson&rsquo;s pattern: ramp to your temperature
          target, hold, taper off, and let your own thyroid come back. Starting
          T3 after the refeed is established, instead of mid-fast, means you
          never ask a metabolic accelerant to run on an empty tank. The calories
          are already there, the antivirals have held the line, and the
          mitochondrial support has done its prep work. Seven days after the
          course ends, the next fast opens: that is one full cycle.
        </div>
        <div className="question-item">
          <span className="question-label">Adjust for Body Composition:</span>
          The 7-day mark is the floor, not a fixed date. It assumes you are
          carrying enough body fat to fuel what T3 demands. If you are very lean
          or close to skin-and-bones, starting T3 even after 7 days can trigger
          an adrenaline surge, so keep refeeding and rebuilding further before
          you begin. When you are unsure how much refeed runway you need, this
          is a timing call worth confirming with me directly.
        </div>
        <div className="question-item">
          <span className="question-label">Both Ends of the Course Are Reactivation Windows:</span>
          The coverage rule, for everyone, whatever your viral history: the
          full antiviral stack, L-lysine, monolaurin and valacyclovir, runs
          from the first taper step to a week after the last T3 dose. If you
          keep the standing stack going between fasts it is already on; this
          is the stretch where it must not lapse, with a valacyclovir loading
          dose on top at the first prodrome. Two windows sit inside the course,
          and they stand on different ground. The ramp is on the list from my
          experience: I have seen it trigger HSV in many cases. The taper and
          the trough after it are on the list from the literature: in
          neuron-like cells, thyroid hormone bound to its receptor holds
          HSV-1&rsquo;s lytic genes down, and withdrawing it lets them restart
          (Hsia 2011; Figliozzi 2017). If you were already on thyroid
          medication, your trough runs longer, so plan its coverage with me.
          The prodrome checklist and the rule at each window are on the{" "}
          <a href="/viral-reactivation#five-windows">Viral Reactivation</a>{" "}
          page.
          <br />
          <em>
            What the evidence says: the thyroid and HSV-1 work is cell culture
            plus thin human reporting, with no controlled human study in
            either direction, and nothing comparable exists for EBV. It is
            enough to point the coverage at the hormone drop, not enough to
            call that proven.
          </em>
        </div>
      </div>

      <h2>The 30-Day T3 Course</h2>
      <p>
        This course is designed to wake up your body&rsquo;s metabolism, and
        its shape is not mine. The pattern comes from Wilson&rsquo;s
        Temperature Syndrome protocol: you ramp the dose until your waking
        temperature reaches the target, you hold it there, you taper off, and
        you allow your own system to come back. I will be straight about what
        stands behind it. The published evidence for Wilson&rsquo;s protocol
        itself is a single uncontrolled series of eleven patients (Friedman
        2006), and mainstream endocrinology does not recognise the syndrome
        (the American Thyroid Association statement; McDermott 2024). The
        stronger ground for using T3 in people like us is the low-T3 pattern
        measured in chronic fatigue patients against matched controls
        (Ruiz-Nunez 2018) and the muscle changes after weight loss that T3
        repletion reversed (Rosenbaum 2018). The shape is the rule. The
        increments, the length of the hold and the pace of the taper are set
        per case against your waking temperature and resting heart rate, so
        treat the example below as one way a slow-release ramp can look, not
        as a schedule to copy.
      </p>

      <div className="guiding-questions box-info">
        <h3>What the Evidence Says About This Course</h3>
        <p>
          The one controlled trial that gave T3 around a fast, restoring it to
          the normal range over the last three days of a ten-day fast, did not
          raise metabolic rate (Byerley and Heber 1996), and in an earlier
          80-hour fast T3 replacement increased urea loss, which the authors
          read as the low-T3 state of fasting protecting muscle (Gardner 1979).
          Nobody has tested T3 at these doses after a refeed, so the course is
          my clinical practice, not a tested protocol. The taper is the part
          that needs the most care: when thyroid hormone is withdrawn, the
          pituitary stays quiet for about two weeks, the T3 response takes
          about three weeks to normalise, and after longer suppression T4 took
          at least four weeks to return (Krugman 1975; Vagenakis 1975). That
          lag is why the taper is slow and why I watch the trough, and it runs
          longest in anyone already on thyroid medication (see Safety First
          below). Marked caveat: those withdrawal studies were done at
          replacement-scale doses in people whose axis was structurally
          normal; nobody has published the recovery curve after a course like
          this one.
        </p>
      </div>

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
              <strong>The Ramp</strong>
            </td>
            <td>Until your waking temperature reaches target</td>
            <td>
              <strong>The Hike Up:</strong> Raise the total daily dose in
              steps until your waking temperature sits in the{" "}
              <strong>36.5 to 37.0&deg;C (97.7 to 98.6&deg;F)</strong> band.
              <br />
              <em>Example only:</em> a slow-release ramp in 15 mcg steps, split
              morning and evening, is one shape this can take.
              <br />
              <strong>Stop climbing</strong> the moment resting heart rate
              passes 100 bpm, whatever the dose.
            </td>
          </tr>
          <tr>
            <td>
              <strong>The Hold</strong>
            </td>
            <td>Until the temperature holds</td>
            <td>
              Stay at the dose that holds the target to &ldquo;break&rdquo;
              your metabolism&rsquo;s resistance. If your heart races or you
              feel anxious, you have gone past your dose; come back down a
              step.
            </td>
          </tr>
          <tr>
            <td>
              <strong>The Taper</strong>
            </td>
            <td>Set per case</td>
            <td>
              <strong>The Hike Down:</strong> Step the dose down to zero.
              <br />
              This lets your thyroid start making its own hormones again
              without a crash. Watch the taper trough: it is where people who
              were already on thyroid medication struggle most (see Safety
              First below).
              <br />
              The full antiviral stack (L-lysine, monolaurin, valacyclovir)
              runs from the first step down to a week after the last dose.
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
          <em>
            Figure 1: a worked example of one ramp, hold and taper. The
            Wilson&rsquo;s shape is the rule; the day counts and doses in the
            chart are not.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-danger">
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
          <strong>WARNING:</strong> This stepwise ramp is only for{" "}
          <strong>Slow-Release T3</strong>. Do not try this with regular
          &ldquo;instant&rdquo; T3 unless you are very careful and take many
          small doses throughout the day.
        </div>
        <div className="question-item">
          <span className="question-label">Already on thyroid medication?</span>
          <span className="action-arrow">&rarr;</span> The taper is much harder
          for you. Your own thyroid has been asleep under replacement, so
          coming off the T3 and asking it to reboot puts you in a trough that
          is really rough; that is my experience with every case like this.
          The T4 bridge below is where it matters most, and this is a stretch I
          want to be in the loop for before you start the descent.
          <br />
          <em>
            What the evidence says: the axis-recovery studies ran longest in
            people who were hypothyroid before treatment, with the pituitary
            taking roughly a month to respond fully (Krugman 1975), and a 2021
            systematic review of patients taken off thyroid hormone found that
            those with a prior diagnosis of overt hypothyroidism were markedly
            less likely to stay euthyroid off it than those who had only
            subclinical hypothyroidism (Burgos 2021). My experience of
            this trough runs the same direction as that evidence. Marked
            caveat: the review grades its own evidence as low quality, and none
            of it was collected after a T3 course like this one.
          </em>
        </div>
        <div className="question-item">
          <span className="question-label">Having trouble stopping?</span>
          <span className="action-arrow">&rarr;</span> If you feel shaky while
          lowering your dose, that is usually your T4 running out. Near-zero TSH
          means your own T4 is gone, so nothing is buffering the dropping T3.
          The fix is to add a little T4 back on top of the T3 you are still
          lowering:{" "}
          <strong>50 to 100 mcg of T4 every other day</strong>. T4 has a long
          half-life, so every-other-day dosing holds a steady floor (slow-release
          T4 is available from chronic-illness.st or other sources). Desiccated
          thyroid (30 to 60 mg) is the accessible fallback if you cannot get a
          formulation. This is the kind of adjustment worth running past me.
        </div>
        <div className="question-item">
          <span className="question-label">
            On a second cycle and still struggling with energy or the fast
            itself?
          </span>
          <span className="action-arrow">&rarr;</span> Some people do better on
          a custom <strong>T4/T3 ratio</strong> for the next round. Find your
          full thyroid replacement rate and run about half of it through the
          fast.{" "}
          <em>
            Medical caveat: this is the one per-case exception to the rule that
            T3 does not run during the fast, never the default.
          </em>
        </div>
      </div>

      <div className="guiding-questions box-danger">
        <h3>Drug Interactions You Need to Know About</h3>
        <p>
          Thyroid can thin blood, especially at higher doses. Patients on
          warfarin sodium (Coumadin&reg;) or other anticoagulants may develop
          an increase in prothrombin time requiring a lowering of their
          anticoagulant therapy while taking thyroid medication. Drug-drug
          interactions may occur with other anticoagulants, oral hypoglycemic
          agents (increased requirements), insulin (increased requirements),
          estrogens and oral contraceptives (increased thyroid requirement),
          tricyclic antidepressants (enhanced effects), cardiac glycosides
          (potential toxicity and reduced dose) and cholestyramine (decreased
          T3 and T4 absorption). Several drugs, including cimetidine,
          ranitidine, glucocorticoids, amiodarone and beta-receptor
          antagonists, have been reported to increase the hepatic metabolism
          of T4 into reverse T3 by inhibiting 5&rsquo;-desiodinase, the
          hepatic microsomal enzyme catalyzing the conversion of T4 into T3.
        </p>
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
        <li>
          <strong>What comes next:</strong> A cycle is a fast, a refeed and
          this 30-day course. Seven days after the course ends, the next fast
          opens. If the course did little for you, wean off and you bounce
          back; that result tells me something too. hGH is not the next step
          by default: it enters around the third cycle, on top of T3, only when
          two cycles of fasting plus T3 have not done enough. See the{" "}
          <a href="/hgh-therapy">hGH Therapy</a> page.
        </li>
      </ul>

      <div className="guiding-questions box-info">
        <h3>The Co-Factor Stack That Makes T3 Stick</h3>
        <p>
          T3 reboots metabolism, but whether it holds depends on three things
          going right at the same time: you have to eat enough, you have to
          sleep, and your stress hormones have to come down instead of spiking.
          The protocol uses a small co-factor stack to protect all three.
        </p>
        <div className="question-item">
          <span className="question-label">Cyproheptadine (appetite, sleep, stress, mitochondria):</span>
          Its main job in the first T3 cycle is to drive you to eat
          dramatically more food so you fill the wider metabolic eating window
          T3 opens. Without sufficient calories T3 burns muscle, not fat.
          Cyproheptadine fixes that by restoring the appetite T3 demands.
          It also calms a hypersensitive, nauseated gut by quieting the
          brain-gut nerves (the same mechanism behind its well-established
          use for cyclic vomiting and abdominal migraine in children), which
          makes eating much larger amounts tolerable even when the gut is
          not ready.
        </div>
        <div className="question-item">
          <span className="question-label">Additional effects: cortisol, sleep, and mitochondrial uncoupling</span>
          It blunts the serotonin and cortisol surge that T3 can provoke,
          reducing muscle catabolism and settling the nervous system into the
          calm state mitochondria need to respond to T3 instead of fighting
          it. As an anti-serotonin drug it also supports mitochondrial
          uncoupling: the mitochondria burn fuel to produce heat, which raises
          body temperature and metabolic rate, directly supporting what T3 is
          driving. And it is T3-sparing: some patients who barely respond to T3
          are tempted to push the dose above the roughly 150 mcg/day Wilson&rsquo;s
          protocol ceiling, which carries more cardiac and adrenal risk.
          Adding cyproheptadine often lets the existing T3 dose reach the
          target temperature instead, avoiding that escalation.
          Dose is 1 to 4 mg in the evening, set individually in your consult.
          See the{" "}
          <a href="/symptom-management">Symptom Management</a> page for MCAS
          context and the ketotifen comparison.
        </div>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(232,93,4,0.08)",
            borderLeft: "3px solid var(--scorch)",
            borderRadius: "4px",
            fontSize: "0.92rem",
          }}
          id="cyproheptadine-caveat"
        >
          <strong>Cyproheptadine and hGH work together.</strong>{" "}
          You may have read that cyproheptadine has to be stopped before hGH
          because it lowers growth hormone. That is not the case. Cyproheptadine
          blunts the pituitary&rsquo;s own signal to release GH, but the hGH
          phase injects growth hormone directly, so it bypasses the pituitary
          entirely and overrides the blunting. The nighttime cortisol point does
          not change this either: the goal of hGH here is regeneration and
          calming the nervous system, not overnight fat loss, and the rebuilding
          actions of hGH stay fully active even with cortisol softened.
          Cyproheptadine can continue into the hGH cycle wherever appetite, gut
          tolerance, or sleep still call for it.
        </div>
        <div className="question-item">
          <span className="question-label">Low-dose aspirin (inflammation, cortisol, insulin sensitivity):</span>
          Lowers the inflammatory drag and peripheral cortisol conversion that
          keep cells resistant to T3. See the{" "}
          <a href="/tips-and-tricks#co-factors">Tips &amp; Tricks</a> aspirin
          section for dosing and safety.
        </div>
        <div className="question-item">
          <span className="question-label">Vitamin K2 (vascular protection):</span>
          Non-negotiable alongside aspirin to protect clotting and arterial
          health, and it supports the bone health T3 therapy demands. Use MK-4
          or MK-7.
        </div>
        <div className="question-item">
          <span className="question-label">Vitamin D3 + K2 (immune, bone, mood):</span>
          The co-factor that pairs best with T3. In my experience
          most chronically ill patients run deficient, and correcting it steadies
          immune function, protects bone while T3 is driving hard, and lifts mood.
          Run D3 together with K2 (the same K2 that partners your aspirin above).
          If your vitamin D is below 40 ng/mL, dose 5,000 to 10,000 IU/day of D3
          through this phase.
        </div>
        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
          None of these replace T3. They are what keep T3 working long enough to
          reset your baseline.
        </p>
      </div>

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
            Figure 2: The ideal body temperature curve of a healthy person,
            rising through the day and peaking in the late afternoon. If your
            T3 therapy works, your temperature pattern should begin to match
            this curve.
          </em>
        </p>
      </div>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src="/assets/images/Thermoregulation%20five%20cycles%20of%20slow%20release%20T3%20in%2051%20year%20old%20woman.png"
          alt="Thermoregulation across five cycles of slow-release T3 therapy in a 51-year-old woman, showing waking temperature climbing from a sub-36°C baseline toward the healthy 36.5 to 37.0°C range"
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
            Figure 3: Real-world thermoregulation data across five cycles of
            slow-release T3 in a 51-year-old woman. Each cycle progressively
            lifts the waking temperature baseline toward the healthy
            36.5 to 37.0°C range shown in Figure 2, the pattern most
            participants follow when the protocol is working.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-warning">
        <h3>Fueling T3 Therapy: Why Calories Matter Here</h3>
        <p>
          T3 dramatically increases your metabolic rate. That is the point.
          But a faster metabolism with insufficient fuel will cannibalize
          muscle. You must not be in a caloric deficit during this phase.
        </p>
        <div className="question-item">
          <span className="question-label">Match Your Caloric Demand:</span>
          As T3 doses climb, your body burns more energy. If you are not
          eating enough to cover that demand, the body will turn to muscle
          tissue for fuel, the opposite of what you are trying to achieve.
          Keep calories at or above your target (see the Refeeding page)
          and prioritize protein to give your body something to build with,
          not just burn.
        </div>
        <div className="question-item">
          <span className="question-label">Make the Calories Dense: This Is a Must-Do, Not a Preference</span>
          Here is where people quietly fail this phase. T3 throws the eating
          window wide open, and it is on you to actually fill it. A wrecked
          appetite cannot hit 3,000-plus calories a day on bulky, watery,
          low-calorie food: you get full long before you get enough. So make
          every bite count and go calorie-dense: olive oil and butter on
          everything, full-fat dairy, eggs, fatty fish and meat, nut butters,
          honey, white rice, ripe fruit. When high T3 opens the window and you
          leave it half-filled, the body does not coast, it strips muscle and
          lean tissue to cover the demand you just created. Covering that window
          with dense, high-calorie food is the line between rebuilding and
          wasting away.
        </div>
        <div className="question-item">
          <span className="question-label">Move Your Muscles: Tell Your Brain to Keep Them</span>
          Physical movement during T3 therapy sends a preservation signal.
          Your body will not aggressively break down muscle tissue it is
          actively using. You do not need to train hard. Even walking,
          light resistance work, or bodyweight movements daily is enough
          to keep the muscle-sparing signal active. Lying still while on T3
          with insufficient calories is the worst combination.
        </div>
        <div className="question-item">
          <span className="question-label">When You Cannot Hit High Calories Yet:</span>
          Some people, especially in the first days of the T3 cycle, cannot
          physically eat enough to match T3&rsquo;s demand. Their gut is not ready,
          appetite is suppressed, or digestion is too compromised. In this
          case, there are specific strategies that can help:
          <ul style={{ marginTop: "0.5rem" }}>
            <li>
              <strong>hGH:</strong> directly shifts the body toward
              anabolism and preferential fat use, reducing the rate at which
              muscle is burned for fuel even when calories are temporarily low.
              It is an add-on to the T3 cycle, normally from around the third
              cycle, once two cycles of fasting plus T3 have shown they are not
              enough on their own.
            </li>
            <li>
              <strong>Retatrutide:</strong> a GLP-1/GIP/glucagon triple
              agonist that improves glucose utilization and raises baseline
              energy availability. The glucagon component is particularly
              useful for people stuck in low-energy states.
            </li>
            <li>
              <strong>Cyproheptadine:</strong> the primary first-cycle lever
              for filling the eating window when appetite is broken or the gut
              is hypersensitive. It restores the drive to eat, calms the
              brain-gut nerves that make large meals nauseating, and deepens
              sleep when repair on T3 happens. For many people this is the
              single cheapest way to get calories back up early in the
              refeed. It is introduced in the first cycle, but it does not
              have to stop when hGH begins: see the{" "}
              <a href="/t3-therapy#cyproheptadine-caveat">cyproheptadine and hGH note</a>.
            </li>
          </ul>
        </div>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1rem",
            backgroundColor: "rgba(232,93,4,0.08)",
            borderLeft: "3px solid var(--scorch)",
            borderRadius: "4px",
            fontSize: "0.92rem",
          }}
        >
          <strong>Important:</strong> If you do not understand how hGH or
          Retatrutide work and why they are recommended in this context, do
          not use them. These are not general supplements. They are
          targeted tools with specific mechanisms. Read the hGH Therapy page
          and understand the protocol before considering them.
        </div>
      </div>

      <InterestingVideoBlock
        instagramSrc="https://www.instagram.com/reel/DUI8Cv9DdEa/embed/"
      />

      <EmailCapture compact source="t3-therapy-footer" />
      <RefeedPlanPromo source="t3-therapy" />
      <SourcingCallout heading="Can't actually get slow-release T3?" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="t3-therapy" sectionTitle="Phase 4: T3 Therapy" />

      <ReferencesSection
        refs={[
          {
            citation: "Cahill GF Jr. Starvation in Man. New England Journal of Medicine, 1970.",
            note: "the fasting-metabolism timeline: the brain's shift to ketones and muscle sparing once ketosis is established, and why T3 must be paired with adequate fuel",
          },
          {
            citation: "Influence of absolute (dry) fasting on metabolic processes and organ function.",
            note: "profound insulin suppression and improved insulin sensitivity (HOMA-IR) during fasting",
          },
          {
            citation:
              "Friedman M, Miranda-Massari JR, Gonzalez MJ. Supraphysiological cyclic dosing of sustained release T3 in order to reset low basal body temperature. P R Health Sci J, 2006;25(1):23-29. PMID 16883675.",
            href: "https://prhsj.rcm.upr.edu/index.php/prhsj/article/view/329",
            note: "the only published clinical study of the Wilson's T3 protocol: eleven chronic fatigue patients, no control group, no blinding; the entire published base for the cycling pattern this course borrows",
          },
          {
            citation:
              "American Thyroid Association. Statement on \"Wilson's Syndrome.\" Updated 24 May 2005.",
            href: "https://www.thyroid.org/american-thyroid-association-statement-on-wilsons-syndrome/",
            note: "the mainstream position: the syndrome is not recognised and T3 given this way can raise blood T3 to abnormal levels with potential effects on heart and bone",
          },
          {
            citation:
              "McDermott MT. Pseudo-endocrine Disorders: Recognition, Management, and Action. J Endocr Soc, 2024;9(1):bvae226. PMID 39749108. DOI 10.1210/jendso/bvae226.",
            href: "https://doi.org/10.1210/jendso/bvae226",
            note: "a 2024 endocrine review that classes Wilson's syndrome among pseudo-endocrine disorders and names high-dose T3 as the hazard",
          },
          {
            citation:
              "Ruiz-Nunez B, Tarasse R, Vogelaar EF, Janneke Dijck-Brouwer DA, Muskiet FAJ. Higher Prevalence of \"Low T3 Syndrome\" in Patients With Chronic Fatigue Syndrome: A Case-Control Study. Front Endocrinol (Lausanne), 2018;9:97. PMID 29615976. DOI 10.3389/fendo.2018.00097.",
            href: "https://doi.org/10.3389/fendo.2018.00097",
            note: "chronic fatigue patients against matched controls: similar TSH, lower free T3 and total T3, more reverse T3; the authors call for trials of T3",
          },
          {
            citation:
              "Rosenbaum M, Goldsmith RL, Haddad F, et al. Triiodothyronine and leptin repletion in humans similarly reverse weight-loss-induced changes in skeletal muscle. Am J Physiol Endocrinol Metab, 2018;315(5):E771-E779. PMID 29920214. DOI 10.1152/ajpendo.00116.2018.",
            href: "https://doi.org/10.1152/ajpendo.00116.2018",
            note: "T3 repletion reversed the skeletal muscle efficiency changes that follow weight loss, at replacement scale",
          },
          {
            citation:
              "Byerley LO, Heber D. Metabolic effects of triiodothyronine replacement during fasting in obese subjects. J Clin Endocrinol Metab, 1996;81(3):968-976. PMID 8772559. DOI 10.1210/jcem.81.3.8772559.",
            href: "https://doi.org/10.1210/jcem.81.3.8772559",
            note: "T3 restored to the normal range over the last three days of a ten-day fast did not raise metabolic rate; replacement dosing during the fast, not this protocol's post-refeed timing, which nobody has tested",
          },
          {
            citation:
              "Gardner DF, Kaplan MM, Stanley CA, Utiger RD. Effect of tri-iodothyronine replacement on the metabolic and pituitary responses to starvation. N Engl J Med, 1979;300(11):579-584. PMID 105290. DOI 10.1056/NEJM197903153001102.",
            href: "https://doi.org/10.1056/NEJM197903153001102",
            note: "in an 80-hour fast, T3 replacement raised urea excretion; the authors read the low-T3 state of fasting as protecting muscle protein",
          },
          {
            citation:
              "Krugman LG, Hershman JM, Chopra IJ, et al. Patterns of recovery of the hypothalamic-pituitary-thyroid axis in patients taken off chronic thyroid therapy. J Clin Endocrinol Metab, 1975;41(1):70-80. PMID 807596. DOI 10.1210/jcem-41-1-70.",
            href: "https://doi.org/10.1210/jcem-41-1-70",
            note: "after withdrawal, TSH stayed suppressed about two weeks and the T3 response normalised at about three weeks; previously hypothyroid patients took about a month",
          },
          {
            citation:
              "Vagenakis AG, Braverman LE, Azizi F, Portnay GI, Ingbar SH. Recovery of pituitary thyrotropic function after withdrawal of prolonged thyroid-suppression therapy. N Engl J Med, 1975;293(14):681-684. PMID 808728. DOI 10.1056/NEJM197510022931402.",
            href: "https://doi.org/10.1056/NEJM197510022931402",
            note: "after prolonged suppression, TSH returned at two to three weeks and serum T4 normalised at four weeks or more",
          },
          {
            citation:
              "Burgos N, Toloza FJK, Singh Ospina NM, et al. Clinical Outcomes After Discontinuation of Thyroid Hormone Replacement: A Systematic Review and Meta-Analysis. Thyroid, 2021;31(5):740-751. PMID 33161885. DOI 10.1089/thy.2020.0679.",
            href: "https://doi.org/10.1089/thy.2020.0679",
            note: "patients with a prior diagnosis of overt hypothyroidism were markedly less likely to remain euthyroid off treatment than those with subclinical hypothyroidism; low-quality evidence by the authors' own grading",
          },
          {
            citation:
              "Hsia SC, Bedadala GR, Balish MD. Effects of thyroid hormone on HSV-1 gene regulation: implications in the control of viral latency and reactivation. Cell Biosci, 2011;1:24. PMID 21756309. DOI 10.1186/2045-3701-1-24.",
            href: "https://doi.org/10.1186/2045-3701-1-24",
            note: "in neuron-like cells, thyroid hormone bound to its receptor repressed HSV-1 lytic transcription and removing the hormone reversed it; the published reason the taper and the trough carry full antiviral coverage; cell culture, no controlled human study",
          },
          {
            citation:
              "Figliozzi RW, Chen F, Hsia SV. New insights on thyroid hormone mediated regulation of herpesvirus infections. Cell Biosci, 2017;7:13. PMID 28344765. DOI 10.1186/s13578-017-0140-z.",
            href: "https://doi.org/10.1186/s13578-017-0140-z",
            note: "the same direction in a second cell line: thyroid hormone present represses HSV-1, thyroid hormone withdrawn permits it",
          },
        ]}
      />

      <ProtocolFurtherReading protocolSlug="t3-therapy" />
    </>
  );
}
