import type { Metadata } from "next";
import Link from "next/link";
import GuidanceBox from "@/components/GuidanceBox";
import KeyTakeaways from "@/components/KeyTakeaways";
import JsonLd from "@/components/JsonLd";
import ReferencesSection from "@/components/ReferencesSection";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Why It Works: The Healing Cycle",
  description:
    "Why the Scorch Protocol runs in the order it does: the fast as a short deliberate stress, the refeed as the consolidation window, then restoring the metabolism.",
  alternates: { canonical: "https://scorchprotocol.com/healing-cycle" },
};

export default function HealingCyclePage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Why It Works: The Healing Cycle", description: "Why the Scorch Protocol runs in the order it does: the fast as a short deliberate stress, the refeed as the consolidation window, then restoring the metabolism.", path: "/healing-cycle", breadcrumbName: "The Healing Cycle", lastReviewed: "2026-11-05" })} />
      <h1>Why It Works: The Healing Cycle</h1>
      <KeyTakeaways points={[
        "The fast is a short, deliberate stress that pushes stuck cells toward the healthy state.",
        "Refeed days 1 to 14 are the consolidation window: what the fast opened is kept or lost here.",
        "The metabolism comes back only when the body stops sensing danger; T3 is for the person still cold and exhausted after the refeed, not for everyone.",
      ]} />
      <p>
        Every page on this site is a step. This page is why the steps come in
        this order.
      </p>

      <h2 id="the-model">The model</h2>
      <p>
        A mitochondrial researcher at the University of California San Diego,
        Robert Naviaux, describes chronic illness as a normal healing response
        that got stuck. Every infection, injury or toxin switches a
        cell&rsquo;s metabolism into a defensive program he calls
        the cell danger response. Healing is meant to move through that
        program in stages and come out the other side. Chronic illness, in his
        model, is what happens when cells stay parked partway through, still
        defending against a threat that has passed. It is a theory, and he
        says himself that the details are provisional. I find it the most
        useful frame I have for what I see in people, and for why this
        protocol is built the way it is.
      </p>

      <h2 id="the-stages">The stages, in plain words</h2>
      <p>
        First, inflammation: the cell locks down, fights, and cleans up.
        Second, proliferation: the tissue rebuilds its numbers. Third,
        differentiation: the new cells settle, specialise, and reconnect with
        their neighbours, their nerves and their hormones. Then normal life.
        Each gate opens only when the cell&rsquo;s own energy is ready and the
        signals around it say the danger is over. Cells cannot skip a stage,
        and a cell stuck at a gate keeps acting sick long after the trigger is
        gone.
      </p>

      <h2 id="what-stuck-looks-like">What stuck looks like</h2>
      <p>
        Fatigue that does not lift with rest. Brain fog. A low waking
        temperature, cold hands and feet, and no tolerance for heat. Poor
        sleep, a flat appetite, a nervous system that cannot come down. In the
        model, cells in the stuck state also stop listening to the
        body&rsquo;s own signals, which is why blood tests can look normal
        while the person feels none of what those tests measure. The signs
        that the cycle is moving again are the opposite: warmth coming back,
        heat tolerance returning, deeper sleep, a real appetite, and a body
        that suddenly uses food, supplements and medicine better than before.
      </p>

      <h2 id="how-the-protocol-walks-the-cycle">How the protocol walks the cycle</h2>
      <p>
        <strong>Prepare.</strong> Lower the danger load first. The fewer
        alarms your body is already answering (a loaded gut, drugs to clear, a
        known deficiency), the further the fast can carry you.
      </p>
      <p>
        <strong>Fast.</strong> The dry fast is a short, deliberate stress. It
        clears blockages, strips out damaged cells and mitochondria, resets
        the energy state of the cell and pushes it toward the healthy state.
        Deeper fasts go deeper and may bring results faster, but they demand a
        stricter refeed and more care, and how far you go is set with me. Five
        days dry is the cap at home.
      </p>
      <p>
        <strong>Refeed.</strong> The most vulnerable stage of the whole cycle.
        For about two weeks the new cells are settling and reconnecting, and
        the refeed has to cultivate that state rather than shock it. Too much
        food too fast, a protein or insulin spike, an infection, a cold room,
        broken sleep, a stressful week: any fresh danger signal can lock the
        cells straight back into the stuck state. Every rule on the refeed
        page exists to keep that signal off.
      </p>
      <p>
        <strong>Restore.</strong> The metabolism comes back only when the body
        stops sensing danger. That means calories, warmth, carbohydrate, the
        between-fasts stack, and, for the person who stays cold and exhausted
        after the refeed, a short T3 course.
      </p>
      <p>
        <strong>Rebuild.</strong> hGH belongs to the last stage of the cycle,
        which is why it waits until two full cycles have cleared the way.
      </p>

      <h2 id="two-turning-points">The two turning points of the fast</h2>
      <p>
        In my experience the dry fast has two turning points. Day three is the
        first acidotic crisis, the metabolic commitment where the body switches
        gears and the nervous system flips from panic to calm. The second
        comes around days seven to nine, and it is where the deeper
        acidification does its most aggressive work: it melts biofilms, the
        protective shells that shelter Lyme co-infections and other stubborn
        pathogens from the immune system. That second window is not for the
        newly initiated and it is never a home fast. It is my experience, not
        a measured fact, and I say so.
      </p>

      <h2 id="healthier-gets-more">Why the healthier you are, the more the fast gives</h2>
      <p>
        A stronger metabolism gets more from the fast. The healthier you are,
        the more healing your body is capable of, because the system needs a
        lot of moving parts to work: fat burning, immune mobilisation,
        autophagy, rebuilding. That is also why the coldest, most damaged
        people respond so well to the whole sequence: they have the most to
        regain, and the fast, the refeed, the calories and T3 together give it
        back. A sick person should expect more fasts than a healthy person,
        with more careful refeeds and more careful preparation.
      </p>

      <h2 id="where-t3-fits">Where T3 fits</h2>
      <p>
        Not everyone needs T3. It is for the person who comes out of the fast
        and the refeed still cold, with whole-body and brain fatigue that does
        not lift. For them the 30-day course is a reboot: it brings the
        metabolism up to speed, lets the body use the calories, and then hands
        the job back to your own thyroid. Some people do better on a milder mix
        of T4 and T3; which, and how much, is set case by case. If the course
        does little, that is an answer too: wean off rather than climb.
      </p>

      <h2 id="bioenergetic-view">Fasting and the bioenergetic view</h2>
      <p>
        The school of thought I follow on metabolism warns against fasting of
        any kind, because it reads every stressor as anti-metabolic. My
        experience is that the two belong together: fast rarely, as a short
        sharp stress that breaks the stuck state, then feed, warm and bring
        carbohydrate back to keep it broken. The fast opens the door. Food and
        warmth keep it open.
      </p>

      <h2 id="evidence">What the evidence says</h2>
      <div className="guiding-questions box-info">
        <p>
          Marked caveat: the healing cycle is a theory paper from one
          researcher. It has no patients in it and no trial behind it, and its
          author writes that only good clinical trials will tell whether it is
          true. It says nothing about dry fasting, multi-day fasting or
          refeeding; the only fasting it endorses is occasional short fasts,
          and it cautions against prolonged calorie restriction and against
          long-term hormone treatment, which it says can bring side effects and
          dependence. The one drug built on the model, suramin, helped a few
          children for weeks in a pilot and missed its main goal in a larger
          trial. Mapping the fast and the refeed onto the stages is my
          synthesis, not his claim. What is measured in people: inflammation
          markers rise during long fasts and settle after a careful refeed, and
          immune signals have been measured rising four days into a refeed,
          which is why I treat those days the way I do.
        </p>
      </div>

      <h2 id="further-reading">Further reading</h2>
      <p>
        <Link href="/preparation">Preparation</Link>,{" "}
        <Link href="/dry-fasting">The Dry Fast</Link>,{" "}
        <Link href="/refeeding">The Refeed</Link>,{" "}
        <Link href="/t3-therapy">T3 Therapy</Link>,{" "}
        <Link href="/hgh-therapy">hGH Therapy</Link>,{" "}
        <Link href="/between-fasts">Between Fasts</Link>, the{" "}
        <Link href="/refeed-for-bmr">Metabolism Repair Plan</Link>.
      </p>

      <GuidanceBox />

      <ReferencesSection
        refs={[
          {
            citation:
              "Naviaux RK. Metabolic features and regulation of the healing cycle: A new model for chronic disease pathogenesis and treatment. Mitochondrion, 2019;46:278-297. PMID 30099222. DOI 10.1016/j.mito.2018.08.001.",
            href: "https://doi.org/10.1016/j.mito.2018.08.001",
            note: "the model this page uses: a theory and review paper by one author, with no patients and no trial; he calls the details provisional, and the only fasting it mentions is occasional short fasts",
          },
          {
            citation:
              "Commissati S, Cagigas ML, Masedunskas A, et al. Prolonged fasting promotes systemic inflammation and platelet activation in humans: A medically supervised, water-only fasting and refeeding study. Mol Metab, 2025;96:102152. PMID 40268190. DOI 10.1016/j.molmet.2025.102152.",
            href: "https://doi.org/10.1016/j.molmet.2025.102152",
            note: "a supervised water-only fast and guided refeed in middle-aged volunteers: CRP and other inflammation markers rose during the fast and settled back to baseline after the refeed; single arm, no control group, water fasting rather than dry",
          },
          {
            citation:
              "Fazeli PK, Zhang Y, O'Keefe J, Pesaresi T, Lun M, Lawney B, Steinhauser ML. Prolonged fasting drives a program of metabolic inflammation in human adipose tissue. Mol Metab, 2020;42:101082. PMID 32992039. DOI 10.1016/j.molmet.2020.101082.",
            href: "https://doi.org/10.1016/j.molmet.2020.101082",
            note: "serial fat biopsies through an inpatient water-only fast in healthy volunteers: an immune and inflammation response switched on in fat tissue, inflammation markers rose in the blood, and CRP had not come down the day after refeeding; a small study with no control group",
          },
          {
            citation:
              "de Ciutiis I, Djakovic S, Cagigas ML, Masedunskas A, Smith L, Franceschi C, Fontana L. Long-term fasting and its influence on inflammatory biomarkers: A comprehensive scoping review. Ageing Res Rev, 2025;110:102797. PMID 40484176. DOI 10.1016/j.arr.2025.102797.",
            href: "https://doi.org/10.1016/j.arr.2025.102797",
            note: "a scoping review of human studies of prolonged fasting: inflammation markers mostly rose or did not change during the fast, and settled after refeeding in several studies; the authors call the evidence limited and inconsistent",
          },
          {
            citation:
              "Mesnage R, Grundler F, Schwiertz A, Le Maho Y, Wilhelmi de Toledo F. Changes in human gut microbiota composition are linked to the energy metabolic switch during 10 d of Buchinger fasting. J Nutr Sci, 2019;8:e36. PMID 31798864. DOI 10.1017/jns.2019.33.",
            href: "https://doi.org/10.1017/jns.2019.33",
            note: "healthy men on a modified Buchinger fast with small daily calories: inflammatory cytokines did not rise significantly during the fast and rose significantly above baseline four days into the refeed; one refeed time point, no control group",
          },
        ]}
      />
    </>
  );
}
