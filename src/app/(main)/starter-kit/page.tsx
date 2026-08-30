import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERS_SIGNUP_URL, MEMBERSHIP_PATH } from "@/lib/constants";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "The Starter Kit",
  description:
    "The Scorch Protocol starter kit: what to actually buy, in protocol order. The early phases are here in full; the T3 and rebuild specifics are personalized to you inside the members portal.",
  alternates: { canonical: "https://scorchprotocol.com/starter-kit" },
};

// Small inline access tag (OTC / Rx / Food / Gear / Restricted).
function Tag({ children }: { children: string }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "var(--text-muted, #94a3b8)",
        border: "1px solid rgba(148,163,184,0.35)",
        borderRadius: 4,
        padding: "1px 6px",
        marginLeft: 6,
        verticalAlign: "middle",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

export default function StarterKitPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageLd({
          name: "The Scorch Protocol Starter Kit",
          description:
            "What to buy to run the Scorch Protocol, in order. The early phases in full; the T3 and rebuild specifics personalized in the members portal.",
          path: "/starter-kit",
          breadcrumbName: "Starter Kit",
        })}
      />
      <h1>The Starter Kit</h1>

      <p>
        The question everyone asks first is simple: <em>what do I actually buy?</em>{" "}
        This is the shopping list, in the order the protocol uses it, so you can
        get set up without guessing at 2am. The early phases are laid out here in
        full. The deeper you go, the more the right answer depends on you: your
        labs, your dose, your reaction. That layer is built with you inside the
        members portal.
      </p>

      <KeyTakeaways
        points={[
          "Buy the instrument panel first. You cannot run this protocol without tracking your waking temperature, because that reading is what you dose T3 to.",
          "The prep, fast, and early-refeed lists are here in full, in order.",
          "T3 therapy and the rebuild are where dose, sourcing, and per-person calls live, so those are personalized to your case in the members portal.",
          "Nothing here is a prescription to self-run. Prescription and controlled items belong with a clinician; the numbers are starting points, not targets.",
        ]}
      />

      <div className="guiding-questions">
        <h3>Start here: your instrument panel</h3>
        <div className="question-item">
          <span className="question-label">Basal thermometer, two decimals<Tag>Gear</Tag></span>
          Your waking temperature is the dial you titrate T3 to (target 97.7 to
          98.6 F). Buy a good one before anything else.
        </div>
        <div className="question-item">
          <span className="question-label">Blood-pressure cuff and a heart-rate reader<Tag>Gear</Tag></span>
          Your two hard safety gauges through the fast and T3.
        </div>
        <div className="question-item">
          <span className="question-label">Body scale<Tag>Gear</Tag></span>
          Track fast loss and the refeed ramp.
        </div>
        <div className="question-item">
          <span className="question-label">Electrolytes: sodium, potassium, magnesium<Tag>OTC</Tag></span>
          Enter the fast reloaded, not depleted.
        </div>
      </div>

      <div className="guiding-questions">
        <h3>Prep, the weeks before</h3>
        <div className="question-item">
          <span className="question-label">Magnesium glycinate<Tag>OTC</Tag></span>
          Most people are low going in. If a blood test already flags a specific
          vitamin or mineral deficiency, correct it before you fast.
        </div>
        <div className="question-item">
          <span className="question-label">TUDCA<Tag>OTC</Tag></span>
          Liver and bile support as fat-soluble junk starts to clear.
        </div>
        <div className="question-item">
          <span className="question-label">Magnesium-citrate clear-out<Tag>OTC</Tag></span>
          One gentle colon flush, two days before you start.
        </div>
        <div className="question-item">
          <span className="question-label">Carb juicing to hydrate<Tag>Food</Tag></span>
          Real hydration is more than water. The carbohydrates in fresh juice help
          your body hold water and carry minerals and vitamins into the cells, so
          carb juicing is the ideal way to hydrate in. The one exception is the
          ketogenic path: if you are cleared for a keto prep, stay on water and
          electrolytes instead.
        </div>
        <div className="question-item">
          <span className="question-label">Whole-food taper, plant-based or keto<Tag>Food</Tag></span>
          Build the high-metabolism baseline the fast works against.
        </div>
      </div>

      <div className="guiding-questions">
        <h3>The fast</h3>
        <div className="question-item">
          <span className="question-label">Monolaurin and L-lysine<Tag>OTC</Tag></span>
          The natural antiviral cover: L-lysine from water day 1, monolaurin (with olive leaf) from the first meal, then daily from there.
        </div>
        <div className="question-item">
          <span className="question-label">Valacyclovir<Tag>Rx</Tag></span>
          The standing antiviral backbone: never during the fast, dry or water, starts on refeed day 3 at the earliest after two days of eating and heavy rehydration, then runs daily through the months between fasts. Buy it before the fast begins. The loading dose for a cold-sore prodrome goes on top of the standing course, once that course has started.
        </div>
        <div className="question-item">
          <span className="question-label">Ivermectin<Tag>Rx</Tag></span>
          Runs alongside it through the vulnerable window: primary antiparasitic double duty plus supportive antiviral value.
        </div>
        <div className="question-item">
          <span className="question-label">Humidifier<Tag>Gear</Tag></span>
          Cuts water loss through the skin on the dry-fast days.
        </div>
      </div>

      <div className="guiding-questions">
        <h3>Refeed, the first days back</h3>
        <div className="question-item">
          <span className="question-label">Break the fast gently<Tag>Food</Tag></span>
          Coconut water, then broth, then a slow food ladder. No T3 yet.
        </div>
        <div className="question-item">
          <span className="question-label">Methylene blue<Tag>OTC</Tag></span>
          Mitochondrial support as the cell comes back online, decided per case, no
          fixed dose. Hard stop: not with SSRIs, SNRIs, or MAOIs, and not if you
          are G6PD-deficient.
        </div>
        <div className="question-item">
          <span className="question-label">B1, benfotiamine<Tag>OTC</Tag></span>
          A refeed requirement, not optional. Replete thiamine before the carbs
          scale up.
        </div>
        <div className="question-item">
          <span className="question-label">Electrolytes and live ferments<Tag>OTC / Food</Tag></span>
          Potassium salt to replace what the fast burned, and kefir to start
          rebuilding the microbiome.
        </div>
      </div>

      {/* The reveal line: everything from T3 onward is personalized in the portal. */}
      <div
        style={{
          margin: "2.5rem 0 1.25rem",
          borderTop: "1px solid rgba(232,93,4,0.4)",
          paddingTop: "1.5rem",
        }}
      >
        <h2 style={{ marginTop: 0 }}>T3 therapy and the rebuild: personalized to you</h2>
        <p>
          This is where the protocol stops being a shopping list and starts being
          a decision about <em>your</em> body. The items are no secret, they are
          below. What matters is the part a page cannot give you: the dose, the
          sourcing, the timing, and whether a given lever is even right for your
          case. Inside the portal, I turn this into your sheet: I set your doses,
          strike what is not for you and tell you why, add how-to notes, and
          help you source the harder items.
        </p>
      </div>

      <div
        style={{
          border: "1px solid rgba(148,163,184,0.28)",
          borderRadius: 10,
          padding: "1.25rem 1.5rem",
          background: "rgba(148,163,184,0.05)",
        }}
      >
        <PhaseTease
          title="T3 therapy"
          items={[
            ["SR-T3", "the engine, dosed to your waking temperature"],
            ["T4/T3 taper bridge", "keeps you from crashing as T3 comes down"],
            ["Aspirin with vitamin K2", "inflammation, cortisol, and insulin support"],
            ["Cyproheptadine", "opens the eating window T3 throws wide"],
            ["Vitamin D3 with K2", "the co-factor that pairs best with T3"],
          ]}
        />
        <PhaseTease
          title="Rebuild"
          items={[
            ["hGH", "the rebuild signal, and the preferred base"],
            ["Thymalin", "rebuilds the immune system after the fast"],
            ["Fluconazole", "antifungal for specific cases"],
            ["Testosterone", "the final lever, only after the earlier cycles are done"],
            [
              "Microdosing psilocybin",
              "optional, adjacent to the rebuild for neuroplasticity, with a secondary lift to mood and drive. A controlled substance in most places, so legal status varies by location and it is a per-case conversation.",
            ],
          ]}
        />
        <PhaseTease
          title="Baseline labs"
          items={[
            ["Full thyroid + metabolic panel", "your starting picture, if you have access"],
            ["Sex-hormone panel", "for the rebuild decision later"],
          ]}
        />
      </div>

      <div className="guidance-box" style={{ marginTop: "2rem" }}>
        <h3>Get your personalized Starter Kit</h3>
        <p>
          The list above becomes <em>your</em> list inside the members portal:
          your doses filled in, the wrong items struck out with the reason, how to
          take each one, and help sourcing the prescription items. It lives in
          your portal and updates as your case moves.
        </p>
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn membership-primary">
          Get your personalized sheet →
        </a>
        <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Prefer to read more first? See{" "}
          <Link href={MEMBERSHIP_PATH}>what the membership includes</Link>.
        </p>
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.92rem", opacity: 0.8 }}>
        <em>
          This is educational information, not medical advice. The prescription
          and controlled items on this page belong with a qualified clinician,
          and every number is a starting point you titrate to your own response,
          never a target to chase.
        </em>
      </p>
    </>
  );
}

function PhaseTease({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map(([name, why]) => (
          <li
            key={name}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "baseline",
              padding: "5px 0",
              borderBottom: "1px solid rgba(148,163,184,0.14)",
            }}
          >
            <span aria-hidden="true" style={{ color: "var(--accent-color, #e85d04)", flexShrink: 0 }}>
              🔒
            </span>
            <span>
              <strong>{name}</strong>
              <span style={{ opacity: 0.85 }}> — {why}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
