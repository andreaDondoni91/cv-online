import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  it("exposes a real mailto link for the email", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /andrea\.dondoni91@gmail\.com/i })).toHaveAttribute(
      "href",
      "mailto:andrea.dondoni91@gmail.com"
    );
  });

  it("exposes a real link for the LinkedIn profile", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /linkedin\.com\/in\/andrea-dondoni/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/in/andrea-dondoni-4b717978"
    );
  });

  it("offers a CV download", () => {
    render(<Contact />);
    const cvLink = screen.getByRole("link", { name: /scarica cv/i });
    expect(cvLink).toHaveAttribute("href", "/CV-Andrea-Dondoni-it.pdf");
    expect(cvLink).toHaveAttribute("download", "CV-Andrea-Dondoni-IT.pdf");
  });
});
