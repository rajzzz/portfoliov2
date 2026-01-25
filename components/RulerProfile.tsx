"use client";

import Image from "next/image";
import { config } from "@/portfolio.config";

export default function RulerProfile() {
  return (
    <div className="fixed top-4 left-4 z-50 flex items-center">
      
      {/* 1. THE PORTRAIT */}
      {/* REMOVED: bg-secondary/10 (The white dots cause) */}
      <div className="relative z-20 w-16 h-16 rounded-full overflow-hidden shadow-xl ring-4 ring-secondary/20 ring-offset-background group cursor-pointer hover:ring-primary transition-all">
        
        {/* OPTIMIZED IMAGE: Loads instantly, no blur/dots */}
        <Image 
          src={config.avatar} 
          alt="Profile" 
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="64px"
        />
        
        {/* Status Dot */}
      </div>

        <div className="relative bottom-[-28] ml-[-20] w-4 h-4 bg-green-500 border-[3px] border-background rounded-full z-30" />

      {/* 2. THE STATS BAR */}
      <div className="-ml-4 pl-8 pr-6 py-2 h-12 bg-background/90 backdrop-blur-sm border border-secondary/20 rounded-r-full shadow-sm flex items-center gap-4">
         {config.socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors"
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}