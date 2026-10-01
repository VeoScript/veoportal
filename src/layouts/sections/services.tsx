"use client";

import Link from "next/link";
import Image from "next/image";
import type { JSX } from "react";

import { services } from "~/constants/services";
import { experiences } from "~/constants/experiences";
import { useTheme } from "~/hooks/use-theme";

const HAS_PROMOTION = process.env.PROMOTION_FLAG === "true" ? true : false;

const Services = (): JSX.Element => {
  const theme = useTheme();

  return (
    <section className="bg-theme-accent-surface px-5 py-20 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-theme-accent-text">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A career built across the stack
          </h2>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
            Roles spanning product engineering, mobile development, and IT operations.
          </p>
        </div>

        <div className="mt-10">
          {experiences.map((item) => (
            <article
              key={item.company}
              className="grid gap-5 border-t border-neutral-300 py-7 last:border-b dark:border-neutral-700 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10"
            >
              <div className="flex flex-wrap items-center gap-3 md:flex-col md:items-start md:gap-2">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.experienceDate}
                </p>
                {item.isCurrent && (
                  <span className="rounded-sm bg-theme-accent-soft px-2 py-1 text-xs font-semibold text-theme-accent-text">
                    Current
                  </span>
                )}
              </div>
              <div className="flex items-start gap-4">
                <Image
                  className="h-12 w-12 shrink-0 rounded-md bg-white object-contain p-1 dark:bg-neutral-100"
                  src={item.src}
                  alt={`${item.company} logo`}
                  width={48}
                  height={48}
                  quality={90}
                />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{item.position}</h3>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-theme-accent-text hover:underline"
                  >
                    {item.company}
                  </Link>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-sm font-semibold uppercase text-theme-accent-text">What I do</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Engineering across the stack</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.title}
                className="border-t border-neutral-300 pt-5 dark:border-neutral-700"
              >
                <Image
                  className="h-12 w-12 object-contain"
                  src={theme === "dark" ? item.src : item.srcDark || item.src}
                  alt={item.alt}
                  width={48}
                  height={48}
                  quality={90}
                />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {HAS_PROMOTION && (
          <div className="mt-20 grid gap-8 border-t border-neutral-300 pt-8 dark:border-neutral-700 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-theme-accent-text">Product</p>
              <h2 className="mt-3 text-3xl font-semibold">Pandan POS</h2>
              <p className="mt-4 max-w-xl leading-7 text-neutral-600 dark:text-neutral-300">
                An offline point-of-sale system for small businesses, entrepreneurs, and mobile
                vendors. Manage sales, orders, and inventory without an internet connection.
              </p>
              <Link
                href="https://play.google.com/store/apps/details?id=com.veoscript.PandanPOS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block border-b border-theme-accent pb-1 text-sm font-semibold text-theme-accent-text"
              >
                Get it on Google Play
              </Link>
            </div>
            <Image
              className="mx-auto h-auto max-h-[28rem] w-full object-contain"
              src="/images/promotions/pandan-phones.webp"
              alt="Pandan POS running on mobile devices"
              width={828}
              height={1170}
              quality={90}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
