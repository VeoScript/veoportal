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
  { value: "yellow", label: "Yellow", color: "#eab308" },
  { value: "teal", label: "Teal", color: "#0f766e" },
  { value: "red", label: "Red", color: "#b91c1c" },
  { value: "pink", label: "Pink", color: "#be123c" },
] as const;

const AppearanceControls = (): JSX.Element => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { accent, setAccent } = useAccentTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="fixed bottom-5 right-5 z-50">
      <button
        type="button"
        aria-label="Appearance settings"
        aria-expanded={isOpen}
        aria-controls="appearance-settings-panel"
        title="Appearance settings"
        onClick={() => setIsOpen((open) => !open)}
        className="grid h-12 w-12 place-items-center rounded-full border border-neutral-200 bg-default-white text-default-black shadow-lg transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-default-dim-black dark:text-default-white dark:hover:bg-neutral-800"
      >
        {currentMode === "dark" ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div
          id="appearance-settings-panel"
          className="absolute bottom-full right-0 mb-3 w-[min(20rem,calc(100vw-2.5rem))] rounded-md border border-neutral-200 bg-default-white p-3 shadow-lg dark:border-neutral-700 dark:bg-default-dim-black"
        >
          <div className="flex flex-col gap-3">
            <div
              role="group"
              aria-label="Accent color"
              className="flex items-center justify-between gap-1"
            >
              {accentSwatches.map((swatch) => (
                <button
                  key={swatch.value}
                  type="button"
                  aria-label={`${swatch.label} accent color`}
                  aria-pressed={accent === swatch.value}
                  title={`${swatch.label} accent`}
                  onClick={() => {
                    setAccent(swatch.value);
                    setIsOpen(false);
                  }}
                  className={`grid h-8 w-8 place-items-center rounded-md border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 ${
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
            <span aria-hidden="true" className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
            <div role="group" aria-label="Color mode" className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Light mode"
                aria-pressed={isMounted && theme === "light"}
                title="Light mode"
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className={`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 ${
                  isMounted && theme === "light"
                    ? "bg-neutral-100 text-default-black dark:bg-neutral-800 dark:text-default-white"
                    : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                }`}
              >
                <SunIcon className="h-4 w-4" />
                <span>Light</span>
              </button>
              <button
                type="button"
                aria-label="Dark mode"
                aria-pressed={isMounted && theme === "dark"}
                title="Dark mode"
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className={`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 ${
                  isMounted && theme === "dark"
                    ? "bg-neutral-100 text-default-black dark:bg-neutral-800 dark:text-default-white"
                    : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                }`}
              >
                <MoonIcon className="h-4 w-4" />
                <span>Dark</span>
              </button>
              <button
                type="button"
                aria-label="Use system color mode"
                aria-pressed={isMounted && theme === "system"}
                title="Use system color mode"
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className={`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent focus-visible:ring-offset-2 ${
                  isMounted && theme === "system"
                    ? "bg-neutral-100 text-default-black dark:bg-neutral-800 dark:text-default-white"
                    : "text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                }`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path d="M8 21h8m-4-4v4" />
                </svg>
                <span>System</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppearanceControls;
