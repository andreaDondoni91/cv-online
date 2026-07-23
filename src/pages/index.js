import * as React from "react";
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

export const Head = () => (
  <>
    <title>Andrea Dondoni — Frontend Developer</title>
    <meta
      name="description"
      content="Frontend developer con oltre 10 anni di esperienza. Costruisco interfacce che restano in produzione ben oltre il framework con cui sono nate."
    />
  </>
);
