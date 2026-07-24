import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section", () => {
  it("renders the eyebrow, title and children", () => {
    render(
      <Section id="demo" eyebrow="# demo.md" title="Demo title">
        <p>child content</p>
      </Section>
    );
    expect(screen.getByText("# demo.md")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Demo title" })).toBeInTheDocument();
    expect(screen.getByText("child content")).toBeInTheDocument();
  });

  it("applies the alternate background classes only when altBg is set", () => {
    const { container: withoutAltBg } = render(<Section id="a" eyebrow="e" title="t" />);
    expect(withoutAltBg.querySelector("section")).not.toHaveClass("bg-paperwhite");

    const { container: withAltBg } = render(<Section id="b" eyebrow="e" title="t" altBg />);
    expect(withAltBg.querySelector("section")).toHaveClass("bg-paperwhite", "border-y");
  });
});
