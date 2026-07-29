import React from "react";
import { render } from "@testing-library/react";
import ScrollDepthTracker from "./ScrollDepthTracker";

describe("ScrollDepthTracker", () => {
  afterEach(() => {
    delete window.dataLayer;
    delete window.__gtmLoaded;
  });

  it("pushes a scroll_depth event once the page is fully in view", () => {
    window.__gtmLoaded = true;
    render(<ScrollDepthTracker />);
    expect(window.dataLayer).toEqual(
      expect.arrayContaining([expect.objectContaining({ event: "scroll_depth", percent: 100 })])
    );
  });

  it("does not push before consent", () => {
    render(<ScrollDepthTracker />);
    expect(window.dataLayer).toBeUndefined();
  });
});
