import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";

export const metadata: Metadata = {
  title: "Refeeding Strategy | The Scorch Protocol FAQ",
  description:
    "Refeeding FAQ: How to avoid refeeding syndrome, what to eat first, electrolyte management, and calorie ramp-up schedule.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I eat first after a dry fast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start refeeding with small amounts of diluted fruit juice or watermelon, then progress to broths and easily digestible foods. Avoid protein and fat for the first 24–48 hours. The Kempner Rice Diet or clinical broths are standard starting points in the Scorch Protocol.",
      },
    },
    {
      "@type": "Question",
      name: "How do I avoid refeeding syndrome?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Refeeding syndrome occurs when carbohydrates are reintroduced too rapidly after fasting, causing dangerous electrolyte shifts (especially phosphate). Avoid it by starting with very small quantities, monitoring electrolytes, and increasing calories gradually over several days.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the refeeding phase take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The initial refeeding phase after a 10-day fasting block (5 days dry + 5 days water) typically takes 10–14 days to return to normal eating. Full metabolic recovery and microbiome rebuilding can take 1–3 months. The Scorch Protocol includes a detailed BMR reconstruction plan for the full recovery period.",
      },
    },
  ],
};

export default function RefeedingFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1>Refeeding: The Art of Landing</h1>
      <p>
        Refeeding is not just &ldquo;eating again.&rdquo; It is a biological
        surgery where you reconstruct your microbiome, hormones, and immune
        system. The following questions integrate findings from the Khoroshilov
        Thesis (1994) with the Scorch Protocol&rsquo;s metabolic objectives.
      </p>

      <div className="guiding-questions">

        <div className="question-item">
          <h3>1. Why do you say the refeed is &ldquo;dangerous&rdquo;?</h3>
          <div className="answer-text">
            <p>
              Because your body has switched its machinery entirely to fat
              oxidation. Your pancreas has stopped making insulin, and your
              stomach acid is low. If you dump a complex meal (steak and
              potatoes) or too much salt into this system, you risk{" "}
              <strong>Refeeding Syndrome</strong>: massive fluid retention,
              electrolyte antagonism, and renal stress. You must &ldquo;wake
              up&rdquo; the machinery slowly.
            </p>
          </div>
          <div className="faq-data-box faq-data-orange">
            <strong>🧪 The Research (Khoroshilov 1994):</strong>
            <br />
            The study emphasizes that the refeeding period is critical for
            &ldquo;consolidating therapeutic effects.&rdquo; It notes that
            improper refeeding (too fast, or wrong foods) was the primary cause
            of adverse reactions like edema and intestinal colic in the 13% of
            dropout cases.
          </div>
        </div>

        <div className="question-item">
          <h3>2. Can I speed up the refeed? I feel fine after 1 day.</h3>
          <div className="answer-text">
            <p>
              <strong>Yes, but with conditions.</strong> The &ldquo;Slow
              Refeed&rdquo; is a safety buffer. If you have done multiple fasts,
              or better yet, if you have completed the{" "}
              <strong>T3 Therapy Phase</strong> and your basal metabolic rate
              (body temp) is consistently high (&gt;37&deg;C), your digestive
              enzymes and insulin sensitivity are likely more robust.
            </p>
            <p>
              In this specific case, you can compress the &ldquo;Liquid
              Phase&rdquo; (Day 1) into 12 hours instead of 24. However, the
              rule of <strong>Zero Fat/Zero Protein</strong> for the first few
              days remains non-negotiable to prevent insulin resistance rebound.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>
            3. Many protocols recommend vegetable broth or bone broth. You
            recommend fruit and rice. Why?
          </h3>
          <div className="answer-text">
            <p>
              This is the difference between a &ldquo;Hygienic/Clinical
              Model&rdquo; and a &ldquo;Metabolic/Bio-Energetic Model.&rdquo;
            </p>
            <p>
              <strong>Clinical Model:</strong> Focuses on gentle rehydration
              and electrolytes (Broth, Veg Juice). This is safer for the gut
              but slower for energy.
            </p>
            <p>
              <strong>Metabolic Model:</strong> Focuses on spiking the thyroid
              and fueling stem cells. We use simple sugars (Fruit/Rice) to
              signal &ldquo;abundance&rdquo; to the hypothalamus immediately.
              This creates a stronger hormonal rebound but requires strict
              avoidance of fat to work safely.
            </p>
          </div>
          <div className="faq-data-box faq-data-orange">
            <strong>🧪 Analysis:</strong>
            <br />
            Khoroshilov&rsquo;s data supports starting with 100-200mL of
            water/broth to avoid &ldquo;washout.&rdquo; The Scorch Protocol
            adapts this by using Coconut Water (nature&rsquo;s isotonic broth)
            to achieve the same hydration safety while adding the glucose
            needed for T3 conversion.
          </div>
        </div>

        <div className="question-item">
          <h3>4. I am craving salt like crazy. Can I have just a pinch?</h3>
          <div className="answer-text">
            <p>
              <strong>Caution.</strong> Your kidneys have been hoarding sodium
              for days (Aldosterone is high). If you add dietary salt now,
              while Aldosterone is still high, your body will super-saturate
              with water. This causes the &ldquo;puffiness&rdquo; or Edema.
            </p>
            <p>
              However, if you feel dizzy or have low blood pressure
              (Hyponatremia symptoms), a tiny pinch under the tongue is a
              medical necessity. Use your symptoms, not your cravings, as the
              guide.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>5. My ankles are swollen (Edema) on Day 3. Did I ruin it?</h3>
          <div className="answer-text">
            <p>
              You didn&rsquo;t ruin the healing, but you overstressed the
              kidneys. This usually means you consumed sodium or simply too much
              volume too fast.
            </p>
            <p>
              The fix is not easy, but sometimes requires eating a high
              potassium diet, or performing another dry fast or sauna in the
              future. Often the swelling will subside by itself if you slow down
              with the sodium.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>6. I gained all the weight back in 3 days. Is that fat?</h3>
          <div className="answer-text">
            <p>
              <strong>No.</strong> It is physically impossible to gain 5lbs of
              fat in 3 days. This is{" "}
              <strong>Glycogen Replenishment + Water Weight</strong>.
            </p>
            <p>
              Every gram of carbohydrate stores ~3 grams of water. As you
              refill your muscles (which were flat), they pull water in. This
              is healthy &ldquo;Intracellular Hydration.&rdquo; Do not panic.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>7. Why do I have to wait 5-7 days for meat/eggs?</h3>
          <div className="answer-text">
            <p>
              Two reasons:
              <br />
              1. <strong>Autophagy braking:</strong> Protein (Amino Acids) shuts
              down autophagy instantly. We want a &ldquo;soft landing&rdquo;
              where autophagy tapers off slowly.
              <br />
              2. <strong>Enzymes:</strong> Your stomach has stopped producing
              Pepsin (protein-digesting enzyme). If you eat meat now, it will
              rot/ferment rather than digest.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>
            8. I felt great fasting, but now I feel tired and achy after
            eating. Why?
          </h3>
          <div className="answer-text">
            <p>
              This is <strong>Metabolic Switching Fatigue</strong> and
              electrolyte rebalance. As your body transitions from ketosis to
              glucose metabolism, it can cause fatigue and achiness.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>9. Should I take probiotics or vitamins immediately?</h3>
          <div className="answer-text">
            <p>
              <strong>No.</strong> Your gut mucosa is &ldquo;open&rdquo; and
              sensitive. Strong supplements can irritate it.
            </p>
            <p>
              <strong>Exception: antivirals on day 1.</strong> If you carry
              any of the nine herpesviruses (HSV-1, HSV-2, VZV, EBV, CMV,
              HHV-6A, HHV-6B, HHV-7, or HHV-8), start{" "}
              <strong>L-lysine and monolaurin</strong> on refeeding day 1. In
              the Scorch Protocol, T3 therapy has already been running since
              day 3 of the water fast, so your kidneys are supported and you do
              not need to wait before starting these. Monolaurin and L-lysine
              together disrupt viral envelopes and block arginine-dependent
              replication. This also applies to Lyme herbal protocols, but those
              must be reintroduced very gently.
            </p>
          </div>
        </div>

        <div className="question-item">
          <h3>10. When can I go back to &ldquo;normal&rdquo; eating?</h3>
          <div className="answer-text">
            <p>
              The Khoroshilov standard is:{" "}
              <strong>Refeed length = Fast length.</strong>
              <br />
              In the Scorch Protocol, the full fasting block is 10 days (5 dry
              + 5 water), so be strict for at least 10 days. After that, you
              are biologically &ldquo;safe,&rdquo; but for maximum tissue
              remodeling, the Scorch Protocol recommends extending the &ldquo;High
              Carb/Low Fat&rdquo; phase for 2–4 weeks to maximize stem cell
              differentiation and thyroid restoration.
            </p>
          </div>
        </div>

      </div>

      <FaithBlock
        title="A Time to Heal: Trusting God&rsquo;s Timing in Recovery"
        imageSrc="/assets/images/faith/faith-faq-refeeding.jpg"
        imageAlt="Still water at dawn, patience, peace, and trust"
      >
        <p>
          <strong>Ecclesiastes 3:1-3: &ldquo;There is a time for everything, and a season for every activity under the heavens... a time to be born and a time to die, a time to plant and a time to uproot... a time to kill and a time to heal.&rdquo;</strong>
        </p>
        <p>
          Ecclesiastes does not tell us when our time to heal will arrive. It only tells us that it will. There is a season for it. And in the meantime, the Preacher&rsquo;s instruction is not to strive harder or push faster, but to recognize the season you are in and honor it.
        </p>
        <p>
          The refeeding phase is the hardest emotionally for many people, not because it is medically the most dangerous (though it demands respect), but because it requires patience in a culture that has no patience left. You have just done one of the hardest things a human body can do. You have survived a 10-day fast. You have taken T3 through a metabolic storm. And now you are eating watermelon juice and waiting.
        </p>
        <p>
          There is deep spiritual practice in this. Every question on this page (about what to eat, how much, when) is ultimately a question about trust. Can you trust the process? Can you trust your body&rsquo;s wisdom when it is healing something it has never had space to heal before? Can you sit still long enough for the miracle to complete itself?
        </p>
        <p>
          Yannick has walked this with hundreds of people. The ones who healed most fully were not the ones who rushed. They were the ones who finally, after years of fighting their own body, learned to cooperate with it. <strong>This is your season to heal. Honor it.</strong>
        </p>
      </FaithBlock>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="faq/refeeding" sectionTitle="Refeeding Strategy" />
    </>
  );
}
