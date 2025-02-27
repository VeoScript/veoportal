"use client";

import Link from "next/link";

import SocialNavs from "./social-navs";

import { useMediaQuery, Breakpoints } from "~/hooks/use-media-query";
import { handleCopy } from "~/utils/handle-copy";

const Navigations = (): JSX.Element | null => {
  const isMediumScreen = useMediaQuery(Breakpoints.md);

  const myEmail = "jeromevillaruel1998@gmail.com";
  const myResume = "/files/jeromevillaruel.pdf";

  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-between gap-y-3 md:flex-row md:gap-y-0">
      <nav className="flex h-[3rem] w-full flex-row items-center justify-center gap-x-1 md:justify-start">
        {isMediumScreen && (
          <div className="hidden items-center gap-x-5 rounded-full bg-neutral-200 p-1 md:flex dark:bg-default-dim-black">
            <h3 className="pl-3 text-xs font-semibold">{myEmail}</h3>
            <button
              className="custom-button-white dark:custom-button-black w-[5rem] px-5 py-3.5 text-xs"
              aria-label="Copy Email"
              onClick={() => handleCopy(myEmail, "Email copied to clipboard")}
            >
              Copy
            </button>
          </div>
        )}
        {!isMediumScreen && (
          <Link href={`mailto:${myEmail}`} target="_blank" passHref>
            <button
              className="custom-button-black dark:custom-button-gray px-5 py-3.5 text-xs md:hidden"
              aria-label="Copy Email"
              onClick={() => handleCopy(myEmail, "Email copied to clipboard")}
            >
              Email
            </button>
          </Link>
        )}
        {isMediumScreen && (
          <div className="hidden rounded-full bg-neutral-200 p-1 md:flex dark:bg-default-dim-black">
            <Link
              href={myResume}
              target="_blank"
              className="custom-button-white dark:custom-button-black px-5 py-3.5 text-xs"
              aria-label="Download Resume"
            >
              Resume
            </Link>
          </div>
        )}
        {!isMediumScreen && (
          <div className="flex rounded-full p-1 md:hidden">
            <Link
              href={myResume}
              target="_blank"
              aria-label="Download Resume"
              className="custom-button-white dark:custom-button-dim-gray px-5 py-3.5 text-xs"
            >
              Resume
            </Link>
          </div>
        )}
      </nav>
      <SocialNavs />
    </div>
  );
};

export default Navigations;
