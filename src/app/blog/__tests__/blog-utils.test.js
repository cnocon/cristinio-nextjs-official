import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock fs/promises
vi.mock("fs/promises", () => ({
  default: {
    readFile: vi.fn(),
    readdir: vi.fn(),
  },
}));

// Mock gray-matter
vi.mock("gray-matter", () => ({
  default: vi.fn(),
}));

import fs from "fs/promises";
import matter from "gray-matter";
import { getPostBySlug } from "../[slug]/page";

describe("getPostBySlug", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("reads the correct file and returns frontmatter and content", async () => {
    const mockFileContent = `---
title: "Test Post"
date: "2025-01-01"
tags: [{ title: "React", slug: "react" }]
---
# Hello World`;

    fs.readFile.mockResolvedValue(mockFileContent);
    matter.mockReturnValue({
      data: {
        title: "Test Post",
        date: "2025-01-01",
        tags: [{ title: "React", slug: "react" }],
      },
      content: "# Hello World",
    });

    const result = await getPostBySlug("test-post");

    expect(fs.readFile).toHaveBeenCalledTimes(1);
    expect(matter).toHaveBeenCalledWith(mockFileContent);
    expect(result.frontmatter.title).toBe("Test Post");
    expect(result.frontmatter.date).toBe("2025-01-01");
    expect(result.content).toBe("# Hello World");
  });

  it("throws when the file does not exist", async () => {
    fs.readFile.mockRejectedValue(new Error("ENOENT: no such file"));
    await expect(getPostBySlug("nonexistent")).rejects.toThrow();
  });
});
