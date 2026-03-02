import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import CommentSection from "@/components/CommentSection";

export const metadata: Metadata = {
  title: "Genetic Polymorphisms — The Scorch Protocol",
  description:
    "How DIO2, MTHFR, and other genetic variants affect your response to The Scorch Protocol — and how to tailor treatment accordingly.",
};

export default function GeneticPolymorphismsPage() {
  return (
    <>
      <h1>Genetic Variants: Matching Your Scorch Protocol to Your DNA</h1>
      <p>
        Dry fasting in the Scorch Protocol speeds up your metabolism. However,
        it can backfire if your genes make it hard for your body to use thyroid
        hormones (T3). Understanding your DNA helps you change the protocol so
        it is safe and works best for you.
      </p>

      <div className="guiding-questions box-purple">
        <h3>Why Your Genes Matter for Fasting</h3>
        <div className="question-item">
          <span className="question-label">The Main Problem</span>
          Certain gene variants lower your ability to create active thyroid
          hormone by <strong>20-40%</strong>. This can make the natural slowdown
          from fasting much worse. It can lead to feeling very tired, gaining
          weight back quickly, or causing health problems to flare up.
        </div>
        <div className="question-item">
          <span className="question-label">The Opportunity</span>
          These genes explain <strong>5-15%</strong> of how your thyroid works.
          Changing your fast based on your DNA can cut your risks by{" "}
          <strong>50%</strong> while helping your body repair itself more deeply.
        </div>
      </div>

      <h2>The Main Variant: DIO2 Thr92Ala (rs225014)</h2>
      <p>
        <strong>What it does:</strong> This gene variant lowers the amount of
        active thyroid hormone (T3) in your muscles, brain, and fat. People
        with this variant (about 12-50% of the population) often have a 10-20%
        slower resting metabolism. This can lead to a higher body weight and
        higher blood sugar.
      </p>

      <div className="guiding-questions box-red">
        <h3>Fasting Risks for DIO2 Carriers</h3>
        <div className="question-item">
          <span className="question-label">The Danger</span>
          Normally, dry fasting drops T3 levels by 20-50%. People with this
          gene can see their levels drop by <strong>40% or more</strong>. This
          puts them at risk for losing muscle, having blood sugar spikes, and
          gaining weight back right after the fast.
        </div>
        <div className="question-item">
          <span className="question-label">The Reason</span>
          It creates a hidden &ldquo;slow thyroid&rdquo; state. This mimics the
          stress your body feels during a sickness like COVID, leading to brain
          fog and a stalled metabolism.
        </div>
      </div>

      <h3>Actionable Steps for DIO2 Carriers</h3>
      <ul>
        <li>
          <strong>Test Your DNA:</strong> Upload Ancestry.com raw data to
          Promethease; flag if Thr/Ala or Ala/Ala.
        </li>
        <li>
          <strong>Modify Fasting:</strong> Start with wet fasts (12-16h); limit
          dry fasts to &lt;24h initially.
        </li>
        <li>
          <strong>Track Biomarkers:</strong> Monitor FT3/TSH pre/post-fast to
          catch crashes early.
        </li>
        <li>
          <strong>Selenium Support:</strong> Add 200mcg/day to boost deiodinase
          activity by 20%.
        </li>
        <li>
          <strong>Consider T3 Therapy:</strong> If carrier with stubborn
          hypothyroid symptoms, consult for LT3 (liothyronine).
        </li>
      </ul>

      <h3>The Keto-DIO2 Metabolic Trap</h3>
      <p>
        Research on keto diets shows that the body usually adapts well to
        burning fat. For most people, a drop in thyroid hormone on keto is just
        the body being efficient. However, this idea ignores a major problem for
        people with certain genes.
      </p>

      <div className="guiding-questions box-orange">
        <h3>Why DIO2 Carriers Struggle on Keto</h3>
        <p>
          The DIO2 variant (rs225014) is very common, affecting{" "}
          <strong>12-56% of people</strong>. It makes it hard for your body to
          create active thyroid hormone, and it makes the normal &ldquo;keto
          slowdown&rdquo; much worse.
        </p>

        <h4>What Happens to Carriers:</h4>
        <ul>
          <li>
            <strong>Low Energy in Cells:</strong> Low T3 levels inside your
            cells make it harder for your body to create energy (ATP).
          </li>
          <li>
            <strong>Insulin Problems:</strong> Low T3 makes it harder for your
            body to use sugar, which can lead to storing more fat.
          </li>
          <li>
            <strong>High Stress:</strong> A slow metabolism can keep your body
            in a &ldquo;stress mode,&rdquo; raising your cortisol levels.
          </li>
          <li>
            <strong>Slow Fat Burning:</strong> Even if you are in ketosis, your
            body may still be very slow at burning fat for fuel.
          </li>
          <li>
            <strong>Lasting Symptoms:</strong> You might still feel tired, cold,
            or have brain fog even after you start eating carbs again.
          </li>
        </ul>

        <p>
          <strong>The Low-Energy Trap:</strong> This slowdown traps your cells
          in a defensive state. What should be a healthy adaptation becomes a
          metabolic prison that is hard to escape.
        </p>
      </div>

      <p>
        <strong>The Solution:</strong> You must test your genes for the DIO2
        variant. If you have it, you should prioritize diets that include
        healthy carbs and support your thyroid, rather than following a standard
        keto diet. This keeps your metabolism running instead of hitting a dead
        end.
      </p>

      <div className="guiding-questions box-blue">
        <h3>Where You Come From: Who Is at Risk?</h3>
        <p>
          The DIO2 variant is found at different rates around the world.{" "}
          <strong>
            People with European ancestors are at the highest risk
          </strong>
          , and have some of the highest carrier rates in the world.
        </p>
        <table style={{ width: "100%", marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Ancestry</th>
              <th>Frequency of Red Flag Gene</th>
              <th>% Who Are Carriers</th>
              <th>% With Double Red Flag</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "#fef5e7" }}>
              <td>
                <strong>Finnish</strong>
              </td>
              <td>
                <strong>37.4%</strong>
              </td>
              <td>47.1%</td>
              <td>13.9%</td>
            </tr>
            <tr style={{ backgroundColor: "#fef5e7" }}>
              <td>
                <strong>Northern European</strong>
              </td>
              <td>
                <strong>34.2%</strong>
              </td>
              <td>46.3%</td>
              <td>10.4%</td>
            </tr>
            <tr style={{ backgroundColor: "#fef5e7" }}>
              <td>
                <strong>Ashkenazi Jewish</strong>
              </td>
              <td>
                <strong>33.1%</strong>
              </td>
              <td>45.6%</td>
              <td>9.7%</td>
            </tr>
            <tr>
              <td>European (non-Finnish)</td>
              <td>31.9%</td>
              <td>44.8%</td>
              <td>8.8%</td>
            </tr>
            <tr>
              <td>Latino / American</td>
              <td>25.4%</td>
              <td>38.5%</td>
              <td>5.8%</td>
            </tr>
            <tr>
              <td>African / African American</td>
              <td>16.2%</td>
              <td>26.8%</td>
              <td>2.0%</td>
            </tr>
            <tr>
              <td>East Asian</td>
              <td>13.7%</td>
              <td>22.2%</td>
              <td>1.3%</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: "1rem" }}>
          <strong>Key Fact:</strong> If you are of European descent, there is a{" "}
          <strong>45-60% chance</strong> you carry this variant. This makes
          testing your DNA very important before you try aggressive dry fasting.
        </p>
      </div>

      <h2>Other Gene Variants: Making the Problem Worse</h2>
      <p>
        These variants can combine with the one above to make fasting 2-3 times
        harder for your body.
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Gene</th>
            <th style={{ width: "30%" }}>Red Flag Allele</th>
            <th style={{ width: "40%" }}>Impact on your Fast</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>DIO1</strong> (rs2235544)
            </td>
            <td>
              <strong>A allele</strong>
            </td>
            <td>
              Lowers the liver&rsquo;s ability to create thyroid hormone by
              15-30%. This can cause an energy crash and a buildup of
              &ldquo;inactive&rdquo; hormone during a dry fast.
            </td>
          </tr>
          <tr>
            <td>
              <strong>MCT10</strong> (rs17606253)
            </td>
            <td>
              <strong>G allele</strong>
            </td>
            <td>
              Makes it 20% harder for thyroid hormone to get into your cells.
              Not drinking water during a fast can make this worse, leading to
              swelling or stomach problems.
            </td>
          </tr>
          <tr>
            <td>
              <strong>TSHR</strong> (rs12050029)
            </td>
            <td>
              <strong>T allele</strong>
            </td>
            <td>
              Raises the baseline for your thyroid hormone signals. This makes
              it take longer for your body to bounce back after a fast.
            </td>
          </tr>
          <tr>
            <td>
              <strong>FTO</strong> (rs9939609)
            </td>
            <td>
              <strong>A allele</strong>
            </td>
            <td>
              Increases hunger hormones by 20-30%. This makes you want to
              overeat after a fast and can lock your body into storing fat.
            </td>
          </tr>
        </tbody>
      </table>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="genetic-polymorphisms" sectionTitle="Genetic Polymorphisms" />
      <CommentSection sectionSlug="genetic-polymorphisms" />
    </>
  );
}
