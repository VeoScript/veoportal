import { useEffect } from 'react';
import { lazyLoadStore } from '../stores';

export const useLazyLoadOnScroll = (): boolean => {
  const { isLazyLoad, setIsLazyLoad } = lazyLoadStore();

  const handleScroll = () => {
    setIsLazyLoad(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  return isLazyLoad;
};
