import React from "react";
// Self-hosted fonts — replaces the render-blocking Google Fonts request.
import "./src/styles/fonts";

export { wrapPageElement } from "gatsby-plugin-react-i18next";

export const onRenderBody = ({ pathname, setHeadComponents, setHtmlAttributes }) => {
  const lang = pathname.startsWith("/en") ? "en" : "it";
  setHtmlAttributes({ lang });

  setHeadComponents([
    <link key="favicon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
    <link key="favicon-png" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
  ]);
};
