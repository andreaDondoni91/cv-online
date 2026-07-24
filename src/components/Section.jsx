import React from "react";

/**
 * Shared wrapper for content sections: eyebrow label + h2 title, with an
 * optional alternate background used to separate sections visually.
 */
export default function Section({ id, eyebrow, title, titleClassName = "mb-5", altBg = false, children }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-[88px] fade-up ${altBg ? "bg-paperwhite border-y border-paper2" : ""}`}
    >
      <div className="max-w-[880px] mx-auto px-6">
        <p className="font-mono text-[13px] text-teal lowercase">{eyebrow}</p>
        <h2 className={`font-display font-semibold text-2xl md:text-[28px] text-ink mt-2.5 ${titleClassName}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
