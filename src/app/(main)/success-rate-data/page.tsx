import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";
import KeyTakeaways from "@/components/KeyTakeaways";
import EmailCapture from "@/components/EmailCapture";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Results: What Improves, and For Whom",
  description:
    "What people report after running the Scorch Protocol, which profile responds best (a low waking temperature and clear signs of metabolic damage), and an honest account of where these reports come from and what they cannot tell you.",
  alternates: { canonical: "https://scorchprotocol.com/success-rate-data" },
};

export default function SuccessRateDataPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageLd({
          name: "Results: What Improves, and For Whom",
          description:
            "What people report after running the Scorch Protocol, which profile responds best, and an honest account of where these reports come from and what they cannot tell you.",
          path: "/success-rate-data",
          breadcrumbName: "Results",
          about: [
            "Long COVID",
            "Myalgic Encephalomyelitis/Chronic Fatigue Syndrome",
          ],
        })}
      />
      <h1>Results: What Improves, and For Whom</h1>
      <KeyTakeaways
        points={[
          "Most people who run the full protocol report large improvements in fatigue, brain fog, and insomnia, and a good share report full or near-full resolution.",
          "The strongest responses cluster in one profile: a low waking temperature plus clear signs of metabolic damage. If that is your picture, this is built for you.",
          "Yannick has also taken on cases that were extremely difficult from the first conversation, accepted openly as long shots with no promises attached. Those belong in an honest account too.",
          "These are self-reported symptom scores from people who chose to fill in a questionnaire. This is not a clinical trial, there is no control group, and nothing here was checked against medical records.",
          "Many people who came to Yannick were assessed and told not to attempt this at all. That screening shapes everything else on this page.",
        ]}
      />

      <p>
        This page describes what people report after running The Scorch
        Protocol, and, more usefully, <em>who</em> tends to report the biggest
        changes. It deliberately does not lead with a success rate.
      </p>

      <p>
        The reports behind it come from symptom questionnaires filled in by
        people in the dry fasting community: once before starting, again after
        the fasting block and refeed, and again after T3 and hGH therapy for
        those who went that far. Each person rated their own symptoms on a
        simple scale. That is a real signal, and it is also a limited one. The
        scores are self-assessed, no response was verified against a medical
        record or a lab result, and people who feel better are far more likely
        to come back and say so than people who quietly stopped. Yannick would
        rather tell you that plainly than dress it up with a decimal point.
      </p>

      <div className="guiding-questions box-success">
        <h3>What People Report</h3>
        <div className="question-item">
          <span className="question-label">Fatigue, brain fog, and insomnia</span>
          These three were tracked the closest, because they are the ones that
          take a life apart. Most people came in rating themselves severe across
          all three. After the protocol, the great majority report moving a long
          way up the scale, and a substantial group report landing back at
          normal.
        </div>
        <div className="question-item">
          <span className="question-label">Many never needed T3 or hGH</span>
          The largest group stopped after the fasting block and the refeed,
          because they already felt healed. That group skewed toward the less
          severe cases: people whose metabolism had not yet been ground all the
          way down.
        </div>
        <div className="question-item">
          <span className="question-label">The stack does what the pieces cannot</span>
          For the people who go all the way, dry fasting, T3, and hGH in
          sequence produce something none of them produce on their own. That
          combination, not any single lever, is what the protocol is actually
          about.
        </div>
      </div>

      <h2>Who Responds Best</h2>
      <p>
        This is the part worth your attention, and the part most protocols will
        not tell you. The high improvement rates are not spread evenly. They
        concentrate in a specific kind of patient, and if you recognise yourself
        in the profile below, the odds here are genuinely good.
      </p>

      <div className="guiding-questions box-info">
        <h3>The Profile That Responds</h3>
        <div className="question-item">
          <span className="question-label">A low waking temperature</span>
          The single most useful predictor. A basal temperature that sits
          consistently below the healthy band (roughly 97.7 to 98.6 F) means
          your metabolic engine is running cold. That is precisely the thing
          this protocol is built to restart, which is why temperature, not a
          lab reference range, is the dial the whole T3 phase is titrated to.
        </div>
        <div className="question-item">
          <span className="question-label">Clear signs of metabolic damage</span>
          Cold hands and feet, weight that will not move whatever you do,
          needing far more sleep than you ever used to, feeling wrecked for days
          after ordinary exertion, hair and skin that changed, a body running on
          fumes. This is the picture of a metabolism that stalled and never
          restarted after an infection or a long stretch of stress.
        </div>
        <div className="question-item">
          <span className="question-label">Willingness to run the whole sequence</span>
          The people with the strongest outcomes are, almost without exception,
          the ones who did the preparation properly, held the fast, respected
          the refeed, and did not improvise the order. This protocol punishes
          shortcuts more than most.
        </div>
      </div>

      <p>
        Read the rest of this page through that filter. When people quote high
        improvement rates for the Scorch Protocol, those are, in practice, the
        rates for that group. If your temperature is normal and your metabolic
        markers look fine, this is a poorer fit for you, and Yannick will say so
        rather than take you on.
      </p>

      <h2>The Cases That Were Taken On Anyway</h2>
      <div className="guiding-questions box-warning">
        <p>
          Not everyone who works with Yannick fits that profile. Some of the
          hardest cases were accepted precisely because they were hard: years
          spent largely bedbound, several overlapping diagnoses, damage that had
          been compounding for a decade before anyone named it.
        </p>
        <p>
          Those cases were taken on with the situation stated plainly at the
          start. No projected outcome, no promise, and an honest{" "}
          <em>this may not be enough</em>. Some of those people improved further
          than anyone involved expected. Some did not. Both outcomes belong in
          an honest account of this work, and neither of them belongs inside a
          success rate.
        </p>
        <p>
          If your case is one of the difficult ones, that is a reason to have
          the conversation, not a reason to skip it. It is also a reason to be
          suspicious of anyone who answers it with a number.
        </p>
      </div>

      <div className="guiding-questions box-danger">
        <h3>Who the Scorch Protocol Is Not For</h3>
        <p>
          A large number of people who came to Yannick were assessed and advised{" "}
          <strong>not</strong> to attempt the Scorch Protocol. Only the people
          who were medically cleared and ready went ahead, and that screening is
          a real part of why the reports read the way they do. This is careful
          filtering, and you should factor it in before you read anything above
          as a promise.
        </p>
        <div className="question-item">
          <span className="question-label">Medical contraindications</span>
          People with heart damage, type 1 diabetes, and a range of other
          serious conditions were turned away, because deep dry fasting would
          put them at real risk.
        </div>
        <div className="question-item">
          <span className="question-label">Redirected to metabolic therapy</span>
          Some were advised to focus on metabolic therapy first rather than
          fasting, as the safer and more appropriate starting point for their
          situation.
        </div>
        <div className="question-item">
          <span className="question-label">Mindset and readiness</span>
          Others were turned away because their headspace or mindset made dry
          fasting too dangerous to attempt. Fasting at this depth demands the
          right mental footing, and pushing someone who is not ready can do more
          harm than good.
        </div>
      </div>

      <div className="refeed-promo">
        <h3>Want to know whether you fit the profile?</h3>
        <p>
          Members run this protocol with Yannick: a personalized refeed plan,
          your questions answered with your labs in context, and temperature
          tracking that tells you whether the metabolic picture is actually
          moving.
        </p>
        <Link href="/membership?ref=success-data" className="refeed-promo-btn">
          Get started &rarr;
        </Link>
      </div>

      <h2>How to Read Any of This</h2>
      <div className="guiding-questions box-warning">
        <div className="question-item">
          <span className="question-label">Self-reported, not verified</span>
          Every score came from the person living it, ticking a box on a form.
          There was no chart review, no independent assessor, and no lab
          confirmation. Some answers were certainly rosier than the reality
          behind them, and there is no way to go back and separate those out.
        </div>
        <div className="question-item">
          <span className="question-label">Who fills in a follow-up form</span>
          People who feel better come back and say so. People who quietly gave
          up mostly do not. Every voluntary follow-up survey leans in the same
          direction, and this one is no exception.
        </div>
        <div className="question-item">
          <span className="question-label">No control group</span>
          Nothing here separates the protocol from time, from placebo, or from
          the ten other things a highly motivated person changes in their life
          at the same moment. Treat it as a pattern worth investigating, not as
          proof.
        </div>
        <div className="question-item">
          <span className="question-label">The people who finish are the sickest</span>
          Those who complete every phase tend to be{" "}
          <strong>much sicker and much more determined</strong> than average.
          That self-selection cuts both ways: it stacks the deck with hard
          cases, and it also stacks it with people who follow instructions
          exactly.
        </div>
        <div className="question-item">
          <span className="question-label">T3 availability</span>
          Some people stopped simply because they could not get T3, especially
          slow-release T3. That is why{" "}
          <a
            href="https://chronic-illness.st"
            target="_blank"
            rel="noopener noreferrer"
          >
            chronic-illness.st
          </a>{" "}
          exists, to help patients access the medications the protocol needs.{" "}
          <em style={{ fontSize: "0.9em", opacity: 0.75 }}>
            (Previously chronic-illness.ca, the site has recently migrated.)
          </em>
        </div>
      </div>

      <h2>Other Tracked Symptoms</h2>
      <p>
        The questionnaires covered a wide range of chronic illness symptoms
        beyond the main three. These are the ones respondents reported
        measurable improvement in:
      </p>

      <div className="guiding-questions box-info">
        <h3>Core Tracked Symptoms</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div>• Fatigue</div>
          <div>• Headaches</div>
          <div>• Irritability</div>
          <div>• Fluid retention</div>
          <div>• Anxiety</div>
          <div>• Shortness of Breath</div>
          <div>• Depression</div>
          <div>• Brain Fog</div>
          <div>• Lightheaded | POTS</div>
          <div>• Constipation</div>
          <div>• Ringing in the ears</div>
          <div>• Insomnia</div>
          <div>• Allergies</div>
          <div>• Elevated cholesterol</div>
          <div>• Extreme Tiredness | PEM</div>
          <div>• Sweating abnormalities</div>
          <div>• Heat and/or cold intolerance</div>
          <div>• Cold hands and feet turn blue</div>
          <div>• Excessively tired after eating</div>
          <div>• Heart Palpitations</div>
          <div>• Frequently sick</div>
        </div>
      </div>

      <h2>Additional Improvements Observed</h2>
      <p>
        These were not on the tracked list, but people reported them often
        enough to be worth naming:
      </p>
      <ul>
        <li>Lowered or eliminated recurrence of cold sores/herpes</li>
        <li>Weight loss</li>
        <li>Migraines, PMS, Panic attacks</li>
        <li>Hair loss, Decreased memory, Decreased concentration</li>
        <li>Irritable Bowel Syndrome, Dry skin, Dry hair</li>
        <li>Arthritis and joint aches, Asthma, Muscular aches</li>
        <li>And many more...</li>
      </ul>

      <h2>What This Means For You</h2>
      <p>
        The pattern here is consistent enough to be worth your attention,
        particularly if you recognised yourself in the profile above. What
        appears to do the work is the sequence, not any one piece of it:
      </p>
      <ul>
        <li>
          <strong>Strategic Preparation</strong> (ketosis, anti-parasitics,
          anti-fungals)
        </li>
        <li>
          <strong>10-Day Fasting Block (5 Dry + 5 Water):</strong> intense
          autophagy and stem cell activation during the dry phase, followed by
          a supercharged water fast that carries straight into the guided refeed
        </li>
        <li>
          <strong>Proper Refeeding</strong> (stem cell proliferation and tissue
          regeneration)
        </li>
        <li>
          <strong>T3 Therapy</strong> (metabolic reset and energy restoration)
        </li>
        <li>
          <strong>hGH Therapy</strong> (for those who continue: directs the
          released stem cells into tissue rebuilding), plus symptom-specific
          add-ons where needed
        </li>
      </ul>
      <p>
        Run in that order, it addresses the root of the problem rather than the
        symptoms sitting on top of it. Run out of order, or run by someone it
        was never the right tool for, it does considerably less. Which is the
        whole reason this page talks about profiles instead of percentages.
      </p>

      {/* FaithBlock hidden for now — to restore, remove the `false && (` wrapper and matching `)` */}
      {false && (
      <FaithBlock
        title="The Prayer of Faith Will Make the Sick Person Well"
      >
        <p>
          <strong>James 5:15: &ldquo;And the prayer offered in faith will make the sick person well; the Lord will raise them up.&rdquo;</strong>
        </p>
        <p>
          I do not present any of this as a marketing number, which is exactly why you will not find one on this page. I present it as testimony. I was one of the sick people first. I know what it is to sit at a 2 or 3 on the fatigue scale, barely functional, watching life happen behind glass. I also know what it is to come back. The people who have run this saw something medicine does not yet have the framework to fully explain. <em>Evil propagates when good men look away,</em> and one of the evils done to chronically ill people is the systematic dismissal of their suffering. Refusing to be silent about that is the point. <strong>The Lord will raise them up.</strong> That promise is for you too.
        </p>
      </FaithBlock>
      )}

      <EmailCapture compact source="success-rate-data-footer" />
      <RefeedPlanPromo source="success-rate-data" />
      <GuidanceBox />
      <PaidContentBlock sectionSlug="success-rate-data" sectionTitle="Success Rate Data" />
    </>
  );
}
