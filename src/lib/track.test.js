import { track } from "./track";

describe("track", () => {
  afterEach(() => {
    delete window.dataLayer;
    delete window.__gtmLoaded;
  });

  it("does not push before consent (GTM not loaded)", () => {
    track("cv_download", { location: "hero" });
    expect(window.dataLayer).toBeUndefined();
  });

  it("pushes an event with its params once consent has loaded GTM", () => {
    window.__gtmLoaded = true;
    track("cv_download", { location: "hero" });
    expect(window.dataLayer).toContainEqual({ event: "cv_download", location: "hero" });
  });

  it("works with no extra params", () => {
    window.__gtmLoaded = true;
    track("language_change");
    expect(window.dataLayer).toContainEqual({ event: "language_change" });
  });
});
