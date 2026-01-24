import type { Metadata } from "next";
import { Inter , Roboto_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { config } from "@/portfolio.config";
import AgeTicker from "@/components/AgeTicker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono= Roboto_Mono({
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
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-background text-foreground overflow-hidden h-screen flex flex-col`}
      >
{/* TOP HUD (Nation Stats & Date) */}
        <header className="fixed top-0 left-0 right-0 h-14 border-b border-border bg-background/95 backdrop-blur z-50 flex items-center justify-between px-4 sm:px-8">
          
          {/* Top Left: Socials (Nation Stats) */}
          <div className="flex items-center gap-4">
            {config.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors group"
              >
                <social.icon className="w-4 h-4" />
                <span className="hidden sm:block group-hover:underline decoration-primary/50 underline-offset-4">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Top Right: Age Ticker (Date) */}
          <div className="font-mono text-sm tracking-wider text-primary">
            {/* We will make this live in the next step, for now just static placeholder */}
            <span className="opacity-80">AGE: </span>
            <AgeTicker/>
          </div>
        </header>

        {/* MAIN VIEWPORT (The Map) */}
        <main className="flex-1 mt-14 mb-16 scroll-smooth">
          {children}
        </main>

        {/* BOTTOM HUD (Map Modes) */}
        <footer className="fixed bottom-0 left-0 right-0 h-14 border-t border-border bg-background/95 backdrop-blur z-50 flex items-center justify-center gap-2 sm:gap-8">
          {config.routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="px-6 py-2 rounded-md text-sm font-medium transition-all hover:bg-secondary/10 hover:text-primary border border-transparent hover:border-secondary/20"
            >
              {route.label.toUpperCase()}
            </Link>
          ))}
        </footer>
      </body>
    </html>
  );
}