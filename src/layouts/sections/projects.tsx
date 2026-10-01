import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import { projects } from "~/constants/projects";
import { ExternalLinkIcon, Github } from "~/utils/icons";

const ProjectsSection = (): JSX.Element => {
  return (
    <section id="projects" className="bg-white px-5 py-20 md:px-10 dark:bg-default-dim-black">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-emerald-700 dark:text-emerald-400">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Projects</h2>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
            A selection of products, tools, and experiments built for real-world workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
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
                <h3 className="text-lg font-semibold">{project.title}</h3>
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
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-emerald-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:bg-emerald-400 dark:text-default-black dark:hover:bg-emerald-300"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                        View demo
                      </Link>
                    )}
                    {project.sourceCode && (
                      <Link
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-500 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:border-neutral-600 dark:text-neutral-200 dark:hover:border-neutral-400 dark:hover:bg-neutral-800"
                      >
                        <Github />
                        Source code
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
