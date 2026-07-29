export function track(event, params = {}) {
  if (typeof window === "undefined" || !window.__gtmLoaded) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
