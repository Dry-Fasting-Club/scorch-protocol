import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { AzMap, sectionAnchor, type AzMapData } from "@/components/az-map/AzMap";
import { MEMBERS_MEMBER_SIGNUP_URL } from "@/lib/constants";
import { medicalWebPageLd } from "@/lib/structured-data";
import teaser from "@/lib/az-map/teaser.generated.json";

// The protocol on one page, top to bottom (2026-11-18). The data file is
// generated in the knowledge repository (protocol/az-map/build.mjs) from the
// A to Z whiteboard; never edit it here. A locked node arrives as a title and
// a length only: this repository is public, so the member detail is not in it.
// The full map lives in the members portal at /portal/map.

const map = teaser as AzMapData;

const DESCRIPTION =
  "The whole Scorch Protocol on one page: every step, decision and stop from \"am I a fit?\" down to regeneration, with the questions people ask at each stage.";

export const metadata: Metadata = {
  title: "The Scorch Protocol, A to Z",
  description: DESCRIPTION,
  alternates: { canonical: "https://scorchprotocol.com/protocol-map" },
};

const LOCK = {
  href: MEMBERS_MEMBER_SIGNUP_URL,
  lead: "Members see the full map",
  action: "Join to view →",
};

export default function ProtocolMapPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageLd({
          name: "The Scorch Protocol, A to Z",
          description: DESCRIPTION,
          path: "/protocol-map",
          breadcrumbName: "The Protocol, A to Z",
          lastReviewed: "2026-11-18",
        })}
      />
      <h1>The Scorch Protocol, A to Z</h1>
      <p>
        This is the whole protocol on one page, from the first question (am I
        a fit?) down to regeneration. The steps run in order from top to
        bottom. Beside each step sit the places where I stop someone or send
        them on a detour, and the questions people ask me most at that point.
      </p>
      <p>
        Every heading on the map is open, and so is everything about who should
        not do this, here and on the{" "}
        <Link href="/contraindications">contraindications page</Link>. The
        first section is open in full, with one answer in each section after
        it. The rest of the detail is for members: hover over a blurred answer,
        or tap it, to join.
      </p>

      <nav aria-label="Sections of the map">
        <ol>
          {map.sections.map((s) => (
            <li key={s.n}>
              <a href={`#${sectionAnchor(s.n)}`}>{s.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <AzMap map={map} lock={LOCK} />

      <div className="guiding-questions box-info">
        <p>
          Marked caveat: this map is my experience across my own cases, not a
          clinical trial. It shows the order of the protocol and the decisions
          inside it. It draws on my work with many people living with chronic
          illness, simplified down to the key methods. Everyone is different
          and may need to deviate slightly. The amounts for T3, hGH and the
          peptides are unique to each person and may take some trial and
          error.
        </p>
      </div>

      <div className="guidance-box">
        <h3>See the full map</h3>
        <p>
          Members get every step and every answer on this map, a personalized
          refeed plan, and their own questions answered by Yannick.
        </p>
        <a href={MEMBERS_MEMBER_SIGNUP_URL} className="guidance-btn">
          Join to view the full map →
        </a>
      </div>
    </>
  );
}
