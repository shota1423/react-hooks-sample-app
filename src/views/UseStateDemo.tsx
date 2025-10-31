import React, { useEffect, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseStateDemo({ runSignal, resetSignal }: DemoProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((c) => c + 1);
  }, [runSignal]);
  useEffect(() => {
    setCount(0);
  }, [resetSignal]);
  return (
    <div className="row">
      <button className="btn" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
      <span>count: {count}</span>
    </div>
  );
}
