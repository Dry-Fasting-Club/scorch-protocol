import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

const SITE_URL = "https://scorchprotocol.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Scorch Protocol. Questions about the protocol, corrections, coaching, membership, or your own recovery story.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <h1>Contact</h1>
      <p className="static-lede">
        The Scorch Protocol is run by Yannick Wolfe. The fastest way to reach me is
        email.
      </p>

      <p>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <h2>What to reach out about</h2>
      <ul>
        <li>
          <strong>Questions about the protocol.</strong> If you want a personal,
          detailed answer tied to your own labs and situation, the fastest path is
          the <Link href="/membership">members portal</Link>, where questions are
          answered directly.
        </li>
        <li>
          <strong>Corrections.</strong> If something on this site is wrong or out of
          date, tell me. Accuracy matters more than being right, and I update pages
          when the evidence says to.
        </li>
        <li>
          <strong>Coaching &amp; sourcing.</strong> See the{" "}
          <Link href="/coaching">coaching page</Link> for one-on-one help with
          verified sourcing and dosing.
        </li>
        <li>
          <strong>Your story.</strong> Recoveries, setbacks, and honest data all
          help the people who come after you. I read every one.
        </li>
      </ul>

      <h2>What I can&rsquo;t do by email</h2>
      <p>
        I&rsquo;m not a physician and can&rsquo;t diagnose you, prescribe anything,
        or act as your doctor. For anything urgent or clinical, please contact a
        licensed medical professional or emergency services. Everything here is
        educational, as spelled out in the{" "}
        <Link href="/medical-disclaimer">medical disclaimer</Link>.
      </p>
    </>
  );
}
