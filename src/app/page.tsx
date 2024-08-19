import dynamic from "next/dynamic";

import MainLayout from "~/layouts/main-layout";
import Banner from "~/layouts/sections/banner";

const TechStack = dynamic(() => import("~/layouts/sections/techstack"));
const Services = dynamic(() => import("~/layouts/sections/services"));
const Footer = dynamic(() => import("~/layouts/sections/footer"));

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <Banner />
      <TechStack />
      <Services />
      <Footer />
    </MainLayout>
  );
}
