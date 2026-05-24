"use client";

import { useEffect, useMemo, useState } from "react";

const languages = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "fr", label: "French", shortLabel: "FR" },
  { code: "ar", label: "Arabic", shortLabel: "AR" },
  { code: "es", label: "Spanish", shortLabel: "ES" },
];

type Theme = "light" | "dark";

// Phase 4 intentionally keeps language selection UI-only. The stored value is
// ready for a later translation pass, but it does not localize page content yet.
function getStoredLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem("mouna-language");
  return storedLanguage && languages.some((item) => item.code === storedLanguage)
    ? storedLanguage
    : "en";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("mouna-theme");
  return storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";
}

export function HeaderControls() {
  const [language, setLanguage] = useState(getStoredLanguage);
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const selectedLanguage = useMemo(
    () => languages.find((item) => item.code === language) ?? languages[0],
    [language],
  );

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    window.localStorage.setItem("mouna-language", value);
  };

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("mouna-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <div className="flex items-center gap-3" suppressHydrationWarning>
      <label className="sr-only" htmlFor="mouna-language">
        Language
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
        {theme === "dark" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
