import Image from "next/image";
import Link from "next/link";
import type { JSX } from "react";

import { techstacks } from "~/constants/techstacks";

const TechStack = (): JSX.Element => {
  return (
    <div className="z-10 flex w-full flex-col items-center overflow-hidden bg-default-white px-1 py-[5rem] dark:bg-default-dim-black">
      <div className="w-full overflow-hidden">
        <div className="flex w-max shrink-0 animate-marquee whitespace-nowrap motion-reduce:animate-none">
          {[false, true].map((isDuplicate) => (
            <div
              key={String(isDuplicate)}
              aria-hidden={isDuplicate}
              className="flex w-max shrink-0 items-center gap-x-[1rem] pr-[1rem] md:gap-x-[3rem] md:pr-[3rem]"
            >
              {techstacks.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  tabIndex={isDuplicate ? -1 : undefined}
                  className="h-[4rem] w-[4rem] shrink-0 transition duration-300 ease-in-out hover:scale-95 md:h-[5rem] md:w-[5rem]"
                >
                  <Image
                    priority={false}
                    className="h-full w-full bg-default-white object-cover dark:bg-default-dim-black"
                    src={item.img}
                    alt={item.alt}
                    width={50}
                    height={50}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={item.img}
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
