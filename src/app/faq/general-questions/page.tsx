import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";

export const metadata: Metadata = {
  title: "General Questions — The Scorch Protocol FAQ",
  description:
    "General FAQ: What is The Scorch Protocol, who is it for, how long does it take, and is it safe?",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is The Scorch Protocol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Scorch Protocol is a multi-phase healing system combining dry fasting, T3 thyroid therapy, and hGH therapy to reverse chronic illnesses such as Long Covid, ME/CFS, Lyme disease, and autoimmune conditions.",
      },
    },
    {
      "@type": "Question",
      name: "How long does The Scorch Protocol take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full recovery typically takes 6–12 months of consistent effort. The dry fast phase is 5 days, followed by refeeding and metabolic therapy phases that continue for months.",
      },
    },
    {
      "@type": "Question",
      name: "Is The Scorch Protocol safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When done with proper preparation including blood tests, supplement loading, and following the protocol's safety guidelines and stop signals, serious complications are rare. The protocol is not recommended for those on liver-toxic medications such as benzodiazepines or acetaminophen.",
      },
    },
    {
      "@type": "Question",
      name: "Who is The Scorch Protocol designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The protocol is designed primarily for people with chronic illness — especially Long Covid, ME/CFS, Lyme disease, and autoimmune conditions. People with European ancestry (45–60% carry the DIO2 gene variant) and those with low morning body temperature may especially benefit.",
      },
    },
  ],
};

export default function GeneralQuestionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1>Frequently Asked Questions (FAQ)</h1>
      <p>
        Common questions about the Scorch Protocol, simplified for clear
        understanding.
      </p>

      <div className="guiding-questions">
        <h3>1. Is dry fasting safe?</h3>
        <p>
          Dry fasting is a powerful tool, but it must be done carefully. For
          most healthy people, short supervised fasts are safe. However, if you
          have kidney disease (severe), heart problems (severe), or are
          pregnant, you should <strong>not</strong> dry fast. Always follow the
          preparation and refeeding rules to stay safe.
        </p>

        <h3>2. Why do I need T3 therapy?</h3>
        <p>
          Many people with chronic illness have a &ldquo;low-power&rdquo;
          metabolism. Their body is in hibernation mode. T3 therapy helps
          &ldquo;restart&rdquo; your body&rsquo;s heater and gives your cells
          the energy they need to heal. Without it, some people find they
          don&rsquo;t get better even with fasting.
        </p>

        <h3>3. What is &ldquo;Tissue-Level Resistance&rdquo;?</h3>
        <p>
          This is when your blood tests look normal, but the T3 hormone
          isn&rsquo;t actually getting into your cells. It&rsquo;s like having
          a key that won&rsquo;t fit the lock. T3 therapy helps force those
          &ldquo;locks&rdquo; open so your body can finally use the energy it
          has.
        </p>

        <h3>4. Can I skip the preparation phase?</h3>
        <p>
          <strong>No.</strong> Skipping preparation (like the Ketovore diet or
          juice cleanse) can make the fast much harder and even dangerous.
          Preparation gets your body ready to burn fat and cleans out your
          system so you don&rsquo;t feel as sick during the fast.
        </p>

        <h3>5. Why is the refeeding phase so dangerous?</h3>
        <p>
          When you haven&rsquo;t eaten for days, your body is very sensitive.
          If you eat the wrong foods (like heavy fats meat, too much carbs at
          once, or nuts) too early, you can cause swelling, kidney stress, or
          &ldquo;refeeding syndrome.&rdquo; Following the 7-day protocol
          ensures your body heals correctly. Long-term carnivore dieters may
          have trouble with the refeed phase because they have lost the ability
          to utilize carbs.
        </p>

        <h3>6. What if I lose too much weight?</h3>
        <p>
          Weight loss is normal during a fast, but much of it is water. Most
          people gain some weight back during the refeed. The 9-Month BMR
          Reconstruction plan is designed to show you that most participants
          regained much more weight after a long period of starvation,
          indicating that your metabolism slows down significantly after a fast
          (probably not as much compared to a restrictive diet which is more
          indicative of starvation). Point being, if you don&rsquo;t have a
          pancreatic insulin problem then you will regain weight after a fast if
          eating enough calories.
        </p>

        <h3>7. Why do I need hGH therapy?</h3>
        <p>
          Growth Hormone (hGH) is the signal that tells your body to
          &ldquo;rebuild.&rdquo; hGH helps build new, healthy cells and
          improves your immune system. It&rsquo;s the final step in the
          advanced regeneration process. hGH therapy is not necessary for
          everyone, but it can be extremely helpful considering many chronic
          illnesses are associated with low hGH pituitary secretion.
        </p>

        <h3>8. Can I drink water during a dry fast?</h3>
        <p>
          In a <strong>true</strong> dry fast, you do not drink any water or
          eat any food. This forces your body to create &ldquo;internal
          water&rdquo; by burning fat. This process is much more powerful for
          healing than a water fast.
        </p>

        <h3>9. What should I do if my heart races?</h3>
        <p>
          If your resting heart rate goes above 100 beats per minute during T3
          therapy or fasting, <strong>stop increasing</strong> your dose or
          consider breaking the fast. Always prioritize safety and listen to
          your body&rsquo;s warning signs. For T3 over 100 beats during rest is
          indicative of going too high. For fasting, it is also tracked during
          rest.
        </p>

        <h3>10. How long does the whole protocol take?</h3>
        <p>
          The fast may only last a few days, but the full
          recovery&mdash;including refeeding, metabolic reconstruction, and
          hormone therapy, can take <strong>6 to 12 months</strong>. Healing
          deep, chronic issues is a marathon, not a sprint. Sometimes your
          symptoms may indicate extra fasts being necessary.
        </p>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="faq/general-questions" sectionTitle="General Questions" />
    </>
  );
}
