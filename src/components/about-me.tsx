"use client";

import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import VoicePronounciation from "./voice-pronounciation";

const portraitBlurDataUrls = {
  v3: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACQAwCdASoQABMAPzmQvlWvKqajMAgB4CcJZwAAW+jsIoqyj+mgAPJTmDtf0nc0siZ/7ReBM2M76msUo/QAAA==",
  v4: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAwCdASoQABUAPzmMvlUvKaajMAgB4CcJYwC7ABuDLBsFgfB1a94A/hEqYH7HBzKe0up6M7l9dO8Yd327JYAA",
};

const AboutMe = (): JSX.Element => {
  const pronounceText = "vee-oh-skript";

  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.7fr)] md:gap-20 md:py-20">
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-5">
          <p className="text-theme-accent-text flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="bg-theme-accent h-px w-8" /> Full-stack software engineer
          </p>
          <h1 className="max-w-3xl text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl md:leading-[1.04]">
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
        <p className="max-w-xl text-base leading-7 text-neutral-600 md:text-lg md:leading-8 dark:text-neutral-300">
          From product interfaces to backend systems, I work across the stack to turn complex
          workflows into dependable, usable software.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/files/jeromevillaruel.pdf"
            target="_blank"
            className="custom-button-accent px-5 py-3 text-sm"
          >
            View Resume
          </Link>
          <Link
            href="#projects"
            className="border-theme-accent text-theme-accent-text hover:text-theme-accent-hover border-b pb-1 text-sm font-semibold transition"
          >
            Explore Selected Work
          </Link>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[24rem] md:justify-self-end">
        <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-neutral-200 shadow-2xl shadow-neutral-900/10 dark:bg-neutral-800">
          <Image
            src="/images/jeromevillaruel_v4.webp"
            alt="Jerome Villaruel"
            fill
            placeholder="blur"
            blurDataURL={portraitBlurDataUrls.v4}
            priority
            sizes="(max-width: 768px) 85vw, 32vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-5 pt-16 text-sm font-medium text-white">
            Based in the Philippines · Open to opportunities
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default AboutMe;
