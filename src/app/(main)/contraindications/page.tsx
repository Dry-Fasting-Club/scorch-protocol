import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Who Should Not Do This: Dry Fasting Contraindications",
  description:
    "The Scorch Protocol is not for everyone. The conditions that are genuine hard stops, and the ones that are just a get-the-prep-right-first situation.",
  alternates: { canonical: "https://scorchprotocol.com/contraindications" },
};

export default function ContraindicationsPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Who Should Not Do This: Dry Fasting Contraindications", description: "The Scorch Protocol is not for everyone. The conditions that are genuine hard stops, and the ones that are just a get-the-prep-right-first situation.", path: "/contraindications", breadcrumbName: "Who Should Not Do This" })} />
      <h1>Who Should Not Do This</h1>

      <KeyTakeaways
        points={[
          "Deep dry fasting and T3 therapy are powerful and not safe for everyone. Some conditions are hard stops.",
          "Do not attempt the fasting protocol if you are pregnant or breastfeeding, type 1 diabetic, underweight (BMI under 18), have active heart or kidney disease, an active infection, or are under 18.",
          "Other situations (certain medications, type 2 diabetes, POTS, arrhythmia or osteoporosis history) are not automatic no's. They are get-the-prep-right-first situations, doable when you build in properly.",
          "Over 100 people who came to Yannick were assessed and advised not to attempt this. Careful screening is part of why the tracked outcomes look the way they do.",
          "If you are unsure where you fall, do not guess. Run your numbers past Yannick before you start.",
        ]}
      />

      <p>
        The Scorch Protocol works because it pushes the body hard: a deep dry
        fast, a staged refeed, and thyroid hormone (T3) to restart a suppressed
        metabolism. That same intensity makes it dangerous for some people. This
        page is the honest version of who should not attempt it, and who can
        pull it off if they prepare right first.
      </p>

      <p>
        There are two lists below. The first is genuine hard stops: cases where
        the physiology says no and no amount of preparation changes that. The
        second is the cautious list: conditions that scare people off but are
        usually doable once you build the prep in. If you are anywhere in that
        second group, this is exactly the kind of case worth running past
        Yannick with your own numbers in front of you before you start.
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
        <h3>Get the prep right first if any of these apply</h3>
        <p>
          These are not disqualifiers. They change the risk enough that you do
          not want to wing it, and they are exactly what the membership is for:
          getting Yannick&rsquo;s eyes on your numbers before you build in.
        </p>
        <div className="question-item">
          <span className="question-label">On diuretics, anticoagulants, insulin, or any medication that needs close titration</span>
          Fasting and refeeding shift fluid, electrolytes, and blood sugar fast.
          These drugs will likely need adjusting as you go, so do not touch the
          doses blind. This is a case to plan out first, not improvise.
        </div>
        <div className="question-item">
          <span className="question-label">Type 2 diabetes on medication</span>
          Doable for many people, once you have a plan to manage medication and
          blood sugar through the fast and refeed. It is a get-the-prep-right
          situation, not a no.
        </div>
        <div className="question-item">
          <span className="question-label">POTS or dysautonomia</span>
          Fluid shifts and T3 can provoke unpredictable responses. Done
          carelessly it is genuinely risky. Done with the supportive stack in
          place and built gradually, it is doable. Get your baseline orthostatic
          vitals before you begin.
        </div>
        <div className="question-item">
          <span className="question-label">A history of arrhythmia, or known osteoporosis</span>
          T3 therapy in particular calls for extra caution and closer tracking
          in these cases. Worth running past Yannick before you start T3.
        </div>
        <div className="question-item">
          <span className="question-label">A heavy medication load, or you are not in the right headspace</span>
          A complex medication picture, or a mindset that is not ready, can make
          deep fasting too risky to rush. Sort this out first.
        </div>
      </div>

      <p>
        If you are in the clear and ready, the{" "}
        <Link href="/decision-tree">Decision Logic Tree</Link> will help you find
        the right starting point, and{" "}
        <Link href="/preparation">Phase 1: Preparation</Link> covers the baseline
        tests and steps that make the fast safer.
      </p>

      <GuidanceBox />
    </>
  );
}
