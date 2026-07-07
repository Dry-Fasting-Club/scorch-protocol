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
          <strong>Restart your metabolism with T3.</strong> Slow-release T3 is the
          quick win. It switches your cellular energy back on so your body finally has
          the power to heal.{" "}
          <a href="https://chronic-illness.st" target="_blank" rel="noopener noreferrer">
            where to get it
          </a>
        </li>
        <li>
          <strong>Cover your known issues.</strong> Keep the right herbs or medication
          going for what is already wrong (viral load, gut, symptoms) so nothing holds
          you back while you rebuild.
        </li>
        <li>
          <strong>Rebuild with calories and hGH.</strong> Feed the system and add hGH
          to turn everything the fast freed up into new, healthy tissue. This is where
          the recovery locks in.
        </li>
      </ol>
      <p className="protocol-tldr-close">
        Clear, restart, support, rebuild. Everything else on this site is just the
        detail behind these four steps. You do not need to master the science to
        begin. You just need to start.
      </p>
      <p className="protocol-tldr-note">
        These are real therapies. Do them with proper guidance.
      </p>
    </aside>
  );
}
