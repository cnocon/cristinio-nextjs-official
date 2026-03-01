import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Page from "../page";
import data from "../../../lib/data/resume";

describe("Resume Page", () => {
  it("renders the Résumé heading", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { level: 2 })
    ).toHaveTextContent("Résumé");
  });

  it("renders the Experience section", () => {
    render(<Page />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
  });

  it("renders the Technical Skills section", () => {
    render(<Page />);
    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
  });

  it("renders the Soft Skills section", () => {
    render(<Page />);
    expect(screen.getByText("Soft Skills")).toBeInTheDocument();
  });

  it("renders the Education section", () => {
    render(<Page />);
    expect(screen.getByText("Education")).toBeInTheDocument();
  });

  it("renders all job titles from resume data", () => {
    render(<Page />);
    const uniqueTitles = [...new Set(data.resume.experience.map((j) => j.title))];
    uniqueTitles.forEach((title) => {
      const elements = screen.getAllByText(title);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it("renders all company names", () => {
    render(<Page />);
    data.resume.experience.forEach((job) => {
      expect(
        screen.getByText(`${job.company} - ${job.location}`)
      ).toBeInTheDocument();
    });
  });

  it("renders all technical skills", () => {
    render(<Page />);
    data.resume.skills.technical.forEach((skill) => {
      expect(screen.getByText(skill.label)).toBeInTheDocument();
    });
  });

  it("renders all soft skills", () => {
    render(<Page />);
    data.resume.skills.soft.forEach((skill) => {
      expect(screen.getByText(skill.label)).toBeInTheDocument();
    });
  });

  it("renders education details", () => {
    render(<Page />);
    expect(
      screen.getByText("University of Notre Dame, Notre Dame, IN")
    ).toBeInTheDocument();
    expect(screen.getByText("B.A. Sociology")).toBeInTheDocument();
  });

  it("formats 'Present' correctly in date ranges", () => {
    render(<Page />);
    const presentElements = screen.getAllByText("Present");
    expect(presentElements.length).toBeGreaterThan(0);
  });
});
