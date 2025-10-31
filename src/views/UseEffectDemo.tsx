import React, { useEffect, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

export function UseEffectDemo({ runSignal, resetSignal }: DemoProps) {
  const [logs, setLogs] = useState<string[]>([]);
  useEffect(() => {
    setLogs((l) => [
      ...l,
      `fetch simulated at ${new Date().toLocaleTimeString()}`,
    ]);
  }, [runSignal]);
  useEffect(() => setLogs([]), [resetSignal]);
  useEffect(() => {
    const onResize = () =>
      setLogs((l) => [...l, `resize ${window.innerWidth}`]);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return <pre>{logs.join("\n")}</pre>;
}
