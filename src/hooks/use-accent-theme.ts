"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export const ACCENT_COLORS = ["green", "purple", "orange", "blue", "yellow"] as const;
export type AccentColor = (typeof ACCENT_COLORS)[number];

const STORAGE_KEY = "veoportal-accent-color";
const subscribers = new Set<() => void>();

const isAccentColor = (value: string | null): value is AccentColor =>
  ACCENT_COLORS.some((accent) => accent === value);

const getSnapshot = (): AccentColor => {
  const storedAccent = window.localStorage.getItem(STORAGE_KEY);
  return isAccentColor(storedAccent) ? storedAccent : "green";
};

const getServerSnapshot = (): AccentColor => "green";

const subscribe = (onChange: () => void) => {
  subscribers.add(onChange);
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) onChange();
  };
  window.addEventListener("storage", handleStorage);

  return () => {
    subscribers.delete(onChange);
    window.removeEventListener("storage", handleStorage);
  };
};

export const useAccentTheme = () => {
  const accent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setAccent = useCallback((nextAccent: AccentColor) => {
    window.localStorage.setItem(STORAGE_KEY, nextAccent);
    document.documentElement.dataset.accent = nextAccent;
    subscribers.forEach((subscriber) => subscriber());
  }, []);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  return { accent, setAccent };
};
