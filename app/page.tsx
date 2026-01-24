"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { config } from "../portfolio.config"; 

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. RESTORED: The Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 100%"],
  });

  // 2. RESTORED: The Glow Logic (0% to 100% height)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col items-center w-full">
      
      {/* HERO SECTION */}
      <section className="h-screen w-full flex flex-col items-center justify-center snap-start relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl sm:text-9xl font-bold tracking-tight mb-6">
            Hello.
          </h1>
          <p className="text-xl sm:text-2xl text-secondary max-w-lg mx-auto leading-relaxed">
            I build systems. <br />
            <span className="text-primary">Full-stack developer</span> & <span className="text-primary">Cybersecurity enthusiast</span>.
          </p>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 flex flex-col items-center gap-2 text-secondary/50 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-mono tracking-widest uppercase">Start</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* TIMELINE SECTION */}
      <div 
        id="timeline" 
        ref={containerRef} // IMPORTANT: The spy is attached here
        className="w-full max-w-3xl px-6 snap-start pt-20"
      >
        <div className="relative w-full ml-4 sm:ml-8 pb-32">
          
          {/* --- THE LINES --- */}
          
          {/* 1. STATIC TRACK (Always visible, dark grey) */}
          {/* Centered at left-3 (12px). Width 4px. */}
          <div className="absolute left-3 top-4 bottom-0 w-1 bg-(--foreground) rounded-full" />

          {/* 2. DYNAMIC GLOW (Fills on scroll) */}
          {/* Same position, lays ON TOP of the static track */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-3 top-4 bottom-0 w-1 bg-foreground shadow-[0_0_20px_var(--primary)] rounded-full"
          />

          {/* --- THE ITEMS --- */}
          <div className="flex flex-col gap-24 py-4">
            {config.timeline.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="relative pl-16 group" // pl-16 gives space for the line
              >
                
                {/* THE DOT (Absolute positioned to align with line) */}
                {/* left-0 aligns it with the container edge. 
                    The line is at left-3 (12px).
                    This dot is w-7 (28px). Center is 14px.
                    It sits almost perfectly over the line. */}
                <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-4 border-background bg-(--primary) group-hover:bg-secondary group-hover:scale-125 transition-all duration-300 z-20 shadow-sm">
                  {/* Inner glow for extra detail */}
                  <div className="w-full h-full rounded-full opacity-0 group-hover:opacity-100 bg-primary shadow-[0_0_15px_var(--primary)] transition-opacity duration-300" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col">
                  <span className="font-mono text-sm text-primary mb-2 font-bold tracking-wider">
                    {item.date.toUpperCase()}
                  </span>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-lg leading-relaxed mb-4 max-w-lg">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 text-xs border border-secondary/20 rounded-full text-secondary/80 bg-secondary/5 group-hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}