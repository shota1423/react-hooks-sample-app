import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseLayoutEffectDemo({ runSignal, resetSignal }: DemoProps) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSize({ w: Math.round(rect.width), h: Math.round(rect.height) });
  }, [runSignal]);
  useEffect(() => setSize({ w: 0, h: 0 }), [resetSignal]);
  return (
    <div>
      <div
        ref={boxRef}
        style={{
          height: 40,
          border: "1px dashed #2b3440",
          borderRadius: 8,
          padding: 8,
        }}
      >
        Measure me
      </div>
      <div className="muted">
        size: {size.w} x {size.h}
      </div>
    </div>
  );
}
