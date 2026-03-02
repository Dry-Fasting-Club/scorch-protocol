import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import CommentSection from "@/components/CommentSection";

export const metadata: Metadata = {
  title: "FAQ Hub — The Scorch Protocol",
  description:
    "Frequently asked questions about The Scorch Protocol — autophagy, kidney safety, liver health, refeeding, and general protocol questions.",
};

export default function FaqHubPage() {
  return (
    <>
      <h1>Scorch Protocol: Knowledge Base</h1>
      <p>
        Welcome to the dedicated FAQ section. Here we dive deeper into specific
        biological mechanisms, safety concerns, and common questions about the
        protocol.
      </p>

      <div className="hub-grid">
        <a href="/faq/general-questions" className="hub-card">
          <h3>General Questions</h3>
          <p>
            Top 10 questions about safety, T3 usage, hydration, and the overall
            timeline of the protocol.
          </p>
        </a>

        <a href="/faq/kidneys" className="hub-card">
          <h3>Kidney Health</h3>
          <p>
            Is dry fasting safe for kidneys? Understanding creatinine levels,
            dark urine, and filtration mechanics (Khoroshilov Data).
          </p>
        </a>

        <a href="/faq/liver" className="hub-card">
          <h3>Liver &amp; Gallbladder</h3>
          <p>
            Explaining the &ldquo;Right Side Ache,&rdquo; biliary sludge
            clearance, enzyme stability, and the massive bilirubin detox surge.
          </p>
        </a>

        <a href="/faq/refeeding" className="hub-card">
          <h3>Refeeding Strategy</h3>
          <p>
            The &ldquo;Landing&rdquo; is more important than the
            &ldquo;Flight.&rdquo; Kempner Rice Diet vs. Clinical Broths,
            managing edema, and timing proteins.
          </p>
        </a>

        <a href="/faq/autophagy" className="hub-card">
          <h3>Autophagy &amp; Recycling</h3>
          <p>
            Molecular &ldquo;Self-Eating&rdquo; explained. How dry fasting
            activates an unconventional pathway for deep cellular cleaning.
          </p>
        </a>
      </div>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="faq" sectionTitle="FAQ Hub" />
      <CommentSection sectionSlug="faq" />
    </>
  );
}
