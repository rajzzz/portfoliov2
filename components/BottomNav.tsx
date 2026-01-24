"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "@/portfolio.config";
import { clsx } from "clsx"; // Standard utility in Next.js for conditional classes
import "./BottomNav.css";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1 bg-background/80 backdrop-blur-md border border-foreground rounded-full">
        {config.routes.map((route) => {
          const isActive = pathname === route.path;
          
          return (
            <Link
              key={route.path}
              href={route.path}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-medium transition-all border border-transparent relative",
                isActive 
                  ? "bg-background text-primary active-nav-item" // Active State
                  : "text-secondary hover:bg-foreground/10 hover:text-secondary"   // Inactive State
              )}
            >
              {route.label.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}