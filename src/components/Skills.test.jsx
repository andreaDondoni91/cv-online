import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  it("renders the dependency list as a package.json-style block", () => {
    render(<Skills />);
    expect(screen.getByText('"react"')).toBeInTheDocument();
    expect(screen.getByText('"gatsby"')).toBeInTheDocument();
  });
});
