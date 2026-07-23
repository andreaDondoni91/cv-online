import React from "react";
import changelog from "../data/changelog";

export default function Changelog() {
  return (
    <section
      id="changelog"
      className="py-16 md:py-[88px] bg-paperwhite border-y border-paper2 fade-up"
    >
      <div className="max-w-[880px] mx-auto px-6">
        <p className="font-mono text-[13px] text-teal lowercase"># CHANGELOG.md</p>
        <h2 className="font-display font-semibold text-2xl md:text-[28px] text-ink mt-2.5 mb-10">
          Cronologia release
        </h2>

        {changelog.map((release) => (
          <div
            key={release.version}
            className={`changelog-item ${release.current ? "current" : ""}`}
          >
            <span
              className={`inline-block font-mono text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide ${
                release.current
                  ? "bg-amber text-paperwhite"
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
      </div>
    </section>
  );
}
