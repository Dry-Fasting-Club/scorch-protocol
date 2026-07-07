import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "The Scorch Protocol is educational information, not medical advice. Read the full disclaimer, including the risks of fasting, T3, and hGH.",
  alternates: { canonical: `${SITE_URL}/medical-disclaimer` },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <h1>Medical Disclaimer</h1>
      <p className="static-page-updated">Last reviewed: July 2026</p>

      <p className="static-lede">
        The information on The Scorch Protocol describes a personal health protocol
        and is provided for educational purposes only. It is not medical advice, and
        it is not a substitute for the judgment of a qualified physician who knows
        your history.
      </p>

      <h2>Not a doctor-patient relationship</h2>
      <p>
        Reading this site, subscribing, or corresponding with us does not create a
        doctor-patient relationship. Yannick Wolfe is not a licensed medical
        professional. Nothing here should be taken as a diagnosis, a prescription,
        or personalized medical treatment.
      </p>

      <h2>Talk to your physician first</h2>
      <p>
        Consult a qualified physician before starting, stopping, or changing any
        diet, fasting practice, supplement, or medication. This is especially
        important because parts of the protocol involve prescription medication and
        real physiological stress:
      </p>
      <ul>
        <li>
          <strong>Dry fasting</strong> (no food or water) is a significant
          physiological stressor and is not appropriate for everyone.
        </li>
        <li>
          <strong>T3 (liothyronine)</strong> is a prescription thyroid hormone that
          affects heart rate and metabolism and requires medical supervision.
        </li>
        <li>
          <strong>hGH and peptides</strong> are prescription or restricted
          substances with their own risks and legal considerations.
        </li>
      </ul>

      <h2>Not for everyone</h2>
      <p>
        Certain conditions and situations make this protocol unsafe. Please read the{" "}
        <Link href="/contraindications">contraindications page</Link> before going
        any further, and get medical clearance if there is any doubt.
      </p>

      <h2>No guarantees, assumption of risk</h2>
      <p>
        Outcomes described on this site, including on the{" "}
        <Link href="/success-rate-data">results page</Link>, are observational and
        self-reported and do not guarantee any particular result for you. You are
        responsible for your own health decisions and assume the risks of any action
        you take based on this information. In an emergency, contact your local
        emergency services immediately.
      </p>
    </>
  );
}
