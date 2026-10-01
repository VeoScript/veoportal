"use client";

import Image from "next/image";
import Link from "next/link";

import VoicePronounciation from "./voice-pronounciation";

const AboutMe = (): JSX.Element => {
  const pronounceText = "vee-oh-skript";

  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 py-14 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.78fr)] md:gap-16 md:py-16">
      <div className="flex flex-col items-start gap-7">
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm font-semibold uppercase text-emerald-700 dark:text-emerald-400">
            Full-stack software engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.08]">
            I build software that holds up in production.
          </h1>
          <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            <span>Jerome Villaruel</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-emerald-600" />
            <VoicePronounciation
              pronounceText={pronounceText}
              textClassName="text-neutral-600 dark:text-neutral-300"
            />
          </div>
        </div>
        <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg dark:text-neutral-300">
          From product interfaces to backend systems, I work across the stack to turn complex
          workflows into dependable, usable software.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/files/jeromevillaruel.pdf"
            target="_blank"
            className="custom-button-black rounded-md bg-emerald-800 px-5 py-3 text-sm hover:bg-emerald-700 dark:bg-emerald-400 dark:text-default-black dark:hover:bg-emerald-300"
          >
            View resume
          </Link>
          <Link
            href="#projects"
            className="border-b border-emerald-700 pb-1 text-sm font-semibold text-emerald-800 transition hover:text-emerald-600 dark:border-emerald-400 dark:text-emerald-300"
          >
            Explore selected work
          </Link>
        </div>
      </div>
      <figure className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-md bg-neutral-200 md:justify-self-end dark:bg-neutral-800">
        <Image
          src="/images/veo_abroad.webp"
          alt="Jerome Villaruel"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
      </figure>
    </div>
  );
};

export default AboutMe;
