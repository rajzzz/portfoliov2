import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { config } from "@/portfolio.config";
import AgeTicker from "@/components/AgeTicker";
import { User, Sun } from "lucide-react"
import ThemeToggle from "@/components/ThemeToggle";
import BottomNav from "@/components/BottomNav";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Singh",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {/* --- UI LAYER: TOP LEFT (The Ruler) --- */}
        <div className="fixed top-4 left-4 z-50 flex items-center">
          {/* 1. THE PORTRAIT (Circular Space) */}
          <div className="relative z-20 w-18 h-18 rounded-full border-4 border-background bg-secondary/10 flex items-center justify-center overflow-hidden shadow-xl ring-1 ring-secondary/20 group cursor-pointer hover:ring-primary transition-all">
            {/* Placeholder Image or Icon */}
            {/* If you have an image, replace <User /> with <img src="/me.jpg" className="object-cover w-full h-full" /> */}
            <img
              src={config.avatar}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Online Status Dot */}
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
          </div>

          {/* 2. THE STATS BAR (Connected to portrait) */}
          {/* -ml-4 pulls it behind the portrait for the layered look */}
          <div className="-ml-6 pl-8 pr-6 py-2 h-12 bg-background/80 backdrop-blur-md border border-secondary/20 rounded-r-full shadow-sm flex items-center gap-4">
            {config.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* --- UI LAYER: TOP RIGHT (The Date) --- */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
          {/* THE AGE COUNTER BAR */}
          <div className="hidden sm:block px-6 py-2 bg-background/80 backdrop-blur-md border border-secondary/20 rounded-full shadow-sm">
            <AgeTicker />
          </div>

          {/* THEME TOGGLE / SETTINGS BUTTON (Circular) */}
          <ThemeToggle />
        </div>

        {/* --- MAIN CONTENT LAYER --- */}
        {/* Added top padding so content doesn't start underneath the UI bars */}
        <main className="flex-1 pb-20">
          {children}
        </main>

        {/* --- UI LAYER: BOTTOM (Map Modes) --- */}
        <BottomNav />
      </body>
    </html>
  );
}