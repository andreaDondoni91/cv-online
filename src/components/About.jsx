import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Section from "./Section";

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" eyebrow={t("about.eyebrow")} title={t("about.title")}>
      <p className="text-[17px] text-inksoft max-w-[640px]">{t("about.bio")}</p>
    </Section>
  );
}
