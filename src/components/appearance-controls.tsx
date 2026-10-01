"use client";

import { useTheme } from "next-themes";
import type { JSX } from "react";
import { useEffect, useState } from "react";

import { useAccentTheme } from "~/hooks/use-accent-theme";
import { MoonIcon, SunIcon } from "~/utils/icons";

const accentSwatches = [
  { value: "purple", label: "Purple", color: "#7c3aed" },
  { value: "green", label: "Green", color: "#059669" },
  { value: "orange", label: "Orange", color: "#ea580c" },
  { value: "blue", label: "Blue", color: "#2563eb" },
] as const;

const AppearanceControls = (): JSX.Element => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { accent, setAccent } = useAccentTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Theme preference is browser-only; render neutral mode controls until hydration completes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const currentMode = isMounted
    ? theme === "system" || !theme
      ? resolvedTheme
      : theme
    : undefined;

  return (
    <div
      role="group"
      aria-label="Appearance settings"
      className="flex items-center gap-2 rounded-md border border-neutral-200 bg-default-white p-1.5 dark:border-neutral-700 dark:bg-default-dim-black"
    >
      <div role="group" aria-label="Accent color" className="flex items-center gap-1">
        {accentSwatches.map((swatch) => (
          <button
            key={swatch.value}
            type="button"
            aria-label={`${swatch.label} accent color`}
            aria-pressed={accent === swatch.value}
            title={`${swatch.label} accent`}
            onClick={() => setAccent(swatch.value)}
            className={`focus-visible:ring-theme-accent grid h-8 w-8 place-items-center rounded-md border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              accent === swatch.value
                ? "border-neutral-400 bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-800"
                : "border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-4 w-4 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: swatch.color }}
            />
          </button>
        ))}
      </div>
      <span aria-hidden="true" className="h-5 w-px bg-neutral-200 dark:bg-neutral-700" />
      <div role="group" aria-label="Color mode" className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Light mode"
          aria-pressed={currentMode === "light"}
          title="Light mode"
          onClick={() => setTheme("light")}
          className={`focus-visible:ring-theme-accent flex h-8 w-8 items-center justify-center rounded-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            currentMode === "light"
              ? "bg-neutral-100 text-default-black dark:bg-neutral-800 dark:text-default-white"
              : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          <SunIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Dark mode"
          aria-pressed={currentMode === "dark"}
          title="Dark mode"
          onClick={() => setTheme("dark")}
          className={`focus-visible:ring-theme-accent flex h-8 w-8 items-center justify-center rounded-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            currentMode === "dark"
              ? "bg-neutral-100 text-default-black dark:bg-neutral-800 dark:text-default-white"
              : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          }`}
        >
          <MoonIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AppearanceControls;
