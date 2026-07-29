import React, { useEffect, useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { track } from "../lib/track";

const LANGUAGES = [
  { code: "it", label: "IT", flag: "🇮🇹", name: "Italiano" },
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useI18next();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Lingua / Language"
      className={`fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-paper2 bg-paperwhite/90 backdrop-blur px-1 py-1 shadow-[0_8px_24px_-12px_rgba(18,33,58,0.4)] transition-transform duration-300 md:translate-y-0 ${
        hidden ? "-translate-y-[calc(100%+1.5rem)]" : "translate-y-0"
      }`}
    >
      {LANGUAGES.map(({ code, label, flag, name }) => {
        const active = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              track("language_change", { language: code });
              changeLanguage(code);
            }}
            aria-current={active ? "true" : undefined}
            aria-label={name}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[13px] font-medium transition ${
              active
                ? "bg-ink text-paperwhite"
                : "text-muted hover:text-ink"
            }`}
          >
            <span aria-hidden="true">{flag}</span>
            {label}
          </button>
        );
      })}
    </nav>
  );
}
