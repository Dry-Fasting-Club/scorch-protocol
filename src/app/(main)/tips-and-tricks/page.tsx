import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";
import KeyTakeaways from "@/components/KeyTakeaways";
import ReferencesSection from "@/components/ReferencesSection";

export const metadata: Metadata = {
  title: "Tips and Tricks",
  description:
    "Practical tips from experienced Scorch Protocol practitioners: supplements, timing, sourcing, and what to expect week by week.",
  alternates: { canonical: "https://scorchprotocol.com/tips-and-tricks" },
};

export default function TipsAndTricksPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Tips and Tricks", description: "Practical tips from experienced Scorch Protocol practitioners: supplements, timing, sourcing, and what to expect week by week.", path: "/tips-and-tricks", breadcrumbName: "Tips and Tricks" })} />
      <h1>Tips and Tricks for Successful Dry Fasting</h1>
      <KeyTakeaways points={[
        "The bookends matter most: preparation and the refeed determine whether the fast's gains stick. The fast itself is the easy part.",
        "During the fast, prioritize rest and a cool environment. Light walking is fine; intense exercise is not.",
        "Always break the fast with plain water, about a cup an hour for the first four hours, then kompot. Coconut water waits for day 2. Rushing the refeed can cause refeeding syndrome or digestive distress.",
        "Start small: build tolerance with 36-hour, then 72-hour fasts before attempting a full 5-day dry fast.",
      ]} />

      <p>
        This page contains practical wisdom from dry fasting experts and the{" "}
        <strong>Dry Fasting Club</strong> community. Use these tips to optimize
        your fasting experience and maximize healing benefits.
      </p>

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
          <li><a href="#phase-tips">Phase Tips: Before, During, and Breaking the Fast</a></li>
          <li><a href="#general-wisdom">General Wisdom and Mindset</a></li>
        </ul>
      </div>

      <h2 id="phase-tips">Phase Tips: Before, During, and Breaking the Fast</h2>
      <p>
        Practical wisdom for each phase of the fasting block. Most of the
        common rookie mistakes happen because people skip the preparation
        and refeed advice and focus only on the fast itself. The fast is
        the easy part. The bookends are what determine whether the work
        sticks.
      </p>

      <div className="guiding-questions box-info">
        <h3>Before the Fast</h3>
        <ul>
          <li>
            <strong>Hydrate Properly:</strong> In the 24-48 hours before your
            fast, drink plenty of water with electrolytes, and make the last day
            juice only (fresh, no pulp) so you go in hydrated with as little as
            possible left in the colon. Avoid overhydration immediately before
            starting, as this can cause discomfort.
          </li>
          <li>
            <strong>Eat Light Into It:</strong> For the last one to two days,
            no oils, no meat, nothing hard to digest. Everyone does a colon
            cleanse, set with me: a few days of pulp-free juice at the gentle
            end, a week of higher-dose magnesium citrate at the strong end (it
            keeps the bowel moving and lowers the kidney-stone risk). No
            enemas, no colonics: flushing the bowel is a stressor of its own,
            and the protocol does not need it. A liver flush is case by case,
            my call with no trial behind it: worth it after a long history on
            liver-intensive, fat-soluble medications or when motility has truly
            failed; on few or no medications, skip it.
          </li>
          <li>
            <strong>Follow Your Prep Path:</strong> What you eat in the days
            before matters more than most realize. The plant-based path finishes
            on raw and steamed vegetables; the ketogenic path keeps you fat-based
            and low-carb. Either way, avoid heavy, processed foods. See the{" "}
            <a href="/preparation">Preparation page</a> for the full taper of
            both paths.
          </li>
          <li>
            <strong>Mental Preparation:</strong> Set clear intentions. Journal
            about why you&rsquo;re fasting and what you hope to achieve. This
            mental clarity will sustain you through difficult moments.
          </li>
          <li>
            <strong>Clear Your Schedule:</strong> Plan your fast during a period
            with minimal obligations. You need rest, not stress.
          </li>
          <li>
            <strong>Inform Someone:</strong> Always tell a trusted friend or
            family member about your fast, especially for longer durations
            (72h+).
          </li>
        </ul>
      </div>

      <div className="guiding-questions box-info">
        <h3>During the Fast</h3>
        <ul>
          <li>
            <strong>Rest is King:</strong> Your body is doing deep cellular
            work. Prioritize sleep and rest. Light walking is fine, but avoid
            intense exercise.
          </li>
          <li>
            <strong>Cool Environment:</strong> Keep your room cool and
            well-ventilated. Heat increases water loss and discomfort.
          </li>
          <li>
            <strong>Dry Skin Brushing:</strong> Gentle dry brushing helps
            lymphatic drainage and detoxification. Brush toward the heart in
            circular motions.
          </li>
          <li>
            <strong>Tongue Scraping:</strong> Your tongue will develop a coating
            as toxins are released. Scrape it gently to reduce bad breath and
            support detox.
          </li>
          <li>
            <strong>Minimal Talking:</strong> Speaking dries out your mouth and
            throat. Conserve energy and moisture by staying quiet.
          </li>
          <li>
            <strong>Distraction Techniques:</strong> Read, meditate, watch light
            content, or listen to music. Keep your mind occupied but not
            overstimulated.
          </li>
          <li>
            <strong>Monitor Your Body:</strong> Track heart rate, weight, and
            urine color/frequency. These are key indicators of how your body is
            responding.
          </li>
          <li>
            <strong>Trust the Process, Within Limits:</strong> Discomfort is
            normal, especially during the acidosis crisis (24-72h). This is when
            the deepest healing occurs. When you feel worse, walk, massage, move
            the whole system (see the next item). As long as heart rate,
            temperature, blood pressure and urination look fine, you can
            continue. If it starts to feel really bad, or the pain is
            excruciating, break the fast. That is the rule, not a failure.
            <br />
            <em>
              What the evidence says: the fasting clinics track the same
              readings daily, and their stop rules are concrete: the German
              fasting guideline stops for a higher-grade arrhythmia, for
              potassium below 3.0 or sodium below 125 mmol/L, or for
              circulatory depression lasting two days, and otherwise treats a
              fasting crisis as a possible healing crisis (&Auml;GHE 2002); in
              the Buchinger cohort of 1,422 supervised fasts, heart rate did
              not rise and serious events were rare (Wilhelmi de Toledo 2019).
              Urine colour is a weak guide in a dry fast, because dark,
              concentrated urine is the expected state and the colour charts
              were validated on hydrated athletes (Armstrong 1994); the kidney
              guideline counts no urine for 12 hours as stage 3 kidney injury
              (KDIGO 2012). The clinics also use a standing check, and so do my
              stop rules: my stop is a drop of more than 30 mmHg on standing,
              while their standard early sign of low blood volume comes sooner,
              at a rise of 30 beats or a systolic drop of more than 20 mmHg
              (Freeman 2011; Sheldon 2015). Walking has support from the
              water-fasting trials, where daily low-intensity movement
              preserved strength (Laurens 2021); massage has no trial evidence
              in fasting of any kind, so count it as comfort. Marked caveat:
              all of this was collected on water fasts with fluids; nobody has
              published stopping criteria for a dry fast.
            </em>
          </li>
          <li>
            <strong>Organ Massage &amp; Movement:</strong> Massaging the liver
            and kidney areas helps move lymph and relieve tension in dehydrated
            organs. If assistance isn&rsquo;t available, use a foam roller or
            massage ball. Kidney pain is often due to dehydration and electrolyte
            shifts; manual massage helps processing. Walking also acts as an
            &ldquo;internal massage&rdquo; and increases oxygenation needed for
            fat burning.
          </li>
          <li>
            <strong>Avoid Screens Before Bed:</strong> Blue light can disrupt
            sleep. Prioritize quality rest for optimal healing.
          </li>
        </ul>
      </div>

      <div className="guiding-questions box-warning">
        <h3>Breaking the Fast</h3>
        <ul>
          <li>
            <strong>Go Slow:</strong> The refeed is as important as the fast
            itself. Rushing can cause digestive distress or refeeding syndrome.
          </li>
          <li>
            <strong>Water First, Then Kompot:</strong> Start with plain water,
            room temperature, small sips, about a cup an hour for the first
            four hours and 1 litre at most. Once you are urinating normally,
            kompot (a weak unsweetened fruit infusion) joins at the same pace.
            Coconut water is not a day-1 drink: it loads potassium into thick
            blood while the kidneys are still holding water, so it waits for
            day 2. The caveat: if a diuretic kick-start is clearly needed, a
            small unsweetened coconut water may come in, not before about 12
            hours after the first water, at most 250 ml in an hour and 500 ml
            for the day.
          </li>
          <li>
            <strong>Listen to Your Body:</strong> If you feel nauseous or
            uncomfortable, slow down. Your digestive system is waking up.
          </li>
          <li>
            <strong>Avoid Overeating:</strong> You may feel ravenous, but your
            stomach has shrunk. Small portions are key.
          </li>
          <li>
            <strong>Follow the Rice/Fruit Protocol:</strong> Stick to the
            structured refeed plan for optimal stem cell activation and healing.
            See the <a href="/refeeding">Refeeding Page</a> for details.
          </li>
        </ul>
      </div>

      <h2 id="general-wisdom">General Wisdom and Mindset</h2>
      <p>
        The lessons that do not fit neatly into a single phase. These
        apply across the entire protocol, from your first 36-hour fast
        through your tenth 5-day cycle.
      </p>

      <div className="guiding-questions box-info">
        <h3>General Wisdom</h3>
        <ul>
          <li>
            <strong>Start Small:</strong> Never jump straight to a 5-day fast.
            Build tolerance with 36h, then 72h, then longer durations.
          </li>
          <li>
            <strong>How Deep:</strong> Five days dry is the cap because five
            days is still safe to do at home. Once it is very comfortable you
            can extend a little; some people get their best results from seven
            to nine days, and the deeper fast is the more aggressive immune
            reset. An extension you earn, not a target you set.
          </li>
          <li>
            <strong>Timing Matters:</strong> Many people find it easier to start
            a fast in the evening after dinner. This way, you sleep through the
            first 8-12 hours.
          </li>
          <li>
            <strong>Seasonal Considerations:</strong> Fasting in cooler months
            (fall/winter) is often easier than in hot summer months.
          </li>
          <li>
            <strong>Emotional Releases:</strong> Fasting can trigger emotional
            releases (crying, anger, or deep sadness). This is part of the
            healing process. Allow it to happen.
          </li>
          <li>
            <strong>Post-Fast Energy:</strong> Many people experience a surge of
            energy and mental clarity after breaking the fast. This is the stem
            cell activation kicking in.
          </li>
          <li>
            <strong>Frequency:</strong> My cycle is a fast, a refeed and, when
            the refeed shows a metabolic slowdown, a 30-day T3 course. The next
            fast opens seven days after the T3 course ends. Full recovery
            between fasts is not optional, and the rare fast is the powerful
            fast.
          </li>
        </ul>
      </div>

      {/* FaithBlock hidden for now: to restore, remove the `false && (` wrapper and matching `)` */}
      {false && (
      <FaithBlock
        title="Put On the Full Armor of God: We Do Not Apologize for Naming Evil"
      >
        <p>
          <strong>Ephesians 6:10-12: &ldquo;Put on the full armor of God, so that you can take your stand against the devil&rsquo;s schemes. For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world.&rdquo;</strong>
        </p>
        <p>
          Chronic illness has a way of making people small, too tired to speak. Part of what this protocol reclaims is your voice.
        </p>
        <p>
          <strong>Stand firm. And having done everything, stand.</strong>
        </p>
      </FaithBlock>
      )}

      <RefeedPlanPromo source="tips-and-tricks" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="tips-and-tricks" sectionTitle="Tips and Tricks" />

      <ReferencesSection
        refs={[
          {
            citation:
              "Ärztegesellschaft Heilfasten und Ernährung (ÄGHE). Leitlinien zur Fastentherapie. Forschende Komplementärmedizin und Klassische Naturheilkunde, 2002;9:189-198.",
            href: "https://karger.com/fkm/article-pdf/9/3/189/4207114/000064270.pdf",
            note: "the only published numeric stop list for fasting: higher-grade arrhythmia, potassium below 3.0 or sodium below 125 mmol/L, circulatory depression for two days; daily gentle movement recommended, fasting crises treated as possible healing crises",
          },
          {
            citation:
              "Wilhelmi de Toledo F, Grundler F, Bergouignan A, Drinda S, Michalsen A. Safety, health improvement and well-being during a 4 to 21-day fasting period in an observational study including 1422 subjects. PLoS One, 2019;14(1):e0209353. PMID 30601864. DOI 10.1371/journal.pone.0209353.",
            href: "https://doi.org/10.1371/journal.pone.0209353",
            note: "the Buchinger cohort: daily blood pressure and pulse, heart rate unchanged, serious events rare, daily walks part of the programme; water-type fasting with about three litres of fluid a day",
          },
          {
            citation:
              "Armstrong LE, Maresh CM, Castellani JW, et al. Urinary indices of hydration status. Int J Sport Nutr, 1994;4(3):265-279. PMID 7987361. DOI 10.1123/ijsn.4.3.265.",
            href: "https://doi.org/10.1123/ijsn.4.3.265",
            note: "the urine colour chart was validated in hydrated athletes; in a dry fast dark urine is the expected state, so colour cannot separate safe concentration from failing kidneys",
          },
          {
            citation:
              "Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements, 2012;2(1):1-138.",
            href: "https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf",
            note: "no urine for 12 hours is stage 3 acute kidney injury; dry-fasting urine output sits at the oliguria line by design, so no urine at all is the signal",
          },
          {
            citation:
              "Sheldon RS, Grubb BP 2nd, Olshansky B, et al. 2015 Heart Rhythm Society expert consensus statement on the diagnosis and treatment of postural tachycardia syndrome, inappropriate sinus tachycardia, and vasovagal syncope. Heart Rhythm, 2015;12(6):e41-e63. PMID 25980576. DOI 10.1016/j.hrthm.2015.03.029.",
            href: "https://doi.org/10.1016/j.hrthm.2015.03.029",
            note: "restates the orthostatic definitions: a heart-rate rise of 30 beats or more on standing, a systolic fall of more than 20 mmHg; earlier signs of low blood volume than a resting reading",
          },
          {
            citation:
              "Freeman R, Wieling W, Axelrod FB, et al. Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome. Clin Auton Res, 2011;21(2):69-72. PMID 21431947.",
            href: "https://pubmed.ncbi.nlm.nih.gov/21431947/",
            note: "the consensus definitions: orthostatic hypotension is a systolic fall of more than 20 mmHg on standing, postural tachycardia a rise of 30 beats or more",
          },
          {
            citation:
              "Laurens C, Grundler F, Damiot A, et al. Is muscle and protein loss relevant in long-term fasting in healthy men? A prospective trial on physiological adaptations. J Cachexia Sarcopenia Muscle, 2021;12(6):1690-1703. PMID 34668663. DOI 10.1002/jcsm.12766.",
            href: "https://doi.org/10.1002/jcsm.12766",
            note: "sixteen healthy men through ten Buchinger fasting days with daily low-intensity exercise kept their strength; the support for walking during a fast, with no equivalent trial for massage",
          },
        ]}
      />
    </>
  );
}
