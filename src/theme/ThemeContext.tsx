import React, { createContext, useMemo, useState } from "react";

export type Theme = {
  background: string;
  foreground: string;
  name: "dark" | "light";
};

export const ThemeContext = createContext<Theme>({
  background: "#0b0c10",
  foreground: "#c5c6c7",
  name: "dark",
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const theme = useMemo<Theme>(
    () =>
      mode === "dark"
        ? { background: "#0b0c10", foreground: "#c5c6c7", name: "dark" }
        : { background: "#ffffff", foreground: "#111827", name: "light" },
    [mode]
  );
  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          background: theme.background,
          color: theme.foreground,
          minHeight: "100vh",
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "space-between", marginBottom: 16 }}
          >
            <h1 style={{ margin: 0 }}>React Hooks Sample App</h1>
            <div className="row">
              <span className="muted">Theme:</span>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as "dark" | "light")}
              >
                <option value="dark">dark</option>
                <option value="light">light</option>
              </select>
            </div>
          </div>
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
