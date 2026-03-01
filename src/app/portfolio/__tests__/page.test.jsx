import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Page from "../page";

describe("Portfolio Page", () => {
  it("renders the page heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 2 })
    ).toHaveTextContent("Portfolio");
  });
});
