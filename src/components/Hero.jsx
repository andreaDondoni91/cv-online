import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Terminal from "./Terminal";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header className="grid-bg">
      <div className="max-w-[880px] mx-auto px-6 pt-28 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="font-mono text-[13px] tracking-wide text-teal lowercase">
            {t("hero.path")}
          </p>
          <LanguageSwitcher />
        </div>

        <h1 className="font-display font-bold text-4xl md:text-[56px] leading-[1.05] tracking-tight text-ink mt-3.5 mb-4">
          Andrea Dondoni
        </h1>

        <p className="text-lg md:text-[19px] text-inksoft max-w-[560px] mb-8">
          {t("hero.tagline")}
        </p>

        <Terminal typedLine={t("hero.terminalLine")} className="max-w-[480px] mb-8" />

        <div className="flex gap-3.5 flex-wrap">
          <a
            href="#changelog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium bg-ink text-paperwhite hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_#12213A] transition"
          >
            {t("hero.ctaChangelog")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium border border-ink text-ink hover:bg-ink hover:text-paperwhite hover:-translate-y-0.5 transition"
          >
            {t("hero.ctaContact")}
          </a>
          <a
            href="/CV-Andrea-Dondoni.pdf"
            download="CV-Andrea-Dondoni.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium border border-ink text-ink hover:bg-ink hover:text-paperwhite hover:-translate-y-0.5 transition"
          >
            {t("hero.ctaCv")}
          </a>
        </div>
      </div>
    </header>
  );
}
