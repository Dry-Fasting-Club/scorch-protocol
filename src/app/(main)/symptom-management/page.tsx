import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";
import PaidContentBlock from "@/components/PaidContentBlock";
import InterestingVideoBlock from "@/components/InterestingVideoBlock";
import MermaidCharts from "@/components/MermaidCharts";
import KeyTakeaways from "@/components/KeyTakeaways";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";

export const metadata: Metadata = {
  title: "Symptom Management",
  description:
    "A symptom-by-symptom guide to managing side effects during The Scorch Protocol: Herxheimer reactions, electrolytes, and more.",
  alternates: { canonical: "https://scorchprotocol.com/symptom-management" },
};

const herxDecisionTree = `graph TD
  Start["Concerning symptom appears<br/>during the fast or T3 cycle"] --> Vital{"Check vital signs in order"}

  Vital --> HR{"1. Resting HR > 120 bpm<br/>SUSTAINED?"}
  HR -->|Yes| Stop["STOP — break the fast<br/>with coconut water"]
  HR -->|No| Urine{"2. No urination<br/>for 24 hours?"}

  Urine -->|Yes| Stop
  Urine -->|No| Temp{"3. Core temp below 35°C<br/>OR sustained fever above 38.5°C?"}

  Temp -->|Yes| Stop
  Temp -->|No| Neuro{"4. Severe confusion,<br/>fainting, vision changes?"}

  Neuro -->|Yes| Stop
  Neuro -->|No| Herx["HERXHEIMER REACTION<br/>(safe to push through)<br/><br/>• Flu-like aches and chills<br/>• Skin reactions / itching<br/>• Energy crash + brain fog<br/>• Mood shifts / emotional release<br/><br/>Action: hydrate (if water fast),<br/>rest, lie still, wait it out"]

  style Stop fill:#7f1d1d,stroke:#ef4444,stroke-width:4px,color:#fca5a5
  style Herx fill:#14532d,stroke:#22c55e,stroke-width:2px,color:#86efac`;

export default function SymptomManagementPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Symptom Management", description: "A symptom-by-symptom guide to managing side effects during The Scorch Protocol: Herxheimer reactions, electrolytes, and more.", path: "/symptom-management", breadcrumbName: "Symptom Management" })} />
      <h1>Symptom Management Guide</h1>
      <KeyTakeaways points={[
        "Most symptoms during the fast or a T3 cycle are Herxheimer reactions (die-off and detox) that you push through, not emergencies.",
        "Break the fast immediately if resting heart rate exceeds 120 bpm, you have had no urination for 24 hours, core temp is below 35C or above 38.5C, or you have severe confusion or fainting.",
        "Insomnia that does not respond to magnesium, GABA, or melatonin is usually MCAS-driven histamine overload, and requires cyproheptadine or ketotifen rather than standard sleep aids.",
        "Each of the Big 6 (fatigue, fungal issues, kidney, liver, blood sugar, muscle wasting) has a specific protocol fix covered in the sections below.",
      ]} />
      <p>
        This is a library of ways to handle the &ldquo;Big 6&rdquo; chronic
        health issues people often face during the Scorch Protocol.
      </p>

      <div className="guiding-questions">
        <h3>Find Your Symptom</h3>
        <div className="question-item">
          <span className="question-label">Are you losing muscle too fast?</span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Muscle Wasting&rdquo;</strong> below to learn about HGH
          and Amino Acids.
        </div>
        <div className="question-item">
          <span className="question-label">
            Is your energy low even with T3?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> Check{" "}
          <strong>&ldquo;Low Energy&rdquo;</strong> and{" "}
          <strong>&ldquo;Cell Power&rdquo;</strong> to learn about adrenal
          support and cell electricity.
        </div>
        <div className="question-item">
          <span className="question-label">
            Are you struggling with brain fog or fungal infections?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Fungal Issues&rdquo;</strong> to learn about raising
          your body temperature.
        </div>
        <div className="question-item">
          <span className="question-label">
            Do your kidneys hurt or are you not peeing enough?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Kidney Issues&rdquo;</strong> to learn about protecting
          your kidneys and preventing stones.
        </div>
        <div className="question-item">
          <span className="question-label">
            Do you have liver pain or fatty liver?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Liver Issues&rdquo;</strong> to learn about TUDCA and
          dry fasting.
        </div>
        <div className="question-item">
          <span className="question-label">
            Are you dealing with blood sugar crashes or weight gain?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Blood Sugar Problems&rdquo;</strong> for fasting and
          repair strategies.
        </div>
        <div className="question-item">
          <span className="question-label">
            Do you feel &ldquo;dead&rdquo; inside or always inflamed?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Cell Power&rdquo;</strong> to learn how to recharge
          your body&rsquo;s electricity.
        </div>
        <div className="question-item">
          <span className="question-label">
            Can you not sleep no matter what you try?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <strong>&ldquo;Insomnia &amp; Sleep Problems&rdquo;</strong> below.
          Severe insomnia that does not respond to natural sleep aids is one of
          the clearest signs of MCAS-driven neurological dysfunction and a
          direct indicator that the Scorch Protocol is needed.
        </div>
        <div className="question-item">
          <span className="question-label">
            Are you puffy with high blood pressure after a long fast?
          </span>
          If <strong>YES</strong>{" "}
          <span className="action-arrow">&rarr;</span> See{" "}
          <a href="/blog/cortisol-off-switch-after-extended-fasting">
            <strong>&ldquo;The Cortisol Off-Switch That Gets Stuck&rdquo;</strong>
          </a>{" "}
          to learn why an enzyme called 11β-HSD2 sometimes fails to reset after
          extended fasting and how the refeed stack of carbs, T3, and low-dose
          aspirin fixes it.
        </div>
      </div>

      <h2>Herxheimer vs Warning Sign: How to Tell the Difference</h2>
      <p>
        Most symptoms during the fast or a T3 cycle are Herxheimer reactions
        &mdash; uncomfortable but expected die-off and detox effects you push
        through. A small subset are true warning signs that require breaking
        the fast immediately. Knowing the difference is the single most
        important on-the-fly skill in the protocol. Use this triage chart
        before reaching for the phone or the food.
      </p>

      <div style={{ margin: "1.5rem 0" }}>
        <MermaidCharts charts={[herxDecisionTree]} />
        <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "0.5rem", fontStyle: "italic", textAlign: "center" }}>
          Vital signs override subjective discomfort every time. If all four checks pass, what you are feeling is Herxheimer and is part of the work. If any one fails, stop.
        </p>
      </div>

      <h2>1. Low Energy &amp; Fatigue</h2>
      <p>
        <strong>The Cause:</strong> Your body&rsquo;s &ldquo;power
        plants&rdquo; (mitochondria) are sleeping or have low electrical power.
      </p>
      <table>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>
              <strong>What to Eat</strong>
            </td>
            <td>
              Eat foods that give you clean energy and help your body process
              sugar.
            </td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>
              <strong>Adrenal Support</strong>
            </td>
            <td>
              Help your stress glands by getting enough Vitamin C and salt, and
              by reducing stress.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Protocol Fixes</strong>
            </td>
            <td>
              <ul>
                <li>
                  <strong>Dry Fasting:</strong> Cleans out weak &ldquo;power
                  plants&rdquo; (mitochondria).
                </li>
                <li>
                  <strong>T3 Therapy:</strong> Directly speeds up your
                  metabolism and energy production.
                </li>
                <li>
                  <strong>Recharging:</strong> Being outside in the sun and
                  grounding helps increase your body&rsquo;s &ldquo;battery&rdquo;
                  charge.
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>2. Fungal Issues (Candida/Mold)</h2>
      <p>
        <strong>The Cause:</strong> A weak immune system and a low body
        temperature let fungus grow too easily.
      </p>
      <ul>
        <li>
          <strong>T3 Therapy:</strong> Raising your body temperature to
          37&deg;C (98.6&deg;F) makes it hard for fungus to live.
        </li>
        <li>
          <strong>Immune Restart:</strong> Building a stronger immune system
          helps your body fight off fungus naturally.
        </li>
        <li>
          <strong>Supplements:</strong>
          <ul>
            <li>
              <strong>Fluconazole:</strong> A strong medicine used for several
              months for serious fungal problems.
            </li>
            <li>
              <strong>Monolaurin:</strong> A natural supplement from coconut
              that helps the immune system and the liver.
            </li>
          </ul>
        </li>
      </ul>

      <h2>3. Kidney Issues</h2>
      <p>
        <strong>The Cause:</strong> Your kidneys are working hard to clean out
        toxins and may need help with blood flow.
      </p>
      <ul>
        <li>
          <strong>T3 Therapy:</strong> Helps blood flow through the kidneys so
          they can filter better.
        </li>
        <li>
          <strong>Lemon Water:</strong> Drink lemon water (when not dry fasting)
          to help prevent kidney stones.
        </li>
        <li>
          <strong>Potassium:</strong> Helps keep your pee healthy and prevents
          crystals from forming.
        </li>
        <li>
          <strong>Dry Fasting:</strong> Can help the kidneys heal and clean
          themselves out if done correctly.
        </li>
      </ul>

      <h2>4. Liver Issues</h2>
      <p>
        <strong>The Cause:</strong> A fatty liver or being overwhelmed by toxins
        during healing.
      </p>
      <ul>
        <li>
          <strong>Dry Fasting:</strong> The best way to burn fat out of the
          liver.
        </li>
        <li>
          <strong>TUDCA:</strong> A supplement that helps thin out bile and
          protects your liver cells. This is very important.
        </li>
        <li>
          <strong>T3 Therapy:</strong> Speeds up the liver so it can process fat
          and energy faster.
        </li>
      </ul>

      <h2>5. Blood Sugar Problems (Insulin Resistance)</h2>
      <p>
        <strong>The Cause:</strong> Your cells are &ldquo;refusing&rdquo; to
        take in sugar, which leads to high blood sugar and inflammation.
      </p>
      <ul>
        <li>
          <strong>Diet:</strong> You can use a low-carb diet for quick results,
          but the real goal is to fix how your body uses energy.
        </li>
        <li>
          <strong>Fasting:</strong> Deep fasting cleans out the cells and helps
          them start accepting sugar again. You must eventually re-introduce
          carbs to fully heal this.
        </li>
      </ul>

      <h2>6. Muscle Wasting</h2>
      <p>
        <strong>The Cause:</strong> Your body is breaking down muscle instead of
        fat because you are sick or your immune system is weak.
      </p>
      <ul>
        <li>
          <strong>HGH (Human Growth Hormone):</strong>
          <ul>
            <li>Helps stop muscle loss and helps your muscles grow.</li>
            <li>
              Helps rebuild your immune system (especially the thymus gland).
            </li>
            <li>
              <strong>Note:</strong> We use very low doses just to keep your
              muscle, not for bodybuilding.
            </li>
          </ul>
        </li>
        <li>
          <strong>Amino Acids:</strong> Taking certain protein supplements
          (Amino Acids) helps tell your body to keep its muscle.
        </li>
      </ul>

      <h2>7. Cell Power (Electricity)</h2>
      <p>
        <strong>The Cause:</strong> Healthy cells are like batteries: they
        need a strong electrical charge to work. When you are sick, your cells
        lose their charge. This means they can&rsquo;t clean themselves out or
        heal properly.
      </p>

      <div className="guiding-questions box-info">
        <h3>The 3 Best Ways to Recharge Your Body</h3>
        <p>
          While things like walking barefoot on grass (grounding) are good,
          these three methods are <strong>much stronger</strong> for fixing your
          body&rsquo;s electricity:
        </p>
      </div>

      <table>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>
              <strong>1. Electric Healing</strong>
            </td>
            <td>
              <strong>How it Works:</strong> Using special machines to send
              gentle electrical currents into your body. This can
              &ldquo;force&rdquo; your cells to recharge, which tells them to
              start healing and building new tissue.
            </td>
          </tr>
          <tr>
            <td>
              <strong>2. Dry Fasting</strong>
            </td>
            <td>
              <strong>How it Works:</strong> When you stop drinking water, your
              cells have to work harder to survive. They tighten up and become
              more efficient, which naturally increases their electrical charge.
              It&rsquo;s like a &ldquo;reset&rdquo; button for your cells.
            </td>
          </tr>
          <tr>
            <td>
              <strong>3. T3 Therapy</strong>
            </td>
            <td>
              <strong>How it Works:</strong> Thyroid hormones (T3) give your
              cells the energy they need to keep their &ldquo;pumps&rdquo;
              running. These pumps are what keep the electricity inside your
              cells. Without enough T3, your cells run out of power and go into
              &ldquo;hibernation.&rdquo;
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Why These are Better than Grounding:</strong> Grounding (walking
        outside) is helpful for reducing inflammation, but it isn&rsquo;t strong
        enough to fully recharge a sick cell. Dry fasting and T3 therapy
        actually <strong>force</strong> your cells to build up and keep their
        electrical charge, which is necessary for deep healing.
      </p>

      <h2>8. Insomnia &amp; Sleep Problems</h2>
      <p>
        <strong>The Cause:</strong> In the early stages of chronic illness,
        insomnia is almost always driven by a hyperactive nervous system and
        elevated cortisol. As the condition progresses, Mast Cell Activation
        Syndrome (MCAS) becomes a major driver. Mast cells release histamine,
        which is a potent stimulant that keeps the brain awake. Standard sleep
        hygiene advice does almost nothing for this type of insomnia because the
        root cause is biochemical, not behavioral.
      </p>

      <div className="guiding-questions box-info">
        <h3>Start Here: Natural Sleep Support</h3>
        <p>
          Try these first. They are low-risk, well-tolerated, and genuinely
          helpful for mild to moderate sleep dysfunction. If they work for you,
          use them. If they do not, that tells you something important.
        </p>
        <div className="question-item">
          <span className="question-label">Magnesium Glycinate:</span>
          400 to 600mg before bed. Magnesium calms the nervous system and
          supports the production of GABA, the brain&rsquo;s main calming
          signal. Glycinate is the most absorbable form and the least likely to
          cause digestive upset.
        </div>
        <div className="question-item">
          <span className="question-label">GABA:</span>
          500 to 750mg before bed. A direct calming neurotransmitter. Helpful
          for a racing mind and physical tension. Works well stacked with
          magnesium.
        </div>
        <div className="question-item">
          <span className="question-label">Melatonin:</span>
          0.5 to 1mg. Use the lowest effective dose. High doses (5 to 10mg) are
          counterproductive and can increase cortisol and cause next-day
          grogginess. Melatonin is a timing signal, not a sedative.
        </div>
        <div className="question-item">
          <span className="question-label">Valerian Root:</span>
          300 to 600mg. Mild sedative effect, particularly useful for anxiety-
          driven insomnia. Some people respond well, others notice nothing. Worth
          trying before moving to pharmaceutical options.
        </div>
        <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--text-secondary)" }}>
          If none of the above move the needle, that is your signal. Natural
          sleep aids cannot override histamine-driven CNS activation. You are
          not failing them, they are simply the wrong tool for your problem.
          This is a strong indicator that MCAS is at the root and that you need
          the Scorch Protocol, along with antihistamine support in the
          meantime.
        </p>
      </div>

      <h3>When Natural Aids Are Not Enough: Antihistamine Sleep Support</h3>
      <p>
        For severe insomnia rooted in MCAS, you need a drug that does two
        things: blocks histamine at H1 receptors to calm the nervous system,
        and acts on serotonin receptors to promote genuine sleep architecture.
        This combination is what separates effective MCAS sleep tools from
        simple sedatives.
      </p>

      <div className="guiding-questions box-info">
        <h3>Cyproheptadine vs Ketotifen</h3>
        <div className="question-item">
          <span className="question-label">Cyproheptadine (First Choice):</span>
          Cyproheptadine is an H1 antihistamine and serotonin (5-HT2) antagonist
          that works on the same MCAS mechanism but does more of the work you
          actually want. It restores genuine sleep, stimulates appetite, and
          dampens the serotonin-driven cortisol surge that keeps the nervous
          system wired. It is slightly more sedating than Ketotifen, but for
          most people that is a feature rather than a drawback: the deeper
          sedation is what finally breaks MCAS-driven insomnia. Dose it in the
          evening; the range is 1 to 4 mg, set individually in your consult.
          Always use the lowest dose that works.{" "}
          <strong>Broader role in the first T3 cycle:</strong> beyond sleep,
          cyproheptadine also calms the hypersensitive brain-gut nerves (the
          same action used for cyclic vomiting and abdominal migraine in
          children), making eating more tolerable precisely when T3 demands more
          calories. That appetite and brain-gut role is why it is used as an
          active first-cycle tool, not just a sleep aid. See the full framing on
          the{" "}
          <a href="/t3-therapy#cyproheptadine-caveat">T3 Therapy page</a>.{" "}
          <strong>Compatible with hGH:</strong> you do not need to stop
          cyproheptadine before hGH. It blunts the pituitary&rsquo;s own
          growth-hormone signal, but injected hGH bypasses that signal, so the
          two work together.
        </div>
        <div className="question-item">
          <span className="question-label">Ketotifen (Second Choice):</span>
          Ketotifen is an antihistamine and mast cell stabilizer with serotonin
          antagonist properties. It produces less next-day sedation and less of
          the cognitive blunting some describe as a &ldquo;zombie effect,&rdquo;
          which makes it a reasonable choice when cyproheptadine&rsquo;s
          sedation is too strong or when you need to stay sharp the next
          morning. Start at 1mg before bed to test your response. The effective
          range for sleep is typically 1 to 4mg. Always use the lowest dose that
          works, and titrate up slowly. It also helps directly with MCAS-driven
          digestive problems, a useful secondary benefit.
        </div>
        <div className="question-item">
          <span className="question-label">Why Not Benadryl (Diphenhydramine)?</span>
          Benadryl is a pure H1 antihistamine with no mast cell stabilizing
          effect and no serotonin activity. It causes rapid tolerance, meaning
          it stops working within days. It carries a significant anticholinergic
          load, associated with long-term cognitive impairment with repeated use.
          It produces heavy next-day sedation without improving sleep quality.
          It is not effective for MCAS-driven insomnia and has more side effects
          than both Ketotifen and Cyproheptadine. Avoid it.
        </div>
      </div>

      <p>
        Both Cyproheptadine and Ketotifen address the same root mechanism:
        histamine and serotonin dysregulation driven by mast cell overactivity.
        They buy you functional sleep while the Scorch Protocol addresses the
        underlying cause. Always start at the lowest effective dose and do not
        increase until you have tested that dose for several nights.
      </p>

      <InterestingVideoBlock
        tweetUrl="https://x.com/whitesocksclips/status/2038856462072754376"
      />
      <RefeedPlanPromo source="symptom-management" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="symptom-management" sectionTitle="Symptom Management" />
    </>
  );
}
