import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd, faqPageLd } from "@/lib/structured-data";

const PAGE_DESCRIPTION =
  "Mast cell activation (MCAS) in Long Covid: how histamine overload drives insomnia and flares, the calming stack (cyproheptadine, ketotifen, H1/H2), and how fasting fits in.";

export const metadata: Metadata = {
  title:
    "MCAS and Dry Fasting: Calming Mast Cells in Long Covid",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "https://scorchprotocol.com/mcas-and-dry-fasting" },
};

const mcasFaq = [
  {
    question: "Can you fast with MCAS?",
    answer:
      "Many people with MCAS do fast, but it requires preparation. During the dry fast itself, autophagy and ketosis create an environment that is generally hostile to the inflammatory cascade mast cells drive. The higher-risk moment is the refeed, when food and mTOR reactivation can trigger a histamine surge. Having H1 and H2 blockers in place before you break the fast, and following a gentle coconut-water-first refeed schedule, reduces that risk significantly.",
  },
  {
    question: "Does fasting help MCAS?",
    answer:
      "Dry fasting appears to help MCAS indirectly, by targeting the underlying drivers (viral persistence, chronic immune activation, and mitochondrial damage) that keep mast cells in a primed, hypersensitive state. It does not replace antihistamine support in the short term. The calming stack (cyproheptadine or ketotifen, plus H1 and H2 blockers) manages symptoms while the protocol addresses the root cause.",
  },
  {
    question: "Why does MCAS cause insomnia?",
    answer:
      "Mast cells release histamine, which is a potent stimulant that keeps the brain awake. In Long Covid, mast cells become chronically overactive, releasing histamine at night and elevating cortisol. Standard sleep hygiene and sedatives cannot override this because the cause is biochemical, not behavioral. Cyproheptadine and ketotifen work for MCAS-driven insomnia because they block histamine at H1 receptors and act on serotonin receptors to restore genuine sleep architecture, addressing the actual mechanism rather than just sedating around it.",
  },
];

export default function MCASAndDryFastingPage() {
  return (
    <>
      <JsonLd
        data={[
          ...medicalWebPageLd({
            name: "MCAS and Dry Fasting: Calming Mast Cells in Long Covid",
            description: PAGE_DESCRIPTION,
            path: "/mcas-and-dry-fasting",
            breadcrumbName: "MCAS and Dry Fasting",
            about: ["Mast cell activation syndrome", "Long COVID"],
          }),
          faqPageLd(mcasFaq),
        ]}
      />

      <h1>MCAS and Dry Fasting</h1>

      <KeyTakeaways
        points={[
          "MCAS (Mast Cell Activation Syndrome) is a recognized driver of Long Covid: chronically overactive mast cells flood the body with histamine, causing flares, food sensitivities, racing heart after meals, and insomnia that no standard sleep aid can touch.",
          "The cascade starts upstream: viral persistence and chronic immune activation prime mast cells, which then release histamine continuously, locking patients in a high-inflammation loop.",
          "The calming stack centers on cyproheptadine or ketotifen (H1 antihistamines with serotonin activity), backed by an H1 blocker and an H2 blocker for daytime symptom control.",
          "MCAS-driven insomnia is biochemical, not behavioral. It requires an antihistamine that also acts on serotonin receptors, not a sedative or standard sleep hygiene advice.",
          "Dry fasting targets the upstream drivers of mast cell priming. The calming stack manages symptoms while the protocol addresses the root cause.",
        ]}
      />

      <p>
        If you have Long Covid and cannot sleep no matter what you try, react to
        foods that never bothered you before, flush or get a racing heart for no
        clear reason, and feel generally wired and inflamed at the same time, you
        are most likely dealing with mast cell activation. This page explains what
        is happening, what the calming stack looks like, and how dry fasting fits
        into the picture.
      </p>

      <h2>What MCAS Is and How It Shows Up</h2>
      <p>
        Mast cells are immune cells that sit in connective tissue throughout the
        body, especially in the gut, skin, lungs, and brain. In a healthy person
        they respond to genuine threats by releasing histamine and other mediators,
        then settle back down. In Long Covid, mast cells become chronically
        overactive: they fire too easily, release too much histamine, and never
        fully calm between episodes.
      </p>
      <p>
        Histamine is a potent stimulant. When mast cells release it continuously,
        it drives a recognizable cluster of symptoms:
      </p>
      <ul>
        <li>
          <strong>Flushing, hives, or itching</strong> that appear without obvious
          cause or after foods that never caused problems before
        </li>
        <li>
          <strong>Racing heart after meals</strong> (a hallmark MCAS pattern: the
          gut is dense with mast cells and eating triggers release)
        </li>
        <li>
          <strong>New food sensitivities</strong> that keep expanding, especially
          to high-histamine foods like fermented products, aged cheese, and alcohol
        </li>
        <li>
          <strong>GI symptoms</strong> such as bloating, cramping, and diarrhea
          that shift day to day
        </li>
        <li>
          <strong>Brain fog and anxiety</strong> driven by histamine crossing into
          the central nervous system
        </li>
        <li>
          <strong>Insomnia that does not respond to magnesium, melatonin, or
          standard sleep aids</strong> (covered in detail below)
        </li>
      </ul>

      <div className="guiding-questions box-info">
        <h3>MCAS in Long Covid: Not a Coincidence</h3>
        <p>
          MCAS is not a separate diagnosis that happens to coexist with Long Covid.
          It is a direct consequence of the same upstream drivers. The
          Long Covid cascade primes mast cells specifically: Th2 immune dominance,
          chronic immune activation from viral persistence, and autonomic
          dysregulation all push mast cells toward a hair-trigger state. If you
          have Long Covid, you almost certainly have some degree of mast cell
          overactivation, even if a formal MCAS diagnosis has never been made.
        </p>
      </div>

      <h2>Why Long Covid Primes Mast Cells</h2>
      <p>
        The cascade that leads to mast cell overactivation in Long Covid follows
        a recognizable chain. SARS-CoV-2 spike protein persists in tissue (skull
        marrow, meninges, and vasculature, sometimes for years post-infection).
        That persistence drives chronic immune activation, shifting the immune
        system toward Th2 dominance and directly priming mast cells for
        hyperactivation.
      </p>
      <p>
        Latent virus reactivation adds a second layer. Viruses like EBV and
        HHV-6, which are already present in most chronic illness patients, become
        more active in the context of Long Covid immune dysregulation. Their
        activity further stimulates mast cells and amplifies the histamine flood.
        The result is MCAS sitting at the bottom of a cascade that started at
        the top with viral persistence, with every intermediate step feeding it.
      </p>
      <p>
        This matters for treatment decisions. Antihistamines calm the bottom of
        the cascade. The Scorch Protocol targets the top, by clearing viral
        reservoirs through deep autophagy and restoring the metabolic foundation
        that allows the immune system to come back into balance. Both are
        necessary: antihistamines buy you functional days while the protocol
        works on the underlying cause.
      </p>

      <h2>The Calming Stack: Cyproheptadine, Ketotifen, H1/H2 Blockers</h2>
      <p>
        Managing active MCAS requires blocking histamine at multiple receptor
        types simultaneously. H1 receptors drive the neurological symptoms
        (insomnia, anxiety, brain fog, itching). H2 receptors drive the GI
        symptoms (stomach acid, cramping, nausea). Blocking both is the standard
        approach; it reduces the symptom load while the protocol addresses the
        upstream cause.
      </p>

      <div className="guiding-questions box-info">
        <h3>Daytime H1 and H2 Support</h3>
        <div className="question-item">
          <span className="question-label">H1 Blocker (Daytime):</span>
          Cetirizine 10 mg or loratadine 10 mg daily. These are non-sedating H1
          antihistamines that reduce histamine-driven flushing, itching, food
          reactions, and racing heart. They do not address serotonin dysregulation
          and are not sufficient on their own for severe insomnia.
        </div>
        <div className="question-item">
          <span className="question-label">H2 Blocker (Daytime):</span>
          Famotidine 20 to 40 mg twice daily. Targets the GI branch of histamine
          overload: stomach acid dysregulation, cramping, bloating, and the
          gut-based histamine releases that follow meals. Famotidine is the most
          commonly used H2 blocker in the Long Covid community and is generally
          well tolerated.
        </div>
        <div className="question-item">
          <span className="question-label">Quercetin (Mast Cell Stabilizer):</span>
          500 mg twice daily. A flavonoid with mast cell stabilizing properties
          that reduces the likelihood of mast cell degranulation. Paired with the
          H1 and H2 blockers, it helps reduce the volume of histamine being
          released rather than just blocking its effects.
        </div>
      </div>

      <p>
        For severe insomnia or when the daytime stack is not enough, a different
        class of drug is needed: one that combines H1 blockade with serotonin
        receptor activity. That combination is what separates effective MCAS
        sleep tools from simple antihistamines.
      </p>

      <div className="guiding-questions box-info">
        <h3>Evening Support: Cyproheptadine vs Ketotifen</h3>
        <div className="question-item">
          <span className="question-label">Cyproheptadine (First Choice):</span>
          Cyproheptadine is an H1 antihistamine and serotonin (5-HT2) antagonist.
          It blocks histamine at H1 receptors to calm the nervous system, and acts
          on serotonin receptors to promote genuine sleep architecture. It
          stimulates appetite, calms the brain-gut nerves that make large meals
          nauseating (the same action used for cyclic vomiting and abdominal
          migraine in children), and dampens the serotonin-driven cortisol surge
          that keeps the nervous system wired. It is slightly more sedating than
          ketotifen, but for most people that is a feature: the deeper sedation is
          what finally breaks MCAS-driven insomnia. Dose in the evening; the range
          is 1 to 4 mg, set individually. Always use the lowest dose that works.
          <br />
          <br />
          <strong>Important cycle note:</strong> cyproheptadine is a cycle-1-only
          tool. Stop it before moving to hGH, because it lowers growth hormone
          output and blunts the nighttime cortisol hGH needs to burn fat. See the{" "}
          <a href="/t3-therapy#cyproheptadine-caveat">T3 Therapy page</a> for the
          full framing.
        </div>
        <div className="question-item">
          <span className="question-label">Ketotifen (Second Choice):</span>
          Ketotifen is an antihistamine and mast cell stabilizer with serotonin
          antagonist properties. It produces less next-day sedation than
          cyproheptadine and less of the cognitive blunting some describe as a
          &ldquo;zombie effect,&rdquo; making it a reasonable choice when
          cyproheptadine&rsquo;s sedation is too strong or when you need to stay
          sharp the next morning. Start at 1 mg before bed to test your response.
          The effective range for sleep is typically 1 to 4 mg. It also helps
          directly with MCAS-driven digestive problems, a useful secondary benefit.
          Always use the lowest dose that works and titrate up slowly.
        </div>
        <div className="question-item">
          <span className="question-label">Why Not Benadryl?</span>
          Diphenhydramine (Benadryl) is a pure H1 antihistamine with no mast cell
          stabilizing effect and no serotonin activity. It causes rapid tolerance
          (stops working within days), carries a significant anticholinergic load
          associated with long-term cognitive impairment, and produces heavy
          next-day sedation without improving sleep quality. It is not effective
          for MCAS-driven insomnia and has more side effects than both ketotifen
          and cyproheptadine. Avoid it.
        </div>
      </div>

      <p>
        Both cyproheptadine and ketotifen address the same root mechanism:
        histamine and serotonin dysregulation driven by mast cell overactivity.
        They buy functional sleep while the Scorch Protocol addresses the
        underlying cause. Always start at the lowest effective dose and do not
        increase until you have tested that dose for several nights.
      </p>

      <h2>MCAS-Driven Insomnia: The Part Standard Sleep Aids Miss</h2>
      <p>
        In the early stages of chronic illness, insomnia is usually driven by a
        hyperactive nervous system and elevated cortisol. As the condition
        progresses, MCAS becomes a major driver. Mast cells release histamine,
        which is a potent stimulant that keeps the brain awake. Standard sleep
        hygiene advice does almost nothing for this type of insomnia because the
        root cause is biochemical, not behavioral.
      </p>

      <div className="guiding-questions box-info">
        <h3>Natural Sleep Aids: Try These First</h3>
        <p>
          These are low-risk and genuinely helpful for mild to moderate sleep
          dysfunction. If they work for you, use them. If they do not move the
          needle after a fair trial, that is your signal.
        </p>
        <div className="question-item">
          <span className="question-label">Magnesium Glycinate:</span>
          400 to 600 mg before bed. Calms the nervous system and supports the
          production of GABA, the brain&rsquo;s main calming signal. Glycinate is
          the most absorbable form and the least likely to cause digestive upset.
        </div>
        <div className="question-item">
          <span className="question-label">GABA:</span>
          500 to 750 mg before bed. A direct calming neurotransmitter. Helpful for
          a racing mind and physical tension. Works well stacked with magnesium.
        </div>
        <div className="question-item">
          <span className="question-label">Melatonin:</span>
          0.5 to 1 mg. Use the lowest effective dose. High doses (5 to 10 mg) are
          counterproductive and can increase cortisol and cause next-day
          grogginess. Melatonin is a timing signal, not a sedative.
        </div>
        <div className="question-item">
          <span className="question-label">Valerian Root:</span>
          300 to 600 mg. Mild sedative effect, particularly useful for
          anxiety-driven insomnia. Some people respond well, others notice nothing.
          Worth trying before moving to pharmaceutical options.
        </div>
        <p
          style={{
            marginTop: "1rem",
            fontStyle: "italic",
            color: "var(--text-secondary)",
          }}
        >
          If none of the above move the needle, that is your signal. Natural sleep
          aids cannot override histamine-driven CNS activation. You are not failing
          them, they are simply the wrong tool for your problem. This is a strong
          indicator that MCAS is at the root and that you need antihistamine
          support (cyproheptadine or ketotifen) in the meantime while working
          toward the Scorch Protocol.
        </p>
      </div>

      <p>
        Severe insomnia that does not respond to magnesium, GABA, or melatonin is
        one of the clearest signs of MCAS-driven neurological dysfunction. It is
        a direct indicator that the histamine burden is high enough to require
        pharmaceutical support, not a sign of a sleep disorder in the conventional
        sense.
      </p>

      <h2>How Fasting Fits, and a Caution About Die-Off</h2>
      <p>
        Dry fasting does not directly suppress mast cells in the way antihistamines
        do. What it does is target the upstream drivers that keep mast cells in a
        primed state: viral reservoirs cleared by autophagy, damaged mitochondria
        removed, and the chronic immune activation that sustains mast cell
        hyperactivation gradually reduced across protocol cycles. Because the
        protocol reduces the viral and immune drivers with each cycle (the same
        cycle-over-cycle reduction described on the{" "}
        <Link href="/viral-reactivation">Viral Reactivation</Link> page), many
        patients report that mast cell reactivity eases over successive cycles.
      </p>
      <p>
        During the fast itself, the combination of ketosis, mTOR suppression, and
        autophagy creates an environment that is hostile to the viral and immune
        drivers of MCAS. Most patients tolerate the fast without significant
        histamine flares.
      </p>

      <div className="guiding-questions box-warning">
        <h3>The Herxheimer and Histamine Warning: What Can Happen During and After the Fast</h3>
        <p>
          Two things can produce a histamine-like surge during or immediately after
          a dry fast, and it is worth knowing the difference before you start.
        </p>
        <div className="question-item">
          <span className="question-label">Herxheimer Reaction During the Fast:</span>
          As autophagy clears virus-infected cells and cellular debris, the immune
          system responds to the released material. This can feel like a histamine
          flare: flushing, skin reactions, itching, energy crash, and mood shifts.
          This is a Herxheimer (die-off) reaction, not a sign that fasting is
          making MCAS worse. It is uncomfortable but expected and generally safe to
          push through, provided your vital signs are stable (resting heart rate
          below 120 bpm, no 24-hour urination loss, core temp in the safe range,
          no severe confusion or fainting). See the{" "}
          <Link href="/symptom-management">Symptom Management</Link> page for the
          full triage decision tree.
        </div>
        <div className="question-item">
          <span className="question-label">Histamine Surge at the Refeed:</span>
          The refeed is the higher-risk moment for mast cell patients specifically.
          When mTOR reactivates and food returns, a temporary immune surge can
          trigger mast cell degranulation. Keep your H1 and H2 blockers active
          through the refeed. Follow the coconut-water-first, slow-introduction
          refeed schedule to avoid the high-antigen food load that triggers
          reactions. Avoid known high-histamine foods (fermented products, aged
          cheese, alcohol, spinach) during the first two weeks of the refeed. See
          the <Link href="/refeeding">Refeed</Link> page for the full schedule.
        </div>
        <div className="question-item">
          <span className="question-label">Continue the Calming Stack Through the Refeed:</span>
          Do not stop cyproheptadine or ketotifen the moment the fast ends. The
          mast cell priming that caused MCAS has not been fully resolved in the
          first cycle. Maintain antihistamine support through the refeed and taper
          slowly as your symptom load decreases over subsequent cycles.
        </div>
      </div>

      <div className="guiding-questions box-danger">
        <h3>Break the Fast Immediately If:</h3>
        <p>
          Resting heart rate exceeds 120 bpm sustained, you have had no urination
          for 24 hours, core temperature is below 35&deg;C or above 38.5&deg;C,
          or you have severe confusion, fainting, or vision changes. These are not
          Herxheimer reactions and are not histamine flares. They are true
          emergencies. See the{" "}
          <Link href="/symptom-management">Symptom Management</Link> page.
        </p>
      </div>

      <p>
        For a deeper look at the Long Covid cascade and the foundational
        supportive-care stack that runs alongside the protocol, see the{" "}
        <Link href="/long-covid-basics">Long Covid Basics</Link> page. For the
        symptom-by-symptom management guide including the full Herxheimer triage
        chart, see <Link href="/symptom-management">Symptom Management</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="guiding-questions box-info">
        {mcasFaq.map((item) => (
          <div className="question-item" key={item.question}>
            <span className="question-label">{item.question}</span>
            {item.answer}
          </div>
        ))}
      </div>

      <RefeedPlanPromo source="mcas-and-dry-fasting" />
      <GuidanceBox />
    </>
  );
}
