import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "../header";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/image
vi.mock("next/image", () => ({
  default: ({ src, alt, width, height, ...props }) => (
    <img src={src} alt={alt} width={width} height={height} {...props} />
  ),
}));

// Mock NavLinks since it's a client component with its own tests
vi.mock("../nav-links", () => ({
  default: () => <nav data-testid="nav-links">NavLinks</nav>,
}));

describe("Header", () => {
  it("renders the site title", () => {
    render(<Header />);
    expect(screen.getByText("Cristin O'Connor")).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<Header />);
    expect(
      screen.getByText("Frontend Software Engineer")
    ).toBeInTheDocument();
  });

  it("renders the avatar image", () => {
    render(<Header />);
    const img = screen.getByAltText("Illustration of Cristin O'Connor");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/images/illustration.svg");
  });

  it("renders a link to the home page", () => {
    render(<Header />);
    const link = screen.getByText("Cristin O'Connor").closest("a");
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders the NavLinks component", () => {
    render(<Header />);
    expect(screen.getByTestId("nav-links")).toBeInTheDocument();
  });
});
