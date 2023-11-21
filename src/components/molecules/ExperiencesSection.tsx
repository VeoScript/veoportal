import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Text } from '~/components/atoms/Text'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { IExperience } from '~/shared/interfaces'
import { experiences } from '../../shared/mocks/experiences'

const ExperiencesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-5 py-[5rem] border-t border-neutral-800 bg-accent-2">
      <div className="flex flex-col items-center w-full large-break-point:max-w-5xl extra-large-break-point:max-w-7xl space-y-24">
        <div className="flex flex-col items-center w-full">
          <Text
            font="rock_salt"
            color="pink"
            align="center"
            weight="bold"
            size="5xl"
          >
            Experiences
          </Text>
        </div>
        <div className="flex flex-col items-center w-full max-w-full space-y-5">
          <VerticalTimeline>
            {experiences.map((experience: IExperience, index: number) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#111827", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  #111827" }}
                date={experience.experienceDate}
                iconStyle={{ background: "#111827", color: "#111827" }}
                icon={
                  <Image
                    src={experience.image}
                    className="w-full h-full p-2 object-fill rounded-full border-2 border-neutral-300 bg-white"
                    alt={experience.image}
                    width={100}
                    height={100}
                    quality={100}
                  />
                }
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <h3 className="vertical-timeline-element-title font-bold text-[#F4BD83]">
                    {experience.company}
                  </h3>
                  <Link href={experience.link} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                  </Link>
                </div>
                <h4 className="vertical-timeline-element-subtitle font-light text-sm">
                  {experience.position}
                </h4>
                <h6 className="mt-3 font-light text-sm">
                  {experience.description}
                </h6>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;
