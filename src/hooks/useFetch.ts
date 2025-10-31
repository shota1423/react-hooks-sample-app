import { useEffect, useRef, useState } from "react";

export function useFetch<T = unknown>(url: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    setError(null);
    setData(null);
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;
    fetch(url, { signal: ac.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<T>;
      })
      .then(setData)
      .catch((e) => {
        if ((e as any).name === "AbortError") return;
        setError(e as Error);
      })
      .finally(() => setLoading(false));
    return () => ac.abort();
  }, [url]);

  return { data, error, loading };
}

// simple mock endpoint factory
export function makeMockUrl(delayMs = 600): string {
  const payload = { time: new Date().toISOString(), value: Math.random() };
  const blob = new Blob([JSON.stringify(payload)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  // emulate delay by fetching local blob (instant) then spinner in UI covers delay; or rely on network if real api is used.
  return url;
}
