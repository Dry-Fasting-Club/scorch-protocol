import Link from "next/link";

/**
 * Tasteful in-page pointer from a protocol phase page to the Starter Kit
 * shopping list (which in turn funnels toward the personalized members version).
 */
export default function StarterKitCallout() {
  return (
    <p
      style={{
        margin: "0 0 1.5rem",
        padding: "10px 14px",
        borderLeft: "3px solid var(--accent-color, #e85d04)",
        background: "rgba(232,93,4,0.06)",
        borderRadius: 4,
        fontSize: "0.95rem",
      }}
    >
      Not sure what to actually buy? See{" "}
      <Link href="/starter-kit">The Starter Kit</Link>, the full shopping list in
      protocol order.
    </p>
  );
}
