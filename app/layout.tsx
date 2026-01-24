import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import RulerProfile from "@/components/RulerProfile";
import DateCommand from "@/components/DateCommand";

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
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col items-center`}
      >
        {/* CLIENT ISLANDS (Render independently) */}
        <RulerProfile />
        <DateCommand />
        
        {/* MAIN CONTENT (Server Rendered where possible) */}
        <main className="flex-1 pb-20">
          {children}
        </main>

        <BottomNav />
      </body>
    </html>
  );
}