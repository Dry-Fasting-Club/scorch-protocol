import Link from "next/link";
import { MEMBERSHIP_PATH } from "@/lib/constants";

/**
 * Compact cross-promo callout. Pitches the customized refeed plan and links to
 * the on-site /membership page (carrying a ?ref source for attribution).
 * `source` is the page slug it sits on.
 */
export default function RefeedPlanPromo({ source }: { source: string }) {
  return (
    <div className="refeed-promo">
      <h3>Get your own customized refeed plan</h3>
      <p>
        Members build a personalized, day-by-day refeed plan: food choices and a
        calorie ramp sized to their own fast, plus when to layer in T3 and the
        rest of the protocol. It starts at $1.
      </p>
      <Link href={`${MEMBERSHIP_PATH}?ref=${source}`} className="refeed-promo-btn">
        Build your refeed plan →
      </Link>
    </div>
  );
}
