import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Text } from '~/components/atoms/Text'

import { ITechStacks } from '~/shared/interfaces'
import { techstacks } from '../../shared/mocks/techstacks'

const TechStacksSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-screen px-5 border-t border-neutral-800 bg-accent-1">
      <div className="flex flex-col items-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl py-10 md:py-0 space-y-10 md:space-y-24">
        <div className="flex flex-col items-center w-full">
          <Text
            font="rock_salt"
            color="pink"
            align="center"
            weight="bold"
            size="5xl"
          >
            Tech Stacks
          </Text>
        </div>
        <div
          className="flex flex-col items-center w-full max-w-full space-y-10"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div className="flex flex-wrap items-center justify-center w-full max-w-full gap-10">
            {techstacks.map((techstack: ITechStacks, index: number) => (
              <Link
                key={index}
                href={techstack.link}
                target="_blank"
                className="transition ease-in-out duration-200 transform hover:scale-110"
              >
                <Image
                  src={techstack.icon}
                  className="w-[6rem] h-[6rem] object-cover bg-transparent"
                  alt={techstack.name}
                  width={500}
                  height={500}
                  quality={100}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacksSection;
