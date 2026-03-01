import { describe, it, expect } from "vitest";
import data from "../resume";

describe("Resume Data", () => {
  it("has a resume object", () => {
    expect(data.resume).toBeDefined();
  });

  it("has experience entries", () => {
    expect(data.resume.experience).toBeInstanceOf(Array);
    expect(data.resume.experience.length).toBeGreaterThan(0);
  });

  it("each experience entry has required fields", () => {
    data.resume.experience.forEach((job) => {
      expect(job).toHaveProperty("title");
      expect(job).toHaveProperty("company");
      expect(job).toHaveProperty("location");
      expect(job).toHaveProperty("start");
      expect(job).toHaveProperty("end");
      expect(job).toHaveProperty("description");
      expect(job).toHaveProperty("honors");
      expect(job.description).toBeInstanceOf(Array);
      expect(job.honors).toBeInstanceOf(Array);
    });
  });

  it("has education entries", () => {
    expect(data.resume.education).toBeInstanceOf(Array);
    expect(data.resume.education.length).toBeGreaterThan(0);
  });

  it("each education entry has required fields", () => {
    data.resume.education.forEach((edu) => {
      expect(edu).toHaveProperty("school");
      expect(edu).toHaveProperty("location");
      expect(edu).toHaveProperty("start");
      expect(edu).toHaveProperty("end");
      expect(edu).toHaveProperty("honors");
    });
  });

  it("has technical and soft skills", () => {
    expect(data.resume.skills.technical).toBeInstanceOf(Array);
    expect(data.resume.skills.technical.length).toBeGreaterThan(0);
    expect(data.resume.skills.soft).toBeInstanceOf(Array);
    expect(data.resume.skills.soft.length).toBeGreaterThan(0);
  });

  it("each skill has a label", () => {
    [...data.resume.skills.technical, ...data.resume.skills.soft].forEach(
      (skill) => {
        expect(skill).toHaveProperty("label");
        expect(typeof skill.label).toBe("string");
        expect(skill.label.length).toBeGreaterThan(0);
      }
    );
  });

  it("has courses data", () => {
    expect(data.courses).toBeInstanceOf(Array);
    expect(data.courses.length).toBeGreaterThan(0);
  });

  it("each course has required fields", () => {
    data.courses.forEach((course) => {
      expect(course).toHaveProperty("title");
      expect(course).toHaveProperty("url");
      expect(course).toHaveProperty("platform");
    });
  });
});
