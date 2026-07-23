import React from "react";

// Modifica qui le tue competenze e gli anni di esperienza.
const dependencies = [
  ["javascript", "^12 anni"],
  ["react", "^4 anni"],
  ["gatsby", "^4 anni"],
  ["tailwindcss", "^3 anni"],
  ["html5-css3", "^12 anni"],
  ["php", "^2 anni"],
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
      <span className="text-[#8FD6CE]">"{k}"</span>
      <span className="text-[#6E8299]">: </span>
      <span className="text-[#F2C57C]">"{v}"</span>
      <span className="text-[#6E8299]">{comma ? "," : ""}</span>
    </div>
  );
}

function Block({ label, items, last }) {
  return (
    <>
      <div>
        {"  "}
        <span className="text-[#8FD6CE]">"{label}"</span>
        <span className="text-[#6E8299]">: {"{"}</span>
      </div>
      {items.map(([k, v], i) => (
        <Row key={k} k={k} v={v} comma={i < items.length - 1} />
      ))}
      <div>
        {"  "}
        <span className="text-[#6E8299]">{"}"}{last ? "" : ","}</span>
      </div>
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-[88px] fade-up">
      <div className="max-w-[880px] mx-auto px-6">
        <p className="font-mono text-[13px] text-teal lowercase"># package.json</p>
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-ink mt-2.5 mb-7">
          Cosa uso
        </h2>

        <div className="bg-ink text-[#D8E4EE] rounded-[10px] px-7 py-7 font-mono text-sm overflow-x-auto leading-6">
          <div>{"{"}</div>
          <Block label="dependencies" items={dependencies} />
          <Block label="devDependencies" items={devDependencies} last />
          <div>{"}"}</div>
        </div>
      </div>
    </section>
  );
}
