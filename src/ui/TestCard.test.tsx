import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { TestCard } from "./TestCard";

describe("TestCard", () => {
  it("increments signals on Run/Reset", () => {
    render(
      <TestCard title="sample">
        {({ runSignal, resetSignal }) => (
          <div>
            sig:{runSignal}/{resetSignal}
          </div>
        )}
      </TestCard>
    );

    expect(screen.getByText("sig:0/0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Run"));
    expect(screen.getByText("sig:1/0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("sig:1/1")).toBeInTheDocument();
  });
});
