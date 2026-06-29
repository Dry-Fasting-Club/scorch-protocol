import type { Metadata } from "next";
import Link from "next/link";
import { MEMBERS_SIGNUP_URL, MEMBERSHIP_PATH } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import { medicalWebPageLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "1-on-1 Coaching: Verified Sourcing for T3, Peptides & hGH",
  description:
    "The protocol is free to read. The hard part is sourcing slow-release T3, peptides, hGH, and cyproheptadine without getting faked or scammed. 1-on-1 coaching gives you Yannick's current, verified supplier contacts, the exact products, and your doses set in consult.",
  alternates: { canonical: "https://scorchprotocol.com/coaching" },
};

export default function CoachingPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageLd({
          name: "1-on-1 Coaching",
          description:
            "1-on-1 coaching for The Scorch Protocol: verified supplier contacts for slow-release T3, peptides, hGH, and cyproheptadine, the exact products to order, and your doses set in consult.",
          path: "/coaching",
          breadcrumbName: "Coaching",
        })}
      />

      <h1>The protocol is free. Getting the medications is the hard part.</h1>
      <p className="membership-lede">
        You can read this entire site for nothing. The wall almost everyone hits is the
        next one: no doctor will prescribe you slow-release T3, the peptide and hGH markets
        are a minefield of fakes, and one wrong order is wasted money at best and dangerous
        at worst. That is exactly what the 1-on-1 is for.
      </p>

      <div className="membership-cta-row">
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn membership-primary">
          Start for $1 today →
        </a>
        <Link href={MEMBERSHIP_PATH} className="membership-secondary">
          or compare all tiers
        </Link>
      </div>
      <p className="membership-risk">
        Step in for $1, then move up to Inner Circle for the full 1-on-1 and the verified
        sourcing list. Cancel anytime, no questions asked.
      </p>

      <h2>What the 1-on-1 actually hands you</h2>
      <div className="guiding-questions box-info">
        <div className="question-item">
          <span className="question-label">Verified, current supplier contacts</span>
          The exact, personally vetted sources Yannick uses right now for slow-release T3,
          peptides, hGH, and cyproheptadine. Not a stale list scraped off a forum, a living
          one that is kept current, because the good sources disappear the moment they get
          posted in public.
        </div>
        <div className="question-item">
          <span className="question-label">Exactly what to order, and what to avoid</span>
          Which product, which form, which dose, and the fakes and scams to stay away from.
          The difference between real slow-release T3 and the wrong thing is the difference
          between recovering and spinning your wheels for months.
        </div>
        <div className="question-item">
          <span className="question-label">Your doses, set with you in consult</span>
          Your labs, your temperature, your history, your timeline. The exact doses and the
          order to bring things in, set one-on-one, then adjusted as your numbers move.
        </div>
        <div className="question-item">
          <span className="question-label">Someone who already walked it</span>
          Yannick spent years and a lot of wasted money working out what actually helps and
          what actually ships. You skip the tuition and start from what works.
        </div>
      </div>

      <h2>Why it is not just posted on the site</h2>
      <p>
        Because the moment a good source goes public, it gets buried, flagged, or shut
        down, and it stops working for everyone. Keeping the list private is the only way
        to keep it real and current. The public{" "}
        <Link href="/list-of-pharmacies">list of pharmacies</Link> will get you standard
        liothyronine and the basics. The verified slow-release T3, peptide, and hGH contacts
        that actually deliver the real thing live inside the 1-on-1.
      </p>

      <h2>Is it worth it?</h2>
      <p>
        One bad order of fake peptides or the wrong T3 costs more than the coaching, in money
        and in months. The whole point of the 1-on-1 is that you do not pay that tuition. You
        get the working sources, the right products, your doses, and a person in your corner
        who has walked this exact path many times. The people whose outcomes are tracked on
        the <Link href="/success-rate-data">results page</Link> worked one-on-one with
        Yannick. This is the way into that same guidance.
      </p>

      <div
        className="guidance-box"
        style={{ borderColor: "rgba(232, 93, 4, 0.6)", background: "rgba(232, 93, 4, 0.06)" }}
      >
        <h3>Ready to stop guessing where to get this?</h3>
        <p>
          Start for $1, then step up to Inner Circle for the full 1-on-1 and the verified
          sourcing list for slow-release T3, peptides, hGH, and cyproheptadine.
        </p>
        <a href={MEMBERS_SIGNUP_URL} className="guidance-btn">
          Start for $1 →
        </a>
      </div>
    </>
  );
}
