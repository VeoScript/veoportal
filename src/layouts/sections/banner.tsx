import type { JSX } from "react";

import AboutMe from "~/components/about-me";
import Navigations from "~/components/navigations";

const Banner = (): JSX.Element => {
  return (
    <section className="z-20 flex min-h-screen w-full flex-col items-center border-b border-neutral-200 bg-[#f7f8f6] px-5 pb-8 pt-5 dark:border-neutral-800 dark:bg-[#111412] md:px-10">
      <Navigations />
      <AboutMe />
    </section>
  );
};

export default Banner;
