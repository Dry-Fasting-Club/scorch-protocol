import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import RefeedPlanPromo from "@/components/RefeedPlanPromo";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import { medicalWebPageLd, faqPageLd } from "@/lib/structured-data";

const PAGE_DESCRIPTION =
  "The standing daily stack you run between protocol cycles: the valacyclovir antiviral backbone, nervous-system and immune support, clot and biofilm clearing, what to reach for during a PEM crash, and the bleeding-risk hard stop.";

export const metadata: Metadata = {
  title: "Between Fasts: The Standing Daily Stack Between Protocol Cycles",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "https://scorchprotocol.com/between-fasts" },
};

const betweenFastsFaq = [
  {
    question: "What do you take between fasts?",
    answer:
      "A standing daily stack, not a pre-fast shopping list. It has four working parts: a direct antiviral core (valacyclovir as the backbone, ivermectin as supportive cover plus the primary antiparasitic, lysine and monolaurin as the natural baseline), nervous-system and immune support (PEA, liposomal apigenin, thymus glandular), blood and biofilm clearing (nattokinase, daily), and systemic support (garlic, olive leaf, quercetin, Pyrucet). Artemisinin sits outside the daily stack entirely: it is an optional extra antiviral, added only when stacking against a strongly suspected viral reactivation. Artemisinin and psilocybin are the only two items that are not daily.",
  },
  {
    question: "Do you stay on antivirals between fasts?",
    answer:
      "Yes. Valacyclovir is a standing backbone, not a short course you stop once the refeed ends. It stays off during the dry fast and the first two water days because it is renally cleared and needs water flow to clear safely, it starts on water day 3 once rehydration is established, and it keeps running through the refeed and into the long gap before the next cycle. Ivermectin runs alongside it as a secondary supportive antiviral and the primary antiparasitic, and some patients keep it as a crash-only medication rather than a daily one, since the same calming effect that supports it as an antiviral is also the reason it is reached for during a PEM crash. If a prodrome starts, the loading dose is an escalation layered on top of the standing course, not a replacement for it.",
  },
  {
    question: "What can you take during a PEM crash?",
    answer:
      "The standing stack keeps running unchanged. What changes is dosing on two items already in the picture. Ivermectin is the first lever: its calming effect on the nervous system and on inflammation, already part of why it is in the stack, is often strong enough on its own to pull a crash back, so the dose is raised temporarily. Some patients keep ivermectin as a crash-only medication rather than a daily one. For patients already established on T3 therapy, an acute, temporary increase in the T3 dose is the second tried strategy, set with whoever manages that prescription, never a reason to start T3 early. Artemisinin plays no role here. It is an optional extra antiviral for stacking against suspected viral reactivation, not a crash tool.",
  },
  {
    question: "Can you take aspirin or ibuprofen on this stack?",
    answer:
      "No. Nattokinase, garlic and olive leaf are all anti-platelet, so while those three are running you avoid aspirin, ibuprofen and other NSAIDs, prescription anticoagulants, bromelain, and high-dose omega-3. This is also why the phase boundary matters, and that boundary applies to the anti-platelet items only. Nattokinase, garlic and olive leaf do not overlap the T3 and refeed phases, where low-dose aspirin is a deliberate co-factor, so never run those three and low-dose aspirin at once. Valacyclovir is the explicit carve-out: it is not anti-platelet, it is the standing antiviral backbone, and it keeps running through the refeed and the T3 phase instead of coming down at the boundary.",
  },
  {
    question: "Why are there no doses on this page?",
    answer:
      "Because a dose that is right for one patient is wrong for the next. Kidney function, liver function, body weight, how many cycles you have completed, and which pathogens are actually driving your case all change the numbers. The full dose sheet is individualized and lives in the members portal, where it can be adjusted against your own labs rather than published as a one-size number.",
  },
];

export default function BetweenFastsPage() {
  return (
    <>
      <JsonLd
        data={[
          ...medicalWebPageLd({
            name: "Between Fasts: The Standing Daily Stack Between Protocol Cycles",
            description: PAGE_DESCRIPTION,
            path: "/between-fasts",
            breadcrumbName: "Between Fasts",
            about: [
              "Long COVID",
              "Myalgic encephalomyelitis/chronic fatigue syndrome",
            ],
            lastReviewed: "2026-08-24",
          }),
          faqPageLd(betweenFastsFaq),
        ]}
      />

      <h1>The Between-Fasts Stack</h1>

      <KeyTakeaways
        points={[
          "This is the standing daily stack for the long gap between protocol cycles: the months after one fast and refeed have finished, and before the next fast begins. It is not a pre-fast shopping list.",
          "Valacyclovir is the standing antiviral backbone. It stays off during the dry fast and the first two water days because it is renally cleared, starts on water day 3, and then keeps running. Ivermectin is a secondary supportive antiviral and the primary antiparasitic.",
          "During a PEM crash, the standing stack keeps running and dosing changes on two items already in it: ivermectin, raised for its calming effect on the nervous system and inflammation, and, for patients already established on T3 therapy, a temporary acute increase set with a clinician. Artemisinin is not a crash tool.",
          "Almost everything here is daily. Artemisinin is the one exception in the standing stack: an optional extra antiviral, added only when stacking against a strongly suspected viral reactivation, and marginal to the protocol outside that situation. Psilocybin microdosing is the other non-daily item, an optional extra never part of the baseline.",
          "Food timing is not a detail. Lysine and nattokinase need an empty stomach to work at all, while monolaurin and thymus glandular need food to be tolerated.",
          "Bleeding risk is the hard stop: nattokinase, garlic and olive leaf are all anti-platelet, and those three never overlap the T3 and refeed phases, where low-dose aspirin is a deliberate co-factor. Valacyclovir is the carve-out: it is not anti-platelet, and it keeps running through the refeed and the T3 phase.",
          "No doses appear on this page. They are individualized against your own labs and live in the members portal.",
        ]}
      />

      <p>
        Most of the protocol is written around the fast. The preparation, the
        fast itself, the water bridge, the refeed, T3, hGH: all of it is
        scheduled around a few intense weeks. Then the cycle ends and you are
        left with a long quiet gap, sometimes several months, before the next
        one. That gap is where this page lives.
      </p>
      <p>
        The gap is not a break. It is the period when viral load quietly
        rebuilds, when microclots reform, and when the immune system is doing
        the slow work of consolidating what the fast cleared. Running nothing
        through it is how people arrive at cycle two no better than they arrived
        at cycle one. The standing stack below is what holds the ground the fast
        took.
      </p>

      <h2>Which Page You Actually Need</h2>
      <p>
        Four pages on this site cover four different phases, and people
        regularly land on the wrong one. Use this to check you are in the right
        place.
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Page</th>
            <th style={{ width: "70%" }}>The phase it owns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link href="/long-covid-basics">Long Covid Basics</Link>
            </td>
            <td>
              Before you are ready to fast. The first-line supportive stack that
              stabilizes you enough to consider a protocol cycle at all.
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/viral-reactivation">Viral Reactivation</Link>
            </td>
            <td>
              The fast-to-refeed vulnerability window: the days when latent
              virus is most likely to wake up, and how to close that window.
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/refeeding">The Refeed</Link>
            </td>
            <td>
              The refeed itself. How to come off a fast without triggering
              refeeding syndrome, and how to stage food back in.
            </td>
          </tr>
          <tr>
            <td>
              <strong>This page</strong>
            </td>
            <td>
              The long gap after a cycle has finished and before the next one
              starts. The standing daily maintenance stack.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>The Direct Antiviral Core</h2>
      <p>
        This is the part of the stack that does the actual pathogen work.
        Everything else supports it.
      </p>

      <table>
        <thead>
          <tr>
            <th style={{ width: "25%" }}>Agent</th>
            <th style={{ width: "35%" }}>Role</th>
            <th style={{ width: "40%" }}>How to take it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Valacyclovir</strong>
              <br />
              (standing backbone, prescription)
            </td>
            <td>
              The lead antiviral. It holds continuous pressure on the
              herpesvirus family that drives reactivation in most chronic
              illness cases.
            </td>
            <td>
              With or without food. A small snack or a full glass of water
              prevents nausea. Extra fluid every single day is mandatory, not
              optional. See the timing gate below.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Ivermectin</strong>
              <br />
              (secondary, prescription)
            </td>
            <td>
              A secondary supportive antiviral and the primary antiparasitic. It
              calms the nervous system and inflammation and may mildly inhibit
              viral entry. It is not the lead antiviral.
            </td>
            <td>
              Prescription only. Read the quercetin interaction note further
              down before running the two together. The dose is raised
              temporarily during a PEM crash; see that section below.
            </td>
          </tr>
          <tr>
            <td>
              <strong>L-Lysine</strong>
            </td>
            <td>
              Competes with arginine for the transporter herpesviruses depend
              on, tilting the ratio away from replication.
            </td>
            <td>
              Empty stomach where possible: 30 minutes before food, or 2 hours
              after, with water. Amino acids compete for the same gut
              transporters, so dietary protein blocks uptake. A little food is
              acceptable if it causes cramping.
            </td>
          </tr>
          <tr>
            <td>
              <strong>Monolaurin</strong>
            </td>
            <td>
              Disrupts the lipid envelope of enveloped viruses. A virus with a
              damaged envelope cannot enter new cells.
            </td>
            <td>
              Must be taken with food. It is a concentrated fat-soluble lipid
              extract and causes gastric burning on an empty stomach. Food or a
              healthy fat also improves absorption.
            </td>
          </tr>
        </tbody>
      </table>

      <div className="guiding-questions box-warning">
        <h3>The Valacyclovir Timing Gate</h3>
        <p>
          Valacyclovir is renally cleared. That single fact sets its entire
          schedule, and it is worth understanding rather than memorizing.
        </p>
        <div className="question-item">
          <span className="question-label">
            Off during the dry fast and water days 1 and 2
          </span>
          Without renal water flow the drug cannot be cleared at the rate the
          dosing assumes. Clearance kinetics go wrong and concentration builds.
          This is a pharmacology boundary, not a preference.
        </div>
        <div className="question-item">
          <span className="question-label">Starts on water day 3</span>
          By the third day of the water fast, rehydration is established and the
          kidneys are moving fluid again. That is the moment the antiviral
          backbone goes on, and it is deliberately before the refeed opens the
          vulnerability window.
        </div>
        <div className="question-item">
          <span className="question-label">
            Runs through the refeed and keeps running
          </span>
          It does not stop when the refeed ends. It carries straight into the
          standing between-fasts course, which is what this page describes.
        </div>
        <div className="question-item">
          <span className="question-label">
            A prodrome is an escalation on top, not a switch
          </span>
          Tingling, burning or itching at an old outbreak site means replication
          has already started. The loading dose for a prodrome is layered on top
          of the standing course, not substituted for it. See{" "}
          <Link href="/viral-reactivation">Viral Reactivation</Link> for the
          full prodrome decision tree.
        </div>
        <div className="question-item">
          <span className="question-label">
            A prodrome during the dry fast is a different call entirely
          </span>
          The escalation above assumes the standing course is already running.
          If a prodrome arrives while you are still in the dry phase, there is
          no course to escalate and, more to the point, no renal water flow to
          clear a renally cleared drug with. That case ends the dry phase: you
          convert to a water fast and rehydrate first, and only then does the
          antiviral go in, with L-lysine alongside it. How long that
          rehydration runs depends on how deep the dry fast was, and a prodrome
          that repeats every cycle means the fast needs restructuring rather
          than a bigger rescue. See{" "}
          <Link href="/viral-reactivation">Viral Reactivation</Link> for the
          reasoning, and ask me for the modified protocol before improvising
          your own.
        </div>
      </div>

      <div className="guiding-questions box-warning">
        <h3>The Gut Rebuild Rider (Mandatory, Not Optional)</h3>
        <p>
          In my clinical observation, a months-long valacyclovir course damages
          the bacterial biome and the virome alongside the pathogens it is
          aimed at. That collateral damage is predictable, so the repair runs
          alongside the course rather than after it.
        </p>
        <h4>What to do</h4>
        <p>
          Start raw kefir daily from the first day of the standing course. Once
          kefir is comfortably tolerated, layer in raw kombucha. This rider runs
          for the entire length of the standing course. Treat it as part of the
          antiviral protocol, not as a nice extra.
        </p>
      </div>

      <h2>Nervous System, Sleep and Immune Reset</h2>
      <p>
        The second layer targets the part of chronic illness that is not
        pathogen load: the glial and mast-cell overreaction, the wired-and-tired
        nervous system, and the depleted immune baseline.
      </p>

      <div className="guiding-questions box-info">
        <h3>The Neuro-Immune Layer</h3>
        <div className="question-item">
          <span className="question-label">Ultramicronized PEA</span>
          Palmitoylethanolamide is in the stack to dampen hyper-reactive
          microglial and mast-cell flares. A systematic review of 47 human
          randomized controlled trials found consistent clinical benefit for
          pain and general wellbeing, with mast-cell and microglial damping
          given as the rationale (Bortoletto et al., 2025). Read that as
          researched for calming overactive immune and glial signaling, rather
          than as a settled human imaging finding. The ultramicronized form is
          the one used, because particle size drives absorption.
        </div>
        <div className="question-item">
          <span className="question-label">
            Liposomal apigenin (before bed)
          </span>
          Taken 30 to 60 minutes before bed. Apigenin crosses the blood-brain
          barrier and binds the benzodiazepine site on the GABA-A receptor. That
          receptor affinity is well demonstrated, but only in preclinical work:
          rat brain tissue and cultured cells (Avallone et al., 2000). The same
          paper found no anxiolytic effect in living animals, so receptor
          binding is a mechanism, not evidence of a sleep or calming benefit. If
          your insomnia is histamine-driven, the{" "}
          <Link href="/mcas-and-dry-fasting">MCAS page</Link> covers the tools
          that address it directly.
        </div>
        <div className="question-item">
          <span className="question-label">Thymus glandular (with food)</span>
          Bovine thymus tissue, taken with food, to support T-cell maturation
          and the immune baseline between cycles. Note the category carefully:
          this is a glandular, not a peptide. Thymalin remains the only thymus
          peptide in the protocol. This is my own clinical framework rather
          than a tested protocol, and no published trial evidence is being
          claimed for it.
        </div>
      </div>

      <h2>Blood Clearing and Biofilm</h2>
      <p>
        Microclots and viral biofilms are physical obstacles. They block oxygen
        delivery and they shelter pathogens from both the immune system and the
        antivirals. Nattokinase works this layer, daily.
      </p>

      <div className="guiding-questions box-info">
        <h3>Nattokinase (Daily, Empty Stomach)</h3>
        <div className="question-item">
          <span className="question-label">
            An enzyme, not a supplement to skip
          </span>
          Nattokinase breaks down microclots and viral biofilms in the
          bloodstream. It must be taken on an empty stomach, first thing in the
          morning or right before bed. The reason matters: taken with food, the
          enzyme is spent digesting meal protein and never reaches the
          bloodstream at all. With food it is not a smaller effect. It is a
          wasted dose.
        </div>
      </div>

      <h2>Artemisinin: An Optional Extra, Not a Core Item</h2>
      <p>
        Artemisinin is sweet wormwood extract. It earns its place in this
        protocol for one reason only: when viral reactivation is strongly
        suspected, it stacks with the standing antivirals to add extra
        pressure while that suspicion is being worked through.
      </p>

      <div className="guiding-questions box-info">
        <h3>What It Is Actually For</h3>
        <div className="question-item">
          <span className="question-label">
            An extra antiviral for stacking, nothing more
          </span>
          Artemisinin is not a daily agent and it is not a PEM-crash tool. In
          my own assessment it is a marginal item in the protocol: useful
          specifically when stacking antivirals because reactivation is
          strongly suspected, and outside that situation it would not really
          have a place in the protocol at all.
        </div>
        <div className="question-item">
          <span className="question-label">Never daily</span>
          Continuous use lets the body upregulate its metabolic clearance of
          artemisinin, so the same amount does less and less over time.
          Reserving it for the situations that actually call for it, with real
          gaps between uses, is what keeps it useful on the occasions it is
          genuinely needed.
        </div>
      </div>

      <div className="guiding-questions box-danger">
        <h3>Screen for G6PD Deficiency Before Any Artemisinin</h3>
        <p>
          Artemisinin drives oxidative stress on purpose. Red blood cells in
          people with G6PD deficiency cannot buffer that stress, and the result
          can be hemolysis. G6PD deficiency is common, frequently undiagnosed,
          and simple to test for. Get the test before the first dose, not after
          a reaction.
        </p>
        <p>
          <em>
            Medical caveat: G6PD status is a screening decision that belongs
            with your physician, and artemisinin is not appropriate for everyone
            even with a normal result.
          </em>
        </p>
      </div>

      <h2>What To Do During a PEM Crash</h2>
      <p>
        Post-exertional malaise is the collapse that arrives hours or a day
        after you did something ordinary. Every other page on this site covers
        how to avoid crashing. This section covers what to do once you are
        already in one, because that is the question people are actually typing
        at 2am.
      </p>
      <p>
        The first rule is the least satisfying one: the standing stack keeps
        running unchanged. A crash is not the moment to add three new
        supplements or to stop the antiviral backbone. The stack is what holds
        the baseline while the crash passes.
      </p>
      <p>
        What does change is dosing on two items already in the picture:
        ivermectin, and, for some patients, T3. Artemisinin is not part of
        crash management. It is an optional extra antiviral for stacking
        against suspected reactivation, covered above.
      </p>

      <div className="guiding-questions box-warning">
        <h3>Ivermectin: The First Lever</h3>
        <div className="question-item">
          <span className="question-label">Why ivermectin works here</span>
          Ivermectin is already in the standing stack as a supportive
          antiviral, where it calms the nervous system and inflammation and may
          mildly inhibit viral entry. In my clinical experience, that same
          calming and anti-inflammatory effect is powerful enough that raising
          the dose is often what pulls someone out of a crash.
          Some patients keep ivermectin as a crash-only medication rather than
          a daily one. Others run it daily and simply raise the dose when a
          crash hits.
        </div>
        <div className="question-item">
          <span className="question-label">
            The dose is raised, not the drug changed
          </span>
          The amount goes up during a crash and comes back down once the crash
          has passed. What that amount is, and how it is ramped, is set per
          case, in the members portal or with whoever prescribes it. The
          quercetin interaction covered further down still applies: flag the
          crash dose to your prescriber the same as you would the standing one.
        </div>
      </div>

      <div className="guiding-questions box-warning">
        <h3>Acute T3 Increase: For Patients Already On T3</h3>
        <div className="question-item">
          <span className="question-label">The second tried strategy</span>
          For someone already established on T3 therapy, a temporary, acute
          increase in the T3 dose is the other strategy I have seen work
          to beat back a crash quickly. This applies only to patients already
          running T3. It is not a reason to start T3 early, or to begin it
          because a crash hit.
        </div>
        <div className="question-item">
          <span className="question-label">Not a self-directed change</span>
          A thyroid hormone dose is not something to adjust on your own,
          especially mid-crash. If you are already on T3, this is worth
          discussing in advance with whoever manages that prescription, so you
          know what an acute increase looks like for your case before you need
          one.
        </div>
      </div>

      <p>
        <em>
          Medical caveat: both of these are dose changes to prescription
          medications. Raising ivermectin or T3 during a crash belongs with
          the physician managing that prescription, not as a self-directed
          decision made in the moment.
        </em>
      </p>

      <h2>Systemic Support</h2>
      <p>
        The last daily layer is broad cover: antimicrobial breadth, mast-cell
        stability, and mitochondrial energy.
      </p>

      <div className="guiding-questions box-info">
        <h3>The Systemic Layer</h3>
        <div className="question-item">
          <span className="question-label">Garlic (odorless)</span>
          Broad antimicrobial defense. Allicin, the active compound, reacts with
          thiol groups on microbial enzymes, and that single mechanism underlies
          documented activity against a wide range of bacteria, against Candida,
          and against parasites such as Entamoeba and Giardia (Ankri and
          Mirelman, 1999). That evidence is laboratory pharmacology covering
          antibacterial, antifungal and antiparasitic breadth. It is not cited
          here as antiviral efficacy, and garlic is not doing the antiviral work
          in this stack. Valacyclovir is.
        </div>
        <div className="question-item">
          <span className="question-label">Olive leaf extract</span>
          A plant-derived antimicrobial. It sits alongside garlic as background
          pressure, not as a primary agent. In my clinical experience it helps
          interrupt viral replication loops, which is why it is in the stack,
          and no trial evidence is being claimed for that.
        </div>
        <div className="question-item">
          <span className="question-label">Quercetin</span>
          Stabilizes mast cells and acts as a zinc ionophore, carrying zinc into
          the cell where it can interfere with viral replication. It is also the
          one item in this stack with a real drug interaction, covered
          immediately below.
        </div>
        <div className="question-item">
          <span className="question-label">Pyrucet (IdeaLabs)</span>
          Topical or oral mitochondrial energy support, taken in the morning.
          Read the molecule warning below before adding it.
        </div>
      </div>

      <div className="guiding-questions box-danger">
        <h3>Two Interactions You Must Check</h3>
        <div className="question-item">
          <span className="question-label">
            Quercetin raises ivermectin exposure
          </span>
          Quercetin inhibits P-glycoprotein, the efflux pump that normally
          shuttles ivermectin back out of cells and out of the body. Inhibit the
          pump and circulating ivermectin exposure rises, even though nothing
          about the ivermectin itself has changed. Flag it to whoever prescribes
          your ivermectin whenever the two run together, so the interaction is
          accounted for rather than discovered.
        </div>
        <div className="question-item">
          <span className="question-label">Pyrucet is ethyl pyruvate</span>
          Pyrucet is not similar to the prescription refeed agent. It is the
          same molecule: ethyl pyruvate. Running the over-the-counter product
          and the prescription version at the same time is not stacking two
          supports, it is doubling one. Do not run both at once. Ethyl pyruvate
          belongs to the refeed phase, paired with methylene blue, and Pyrucet
          belongs to this between-fasts phase. Pick the one that matches where
          you are.
        </div>
      </div>

      <h2>Psilocybin Microdosing: Optional, Not Baseline</h2>
      <p>
        Psilocybin microdosing appears in the protocol as an explicitly optional
        extra. It is deliberately excluded from the daily baseline. Nobody needs
        it to run this stack correctly, and leaving it out costs you nothing.
      </p>

      <div className="guiding-questions box-danger">
        <h3>If You Choose To Use It</h3>
        <div className="question-item">
          <span className="question-label">What it is there for</span>
          The rationale is neuroplasticity: giving a nervous system locked in a
          chronic-illness pattern a window in which it can form new ones. Run in
          cycles with scheduled off days rather than continuously.
        </div>
        <div className="question-item">
          <span className="question-label">
            Do not combine with methylene blue
          </span>
          Psilocybin is serotonergic and methylene blue is a monoamine oxidase
          inhibitor. Combining them risks serotonin toxicity. Methylene blue
          runs during the early refeed, which is one more reason psilocybin and
          the refeed phase stay separate.
        </div>
        <div className="question-item">
          <span className="question-label">Stop signals</span>
          Monitor for transient rises in heart rate or blood pressure. Pause
          immediately on any CNS hyper-arousal or anxiety. Chronic illness
          nervous systems are already dysregulated, and hyper-arousal is a
          reason to stop rather than to push through.
        </div>
        <p>
          <em>
            Medical caveat: psilocybin is a controlled substance in most
            jurisdictions. Nothing here is a suggestion to obtain or use an
            illegal substance, and the legal position where you live is yours to
            establish.
          </em>
        </p>
      </div>

      <h2>Safety, Bleeding Risk and the Phase Boundary</h2>

      <div className="guiding-questions box-danger">
        <h3>Bleeding Risk: The Hard Stop On This Stack</h3>
        <p>
          Nattokinase, garlic and olive leaf are all anti-platelet. Individually
          the effect is modest. Stacked daily it is real, and it compounds with
          anything else that thins the blood.
        </p>
        <h4>While the anti-platelet items are running, completely avoid</h4>
        <ul>
          <li>Aspirin</li>
          <li>Ibuprofen and other NSAIDs</li>
          <li>Prescription anticoagulants</li>
          <li>Bromelain</li>
          <li>
            Omega-3 at 2 to 4 g (ordinary culinary intake is not the concern
            here)
          </li>
        </ul>
        <h4>The phase boundary</h4>
        <p>
          The phase boundary applies to the anti-platelet items only:
          nattokinase, garlic and olive leaf. Those three do not overlap the T3
          and refeed phases, where low-dose aspirin is a deliberate co-factor,
          and you never run them and low-dose aspirin at once. If you are moving
          into a refeed or starting <Link href="/t3-therapy">T3 therapy</Link>,
          nattokinase, garlic and olive leaf are what comes down first.
        </p>
        <p>
          Valacyclovir is the explicit carve-out and it does not come down here.
          It is the standing antiviral backbone, it is not anti-platelet, and it
          keeps running straight through the refeed and the T3 phase. The refeed
          is the vulnerability window for viral reactivation, which is exactly
          why the backbone stays on through it.
        </p>
        <h4>Routine monitoring</h4>
        <p>
          Pull liver enzymes (ALT and AST) and kidney function (BUN and
          creatinine) every few months while the standing course is running. The
          point is to confirm the body is clearing the full stack cleanly, and
          to catch a trend early rather than a crisis late. Valacyclovir in
          particular is renally cleared, which makes kidney monitoring
          non-negotiable on a months-long course.
        </p>
      </div>

      <h2>Where the Doses Live</h2>
      <p>
        The full dose sheet for this stack is individualized and lives in the
        members portal, where it sits next to your own labs and can be adjusted
        against them. Members get the complete between-fasts sheet with amounts,
        frequencies and personal overrides, plus the ability to ask about their
        own case.{" "}
        <Link href="/membership">See what membership includes</Link>.
      </p>
      <p>
        <em>
          Medical caveat: valacyclovir, ivermectin and T3 are prescription
          medications. Every item on this page, prescription or not, is a
          decision to make with a physician who knows your history and your
          labs.
        </em>
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="guiding-questions box-info">
        {betweenFastsFaq.map((item) => (
          <div className="question-item" key={item.question}>
            <span className="question-label">{item.question}</span>
            {item.answer}
          </div>
        ))}
      </div>

      <RefeedPlanPromo source="between-fasts" />
      <GuidanceBox />

      <ReferencesSection
        refs={[
          {
            citation:
              "Bortoletto R, Comacchio C, Garzitto M, Piscitelli F, Balestrieri M, Colizzi M. Palmitoylethanolamide supplementation for human health: A state-of-the-art systematic review of Randomized Controlled Trials in patient populations. Brain, Behavior, & Immunity - Health, 2025;43:100927. PMID 39839988.",
            href: "https://doi.org/10.1016/j.bbih.2024.100927",
            note: "systematic review of 47 human randomized controlled trials; cited for PEA as researched for calming overactive microglial and mast-cell signaling",
          },
          {
            citation:
              "Avallone R, Zanoli P, Puia G, Kleinschnitz M, Schreier P, Baraldi M. Pharmacological profile of apigenin, a flavonoid isolated from Matricaria chamomilla. Biochemical Pharmacology, 2000;59(11):1387-1394. PMID 10751547.",
            href: "https://doi.org/10.1016/s0006-2952(00)00264-1",
            note: "preclinical only (rat tissue and in-vitro); cited for GABA-A benzodiazepine-site affinity alone. The same paper found no anxiolytic effect, so it is not evidence of a sleep or calming benefit",
          },
          {
            citation:
              "Ankri S, Mirelman D. Antimicrobial properties of allicin from garlic. Microbes and Infection, 1999;1(2):125-129. PMID 10594976.",
            href: "https://doi.org/10.1016/s1286-4579(99)80003-3",
            note: "mechanistic and in-vitro review; cited for antibacterial, antifungal and antiparasitic breadth only, not for antiviral efficacy",
          },
        ]}
      />
    </>
  );
}
