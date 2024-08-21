export type ServicesList = {
  src: string;
  company: string;
  position: string;
  description: string;
  link: string;
  experienceDate: string;
  isCurrent: boolean;
};

export const experiences: ServicesList[] = [
  {
    src: "/images/experiences/booky.webp",
    company: "Booky",
    position: "Software Engineer",
    description:
      "This role involves planning and implementing features for mobile and web applications and server infrastructure, ensuring optimal user experience and adherence to development standards, while also tracking metrics, proposing improvements, and supporting internal tools as needed. The responsibilities span feature ideation, coding, testing, adherence to standards, metric tracking, improvement proposals, and internal tool support.",
    link: "https://booky.ph/",
    experienceDate: "February 2024 - Present",
    isCurrent: true,
  },
  {
    src: "/images/experiences/halcyon.webp",
    company: "Halcyon Agile",
    position: "Software Developer",
    description:
      "Responsible for writing clean, efficient, and maintainable code for mobile applications, testing, and debugging mobile applications to ensure they meet quality standards and collaborating with other developers to share knowledge and best practices.",
    link: "https://halcyonagile.com.ph/",
    experienceDate: "June 2022 - February 2024",
    isCurrent: true,
  },
  {
    src: "/images/experiences/spmi.webp",
    company: "Specialty Pulp Manufacturing, Inc.",
    position: "IT Coordinator",
    description:
      "Manage software debugging, databases, LAN, creating company softwares, install and configure software and hardware, including printers, and other computer peripherals.",
    link: "https://www.spmi-pulp.com/",
    experienceDate: "February 2020 - June 2022",
    isCurrent: false,
  },
  {
    src: "/images/experiences/puregold.webp",
    company: "Puregold Price Club, Inc.",
    position: "Graphic Artist",
    description:
      "Responsible for creating aesthetically promo posters and tarpaulins that accompany written text. Maintain store signages clean and presentable.",
    link: "https://puregold.com.ph/",
    experienceDate: "August 2019 - December 2019",
    isCurrent: false,
  },
];
