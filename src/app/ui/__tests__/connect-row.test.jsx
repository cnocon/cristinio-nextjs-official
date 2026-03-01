import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ConnectRow from "../connect-row";

describe("ConnectRow", () => {
  it("renders all social links", () => {
    render(<ConnectRow />);
    expect(screen.getByText("CodePen")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Stack Overflow")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders correct hrefs for social links", () => {
    render(<ConnectRow />);
    expect(screen.getByText("CodePen").closest("a")).toHaveAttribute(
      "href",
      "https://codepen.io/cnocon"
    );
    expect(screen.getByText("GitHub").closest("a")).toHaveAttribute(
      "href",
      "https://github.com/cnocon"
    );
    expect(screen.getByText("LinkedIn").closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/cristinoconnor"
    );
    expect(screen.getByText("Stack Overflow").closest("a")).toHaveAttribute(
      "href",
      "https://stackoverflow.com/users/2187039/cnocon"
    );
    expect(screen.getByText("Email").closest("a")).toHaveAttribute(
      "href",
      "mailto:her@cristin.io"
    );
  });

  it("opens all links in new tabs", () => {
    render(<ConnectRow />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer");
    });
  });
});
