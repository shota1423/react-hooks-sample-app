import React, { useDebugValue, useEffect, useState } from "react";
import type { DemoProps } from "../ui/TestCard";

function useOnlineStatus() {
  const [online, setOnline] = useState<boolean>(navigator.onLine);
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  useDebugValue(online ? "Online" : "Offline");
  return online;
}

export function UseDebugValueDemo(_: DemoProps) {
  const online = useOnlineStatus();
  return <div>Status: {online ? "Online" : "Offline"}</div>;
}
