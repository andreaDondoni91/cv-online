import React from "react";
import { render, screen } from "@testing-library/react";
import Terminal from "./Terminal";

describe("Terminal", () => {
  it("renders a static line's prompt and output as plain text when no href is given", () => {
    render(<Terminal lines={[{ prompt: "whoami", output: "andrea" }]} />);
    expect(screen.getByText("whoami")).toBeInTheDocument();
    expect(screen.getByText("andrea")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders output as a real link when a line carries an href", () => {
    render(
      <Terminal
        lines={[{ prompt: "contact --email", output: "andrea@example.com", href: "mailto:andrea@example.com" }]}
      />
    );
    const link = screen.getByRole("link", { name: "andrea@example.com" });
    expect(link).toHaveAttribute("href", "mailto:andrea@example.com");
  });

  it("types out the typedLine immediately when prefers-reduced-motion is set", () => {
    window.matchMedia = () => ({ matches: true, addEventListener: () => {}, removeEventListener: () => {} });
    render(<Terminal typedLine="hello world" />);
    expect(screen.getByText("hello world")).toBeInTheDocument();
  });

  it("hides the decorative window dots from assistive technology", () => {
    const { container } = render(<Terminal lines={[{ prompt: "x", output: "y" }]} />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });
});
