import * as React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import About from "../components/About";
import Changelog from "../components/Changelog";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import LanguageSwitcher from "../components/LanguageSwitcher";
import itTranslation from "../../locales/it/translation.json";
import enTranslation from "../../locales/en/translation.json";

const TRANSLATIONS = { it: itTranslation, en: enTranslation };

export default function IndexPage() {
  return (
    <main className="font-sans">
      <ScrollReveal />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Changelog />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
  }
`;

export const Head = ({ pageContext, data }) => {
  const { author, siteUrl } = data.site.siteMetadata;
  const { language, languages, defaultLanguage, originalPath } = pageContext.i18n;
  const { title, description } = TRANSLATIONS[language].meta;

  const localizedUrl = (lng) =>
    `${siteUrl}${lng === defaultLanguage ? "" : `/${lng}`}${originalPath}`;

  const ogImage = `${siteUrl}/og-image.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    jobTitle: "Frontend Developer",
    url: localizedUrl(language),
    image: ogImage,
    email: "mailto:andrea.dondoni91@gmail.com",
    sameAs: ["https://linkedin.com/in/andrea-dondoni-4b717978"],
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={localizedUrl(language)} />
      {languages.map((lng) => (
        <link key={lng} rel="alternate" hrefLang={lng} href={localizedUrl(lng)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localizedUrl(defaultLanguage)} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={localizedUrl(language)} />
      <meta property="og:locale" content={language === "it" ? "it_IT" : "en_US"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};
