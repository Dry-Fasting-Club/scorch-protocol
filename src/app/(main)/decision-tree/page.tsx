import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import MermaidCharts from "@/components/MermaidCharts";
import KeyTakeaways from "@/components/KeyTakeaways";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Decision Logic Tree",
  description:
    "Use this decision logic tree to determine which phase of The Scorch Protocol applies to your current health status and symptoms.",
  alternates: { canonical: "https://scorchprotocol.com/decision-tree" },
};

const chart0 = `graph TD
  Start["Start: Protocol Selection"] --> Q1{"I have recently been feeling ill for the past few
  months<br />and/or I am still fairly functional,<br />aka I can still work out"}

  Q1 -->|Yes| Beginner["Beginner Scorch Protocol<br />Phases 1, 2, 3: prepare, fast, refeed<br />Then judge the refeed: running hot, holding your weight,<br />feeling great = no T3 this cycle<br />Metabolic slowdown after the fast = add Phase 4"]
  Q1 -->|No| Q2{"I have been sick for over 6 months<br />and it is affecting my daily life
  significantly<br />but I can still manage it with tons of supplements or medication.<br />I get PEM after exercise."}

  Q2 -->|Yes| Intermediate["Intermediate Scorch Protocol<br />Phases 1, 2, 3, then 4<br />Fast first; the 30-day T3 course follows the refeed<br />if the slowdown shows"]
  Q2 -->|No| Q3{"I have been sick for well over a year,<br />I have tried tons of therapies and only kept
  getting worse.<br />I am not functional."}

  Q3 -->|Yes| Advanced["Advanced Scorch Protocol<br />Phases 1 to 4 as the standing cycle:<br />fast, then T3, at least once to test the water<br />Phase 5 (hGH) around cycle three,<br />if two cycles were not enough"]
  Q3 -->|No| Consult["Further Assessment Needed<br />Run your numbers past me"]

  style Beginner fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style Intermediate fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style Advanced fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5`;

const chartTemp = `graph TD
  Start["Log your waking temperature<br />(before getting out of bed, basal thermometer)<br />It is the dial T3 is dosed to after the fast"] --> History{"Has fasting already failed you?<br />Pushed through fasts, kept getting worse,<br />with signs of metabolic trouble<br />(cold, weight that will not move, worse after each attempt)"}

  History -->|No| FastFirst["Fast First<br />The standard order: prepare, fast, refeed,<br />then judge whether this cycle needs T3"]
  History -->|Yes| T3First["T3 First, as a Jump Start<br />Rebuild the metabolism on a T3 course,<br />then come back to the fast<br />Run your numbers past me before you start"]

  FastFirst --> Refeed{"How did the fast leave you?"}
  Refeed -->|"Running hot, holding weight, feeling great"| NoT3["No T3 this cycle"]
  Refeed -->|"Cold, weight stuck, old symptoms back"| T3["30-day T3 course after refeed day 7<br />Next fast opens 7 days after it ends"]

  style FastFirst fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style NoT3 fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style T3 fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style T3First fill:#7c2d12,stroke:#f97316,stroke-width:2px,color:#fdba74`;

const chartStop = `graph TD
  Start["Monitor Vital Signs & Status"] --> Hemo{"1. Hemodynamic Signals<br />(BP / HR / Orthostasis)"}

  Hemo -->|Abnormal| STOP["STOP FAST<br />IMMEDIATELY"]

  Hemo -->|Normal| Fluid{"2. Fluid & Renal Status<br />(Weight / Urine)"}
  Fluid -->|Abnormal| STOP

  Fluid -->|Normal| Thermo{"3. Thermoregulation<br />(Sustained Fever)"}
  Thermo -->|Abnormal| STOP

  Thermo -->|Normal| Neuro{"4. Neurological Status<br />(Confusion / Delirium)"}
  Neuro -->|Abnormal| STOP

  Neuro -->|Normal| Cont["Continue Fast &<br />Monitor Regularly"]

  Hemo --- H_Note["BP: <80 or >180<br />HR: >120 or <40<br />Syncope"]
  Fluid --- F_Note["Weight Loss: >5-7% / 24h<br />Urine: 0ml / 24h"]
  Thermo --- T_Note["Fever: >38.0°C (100.4°F)"]
  Neuro --- N_Note["Confusion / Delirium<br />Inability to obey commands"]

  style STOP fill:#7f1d1d,stroke:#ef4444,stroke-width:4px,color:#fca5a5
  style Cont fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style H_Note fill:#0f172a,stroke:#334155,stroke-dasharray: 5 5,color:#94a3b8
  style F_Note fill:#0f172a,stroke:#334155,stroke-dasharray: 5 5,color:#94a3b8
  style T_Note fill:#0f172a,stroke:#334155,stroke-dasharray: 5 5,color:#94a3b8
  style N_Note fill:#0f172a,stroke:#334155,stroke-dasharray: 5 5,color:#94a3b8`;

const chart1 = `graph TD
  Start["Start: Chronic Symptoms + Extreme Diet History"] --> Assess{"Assess Current Diet Background"}

  Assess -->|Path A: Carnivore / Low-Carb| PathA["Path A: Carnivore/Low-Carb Background<br />• Belly fat and High LDL<br />• Cold Extremities<br />• Low Energy Availability"]
  Assess -->|Path B: High-Carb| PathB["Path B: High-Carb Background<br />• Lean or Skinny-Fat<br />• Wired/Hot and High FGF21<br />• Difficulty Gaining Mass"]

  PathA --> Bloodwork["Full Bloodwork + Symptom Check"]
  PathB --> Bloodwork

  Bloodwork --> Urgent{"Any Urgent Issues?<br />Gallstones, Tumors, Active Cancer,<br />Organ Dysfunction"}
  Urgent -->|Yes| Medical["Address Medically First<br />STOP HERE<br />Active cancer: no multi-day dry fast<br />Any cancer history: talk to me first"]
  Urgent -->|No| Proceed["Proceed on Your Path"]

  Proceed -->|Path A| Phase1A["Phase 1A: Gradual Carb Reintroduction<br />The goal here is to carefully reintroduce carbs<br />and bridge the metabolic gap with the scorch protocol"]
  Proceed -->|Path B| Phase1B["Phase 1B: Figure out weight loss issue:<br />• Is it high metabolism?<br />• Is it insulin resistance (diabetes)?<br />• Is it high FGF21?<br />• Try and fix to put on weight."]

  Phase1A --> Converge["Prep, continued: Liver Therapy & Bioenergetics<br />• Restore energy production<br />• Target 98.6F / 80-85 bpm"]
  Phase1B --> Converge

  Converge --> Failed{"Has fasting already failed you?<br />Pushed through, kept getting worse,<br />signs of metabolic trouble"}

  Failed -->|No| Scorch["The Dry Fast<br />• Fast first, always<br />• Build: 36h -> 72h -> 5-day<br />• T3 judged after the refeed"]
  Failed -->|Yes| T3["T3 First, as a Jump Start<br />• Wilson's-style course to the temperature target<br />• Then return to the fast"]

  T3 --> Scorch

  Scorch --> Maintain["Ongoing: Cycle & Maintain<br />A cycle = fast, refeed, 30-day T3 course if needed<br />Next fast opens 7 days after the T3 course ends"]

  style PathA fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#cbd5e1
  style PathB fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#cbd5e1
  style Urgent fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5
  style Scorch fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac`;

const chart2 = `graph TD
  Start[Start: Analyzing Blood Work] --> Thyroid{Evaluate Thyroid Panel}

  Thyroid -->|High TSH + Low T4/T3| Primary[Primary Hypothyroidism Detected<br />Consider Standard T4/T3 Meds<br />Re-assess in 3 months]
  Thyroid -->|Normal TSH + Fatigue and Low temps| Chronic[Euthyroid + Chronic Fatigue Profile]
  Thyroid -->|Low TSH Under 1| Hyper[Hyperthyroidism Detected - Need to Address with Fasting]

  Chronic --> Markers{Check Key Markers:<br />Cholesterol, eGFR, Insulin Resistance}

  Markers -->|Low Cholesterol| Preg[Protocol: T3 Therapy + Pregnenolone]
  Markers -->|High Cholesterol OR<br />Low eGFR OR<br />Insulin Resistance| Strong[Strong Rec: T3 Therapy Only]
  Markers -->|None Elevated| Mild[Milder T3 Therapy<br />Monitor/Optional]

  Preg --> Liver{Check Liver Enzymes<br />ALT/AST}
  Strong --> Liver
  Mild --> Liver

  Liver -->|High ALT/AST| Tudca[Add TUDCA + NAC]
  Liver -->|Normal| Standard[Continue Standard Protocol]

  style Strong fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5
  style Preg fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style Tudca fill:#1e3a5f,stroke:#3b82f6,stroke-width:2px,color:#93c5fd
  style Primary fill:#1e293b,stroke:#64748b,stroke-width:2px,stroke-dasharray: 5 5,color:#cbd5e1`;

const chart3 = `graph TD
  Start["Start: Patient w/ Long COVID Symptoms<br />(Brain Fog, Fatigue, Suspected IR)"] --> Assess{"Assess Baseline:<br />Check IR Markers (HOMA-IR >3)<br />& Liver Function"}

  Assess -->|IR Confirmed| Trial["Initiate Ivermectin Trial<br />(e.g., 12mg/day for 4-6 weeks)<br />Rationale: Reset FXR, Reduce IR"]
  Assess -->|IR NOT Confirmed| Mock["Rule out other drivers (e.g. Neuro-inflammation).<br />Still consider trial (Low Dose)"]

  Mock --> Trial

  Trial --> Result?{"Result after 4-6 weeks"}

  Result? -->|Improved| Sust{"Monitor Sustainability<br />(3 months)"}
  Result? -->|No Improvement| Pivot["Pivot Strategy<br />Reassess non-FXR drivers"]

  Pivot --> Alternate["Root Cause First<br />(Fasting / Autophagy)"]

  Sust -->|Stable| Taper["Taper to PRN<br />(Path 1: Reset / Epigenetic Shift)"]
  Sust -->|Relapse| Maint["Switch to Maintenance Pulse<br />(e.g., 12mg 3-5 days biweekly)"]

  Maint --> Root["Address Root Cause:<br />Fasting / Autophagy Protocols<br />(Clear Viral Reservoirs)"]

  style Trial fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style Pivot fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5
  style Root fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047`;

export default function DecisionTreePage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Decision Logic Tree", description: "Use this decision logic tree to determine which phase of The Scorch Protocol applies to your current health status and symptoms.", path: "/decision-tree", breadcrumbName: "Decision Tree" })} />
      <h1>Protocol Decision Logic Tree</h1>

      <KeyTakeaways points={[
        "Use Part 0 to find your starting level: Beginner, Intermediate, or Advanced, based on how long you have been sick and how much your daily life is affected. Everyone fasts first. Whether you run T3 is decided by how the fast leaves you.",
        "Fast first, always. T3 first is the exception, and it is for the person who has struggled with fasting, pushed through, kept getting worse with signs of metabolic trouble, and needs a jump start. Log your waking temperature from day one because it is the dial T3 is dosed to later.",
        "T3 is for the post-fast metabolic slowdown, not for everyone. Run hot, hold your weight and feel great after the fast, and you skip it. The long-term sufferer who has tried everything runs fast then T3 at least once to test the water, and weans off if it does little. hGH enters around the third cycle, only when two cycles of fasting plus T3 were not enough.",
        "Stop the fast immediately if your heart rate goes above 120 bpm, you stop urinating for more than 24 hours, you develop a fever above 100.4F, or you feel confused or delirious. Short of that, feeling worse is a reason to walk, massage and move the system, and to break the fast if it feels really bad or the pain is excruciating.",
        "Active cancer rules out any multi-day dry fast, and any cancer history is a conversation with me before you start. The full rules are on the contraindications page.",
        "Your diet history (carnivore vs. high-carb) and your thyroid panel each have their own decision branch: follow the chart that matches your situation.",
      ]} />

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "15px",
          borderRadius: "5px",
          marginBottom: "30px",
        }}
      >
        <strong
          style={{ display: "block", marginBottom: "10px", color: "var(--text-color)" }}
        >
          Table of Contents
        </strong>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>
            <a href="#part0">Part 0: Protocol Category Selection</a>
          </li>
          <li>
            <a href="#baselinetemp">
              Fast First or T3 First? (And What Your Temperature Is For)
            </a>
          </li>
          <li>
            <a href="#stopsignals">
              Critical Thresholds: Stop Signals
            </a>
          </li>
          <li>
            <a href="#part1">Part 1: Diet History &amp; Carb Approach</a>
          </li>
          <li>
            <a href="#part2">Part 2: T3 Thyroid Assessment</a>
          </li>
          <li>
            <a href="#part3">Part 3: Long COVID, Insulin Resistance (IR) &amp; Ivermectin</a>
          </li>
        </ul>
      </div>

      <h2 id="part0">Part 0: Protocol Category Selection</h2>
      <p>
        Determine which Scorch Protocol category is path-appropriate for your
        current health status.
      </p>
      <MermaidCharts charts={[chart0]} />

      <hr style={{ margin: "3rem 0", border: 0, borderTop: "1px solid rgba(255,255,255,0.1)" }} />

      <h2 id="baselinetemp">Fast First or T3 First? (And What Your Temperature Is For)</h2>
      <p>
        The order is fast first. Always. T3 first is the exception, and the
        trigger is not a number on the thermometer, it is history: you have
        struggled with fasting, pushed through it, kept getting worse, fasting
        is plainly not working for you, there are signs of metabolic trouble,
        and you need a jump start before the fast can do its job. That is the
        person I put on a T3 course before the fast. Everyone else fasts first.
      </p>
      <p>
        <em>
          What the evidence says: that trigger, and the judgement of who needs
          T3 after the fast, are my clinical rules. The literature has no
          published criterion for who needs T3 after a fast; the nearest
          objective candidate is the low free T3 and high reverse T3 pattern
          measured in chronic fatigue patients (Ruiz-Nunez 2018), which is a
          blood test, not the history-and-temperature screen I use.
        </em>
      </p>
      <p>
        Your waking temperature still matters, for a different reason. Long
        Covid and ME/CFS patients commonly run cold (96 to 97&deg;F) because
        viral persistence has suppressed the thyroid axis, and that reading is
        the dial the T3 course is dosed to after the fast. A low reading is also
        the main sign you will come out of the fast needing that course. Measure
        it every morning (on waking, before getting out of bed) <em>and</em> 30
        minutes after breakfast, starting now, so the trend is in hand when the
        decision arrives.
      </p>
      <MermaidCharts charts={[chartTemp]} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(40,167,69,0.12)",
            borderLeft: "5px solid #48bb78",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#68d391" }}>
            &ge;98.6&deg;F (37.0&deg;C)
          </h4>
          <p style={{ marginBottom: 0 }}>
            <strong>Running warm.</strong> Fast first, standard protocol. If
            you also hold your weight and feel great coming out of the fast,
            you are the person who does not need the T3 cycle at all.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(234,179,8,0.12)",
            borderLeft: "5px solid #eab308",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#fde047" }}>
            97.8-98.5&deg;F (36.6-36.9&deg;C)
          </h4>
          <p style={{ marginBottom: 0 }}>
            <strong>Mildly low.</strong> Fast first, and track temperature
            daily through the fast and refeed. If the slowdown shows up after
            the fast (cold, weight stuck, old symptoms back), the 30-day T3
            course follows refeed day 7.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(249,115,22,0.12)",
            borderLeft: "5px solid #f97316",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#fdba74" }}>
            &lt;97.8&deg;F (&lt;36.6&deg;C)
          </h4>
          <p style={{ marginBottom: 0 }}>
            <strong>Low.</strong> The main sign of a slow metabolism, and the
            picture that most often needs the T3 course after the fast. The
            order is still fast first unless the failed-fasting history above
            applies to you. Expect to dose T3 against this number once the
            refeed is done.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(220,53,69,0.12)",
            borderLeft: "5px solid #ff4d4d",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#ff6b6b" }}>
            95-96&deg;F (35.0-35.6&deg;C)
          </h4>
          <p style={{ marginBottom: 0 }}>
            <strong>Severe metabolic suppression.</strong> A cortisol-inversion
            pattern (temperature <em>drops</em> after eating) means cortisol is
            the only thing holding metabolism up, a major red flag. Run this
            picture past me with your numbers before you plan anything.
            Whether a reading this low on its own changes the order is a call I
            make case by case, not a rule I publish.
          </p>
        </div>
      </div>

      <hr style={{ margin: "3rem 0", border: 0, borderTop: "1px solid rgba(255,255,255,0.1)" }} />

      <h2 id="stopsignals" style={{ color: "#dc3545" }}>
        Critical Thresholds (&ldquo;Stop Signals&rdquo;)
      </h2>
      <p>
        Strict criteria for potentially dangerous complications requiring fast
        termination. Short of these, feeling worse mid-fast is the normal
        texture of the work: go on walks, do massages, move the whole system.
        If it starts to feel really bad, or the pain is excruciating, break the
        fast. While heart rate, temperature, blood pressure and urination look
        fine, you can continue.
      </p>
      <MermaidCharts charts={[chartStop]} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(220,53,69,0.12)",
            borderLeft: "5px solid #ff4d4d",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#ff6b6b" }}>
            1. Hemodynamic Instability
          </h4>
          <ul style={{ marginBottom: 0, paddingLeft: "20px" }}>
            <li>
              <strong>Systolic BP:</strong> &lt; 80 or &gt; 180 mmHg
            </li>
            <li>
              <strong>Heart Rate:</strong> &gt; 120 or &lt; 40 bpm
            </li>
            <li>
              <strong>Orthostasis:</strong> Syncope or &gt;30 mmHg systolic drop
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "rgba(40,167,69,0.12)",
            borderLeft: "5px solid #48bb78",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#68d391" }}>
            2. Fluid &amp; Renal Status
          </h4>
          <ul style={{ marginBottom: 0, paddingLeft: "20px" }}>
            <li>
              <strong>Weight Loss:</strong> &gt; 5-7% in 24 hours
            </li>
            <li>
              <strong>Urine:</strong> 0 ml for &gt; 24h
            </li>
            <li style={{ fontSize: "0.85em", listStyleType: "none" }}>
              <em>Note: 200-300ml is normal low output.</em>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "rgba(237,137,54,0.12)",
            borderLeft: "5px solid #ed8936",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#f6ad55" }}>
            3. Thermoregulation
          </h4>
          <ul style={{ marginBottom: 0, paddingLeft: "20px" }}>
            <li>
              <strong>Sustained Fever:</strong> &gt; 38.0&deg;C (100.4&deg;F)
            </li>
            <li style={{ fontSize: "0.85em", listStyleType: "none" }}>
              <em>Note: 37.5&deg;C is normal &ldquo;acidotic fire.&rdquo;</em>
            </li>
          </ul>
        </div>
        <div
          style={{
            backgroundColor: "rgba(66,153,225,0.12)",
            borderLeft: "5px solid #4299e1",
            padding: "15px",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#63b3ed" }}>4. Neurological</h4>
          <ul style={{ marginBottom: 0, paddingLeft: "20px" }}>
            <li>Severe confusion</li>
            <li>Delirium</li>
            <li>Inability to obey commands</li>
          </ul>
        </div>
      </div>

      <hr style={{ margin: "3rem 0", border: 0, borderTop: "1px solid rgba(255,255,255,0.1)" }} />

      <h2 id="part1">Part 1: Diet History &amp; Carb Approach</h2>
      <p>
        Determine your starting point based on previous diet history (Carnivore
        vs. High Carb).
      </p>
      <MermaidCharts charts={[chart1]} />
      <p>
        One stop on that chart needs words. Active cancer rules out any
        multi-day dry fast; short dry fasts, or water fasts alongside
        treatment where your oncology team allows them, are case by case with
        me. Any cancer history, however old, is a conversation with me before
        you start, and the full rules are on the{" "}
        <a href="/contraindications">contraindications page</a>.
      </p>

      <hr style={{ margin: "3rem 0", border: 0, borderTop: "1px solid rgba(255,255,255,0.1)" }} />

      <h2 id="part2">Part 2: T3 Thyroid Assessment</h2>
      <p>How to evaluate T3 thyroid status.</p>
      <MermaidCharts charts={[chart2]} />

      <hr style={{ margin: "3rem 0", border: 0, borderTop: "1px solid rgba(255,255,255,0.1)" }} />

      <h2 id="part3">
        Part 3: Long COVID, Insulin Resistance (IR) &amp; Ivermectin
      </h2>

      <p>
        <strong>
          Model for Long covid therapeutics like Ivermectin, Ketotifen, etc.
        </strong>
      </p>
      <p>
        There are a few supplements around calming the immune system and
        reducing inflammation that can be used to treat long covid symptoms. One
        of the more powerful and consistent helpers is Ivermectin
      </p>
      <MermaidCharts charts={[chart3]} />

      <div className="guiding-questions" style={{ marginTop: "2rem" }}>
        <h3>Key Takeaways</h3>
        <ul>
          <li>
            <strong>The Bridge:</strong> Ivermectin acts as a metabolic bridge,
            offering quick wins via liver/IR optimization.
          </li>
          <li>
            <strong>Durability:</strong> Long-term success often hinges on
            eradicating viral reservoirs through autophagy (fasting).
          </li>
          <li>
            <strong>Maintenance:</strong> Pulsing holds most of the gains
            long-term while avoiding tolerance.
          </li>
        </ul>
      </div>

      <RefeedPlanPromo source="decision-tree" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="decision-tree" sectionTitle="Decision Logic Tree" />

      <ReferencesSection
        refs={[
          {
            citation:
              "Ruiz-Nunez B, Tarasse R, Vogelaar EF, Janneke Dijck-Brouwer DA, Muskiet FAJ. Higher Prevalence of \"Low T3 Syndrome\" in Patients With Chronic Fatigue Syndrome: A Case-Control Study. Front Endocrinol (Lausanne), 2018;9:97. PMID 29615976. DOI 10.3389/fendo.2018.00097.",
            href: "https://doi.org/10.3389/fendo.2018.00097",
            note: "the nearest thing to a published criterion for who might need T3 after a fast: chronic fatigue patients carried lower free T3 and total T3 and more reverse T3 than matched controls at a similar TSH; a blood pattern, not the history-and-temperature screen used here",
          },
        ]}
      />
    </>
  );
}
