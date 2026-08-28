import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERS_PORTAL_URL, MEMBERS_SIGNUP_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Membership: Run the Protocol With Yannick",
  description:
    "Join the Scorch Protocol members portal: build a personalized day-by-day refeed plan, track your temperature and labs, and ask Yannick your questions directly. Cancel anytime.",
  alternates: { canonical: "https://scorchprotocol.com/membership" },
};

export default function MembershipPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Membership: Run the Protocol With Yannick", description: "Join the Scorch Protocol members portal: build a personalized day-by-day refeed plan, track your temperature and labs, and ask Yannick your questions directly. Cancel anytime.", path: "/membership", breadcrumbName: "Membership" })} />
      <h1>Run the protocol with Yannick, personalized to your case</h1>
      <p className="membership-lede">
        The site tells you how the protocol works. The members portal turns it
        into a plan built around <em>you</em>: a day-by-day refeed schedule sized
        to your own fast, your data in one place, and your questions answered by
        me directly.
      </p>

      <div className="membership-cta-row">
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn membership-primary">
          Get started today →
        </a>
        <a href={MEMBERS_PORTAL_URL} className="membership-secondary">
          or look around the portal first
        </a>
      </div>
      <p className="membership-risk">
        Cancel anytime, no questions asked.
      </p>

      <h2>What you get</h2>

      <div className="guiding-questions box-info">
        <div className="question-item">
          <span className="question-label">A refeed plan built for your fast</span>
          Tell the portal your fast length, fast type, maintenance calories, and
          start date. It builds your personalized day-by-day plan: what to eat
          and how to ramp your calories, from the first liquids through to the
          day you add steak. Breaking a long fast wrong can set you back, so this
          is the part most people most want help with.
        </div>
        <div className="question-item">
          <span className="question-label">Your questions, answered by me</span>
          Send your situation and get a real answer. Every reply is drafted with
          your labs, medications, and check-ins in context, then personally
          reviewed by me before it reaches you. You also get help sourcing
          medication.
        </div>
        <div className="question-item">
          <span className="question-label">Your data in one place</span>
          A private vault for your labs, photos, and notes, plus daily
          temperature tracking and weekly check-ins. Body temperature is the key
          T3 signal the protocol watches, and every reading sharpens the answers
          you get back.
        </div>
      </div>

      <h2>Three tiers, one way in</h2>
      <p>
        Start at Starter and stay there as long as you like. Upgrade only if you
        want more. Current pricing for all tiers is shown at checkout in the
        portal.
      </p>

      <div className="core-pillars">
        <div className="pillar-item" style={{ borderLeftColor: "#e85d04" }}>
          <h3>Starter: $5/mo</h3>
          <p>
            Ask one question a month, build your food-and-calorie refeed plan,
            track your temperature and labs, and log weekly check-ins. The whole
            protocol made personal.
          </p>
        </div>
        <div className="pillar-item" style={{ borderLeftColor: "#27ae60" }}>
          <h3>Member</h3>
          <p>
            Everything in Starter, plus more questions each month, progress
            photos, and the therapy-timing layer added to your refeed plan: when
            to bring in T3, gut repopulation, antivirals, and the rest.
          </p>
        </div>
        <div className="pillar-item" style={{ borderLeftColor: "#8e44ad" }}>
          <h3>Inner Circle</h3>
          <p>
            Everything in Member, plus the most questions each month, priority on
            your answers, and direct 1-on-1 coaching: your exact doses set in
            consult, and my verified, current supplier contacts for
            slow-release T3, peptides, hGH, and cyproheptadine. See{" "}
            <Link href="/coaching">how the 1-on-1 works</Link>.
          </p>
        </div>
      </div>

      <h2>Why start with Starter?</h2>
      <p>
        Because the hard part of recovery is starting. The{" "}
        <Link href="/success-rate-data">results page</Link> lays out what tends
        to improve and, more usefully, which profile responds best. Starter is
        the easiest way to find out whether that profile is you, with me
        looking at your actual case. If it is not useful, cancel before your
        second month and move on.
      </p>

      <div className="guidance-box">
        <h3>Ready when you are</h3>
        <p>
          Build your plan today, and ask me your first question this week.
        </p>
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn">
          Get started →
        </a>
      </div>
    </>
  );
}
