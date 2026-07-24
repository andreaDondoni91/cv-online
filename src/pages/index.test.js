import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import { Head } from "./index";

describe("IndexPage Head", () => {
  beforeEach(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: "Andrea Dondoni — Frontend Developer",
          description: "Frontend developer con oltre 10 anni di esperienza.",
          author: "Andrea Dondoni",
          siteUrl: "https://andrea-dondoni.netlify.app",
        },
      },
    });
  });

  it("renders canonical, Open Graph and JSON-LD tags from siteMetadata", () => {
    const { container } = render(<Head />);

    expect(container.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://andrea-dondoni.netlify.app"
    );
    expect(container.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Andrea Dondoni — Frontend Developer"
    );

    const jsonLd = JSON.parse(container.querySelector('script[type="application/ld+json"]').textContent);
    expect(jsonLd["@type"]).toBe("Person");
    expect(jsonLd.sameAs).toContain("https://linkedin.com/in/andrea-dondoni-4b717978");
  });
});
