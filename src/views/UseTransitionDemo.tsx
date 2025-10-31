import React, { useEffect, useMemo, useState, useTransition } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseTransitionDemo({ runSignal, resetSignal }: DemoProps) {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => setInput((prev) => prev + "a"), [runSignal]);
  useEffect(() => {
    setInput("");
    setList([]);
  }, [resetSignal]);
  const items = useMemo(
    () => Array.from({ length: 1000 }, (_, i) => `${input}-${i}`),
    [input]
  );
  const onGenerate = () => {
    startTransition(() => setList(items));
  };
  return (
    <div>
      <div className="row" style={{ gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type..."
        />
        <button className="btn" onClick={onGenerate}>
          Generate 1000
        </button>
        {isPending && <span className="muted">pending...</span>}
      </div>
      <div className="muted">rendered: {list.length}</div>
    </div>
  );
}
