import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

const LANGUAGES = [
  { code: "it", label: "IT", flag: "🇮🇹", name: "Italiano" },
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
];

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useI18next();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full border border-paper2 bg-paperwhite/90 backdrop-blur px-1 py-1 shadow-[0_8px_24px_-12px_rgba(18,33,58,0.4)]">
      {LANGUAGES.map(({ code, label, flag, name }) => {
        const active = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => changeLanguage(code)}
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
    </div>
  );
}
