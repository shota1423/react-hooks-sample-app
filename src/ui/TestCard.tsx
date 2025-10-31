import React, { useState } from "react";

export type DemoProps = { runSignal: number; resetSignal: number };

export function TestCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: (signals: DemoProps) => React.ReactNode;
}) {
  const [runSignal, setRunSignal] = useState(0);
  const [resetSignal, setResetSignal] = useState(0);
  return (
    <div className="card">
      <h3>{title}</h3>
      {subtitle && (
        <div className="muted" style={{ marginBottom: 8 }}>
          {subtitle}
        </div>
      )}
      <div className="row" style={{ marginBottom: 12 }}>
        <button
          className="btn primary"
          onClick={() => setRunSignal((s) => s + 1)}
        >
          Run
        </button>
        <button className="btn" onClick={() => setResetSignal((s) => s + 1)}>
          Reset
        </button>
        <span className="muted">
          run #{runSignal} / reset #{resetSignal}
        </span>
      </div>
      {children({ runSignal, resetSignal })}
    </div>
  );
}
