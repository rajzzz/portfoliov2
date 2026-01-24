"use client";

import AgeTicker from "./AgeTicker";
import ThemeToggle from "./ThemeToggle";

export default function DateCommand() {
  return (
    <div className="fixed top-4 right-4 z-50 mt-2  flex items-center gap-2">
      <div className="hidden sm:block px-6  py-2 bg-background/90 backdrop-blur-md border border-secondary/20 rounded-full shadow-sm">
        <AgeTicker />
      </div>
      <ThemeToggle />
    </div>
  );
}