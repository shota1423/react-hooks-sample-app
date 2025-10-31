import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

const Child = React.memo(function Child({ onAdd }: { onAdd: () => void }) {
  return (
    <button className="btn" onClick={onAdd}>
      Child add
    </button>
  );
});

export function UseCallbackDemo({ runSignal, resetSignal }: DemoProps) {
  const [count, setCount] = useState(0);
  useEffect(() => setCount((c) => c + 1), [runSignal]);
  useEffect(() => setCount(0), [resetSignal]);
  const onAdd = useCallback(() => setCount((c) => c + 1), []);
  const doubled = useMemo(() => count * 2, [count]);
  return (
    <div className="row" style={{ gap: 8 }}>
      <button className="btn" onClick={onAdd}>
        +1
      </button>
      <Child onAdd={onAdd} />
      <div>doubled: {doubled}</div>
    </div>
  );
}
