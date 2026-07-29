import React, { useEffect, useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const STORAGE_KEY = "cookie-consent";

function loadGA(id) {
  if (window.__gaLoaded) return;
  window.__gaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [choice, setChoice] = useState(null);
  const gaId = process.env.GATSBY_GTM_ID;

  useEffect(() => {
    if (!gaId) return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      loadGA(gaId);
      setChoice("granted");
    } else if (stored === "denied") {
      setChoice("denied");
    } else {
      setChoice("pending");
    }
  }, [gaId]);

  if (!gaId || choice !== "pending") return null;

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    loadGA(gaId);
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
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-[640px] rounded-[10px] border border-paper2 bg-paperwhite/95 backdrop-blur px-5 py-4 shadow-[0_16px_40px_-16px_rgba(18,33,58,0.5)] sm:flex sm:items-center sm:gap-4"
    >
      <p className="text-[13px] text-inksoft mb-3 sm:mb-0">{t("consent.message")}</p>
      <div className="flex gap-2 shrink-0">
        <button
          type="button"
          onClick={accept}
          className="px-4 py-2 rounded-md font-mono text-[13px] font-medium bg-ink text-paperwhite hover:-translate-y-0.5 transition"
        >
          {t("consent.accept")}
        </button>
        <button
          type="button"
          onClick={reject}
          className="px-4 py-2 rounded-md font-mono text-[13px] font-medium border border-ink text-ink hover:bg-ink hover:text-paperwhite transition"
        >
          {t("consent.reject")}
        </button>
      </div>
    </div>
  );
}
