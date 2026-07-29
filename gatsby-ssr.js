import React from "react";
import "./src/styles/fonts";

export { wrapPageElement } from "gatsby-plugin-react-i18next";

export const onRenderBody = ({ pathname, setHeadComponents, setHtmlAttributes }) => {
  const lang = pathname.startsWith("/en") ? "en" : "it";
  setHtmlAttributes({ lang });

  setHeadComponents([
    <link key="favicon-ico" rel="icon" href="/favicon.ico" sizes="48x48" />,
    <link key="favicon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
    <link key="favicon-96" rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />,
    <link key="favicon-32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
  ]);
};
