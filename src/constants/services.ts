export type ServicesList = {
  src: string;
  srcDark?: string;
  alt: string;
  title: string;
  description: string;
};

export const services: ServicesList[] = [
  {
    src: "/images/services/web-development.png",
    srcDark: "/images/services/web-development.png",
    alt: "Web Development",
    title: "Web Development",
    description:
      "Consider as a full-stack developer using Git, NextJS, NuxtJS, NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL, and Rest-API.",
  },
  {
    src: "/images/services/software-development.png",
    srcDark: "/images/services/software-development.png",
    alt: "Software Development",
    title: "Software Development",
    description:
      "Provide business app for desktop applications using Tauri, and Mobile applications both iOS & Android using React Native and Ionic.",
  },
  {
    src: "/images/services/it-networking.png",
    srcDark: "/images/services/it-networking.png",
    alt: "I.T. Networking",
    title: "I.T. Networking",
    description:
      "Manage network topology, network security, microservices, database administration, computer maintenance, and Local Area Network (LAN) operations.",
  },
];
