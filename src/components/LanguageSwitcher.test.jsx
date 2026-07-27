import React from "react";
import { render, screen } from "@testing-library/react";
import LanguageSwitcher from "./LanguageSwitcher";

describe("LanguageSwitcher", () => {
  it("renders a button for each supported language with accessible names", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("button", { name: "Italiano" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "English" })).toBeInTheDocument();
  });

  it("marks the current language as active", () => {
    render(<LanguageSwitcher />);
    expect(screen.getByRole("button", { name: "Italiano" })).toHaveAttribute("aria-current", "true");
    expect(screen.getByRole("button", { name: "English" })).not.toHaveAttribute("aria-current");
  });
});
