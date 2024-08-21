"use client";

import Image from "next/image";

import { services } from "~/constants/services";
import { experiences } from "~/constants/experiences";
import { useTheme } from "~/hooks/use-theme";
import { useLazyLoadOnScroll } from "~/hooks/use-lazyload-on-scroll";

const Services = (): JSX.Element | null => {
  const theme = useTheme();
  const isLazyLoad = useLazyLoadOnScroll();

  if (!isLazyLoad) return null;

  return (
    <div className="-mt-[10rem] flex w-full flex-col items-center bg-default-ghost-white px-3 pb-[5rem] pt-[15rem] md:px-0 dark:bg-default-black">
      <div className="flex w-full max-w-5xl flex-col items-center gap-y-[7rem]">
        <h2 className="w-full max-w-full text-center text-xl font-semibold leading-6 md:max-w-2xl md:text-[2rem] md:leading-[2.5rem]">
          Excited to collaborate on innovative projects and contribute to the world of software
          development.
        </h2>

        <div className="relative w-full">
          <span className="absolute w-full border border-neutral-200 dark:border-neutral-700" />
          <div className="absolute -top-5 z-10 flex w-full flex-row items-center justify-center">
            <p className="flex w-[10rem] -rotate-12 justify-center rounded-full border border-neutral-200 bg-default-white px-10 py-4 text-sm font-semibold dark:border-neutral-500 dark:bg-default-dim-black">
              Services
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 px-3 md:flex-row md:items-start md:px-0">
          {services.map((item, index) => (
            <div key={index} className="flex w-full flex-col items-center gap-y-5 md:items-start">
              <Image
                className="h-[2.5rem] w-[2.5rem] object-cover"
                src={theme === "dark" ? item.src : item.scrDark}
                alt={item.alt}
                width={10}
                height={10}
                quality={50}
              />
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="text-center text-base text-default-dim-black md:text-left dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-full">
          <span className="absolute w-full border border-neutral-200 dark:border-neutral-700" />
          <div className="absolute -top-5 z-10 flex w-full flex-row items-center justify-center">
            <p className="flex w-[10rem] -rotate-12 justify-center rounded-full border border-neutral-200 bg-default-white px-10 py-4 text-sm font-semibold dark:border-neutral-500 dark:bg-default-dim-black">
              Experiences
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col flex-wrap items-center justify-between gap-10 px-3 md:flex-row md:items-start md:px-0">
          {experiences.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-y-1">
                <Image
                  className="object-cover"
                  src={item.src}
                  alt={item.company}
                  width={100}
                  height={100}
                  quality={50}
                />
                <p className="text-[10px] text-neutral-400">{item.experienceDate}</p>
                <h3 className="text-sm">{item.position}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
