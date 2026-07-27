import React from "react";
import { render } from "@testing-library/react";
import { Head } from "./index";

const pageContext = {
  i18n: {
    language: "it",
    languages: ["it", "en"],
    defaultLanguage: "it",
    originalPath: "/",
  },
};

const data = {
  site: {
    siteMetadata: {
      author: "Andrea Dondoni",
      siteUrl: "https://andrea-dondoni.netlify.app",
    },
  },
};

describe("IndexPage Head", () => {
  it("renders canonical, Open Graph and JSON-LD tags for the current language", () => {
    const { container } = render(<Head pageContext={pageContext} data={data} />);

    expect(container.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://andrea-dondoni.netlify.app/"
    );
    expect(container.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Andrea Dondoni — Frontend Developer"
    );

    const jsonLd = JSON.parse(container.querySelector('script[type="application/ld+json"]').textContent);
    expect(jsonLd["@type"]).toBe("Person");
    expect(jsonLd.sameAs).toContain("https://linkedin.com/in/andrea-dondoni-4b717978");
  });

  it("renders hreflang alternates for every supported language plus x-default", () => {
    const { container } = render(<Head pageContext={pageContext} data={data} />);

    expect(container.querySelector('link[hreflang="it"]')).toHaveAttribute(
      "href",
      "https://andrea-dondoni.netlify.app/"
    );
    expect(container.querySelector('link[hreflang="en"]')).toHaveAttribute(
      "href",
      "https://andrea-dondoni.netlify.app/en/"
    );
    expect(container.querySelector('link[hreflang="x-default"]')).toHaveAttribute(
      "href",
      "https://andrea-dondoni.netlify.app/"
    );
  });

  it("renders the English title when rendered for the /en/ page context", () => {
    const { container } = render(
      <Head pageContext={{ ...pageContext, i18n: { ...pageContext.i18n, language: "en" } }} data={data} />
    );

    expect(container.querySelector("title").textContent).toBe("Andrea Dondoni — Frontend Developer");
    expect(container.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      "Frontend developer with over 10 years of experience. I build interfaces that outlive the framework they were born in."
    );
  });
});
