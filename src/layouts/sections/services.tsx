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
    <section id="experience" className="bg-theme-accent-surface px-5 py-20 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <div className="max-w-2xl">
          <p className="text-theme-accent-text text-sm font-semibold uppercase">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            A Career Built Across The Stack
          </h2>
          <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-300">
            A timeline of the teams, products, and responsibilities that have shaped my work.
          </p>
        </div>

        <div className="mt-10 space-y-4 md:space-y-5">
          {experiences.map((item) => (
            <article
              key={item.company}
              className={`grid gap-5 rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900/70 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8 md:p-6 ${
                item.isCurrent ? "border-l-4 border-l-theme-accent" : ""
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4 dark:border-neutral-700 md:flex-col md:items-start md:justify-start md:border-b-0 md:border-r md:pb-0 md:pr-6 dark:md:border-neutral-700">
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {item.experienceDate}
                </p>
                {item.isCurrent && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-theme-accent-soft px-3 py-1 text-xs font-semibold text-theme-accent-text">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-theme-accent" />
                    Current
                  </span>
                )}
              </div>
              <div className="flex items-start gap-4">
                <Image
                  className="h-14 w-14 shrink-0 rounded-xl border border-neutral-200 bg-white object-contain p-2 dark:border-neutral-700 dark:bg-neutral-100"
                  src={item.src}
                  alt={`${item.company} logo`}
                  width={56}
                  height={56}
                  quality={90}
                />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold md:text-xl">{item.position}</h3>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-accent-text mt-1 inline-block text-sm font-medium hover:underline"
                  >
                    {item.company}
                  </Link>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-theme-accent-text text-sm font-semibold uppercase">What I do</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Engineering Across The Stack</h2>
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
          <div className="mt-20 flex flex-col gap-6">
            <article className="group grid overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/80 shadow-lg shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-900/50 dark:shadow-black/10 md:grid-cols-2">
              <div className="flex flex-col items-start justify-center p-6 md:p-10">
                <p className="rounded-full bg-theme-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-theme-accent-text">
                  Product
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pandan POS</h2>
                <p className="mt-4 max-w-xl leading-7 text-neutral-600 dark:text-neutral-300">
                  An offline point-of-sale system for small businesses, entrepreneurs, and mobile
                  vendors. Manage sales, orders, and inventory without an internet connection.
                </p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.veoscript.PandanPOS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Pandan POS on Google Play"
                  className="mt-6 inline-flex rounded-md transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-4"
                >
                  <Image
                    className="h-12 w-auto"
                    src="/images/promotions/google-play-button.webp"
                    alt="Get it on Google Play"
                    width={640}
                    height={195}
                    quality={90}
                  />
                </Link>
              </div>
              <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-theme-accent/10 via-neutral-50 to-white px-6 pt-6 dark:from-theme-accent/10 dark:via-neutral-900 dark:to-neutral-950 md:min-h-[28rem] md:px-10">
                <Image
                  className="h-auto max-h-[28rem] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  src="/images/promotions/pandan-phones.webp"
                  alt="Pandan POS running on mobile devices"
                  width={828}
                  height={1170}
                  quality={90}
                />
              </div>
            </article>
            <article className="group grid overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/80 shadow-lg shadow-neutral-900/5 dark:border-neutral-700 dark:bg-neutral-900/50 dark:shadow-black/10 md:grid-cols-2">
              <div className="order-2 relative flex min-h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-theme-accent/10 via-neutral-50 to-white px-6 pt-6 dark:from-theme-accent/10 dark:via-neutral-900 dark:to-neutral-950 md:order-1 md:min-h-[28rem] md:px-10">
                <Image
                  className="h-auto max-h-[28rem] w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  src="/images/promotions/elementra-phones.webp"
                  alt="Elementra running on mobile devices"
                  width={828}
                  height={1170}
                  quality={90}
                />
              </div>
              <div className="order-1 flex flex-col items-start justify-center p-6 md:order-2 md:p-10">
                <p className="rounded-full bg-theme-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-theme-accent-text">
                  Product
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Elementra</h2>
                <p className="mt-4 max-w-xl leading-7 text-neutral-600 dark:text-neutral-300">
                  Offline-first chemistry exploration with a searchable periodic table, sourced
                  element details, a virtual Mixing Lab, and a small curated compound and reaction
                  catalog.
                </p>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.veoscript.elementra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Elementra on Google Play"
                  className="mt-6 inline-flex rounded-md transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-4"
                >
                  <Image
                    className="h-12 w-auto"
                    src="/images/promotions/google-play-button.webp"
                    alt="Get it on Google Play"
                    width={640}
                    height={195}
                    quality={90}
                  />
                </Link>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
