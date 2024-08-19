export type ServicesList = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export const services: ServicesList[] = [
  {
    src: "/images/svgs/web-development.svg",
    alt: "Web Development",
    title: "Web Development",
    description:
      "Consider as a full-stack developer using Git, NextJS, NuxtJS, NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL, and Rest-API.",
  },
  {
    src: "/images/svgs/software-development.svg",
    alt: "Software Development",
    title: "Software Development",
    description:
      "Provide business app for desktop applications using Tauri, and Mobile applications both iOS & Android using React Native and Ionic.",
  },
  {
    src: "/images/svgs/it-networking.svg",
    alt: "I.T. Networking",
    title: "I.T. Networking",
    description:
      "Handle network topology, network security, microservices, database adminisitrator, computer maintenance, and Local Area Network.",
  },
];
