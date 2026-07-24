import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

describe("Projects", () => {
  it("links the featured project to its real repository, opened safely in a new tab", () => {
    render(<Projects />);
    const repoLink = screen.getByRole("link", { name: /vedi il repo/i });
    expect(repoLink).toHaveAttribute("href", "https://github.com/andreaDondoni91/cv-online");
    expect(repoLink).toHaveAttribute("target", "_blank");
    expect(repoLink.getAttribute("rel")).toEqual(expect.stringContaining("noopener"));
  });

  it("does not render a dead '#' link", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => expect(link.getAttribute("href")).not.toBe("#"));
  });
});
