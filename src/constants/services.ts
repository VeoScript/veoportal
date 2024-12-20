export type ServicesList = {
  src: string;
  scrDark: string;
  alt: string;
  title: string;
  description: string;
};

export const services: ServicesList[] = [
  {
    src: "/images/svgs/web-development-white.svg",
    scrDark: "/images/svgs/web-development.svg",
    alt: "Web Development",
    title: "Web Development",
    description:
      "Consider as a full-stack developer using Git, NextJS, NuxtJS, NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL, and Rest-API.",
  },
  {
    src: "/images/svgs/software-development-white.svg",
    scrDark: "/images/svgs/software-development.svg",
    alt: "Software Development",
    title: "Software Development",
    description:
      "Provide business app for desktop applications using Tauri, and Mobile applications both iOS & Android using React Native and Ionic.",
  },
  {
    src: "/images/svgs/it-networking-white.svg",
    scrDark: "/images/svgs/it-networking.svg",
    alt: "I.T. Networking",
    title: "I.T. Networking",
    description:
      "Manage network topology, network security, microservices, database administration, computer maintenance, and Local Area Network (LAN) operations.",
  },
];
