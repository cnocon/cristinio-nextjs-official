import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PostCard from "../postCard";

// Mock next/link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const mockPost = {
  slug: "my-test-post",
  title: "Test Post Title",
  date: "2025-06-12",
  description: "A test post description.",
  tags: [
    { title: "React", slug: "react" },
    { title: "CSS", slug: "css" },
  ],
};

describe("PostCard", () => {
  it("renders the post title", () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
  });

  it("links to the correct blog post", () => {
    render(<PostCard post={mockPost} />);
    const link = screen.getByText("Test Post Title").closest("a");
    expect(link).toHaveAttribute("href", "/blog/my-test-post");
  });

  it("renders the post description", () => {
    render(<PostCard post={mockPost} />);
    expect(
      screen.getByText("A test post description.")
    ).toBeInTheDocument();
  });

  it("renders all tags", () => {
    render(<PostCard post={mockPost} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  it("renders the formatted publish date", () => {
    render(<PostCard post={mockPost} />);
    const expected = new Date("2025-06-12").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it("renders a time element with the correct datetime attribute", () => {
    render(<PostCard post={mockPost} />);
    const expected = new Date("2025-06-12").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timeEl = screen.getByText(expected);
    expect(timeEl.tagName).toBe("TIME");
    expect(timeEl).toHaveAttribute("dateTime", "2025-06-12");
  });

  it("does not render the date when post has no date", () => {
    const postNoDate = { ...mockPost, date: null };
    render(<PostCard post={postNoDate} />);
    expect(screen.queryByText("Published")).not.toBeInTheDocument();
  });

  it("does not render description when post has no description", () => {
    const postNoDesc = { ...mockPost, description: "" };
    render(<PostCard post={postNoDesc} />);
    expect(
      screen.queryByText("A test post description.")
    ).not.toBeInTheDocument();
  });
});
