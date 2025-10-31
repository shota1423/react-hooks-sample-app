import React, { useEffect, useRef, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseRefDemo({ runSignal, resetSignal }: DemoProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const prevValue = useRef<string>("");
  const [value, setValue] = useState("");
  useEffect(() => {
    inputRef.current?.focus();
  }, [runSignal]);
  useEffect(() => {
    setValue("");
    prevValue.current = "";
  }, [resetSignal]);
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return (
    <div className="row" style={{ gap: 12 }}>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type..."
      />
      <div className="muted">prev: "{prevValue.current}"</div>
    </div>
  );
}
