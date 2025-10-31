import React, { useId } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseIdDemo(_: DemoProps) {
  const id = useId();
  return (
    <div className="row" style={{ gap: 8 }}>
      <label htmlFor={id}>名前</label>
      <input id={id} placeholder="太郎" />
    </div>
  );
}
