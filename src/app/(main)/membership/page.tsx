import type { Metadata } from "next";
import { MEMBERS_PORTAL_URL, MEMBERS_SIGNUP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Membership | The Scorch Protocol",
  description:
    "Get your own customized refeed plan and personalized protocol guidance in the Scorch Protocol members portal. Starts at $1.",
};

export default function MembershipPage() {
  return (
    <>
      <h1>Get your own customized refeed plan</h1>
      <p>
        The Scorch Protocol members portal turns the protocol into a plan built
        around you: a day-by-day refeed schedule sized to your own fast, plus a
        coach in your pocket. It starts at $1.
      </p>
      <p>
        <a href={MEMBERS_PORTAL_URL} className="guidance-btn">
          Open the members portal →
        </a>
        <a href={MEMBERS_SIGNUP_URL} className="membership-secondary">
          or start for $1
        </a>
      </p>

      <h2>Build your refeed plan in two minutes</h2>
      <p>
        Tell the portal your fast length, fast type, maintenance calories, and
        start date. It builds your personalized day-by-day plan: what to eat and
        how to ramp your calories, from the first liquids through to the day you
        add steak. Members also unlock the therapy-timing layer, when to bring in
        T3, gut repopulation, antivirals, peptides, and more, with the exact
        doses set in a 1-on-1 consult.
      </p>

      <h2>What else you get</h2>
      <ul>
        <li>
          <strong>Your questions, answered by Yannick.</strong> Every answer is
          drafted with your labs, medications, and check-ins in context, then
          personally reviewed before it reaches you.
        </li>
        <li>
          <strong>Your data in one place.</strong> A private vault for your labs,
          photos, and notes, plus weekly check-ins and temperature tracking that
          sharpen every answer.
        </li>
      </ul>

      <h2>Plans</h2>
      <p>
        Membership starts at $1 a month. Higher tiers add more questions each
        month, the full therapy-timing layer, and a direct line for 1-on-1
        coaching. See the current plans inside the portal.
      </p>

      <div className="guidance-box">
        <h3>Ready to build your plan?</h3>
        <p>Join the members portal and put the protocol to work on your own fast.</p>
        <a href={MEMBERS_PORTAL_URL} className="guidance-btn">
          See plans and join →
        </a>
      </div>
    </>
  );
}
