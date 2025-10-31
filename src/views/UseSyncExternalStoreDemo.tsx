import React, { useEffect, useSyncExternalStore } from "react";
import type { DemoProps } from "../ui/TestCard";
import { tickStore } from "../store/tickStore";

export function UseSyncExternalStoreDemo({
  runSignal,
  resetSignal,
}: DemoProps) {
  const value = useSyncExternalStore(
    tickStore.subscribe,
    tickStore.getSnapshot,
    tickStore.getServerSnapshot
  );
  useEffect(() => {
    tickStore.start();
  }, [runSignal]);
  useEffect(() => {
    tickStore.stop();
  }, [resetSignal]);
  return <div>tick: {value}</div>;
}
