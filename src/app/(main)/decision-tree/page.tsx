import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import MermaidCharts from "@/components/MermaidCharts";

export const metadata: Metadata = {
  title: "Decision Logic Tree — The Scorch Protocol",
  description:
    "Use this decision logic tree to determine which phase of The Scorch Protocol applies to your current health status and symptoms.",
};

const chart0 = `graph TD
  Start["Start: Protocol Selection"] --> Q1{"I have recently been feeling ill for the past few
  months<br />and/or I am still fairly functional,<br />aka I can still work out"}

  Q1 -->|Yes| Beginner["You fall under the Beginner Scorch Protocol<br />Focus: Phase 1, 2, 3"]
  Q1 -->|No| Q2{"I have been sick for over 6 months<br />and it is affecting my daily life
  significantly<br />but I can still manage it with tons of supplements or medication.<br />I get PEM after exercise."}

  Q2 -->|Yes| Intermediate["You fall under the intermediate Scorch Protocol<br />Focus: Phase 1, 2, 3, 4"]
  Q2 -->|No| Q3{"I have been sick for well over a year,<br />I have tried tons of therapies and only kept
  getting worse.<br />I am not functional."}

  Q3 -->|Yes| Advanced["Focus on the Advanced Scorch Protocol<br />Focus: Phase 1, 2, 3, 4, 5"]
  Q3 -->|No| Consult["Further Assessment Needed<br />Consult with the community or coach"]

  style Beginner fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac
  style Intermediate fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style Advanced fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5`;

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

  Bloodwork --> Urgent{"Any Urgent Issues?<br />Gallstones, Tumors, Organ Dysfunction"}
  Urgent -->|Yes| Medical["Address Medically First<br />STOP HERE"]
  Urgent -->|No| Proceed["Proceed on Your Path"]

  Proceed -->|Path A| Phase1A["Phase 1A: Gradual Carb Reintroduction<br />The goal here is to carefully reintroduce carbs<br />and bridge the metabolic gap with the scorch protocol"]
  Proceed -->|Path B| Phase1B["Phase 1B: Figure out weight loss issue:<br />• Is it high metabolism?<br />• Is it insulin resistance (diabetes)?<br />• Is it high FGF21?<br />• Try and fix to put on weight."]

  Phase1A --> Converge["Phase 3: Liver Therapy & Bioenergetics<br />• Restore energy production<br />• Target 98.6F / 80-85 bpm"]
  Phase1B --> Converge

  Converge --> T3["Phase 4: Introduce T3 Therapy<br />• If Low Temps + Poor Conversion<br />• Start low/slow"]

  T3 --> Scorch["Phase 5: Scorch Protocol (Dry Fasting)<br />• When metabolism stable<br />• Build: 36h -> 72h -> 5-day<br />• Goal: Stem Cell Activation"]

  Scorch --> Maintain["Ongoing: Cycle & Maintain"]

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
      <h1>Protocol Decision Logic Tree</h1>

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
            <a href="#stopsignals">
              Critical Thresholds: Stop Signals
            </a>
          </li>
          <li>
            <a href="#part1">Part 1: Diet History &amp; Carb Approach</a>
          </li>
          <li>
            <a href="#part2">Part 2: Protocol Specifics Flow</a>
          </li>
          <li>
            <a href="#part3">Part 3: Long COVID, IR &amp; Ivermectin</a>
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

      <h2 id="stopsignals" style={{ color: "#dc3545" }}>
        Critical Thresholds (&ldquo;Stop Signals&rdquo;)
      </h2>
      <p>
        Strict criteria for potentially dangerous complications requiring fast
        termination.
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
            <strong>Maintenance:</strong> In cohorts, pulsing maintains 70–80%
            of gains long-term while avoiding tolerance.
          </li>
        </ul>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="decision-tree" sectionTitle="Decision Logic Tree" />
    </>
  );
}
