import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import { techstacks } from "~/constants/techstacks";

const TechStack = (): JSX.Element => {
  return (
    <section className="z-10 w-full border-b border-neutral-200 bg-white px-5 py-12 dark:border-neutral-800 dark:bg-[#111412] md:px-10 md:py-14">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-7 md:flex-row md:items-center md:gap-12">
        <div className="shrink-0 md:w-44">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">Tools I work with</p>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Across product and platform</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-5 md:gap-x-9">
          {techstacks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.alt}
              className="group flex h-11 w-11 items-center justify-center rounded-lg transition hover:bg-neutral-100 dark:hover:bg-neutral-800 md:h-12 md:w-12"
            >
              <Image
                className="h-8 w-8 object-contain grayscale opacity-70 transition group-hover:grayscale-0 group-hover:opacity-100 md:h-9 md:w-9"
                src={item.img}
                alt={item.alt}
                width={50}
                height={50}
                quality={100}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
