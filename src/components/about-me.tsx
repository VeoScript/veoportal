"use client";

import Link from "next/link";

import ProfileHolder from "./profile-holder";
import VoicePronounciation from "./voice-pronounciation";

const AboutMe = (): JSX.Element => {
  const pronounceText = "vee-oh-skript";

  return (
    <div className="mt-[3rem] flex h-full w-full max-w-xl flex-col items-center justify-center gap-y-10 md:mt-0">
      <div className="relative flex w-full justify-center">
        <ProfileHolder src="/images/jeromevillaruel.webp" />
        <span className="absolute left-[58%] top-14 z-10 -rotate-12">
          <span className="flex animate-bounce rounded-full bg-default-white bg-opacity-80 p-3 text-center text-xs font-semibold dark:bg-default-dim-black dark:bg-opacity-80">
            Jerome Villaruel 👋
          </span>
        </span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-1">
        <VoicePronounciation pronounceText={pronounceText} />
        <p>Also known as Veoscript</p>
      </div>
      <h1 className="text-center text-[2rem] font-medium leading-10 tracking-tight md:text-[3rem] md:leading-[3.5rem]">
        Building <span className="font-bold text-blue-600">web</span>,{" "}
        <span className="font-bold text-violet-500">desktop</span>, and{" "}
        <span className="font-bold text-orange-600">mobile</span> applications.
      </h1>
      <Link href="/" className="custom-button-black dark:custom-button-dim-gray px-10 py-4 text-xs">
        View Portfolio
      </Link>
    </div>
  );
};

export default AboutMe;
