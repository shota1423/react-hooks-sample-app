import React, { useContext } from "react";
import type { DemoProps } from "../ui/TestCard";
import { ThemeContext } from "../theme/ThemeContext";

export function UseContextDemo(_: DemoProps) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <div className="muted">Theme name: {theme.name}</div>
      <div
        style={{
          background: theme.background,
          color: theme.foreground,
          padding: 8,
          borderRadius: 8,
        }}
      >
        Sample box
      </div>
    </div>
  );
}
