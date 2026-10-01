"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import VoicePronounciation from "./voice-pronounciation";

const AboutMe = (): JSX.Element => {
  const pronounceText = "vee-oh-skript";

  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-10 py-14 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.78fr)] md:gap-16 md:py-16">
      <div className="flex flex-col items-start gap-7">
        <div className="flex flex-col items-start gap-3">
          <p className="text-theme-accent-text text-sm font-semibold uppercase">
            Full-stack software engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.08]">
            I build software that holds up in production.
          </h1>
          <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-300">
            <span>Jerome Villaruel</span>
            <span aria-hidden="true" className="bg-theme-accent h-1 w-1 rounded-full" />
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
            className="custom-button-accent px-5 py-3 text-sm"
          >
            View resume
          </Link>
          <Link
            href="#projects"
            className="text-theme-accent-text border-theme-accent hover:text-theme-accent-hover border-b pb-1 text-sm font-semibold transition"
          >
            Explore selected work
          </Link>
        </div>
      </div>
      <figure className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-md bg-neutral-200 md:justify-self-end dark:bg-neutral-800">
        <Image
          src="/images/jeromevillaruel_v3.webp"
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
