import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd, faqPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Dry Fasting and POTS: Is It Safe, and Can It Help? | The Scorch Protocol",
  description:
    "Dry fasting with POTS and dysautonomia: why fluid shifts and T3 can backfire, the precautions that matter, and how the Scorch Protocol approaches POTS as part of the Long Covid cascade.",
  alternates: { canonical: "https://scorchprotocol.com/dry-fasting-for-pots" },
};

const faqItems = [
  {
    question: "Can you dry fast with POTS?",
    answer:
      "Possibly, but only with medical clearance and close supervision first. POTS is listed as a get-clearance-first condition for the Scorch Protocol because fluid shifts and T3 therapy can provoke unpredictable responses. The Scorch Protocol has not studied POTS as a standalone population. If you have POTS and are considering dry fasting, talk to a physician who knows your case before starting anything.",
  },
  {
    question: "Does fasting help POTS?",
    answer:
      "The Scorch Protocol's position is that POTS, when it appears in the context of Long Covid, is downstream of autonomic dysregulation caused by endothelial dysfunction and viral persistence. Addressing those upstream drivers through autophagy, T3 restoration, and the cascade-reversal approach may relieve POTS symptoms over time. However, this is a theory about mechanism, not a documented outcome in a POTS-specific study. Do not fast to treat POTS without a doctor involved.",
  },
  {
    question: "Is T3 safe with POTS?",
    answer:
      "T3 therapy needs extra caution in the presence of POTS or dysautonomia. T3 affects heart rate, blood pressure, and autonomic tone. For someone with an already-dysregulated autonomic nervous system, those effects are harder to predict. The Scorch Protocol lists POTS as a condition requiring a doctor's clearance and supervision before starting T3 therapy.",
  },
];

export default function DryFastingForPotsPage() {
  return (
    <>
      <JsonLd
        data={[
          ...medicalWebPageLd({
            name: "Dry Fasting and POTS: Is It Safe, and Can It Help?",
            description:
              "Dry fasting with POTS and dysautonomia: why fluid shifts and T3 can backfire, the precautions that matter, and how the Scorch Protocol approaches POTS as part of the Long Covid cascade.",
            path: "/dry-fasting-for-pots",
            breadcrumbName: "Dry Fasting and POTS",
            about: ["Postural orthostatic tachycardia syndrome", "Long COVID"],
          }),
          faqPageLd(faqItems),
        ]}
      />

      <h1>Dry Fasting and POTS (Dysautonomia)</h1>

      <KeyTakeaways
        points={[
          "POTS is not an automatic disqualifier for the Scorch Protocol, but it is a get-clearance-first condition. Do not attempt dry fasting or T3 therapy with POTS without a doctor's supervision.",
          "In the Long Covid cascade, POTS is understood as baroreceptor failure driven by autonomic dysregulation, which is itself downstream of endothelial dysfunction caused by viral persistence.",
          "Dry fasting removes fluid volume rapidly. That alone is a significant hemodynamic stress for a POTS patient whose blood volume is already poorly regulated.",
          "T3 therapy affects heart rate, blood pressure, and autonomic tone. With dysautonomia already present, those effects are harder to predict.",
          "The supportive stack for POTS (salt loading, electrolytes, compression, vagal exercises) should be in place before considering any fasting protocol.",
          "There is no POTS-specific outcome data from the Scorch Protocol. The case for trying it rests on mechanism, not studied population.",
        ]}
      />

      <h2>Read This First: POTS Needs Medical Clearance</h2>

      <div className="guiding-questions box-warning">
        <h3>POTS is a get-clearance-first condition for this protocol</h3>
        <p>
          The Scorch Protocol <Link href="/contraindications">Contraindications page</Link> lists
          POTS and dysautonomia explicitly under conditions that require a doctor&rsquo;s
          clearance and supervision before starting. The exact language: &ldquo;Fluid shifts and
          T3 can provoke unpredictable responses. Proceed only with guidance and close
          monitoring.&rdquo;
        </p>
        <p>
          This is not a soft suggestion. A dry fast removes fluid volume quickly. A person with
          POTS is already running a poorly regulated blood volume and a baroreceptor system that
          fires incorrectly when you stand up. Adding a rapid fluid shift on top of that, without
          a physician tracking your hemodynamics, is the wrong order of operations.
        </p>
        <p>
          If you have POTS and are asking whether this protocol is for you: it may be, eventually.
          But clearance and supervision come first. Read the full <Link href="/contraindications">contraindications page</Link> before
          going further.
        </p>
      </div>

      <h2>Where POTS Comes From in Long Covid</h2>

      <p>
        POTS that develops after a Covid infection is not a separate condition sitting beside
        Long Covid. It is one of the recognizable downstream endpoints of the same cascade.
      </p>

      <p>
        The chain, as the Scorch Protocol understands it, runs like this. The spike protein
        persists in tissue after infection. That persistence drives endothelial dysfunction,
        meaning the lining of blood vessels stops working normally. Endothelial dysfunction
        impairs nitric oxide production and disrupts microcirculation. The autonomic nervous
        system, which regulates heart rate and blood pressure in response to position changes,
        depends on reliable vascular signaling. When the endothelium is damaged, the
        baroreceptors that tell the heart how fast to beat when you stand up start failing.
        The result is POTS: a racing heart on standing, dizziness, and the whole set of
        dysautonomia symptoms.
      </p>

      <p>
        This framing matters because it changes the question. The question is not &ldquo;how
        do I manage POTS.&rdquo; The question is &ldquo;how do I remove the upstream driver
        that is keeping my endothelium damaged and my autonomic system dysregulated.&rdquo; The
        Scorch Protocol is built around that second question.
      </p>

      <div className="guiding-questions box-info">
        <h3>The Long Covid cascade: where POTS sits</h3>
        <div className="question-item">
          <span className="question-label">Spike protein persistence</span>
          Detected in skull marrow, meninges, and vasculature up to four years post-infection
          in some patients.
        </div>
        <div className="question-item">
          <span className="question-label">Endothelial dysfunction</span>
          Impaired nitric oxide production, disrupted microcirculation.
        </div>
        <div className="question-item">
          <span className="question-label">Autonomic dysregulation</span>
          The vascular signaling that baroreceptors depend on becomes unreliable.
        </div>
        <div className="question-item">
          <span className="question-label">POTS</span>
          Baroreceptor failure: the heart cannot correctly regulate its rate in response to
          position changes.
        </div>
      </div>

      <p>
        The other parallel threads in the cascade (mitochondrial damage leading to cellular
        energy collapse, latent virus reactivation, MCAS) all interact with autonomic
        function as well. POTS patients often also carry fatigue, brain fog, and temperature
        dysregulation for related reasons.
      </p>

      <h2>Why Fasting Is Risky With POTS</h2>

      <p>
        The risks are real and worth understanding before considering whether to proceed.
      </p>

      <div className="guiding-questions box-warning">
        <h3>Specific risk factors for POTS patients</h3>
        <div className="question-item">
          <span className="question-label">Rapid fluid volume loss</span>
          Dry fasting removes fluid volume quickly. During even a short fast, ADH (antidiuretic
          hormone) rises to limit urine output, but blood volume is still concentrated and the
          available circulating fluid decreases. For someone whose blood pressure and heart rate
          are already poorly regulated when upright, that volume contraction is a direct
          hemodynamic stress.
        </div>
        <div className="question-item">
          <span className="question-label">Electrolyte shifts</span>
          The kidney FAQ documents that sodium excretion drops substantially during dry fasting
          (the kidneys conserve it), and potassium handling shifts depending on fast duration.
          For a person with dysautonomia, even moderate electrolyte shifts can worsen
          lightheadedness, palpitations, and presyncopal episodes.
        </div>
        <div className="question-item">
          <span className="question-label">T3 and cardiac effects</span>
          T3 therapy affects heart rate, cardiac output, and autonomic tone. In a healthy
          thyroid axis those effects are predictable and therapeutic. In a dysregulated autonomic
          system they can be harder to manage. T3 is listed explicitly as needing extra caution
          with arrhythmia history and dysautonomia.
        </div>
        <div className="question-item">
          <span className="question-label">Orthostatic stress</span>
          The stop-signals for any Scorch Protocol fast include sustained heart rate above 120
          bpm, blood pressure below 80 or above 180 mmHg, and syncope or an orthostatic drop of
          more than 30 mmHg systolic. POTS patients are closer to those thresholds on a baseline
          day, let alone during a fast.
        </div>
      </div>

      <p>
        None of this means fasting is impossible with POTS. It means the margin for error is
        narrower, the monitoring requirements are higher, and the preparation steps cannot be
        skipped.
      </p>

      <h2>Why It May Also Help: The Root-Cause Case</h2>

      <p>
        This section is framed carefully because there is no POTS-specific outcome data from
        the Scorch Protocol. What follows is the mechanistic reasoning, not a promise.
      </p>

      <p>
        The supportive-care approach to POTS (salt loading, compression garments, beta-blockers,
        ivabradine) manages the symptom but does not address the upstream driver. If POTS in
        Long Covid is downstream of endothelial dysfunction caused by spike protein persistence,
        and if deep autophagy clears those viral reservoirs, and if T3 therapy restores the
        cellular energy floor that allows vascular repair, then addressing those root causes
        could in principle allow the autonomic system to recalibrate over time.
      </p>

      <p>
        That is a chain of &ldquo;if&rdquo; statements. The protocol does not have data that
        isolates POTS as an outcome. Some people who came to Yannick had dysautonomia as part
        of their Long Covid picture, and the overall protocol trajectory showed improvement in
        their symptom load. But POTS was not tracked as a separate endpoint, and individual
        results varied.
      </p>

      <div className="guiding-questions box-info">
        <h3>The mechanistic argument, stated honestly</h3>
        <p>
          The Scorch Protocol is not designed to treat POTS. It is designed to remove the root
          drivers of Long Covid: viral persistence, mitochondrial damage, and suppressed thyroid
          axis. If your POTS is downstream of those drivers (which is likely if it appeared after
          a Covid infection), reversing the cascade from the top should relieve pressure on the
          whole system, including the autonomic dysregulation.
        </p>
        <p>
          The foundational supportive stack on the <Link href="/long-covid-basics">Long Covid basics page</Link> addresses
          POTS symptoms in the meantime: salt loading, electrolytes, compression to mid-thigh,
          slow position changes, and vagal exercises. Discuss ivabradine or a low-dose
          beta-blocker with a cardiologist if tachycardia is severe.
        </p>
        <p>
          This is the realistic framing: use the supportive stack to stabilize, use medical
          clearance to gate the decision, and if cleared, approach the protocol as a potential
          root-cause intervention with appropriate caution. Do not approach it as a POTS cure.
        </p>
      </div>

      <h2>Precautions If You Proceed</h2>

      <p>
        If you have obtained medical clearance and a physician is supervising, these are the
        additional precautions that apply on top of the standard protocol structure.
      </p>

      <div className="guiding-questions box-info">
        <h3>Clearance, monitoring, and gradual approach</h3>
        <div className="question-item">
          <span className="question-label">Get bloodwork and a cardiac assessment first</span>
          The standard preparation panel applies. For POTS specifically, your physician should
          assess baseline orthostatic vitals (lying, sitting, and standing blood pressure and
          heart rate) before you begin anything. This gives you a real baseline to compare
          against during and after.
        </div>
        <div className="question-item">
          <span className="question-label">Check baseline temperature</span>
          The <Link href="/decision-tree">Decision Logic Tree</Link> requires a baseline morning
          temperature before fasting. Long Covid and ME/CFS patients often run cold because the
          thyroid axis is suppressed. Below 97.8&deg;F means T3 therapy should precede fasting.
          Below 96&deg;F means T3 and high calories are mandatory first. This rule applies even
          more strictly with POTS present.
        </div>
        <div className="question-item">
          <span className="question-label">Build gradually, starting shorter</span>
          The standard protocol builds from shorter fasts toward longer ones. With POTS, there
          is more reason to start at the shorter end, monitor your orthostatic response on
          breaking the fast, and extend only when you have demonstrated tolerance. Do not start
          with a multi-day fast.
        </div>
        <div className="question-item">
          <span className="question-label">Know your stop signals</span>
          The protocol&rsquo;s stop signals include: resting heart rate sustained above 120 bpm,
          systolic blood pressure below 80 or above 180 mmHg, syncope or an orthostatic drop of
          more than 30 mmHg, no urination for 24 hours, sustained fever above 38.0&deg;C, or
          severe confusion. With POTS, heart rate and orthostatic thresholds deserve extra
          vigilance. Break the fast immediately if any signal is met. See the full
          <Link href="/decision-tree"> Decision Logic Tree</Link> for the complete triage chart.
        </div>
        <div className="question-item">
          <span className="question-label">Rehydrate slowly</span>
          On breaking a dry fast, do not rush fluid intake. The kidney guidance is to sip around
          100 ml per hour for the first several hours. For POTS, this also applies to upright
          posture: sit at the edge before standing, and give the body time to adjust before
          walking.
        </div>
      </div>

      <h2>The Supportive Stack First</h2>

      <p>
        Before considering any fasting protocol, the standard POTS supportive measures should
        already be in place and working. These come from the <Link href="/long-covid-basics">Long Covid basics page</Link>.
      </p>

      <div className="guiding-questions box-info">
        <h3>POTS support: the foundation before fasting</h3>
        <div className="question-item">
          <span className="question-label">Salt loading and electrolytes</span>
          3 to 5 g extra sodium daily, with oral electrolyte support. The kidneys conserve sodium
          aggressively during dry fasting, but on eating days you need to maintain adequate
          circulating volume. This is especially true for POTS.
        </div>
        <div className="question-item">
          <span className="question-label">Compression garments</span>
          Compression to mid-thigh reduces venous pooling in the legs, which is one of the main
          drivers of the orthostatic tachycardia in POTS. Wear them on eating days and during the
          preparation and refeeding phases.
        </div>
        <div className="question-item">
          <span className="question-label">Slow position changes</span>
          Sit on the edge of the bed for 60 seconds before standing. Move from lying to sitting
          to standing in stages, not all at once. This gives the baroreceptors time to try to
          compensate.
        </div>
        <div className="question-item">
          <span className="question-label">Vagal exercises</span>
          Humming, gargling, a cold face splash. These are low-effort ways to directly activate
          the vagus nerve and improve parasympathetic tone, which is typically depressed in
          dysautonomia.
        </div>
        <div className="question-item">
          <span className="question-label">Blood volume support</span>
          The mindfulness and neurology page notes that chronic illness frequently comes with low
          blood volume, contributing to lightheadedness and brain fog. Restoring blood volume is
          a prerequisite for proper tissue and brain perfusion. Adequate hydration and sodium
          intake on non-fasting days matter here.
        </div>
        <div className="question-item">
          <span className="question-label">Discuss medication with your cardiologist</span>
          If tachycardia is severe, ivabradine or a low-dose beta-blocker may be appropriate.
          This is a prescriber decision, not a protocol decision. Any medication adjustment must
          be coordinated with your physician before and during a fasting protocol.
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>

      <div className="guiding-questions">
        <div className="question-item">
          <h3>Can you dry fast with POTS?</h3>
          <p>
            Possibly, but only with medical clearance and close supervision first. POTS is listed
            as a get-clearance-first condition for the Scorch Protocol because fluid shifts and T3
            therapy can provoke unpredictable responses. The Scorch Protocol has not studied POTS
            as a standalone population. If you have POTS and are considering dry fasting, talk to
            a physician who knows your case before starting anything.
          </p>
        </div>
        <div className="question-item">
          <h3>Does fasting help POTS?</h3>
          <p>
            The Scorch Protocol&rsquo;s position is that POTS, when it appears in the context of
            Long Covid, is downstream of autonomic dysregulation caused by endothelial dysfunction
            and viral persistence. Addressing those upstream drivers through autophagy, T3
            restoration, and the cascade-reversal approach may relieve POTS symptoms over time.
            However, this is a theory about mechanism, not a documented outcome in a
            POTS-specific study. Do not fast to treat POTS without a doctor involved.
          </p>
        </div>
        <div className="question-item">
          <h3>Is T3 safe with POTS?</h3>
          <p>
            T3 therapy needs extra caution in the presence of POTS or dysautonomia. T3 affects
            heart rate, blood pressure, and autonomic tone. For someone with an already-dysregulated
            autonomic nervous system, those effects are harder to predict. The Scorch Protocol lists
            POTS as a condition requiring a doctor&rsquo;s clearance and supervision before starting
            T3 therapy.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "0.85em", opacity: 0.7, marginTop: "2rem" }}>
        <em>
          Medical disclaimer: this page is educational. It is not medical advice and cannot
          account for your full history. Discuss any fasting protocol, medication, or supplement
          change with a licensed healthcare provider who knows your case before starting.
        </em>
      </p>

      <RefeedPlanPromo source="dry-fasting-for-pots" />
      <GuidanceBox />
    </>
  );
}
