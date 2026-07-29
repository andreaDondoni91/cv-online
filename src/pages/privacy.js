import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";
import itTranslation from "../../locales/it/translation.json";
import enTranslation from "../../locales/en/translation.json";

const TRANSLATIONS = { it: itTranslation, en: enTranslation };

export default function PrivacyPage() {
  const { t } = useTranslation();
  const sections = t("privacy.sections", { returnObjects: true });

  return (
    <main className="font-sans">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Link to="/" className="font-mono text-[13px] text-teal hover:underline">
          {t("privacy.back")}
        </Link>

        <h1 className="font-display font-bold text-3xl md:text-[40px] leading-tight text-ink mt-6 mb-1.5">
          {t("privacy.title")}
        </h1>
        <p className="font-mono text-[12.5px] text-muted mb-8">{t("privacy.updated")}</p>
        <p className="text-[17px] text-inksoft mb-10 max-w-[620px]">{t("privacy.intro")}</p>

        {sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="font-display font-semibold text-xl text-ink mb-2">{section.heading}</h2>
            <p className="text-[15px] text-inksoft leading-relaxed">{section.body}</p>
          </section>
        ))}
      </div>
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
        siteUrl
      }
    }
  }
`;

export const Head = ({ pageContext, data }) => {
  const { siteUrl } = data.site.siteMetadata;
  const { language, languages, defaultLanguage, originalPath } = pageContext.i18n;
  const { title, intro } = TRANSLATIONS[language].privacy;

  const localizedUrl = (lng) => `${siteUrl}${lng === defaultLanguage ? "" : `/${lng}`}${originalPath}`;

  return (
    <>
      <title>{`${title} — Andrea Dondoni`}</title>
      <meta name="description" content={intro} />
      <link rel="canonical" href={localizedUrl(language)} />
      {languages.map((lng) => (
        <link key={lng} rel="alternate" hrefLang={lng} href={localizedUrl(lng)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localizedUrl(defaultLanguage)} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} — Andrea Dondoni`} />
      <meta property="og:url" content={localizedUrl(language)} />
      <meta property="og:locale" content={language === "it" ? "it_IT" : "en_US"} />
    </>
  );
};
