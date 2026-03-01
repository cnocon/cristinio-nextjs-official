import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NavLinks from "../nav-links";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/navigation
const mockPathname = vi.fn();
vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

describe("NavLinks", () => {
  it("renders all navigation links", () => {
    mockPathname.mockReturnValue("/");
    render(<NavLinks />);
    expect(screen.getByText("Résumé")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("links to the correct paths", () => {
    mockPathname.mockReturnValue("/");
    render(<NavLinks />);
    expect(screen.getByText("Résumé").closest("a")).toHaveAttribute(
      "href",
      "/resume"
    );
    expect(screen.getByText("Portfolio").closest("a")).toHaveAttribute(
      "href",
      "/portfolio"
    );
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute(
      "href",
      "/blog"
    );
  });

  it("sets aria-current='page' on the resume link when on /resume", () => {
    mockPathname.mockReturnValue("/resume");
    render(<NavLinks />);
    expect(screen.getByText("Résumé").closest("a")).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(
      screen.getByText("Portfolio").closest("a")
    ).not.toHaveAttribute("aria-current");
  });

  it("sets aria-current='page' on the portfolio link when on /portfolio", () => {
    mockPathname.mockReturnValue("/portfolio");
    render(<NavLinks />);
    expect(screen.getByText("Portfolio").closest("a")).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("sets aria-current='page' on the blog link when on /blog", () => {
    mockPathname.mockReturnValue("/blog");
    render(<NavLinks />);
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("sets aria-current='page' on the blog link when on a blog post", () => {
    mockPathname.mockReturnValue("/blog/my-post-slug");
    render(<NavLinks />);
    expect(screen.getByText("Blog").closest("a")).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("does not set aria-current on any link when on home page", () => {
    mockPathname.mockReturnValue("/");
    render(<NavLinks />);
    expect(
      screen.getByText("Résumé").closest("a")
    ).not.toHaveAttribute("aria-current");
    expect(
      screen.getByText("Portfolio").closest("a")
    ).not.toHaveAttribute("aria-current");
    expect(
      screen.getByText("Blog").closest("a")
    ).not.toHaveAttribute("aria-current");
  });
});
