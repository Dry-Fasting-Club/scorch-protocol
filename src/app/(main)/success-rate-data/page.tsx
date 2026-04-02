import type { Metadata } from "next";
import GuidanceBox from "@/components/GuidanceBox";
import PaidContentBlock from "@/components/PaidContentBlock";
import FaithBlock from "@/components/FaithBlock";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Success Rate Data | The Scorch Protocol",
  description:
    "Real outcome data from 141 protocol participants: 97% success rate after completing dry fasting and T3 therapy phases.",
};

export default function SuccessRateDataPage() {
  return (
    <>
      <h1>Success Rate Data: The Scorch Protocol Results</h1>
      <p>
        This page presents real data from participants who have completed The
        Scorch Protocol, showing measurable improvements across multiple chronic
        illness symptoms. All data is based on{" "}
        <a
          href="https://www.dryfastingclub.com/the-data-behind-fatigue-brain-fog-insomnia-dry-fasting-and-the-scorch-protocol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          tracked studies from the Dry Fasting Club
        </a>
        . All data is anonymized and aggregated from the participants, all of
        whom worked 1-on-1 with Yannick Wolfe.
      </p>

      <div className="guiding-questions box-deepgreen">
        <h3>Key Findings</h3>
        <div className="question-item">
          <span className="question-label">97% Success Rate</span>
          After completing the full Scorch Protocol (including T3 Therapy),{" "}
          <strong>97% of participants</strong> experienced significant
          improvement in their symptoms.
        </div>
        <div className="question-item">
          <span className="question-label">Symptom Tracking</span>
          Participants rated symptoms on a scale of 1-10 (10 being
          normal/healthy). Most participants started at 5 or lower, with many
          achieving scores of 9-10 after treatment.
        </div>
        <div className="question-item">
          <span className="question-label">Combined Approach</span>
          The combination of dry fasting and T3 therapy together creates results
          that{" "}
          <strong>cannot be achieved with either treatment alone</strong>.
        </div>
      </div>

      <h2>Key Symptom Improvement Data</h2>
      <p>
        Fatigue, Brain Fog, and Insomnia are among the most common and
        debilitating symptoms in Long Covid, ME/CFS, and autoimmune conditions.
        The data shows remarkable improvements through each phase of the
        protocol. Participants rated symptoms on a scale of 1-10, where{" "}
        <strong>10 represents normal/healthy</strong> and 1 represents severe
        symptoms.
      </p>

      <h3>Before Scorch Protocol (141 Participants)</h3>
      <p>
        Before starting the protocol, most participants were experiencing severe
        symptoms:
      </p>
      <ul>
        <li>
          <strong>Fatigue:</strong> 27.7% rated themselves at level 1 (most
          severe), with 17% at level 5
        </li>
        <li>
          <strong>Brain Fog:</strong> 24.8% rated themselves at level 1, with
          18.4% at level 5
        </li>
        <li>
          <strong>Insomnia:</strong> 25.5% rated themselves at level 1, with
          16.3% at level 5
        </li>
        <li>
          Most participants scored <strong>5 or lower</strong> across all three
          symptoms
        </li>
      </ul>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src="/assets/images/symptoms-before.png"
          alt="Fatigue, Brain Fog, and Insomnia levels before Scorch Protocol - 141 participants"
          width={900}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
          <em>Baseline: 141 participants before protocol</em>
        </p>
      </div>

      <h3>After Dry Fast + Water Fast: 10 Days Total (117 Participants)</h3>
      <p>The transformation after the full fasting block is remarkable:</p>
      <ul>
        <li>
          <strong>Fatigue:</strong> 31.6% reached level 10 (normal), with many
          others in the 8-9 range
        </li>
        <li>
          <strong>Brain Fog:</strong> 29.1% reached level 10, showing
          significant cognitive improvement
        </li>
        <li>
          <strong>Insomnia:</strong> 35% reached level 10, with 13.7% at level
          9
        </li>
        <li>
          Many participants improved from the 5-9 range into{" "}
          <strong>level 10 (normal/healthy)</strong>
        </li>
        <li>
          Those who reached 10 did not need T3 Therapy: the preparation,
          dry fast, and refeeding were sufficient
        </li>
        <li>
          Participants who improved significantly often considered themselves
          healed after 1-2 months of refeeding
        </li>
      </ul>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src="/assets/images/symptoms-after-dryfast.png"
          alt="Fatigue, Brain Fog, and Insomnia levels after 10-day fast (5 dry + 5 water) - 117 participants"
          width={900}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
          <em>After 10-day fast (5 dry + 5 water): 117 participants</em>
        </p>
      </div>

      <h3>After T3 Therapy Cycle (32 Participants)</h3>
      <p>For those who continued to T3 Therapy, the results are exceptional:</p>
      <ul>
        <li>
          <strong>Fatigue:</strong> 40.6% reached level 10, with 18.8% at level
          8 and 12.5% at levels 7 and 9
        </li>
        <li>
          <strong>Brain Fog:</strong> 53.1% reached level 10 (over half
          achieved normal cognitive function)
        </li>
        <li>
          <strong>Insomnia:</strong> 56.3% reached level 10 (more than
          half achieved normal sleep)
        </li>
        <li>
          <strong>97% of participants</strong> experienced significant
          improvement after T3 Therapy
        </li>
        <li>
          The combination of dry fasting + T3 therapy creates{" "}
          <strong>miraculous results</strong> that cannot be achieved separately
        </li>
      </ul>

      <div style={{ margin: "2rem 0", textAlign: "center" }}>
        <Image
          src="/assets/images/symptoms-after-t3.png"
          alt="Fatigue, Brain Fog, and Insomnia levels after T3 Therapy - 32 participants"
          width={900}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
        <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.5rem" }}>
          <em>After T3 Therapy: 32 participants (97% success rate)</em>
        </p>
      </div>

      <div
        className="guiding-questions box-green"
        style={{ margin: "3rem 0" }}
      >
        <h3>Summary: The Transformation</h3>
        <div className="question-item">
          <span className="question-label">Before Protocol</span>
          Most participants (25-28%) rated their symptoms at level 1 (most
          severe), with the majority scoring 5 or lower across Fatigue, Brain
          Fog, and Insomnia.
        </div>
        <div className="question-item">
          <span className="question-label">After Dry + Water Fast (10 Days)</span>
          A dramatic shift occurred: 30-35% of participants reached level 10
          (normal/healthy) for each symptom, with many others achieving levels
          8-9.
        </div>
        <div className="question-item">
          <span className="question-label">After T3 Therapy</span>
          For those who continued, over 40% reached level 10 for Fatigue, and
          over 50% reached level 10 for Brain Fog and Insomnia.{" "}
          <strong>97% experienced significant improvement.</strong>
        </div>
      </div>

      <h2>Other Tracked Symptoms</h2>
      <p>
        The Scorch Protocol has shown improvements across a wide range of
        chronic illness symptoms. The following symptoms were officially tracked
        and showed measurable improvement:
      </p>

      <div className="guiding-questions box-yellow">
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
        While not officially tracked in the main study, the following symptoms
        have also been reported as improved by participants:
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

      <div className="guiding-questions box-red">
        <h3>Important Notes About the Data</h3>
        <div className="question-item">
          <span className="question-label">Sample Size</span>
          Sample sizes naturally decrease as participants progress through the
          protocol. This is because many participants feel significantly better
          after earlier phases and consider themselves healed, or face
          financial/time constraints.
        </div>
        <div className="question-item">
          <span className="question-label">Most Motivated Participants</span>
          The participants who complete the full protocol tend to be those who
          are{" "}
          <strong>much sicker and really motivated to heal</strong>. This
          self-selection means the data represents those with more severe cases.
        </div>
        <div className="question-item">
          <span className="question-label">T3 Availability</span>
          Some participants dropped out due to difficulty obtaining T3,
          especially slow-release T3. This is why{" "}
          <a
            href="https://chronic-illness.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            chronic-illness.ca
          </a>{" "}
          was created to help patients access necessary medications.
        </div>
      </div>

      <h2>What This Means For You</h2>
      <p>
        The data shows that The Scorch Protocol offers real hope for those
        suffering from Long Covid, ME/CFS, autoimmune conditions, and other
        chronic illnesses. The combination of:
      </p>
      <ul>
        <li>
          <strong>Strategic Preparation</strong> (ketosis, anti-parasitics,
          anti-fungals)
        </li>
        <li>
          <strong>10-Day Fasting Block (5 Dry + 5 Water):</strong> intense
          autophagy and stem cell activation during the dry phase, followed by
          a supercharged water fast with T3 already running
        </li>
        <li>
          <strong>Proper Refeeding</strong> (stem cell proliferation and tissue
          regeneration)
        </li>
        <li>
          <strong>T3 Therapy</strong> (metabolic reset and energy restoration)
        </li>
      </ul>
      <p>
        ...creates a powerful healing cascade that addresses the root causes of
        chronic illness, not just the symptoms.
      </p>

      <FaithBlock
        title="97% Is a Miracle: Real Healing as Living Testimony"
        imageSrc="/assets/images/faith/faith-success-data.jpg"
        imageAlt="People standing together in testimony, community and witness"
      >
        <p>
          <strong>Psalm 107:20: &ldquo;He sent out his word and healed them; he rescued them from the grave.&rdquo;</strong>
        </p>
        <p>
          I do not present the 97% as a marketing number. I present it as testimony. I was one of the sick people first. I know what it is to sit at a 2 or 3 on the fatigue scale, barely functional, watching life happen behind glass. I also know what it is to come back. These 141 participants saw something medicine does not yet have the framework to fully explain. <em>Evil propagates when good men look away,</em> and one of the evils done to chronically ill people is the systematic dismissal of their suffering. This data is a refusal to be silent. <strong>He sent out his word and healed them.</strong> You are reading it now.
        </p>
      </FaithBlock>

      <GuidanceBox />
      <PaidContentBlock sectionSlug="success-rate-data" sectionTitle="Success Rate Data" />
    </>
  );
}
