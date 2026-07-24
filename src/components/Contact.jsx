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
    </Section>
  );
}
