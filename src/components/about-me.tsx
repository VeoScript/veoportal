"use client";

import ProfileHolder from "./profile-holder";
import VoicePronounciation from "./voice-pronounciation";
import PortfolioModal from "./portfolio-modal";

const AboutMe = (): JSX.Element => {
  const pronounceText = "vee-oh-skript";

  return (
    <div className="mt-0 flex w-full flex-col items-center justify-between gap-x-0 gap-y-[2rem] md:-mt-[5rem] md:flex-row md:gap-x-[3rem] md:gap-y-0">
      <figure className="h-auto w-0 bg-none md:h-screen md:w-full md:bg-[url('/images/veoscirpt-warp.png')] md:bg-contain md:bg-center md:bg-no-repeat" />
      <div className="relative flex w-full justify-center md:hidden">
        <ProfileHolder src="/images/jeromevillaruel_v2.webp" />
        <span className="absolute left-[58%] top-14 z-10 -rotate-12 md:hidden">
          <span className="flex animate-bounce rounded-full bg-default-white bg-opacity-80 p-3 text-center text-xs font-semibold md:hidden dark:bg-default-dim-black dark:bg-opacity-80">
            Happy Coding! 👋
          </span>
        </span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-10 md:items-start">
        <div className="flex w-full flex-col items-center gap-y-2 md:items-start">
          <h1 className="text-center md:text-left">
            Hello! I&apos;m{" "}
            <span className="font-bold text-black dark:text-white">Jerome Villaruel</span> also
            known as Veoscript
          </h1>
          <h2 className="text-xl font-bold text-neutral-600 dark:text-neutral-400">
            Software Developer
          </h2>
          <VoicePronounciation pronounceText={pronounceText} />
        </div>
        <h1 className="text-center text-[2rem] font-medium leading-10 tracking-tight md:text-left md:text-[3rem] md:leading-[3.5rem]">
          Building <span className="font-bold text-blue-600">web</span>,{" "}
          <span className="font-bold text-violet-500">desktop</span>, and{" "}
          <span className="font-bold text-orange-600">mobile</span> applications.
        </h1>
        <PortfolioModal />
      </div>
    </div>
  );
};

export default AboutMe;
