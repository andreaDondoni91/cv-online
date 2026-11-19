module.exports = {
  // Page titles and descriptions live in locales/*/translation.json (meta.*).
  siteMetadata: {
    author: "Andrea Dondoni",
    siteUrl: "https://andreadondoni.com",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["it", "en"],
        defaultLanguage: "it",
        siteUrl: "https://andreadondoni.com",
        redirect: false,
        trailingSlash: "never",
        i18nextOptions: {
          interpolation: { escapeValue: false },
          keySeparator: ".",
          nsSeparator: false,
        },
      },
    },
  ],
};
