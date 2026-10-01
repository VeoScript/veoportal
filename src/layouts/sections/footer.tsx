"use client";

import Link from "next/link";
import type { JSX } from "react";

import { HandShakeIcon } from "~/utils/icons";

import SocialNavs from "~/components/social-navs";

const Footer = (): JSX.Element => {
  const myEmail = "jeromevillaruel1998@gmail.com";
  const myNumber = "+639753286466";

  return (
    <footer className="bg-theme-accent-surface flex w-full">
      <div className="bg-theme-accent-surface mx-auto flex w-full max-w-6xl flex-col items-center px-5 md:px-10">
        <div className="flex w-full max-w-md flex-col items-center gap-y-[2rem] py-[5rem] md:gap-y-[3rem]">
          <div className="rounded-full bg-default-ghost-white p-5 dark:bg-default-black">
            <HandShakeIcon />
          </div>
          <h3 className="text-center text-[2rem] font-bold leading-10 md:text-[3rem] md:leading-[3rem]">
            Tell me about your next projects
          </h3>
          <div className="flex w-full flex-col items-center justify-center gap-x-2 gap-y-3 md:flex-row md:gap-y-0">
            <Link
              href={`mailto:${myEmail}`}
              aria-label="Email Me"
              className="custom-button-accent w-full rounded-full border-4 border-neutral-200 px-10 py-4 text-xs md:w-auto dark:border-neutral-700"
            >
              Email Me
            </Link>
            <Link
              href={`https://wa.me/${myNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="focus-visible:ring-theme-accent inline-flex w-full items-center justify-center rounded-full border-4 border-neutral-200 bg-[#16B211] px-10 py-4 text-xs text-white transition duration-300 ease-in-out hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:w-auto dark:border-neutral-700"
            >
              WhatsApp
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-y-3 border-t border-neutral-200 pb-16 pt-10 md:flex-row md:gap-y-0 dark:border-neutral-700">
          <p className="text-sm font-semibold">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <SocialNavs />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
