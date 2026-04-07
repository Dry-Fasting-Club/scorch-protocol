import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";

export const metadata: Metadata = {
  title: "Symptom Management | The Scorch Protocol",
  description:
    "A symptom-by-symptom guide to managing side effects during The Scorch Protocol: Herxheimer reactions, electrolytes, and more.",
};

export default function SymptomManagementPage() {
  return (
    <>
      <h1>Symptom Management Guide</h1>
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

      <div className="guiding-questions box-blue">
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

      <div className="guiding-questions box-yellow">
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

      <div className="guiding-questions box-purple">
        <h3>Ketotifen vs Cyproheptadine</h3>
        <div className="question-item">
          <span className="question-label">Ketotifen (Preferred):</span>
          Ketotifen is an antihistamine and mast cell stabilizer with serotonin
          antagonist properties. It is the better first choice because it
          produces less next-day sedation and less of the cognitive blunting
          that many people describe as a &ldquo;zombie effect.&rdquo; Start at
          1mg before bed to test your response. The effective range for sleep is
          typically 1 to 4mg. Always use the lowest dose that works. At 4mg it
          is a meaningful sedative, so titrate up slowly. It also helps directly
          with MCAS-driven digestive problems, which is a significant secondary
          benefit.
        </div>
        <div className="question-item">
          <span className="question-label">Cyproheptadine (Second Choice):</span>
          Cyproheptadine is also an H1 antihistamine and serotonin antagonist
          and works well for MCAS-driven sleep and appetite problems. It is more
          sedating than Ketotifen and the next-day grogginess is more pronounced
          at higher doses, which is why it sits at second choice for most people.
          Useful when Ketotifen is unavailable or not effective enough. Typical
          sleep dose is 2 to 4mg.
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
        Both Ketotifen and Cyproheptadine address the same root mechanism:
        histamine and serotonin dysregulation driven by mast cell overactivity.
        They buy you functional sleep while the Scorch Protocol addresses the
        underlying cause. Always start at the lowest effective dose and do not
        increase until you have tested that dose for several nights.
      </p>

      <FaithBlock
        title="Warriors of Truth"
        tweetUrl="https://x.com/whitesocksclips/status/2038856462072754376"
      >
        <p>
          <strong>&ldquo;Then you will know the truth, and the truth will set you free.&rdquo;</strong>
          <br />
          <em>John 8:32</em>
        </p>
        <p>
          Chronic illness does not happen in a vacuum. I have seen it again and again: the people who stay sick longest are often the ones who have spent years shrinking. Shrinking to keep peace. Shrinking to avoid conflict. Saying nothing when they saw something wrong. The body keeps score. Chronic suppression of what you know to be true is itself a stressor -- and a deep one.
        </p>
        <p>
          The armor of God in Ephesians 6 is not poetry. It is a combat manual. A warrior of truth does not look away from evil because it is uncomfortable. He names it. He prays about it. He stands firm. That courage -- to stop appeasing, stop shrinking, stop pretending -- is part of the healing.
        </p>
      </FaithBlock>
      <GuidanceBox />
      <PaidContentBlock sectionSlug="symptom-management" sectionTitle="Symptom Management" />
    </>
  );
}
