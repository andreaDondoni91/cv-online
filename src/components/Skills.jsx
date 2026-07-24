import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Section from "./Section";

function Row({ k, v, comma }) {
  return (
    <div>
      <span className="text-codeKey">"{k}"</span>
      <span className="text-codePunct">: </span>
      <span className="text-codeValue">"{v}"</span>
      <span className="text-codePunct">{comma ? "," : ""}</span>
    </div>
  );
}

function Block({ label, items, last }) {
  return (
    <>
      <div>
        <span className="text-codeKey">"{label}"</span>
        <span className="text-codePunct">: {"{"}</span>
      </div>
      {items.map(([k, v], i) => (
        <Row key={k} k={k} v={v} comma={i < items.length - 1} />
      ))}
      <div>
        <span className="text-codePunct">{"}"}{last ? "" : ","}</span>
      </div>
    </>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const dependencies = t("skills.dependencies", { returnObjects: true });
  const devDependencies = t("skills.devDependencies", { returnObjects: true });

  return (
    <Section id="skills" eyebrow={t("skills.eyebrow")} title={t("skills.title")} titleClassName="mb-7">
      <div className="bg-ink text-codeText rounded-[10px] px-7 py-7 font-mono text-sm overflow-x-auto leading-6">
        <div>{"{"}</div>
        <Block label="dependencies" items={dependencies} />
        <Block label="devDependencies" items={devDependencies} last />
        <div>{"}"}</div>
      </div>
    </Section>
  );
}
