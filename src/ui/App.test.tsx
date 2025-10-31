import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { App } from "./App";

describe("App", () => {
  it("renders title and some hook cards", () => {
    render(<App />);
    expect(screen.getByText("React Hooks Sample App")).toBeInTheDocument();
    expect(screen.getByText("useState")).toBeInTheDocument();
    expect(screen.getByText("useEffect")).toBeInTheDocument();
  });
});
