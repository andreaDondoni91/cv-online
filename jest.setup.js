import "@testing-library/jest-dom";

// jsdom doesn't implement IntersectionObserver or matchMedia; the site's
// scroll-reveal effect and reduced-motion checks need both to exist.
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
