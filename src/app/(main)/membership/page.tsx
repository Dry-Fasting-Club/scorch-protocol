import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERS_PORTAL_URL, MEMBERS_SIGNUP_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Membership: Run the Protocol With Yannick for $1 | The Scorch Protocol",
  description:
    "Join the Scorch Protocol members portal for $1/mo: build a personalized day-by-day refeed plan, track your temperature and labs, and ask Yannick your questions directly. Cancel anytime.",
  alternates: { canonical: "https://scorchprotocol.com/membership" },
};

export default function MembershipPage() {
  return (
    <>
      <JsonLd data={medicalWebPageLd({ name: "Membership: Run the Protocol With Yannick for $1", description: "Join the Scorch Protocol members portal for $1/mo: build a personalized day-by-day refeed plan, track your temperature and labs, and ask Yannick your questions directly. Cancel anytime.", path: "/membership", breadcrumbName: "Membership" })} />
      <h1>Run the protocol with Yannick, starting at $1</h1>
      <p className="membership-lede">
        The site tells you how the protocol works. The members portal turns it
        into a plan built around <em>you</em>: a day-by-day refeed schedule sized
        to your own fast, your data in one place, and your questions answered by
        Yannick directly. It starts at $1 a month.
      </p>

      <div className="membership-cta-row">
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn membership-primary">
          Start for $1 today →
        </a>
        <a href={MEMBERS_PORTAL_URL} className="membership-secondary">
          or look around the portal first
        </a>
      </div>
      <p className="membership-risk">
        $1 for your first month. Less than a single supplement sample. Cancel
        anytime, no questions asked.
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
          <span className="question-label">Your questions, answered by Yannick</span>
          Send your situation and get a real answer. Every reply is drafted with
          your labs, medications, and check-ins in context, then personally
          reviewed by Yannick before it reaches you. You also get help sourcing
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

      <h2>Three tiers, one $1 front door</h2>
      <p>
        Start at $1 and stay there as long as you like. Upgrade only if you want
        more. Current pricing for the higher tiers is shown at checkout in the
        portal.
      </p>

      <div className="core-pillars">
        <div className="pillar-item" style={{ borderLeftColor: "#e85d04" }}>
          <h3>Starter: $1/mo</h3>
          <p>
            Ask one question a month, build your food-and-calorie refeed plan,
            track your temperature and labs, and log weekly check-ins. The whole
            protocol made personal, for about a dollar a month.
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
            your answers, and a direct line to 1-on-1 coaching with the exact
            doses set in consult.
          </p>
        </div>
      </div>

      <h2>Why so cheap?</h2>
      <p>
        Because the hard part of recovery is starting, and $1 removes the excuse.
        The people whose outcomes are tracked on the{" "}
        <Link href="/success-rate-data">results page</Link> worked one-on-one
        with Yannick. This is the most affordable way into that same guidance. If
        it is not useful, cancel before your second month and you are out a
        dollar.
      </p>

      <div className="guidance-box">
        <h3>Ready when you are</h3>
        <p>
          Start for $1, build your plan today, and ask Yannick your first
          question this week.
        </p>
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn">
          Start for $1 →
        </a>
      </div>
    </>
  );
}
