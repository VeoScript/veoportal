"use client";

import { Fragment } from "react";

import Link from "next/link";

import { socialLinks } from "~/constants/socials";

import { useMediaQuery, Breakpoints } from "~/hooks/use-media-query";
import { Github, Instagram, LinkedIn, Magaaazine } from "~/utils/icons";

const SocialNavs = (): JSX.Element => {
  const isMediumScreen = useMediaQuery(Breakpoints.md);

  return (
    <nav className="flex flex-row items-center gap-x-2 font-semibold md:gap-x-1">
      {isMediumScreen && (
        <>
          {socialLinks.map((social, index) => (
            <Fragment key={index}>
              <Link
                href={social.link}
                target="_blank"
                className="hidden text-sm hover:underline md:flex"
              >
                {social.name}
              </Link>
              {index < socialLinks.length - 1 && <span className="text-xs">/</span>}
            </Fragment>
          ))}
        </>
      )}
      {!isMediumScreen && (
        <>
          {socialLinks.map((social, index) => (
            <Fragment key={social.name}>
              <Link
                href={social.link}
                target="_blank"
                aria-label={`${social.name} link`}
                className="flex rounded-full bg-default-white p-3 text-sm hover:underline md:hidden"
              >
                {index === 0 && <LinkedIn />}
                {index === 1 && <Github />}
                {index === 2 && <Instagram />}
                {index === 3 && <Magaaazine />}
              </Link>
            </Fragment>
          ))}
        </>
      )}
    </nav>
  );
};

export default SocialNavs;
