"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 1. Initialize logic (Check LocalStorage or System Preference)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 2. Toggle Logic
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Toggle the class on the HTML tag
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    // Save preference
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-md border border-secondary/20 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all shadow-sm active:scale-95"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-0" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-500 -rotate-12" />
      )}
    </button>
  );
}