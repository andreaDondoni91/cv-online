import React from "react";
import { useTranslation, Link } from "gatsby-plugin-react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const gtmId = process.env.GATSBY_GTM_ID;

  return (
    <footer className="border-t border-paper2">
      <div className="max-w-[880px] mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-x-4 gap-y-2.5 font-mono text-[12.5px] text-muted">
        <span>© {year} Andrea Dondoni</span>
        <div className="flex items-center gap-4 flex-wrap">
          <Link to="/privacy" className="hover:text-teal transition">
            {t("footer.privacy")}
          </Link>
          {gtmId && (
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("cookie:manage"))}
              className="hover:text-teal transition"
            >
              {t("footer.manageCookies")}
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
