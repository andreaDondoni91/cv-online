import React from "react";
import changelog from "../data/changelog";
import Section from "./Section";

export default function Changelog() {
  return (
    <Section id="changelog" eyebrow="# CHANGELOG.md" title="Cronologia release" titleClassName="mb-10" altBg>
      {changelog.map((release) => (
        <div
          key={release.version}
          className={`changelog-item ${release.current ? "current" : ""}`}
        >
          <span
            className={`inline-block font-mono text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide ${
              release.current
                ? "bg-amber text-ink"
                : "bg-tealdim text-teal"
            }`}
          >
            {release.version}
            {release.current ? " · current" : ""}
          </span>
          <span className="font-mono text-xs font-semibold text-muted ml-2.5">
            {release.dates}
          </span>

          <h3 className="font-display text-lg md:text-[19px] mt-2.5 mb-0.5">
            {release.role}
          </h3>

          <ul className="mt-2.5 mb-1 pl-4.5 list-disc">
            {release.entries.map((entry, i) => (
              <li key={i} className="mb-1.5 text-inksoft">
                <strong>{entry.type}:</strong> {entry.text}
              </li>
            ))}
          </ul>

          <div className="mt-2.5 font-mono text-[12.5px] text-muted">
            stack: {release.stack}
          </div>
        </div>
      ))}
    </Section>
  );
}
