import React from "react";
import { render, screen } from "@testing-library/react";
import Changelog from "./Changelog";
import itTranslation from "../../locales/it/translation.json";

const { releases } = itTranslation.changelog;

describe("Changelog", () => {
  it("renders one entry per release", () => {
    render(<Changelog />);
    releases.forEach((release) => {
      expect(screen.getByText(release.role)).toBeInTheDocument();
    });
  });

  it("marks exactly one release as current, with dark text on the amber badge for contrast", () => {
    render(<Changelog />);
    const badge = screen.getByText(/current/i);
    expect(badge).toHaveClass("bg-amber", "text-ink");
    expect(badge).not.toHaveClass("text-paperwhite");
  });
});
