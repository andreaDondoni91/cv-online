import React from "react";
import projects from "../data/projects";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="# projects/" title="Progetti" titleClassName="mb-2" altBg>
      <p className="text-muted text-[15px] mb-7">
        Work in progress — questa sezione cresce insieme al repo. Sostituisci
        i placeholder con progetti reali, demo live e screenshot.
      </p>

      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-paperwhite border border-paper2 rounded-[10px] p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(18,33,58,0.35)]"
          >
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-full bg-tealdim text-teal mr-1.5 mb-1.5"
              >
                {tag}
              </span>
            ))}
            <h3 className="font-display text-[17px] mt-3 mb-1.5">{p.title}</h3>
            <p className="text-sm text-muted mb-3.5">{p.description}</p>
            {p.link ? (
              <a href={p.link} className="font-mono text-[13px] text-teal border-b border-tealdim hover:border-teal">
                {p.linkLabel}
              </a>
            ) : (
              <span className="font-mono text-[13px] text-muted">{p.linkLabel}</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
