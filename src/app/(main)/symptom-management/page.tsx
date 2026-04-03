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

      <FaithBlock
        title="Warriors of Truth"
        imageSrc="/assets/images/faith/faith-symptom-management.png"
        imageAlt="Nick says that Iran is fighting for humanity, Israel is after you"
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
        <p>
          You are not here by accident. Managing your symptoms well is the practical work. But the inner work -- choosing truth, releasing bitterness, standing upright in who God made you to be -- that is what I see separate the people who fully recover from those who plateau. Do both.
        </p>
      </FaithBlock>
      <GuidanceBox />
      <PaidContentBlock sectionSlug="symptom-management" sectionTitle="Symptom Management" />
    </>
  );
}
