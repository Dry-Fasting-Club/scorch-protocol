import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";

export const metadata: Metadata = {
  title: "Weight Loss Protocol — The Scorch Protocol",
  description:
    "How The Scorch Protocol resets insulin resistance and achieves sustainable fat loss through metabolic repair, not calorie restriction.",
};

export default function WeightLossPage() {
  return (
    <>
      <h1>Weight Loss with The Scorch Protocol</h1>
      <p style={{ fontSize: "1.1rem", color: "#e74c3c", fontWeight: "bold" }}>
        ⚠️ UNDER CONSTRUCTION
      </p>

      <div className="guiding-questions box-red">
        <h3>Critical Warning: Too Powerful for Casual Use</h3>
        <p>
          The Scorch Protocol is{" "}
          <strong>not designed primarily for weight loss</strong>. It is a
          metabolic reset tool for chronic illness. However, weight loss is an
          inevitable side effect&mdash;and it can be{" "}
          <strong>dangerously effective</strong>.
        </p>
      </div>

      <h2>The Problem: Overshooting Your Target</h2>
      <p>
        If you are simply looking to lose an insane amount of weight safely, you{" "}
        <strong>should work with Yannick Wolfe</strong> to avoid critical
        pitfalls.
      </p>

      <div className="guiding-questions box-yellow">
        <h3>The 10-Pound Rule</h3>
        <div className="question-item">
          <span className="question-label">Stop Early</span>
          You should{" "}
          <strong>stop fasting at least 10 lbs BEFORE you become underweight</strong>.
        </div>
        <div className="question-item">
          <span className="question-label">Why?</span>
          The metabolic restabilization during T3 Therapy and the post-refeed
          period can often remove <strong>another 10 lbs</strong> even after
          you&rsquo;ve stopped fasting.
        </div>
        <div className="question-item">
          <span className="question-label">The Risk</span>
          If you push too far, you may end up dangerously underweight, with
          muscle wasting and hormonal collapse.
        </div>
      </div>

      <h2>The Power of Dry Fasting for Weight Loss</h2>
      <p>
        While the Scorch Protocol is primarily designed for metabolic healing,{" "}
        <strong>
          dry fasting has proven to be one of the most powerful tools for
          permanent weight loss
        </strong>
        . Many people have successfully used dry fasting to lose large amounts
        of fat, and keep it off.
      </p>

      <div className="guiding-questions box-deepgreen">
        <h3>Why Dry Fasting Works for Fat Loss</h3>
        <div className="question-item">
          <span className="question-label">Permanent Results</span>
          Unlike crash diets, dry fasting resets your metabolism at the cellular
          level. Many people report <strong>permanent weight loss</strong>{" "}
          without the typical rebound.
        </div>
        <div className="question-item">
          <span className="question-label">No Loose Skin</span>
          One of the most remarkable benefits: the ability to lose large amounts
          of fat{" "}
          <strong>without getting loose skin</strong>. The dehydration stress
          triggers osmotic autophagy, which rapidly re-elasticizes the skin and
          consumes excess tissue when water is scarce.
        </div>
        <div className="question-item">
          <span className="question-label">Feel Empowered</span>
          If you prepare well and follow the protocol carefully,{" "}
          <strong>you can do this yourself</strong>. Experimentation is fine,
          many people have found their own rhythm with dry fasting for
          sustainable fat loss.
        </div>
      </div>

      <p>
        <strong>You don&rsquo;t need to be dependent on anyone.</strong> With
        proper preparation (biomarker testing, genetic awareness, electrolyte
        loading), you can safely explore dry fasting for weight loss on your own
        terms. The protocol is here to guide you.
      </p>

      <h2>⚠️ CRITICAL WARNING: Children Under 18</h2>
      <div className="guiding-questions box-red">
        <h3>DO NOT Dry Fast if You Are Under 18</h3>
        <p>
          <strong>
            Dry fasting is NOT recommended for children or teenagers.
          </strong>{" "}
          Yes, it is tempting for kids to dive into this. The risk of
          permanently lowering your metabolism during critical developmental
          years is too high. Children naturally should have a high metabolic
          rate, dry fasting can disrupt this.
        </p>

        <h4>If You&rsquo;re a Child/Teen with Metabolism Issues:</h4>
        <ol>
          <li>
            <strong>Start with Diet:</strong> Focus on a dietary shift to
            increase T3 and lower PUFAs/chemicals. Eat whole foods, avoid seed
            oils, and prioritize nutrient-dense meals.
          </li>
          <li>
            <strong>Get a DNA Test:</strong> Consider genetic testing
            (Ancestry.com + Promethease) to look for metabolism issues like DIO2
            Thr92Ala or thyroid variants.
          </li>
          <li>
            <strong>Talk to Your Doctor:</strong> If diet doesn&rsquo;t work,
            discuss T3 therapy with a medical professional. This is a safer
            option than dry fasting for young people.
          </li>
          <li>
            <strong>Dry Fasting = Last Resort Only:</strong> Only consider dry
            fasting if all other options have failed and under strict medical
            supervision. The risks outweigh the benefits for developing bodies.
          </li>
        </ol>
      </div>

      <h2>Why This May Require Expert Guidance</h2>
      <ul>
        <li>
          <strong>Individual Variation:</strong> Some people lose weight rapidly
          during the fast, others during the T3 phase.
        </li>
        <li>
          <strong>Body Composition:</strong> You need to preserve lean mass
          while losing fat, this requires precise timing and supplementation.
        </li>
        <li>
          <strong>Psychological Factors:</strong> The protocol can trigger
          disordered eating patterns if not monitored.
        </li>
        <li>
          <strong>Rebound Prevention:</strong> Without proper metabolic reset,
          weight can return aggressively.
        </li>
      </ul>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="weight-loss" sectionTitle="Weight Loss Protocol" />
    </>
  );
}
