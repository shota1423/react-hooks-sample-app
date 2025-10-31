import React, { useEffect, useInsertionEffect, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseInsertionEffectDemo({ runSignal, resetSignal }: DemoProps) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(true), [runSignal]);
  useEffect(() => setEnabled(false), [resetSignal]);
  useInsertionEffect(() => {
    if (!enabled) return;
    const style = document.createElement("style");
    style.setAttribute("data-demo", "insertion");
    style.textContent = `.insertion-demo { outline: 2px solid var(--accent); }`;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, [enabled]);
  return (
    <div className="row" style={{ gap: 8 }}>
      <button className="btn" onClick={() => setEnabled((e) => !e)}>
        {enabled ? "Disable" : "Enable"} style
      </button>
      <div
        className={enabled ? "insertion-demo" : ""}
        style={{ padding: 8, borderRadius: 8 }}
      >
        Target box
      </div>
    </div>
  );
}
