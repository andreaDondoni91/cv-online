module.exports = {
  siteMetadata: {
    title: "Andrea Dondoni — Frontend Developer",
    description:
      "Frontend developer con oltre 10 anni di esperienza. Costruisco interfacce che restano in produzione ben oltre il framework con cui sono nate.",
    author: "Andrea Dondoni",
    siteUrl: "https://andrea-dondoni.netlify.app",
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
        siteUrl: "https://andrea-dondoni.netlify.app",
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
