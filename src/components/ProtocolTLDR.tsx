/**
 * The "fast version" of the whole protocol in four steps. A simplified, motivational
 * TLDR for people who want the gist before the deep dive. Placed high on the home page.
 */
export default function ProtocolTLDR() {
  return (
    <aside className="protocol-tldr">
      <h2>The fast version</h2>
      <p className="protocol-tldr-lede">
        The Scorch Protocol dives deep because the biology is deep. But what you
        actually <em>do</em> is simple. It comes down to four moves:
      </p>
      <ol className="protocol-tldr-steps">
        <li>
          <strong>Clear and resensitize with fasting.</strong> Dry fasting resets the
          system: it clears damaged cells and reactivated viruses and makes your body
          respond to its own signals again. This is the foundation everything else
          builds on.
        </li>
        <li>
          <strong>Cover and support as you refeed.</strong> Keep your antiviral
          coverage running straight through the refeed, and during the first week of
          eating add targeted mitochondrial support (methylene blue, sometimes ethyl
          pyruvate), dialed in case by case. This protects everything the fast cleared
          while your body comes back online.
        </li>
        <li>
          <strong>Restart your metabolism with T3.</strong> Once you are eating again,
          after that first week of refeeding, slow-release T3 switches your cellular
          energy back on so your body finally has the power to heal.{" "}
          <a href="https://chronic-illness.st" target="_blank" rel="noopener noreferrer">
            where to get it
          </a>
        </li>
        <li>
          <strong>Rebuild with calories and hGH.</strong> Feed the system and add hGH
          to turn everything the fast freed up into new, healthy tissue. This is where
          the recovery locks in.
        </li>
      </ol>
      <p className="protocol-tldr-close">
        Clear, support, restart, rebuild. Everything else on this site is just the
        detail behind these four steps. You do not need to master the science to
        begin. You just need to start.
      </p>
      <p className="protocol-tldr-note">
        These are real therapies. Do them with proper guidance.
      </p>
    </aside>
  );
}
