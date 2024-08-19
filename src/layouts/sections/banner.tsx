import AboutMe from "~/components/about-me";
import Navigations from "~/components/navigations";

const Banner = (): JSX.Element => {
  return (
    <section className="z-20 flex h-full w-full flex-col items-center rounded-b-[7rem] border-b border-neutral-200 bg-default-ghost-white px-3 py-[3rem] md:h-screen md:px-[5rem]">
      <Navigations />
      <AboutMe />
    </section>
  );
};

export default Banner;
