import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the name and tagline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1, name: "Andrea Dondoni" })).toBeInTheDocument();
  });

  it("links the primary CTA to the changelog section", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /vedi il changelog/i })).toHaveAttribute("href", "#changelog");
  });

  it("links the contact CTA to the contact section", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /contattami/i })).toHaveAttribute("href", "#contact");
  });

  it("offers a CV download that points at the PDF and forces a download", () => {
    render(<Hero />);
    const cvLink = screen.getByRole("link", { name: /scarica cv/i });
    expect(cvLink).toHaveAttribute("href", "/CV-Andrea-Dondoni-it.pdf");
    expect(cvLink).toHaveAttribute("download", "CV-Andrea-Dondoni-IT.pdf");
  });
});
