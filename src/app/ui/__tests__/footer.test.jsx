import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "../footer";

describe("Footer", () => {
  it("renders a footer element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("displays copyright text with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(
        `© ${currentYear} Cristin O'Connor. All rights reserved.`
      )
    ).toBeInTheDocument();
  });
});
