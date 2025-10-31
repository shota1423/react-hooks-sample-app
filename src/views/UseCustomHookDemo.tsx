import React, { useEffect, useState } from "react";
import type { DemoProps } from "../ui/TestCard";
import { makeMockUrl, useFetch } from "../hooks/useFetch";

export function UseCustomHookDemo({ runSignal, resetSignal }: DemoProps) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => setUrl(makeMockUrl()), [runSignal]);
  useEffect(() => setUrl(null), [resetSignal]);
  const { data, error, loading } = useFetch<any>(url);
  return (
    <div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={() => setUrl(makeMockUrl())}>
          Fetch
        </button>
        <button className="btn" onClick={() => setUrl(null)}>
          Clear
        </button>
        {loading && <span className="muted">loading...</span>}
        {error && <span style={{ color: "salmon" }}>{String(error)}</span>}
      </div>
      <pre>{data ? JSON.stringify(data, null, 2) : "no data"}</pre>
    </div>
  );
}
