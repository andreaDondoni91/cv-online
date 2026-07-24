import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";

const LANGUAGES = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
];

export default function LanguageSwitcher({ className = "" }) {
  const { language, changeLanguage } = useI18next();

  return (
    <div className={`flex items-center gap-1.5 font-mono text-[13px] ${className}`}>
      {LANGUAGES.map(({ code, label }, i) => (
        <React.Fragment key={code}>
          {i > 0 && <span className="text-muted">/</span>}
          <button
            type="button"
            onClick={() => changeLanguage(code)}
            aria-current={language === code ? "true" : undefined}
            className={`transition ${
              language === code ? "text-ink font-semibold" : "text-muted hover:text-teal"
            }`}
          >
            {label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
