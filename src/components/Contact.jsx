import React from "react";
import Terminal from "./Terminal";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="# contatti" title="Parliamone" titleClassName="mb-6">
      <Terminal
        className="max-w-[520px]"
        lines={[
          {
            prompt: "contact --email",
            output: "andrea.dondoni91@gmail.com",
            href: "mailto:andrea.dondoni91@gmail.com",
          },
          {
            prompt: "contact --linkedin",
            output: "linkedin.com/in/andrea-dondoni-4b717978",
            href: "https://linkedin.com/in/andrea-dondoni-4b717978",
            spaced: true,
          },
        ]}
      />

      <a
        href="/CV-Andrea-Dondoni.pdf"
        download="CV-Andrea-Dondoni.pdf"
        className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium bg-ink text-paperwhite hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_#12213A] transition"
      >
        Scarica CV ↓
      </a>
    </Section>
  );
}
