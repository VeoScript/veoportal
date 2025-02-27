"use client";

import ProfileHolder from "./profile-holder";
import VoicePronounciation from "./voice-pronounciation";
import PortfolioModal from "./portfolio-modal";

const AboutMe = (): JSX.Element => {
  const pronounceText = "vee-oh-skript";

  return (
    <div className="mt-[3rem] flex h-full w-full max-w-xl flex-col items-center justify-center gap-y-10 md:mt-0">
      <div className="relative flex w-full justify-center">
        <ProfileHolder src="/images/jeromevillaruel_v2.webp" />
        <span className="absolute left-[58%] top-14 z-10 -rotate-12">
          <span className="flex animate-bounce rounded-full bg-default-white bg-opacity-80 p-3 text-center text-xs font-semibold dark:bg-default-dim-black dark:bg-opacity-80">
            Happy Coding! 👋
          </span>
        </span>
      </div>
      <div className="flex w-full flex-col items-center gap-y-2">
        <h1 className="text-xl font-bold text-neutral-600 dark:text-neutral-400">
          Software Developer
        </h1>
        <p className="text-center">
          Hello! I am <span className="font-bold text-black dark:text-white">Jerome Villaruel</span>{" "}
          also known as Veoscript
        </p>
        <VoicePronounciation pronounceText={pronounceText} />
      </div>
      <h1 className="text-center text-[2rem] font-medium leading-10 tracking-tight md:text-[3rem] md:leading-[3.5rem]">
        Building <span className="font-bold text-blue-600">web</span>,{" "}
        <span className="font-bold text-violet-500">desktop</span>, and{" "}
        <span className="font-bold text-orange-600">mobile</span> applications.
      </h1>
      <PortfolioModal />
    </div>
  );
};

export default AboutMe;
