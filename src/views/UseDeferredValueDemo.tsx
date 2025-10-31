import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseDeferredValueDemo({ runSignal, resetSignal }: DemoProps) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  useEffect(() => setQuery((q) => q + "a"), [runSignal]);
  useEffect(() => setQuery(""), [resetSignal]);
  const results = useMemo(
    () => Array.from({ length: 500 }, (_, i) => `${deferred}-${i}`),
    [deferred]
  );
  return (
    <div>
      <div className="row" style={{ gap: 8 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="type..."
        />
        <div className="muted">deferred: {deferred}</div>
      </div>
      <div className="muted">results: {results.length}</div>
    </div>
  );
}
