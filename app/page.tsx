import HeroTitle from "@/components/HeroTitle";
import TimelineSystem from "@/components/TimelineSystem";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* HERO SECTION */}
      <section className="h-screen w-full flex flex-col items-center justify-center snap-start relative px-6">
        
        {/* 1. The Title Island (Loads fast, animates smoothly) */}
        <HeroTitle/>

        {/* Simple scroll hint */}
        <div className="absolute bottom-24 flex flex-col items-center gap-2 text-secondary/50 animate-bounce">
          <span className="text-xs font-mono tracking-widest uppercase">Start</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* TIMELINE SECTION - Loaded as a component */}
      <TimelineSystem />
      
    </div>
  );
}