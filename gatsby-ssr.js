import React from "react";
// Self-hosted fonts — replaces the render-blocking Google Fonts request.
import "./src/styles/fonts";

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "it" });

  setHeadComponents([
    <link key="favicon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
    <link key="favicon-png" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
  ]);
};
