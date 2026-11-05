import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";
import PaidContentBlock from "@/components/PaidContentBlock";
import InterestingVideoBlock from "@/components/InterestingVideoBlock";
import MermaidCharts from "@/components/MermaidCharts";
import KeyTakeaways from "@/components/KeyTakeaways";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import ReferencesSection from "@/components/ReferencesSection";

export const metadata: Metadata = {
  title: "Symptom Management",
  description:
    "A symptom-by-symptom guide to managing side effects during The Scorch Protocol: Herxheimer reactions, electrolytes, and more.",
  alternates: { canonical: "https://scorchprotocol.com/symptom-management" },
};

const herxDecisionTree = `graph TD
  Start["Concerning symptom appears<br/>during the fast or T3 cycle"] --> Vital{"Check vital signs in order"}

  Vital --> HR{"1. Resting HR above 120 bpm<br/>SUSTAINED, or under 40?"}
  HR -->|Yes| Stop["STOP: break the fast<br/>with water, then kompot"]
  HR -->|No| BP{"2. Systolic BP staying under 80<br/>or over 180, or a drop of more<br/>than 30 mmHg on standing?"}

  BP -->|Yes| Stop
  BP -->|No| Urine{"3. No urine<br/>for 24 hours?"}

  Urine -->|Yes| Stop
  Urine -->|No| Temp{"4. Core temp below 35°C?"}

  Temp -->|Yes| Stop
  Temp -->|No| Neuro{"5. Fainting or near-fainting,<br/>confusion, blurred vision?"}

  Neuro -->|Yes| Stop
  Neuro -->|No| Weight{"6. Weight down more than<br/>5 to 7% in 24 hours?"}

  Weight -->|Yes| Stop
  Weight -->|No| Fever{"7. Fever around 38.0°C (100.4°F),<br/>or no urine at all on waking?"}

  Fever -->|Yes| Assess["STOP AND ASSESS<br/>Read the trend of temperature,<br/>blood pressure and heart rate,<br/>then decide. 37.5°C is the<br/>normal acidotic fire."]
  Fever -->|No| Feel{"8. How bad does it feel?"}

  Feel -->|"Really bad, or excruciating pain"| Break["BREAK THE FAST<br/>Vitals fine is not enough on its own.<br/>Water first, then kompot."]
  Feel -->|"Rough but bearable"| Herx["HERXHEIMER REACTION<br/>(keep going)<br/><br/>• Flu-like aches and chills<br/>• Skin reactions / itching<br/>• Energy crash + brain fog<br/>• Mood shifts / emotional release<br/><br/>Action: walk, massage, move the whole system.<br/>Keep tracking HR, temperature, BP and urination."]

  style Stop fill:#7f1d1d,stroke:#ef4444,stroke-width:4px,color:#fca5a5
  style Assess fill:#713f12,stroke:#eab308,stroke-width:2px,color:#fde047
  style Break fill:#7c2d12,stroke:#f97316,stroke-width:2px,color:#fdba74
  style Herx fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac`;

export default function SymptomManagementPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Symptom Management", description: "A symptom-by-symptom guide to managing side effects during The Scorch Protocol: Herxheimer reactions, electrolytes, and more.", path: "/symptom-management", breadcrumbName: "Symptom Management" })} />
      <h1>Symptom Management Guide</h1>
      <KeyTakeaways points={[
        "Feeling worse during the fast is usually a Herxheimer reaction (die-off and detox), and the response is to go on walks, do massages and move the whole system, not to lie still and grit it out.",
        "If it starts to feel really bad, or the pain is excruciating, break the fast, even with clean vitals. As long as heart rate, temperature, blood pressure and urination look fine and the discomfort is bearable, you can continue.",
        "Break the fast, no judgement call, if your resting heart rate stays above 120 bpm or falls under 40, your systolic blood pressure stays under 80 or goes over 180 or drops more than 30 mmHg when you stand, you faint or nearly faint, you become confused or your vision blurs, you lose more than 5 to 7 percent of your weight in 24 hours, your core temperature falls below 35°C, or you have had no urine for 24 hours. A fever around 38.0°C (100.4°F), or waking with no urine at all, means stop and assess; 37.5°C is the normal acidotic fire.",
        "Insomnia that does not respond to magnesium, GABA, or melatonin is usually MCAS-driven histamine overload; the sleep section of the MCAS page covers what to do.",
        "Each of the Big 6 (fatigue, fungal issues, kidney, liver, blood sugar, muscle wasting) has a page that covers it; the list below points you there.",
      ]} />
      <p>
        The &ldquo;Big 6&rdquo; chronic health issues people often face during
        the Scorch Protocol each have a page that covers them, and the list
        below points you there. Under it are the full stop rules for the fast.
      </p>

      <div className="guiding-questions">
        <h3>Find Your Symptom</h3>
        <div className="question-item">
          <span className="question-label">Are you losing muscle too fast?</span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> Muscle wasting is the
          job hGH does in this protocol; when it enters, and why it waits, is
          on the <Link href="/hgh-therapy#timing">hGH Therapy</Link> page.
        </div>
        <div className="question-item">
          <span className="question-label">
            Is your energy still low after the fast?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> Coming out of the fast
          and the refeed still cold, with fatigue that does not lift, is what
          the T3 course is for; not everyone needs it, and if the course does
          little you wean off rather than climb. Who needs it is on the{" "}
          <Link href="/t3-therapy">T3 Therapy</Link> page.
        </div>
        <div className="question-item">
          <span className="question-label">
            Are you dealing with fungal infections (candida, mould)?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> The antifungal layer,
          and how it runs beside the fast, is on the{" "}
          <Link href="/viral-reactivation">Viral Reactivation</Link> page.
        </div>
        <div className="question-item">
          <span className="question-label">
            Do your kidneys hurt or are you not peeing enough?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> Kidney aches, stones and
          how little urine is normal in a dry fast are in the{" "}
          <Link href="/faq/kidneys">kidney FAQ</Link>; no urine for 24 hours is
          a stop rule (below).
        </div>
        <div className="question-item">
          <span className="question-label">
            Do you have liver pain or fatty liver?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> Liver pain, fatty liver
          and gallstones are in the <Link href="/faq/liver">liver FAQ</Link>;
          TUDCA, my standing liver support, starts weeks before the fast on the{" "}
          <Link href="/preparation">Preparation</Link> page.
        </div>
        <div className="question-item">
          <span className="question-label">
            Are you dealing with blood sugar crashes or weight gain?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> If you carry insulin
          resistance, the <Link href="/refeeding">Refeed</Link> page covers how
          it changes the carbohydrate you bring back.
        </div>
        <div className="question-item">
          <span className="question-label">
            Do you feel &ldquo;dead&rdquo; inside or always inflamed?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> A body that stays
          inflamed is stuck in its own defence; why, and the order the protocol
          uses to get it out, is on the{" "}
          <Link href="/healing-cycle">healing cycle</Link> page.
        </div>
        <div className="question-item">
          <span className="question-label">
            Can you not sleep no matter what you try?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> Insomnia that does not
          respond to magnesium, GABA or melatonin is usually MCAS-driven; what
          to try, in order, is in the{" "}
          <Link href="/mcas-and-dry-fasting#insomnia">sleep section of the MCAS page</Link>.
        </div>
        <div className="question-item">
          <span className="question-label">
            Are you puffy with high blood pressure after a long fast?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <Link href="/blog/cortisol-off-switch-after-extended-fasting">
            <strong>&ldquo;The Cortisol Off-Switch That Gets Stuck&rdquo;</strong>
          </Link>{" "}
          to learn why an enzyme called 11β-HSD2 sometimes fails to reset after
          extended fasting and how the refeed resets it, first with carbs and
          low-dose aspirin, then with T3 once the T3 phase begins.
        </div>
      </div>

      <h2>Herxheimer vs Warning Sign: How to Tell the Difference</h2>
      <p>
        Most symptoms during the fast or a T3 cycle are Herxheimer reactions:
        uncomfortable but expected die-off and detox effects. A small subset
        are true warning signs that require breaking the fast immediately.
        Knowing the difference is the single most important on-the-fly skill
        in the protocol, and my rule for it has two halves. First, the vitals:
        if any hard stop below is met, you stop, no debate, and two readings
        (a fever around 38.0&deg;C, no urine at all on waking) mean stop and
        assess. Second, how it feels: when you are feeling worse, go on walks,
        do massages,
        move the whole system (the protocol has a few hacks for this, see{" "}
        <Link href="/tips-and-tricks">Tips and Tricks</Link>). As long as heart
        rate, temperature, blood pressure and urination look fine and the pain
        is not excruciating, you can continue. If it starts to feel really bad,
        you break the fast, clean vitals or not. Use this triage chart before
        reaching for the phone or the food.
      </p>

      <div style={{ margin: "1.5rem 0" }}>
        <MermaidCharts charts={[herxDecisionTree]} />
        <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic", textAlign: "center" }}>
          Vitals come first: if a hard stop is met, break the fast; a fever around 38.0&deg;C, or no urine on waking, means stop and assess. If every check passes, how bad it feels decides the rest. Really bad, or excruciating pain, means break the fast. Rough but bearable means walk, massage, move, and keep tracking.
        </p>
      </div>

      <div className="guiding-questions box-danger">
        <h3 id="stop-rules">The Stop Rules, in Full</h3>
        <ul>
          <li>
            A resting heart rate sustained above 120 bpm, or under 40, breaks
            the fast.
          </li>
          <li>
            No urine for 24 hours is the hard stop that ends the fast; waking
            with no urine at all is a red flag to stop and assess. Twelve hours
            is not a rule: a full night&rsquo;s sleep can run that long.
          </li>
          <li>
            A fever around 38.0&deg;C (100.4&deg;F) means stop and assess, not
            an automatic end: read the trend of temperature, blood pressure and
            heart rate, then decide. 37.5&deg;C is the normal acidotic fire.
          </li>
          <li>A core temperature below 35&deg;C: stop.</li>
          <li>Fainting or near-fainting, confusion or blurred vision: stop.</li>
          <li>
            A sustained blood-pressure drop (systolic staying under 80), a
            systolic reading over 180, or a standing drop of more than 30 mmHg:
            stop.
          </li>
          <li>Weight loss over 5 to 7 percent in 24 hours: stop.</li>
        </ul>
        <p>
          On a T3 course the heart-rate line is lower: a resting heart rate
          sustained above 100 bpm means stop increasing, hold or lower the
          dose, and a temperature sustained above 99&deg;F means begin the
          taper. The rest of the T3 rules are on the{" "}
          <Link href="/t3-therapy">T3 Therapy</Link> page.
        </p>
        <p>
          In refeed days 1 to 14 a new symptom slows the ladder; it is not
          pushed through.
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>What the Evidence Says About the Stop Rules</h3>
        <p>
          The fasting clinics track the same readings. In the Buchinger cohort
          of 1,422 supervised fasts, blood pressure and pulse were recorded
          daily, heart rate did not rise, and serious events were rare
          (Wilhelmi de Toledo 2019); the German fasting guideline stops a fast
          for a higher-grade arrhythmia, for potassium below 3.0 or sodium
          below 125 mmol/L, or for circulatory depression lasting two days
          (heart rate under 45, systolic under 70), and otherwise treats a
          fasting crisis as a possible healing crisis (&Auml;GHE 2002). My
          resting heart rate stop of 120 bpm is stricter than that guideline;
          my 24-hour urine rule is looser than the kidney guideline, which
          counts no urine for 12 hours as stage 3 kidney injury (KDIGO 2012).
          The clinics also use a standing check, and so does my list: my stop
          is a drop of more than 30 mmHg on standing, while their standard
          early sign of low blood volume comes sooner, at a rise of 30 beats or
          a systolic drop of more than 20 mmHg (Freeman 2011; Sheldon 2015).
          Marked caveat: all of that was collected on water fasts with
          fluids; nobody has published stopping criteria for a dry fast, and no
          home reading captures electrolytes, which caused the one grade 4
          event in the supervised water-fasting chart review (Finnell 2018).
        </p>
      </div>

      <InterestingVideoBlock
        tweetUrl="https://x.com/whitesocksclips/status/2038856462072754376"
      />
      <RefeedPlanPromo source="symptom-management" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="symptom-management" sectionTitle="Symptom Management" />

      <ReferencesSection
        refs={[
          {
            citation:
              "Wilhelmi de Toledo F, Grundler F, Bergouignan A, Drinda S, Michalsen A. Safety, health improvement and well-being during a 4 to 21-day fasting period in an observational study including 1422 subjects. PLoS One, 2019;14(1):e0209353. PMID 30601864. DOI 10.1371/journal.pone.0209353.",
            href: "https://doi.org/10.1371/journal.pone.0209353",
            note: "the Buchinger cohort: daily blood pressure and pulse, heart rate unchanged, blood pressure down, serious events rare; water-type fasting with about three litres of fluid a day",
          },
          {
            citation:
              "Ärztegesellschaft Heilfasten und Ernährung (ÄGHE). Leitlinien zur Fastentherapie. Forschende Komplementärmedizin und Klassische Naturheilkunde, 2002;9:189-198.",
            href: "https://karger.com/fkm/article-pdf/9/3/189/4207114/000064270.pdf",
            note: "the only published numeric stop list for fasting: higher-grade arrhythmia, potassium below 3.0 or sodium below 125 mmol/L, circulatory depression for two days (heart rate under 45, systolic under 70); fasting crises treated as possible healing crises",
          },
          {
            citation:
              "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements, 2012;2(1):1-138.",
            href: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
            note: "no urine for 12 hours is stage 3 acute kidney injury; dry-fasting urine output sits at the oliguria line by design, so no urine at all is the signal",
          },
          {
            citation:
              "Sheldon RS, Grubb BP 2nd, Olshansky B, et al. 2015 Heart Rhythm Society expert consensus statement on the diagnosis and treatment of postural tachycardia syndrome, inappropriate sinus tachycardia, and vasovagal syncope. Heart Rhythm, 2015;12(6):e41-e63. PMID 25980576. DOI 10.1016/j.hrthm.2015.03.029.",
            href: "https://doi.org/10.1016/j.hrthm.2015.03.029",
            note: "restates the orthostatic definitions: a heart-rate rise of 30 beats or more on standing, a systolic fall of more than 20 mmHg; earlier signs of low blood volume than a resting reading",
          },
          {
            citation:
              "Freeman R, Wieling W, Axelrod FB, et al. Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome. Clin Auton Res, 2011;21(2):69-72. PMID 21431947.",
            href: "https://pubmed.ncbi.nlm.nih.gov/21431947/",
            note: "the consensus definitions: orthostatic hypotension is a systolic fall of more than 20 mmHg on standing, postural tachycardia a rise of 30 beats or more",
          },
          {
            citation:
              "Finnell JS, Saul BC, Goldhamer AC, Myers TR. Is fasting safe? A chart review of adverse events during medically supervised, water-only fasting. BMC Complement Altern Med, 2018;18(1):67. PMID 29458369. DOI 10.1186/s12906-018-2136-6.",
            href: "https://doi.org/10.1186/s12906-018-2136-6",
            note: "768 supervised water-only fasting visits: the one grade 4 event was low sodium presenting as speech difficulty; fasts were stopped on patient request or clinician judgement",
          },
        ]}
      />
    </>
  );
}
