import { useEffect, useState } from "react";

export const useLazyLoadOnScroll = (): boolean => {
  const [isLazyLoad, setIsLazyLoad] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsLazyLoad(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLazyLoad, setIsLazyLoad]);

  return isLazyLoad;
};
