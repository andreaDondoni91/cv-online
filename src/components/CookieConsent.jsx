import React, { useEffect, useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const STORAGE_KEY = "cookie-consent";

function loadGTM(id) {
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [choice, setChoice] = useState(null);
  const gtmId = process.env.GATSBY_GTM_ID;

  useEffect(() => {
    if (!gtmId) return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      loadGTM(gtmId);
      setChoice("granted");
    } else if (stored === "denied") {
      setChoice("denied");
    } else {
      setChoice("pending");
    }
  }, [gtmId]);

  if (!gtmId || choice !== "pending") return null;

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    loadGTM(gtmId);
    setChoice("granted");
  };

  const reject = () => {
    window.localStorage.setItem(STORAGE_KEY, "denied");
    setChoice("denied");
  };

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="cookie-banner fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-[380px] rounded-[10px] bg-ink px-5 py-4 font-mono shadow-[0_30px_60px_-24px_rgba(18,33,58,0.8)] sm:right-auto sm:mx-0"
    >
      <div className="mb-3 flex gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-amber inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-teal inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-muted inline-block" />
      </div>

      <div className="text-sm mb-1.5">
        <span className="text-amber">$</span>{" "}
        <span className="text-terminalText">cookies --consent</span>
      </div>
      <p className="text-terminalOutput text-[13px] leading-relaxed mb-4">{t("consent.message")}</p>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={accept}
          className="px-4 py-2 rounded-md text-[13px] font-medium bg-teal text-paperwhite hover:-translate-y-0.5 transition"
        >
          {t("consent.accept")}
        </button>
        <button
          type="button"
          onClick={reject}
          className="px-4 py-2 rounded-md text-[13px] font-medium border border-white/20 text-terminalOutput hover:text-terminalText hover:border-white/40 transition"
        >
          {t("consent.reject")}
        </button>
      </div>
    </div>
  );
}
