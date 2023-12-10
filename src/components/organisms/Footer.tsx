import dynamic from "next/dynamic";

const ThemeChanger = dynamic(() => import('./ThemeChanger'), { ssr: false })

const Footer = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center w-full p-3 gap-y-3 md:gap-y-0 bg-accent-7 dark:bg-accent-2">
      <div className="static md:absolute right-auto md:right-3 flex flex-row items-center">
        <ThemeChanger />
      </div>
      <p className="font-light text-xs text-black dark:text-white">
        &copy; {new Date().getFullYear()}, Jerome Villaruel (Veoscript). All
        rights reserved.
      </p>
    </div>
  );
};

export default Footer;
