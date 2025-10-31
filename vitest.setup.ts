import "@testing-library/jest-dom";
import { vi } from "vitest";

// jsdom には URL.createObjectURL がないためポリフィル
if (typeof URL !== "undefined") {
  if (!(URL as any).createObjectURL) {
    (URL as any).createObjectURL = vi.fn(() => "blob:mock-url");
  }
  if (!(URL as any).revokeObjectURL) {
    (URL as any).revokeObjectURL = vi.fn();
  }
}
