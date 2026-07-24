import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the current year in the copyright line", () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()}`))).toBeInTheDocument();
  });
});
