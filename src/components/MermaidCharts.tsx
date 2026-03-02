"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr: false must live in a Client Component
const MermaidDiagram = dynamic(
  () => import("@/components/MermaidDiagram"),
  { ssr: false }
);

interface Props {
  charts: string[];
}

export default function MermaidCharts({ charts }: Props) {
  return (
    <>
      {charts.map((chart, i) => (
        <MermaidDiagram key={i} chart={chart} />
      ))}
    </>
  );
}
