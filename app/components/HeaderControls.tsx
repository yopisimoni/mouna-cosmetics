"use client";

import { useEffect, useState } from "react";
import { LanguageCode, languages, useI18n } from "./i18n";

type Theme = "light" | "dark";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("mouna-theme");
  return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
}

export function HeaderControls() {
  const { dictionary, language, selectedLanguage, setLanguage } = useI18n();
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("mouna-theme", theme);
  }, [theme]);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as LanguageCode);
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex items-center gap-1.5" suppressHydrationWarning>
      <label className="sr-only" htmlFor="mouna-language">
        {dictionary.common.language}
      </label>
      <div className="flex items-center border border-stone-200 bg-white px-2 py-1 text-stone-500">
        <span className="mr-1 text-[0.5rem] uppercase tracking-[0.16em] text-stone-400">
          {selectedLanguage.shortLabel}
        </span>
        <select
          id="mouna-language"
          value={language}
          onChange={(event) => handleLanguageChange(event.target.value)}
          className="max-w-16 bg-transparent text-[0.55rem] uppercase tracking-[0.1em] outline-none cursor-pointer"
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
        className="border border-stone-200 bg-white px-2 py-1 text-[0.55rem] uppercase tracking-[0.14em] text-stone-500 hover:border-stone-400 hover:text-stone-900 transition-colors duration-300"
      >
        {theme === "dark" ? dictionary.common.dark : dictionary.common.light}
      </button>
    </div>
  );
}
