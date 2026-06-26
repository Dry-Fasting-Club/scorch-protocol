import Link from "next/link";
import { MEMBERSHIP_PATH } from "@/lib/constants";

/**
 * End-of-page CTA: "ask Yannick a question" path into the $1 membership.
 * Distinct job from RefeedPlanPromo (which pitches the refeed plan builder);
 * both drive to the on-site /membership hub, which routes to the portal.
 */
export default function GuidanceBox() {
  return (
    <div className="guidance-box">
      <h3>Have a question about your own case?</h3>
      <p>
        <strong>Ask Yannick directly.</strong> Members send their labs, symptoms,
        and questions and get a personal, reviewed answer, plus help sourcing
        medication and the full synthesized protocol behind every reply. It
        starts at $1/mo.
      </p>
      <Link href={`${MEMBERSHIP_PATH}?ref=ask-yannick`} className="guidance-btn">
        Ask Yannick for $1 →
      </Link>
    </div>
  );
}
