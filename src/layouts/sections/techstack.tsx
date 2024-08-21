import Image from "next/image";
import Link from "next/link";

import { techstacks } from "~/constants/techstacks";

const TechStack = (): JSX.Element => {
  return (
    <div className="z-10 flex w-full flex-col items-center overflow-hidden rounded-b-[7rem] border-b border-neutral-200 bg-default-white px-1 py-[5rem] dark:border-neutral-700 dark:bg-default-dim-black">
      <div className="flex w-full items-center justify-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center justify-center gap-x-[1rem] md:gap-x-[3rem]">
            {techstacks.concat(techstacks).map((item, index) => (
              <Link
                key={index}
                href={item.link}
                target="_blank"
                className="h-[4rem] w-[4rem] transition duration-300 ease-in-out hover:scale-95 md:h-[5rem] md:w-[5rem]"
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
        </div>
      </div>
    </div>
  );
};

export default TechStack;
