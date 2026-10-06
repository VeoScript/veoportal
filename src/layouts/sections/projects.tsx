"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";
import { useRef, useState } from "react";

import { projects, type ProjectList } from "~/constants/projects";
import { ExternalLinkIcon, Github } from "~/utils/icons";

const companyProjects = projects.filter((project) => project.isCompanyProject);
const personalProjects = projects.filter((project) => !project.isCompanyProject);

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: ProjectList;
  featured?: boolean;
}): JSX.Element => (
  <article
    className={`group h-full overflow-hidden border bg-white transition duration-300 dark:bg-default-black ${
      featured
        ? "rounded-2xl border-neutral-200 shadow-lg shadow-neutral-900/5 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:shadow-black/20"
        : "rounded-md border-neutral-200 dark:border-neutral-700"
    }`}
  >
    <div
      className={`relative aspect-[16/10] overflow-hidden ${
        featured
          ? "bg-gradient-to-br from-neutral-100 via-white to-theme-accent/10 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
          : "bg-neutral-100 dark:bg-neutral-800"
      }`}
    >
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
  const companyCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCompanyProjects = (direction: -1 | 1): void => {
    const carousel = companyCarouselRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!(firstCard instanceof HTMLElement) || !carousel) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

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
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-theme-accent-text">
                Team-built products
              </p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Company Projects</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                Built with a team. My role is noted on each project.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Show previous company project"
                onClick={() => scrollCompanyProjects(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition hover:border-theme-accent hover:bg-theme-accent hover:text-theme-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="m15 18-6-6 6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Show next company project"
                onClick={() => scrollCompanyProjects(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition hover:border-theme-accent hover:bg-theme-accent hover:text-theme-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="m9 18 6-6-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-7 rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-white via-neutral-50 to-theme-accent/10 p-4 shadow-xl shadow-neutral-900/5 dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-default-black md:p-6">
            <div
              ref={companyCarouselRef}
              role="region"
              aria-label="Company projects"
              aria-roledescription="carousel"
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              tabIndex={0}
            >
              {companyProjects.map((project) => (
                <div
                  key={project.title}
                  className="w-[88%] min-w-0 shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-3rem)/3)]"
                >
                  <ProjectCard project={project} featured />
                </div>
              ))}
            </div>
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
