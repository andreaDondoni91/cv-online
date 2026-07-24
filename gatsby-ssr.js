import React from "react";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "it" });

  setHeadComponents([
    <link key="gf-preconnect-1" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link
      key="gf-preconnect-2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="gf-stylesheet"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
    />,
    <link key="favicon" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
  ]);
};
