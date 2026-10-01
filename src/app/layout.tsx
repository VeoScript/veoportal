import type { Metadata } from "next";
import type { JSX, ReactNode } from "react";

import clsx from "clsx";
import { ThemeProvider } from "next-themes";
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
    "I'm Jerome Villaruel officially known as Veoscript, a software engineer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.",
  metadataBase: new URL(
    process.env.NODE_ENV === "development" ? `${process.env.DEV_URL}` : `${process.env.PROD_URL}`,
  ),
  openGraph: {
    type: "website",
    url:
      process.env.NODE_ENV === "development" ? `${process.env.DEV_URL}` : `${process.env.PROD_URL}`,
    title: "Jerome Villaruel",
    description:
      "I'm Jerome Villaruel officially known as Veoscript, a software engineer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.",
    siteName: "Jerome Villaruel",
    images: "/images/jeromevillaruel_v3.webp",
  },
  twitter: {
    title: "Jerome Villaruel",
    description:
      "I'm Jerome Villaruel officially known as Veoscript, a software engineer based in Philippines specializing in React, React Native, NextJS, NestJS, RestAPI, GraphQL, tRPC, Prisma, Supabase, and PlanetScale. I enjoy building dynamic web applications and leveraging these technologies to create robust and scalable solutions. Excited to collaborate on innovative projects and contribute to the world of software development.",
    creator: "Jerome Villaruel (Veoscript)",
    site: "Jerome Villaruel",
    images: "/images/jeromevillaruel_v3.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html
      lang="en"
      className="scroll-smooth motion-reduce:scroll-auto"
      data-scroll-behavior="smooth"
      data-accent="green"
      suppressHydrationWarning
    >
      <body
        className={clsx(
          raleway.variable,
          "overflow-x-hidden bg-default-white font-raleway text-default-black selection:bg-theme-accent-soft dark:bg-default-dim-black dark:text-default-white",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
