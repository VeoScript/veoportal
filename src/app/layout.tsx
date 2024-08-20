import type { Metadata } from "next";

import clsx from "clsx";
import { Toaster } from "sonner";

import { Raleway } from "next/font/google";
import "~/styles/globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  preload: true,
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Jerome Villaruel",
  description:
    "I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.",
  metadataBase: new URL(
    process.env.NODE_ENV === "development" ? `${process.env.DEV_URL}` : `${process.env.PROD_URL}`,
  ),
  openGraph: {
    type: "website",
    url:
      process.env.NODE_ENV === "development" ? `${process.env.DEV_URL}` : `${process.env.PROD_URL}`,
    title: "Jerome Villaruel",
    description:
      "I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.",
    siteName: "Jerome Villaruel",
    images: "/images/jeromevillaruel.webp",
  },
  twitter: {
    title: "Jerome Villaruel",
    description:
      "I'm Jerome Villaruel officially known as Veoscript, a software developer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.",
    creator: "Jerome Villaruel (Veoscript)",
    site: "Jerome Villaruel",
    images: "/images/jeromevillaruel.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={clsx(
          raleway.variable,
          "dark:bg-default-dim-black overflow-x-hidden bg-default-white font-raleway text-default-black selection:bg-slate-300 dark:text-default-white",
        )}
      >
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
