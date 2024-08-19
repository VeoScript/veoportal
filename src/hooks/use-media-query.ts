import { useState, useEffect } from "react";

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  _2xl = 1536,
}

export const useMediaQuery = (query: Breakpoints): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(`(min-width: ${query}px)`);

      const handleMediaChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", handleMediaChange);

      return () => {
        mediaQueryList.removeEventListener("change", handleMediaChange);
      };
    }
  }, [query]);

  return matches;
};
