import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import InterestingVideoBlock from "@/components/InterestingVideoBlock";
import KeyTakeaways from "@/components/KeyTakeaways";
import StarterKitCallout from "@/components/StarterKitCallout";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import SourcingCallout from "@/components/SourcingCallout";
import HghAccessNote from "@/components/HghAccessNote";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import ProtocolFurtherReading from "@/components/ProtocolFurtherReading";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Phase 5: hGH Therapy",
  description:
    "Phase 5: hGH therapy signals tissue rebuilding after The Scorch, restoring muscle, nerve, and immune system function.",
  alternates: { canonical: "https://scorchprotocol.com/hgh-therapy" },
};

export default function HghTherapyPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Phase 5: hGH Therapy", description: "Phase 5: hGH therapy signals tissue rebuilding after The Scorch, restoring muscle, nerve, and immune system function.", path: "/hgh-therapy", breadcrumbName: "hGH Therapy" })} />
      <h1>Phase 5: hGH Therapy (Rebuilding Your Body)</h1>
      <StarterKitCallout />

      <KeyTakeaways points={[
        "hGH is the rebuild signal. Dry fasting clears damaged cells, T3 restores metabolic power, and hGH tells your body to build new healthy muscle and immune tissue from what was freed.",
        "hGH is not a phase everyone reaches. It enters around the third cycle, when two cycles of fasting plus T3 have not done enough: insulin resistance where food is not tolerated, extreme muscle loss, really bad sleep. It is an add-on to the T3 cycle, a supercharging of it, not something that waits until all T3 is finished.",
        "Once you are on hGH, stay on it for at least three to six months. Two ways to run it: regeneration with continuous calories and no fasting, or keep cycling the fasts, in which case the hGH dosing pattern has to change because exogenous hGH suppresses your own output, and that pattern is set with me case by case, not from this page. At the end you wean off and allow about 30 days for your own production to come back before any fast.",
        "Cyproheptadine and hGH work together. Injected hGH bypasses the pituitary signal cyproheptadine blunts, so you do not need to stop cyproheptadine before starting hGH.",
        "Some people need to eat significantly more calories than they ever have during this phase. Without enough fuel, the rebuild cannot happen. In the growth-hormone-deficiency research, around nine months of treatment is often needed before people feel substantial results.",
        "hGH is the preferred base: it is the actual hormone, so it needs nothing from your body to work, puts the least strain on the system, and gives the most benefit. If you truly cannot access hGH, CJC-1295 + Ipamorelin can be tried to help wake up your own pituitary, but it is an awakening aid, not a full replacement.",
      ]} />

      <p>
        This phase is about using Human Growth Hormone (hGH) to help your body
        repair deep tissues and fix your immune system. I have used this
        myself and with my clients to get amazing results. Everyone&rsquo;s
        body is a little different, so you and I have to carefully figure out how it
        works for you.
      </p>

      <HghAccessNote />

      <div
        style={{
          backgroundColor: "rgba(232,93,4,0.10)",
          borderLeft: "5px solid #e85d04",
          padding: "1.25rem 1.5rem",
          borderRadius: "8px",
          margin: "1.5rem 0",
        }}
      >
        <h4 style={{ marginTop: 0, color: "#fdba74" }}>
          Cyproheptadine and hGH Work Together
        </h4>
        <p style={{ marginBottom: 0 }}>
          If you used cyproheptadine during your first T3 cycle (for appetite,
          sleep, or brain-gut calming), you do not need to stop it before hGH.
          Cyproheptadine blunts the pituitary&rsquo;s own signal to release
          growth hormone, but the hGH phase injects growth hormone directly, so
          it bypasses the pituitary and overrides the blunting. The nighttime
          cortisol point does not change this: hGH here is for regeneration and
          calming the nervous system, not overnight fat loss, and its rebuilding
          actions stay active even with cortisol softened. Keep cyproheptadine
          going wherever appetite, gut tolerance, or sleep still call for it.
          See the full cyproheptadine context on the{" "}
          <a href="/t3-therapy#cyproheptadine-caveat">T3 Therapy page</a>.
        </p>
      </div>

      <div
        role="navigation"
        aria-label="On this page"
        style={{
          margin: "1.5rem 0 2rem",
          padding: "1rem 1.25rem",
          borderLeft: "3px solid rgba(232,93,4,0.5)",
          backgroundColor: "rgba(255,255,255,0.02)",
          borderRadius: "4px",
        }}
      >
        <strong style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.95rem" }}>
          Jump to a Section
        </strong>
        <ul style={{ margin: 0, paddingLeft: "1.25rem", fontSize: "0.92rem", lineHeight: 1.8 }}>
          <li><a href="#mechanism">How hGH Works in the Body</a></li>
          <li><a href="#timing">When hGH Starts, How Long It Runs, and the Two Ways to Run It</a></li>
          <li><a href="#practical">Practical: Sourcing and the Synergistic Stack</a></li>
          <li><a href="#research">The Research Case for hGH in Chronic Illness</a></li>
        </ul>
      </div>

      <h2 id="mechanism">How hGH Works in the Body</h2>
      <p>
        Three angles on the same molecule: how hGH triggers the rebuild
        signal, how it directs fat burning, and how it shifts body
        composition toward muscle rather than fat. Read all three before
        starting hGH so the protocol logic makes sense.
      </p>

      <div className="guiding-questions">
        <h3>How hGH Helps You Heal</h3>
        <p>
          <strong>
            Fixing Your Immune System: The Calorie &amp; Building Flood.
          </strong>
          <br />
          Dry fasting cleans out the &ldquo;trash,&rdquo; and hGH sends the
          signal to &ldquo;rebuild&rdquo; through a massive calorie and building
          flood. This phase focuses on flooding the body with energy to signal
          abundance and regeneration. Some may need to eat significantly more
          calories than they ever have to force this process, which can take
          months to years. While weight gain is a common concern (see the
          Minnesota Starvation Experiment), it is often an unavoidable part of
          reclaiming your health. Success here involves maintaining insulin
          sensitivity while maximizing rebuilding, often utilizing peptides and
          ketone strategies as additional co-factors.
        </p>

        <p>
          <strong>
            The &ldquo;Big Three&rdquo;: Fasting, T3, and hGH working together
          </strong>
          <br />
          For many people, using hGH by itself doesn&rsquo;t work. To truly
          heal, you need all three parts of the Scorch Protocol to work
          together:
        </p>
        <ul>
          <li>
            <strong>The Cleanup (Dry Fasting):</strong> This cleans
            out the debris and old proteins that are blocking your body&rsquo;s
            healing signals.
          </li>
          <li>
            <strong>The Power (T3 Therapy):</strong> This turns your
            body&rsquo;s power back on. You can&rsquo;t rebuild your body if
            you don&rsquo;t have enough energy (ATP) to do the work.
          </li>
          <li>
            <strong>The Rebuild (hGH):</strong> Once the fast has cleared the
            ground and T3 has the power on, hGH gives the command to build new,
            healthy cells and &ldquo;power plants&rdquo; (mitochondria). In
            practice it rides on top of a T3 cycle as an add-on; it does not
            wait until every T3 course is finished. See the timing section
            below for when it enters.
          </li>
        </ul>

        <div
          style={{
            backgroundColor: "rgba(41,128,185,0.12)",
            borderLeft: "5px solid #2980b9",
            padding: "1.5rem",
            borderRadius: "8px",
            margin: "2rem 0",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#63b3ed" }}>
            A New Way to Look at Chronic Illness
          </h4>
          <p>
            Doctors now believe that some chronic illnesses trap the body in a
            cycle of inflammation where low growth hormone levels stop the body
            from repairing itself. Using hGH helps your body stop burning sugar
            inefficiently and starts using its best fuel source for energy
            again.
          </p>
          <p>
            <strong>How long does it take?</strong> Studies show that people
            with low growth hormone often need{" "}
            <strong>9 months of treatment</strong> to feel better. Be
            patient, it takes time to rebuild your body&rsquo;s energy and
            reverse your symptoms.
          </p>
        </div>

        <p>
          <strong>Why Fasting isn&rsquo;t Always Enough:</strong> While fasting
          helps your body make more growth hormone at first, doing it too much
          or not eating enough can actually lower your hormone levels later on.
        </p>
        <p>
          <strong>What the Research Says:</strong> One study showed that
          &ldquo;starvation&rdquo; could drop growth hormone levels by{" "}
          <strong>up to 50%</strong> for several months. This means some people
          may need extra hGH support to make sure their body keeps healing after
          a fast.
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>How hGH Helps You Burn Fat</h3>
        <p>
          During a fast, your body makes more growth hormone to help you burn
          fat for fuel. This is what helps your body make ketones, which your
          brain uses for energy when you aren&rsquo;t eating.
        </p>
        <p>
          <strong>The &ldquo;Over-Fasting&rdquo; Problem:</strong> If you fast
          too often or for too long, your body might stop making enough growth
          hormone. When this happens, you might notice that you aren&rsquo;t
          losing much fat anymore, even if you aren&rsquo;t eating. You might
          also feel more tired or take longer to recover. Some people mistake
          this for being sick again and try to fast more, but that only makes
          the problem worse. This is why I focus on using hGH to break that
          cycle.
        </p>
      </div>

      <div className="guiding-questions box-success">
        <h3>Rebuilding Muscle, Not Fat</h3>
        <p>
          One of the hardest parts of the Scorch Protocol is the{" "}
          <strong>Refeeding Phase</strong>. After a long fast, your body is
          desperate for food. If your hormones aren&rsquo;t balanced, your body
          will want to store all that new food as fat instead of muscle.
        </p>
        <p>
          <strong>The Fix:</strong> This is where hGH therapy helps. It tells
          your body to use those nutrients to rebuild your muscles and organs
          instead of just making you gain fat.
        </p>
        <div className="question-item">
          <span className="question-label">What the Science Shows:</span>
          <p>
            A study on animals showed a big difference between just eating again
            and eating while using hGH:
          </p>
          <ul>
            <li>
              <strong>Without hGH:</strong> Rebuilding body weight was slow, and
              they didn&rsquo;t gain extra muscle.
            </li>
            <li>
              <strong>With hGH:</strong> They rebuilt their body weight in just{" "}
              <strong>9 weeks</strong> and actually grew more muscle than they
              had before.
            </li>
          </ul>
          <p>
            Using hGH while you start eating again ensures your body becomes
            stronger and leaner than it was before you started.
          </p>
        </div>
      </div>

      <h2 id="timing">When hGH Starts, How Long It Runs, and the Two Ways to Run It</h2>
      <p>
        The most common mistake with hGH is reaching for it too early, or
        treating it as the step that automatically follows T3. It is neither.
        Here is how I place it inside the protocol.
      </p>

      <div className="guiding-questions box-warning">
        <h3>Around the Third Cycle, and Only If the First Two Were Not Enough</h3>
        <div className="question-item">
          <span className="question-label">The trigger:</span>
          A cycle is a fast, a refeed and a 30-day T3 course, with the next
          fast opening seven days after the T3 course ends. hGH starts around
          the third cycle, once the first two cycles have shown they are not
          doing enough on their own. The signs that make it warranted are
          specific: insulin resistance so marked that food is not tolerated,
          muscle loss that is extreme, and sleep that is really bad. Still
          having problems after two cycles, with that picture, is when I say we
          need regeneration and bring hGH in.
        </div>
        <div className="question-item">
          <span className="question-label">An add-on, not a successor:</span>
          hGH is run together with T3. Think of it as supercharging the cycle
          rather than as a separate phase that waits until every T3 course is
          over. The T3 keeps the power on; the hGH tells the body what to build
          with it.
        </div>
        <div className="question-item">
          <span className="question-label">At least three to six months:</span>
          Once you are on hGH you stay on it for at least three to six months.
          Short runs do not rebuild anything. This is the stretch where the
          calorie flood described above has to be real.
        </div>
      </div>

      <div className="guiding-questions box-info">
        <h3>The Two Ways to Run It</h3>
        <div className="question-item">
          <span className="question-label">Mode 1: Regeneration, no fasting.</span>
          Stop the fasting for the duration, eat continuous calories, and let
          the hGH do pure rebuild work. This is the straightforward version,
          and for someone with extreme muscle loss or food intolerance it is
          usually the right one.
        </div>
        <div className="question-item">
          <span className="question-label">Mode 2: Keep cycling, with the dosing changed.</span>
          You can keep running the fasts while on hGH, but the dosing has to
          change. Exogenous hGH suppresses your own production, so a single
          daily dose leaves you with nothing of your own through a fast. The
          pattern that covers that suppression is something I set with you
          case by case, not something I print here: nothing published has
          tested fasting on hGH, and the one study that came closest found
          worse ketosis and no protein sparing (see the evidence box below).
        </div>
        <div className="question-item">
          <span className="question-label">Coming off: allow about 30 days before any fast.</span>
          When the three to six months are done you wean off, and it can take
          about 30 days for your natural production to come back up. Do not
          fast in that window. Once your own output is back, you can fast
          again in future without worrying about it.
        </div>
        <p>
          <em>
            Medical caveat: hGH is a prescription or restricted hormone with
            real metabolic and endocrine effects. The trigger, the mode and the
            dosing split are decided case by case with me and with whoever
            prescribes it, never from this page alone.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>What the Evidence Says About hGH and Fasting</h3>
        <p>
          Fasting raises your own growth hormone: a two-day fast multiplied the
          24-hour output about fivefold in healthy men, and a five-day fast
          raised the number of pulses from about six to about ten a day
          (Hartman 1992; Ho 1988). In a 40-hour fast, keeping growth hormone
          present stopped the rise in muscle protein breakdown (N&oslash;rrelund
          2001), which is why I read extreme muscle loss as a sign that points
          at this axis. The only study that gave hGH across a multi-week fast
          found worse ketosis, higher glucose and insulin, nausea and muscle
          pain, and no net protein sparing (Felig 1971), so the keep-cycling
          mode is my practice, not something the literature has tested. No
          published study has dosed hGH four times a day by injection under the
          skin; twice a day is the most frequent injection schedule tested
          (Laursen 1994).
        </p>
        <p>
          Exogenous growth hormone does suppress your own output (Hashimoto
          2000), and endocrinology does not retest the axis until one to three
          months off treatment (Tavares and Collett-Solberg 2021), so my 30
          days is the short end of that window; nobody has measured the
          recovery curve in adults after months of dosing. Marked caveat on
          cancer: growth hormone is contraindicated with an active cancer (Kim
          2020). In the largest long-term surveillance of adults on
          replacement doses, new cancer incidence matched the general
          population (Johannsson 2022), but that is replacement dosing, lower
          than what I use, so a past cancer is a case-by-case conversation
          with your oncology history in front of me, never an automatic yes.
        </p>
      </div>

      <h2 id="practical">Practical: Sourcing and the Synergistic Stack</h2>
      <p>
        Once you understand what hGH does, the next questions are where
        to get it safely and what other peptides amplify its effect
        during recovery. This section covers both.
      </p>

      <div className="guiding-questions box-info">
        <h3>Where to Get hGH</h3>
        <p>
          It is very important to get high-quality hGH, as many products sold
          online are fake or low-quality. There are a few realistic paths:
        </p>
        <ul>
          <li>
            <strong>Prescription:</strong> hGH can be prescribed by a doctor in
            many countries for documented deficiency. This is the cleanest
            route if you can get it.
          </li>
          <li>
            <strong>UGL Labs:</strong> Underground labs (UGLs) are the more
            accessible and affordable option for most people. Nearly every
            country has some way to access UGL-sourced hGH if you do the right
            digging in your local community. The catch is that UGL products are
            not subject to any pharmaceutical quality control: purity and actual
            dose vary, and contaminated batches do exist. The prescription route
            above is bioidentical and verifiable, so it is worth pursuing first.
            If you do go the UGL route, use a source that provides third-party
            purity testing and start at the lowest sensible dose.
          </li>
          <li>
            <strong>Can&rsquo;t access either?</strong> hGH is strongly
            preferred as the base, but if it is truly out of reach you can try{" "}
            <strong>CJC-1295 + Ipamorelin</strong> to stimulate and speed up
            your own pituitary&rsquo;s awakening. These do not replace hGH, they
            only nudge your GH axis to wake back up, so treat them as an
            awakening aid rather than a full substitute.
          </li>
        </ul>
        <p>
          <em>
            If you have trouble finding what you need, I can help point
            you in the right direction.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-info">
        <h3>Synergistic Peptides During Recovery</h3>
        <p>
          For certain people, the protocol has missing keys that no amount of
          fasting or hormones will unlock on their own. These three peptides
          address immune, gut, and energy axes that are commonly broken in
          chronic illness:
        </p>
        <div className="question-item">
          <span className="question-label">Thymalin (Thymic Peptide):</span>
          A peptide derived from the thymus gland that directly stimulates
          immune system regeneration. Particularly valuable for people whose
          immune dysregulation is the core driver of their illness; it
          essentially &ldquo;reboots&rdquo; thymic output, which declines with
          age and chronic stress. Pairs powerfully with hGH&rsquo;s
          tissue-rebuilding signal.
        </div>
        <div className="question-item">
          <span className="question-label">BPC-157 (Body Protection Compound):</span>
          One of the most researched healing peptides available. Accelerates
          repair of the gut lining, tendons, nerves, and vascular tissue.
          For people with a damaged gut (leaky gut, SIBO, chronic
          inflammation), BPC-157 can be a critical bridge that allows
          nutrients to actually absorb during the rebuild phase. Also shows
          strong synergy with stem cell activity post-fast (see Refeeding
          page).
        </div>
        <div className="question-item">
          <span className="question-label">Retatrutide (GLP-1/GIP/Glucagon Triple Agonist):</span>
          A newer triple-agonist peptide that activates glucagon signaling
          alongside GLP-1 and GIP. For people stuck in low-energy states with
          poor glucose utilization, the glucagon component can raise baseline
          energy availability in a way that nothing else does. Consider this
          for cases where fatigue persists despite normalized temperatures and
          adequate caloric intake.
        </div>
        <p>
          <em>
            Not everyone needs all three. Think of them as targeted keys for
            specific locks (immune, gut, and metabolic energy). Identify your
            weakest axis and start there.
          </em>
        </p>
      </div>

      <div className="guiding-questions box-success">
        <h3>The Final Step: Testosterone, After the Rebuild Is Underway</h3>
        <p>
          In my own recovery, testosterone was the last lever, not
          an early one. It goes in only after the earlier work is done: the fast
          has cleared the ground, T3 has restored metabolic power, and the hGH
          rebuild is already established. On that base, testosterone adds
          mitochondrial density and muscle and acts as the anabolic counterweight
          to the catabolic, high-cortisol state chronic illness leaves behind.
          Adding it before the prior cycles are complete is building density on
          an engine that is not yet running. This ordering is my
          clinical framework rather than a tested protocol.
        </p>
        <div className="question-item">
          <span className="question-label">How it is run:</span>
          Case by case, only once prior cycles and blood work support it. Monitor
          hematocrit and hemoglobin (testosterone thickens the blood), and let
          estradiol rise rather than reflexively crushing it, since some of
          testosterone&rsquo;s benefits run through the estradiol it converts
          into.
        </div>
        <p>
          <em>
            Medical caveat: testosterone is a prescription therapy with real
            cardiac, hematologic, and endocrine risks. Every dose and change is
            an individualized, physician-supervised decision, not a self-serve
            lever.
          </em>
        </p>
      </div>

      <h2 id="research">The Research Case for hGH in Chronic Illness</h2>
      <p>
        The published mechanism for why this matters specifically for
        chronic illness recovery: thymic regeneration, immune
        restoration, mitochondrial biogenesis, and tissue repair under
        conditions of long-term suppression.
      </p>

      <div className="guiding-questions box-info">
        <h3>Why hGH Works for Chronic Illness: The Research Case</h3>
        <p>
          If you have been sick for years, you are not just dealing with a
          pathogen or an immune glitch: your body has physically degraded.
          Muscle wasted. Immune tissue atrophied. The thymus, which produces
          your T-cells, has shrunk. No amount of fasting or antivirals rebuilds
          that. hGH does.
        </p>
        <div className="question-item">
          <span className="question-label">Thymus Regeneration &amp; Immune Rebuilding:</span>
          Clinical research, including the TRIIM trial, has demonstrated that
          hGH can physically regenerate the thymus gland, replacing fat tissue
          with functional immune tissue and increasing the production of
          &ldquo;naive&rdquo; T-cells (the immune cells your body uses to
          recognize new threats). These are the same cells that chronic illness
          depletes. Some studies show epigenetic aging reversal still detectable
          six months after stopping treatment, and increased T-cell output
          lasting up to a year post-discontinuation.
        </div>
        <div className="question-item">
          <span className="question-label">hGH vs. secretagogues:</span>
          hGH is the preferred base. It is the actual hormone, so it needs
          nothing from your body to work, puts the least strain on the system,
          and gives the most benefit: strong muscle and tissue rebuilding,
          pronounced thymic regeneration, and a direct anabolic signal to every
          cell. Secretagogues like CJC-1295 + Ipamorelin only prompt your own
          pituitary to release GH, so they depend on your axis responding and do
          not replace hGH. I keep them for one narrow job: helping to wake up
          and speed the pituitary&rsquo;s own recovery.
        </div>
        <div className="question-item">
          <span className="question-label">Safety &amp; Immunogenicity:</span>
          Modern recombinant hGH is bioidentical to what your pituitary
          produces. As a result, the immune system rarely recognizes it as
          foreign, with antibody formation rates in adults of approximately 2 to 3%,
          far lower than many common medications. Peptide secretagogues, by
          comparison, can provoke antibody responses against the peptide (usually
          without clinical impact), one more reason hGH stays the base. For most
          people, well-sourced recombinant hGH is remarkably well tolerated.
        </div>
        <div className="question-item">
          <span className="question-label">The Bottom Line:</span>
          You are already doing the hardest part by dry fasting and
          committing to this protocol. hGH is not a shortcut; it is the
          targeted rebuilding signal that tells your body to use everything the
          fast liberated. Stem cells mobilized. Immune system primed. The only
          thing left is giving your body the hormonal instruction to rebuild.
          That is what hGH provides.
        </div>
      </div>

      <InterestingVideoBlock
        videoSrc="https://www.youtube.com/embed/Wsp0o8LalfY"
      />

      <RefeedPlanPromo source="hgh-therapy" />
      <SourcingCallout heading="Can't source real hGH or peptides?" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="hgh-therapy" sectionTitle="Phase 5: hGH Therapy" />

      <ReferencesSection
        refs={[
          {
            citation: "Comprehensive assessment of body composition during absolute (dry) fasting.",
            note: "the growth-hormone surge acting anti-catabolically to spare lean mass while burning fat",
          },
          {
            citation: "Hypertonic stress promotes autophagy and microtubule-dependent autophagosomal clusters. Autophagy, 2013.",
            note: "dehydration stress as a potent trigger for clearing misfolded protein aggregates",
          },
          {
            citation: "Dry fasting and the immune system (Khoroshilov series).",
            note: "fasting as an immune reset, with sustained cytotoxic T-cell and NK-cell activity",
          },
          {
            citation: "Cahill GF Jr. Starvation in Man. New England Journal of Medicine, 1970.",
            note: "ketone metabolism and protein sparing that the rebuild phase relies on",
          },
          {
            citation: "Fahy GM, Brooke RT, Watson JP, et al. Reversal of epigenetic aging and immunosenescent trends in humans (the TRIIM trial). Aging Cell, 2019;18(6):e13028.",
            href: "https://doi.org/10.1111/acel.13028",
            note: "recombinant hGH (with DHEA and metformin) regenerated the thymus and reversed epigenetic age markers",
          },
          {
            citation:
              "Ho KY, Veldhuis JD, Johnson ML, et al. Fasting enhances growth hormone secretion and amplifies the complex rhythms of growth hormone secretion in man. J Clin Invest, 1988;81(4):968-975. PMID 3127426. DOI 10.1172/JCI113450.",
            href: "https://doi.org/10.1172/JCI113450",
            note: "a five-day fast raised GH pulse frequency from about six to about ten pulses per 24 hours",
          },
          {
            citation:
              "Hartman ML, Veldhuis JD, Johnson ML, et al. Augmented growth hormone (GH) secretory burst frequency and amplitude mediate enhanced GH secretion during a two-day fast in normal men. J Clin Endocrinol Metab, 1992;74(4):757-765. PMID 1548337. DOI 10.1210/jcem.74.4.1548337.",
            href: "https://doi.org/10.1210/jcem.74.4.1548337",
            note: "two days of fasting produced a fivefold rise in the 24-hour GH production rate in healthy men",
          },
          {
            citation:
              "Nørrelund H, Nair KS, Jørgensen JO, Christiansen JS, Møller N. The protein-retaining effects of growth hormone during fasting involve inhibition of muscle-protein breakdown. Diabetes, 2001;50(1):96-104. PMID 11147801. DOI 10.2337/diabetes.50.1.96.",
            href: "https://doi.org/10.2337/diabetes.50.1.96",
            note: "in a 40-hour fast, suppressing GH raised muscle protein breakdown and replacing it prevented that rise",
          },
          {
            citation:
              "Felig P, Marliss EB, Cahill GF Jr. Metabolic response to human growth hormone during prolonged starvation. J Clin Invest, 1971;50(2):411-421. DOI 10.1172/JCI106508.",
            href: "https://www.jci.org/articles/view/106508",
            note: "the only study of hGH across a multi-week fast: worse ketosis, higher glucose and insulin, nausea and muscle pain, and no net protein sparing",
          },
          {
            citation:
              "Hashimoto Y, Kamioka T, Hosaka M, et al. Exogenous 20K growth hormone (GH) suppresses endogenous 22K GH secretion in normal men. J Clin Endocrinol Metab, 2000;85(2):601-606. PMID 10690862. DOI 10.1210/jcem.85.2.6377.",
            href: "https://doi.org/10.1210/jcem.85.2.6377",
            note: "injected GH suppresses the pituitary's own output in normal men; the reason the fasting-mode dosing changes and the reason for the wean",
          },
          {
            citation:
              "Tavares ABW, Collett-Solberg PF. Growth hormone deficiency and the transition from pediatric to adult care. J Pediatr (Rio J), 2021;97(6):595-602. DOI 10.1016/j.jped.2021.02.007.",
            href: "https://www.jped.com.br/en-growth-hormone-deficiency-transition-from-articulo-S0021755721000541",
            note: "clinical practice requires one to three months off rhGH before the axis is retested; the 30 days here is the short end of that window",
          },
          {
            citation:
              "Laursen T, Jørgensen JO, Christiansen JS. Metabolic effects of growth hormone administered subcutaneously once or twice daily to growth hormone deficient adults. Clin Endocrinol (Oxf), 1994;41(3):337-343. PMID 7525120. DOI 10.1111/j.1365-2265.1994.tb02554.x.",
            href: "https://doi.org/10.1111/j.1365-2265.1994.tb02554.x",
            note: "twice daily is the most frequent subcutaneous injection schedule tested in people; no study has dosed hGH four times a day by injection under the skin",
          },
          {
            citation:
              "Kim JH, Chae HW, Chin SO, et al. Diagnosis and Treatment of Growth Hormone Deficiency: A Position Statement from Korean Endocrine Society and Korean Society of Pediatric Endocrinology. Endocrinol Metab (Seoul), 2020;35(2):272-287. DOI 10.3803/EnM.2020.35.2.272.",
            href: "https://doi.org/10.3803/EnM.2020.35.2.272",
            note: "GH treatment is contraindicated in active malignancy (basal and squamous cell skin cancers excepted); IGF-1 is titrated to the age-adjusted reference range",
          },
          {
            citation:
              "Johannsson G, Touraine P, Feldt-Rasmussen U, et al. Long-term Safety of Growth Hormone in Adults With Growth Hormone Deficiency: Overview of 15 809 GH-Treated Patients. J Clin Endocrinol Metab, 2022;107(7):1906-1919. PMID 35368070. DOI 10.1210/clinem/dgac199.",
            href: "https://doi.org/10.1210/clinem/dgac199",
            note: "new cancer incidence in adults on GH replacement matched the general population; replacement dosing, below the range used here",
          },
        ]}
      />

      <ProtocolFurtherReading protocolSlug="hgh-therapy" />
    </>
  );
}
