import React from "react";
import Terminal from "./Terminal";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-[88px] fade-up">
      <div className="max-w-[880px] mx-auto px-6">
        <p className="font-mono text-[13px] text-teal lowercase"># contatti</p>
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-ink mt-2.5 mb-6">
          Parliamone
        </h2>

        <Terminal
          className="max-w-[520px]"
          lines={[
            { prompt: "contact --email", output: "andrea.dondoni91@gmail.com" },
            { prompt: "contact --linkedin", output: "linkedin.com/in/andrea-dondoni-4b717978", spaced: true },
          ]}
        />
      </div>
    </section>
  );
}
