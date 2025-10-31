import React, { useEffect, useMemo, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

function heavySort(arr: number[]) {
  // simulate heavy calc
  const copy = [...arr];
  for (let i = 0; i < 20000; i++) copy.sort((a, b) => a - b);
  return copy;
}

export function UseMemoDemo({ runSignal, resetSignal }: DemoProps) {
  const [numbers, setNumbers] = useState<number[]>([5, 1, 4, 2, 3]);
  useEffect(
    () => setNumbers((n) => [...n, Math.floor(Math.random() * 100)]),
    [runSignal]
  );
  useEffect(() => setNumbers([5, 1, 4, 2, 3]), [resetSignal]);
  const sorted = useMemo(() => heavySort(numbers), [numbers]);
  return (
    <div>
      <div className="row">
        <button
          className="btn"
          onClick={() =>
            setNumbers((n) => [...n, Math.floor(Math.random() * 100)])
          }
        >
          Push random
        </button>
      </div>
      <div className="muted">input: {JSON.stringify(numbers)}</div>
      <div>sorted: {JSON.stringify(sorted)}</div>
    </div>
  );
}
