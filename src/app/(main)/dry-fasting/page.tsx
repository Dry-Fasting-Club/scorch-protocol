import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";
import MermaidCharts from "@/components/MermaidCharts";
import KeyTakeaways from "@/components/KeyTakeaways";
import StarterKitCallout from "@/components/StarterKitCallout";
import EmailCapture from "@/components/EmailCapture";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import ProtocolFurtherReading from "@/components/ProtocolFurtherReading";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Phase 2: The Dry Fast",
  description:
    "Phase 2: A step-by-step guide to dry fasting safely: day-by-day breakdown, red flags, weight milestones, and refeeding timing.",
  alternates: { canonical: "https://scorchprotocol.com/dry-fasting" },
};

const dryFastStages = `graph LR
  D0["Day 0<br/>Last meal<br/>Prep complete"] --> D1["Day 1<br/>Glycogen burn<br/>Cortisol surge<br/>HR up 10-20 bpm"]
  D1 --> D2["Day 2<br/>Acidosis onset<br/>Ketones ramping<br/>Hunger fades"]
  D2 --> D3["Day 3<br/>ACIDOTIC CRISIS<br/>pH 7.40 → 7.34<br/>Parasympathetic flip<br/>The hard wall"]
  D3 --> D4["Day 4-5<br/>Deep repair phase<br/>Healing fever<br/>Mental clarity<br/>Stem cells active"]
  D4 --> D7["Day 7-9 (extension)<br/>2nd ACIDOTIC CRISIS<br/>pH drops further<br/>Deeper immune reset<br/>Only once 5 days is very comfortable"]

  style D0 fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#cbd5e1
  style D1 fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style D2 fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style D3 fill:#7c2d12,stroke:#f97316,stroke-width:3px,color:#fdba74
  style D4 fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style D7 fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5`;

export default function DryFastingPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Phase 2: The Dry Fast", description: "Phase 2: A step-by-step guide to dry fasting safely: day-by-day breakdown, red flags, weight milestones, and refeeding timing.", path: "/dry-fasting", breadcrumbName: "The Dry Fast" })} />
      <h1>Phase 2: The Dry Fast (The Scorch)</h1>
      <StarterKitCallout />

      <KeyTakeaways points={[
        "Build up gradually: start with 36 hours, then 72 hours, then 5 days dry. Do not jump straight to a long fast.",
        "The full protocol is 5 days dry followed by 5 days water (not food). Never reverse that order.",
        "Five days dry is the cap because five days is still safe to do at home. Once you are very comfortable with it you can extend a little; some people get their best results from seven to nine days. The deeper the fast, the more aggressive the immune reset, and in my observation the more allergic and autoimmune clearing.",
        "Day 3 is the hard wall (acidotic crisis). Days 4 to 5 are where deep repair and stem cell activity happen.",
        "Feeling worse mid-fast: go on walks, do massages, move the whole system. If it starts to feel really bad, or the pain is excruciating, break the fast. While heart rate, temperature, blood pressure and urination look fine, you can continue.",
        "Stop immediately if your resting heart rate goes above 120 bpm, you stop urinating for more than 12 hours, you feel confused or get blurry vision, or you develop kidney pain or leg swelling.",
        "A cycle is a fast, a refeed and, if the refeed shows a metabolic slowdown, a 30-day T3 course. The next fast opens seven days after the T3 course ends. Fast first, always; T3 before the fast is only for the person fasting has already failed.",
        "Refeeding starts with plain water, about a cup an hour for the first four hours, then kompot. Coconut water waits for day 2. Eating too much too fast is dangerous.",
        "No T3 during the fast. You finish the dry and water fast clean, keep antiviral coverage running through the refeed, and T3 therapy only begins after the first 7 days of refeeding.",
      ]} />

      <h2>Step 1: Getting Ready</h2>
      <p>Preparing correctly avoids a &ldquo;detox crash&rdquo; and makes the fast easier.</p>

      <div className="guiding-questions">
        <h3>Pre-Fast Checklist</h3>
        <div className="question-item">
          <span className="question-label">Hard Stops:</span>
          Do <strong>NOT</strong> start if you are pregnant, have active
          cancer, active kidney or heart disease, are underweight (BMI under
          18), have a current acute infection, or are on diuretics. These are
          absolute contraindications, not suggestions. With active cancer,
          any multi-day dry fast is out; short dry fasts, or water fasts
          alongside treatment where your oncology team allows them, are case
          by case with me. Any cancer history, however old, is a
          conversation with me before you start (see the{" "}
          <a href="/contraindications">contraindications page</a>).
        </div>
        <div className="question-item">
          <span className="question-label">Support Team:</span>
          Have you set up a way to check in daily with someone you trust? (Very
          important for fasts over 3 days).
        </div>
      </div>

      <ul>
        <li>
          <strong>Choosing Your Path:</strong> Preparation comes in two roads.
          <ul>
            <li>
              <em>Plant-based path (gold standard):</em> A whole-food,
              salt/oil/sugar-free taper over your final weeks, finishing on raw
              and steamed vegetables. It heals deeper and gets you closest to
              fully healed, but it asks for precision.
            </li>
            <li>
              <em>Ketogenic path (safer fallback):</em> 50g of carbs a day or
              less for <strong>1 to 2 months</strong> before you start. Far more
              forgiving and the right call if you are sicker, on many
              medications, or have struggled with fasting before.
            </li>
          </ul>
          The full breakdown of both paths is on the{" "}
          <a href="/preparation">Preparation page</a>.
        </li>
        <li>
          <strong>Get Your Mind Right:</strong> Write down why you are doing
          this and focus your mind. A strong mindset helps you through the tough
          emotional parts.
        </li>
      </ul>

      <h2>Step 2: Starting Slowly</h2>
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
          Between the build-up fasts: wait a week or so while eating normally
          before the next step up. Once you are running the full protocol, the
          rhythm is a cycle: a fast, a refeed and, if the refeed shows a
          metabolic slowdown, a 30-day T3 course, with the next fast opening
          seven days after the T3 course ends.
        </em>
      </p>

      <div className="guiding-questions box-info">
        <h3>How Deep: Five Days Is the Cap, Not a Wall</h3>
        <p>
          I cap the Scorch Protocol at five days dry because five days is still
          safe to do at home, and it does get a bit difficult by then. Once you
          are very comfortable with five, you can try to extend it a little
          longer. Some people get their best results from a seven-to-nine-day
          fast. The deeper you go, the more aggressive the immune reset, and in
          my observation the deeper fasts clear more of the allergic and
          autoimmune load that drives so much chronic illness. The margin
          narrows with every day past five, so this is an extension you earn
          with comfortable five-day fasts behind you, not a target you set from
          the start.
        </p>
        <p>
          <em>
            What the evidence says: the measured dry-fasting literature stops
            at day five. Khoroshilov&rsquo;s thesis studied six healthy men for
            68 hours and his own method is a dry start of one to three days by
            individual tolerance, then water fasting (Khoroshilov 1994); the two
            Athens studies took twenty healthy,
            unmedicated adults through five dry days with a physician checking
            bloods daily, and their authors call medical supervision obligatory
            (Papagiannopoulos 2013; Papagiannopoulos-Vatopaidinos 2020), so
            &ldquo;safe at home&rdquo; is my judgement, not theirs. Nothing
            measures a human past day five without water, and no study
            compares five against seven to nine days on any immune or clinical
            endpoint; the one published harm report from a multi-day dry fast
            is kidney failure on day four, alone, in a single conference
            abstract (Philip 2026). The deeper immune reset and the
            allergic and autoimmune clearing are my observation; the
            regeneration science behind the idea comes from water-type fasting
            cycles, mostly in mice (Cheng 2014).
          </em>
        </p>
      </div>

      <h2>Step 3: The Dry Fast (The Scorch)</h2>
      <p>
        <strong>How it works:</strong> Your body starts getting water by
        burning old, damaged cells and fat. This speeds up deep cleaning
        (autophagy) and releases new building blocks (stem cells).
      </p>

      <h3>The Stages of a 5-Day Fast</h3>

      <div style={{ margin: "1.5rem 0" }}>
        <MermaidCharts charts={[dryFastStages]} />
        <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic", textAlign: "center" }}>
          The full arc of a dry fast. Day 3 is the hard wall (acidotic crisis); Days 4 to 5 are where the deep repair lives. Five days is the cap I set because it is still safe at home. Days 7 to 9 are the extension some people reach once five days is very comfortable, and where, in my observation, the deeper immune reset and the allergic and autoimmune clearing show up.
        </p>
      </div>

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

      <div className="guiding-questions box-warning">
        <h3>Feeling Worse: Push Through or Stop?</h3>
        <p>
          Feeling worse partway through is the normal texture of a dry fast,
          and the first response is movement, not panic: go on walks, do
          massages, move the whole system. The protocol has a few hacks for
          this, and the organ massage and walking notes on the{" "}
          <a href="/tips-and-tricks">Tips and Tricks</a> page are the ones I
          reach for first. The rule from there is simple. If it starts to feel
          really bad, break the fast. If the pain is excruciating, break the
          fast. As long as you are tracking heart rate, temperature, blood
          pressure and urination and they look fine, you can continue. The red
          flags below are the hard stops that override all of this.
        </p>
      </div>

      <div className="guiding-questions box-danger">
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

      <h2>Step 3B: The Water Fast (Days 6–10)</h2>
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
          <strong>No T3 during the fast:</strong> T3 is no longer taken during
          the water fast. It now begins only after the first 7 days of refeeding
          (see below).
        </li>
        <li>
          <strong>No L-carnitine:</strong> we no longer use L-carnitine. In my
          experience it works against the thyroid gains the protocol is driving
          (it blunts thyroid hormone&rsquo;s effect in the tissues), and my
          working theory is that this is part of why the thyroid slows on
          carnivore-style diets.
        </li>
        <li>
          <strong>Nothing else:</strong> no food, no juice, no broth, no
          electrolyte supplements.
        </li>
      </ul>

      <h3>No T3 During the Fast</h3>
      <p>
        Earlier versions of this protocol started T3 during the water fast. That
        is no longer how it is done. You finish the entire fast, dry first and
        then water, with no T3 at all. Adding a metabolism accelerator while the
        body is still deep in fasting scarcity works against the fast instead of
        with it. The fast has one job, which is to clear the system as deeply as
        possible. Let it finish that job clean.
      </p>
      <p>
        What does carry through the transition is your antiviral coverage. The
        fast clears out the viral reservoirs, and the moment they are most
        likely to try to re-seed is when food comes back, not during the fast
        itself. So the viral reactivation protocol stays in place straight
        through the fast-to-refeed handoff and across the whole refeed:
        L-lysine back on water day 1, monolaurin and olive leaf with the first
        meal, valacyclovir as the standing antiviral backbone from refeed day
        3 at the earliest (never during the fast, dry or water, because a
        water fast still leaves the body dehydrated and the drug is renally
        cleared), ivermectin alongside it as supportive coverage plus the
        primary antiparasitic, and a valacyclovir loading dose on top at the
        first sign of a prodrome, once that standing course is actually
        running. A prodrome that arrives while you are still fasting is the
        exception: there is no standing course to escalate and no rehydrated
        body to clear the drug with, so that case converts to water with
        electrolytes, takes L-lysine at once, breaks the fast once rehydrated,
        and brings valacyclovir in on the standing rule. The{" "}
        <a href="/viral-reactivation">Viral Reactivation</a> page has the full
        stack.
      </p>
      <p>
        During the first 7 days of refeeding we also add targeted mitochondrial
        and metabolic support: methylene blue, and in some cases ethyl pyruvate.
        This is decided case by case with each person, against their own history
        and lab numbers, so no fixed amount is published here. It is worked out
        directly in a consult. Its job is to help the mitochondria come back
        online as calories return, before any T3 is layered on top.
      </p>
      <p>
        T3 therapy does not start until{" "}
        <strong>after the first 7 days of refeeding</strong>. The body needs to
        be eating again, rehydrated, and metabolically back online before you
        add the T3 signal. That first week is also when you learn whether this
        cycle needs T3 at all. Running hot, holding your weight and feeling
        great: you skip it. Cold, weight stuck, the old symptoms still there:
        that is the metabolic slowdown T3 is for, and the 30-day course runs on
        the Wilson&rsquo;s pattern (ramp, hold, taper) as laid out on the{" "}
        <a href="/t3-therapy">T3 Therapy</a> page. Seven days after the course
        ends, the next fast opens.
      </p>
      <p>
        <em>
          What the evidence says: the judgement of who needs T3 after the fast,
          and the T3-first exception, are my clinical rules. The literature has
          no published criterion for who needs T3 after a fast; the nearest
          objective candidate is the low free T3 and high reverse T3 pattern
          measured in chronic fatigue patients (Ruiz-Nunez 2018), which is a
          blood test, not the screen I use.
        </em>
      </p>

      <h2>Step 4: Breaking the Fast (Refeeding)</h2>
      <p>
        <strong>Very Important:</strong> Eating too much too fast can be
        dangerous. Your refeed should last roughly as long as the fasting block.
        For a 10-day fast (5 dry + 5 water), give your body at least 10 days
        before returning to normal eating. Your antiviral coverage keeps running
        straight through this refeed window. During the first 7 days of
        refeeding we also add case-by-case mitochondrial support (methylene
        blue, and in some cases ethyl pyruvate), worked out individually rather
        than by any published dose. T3 therapy is deliberately not part of this
        window: it begins only after day 7 of refeeding.
      </p>
      <ul>
        <li>
          <strong>The First 4 Hours:</strong>{" "}
          <strong>Plain water only.</strong> Room temperature, small sips,
          about a cup (200 to 250 ml) an hour, 1 litre at most over the four
          hours. No gulping. Not coconut water: after days without water your
          kidneys are holding on to every drop and your blood is thicker than
          normal, and a potassium load into that state is the wrong first
          move. Plain water lets the kidneys wake up.
        </li>
        <li>
          <strong>After Hour 4:</strong> Once you are urinating normally, kompot
          joins (a large pot of water with a little fruit, fresh or dried,
          simmered, strained, no sugar, cooled; it should taste like faintly
          flavoured water, not juice). Same pace, never more than a cup an
          hour. Day 1 total is about 2.5 litres across water and kompot, and
          nothing else: no food, no electrolyte powders.{" "}
          <em>Caveat:</em> coconut water is not part of day 1. If a diuretic
          kick-start is clearly needed, a small unsweetened coconut water may
          be added, not before about 12 hours after the first water, at most
          250 ml in an hour and 500 ml for the day.
        </li>
        <li>
          <strong>Day 1 After the Fast:</strong> Water, then kompot, nothing
          else. Continue your antiviral protocol (L-lysine in your water from
          day 1; monolaurin and olive leaf join with the first cooked food on
          day 3), and this is where case-by-case mitochondrial support
          (methylene blue, and in some cases ethyl pyruvate) is layered in. No
          T3 yet: it does not begin until after day 7 of refeeding.
        </li>
        <li>
          <strong>Day 2 to 7:</strong> Day 2 is kompot, unsweetened coconut
          water in small amounts and broth with no added salt, still liquids
          only. Day 3 brings the first solid food, cooked fruit and cooked
          vegetables, and white rice joins on day 4; from there follow the food
          ladder on the <a href="/refeeding">Refeeding Page</a>. Through this
          first week, keep the antiviral coverage and the case-by-case
          methylene blue (and, for some, ethyl pyruvate) support going. T3 has
          still not started.
        </li>
        <li>
          <strong>After Day 7:</strong> Decide on T3. If the fast left you
          running hot, holding your weight and feeling great, you skip it this
          cycle. If the metabolic slowdown is there, begin the 30-day T3
          course. See the <a href="/t3-therapy">T3 Therapy</a> page for the
          ramp, hold, and taper.
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
          supercharged water fast that carries straight into a guided refeed.
          This is the definitive version.
        </li>
        <li>
          <strong>7 to 9 Days Dry (the extension):</strong> For people who are
          already very comfortable with five days. The second acidotic crisis,
          a more aggressive immune reset, and in my observation more clearing
          of the allergic and autoimmune load. The refeed discipline rises with
          every extra day.
        </li>
      </ul>

      {/* FaithBlock hidden for now — to restore, remove the `false && (` wrapper and matching `)` */}
      {false && (
      <FaithBlock
        title="Jesus on Fasting: What is Done in Secret, God Rewards"
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
      )}

      <EmailCapture compact source="dry-fasting-footer" />
      <RefeedPlanPromo source="dry-fasting" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="dry-fasting" sectionTitle="Phase 2: The Dry Fast" />

      <ReferencesSection
        refs={[
          {
            citation:
              "Papagiannopoulos IA, Sideris VI, Boschmann M, Koutsoni OS, Dotsika EN. Anthropometric, Hemodynamic, Metabolic, and Renal Responses during 5 Days of Food and Water Deprivation. Forsch Komplementmed, 2013;20(6):427–433.",
            href: "https://doi.org/10.1159/000357718",
            note: "5 days of total food and water deprivation was hemodynamically stable in healthy adults (~1.4 kg/day weight loss)",
          },
          {
            citation: "Hyperosmotic Stress Induces Unconventional Autophagy Independent of the Ulk1 Complex.",
            note: "dehydration triggers autophagy independently of the nutrient-sensing pathway, and turns on faster",
          },
          {
            citation: "Hypertonic stress promotes autophagy and microtubule-dependent autophagosomal clusters. Autophagy, 2013.",
            note: "hypertonic (dehydration) stress rapidly clears p62-positive protein aggregates",
          },
          {
            citation: "Absolute fasting: the effect of the complete absence of food and water on the human body (Khoroshilov).",
            note: "metabolic-water production (~0.5–0.8 L/day) from fat and glycogen oxidation",
          },
          {
            citation: "Cahill GF Jr. Starvation in Man. New England Journal of Medicine, 1970.",
            note: "the day-by-day starvation metabolic timeline (glycogen → gluconeogenesis → ketosis)",
          },
          {
            citation:
              "Khoroshilov IE. Clinical and hygienic aspects of absolute (dry) fasting. Author's abstract of a Candidate of Medical Sciences thesis, Military Medical Academy, St Petersburg, 1994 (abridged English translation, Siberika Publishing, 2020).",
            note: "six healthy men fasted 68 hours without food or water: a 2 to 4 percent fluid deficit, no rhythm disturbance, the acidotic switch around day three; the author's own method is a dry start of one to three days by individual tolerance, then water fasting, and nothing in it measures a fourth day",
          },
          {
            citation:
              "Papagiannopoulos-Vatopaidinos IE, Papagiannopoulou M, Sideris V. Dry fasting physiology: responses to hypovolemia and hypertonicity. Complement Med Res, 2020;27(4):242-251. PMID 31958788. DOI 10.1159/000505201.",
            href: "https://doi.org/10.1159/000505201",
            note: "ten healthy, unmedicated adults through five dry days under daily medical measurement: compensated hypovolaemia, cortisol and uric acid sharply up, and the authors' own statement that supervision is obligatory and the method is limited to a few days",
          },
          {
            citation:
              "Philip R, Shahid R, Rehman S, Jussa M, Rao HS, Philip M. Severe dialysis disequilibrium following an extreme dry fast: hypernatremic dehydration and rhabdomyolysis leading to multiorgan failure. Am J Respir Crit Care Med, 2026;212(Suppl 1), ATS conference abstract A51-43. DOI 10.1093/ajrccm/aamag162.4785.",
            href: "https://academic.oup.com/ajrccm/article/212/Supplement_1/aamag162.4785/8684721",
            note: "the one published harm report from a multi-day dry fast: oliguric kidney injury with rhabdomyolysis after four days alone; a single conference abstract with unknown confounders",
          },
          {
            citation:
              "Cheng CW, Adams GB, Perin L, et al. Prolonged fasting reduces IGF-1/PKA to promote hematopoietic-stem-cell-based regeneration and reverse immunosuppression. Cell Stem Cell, 2014;14(6):810-823. PMID 24905167. DOI 10.1016/j.stem.2014.04.014.",
            href: "https://doi.org/10.1016/j.stem.2014.04.014",
            note: "the immune-regeneration finding behind the 'immune reset' idea: 48 to 72 hour fasting cycles in mice drove stem-cell self-renewal; water-type fasting, mostly in mice, with no comparison of dry-fast depth",
          },
          {
            citation:
              "Ruiz-Nunez B, Tarasse R, Vogelaar EF, Janneke Dijck-Brouwer DA, Muskiet FAJ. Higher Prevalence of \"Low T3 Syndrome\" in Patients With Chronic Fatigue Syndrome: A Case-Control Study. Front Endocrinol (Lausanne), 2018;9:97. PMID 29615976. DOI 10.3389/fendo.2018.00097.",
            href: "https://doi.org/10.3389/fendo.2018.00097",
            note: "the nearest thing to a published criterion for who might need T3 after a fast: chronic fatigue patients carried lower free T3 and total T3 and more reverse T3 than matched controls at a similar TSH; a blood pattern, not the screen used here",
          },
        ]}
      />

      <ProtocolFurtherReading protocolSlug="dry-fasting" />
    </>
  );
}
