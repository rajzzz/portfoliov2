"use client";

import { motion } from "framer-motion";
import { Dumbbell, Code2, Flame, Music, Terminal } from "lucide-react";
import StatCard from "@/components/StatCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-6 pt-24 pb-32 max-w-5xl mx-auto">
      
      {/* 1. NEW BIO SECTION (Less Roleplay, More "Systems") */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-secondary/20 pb-12"
      >
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold">
            The System Architecture
          </h1>
          <div className="text-lg text-secondary leading-relaxed space-y-4">
            <p>
              I view life as a series of optimization problems. Whether it's refactoring 
              a backend microservice, hitting a PR in the gym, or maintaining a language streak, 
              I apply the same iterative mindset: <span className="text-primary font-semibold">Consistency over Intensity.</span>
            </p>
            <p>
              My background in <span className="text-primary font-semibold">Computer Science</span> drives 
              my professional work, but my curiosity spills over into music production, 
              linguistics, and physical training. I don't just build software; I build systems for living.
            </p>
          </div>
        </div>
        
        {/* Quick Tech Stack Pill List */}
        <div className="space-y-4">
          <h3 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Core Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "FastAPI", "Python", "Linux", "Neovim", "Docker"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-md text-sm text-secondary hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>


      {/* 2. LIVE TELEMETRY GRID (The Fun Stuff) */}
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-primary" /> ACTIVE PROTOCOLS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* --- GYM WIDGET (Placeholder for Hevy API) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <StatCard 
            title="Fitness" 
            icon={Dumbbell} 
            value="Bench: 80kg" 
            subtext="Last Session: Yesterday"
          >
            {/* Visual: Simulated Volume Chart */}
            <div className="flex items-end gap-1 w-full h-full pb-2 px-2">
              {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/20 hover:bg-primary rounded-t-sm transition-all duration-300" style={{ height: `${h}%` }} />
              ))}
            </div>
          </StatCard>
        </motion.div>

        {/* --- LEETCODE WIDGET (Placeholder for LeetCode API) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <StatCard 
            title="LeetCode" 
            icon={Code2} 
            value="Solved: 450" 
            subtext="Top 15% (Contest)"
            color="text-yellow-500" // Leetcode Yellow
          >
            {/* Visual: Simulated Progress Ring */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-secondary/10" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="175" strokeDashoffset="40" className="text-yellow-500" />
              </svg>
              <span className="absolute text-xs font-bold text-yellow-500">Hard</span>
            </div>
          </StatCard>
        </motion.div>

        {/* --- DUOLINGO WIDGET (Placeholder for Duolingo API) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <StatCard 
            title="Duolingo" 
            icon={Flame} 
            value="42 Day Streak" 
            subtext="Learning: Japanese"
            color="text-orange-500" // Fire Orange
          >
            {/* Visual: Fire Animation */}
            <div className="flex items-center justify-center h-full">
               <Flame className="w-12 h-12 text-orange-500 animate-bounce" fill="currentColor" />
            </div>
          </StatCard>
        </motion.div>

        {/* --- MUSIC WIDGET (Placeholder for Soundcloud/Spotify) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <StatCard 
            title="Production" 
            icon={Music} 
            value="Ableton Live" 
            subtext="Working on: Hyperpop V2"
            color="text-purple-500"
          >
            {/* Visual: CSS Audio Waveform */}
            <div className="flex items-center justify-center gap-1 h-full">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-2 bg-purple-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]" 
                  style={{ 
                    height: '60%', 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.8s' 
                  }} 
                />
              ))}
            </div>
          </StatCard>
        </motion.div>

      </div>
    </div>
  );
}