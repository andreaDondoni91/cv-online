import React from "react";
import Section from "./Section";

// Modifica qui le tue competenze e gli anni di esperienza.
const dependencies = [
  ["javascript", "^12 anni"],
  ["react", "^4 anni"],
  ["gatsby", "^4 anni"],
  ["tailwindcss", "^3 anni"],
  ["html5-css3", "^12 anni"],
];

const devDependencies = [
  ["git", "gitflow, feature-branching"],
  ["ai-assisted-dev", "copilot, claude"],
  ["legacy-stacks", "jquery, java-mvc, asp.net"],
];

function Row({ k, v, comma }) {
  return (
    <div>
      {"    "}
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
        {"  "}
        <span className="text-codeKey">"{label}"</span>
        <span className="text-codePunct">: {"{"}</span>
      </div>
      {items.map(([k, v], i) => (
        <Row key={k} k={k} v={v} comma={i < items.length - 1} />
      ))}
      <div>
        {"  "}
        <span className="text-codePunct">{"}"}{last ? "" : ","}</span>
      </div>
    </>
  );
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="# package.json" title="Cosa uso" titleClassName="mb-7">
      <div className="bg-ink text-codeText rounded-[10px] px-7 py-7 font-mono text-sm overflow-x-auto leading-6">
        <div>{"{"}</div>
        <Block label="dependencies" items={dependencies} />
        <Block label="devDependencies" items={devDependencies} last />
        <div>{"}"}</div>
      </div>
    </Section>
  );
}
