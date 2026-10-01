import { useCallback, useSyncExternalStore } from "react";

export enum Breakpoints {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  _2xl = 1536,
}

export const useMediaQuery = (query: Breakpoints): boolean => {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mediaQueryList = window.matchMedia(`(min-width: ${query}px)`);
      mediaQueryList.addEventListener("change", onChange);

      return () => mediaQueryList.removeEventListener("change", onChange);
    },
    [query],
  );
  const getSnapshot = useCallback(
    () => window.matchMedia(`(min-width: ${query}px)`).matches,
    [query],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};
