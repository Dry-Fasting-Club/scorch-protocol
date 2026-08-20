import { MEMBERS_PORTAL_URL } from "@/lib/constants";

/**
 * Small asterisk note shown wherever hGH is taught: hGH is the preferred base,
 * but if it is hard to source, CJC-1295 + Ipamorelin can be tried to help wake
 * the pituitary (an awakening aid, not a full substitute). Points to the portal.
 */
export default function HghAccessNote() {
  return (
    <p
      style={{
        fontSize: "0.92rem",
        color: "var(--text-secondary)",
        borderLeft: "3px solid var(--scorch)",
        background: "rgba(232,93,4,0.06)",
        padding: "0.7rem 1rem",
        borderRadius: "4px",
        margin: "1.5rem 0",
      }}
    >
      <strong style={{ color: "var(--accent-color)" }}>* Can&rsquo;t get hGH?</strong>{" "}
      Real hGH is the preferred base: it is the actual hormone, so it needs
      nothing from your body, puts the least strain on the system, and gives the
      most benefit. If it is truly out of reach, secretagogues like{" "}
      <strong>CJC-1295 + Ipamorelin</strong> can be tried to help wake up your own
      pituitary, as an awakening aid rather than a full replacement.{" "}
      <a href={MEMBERS_PORTAL_URL} target="_blank" rel="noopener noreferrer">
        Ask Yannick in the portal
      </a>{" "}
      for the adjusted plan.
    </p>
  );
}
