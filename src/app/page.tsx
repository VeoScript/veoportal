import dynamic from "next/dynamic";
import type { JSX } from "react";

import MainLayout from "~/layouts/main-layout";
import Banner from "~/layouts/sections/banner";

const TechStack = dynamic(() => import("~/layouts/sections/techstack"));
const Services = dynamic(() => import("~/layouts/sections/services"));
const ProjectsSection = dynamic(() => import("~/layouts/sections/projects"));
const Footer = dynamic(() => import("~/layouts/sections/footer"));

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <Banner />
      <TechStack />
      <Services />
      <ProjectsSection />
      <Footer />
    </MainLayout>
  );
}
