"use client";

import Link from "next/link";

import { HandShakeIcon } from "~/utils/icons";

import SocialNavs from "~/components/social-navs";
import { useLazyLoadOnScroll } from "~/hooks/use-lazyload-on-scroll";

const Footer = (): JSX.Element | null => {
  const isLazyLoad = useLazyLoadOnScroll();

  if (!isLazyLoad) return null;

  const myEmail = "jeromevillaruel1998@gmail.com";
  const myNumber = "+639753286466";

  return (
    <footer className="flex w-full bg-default-ghost-white dark:bg-default-black">
      <div className="dark:bg-default-dim-black flex w-full flex-col items-center rounded-t-[7rem] bg-default-white px-[5rem]">
        <div className="flex w-full max-w-md flex-col items-center gap-y-[2rem] py-[5rem] md:gap-y-[3rem]">
          <div className="rounded-full bg-default-ghost-white p-5 dark:bg-default-black">
            <HandShakeIcon />
          </div>
          <h3 className="text-center text-[2rem] font-bold leading-10 md:text-[3rem] md:leading-[3rem]">
            Tell me about your next <span className="text-blue-600">project</span>
          </h3>
          <div className="flex w-full flex-col items-center justify-center gap-x-2 gap-y-3 md:flex-row md:gap-y-0">
            <Link href={`mailto:${myEmail}`} target="_blank" passHref className="w-full md:w-auto">
              <button
                aria-label="Email Me"
                className="custom-button-black w-full border-4 border-neutral-200 px-10 py-4 text-xs md:w-auto dark:border-neutral-700"
              >
                Email Me
              </button>
            </Link>
            <Link
              href={`https://wa.me/${myNumber}`}
              target="_blank"
              passHref
              className="w-full md:w-auto"
            >
              <button
                aria-label="WhatsApp"
                className="custom-button-white dark:custom-button-gray w-full border-4 border-neutral-200 px-10 py-4 text-xs md:w-auto dark:border-neutral-700"
              >
                WhatsApp
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-y-3 border-t border-neutral-200 pb-16 pt-10 md:flex-row md:gap-y-0 dark:border-neutral-700">
          <p className="text-sm font-semibold">&copy; 2024 All rights reserved.</p>
          <SocialNavs />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
