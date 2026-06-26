import { ImageResponse } from "next/og";

export const alt =
  "The Scorch Protocol — reverse Long Covid and ME/CFS with dry fasting, T3, and hGH";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded landscape social card. Replaces the old portrait image that cropped
// badly in every link preview. Rendered at request/build time via next/og.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0d12",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 18,
              height: 56,
              background: "#e85d04",
              borderRadius: 4,
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#f1f5f9",
              fontSize: 40,
              fontWeight: 700,
              display: "flex",
            }}
          >
            The Scorch Protocol
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              color: "#f1f5f9",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            Reverse Long Covid and ME/CFS
          </div>
          <div style={{ color: "#94a3b8", fontSize: 34, display: "flex" }}>
            Dry fasting · T3 therapy · hGH
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              background: "#e85d04",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 10,
              display: "flex",
            }}
          >
            97% recovered
          </div>
          <div style={{ color: "#94a3b8", fontSize: 26, display: "flex" }}>
            of 32 full-protocol completers · 141 tracked
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
