import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Text } from "~/components/atoms/Text";

const SkillsServicesSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-screen px-5 border-t border-neutral-300 dark:border-neutral-800">
      <div className="flex flex-col items-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl py-10 md:py-0 space-y-10 md:space-y-24">
        <div className="flex flex-col items-center w-full">
          <Text
            font="rock_salt"
            color="pink"
            align="center"
            weight="bold"
            size="5xl"
          >
            Skills and Services
          </Text>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between w-full space-x-0 md:space-x-10 space-y-5 md:space-y-0">
          <div
            className="relative flex flex-col items-center w-full space-y-3"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image
              src={
                theme === "light"
                  ? "/images/icons/image2-dark.webp"
                  : "/images/icons/image2.webp"
              }
              className="w-28 md:w-38 h-28 md:h-38 mb-5 object-contain bg-transparent"
              alt="Web Development"
              width={100}
              height={100}
              quality={100}
            />
            <Text align="center" weight="bold" size="2xl">
              Web Development
            </Text>
            <Text align="left" weight="light" size="sm">
              Consider as a full-stack developer using Git, NextJS, NuxtJS,
              NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL and
              REST-API.
            </Text>
          </div>
          <div
            className="flex flex-col items-center w-full space-y-3"
            data-aos="fade-up"
            data-aos-delay="380"
          >
            <Image
              src={
                theme === "light"
                  ? "/images/icons/image1-dark.webp"
                  : "/images/icons/image1.webp"
              }
              className="w-28 md:w-38 h-28 md:h-38 mb-5 object-contain bg-transparent"
              alt="Software Development"
              width={100}
              height={100}
              quality={100}
            />
            <Text align="center" weight="bold" size="2xl">
              Software Development
            </Text>
            <Text align="left" weight="light" size="sm">
              Can create desktop applications using Tauri, Electron, and C# WFA.
              Mobile applications both iOS & Android using React Native and
              Ionic.
            </Text>
          </div>
          <div
            className="flex flex-col items-center w-full space-y-3"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <Image
              src={
                theme === "light"
                  ? "/images/icons/image4-dark.webp"
                  : "/images/icons/image4.webp"
              }
              className="w-28 md:w-38 h-28 md:h-38 mb-5 object-contain bg-transparent"
              alt="I.T. Networking"
              width={100}
              height={100}
              quality={100}
            />
            <Text align="center" weight="bold" size="2xl">
              I.T. Networking
            </Text>
            <Text align="left" weight="light" size="sm">
              Handle network topology, network security, microservices, database
              administrator, computer maintenance, and Local Area Network.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsServicesSection;
