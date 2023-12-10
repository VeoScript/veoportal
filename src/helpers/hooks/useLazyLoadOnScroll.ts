import { useState, useEffect } from 'react'

export const useLazyLoadOnScroll = (): boolean => {  
  const [isLazyLoad, setIsLazyLoad] = useState<boolean>(false);

  const handleScroll = () => {
    setIsLazyLoad(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, [])

  return isLazyLoad;
}
