"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function update() {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="reading-progress"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}
