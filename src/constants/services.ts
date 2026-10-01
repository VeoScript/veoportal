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
    alt: "Backend Development",
    title: "Backend Development",
    description:
      "Experienced as a full-stack developer working with Git, Next.js, Nuxt.js, NestJS, Prisma, PostgreSQL, MySQL, MSSQL, PlanetScale, GraphQL, and REST APIs, with hands-on experience using Docker, Redis, AWS Lambda, and Cloudflare Workers for containerization, caching, serverless computing, and edge-based application development.",
  },
  {
    src: "/images/services/software-development.png",
    srcDark: "/images/services/software-development.png",
    alt: "Mobile, Desktop, and Web Development",
    title: "Mobile, Desktop, and Web Development",
    description:
      "Developed and maintained cross-platform and native applications for desktop, iOS, and Android using Tauri, Expo React Native, Flutter, Swift, and Kotlin. Built business applications with a focus on performance, scalability, usability, and platform-specific capabilities, delivering reliable solutions across multiple operating systems and devices.",
  },
  {
    src: "/images/services/it-networking.png",
    srcDark: "/images/services/it-networking.png",
    alt: "I.T. Networking",
    title: "I.T. Networking",
    description:
      "Configured and maintained network infrastructure, LAN environments, network topology, security, and connectivity. Performed network troubleshooting, hardware and software maintenance, system administration, and technical support to ensure stable, secure, and reliable IT operations.",
  },
];
