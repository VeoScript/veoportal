import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Text } from "~/components/atoms/Text";
import { Facebook, Twitter, Github, LinkedIn, Magaaazine } from "~/utils/Icons";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center w-full h-full md:h-screen border-t border-neutral-300 dark:border-neutral-800 bg-accent-7 dark:bg-black">
      <div className="flex flex-col md:flex-row items-center justify-start md:justify-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl h-full space-x-0 md:space-x-10">
        <div
          className="flex w-full max-w-full md:max-w-[20rem]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="relative flex flex-row items-center justify-center object-cover overflow-hidden rounded-none md:rounded-ss-[5rem] md:rounded-ee-[5rem]">
            <Image
              src="/images/jeromevillaruel.png"
              className="w-full md:w-[20rem] h-[20rem] object-cover bg-white dark:bg-accent-1"
              alt="veoscript"
              width={500}
              height={500}
              quality={100}
              placeholder="blur"
              blurDataURL="/images/jeromevillaruel.png"
            />
          </div>
        </div>
        <div
          className="flex flex-col items-start w-full px-5 md:px-0 py-5 md:py-3 space-y-10"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="flex flex-col w-full">
            <Text weight="bold" size="2xl">
              Jerome Villaruel
            </Text>
            <Text weight="light" size="base">
              Software Developer
            </Text>
          </div>
          <div className="flex flex-col w-full">
            <Text weight="light" align="justify">
              {`👋 Hello, I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.`}
            </Text>
          </div>
          <div className="flex flex-row items-center w-full space-x-5">
            <Link
              title="Facebook"
              href="https://www.facebook.com/veoscript"
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              title="Twitter"
              href="https://twitter.com/veoscript"
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              title="GitHub"
              href="https://github.com/veoscript"
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              title="Linked In"
              href="https://www.linkedin.com/in/veoscript/"
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link
              title="Magaaazine"
              href="https://www.magaaazine.online/veoscript"
              target="_blank"
            >
              <Magaaazine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
