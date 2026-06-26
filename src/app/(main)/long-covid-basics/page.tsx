import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";
import PaidContentBlock from "@/components/PaidContentBlock";
import MermaidCharts from "@/components/MermaidCharts";
import KeyTakeaways from "@/components/KeyTakeaways";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";

export const metadata: Metadata = {
  title: "Long Covid Treatment Options: The Foundational Stack | The Scorch Protocol",
  description:
    "First-line Long Covid treatment options: LDN, nattokinase, ivermectin, mast cell (MCAS) support, and lifestyle basics. The foundational supportive-care stack to try while building toward the full Scorch Protocol.",
  alternates: { canonical: "https://scorchprotocol.com/long-covid-basics" },
};

const cascadeCollapse = `graph TD
  Start["SARS-CoV-2 Infection"] --> Spike["Spike protein PERSISTS in tissue<br/>(skull marrow, meninges, vasculature<br/>up to 4 years post-infection)"]

  Spike --> Mito["Mitochondrial damage<br/>(zombie mitochondria:<br/>damaged but not cleared)"]
  Spike --> Vasc["Endothelial dysfunction<br/>(impaired nitric oxide)"]
  Spike --> Immune["Chronic immune activation<br/>(Th2 dominance, MCAS priming)"]

  Mito --> Energy["Cellular ATP collapse"]
  Vasc --> Auto["Autonomic dysregulation"]
  Immune --> Latent["Latent virus reactivation<br/>(EBV, HHV-6, HSV)"]

  Energy --> Thyroid["T3 cannot enter cells<br/>(tissue-level resistance)"]
  Auto --> POTS["POTS<br/>(baroreceptor failure)"]
  Latent --> MCAS["MCAS<br/>+ histamine flood"]

  Thyroid --> Sym["The chronic state you live in"]
  POTS --> Sym
  MCAS --> Sym

  Sym --> S1["Fatigue / PEM"]
  Sym --> S2["Brain fog"]
  Sym --> S3["Insomnia"]
  Sym --> S4["Cold + low temp"]
  Sym --> S5["Recurring infections"]

  style Start fill:#1e293b,stroke:#64748b,stroke-width:2px,color:#cbd5e1
  style Spike fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fca5a5
  style Sym fill:#7c2d12,stroke:#f97316,stroke-width:3px,color:#fdba74`;

export default function LongCovidBasicsPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Long Covid Treatment Options: The Foundational Stack", description: "First-line Long Covid treatment options: LDN, nattokinase, ivermectin, mast cell (MCAS) support, and lifestyle basics. The foundational supportive-care stack to try while building toward the full Scorch Protocol.", path: "/long-covid-basics", breadcrumbName: "Long Covid Basics", about: ["Long COVID"] })} />
      <h1>Long Covid Treatment Options: The Foundational Stack</h1>

      <KeyTakeaways points={[
        "This page covers the foundational supportive-care stack most informed clinicians use for Long Covid: anti-inflammatories, micro-clot support, mast cell calming, and lifestyle basics.",
        "The basics manage symptoms but do not address the root drivers (viral persistence, mitochondrial damage, suppressed thyroid axis), so stopping the stack usually brings symptoms back.",
        "Several items here, including LDN, ivermectin, sildenafil, and corticosteroids, require a prescriber or a pharmacist willing to work off-label.",
        "The Scorch Protocol targets the root cause; use this page as a starting floor while building toward it.",
      ]} />

      <div className="guiding-questions box-purple">
        <h3>Read This First</h3>
        <p>
          The information on this page is the foundational supportive-care
          stack for Long Covid. It is what most informed clinicians and
          patient communities have converged on for managing the disease:
          reducing inflammation, breaking up micro-clots, calming mast cell
          activity, and supporting the immune system. It works. A lot of
          people feel meaningfully better on this stack and it is a solid
          floor to build from.
        </p>
        <p>
          <strong>It is not a cure.</strong> The basics manage the disease,
          often indefinitely. Most people who rely on this approach end up
          on a permanent stack of medications and supplements they cannot
          taper, because the underlying drivers (viral persistence in nerve
          and vascular tissue, mitochondrial damage, suppressed thyroid
          axis) have not been addressed. Stop the medications and the
          symptoms return.
        </p>
        <p>
          <strong>
            The Scorch Protocol is the more effective and more permanent
            solution.
          </strong>{" "}
          It is designed to remove the root cause through deep autophagy
          (dry fasting), restore metabolic capacity (T3 therapy), and
          rebuild from the ground up so you can come off the medication
          stack entirely. Use the basics on this page while you build
          toward the protocol, or as a starting point if you are not yet
          ready for fasting. Then graduate to the real fix.
        </p>
        <p>
          For the recovery roadmap see the{" "}
          <a href="/decision-tree">Decision Logic Tree</a>, the{" "}
          <a href="/dry-fasting">Dry Fasting</a> page,{" "}
          <a href="/t3-therapy">T3 Therapy</a>, and the{" "}
          <a href="/viral-reactivation">Viral Reactivation</a> deep-dive.
        </p>
      </div>

      <h2>The Cascade That Got You Here</h2>
      <p>
        Before reaching for any supplement or medication, it helps to see
        the chain. Long Covid is not a single problem you can hit with a
        single tool. It is a cascade collapse with multiple parallel paths,
        all running from the same upstream source.
      </p>

      <div style={{ margin: "1.5rem 0" }}>
        <MermaidCharts charts={[cascadeCollapse]} />
        <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic", textAlign: "center" }}>
          The basics on this page target the SYMPTOM tier at the bottom. The Scorch Protocol targets the spike protein at the top and reverses the cascade from the source.
        </p>
      </div>

      <h2>First-Line Daily Foundations</h2>
      <p>
        These are the items most patients with Long Covid benefit from
        starting first. They are well-tolerated, broadly anti-inflammatory,
        and address the three main mechanical drivers (immune
        dysregulation, micro-clotting, oxidative stress).
      </p>

      <div className="guiding-questions box-blue">
        <h3>The Daily Stack</h3>
        <div className="question-item">
          <span className="question-label">Daily Intermittent Fasting</span>
          16:8 or one-meal-per-day eating window. The single most powerful
          lever you can pull before extended fasting. Triggers low-level
          autophagy and reduces systemic inflammation. Free.
        </div>
        <div className="question-item">
          <span className="question-label">Ivermectin</span>
          0.2 to 0.3 mg/kg daily, taken with a fatty meal for absorption.
          Binds spike protein and aids in its clearance. Independently
          anti-inflammatory. Many patients require chronic daily dosing
          rather than short courses.
        </div>
        <div className="question-item">
          <span className="question-label">Low-Dose Naltrexone (LDN)</span>
          1 to 4.5 mg daily, taken at night. Anti-inflammatory,
          neuromodulating, and pain-modulating. Often improves sleep on its
          own. Requires a compounding pharmacy and a prescriber willing to
          script off-label.
        </div>
        <div className="question-item">
          <span className="question-label">Nattokinase</span>
          100 to 200 mg (2,000 to 4,000 FU) twice daily, on an empty
          stomach. A fibrinolytic enzyme that breaks down the abnormal
          micro-clots associated with spike protein persistence. Hold 48
          hours before any surgical procedure.
        </div>
        <div className="question-item">
          <span className="question-label">Melatonin</span>
          1 to 5 mg before bed (some protocols use higher slow-release
          doses up to 20 mg). Strong antioxidant, anti-inflammatory, and
          sleep-restoring. Slow-release form is preferred for sustained
          overnight effect.
        </div>
        <div className="question-item">
          <span className="question-label">Magnesium</span>
          200 to 400 mg daily. Glycinate or threonate forms have the best
          tolerability and brain penetration. Stabilizes the nervous
          system, supports sleep, reduces muscle tension.
        </div>
        <div className="question-item">
          <span className="question-label">Vitamin D + K2</span>
          Vitamin D 5,000 IU per day, K2 (MK-7) 100 to 200 mcg per day.
          Modulates immune function and supports calcium handling. Test
          25-OH vitamin D every 3 months and target 60 to 80 ng/mL.
        </div>
        <div className="question-item">
          <span className="question-label">Low-Dose Methylene Blue</span>
          Highly individualized. Start very low (0.5 to 1 mg). Mitochondrial
          electron-transport support. Avoid combining with SSRI
          antidepressants (serotonin syndrome risk).
        </div>
        <div className="question-item">
          <span className="question-label">Resveratrol or Combination Flavonoid</span>
          250 to 500 mg per day. Anti-inflammatory and sirtuin-supportive.
          Quercetin combinations (often with bromelain) are interchangeable
          here.
        </div>
        <div className="question-item">
          <span className="question-label">Probiotics + Prebiotics</span>
          Daily. Multi-strain probiotic plus a prebiotic fiber source.
          Repairs gut barrier function, which is commonly disrupted in
          Long Covid and feeds back into systemic inflammation.
        </div>
        <div className="question-item">
          <span className="question-label">Sunlight / Photobiomodulation</span>
          30 minutes of midday outdoor sunlight, at minimum 3 times per
          week. Free, well-established mitochondrial signal. Red-light
          therapy panels work as a substitute when sunlight is unavailable.
        </div>
        <div className="question-item">
          <span className="question-label">Movement, Capped at HR &lt;110 bpm</span>
          No exercise that triggers post-exertional malaise. Walks, gentle
          yoga, and stretching only until your symptom load improves.
          Pushing past your tolerance reliably crashes you for days or
          weeks. Pacing is a non-negotiable discipline.
        </div>
      </div>

      <h2>Symptom-Specific Add-Ons</h2>
      <p>
        Layer these on top of the daily stack based on which symptoms are
        dominant for you. Most patients have several of these clusters
        active at once.
      </p>

      <div className="guiding-questions box-green">
        <h3>Targeted Support by Symptom</h3>
        <div className="question-item">
          <span className="question-label">Mast Cell Activation / Histamine Flares</span>
          H1 blocker (cetirizine 10 mg or loratadine 10 mg daily), H2
          blocker (famotidine 20 to 40 mg twice daily), quercetin 500 mg
          twice daily, luteolin if available. Trial a low-histamine diet
          for 2 to 4 weeks. Symptoms include flushing, hives, food
          sensitivities, racing heart after meals.
        </div>
        <div className="question-item">
          <span className="question-label">Micro-clots / Hypercoagulability</span>
          Nattokinase (already in daily stack) plus bromelain 500 mg twice
          daily. Lumbrokinase is an alternative if nattokinase causes
          stomach upset. Add omega-3 (EPA/DHA) 2 to 4 g per day.
        </div>
        <div className="question-item">
          <span className="question-label">POTS / Dysautonomia</span>
          Salt loading (3 to 5 g extra daily), oral electrolytes,
          compression garments to mid-thigh, slow position changes (sit on
          edge of bed for 60 seconds before standing). Gentle vagal
          exercises (humming, gargling, cold face splash). Discuss
          ivabradine or a low-dose beta-blocker with a cardiologist if
          tachycardia is severe. See the{" "}
          <a href="/decision-tree">Decision Logic Tree</a> for fasting
          considerations specific to POTS.
        </div>
        <div className="question-item">
          <span className="question-label">Brain Fog / Cognitive Symptoms</span>
          Low-dose methylene blue (already in stack), Lion&rsquo;s Mane
          mushroom 1 to 3 g per day, omega-3 at higher doses (3 to 4 g
          EPA/DHA). Hyperbaric oxygen if available (third-line tier
          below). Sleep quality matters more than any nootropic.
        </div>
        <div className="question-item">
          <span className="question-label">Fatigue / Post-Exertional Malaise</span>
          Pacing with strict heart-rate cap is the most powerful
          intervention. Add CoQ10 100 to 200 mg per day (ubiquinol form
          preferred), magnesium (already in stack), and a daily fasting
          window. Resist the urge to push through good days.
        </div>
        <div className="question-item">
          <span className="question-label">Sleep Disruption</span>
          Slow-release melatonin, magnesium glycinate, LDN often improves
          sleep architecture on its own. Standard sleep hygiene
          (consistent schedule, dark room, no screens 1 hour before bed,
          cool bedroom) matters more than any supplement.
        </div>
        <div className="question-item">
          <span className="question-label">GI Symptoms (Bloating, IBS, Sensitivities)</span>
          Probiotics + prebiotics (already in stack), bromelain with
          meals, low-FODMAP trial for 4 to 6 weeks if bloating is
          dominant. Always address mast cell activation in parallel
          because the gut and mast cells drive each other.
        </div>
      </div>

      <h2>Second-Line Adjuncts</h2>
      <p>
        When the first-line stack has been in place for 6 to 8 weeks and
        progress has plateaued, layer in these second-line items.
      </p>

      <div className="guiding-questions box-blue">
        <h3>Adjuncts for Stalled Progress</h3>
        <div className="question-item">
          <span className="question-label">N-Acetylcysteine (NAC)</span>
          600 to 1,800 mg per day. Glutathione precursor, mucolytic,
          anti-inflammatory. Useful when oxidative stress markers are
          elevated or persistent respiratory symptoms remain.
        </div>
        <div className="question-item">
          <span className="question-label">Omega-3 Fatty Acids (Higher Dose)</span>
          2 to 4 g EPA/DHA per day. Anti-inflammatory baseline. If already
          on for micro-clots, this is the same dose, not additive.
        </div>
        <div className="question-item">
          <span className="question-label">L-Arginine + L-Citrulline</span>
          Nitric oxide support. Improves endothelial function and
          microcirculation. Avoid if active herpesvirus reactivation is
          present (arginine fuels viral replication, see the{" "}
          <a href="/viral-reactivation">Viral Reactivation</a> page).
        </div>
        <div className="question-item">
          <span className="question-label">Sildenafil (Off-Label, Low-Dose)</span>
          Endothelial repair and microcirculation. Requires a willing
          prescriber. Often paired with L-arginine/citrulline above.
        </div>
        <div className="question-item">
          <span className="question-label">Vitamin C</span>
          1 to 3 g per day oral, divided doses. IV vitamin C in severe
          cases via specialist clinic.
        </div>
        <div className="question-item">
          <span className="question-label">Spermidine</span>
          250 mg per day, or wheat germ as a dietary source. Supports
          autophagy at a low daily level.
        </div>
        <div className="question-item">
          <span className="question-label">Black Seed Oil (Nigella sativa)</span>
          500 mg twice daily. Broad anti-inflammatory and mild antiviral
          activity.
        </div>
        <div className="question-item">
          <span className="question-label">Nervous System Regulation</span>
          Vagal exercises, breathwork, polyvagal therapy, daily meditation.
          Non-pharmacological and consistently underrated. The autonomic
          nervous system drives a lot of the worst symptoms (POTS, sleep,
          GI, anxiety) and direct training meaningfully shifts it.
        </div>
      </div>

      <h2>Third-Line / Last-Resort Tier</h2>
      <p>
        Reserved for refractory cases when the first and second-line tiers
        are insufficient. These options require specialist supervision,
        significant time, and significant cost.
      </p>

      <div className="guiding-questions box-red">
        <h3>Refractory-Case Tier</h3>
        <div className="question-item">
          <span className="question-label">Hyperbaric Oxygen Therapy (HBOT)</span>
          40 sessions at 2.0 ATA. Best evidence for brain fog, fatigue,
          and microvascular healing. Time and cost intensive. Worth
          considering when cognitive symptoms dominate.
        </div>
        <div className="question-item">
          <span className="question-label">Low-Dose Corticosteroids</span>
          Prednisolone or methylprednisolone 10 mg per day for 6 weeks if
          an organizing pneumonia or persistent inflammatory pattern is
          present on imaging or bloodwork. Short courses only. Not a
          long-term strategy.
        </div>
        <div className="question-item">
          <span className="question-label">Hydroxychloroquine</span>
          Reserved for refractory inflammatory phenotype, prescriber
          managed, eye exam at baseline and annually. Not first-line for
          most patients.
        </div>
        <div className="question-item">
          <span className="question-label">Non-Invasive Brain Stimulation (tDCS / TMS)</span>
          Specialist clinic only. Some emerging evidence for cognitive
          symptoms and mood when conventional approaches have failed.
        </div>
      </div>

      <h2>Why This Is Not the Full Answer</h2>
      <div className="guiding-questions box-purple">
        <h3>The Ceiling of the Basics, and the Path Past It</h3>
        <p>
          Everything on this page reduces symptoms and inflammation. Almost
          none of it addresses the root drivers: viral persistence in
          nerve and vascular tissue, mitochondrial damage, the suppressed
          thyroid axis that locks the whole system in a low-energy state,
          and the lack of deep autophagic clearance. Symptom management
          can hold you steady, but it cannot finish the job. You either
          stay on the stack or the symptoms come back.
        </p>
        <p>
          The Scorch Protocol is built around removing those root drivers:
        </p>
        <ul>
          <li>
            <a href="/dry-fasting">Dry fasting</a> drives the deepest
            autophagy the human body is capable of, clearing viral
            reservoirs and damaged mitochondria from the inside out.
          </li>
          <li>
            The <a href="/refeeding">water fast bridge and controlled
            refeed</a> close the vulnerability window so the cleared
            reservoirs do not get re-seeded.
          </li>
          <li>
            <a href="/viral-reactivation">Antiviral coverage</a> (lysine,
            monolaurin, acyclovir, ivermectin) holds the line during the
            transition.
          </li>
          <li>
            <a href="/t3-therapy">T3 therapy</a> restores the suppressed
            thyroid axis and the cellular energy floor, so the immune
            system can finish its repair work.
          </li>
          <li>
            <a href="/hgh-therapy">hGH therapy</a> rebuilds tissue at the
            structural level once the inflammation has cleared.
          </li>
        </ul>
        <p>
          If you start with the basics on this page, you are doing the
          right thing. Just understand the ceiling. When you are stable
          enough, the protocol is the next step. Most patients who
          complete it taper off the entire daily medication stack within
          6 to 12 months. That is the difference between management and
          recovery.
        </p>
        <p>
          Start with the <a href="/decision-tree">Decision Logic Tree</a>{" "}
          to see where you are in the protocol and what your next step
          should be.
        </p>
      </div>

      <p style={{ fontSize: "0.85em", opacity: 0.7, marginTop: "2rem" }}>
        <em>
          Medical disclaimer: this page is educational. None of it is
          medical advice. Discuss any new medication, supplement, or major
          dietary change with a licensed healthcare provider familiar with
          your case before starting.
        </em>
      </p>

      <RefeedPlanPromo source="long-covid-basics" />
      <GuidanceBox />
      <PaidContentBlock
        sectionSlug="long-covid-basics"
        sectionTitle="Dealing with Long Covid Basics"
      />
    </>
  );
}
