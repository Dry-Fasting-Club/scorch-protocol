import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Who Should Not Do This: Dry Fasting Contraindications | The Scorch Protocol",
  description:
    "The Scorch Protocol is not for everyone. The conditions and situations where deep dry fasting and T3 therapy are unsafe, and when to get medical clearance first.",
  alternates: { canonical: "https://scorchprotocol.com/contraindications" },
};

export default function ContraindicationsPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Who Should Not Do This: Dry Fasting Contraindications", description: "The Scorch Protocol is not for everyone. The conditions and situations where deep dry fasting and T3 therapy are unsafe, and when to get medical clearance first.", path: "/contraindications", breadcrumbName: "Who Should Not Do This" })} />
      <h1>Who Should Not Do This</h1>

      <KeyTakeaways
        points={[
          "Deep dry fasting and T3 therapy are powerful and not safe for everyone. Some conditions are hard stops.",
          "Do not attempt the fasting protocol if you are pregnant or breastfeeding, type 1 diabetic, underweight (BMI under 18), have active heart or kidney disease, an active infection, or are under 18.",
          "Other situations (certain medications, type 2 diabetes, POTS, arrhythmia or osteoporosis history) are not automatic no's but need a doctor's clearance and supervision first.",
          "Over 100 people who came to Yannick were assessed and advised not to attempt this. Careful screening is part of why the tracked outcomes look the way they do.",
          "If you are unsure where you fall, do not guess. Ask before you start.",
        ]}
      />

      <p>
        The Scorch Protocol works because it pushes the body hard: a deep dry
        fast, a staged refeed, and thyroid hormone (T3) to restart a suppressed
        metabolism. That same intensity makes it dangerous for some people. This
        page is the honest version of who should not attempt it, or who needs
        medical supervision before they do.
      </p>

      <p>
        This is educational information, not medical advice, and it cannot
        account for your full history. Talk to a physician who knows your case
        before starting any fast, supplement, or medication change.
      </p>

      <div className="guiding-questions box-danger">
        <h3>Do not attempt the fasting protocol if any of these apply</h3>
        <div className="question-item">
          <span className="question-label">Pregnant or breastfeeding</span>
          Fasting at this depth deprives a developing baby and an infant of
          nutrients. This is an absolute no.
        </div>
        <div className="question-item">
          <span className="question-label">Type 1 diabetes</span>
          The risk of life-threatening blood sugar and ketone swings is too high.
          People with type 1 diabetes were turned away.
        </div>
        <div className="question-item">
          <span className="question-label">Active or advanced heart disease, heart damage, or significant arrhythmia</span>
          Deep fasting and T3 both stress the heart. With existing cardiac
          disease that stress can be dangerous.
        </div>
        <div className="question-item">
          <span className="question-label">Active kidney disease or kidney failure</span>
          A waterless fast concentrates everything the kidneys must process.
          Compromised kidneys cannot safely handle it.
        </div>
        <div className="question-item">
          <span className="question-label">Underweight (BMI under 18), or an eating disorder, current or past</span>
          There is no fat reserve to fast on, and the protocol can be a serious
          trigger for disordered eating. This is not the tool for you.
        </div>
        <div className="question-item">
          <span className="question-label">An active acute infection or illness</span>
          Your body needs fuel to fight an active infection. Wait until you have
          recovered before considering a fast.
        </div>
        <div className="question-item">
          <span className="question-label">Under 18</span>
          Disrupting metabolism during developmental years carries risks that are
          not worth taking.
        </div>
      </div>

      <div className="guiding-questions box-warning">
        <h3>Get a doctor's clearance and supervision first if any of these apply</h3>
        <p>
          These are not automatic disqualifiers, but they change the risk enough
          that you should not proceed alone.
        </p>
        <div className="question-item">
          <span className="question-label">On diuretics, anticoagulants, insulin, or any medication that needs close titration</span>
          Fasting and refeeding shift fluid, electrolytes, and blood sugar fast.
          These drugs may need to be adjusted by your prescriber, never on your
          own.
        </div>
        <div className="question-item">
          <span className="question-label">Type 2 diabetes on medication</span>
          Possible for many people, but only with medical supervision to manage
          medication and blood sugar through the fast and refeed.
        </div>
        <div className="question-item">
          <span className="question-label">POTS or dysautonomia</span>
          Fluid shifts and T3 can provoke unpredictable responses. Proceed only
          with guidance and close monitoring.
        </div>
        <div className="question-item">
          <span className="question-label">A history of arrhythmia, or known osteoporosis</span>
          T3 therapy in particular needs extra caution and monitoring in these
          cases.
        </div>
        <div className="question-item">
          <span className="question-label">A heavy medication load, or you are not in the right headspace</span>
          A complex medication picture, or a mindset that is not ready, can make
          deep fasting too risky. Sort this out first.
        </div>
      </div>

      <p>
        If you are cleared and ready, the{" "}
        <Link href="/decision-tree">Decision Logic Tree</Link> will help you find
        the right starting point, and{" "}
        <Link href="/preparation">Phase 1: Preparation</Link> covers the baseline
        tests and steps that make the fast safer.
      </p>

      <GuidanceBox />
    </>
  );
}
