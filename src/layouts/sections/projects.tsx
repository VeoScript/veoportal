"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { useState } from "react";

import { projects, type ProjectList } from "~/constants/projects";
import { ExternalLinkIcon, Github } from "~/utils/icons";

const companyProjects = projects.filter((project) => project.isCompanyProject);
const personalProjects = projects.filter((project) => !project.isCompanyProject);

const ProjectCard = ({ project }: { project: ProjectList }): JSX.Element => (
  <article
    key={project.title}
    className="group overflow-hidden rounded-md border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-default-black"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
      <Image
        src={project.src}
        alt={`${project.title} screenshot`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
      />
    </div>
    <div className="flex flex-col p-5">
      {project.role && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-theme-accent-text">
          {project.role}
        </p>
      )}
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        {project.description}
      </p>
      {(project.demo || project.sourceCode) && (
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-4 dark:border-neutral-700">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} demo`}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-theme-accent px-4 py-2 text-sm font-semibold text-theme-accent-foreground transition hover:bg-theme-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              View Live
            </Link>
          )}
          {project.sourceCode && (
            <Link
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code`}
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-neutral-400 dark:hover:bg-neutral-800"
            >
              <Github />
              Source code
            </Link>
          )}
        </div>
      )}
    </div>
  </article>
);

const ProjectsSection = (): JSX.Element => {
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <section
      id="projects"
      className="bg-default-ghost-white px-5 py-20 dark:bg-default-black md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-theme-accent-text">Selected work</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Projects</h2>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
            Company products I contributed to as part of a team, alongside personal projects.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Company Projects</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            Built with a team. My role is noted on each project.
          </p>
          <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {companyProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold">Personal Projects</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            Personal projects and independent work.
          </p>
        </div>

        <div
          id="personal-projects-grid"
          className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3"
        >
          {personalProjects.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {visibleCount < personalProjects.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              aria-controls="personal-projects-grid"
              onClick={() =>
                setVisibleCount((count) => Math.min(count + 5, personalProjects.length))
              }
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-theme-accent px-5 py-2 text-sm font-semibold text-theme-accent-foreground transition hover:bg-theme-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2"
            >
              See more personal projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
