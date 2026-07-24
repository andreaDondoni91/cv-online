import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Hero from "../components/Hero";
import About from "../components/About";
import Changelog from "../components/Changelog";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function IndexPage() {
  return (
    <main className="font-sans">
      <ScrollReveal />
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

export const Head = () => {
  const { site } = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);
  const { title, description, author, siteUrl } = site.siteMetadata;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    jobTitle: "Frontend Developer",
    url: siteUrl,
    email: "mailto:andrea.dondoni91@gmail.com",
    sameAs: ["https://linkedin.com/in/andrea-dondoni-4b717978"],
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:locale" content="it_IT" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};
