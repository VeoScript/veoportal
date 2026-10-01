"use client";

import { useTheme as useNextTheme } from "next-themes";

export const useTheme = (): "light" | "dark" => {
  const { resolvedTheme } = useNextTheme();
  return resolvedTheme === "dark" ? "dark" : "light";
};
