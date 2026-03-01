import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Tag from "../tag";

describe("Tag", () => {
  it("renders the tag title", () => {
    render(<Tag title="React" slug="react" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<Tag title="CSS" slug="css" />);
    const tag = screen.getByText("CSS");
    expect(tag.tagName).toBe("SPAN");
  });

  it("renders different tags with different titles", () => {
    const { rerender } = render(<Tag title="JavaScript" slug="javascript" />);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();

    rerender(<Tag title="TypeScript" slug="typescript" />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
