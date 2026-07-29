import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CookieConsent from "./CookieConsent";

describe("CookieConsent", () => {
  afterEach(() => {
    window.localStorage.clear();
    delete window.__gtmLoaded;
    delete process.env.GATSBY_GTM_ID;
  });

  it("renders nothing when no GA measurement ID is configured", () => {
    delete process.env.GATSBY_GTM_ID;
    const { container } = render(<CookieConsent />);
    expect(container).toBeEmptyDOMElement();
  });

  it("shows the banner and stores consent on accept when a GA ID is set", () => {
    process.env.GATSBY_GTM_ID = "G-TEST123";
    render(<CookieConsent />);

    const accept = screen.getByRole("button", { name: /accetta/i });
    expect(accept).toBeInTheDocument();

    fireEvent.click(accept);
    expect(window.localStorage.getItem("cookie-consent")).toBe("granted");
  });

  it("stores a denial and does not load GA on reject", () => {
    process.env.GATSBY_GTM_ID = "G-TEST123";
    render(<CookieConsent />);

    fireEvent.click(screen.getByRole("button", { name: /rifiuta/i }));
    expect(window.localStorage.getItem("cookie-consent")).toBe("denied");
    expect(window.__gtmLoaded).toBeUndefined();
  });
});
