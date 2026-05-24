"use client";

import { useEffect, useSyncExternalStore } from "react";
import { LanguageCode, languages, useI18n } from "./i18n";

type Theme = "light" | "dark";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("mouna-theme");
  return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
}

function subscribeToThemeChange(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("mouna-theme-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("mouna-theme-change", callback);
  };
}

function getThemeServerSnapshot(): Theme {
  return "light";
}

function setStoredTheme(theme: Theme) {
  window.localStorage.setItem("mouna-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new Event("mouna-theme-change"));
}

export function HeaderControls() {
  const { dictionary, language, selectedLanguage, setLanguage } = useI18n();
  const theme = useSyncExternalStore(
    subscribeToThemeChange,
    getStoredTheme,
    getThemeServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as LanguageCode);
  };

  const handleThemeToggle = () => {
    setStoredTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-3" suppressHydrationWarning>
      <label className="sr-only" htmlFor="mouna-language">
        {dictionary.common.language}
      </label>
      <div className="flex items-center border border-stone-300 bg-white/70 px-3 py-2 text-stone-700">
        <span className="mr-2 text-[0.65rem] uppercase tracking-[0.2em] text-stone-500">
          {selectedLanguage.shortLabel}
        </span>
        <select
          id="mouna-language"
          value={language}
          onChange={(event) => handleLanguageChange(event.target.value)}
          className="bg-transparent text-xs uppercase tracking-[0.14em] outline-none"
          aria-label={dictionary.common.language}
        >
          {languages.map((item) => (
            <option key={item.code} value={item.code}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        onClick={handleThemeToggle}
        aria-pressed={theme === "dark"}
        className="border border-stone-300 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-stone-700 hover:border-stone-900 hover:text-stone-900 transition-colors duration-300"
      >
        {theme === "dark" ? dictionary.common.dark : dictionary.common.light}
      </button>
    </div>
  );
}
