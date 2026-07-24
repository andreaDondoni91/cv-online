import React from "react";
import projects from "../data/projects";
import Section from "./Section";
import Terminal from "./Terminal";

export default function Projects() {
  const [project] = projects;

  return (
    <Section id="projects" eyebrow="# projects/" title="Progetti" titleClassName="mb-2" altBg>
      <p className="text-muted text-[15px] mb-7">
        Questa sezione cresce insieme al repo — aggiungerò altri progetti reali
        man mano che li pubblico.
      </p>

      <div className="border border-paper2 rounded-[10px] bg-paperwhite overflow-hidden md:grid md:grid-cols-[1.2fr_1fr]">
        <div className="p-7 md:p-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-full bg-tealdim text-teal mr-1.5 mb-1.5"
            >
              {tag}
            </span>
          ))}
          <h3 className="font-display text-xl md:text-[26px] mt-3 mb-2.5">{project.title}</h3>
          <p className="text-inksoft text-[15px] mb-6 max-w-[420px]">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-mono text-sm font-medium bg-ink text-paperwhite hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_#12213A] transition"
          >
            {project.linkLabel}
          </a>
        </div>

        <div className="bg-paper2 p-7 md:p-8 flex items-center">
          <Terminal
            className="w-full"
            lines={[
              { prompt: "git remote -v", output: "origin  github.com/andreaDondoni91/cv-online" },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
