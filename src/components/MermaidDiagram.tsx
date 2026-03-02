"use client";

import { useEffect, useRef } from "react";

interface Props {
  chart: string;
}

export default function MermaidDiagram({ chart }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.removeAttribute("data-processed");
    el.innerHTML = chart;

    import("mermaid").then((m) => {
      m.default.initialize({ startOnLoad: false, theme: "neutral" });
      m.default.run({ nodes: [el] });
    });
  }, [chart]);

  return <div className="mermaid" ref={ref} />;
}
