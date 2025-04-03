"use client";

import Link from "next/link";
import Image from "next/image";

import { services } from "~/constants/services";
import { experiences } from "~/constants/experiences";
import { useTheme } from "~/hooks/use-theme";
import { useLazyLoadOnScroll } from "~/hooks/use-lazyload-on-scroll";

const HAS_PROMOTION = process.env.PROMOTION_FLAG === "true" ? true : false;

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
                className="h-[5rem] w-auto object-cover"
                src={theme === "dark" ? item.src : item.srcDark || item.src}
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
                  className="h-[2rem] w-auto object-cover"
                  src={item.src}
                  alt={item.company}
                  width={100}
                  height={100}
                  quality={100}
                />
                <p className="text-[10px] text-neutral-400">{item.experienceDate}</p>
                <h3 className="text-sm">{item.position}</h3>
              </div>
            );
          })}
        </div>

        {HAS_PROMOTION && (
          <>
            <div className="relative w-full">
              <span className="absolute w-full border border-neutral-200 dark:border-neutral-700" />
              <div className="absolute -top-5 z-10 flex w-full flex-row items-center justify-center">
                <p className="flex w-[10rem] -rotate-12 justify-center rounded-full border border-neutral-200 bg-default-white px-10 py-4 text-sm font-semibold dark:border-neutral-500 dark:bg-default-dim-black">
                  Promotion
                </p>
              </div>
            </div>
            <div className="-mt-10 flex w-full flex-col items-center justify-between gap-10 px-3 md:flex-row md:items-center md:px-0">
              <div className="flex flex-col items-center gap-y-5 text-center md:items-start md:text-left">
                <div className="flex flex-col items-center gap-3 md:flex-row">
                  <Image
                    className="h-[5rem] w-[5rem] rounded-xl object-cover"
                    src="/images/promotions/pandan-logo.webp"
                    alt="Pandan POS"
                    width={100}
                    height={100}
                    quality={50}
                  />
                  <span className="flex flex-col">
                    <h2 className="text-[2rem] font-bold">Introducing Pandan POS</h2>
                    <h3 className="text-[1rem] font-semibold text-neutral-500 dark:text-neutral-400">
                      Your pocket POS
                    </h3>
                  </span>
                </div>
                <p>
                  Take your business anywhere with Pandan POS, the ultimate offline point-of-sale
                  system designed for small businesses, entrepreneurs, and mobile vendors. Whether
                  you run a retail shop, food stall, or service-based business, Pandan POS helps you
                  manage sales, orders and track inventory—all without needing an internet
                  connection!
                </p>
                <Link
                  className="transition duration-200 ease-in-out hover:opacity-50"
                  href="https://play.google.com/store/apps/details?id=com.veoscript.PandanPOS"
                  target="_blank"
                >
                  <Image
                    className="h-auto w-auto object-cover"
                    src="/images/promotions/google-play-button.webp"
                    alt="Google Play Button"
                    width={100}
                    height={100}
                    quality={50}
                  />
                </Link>
              </div>
              <div className="flex h-auto w-full flex-col md:h-[35rem]">
                <Image
                  className="h-auto w-auto object-cover"
                  src="/images/promotions/pandan.webp"
                  alt="Pandan POS"
                  width={250}
                  height={250}
                  quality={50}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
