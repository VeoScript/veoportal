import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", onChange);

  return () => mediaQuery.removeEventListener("change", onChange);
};

const getSnapshot = (): "light" | "dark" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const getServerSnapshot = (): "light" | "dark" => "light";

export const useTheme = (): "light" | "dark" =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
