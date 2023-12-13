import { useEffect } from 'react';
import { lazyLoadStore } from '../stores';

export const useLazyLoadOnScroll = (): boolean => {
  const { isLazyLoad, setIsLazyLoad } = lazyLoadStore();

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
