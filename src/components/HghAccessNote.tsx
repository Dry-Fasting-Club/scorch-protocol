import { MEMBERS_PORTAL_URL } from "@/lib/constants";

/**
 * Small asterisk note shown wherever hGH is taught: if hGH is hard to source,
 * growth-hormone secretagogues (CJC-1295 + Ipamorelin) can substitute on a
 * slightly modified protocol. Points to the portal to ask Yannick for the plan.
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
      Real hGH is the strongest rebuilding signal, but it is not the only way in.
      Easier-to-source growth hormone secretagogues like{" "}
      <strong>CJC-1295 + Ipamorelin</strong> can be used in its place on a slightly
      modified protocol.{" "}
      <a href={MEMBERS_PORTAL_URL} target="_blank" rel="noopener noreferrer">
        Ask Yannick in the portal
      </a>{" "}
      for the adjusted plan.
    </p>
  );
}
