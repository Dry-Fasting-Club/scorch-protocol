import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";
import HghAccessNote from "@/components/HghAccessNote";
import JsonLd from "@/components/JsonLd";
import { faqPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "General Questions FAQ",
  description:
    "General FAQ: What is The Scorch Protocol, who is it for, how long does it take, and is it safe?",
};

const faqItems = [
  {
    question: "Is dry fasting safe?",
    answer: "Dry fasting is a powerful tool but must be done carefully. For most healthy people, short supervised fasts are safe. However, if you have severe kidney disease, severe heart problems, or are pregnant, you should not dry fast. Always follow the preparation and refeeding rules to stay safe.",
  },
  {
    question: "Why do I need T3 therapy?",
    answer: "Many people with chronic illness have a low-power metabolism; their body is in hibernation mode. T3 therapy helps restart the body's heater and gives cells the energy they need to heal. Without it, some people find they do not get better even with fasting.",
  },
  {
    question: "What is \"Tissue-Level Resistance\"?",
    answer: "Tissue-Level Resistance is when blood tests look normal but T3 hormone is not actually getting into your cells. It is like having a key that will not fit the lock. T3 therapy helps force those locks open so your body can finally use the energy it has.",
  },
  {
    question: "Can I skip the preparation phase?",
    answer: "No. Preparation is where you choose your road into the fast: a plant-based taper that heals deeper, or a ketogenic path that is safer and more forgiving. Skipping it can make the fast much harder and even dangerous. Either path gets your body ready to burn fat and clears out your system gently through food so you do not feel as sick during the fast.",
  },
  {
    question: "Why is the refeeding phase so dangerous?",
    answer: "When you have not eaten for days, your body is very sensitive. Eating the wrong foods (heavy fats, meat, too many carbs at once, or nuts) too early can cause swelling, kidney stress, or refeeding syndrome. Following the 7-day protocol ensures your body heals correctly. Long-term carnivore dieters may have particular trouble with the refeed phase because they have lost the ability to utilize carbohydrates.",
  },
  {
    question: "What if I lose too much weight?",
    answer: "Weight loss is normal during a fast, but much of it is water. Most people gain some weight back during the refeed. The 9-Month BMR Reconstruction plan shows that most participants regained weight after a prolonged period of reduced intake, indicating the metabolism slows after a fast. If you do not have a pancreatic insulin problem, you will regain weight after a fast when eating enough calories.",
  },
  {
    question: "Why do I need hGH therapy?",
    answer: "Growth Hormone (hGH) is the signal that tells your body to rebuild. It helps build new, healthy cells and improves the immune system. hGH therapy is not necessary for everyone, but it can be extremely helpful because many chronic illnesses are associated with low hGH pituitary secretion. If hGH is hard to access, easier-to-source growth hormone secretagogues like CJC-1295 and Ipamorelin can be used in its place on a slightly modified protocol.",
  },
  {
    question: "Can I drink water during a dry fast?",
    answer: "In a true dry fast you do not drink any water or eat any food. This forces your body to create internal water by burning fat, which is much more powerful for healing than a water fast alone. In the Scorch Protocol, the dry fast is followed immediately by a 5-day water fast, making a 10-day fasting block in total. The order is always dry first, then water. Reversing this is dangerous and ineffective.",
  },
  {
    question: "What should I do if my heart races?",
    answer: "If your resting heart rate goes above 100 beats per minute during T3 therapy or fasting, stop increasing your dose or consider breaking the fast. Always prioritize safety and listen to your body's warning signs. A resting heart rate above 100 bpm is the key threshold for both T3 therapy and fasting.",
  },
  {
    question: "How long does the whole protocol take?",
    answer: "The fast may only last a few days, but full recovery including refeeding, metabolic reconstruction, and hormone therapy can take 6 to 12 months. Healing deep, chronic issues is a marathon, not a sprint. Sometimes symptoms may indicate that additional fasting blocks are necessary.",
  },
  {
    question: "Where do I get slow-release T3, peptides, or hGH?",
    answer: "This is the single most common question, and it is the hardest part of the whole protocol. No doctor will prescribe slow-release T3, and the peptide and hGH markets are full of fakes. The public list of pharmacies on this site will get you standard liothyronine and the basics. The verified, current supplier contacts for slow-release T3, peptides, hGH, and cyproheptadine, plus exactly what to order and how to dose it, are part of 1-on-1 coaching. They are kept private on purpose, because good sources stop working the moment they are posted publicly.",
  },
];

export default function GeneralQuestionsPage() {
  return (
    <>
      <JsonLd data={faqPageLd(faqItems)} />
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
          <strong>No.</strong> Preparation is where you choose your road into the
          fast: a plant-based taper that heals deeper, or a ketogenic path that
          is safer and more forgiving. Skipping it can make the fast much harder
          and even dangerous. Either path gets your body ready to burn fat and
          clears out your system gently through food, so you don&rsquo;t feel as
          sick during the fast.
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
        <HghAccessNote />

        <h3>8. Can I drink water during a dry fast?</h3>
        <p>
          In a <strong>true</strong> dry fast, you do not drink any water or
          eat any food. This forces your body to create &ldquo;internal
          water&rdquo; by burning fat. This process is much more powerful for
          healing than a water fast alone.
        </p>
        <p>
          In the Scorch Protocol, the dry fast is followed immediately by a
          5-day water fast, making a 10-day fasting block in total. The water
          fast is not a step backward; it is a supercharged phase that only
          works this powerfully because the dry fast has already restructured
          your body from the inside. The order is always dry first, then water.
          Reversing this is dangerous and ineffective.
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
          recovery (including refeeding, metabolic reconstruction, and
          hormone therapy) can take <strong>6 to 12 months</strong>. Healing
          deep, chronic issues is a marathon, not a sprint. Sometimes your
          symptoms may indicate extra fasts being necessary.
        </p>

        <h3>11. Where do I get slow-release T3, peptides, or hGH?</h3>
        <p>
          This is the single most common question, and it is the hardest part of
          the whole protocol. No doctor will prescribe slow-release T3, and the
          peptide and hGH markets are full of fakes. The public{" "}
          <Link href="/list-of-pharmacies">list of pharmacies</Link> will get you
          standard liothyronine and the basics. The verified, current supplier
          contacts for slow-release T3, peptides, hGH, and cyproheptadine, plus
          exactly what to order and how to dose it, are part of{" "}
          <Link href="/coaching">1-on-1 coaching</Link>. They are kept private on
          purpose, because good sources stop working the moment they are posted
          publicly.
        </p>
      </div>

      {/* FaithBlock hidden for now: to restore, remove the `false && (` wrapper and matching `)` */}
      {false && (
      <FaithBlock
        title="Your Body Is a Temple: The Theology Behind Why This Works"
      >
        <p>
          <strong>1 Corinthians 6:19-20: &ldquo;Do you not know that your bodies are temples of the Holy Spirit? You were bought at a price. Therefore honor God with your bodies.&rdquo;</strong>
        </p>
        <p>
          Underneath every question on this page is a deeper one: <em>does my body deserve to be healed?</em> Some people with chronic illness have been sick so long they have stopped believing it does. Paul answers with a price tag. You were bought at a price. You have infinite value. A temple is not valuable because of what gets done inside it. It is valuable because of who lives there. Honor God with your body. Fight for it. <strong>The healing is real. Your temple is worth restoring.</strong>
        </p>
      </FaithBlock>
      )}

      <GuidanceBox />
      <PaidContentBlock sectionSlug="faq/general-questions" sectionTitle="General Questions" />
    </>
  );
}
