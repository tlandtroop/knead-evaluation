import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 shadow-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-200 dark:bg-gray-950"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      type="button"
      role="switch"
      aria-checked={isDark}
    >
      <span className="sr-only">Toggle dark mode</span>

      <span
        className={`pointer-events-none flex size-5 items-center justify-center rounded-full bg-white shadow-sm ring-0 transition-transform duration-300 ${
          isDark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        <span
          className={`absolute transition-opacity duration-300 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          <Sun className="size-3.5 text-gray-600" />
        </span>

        <span
          className={`absolute transition-opacity duration-300 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        >
          <Moon className="size-3.5 text-gray-600" />
        </span>
      </span>
    </button>
  );
};

export default DarkModeToggle;
