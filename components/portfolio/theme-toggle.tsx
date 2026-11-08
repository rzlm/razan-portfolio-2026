"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

const THEME_EVENT = "portfolio-theme-change";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("theme");
  return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

export function toggleTheme() {
  const nextTheme = getStoredTheme() === "dark" ? "light" : "dark";

  document.documentElement.classList.toggle("dark", nextTheme === "dark");
  window.localStorage.setItem("theme", nextTheme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, () => "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const Icon = theme === "dark" ? Sun : Moon;
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
