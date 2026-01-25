"use client";

import { motion } from "framer-motion";
import { Dumbbell, Code2, Flame, Music, Terminal } from "lucide-react";
import StatCard from "@/components/StatCard";
import { StravaStats, LeetCodeStats, DuolingoStats } from "@/lib/fetchers";

interface AboutClientProps {
  strava: StravaStats | null;
  leetcode: LeetCodeStats | null;
  duolingo: DuolingoStats | null;
}

export default function AboutClient({ strava, leetcode, duolingo }: AboutClientProps) {
  
  // Calculate max volume for Strava chart scaling
  const maxVolume = strava ? Math.max(...strava.chartData, 1) : 100;

  return (
    <div className="min-h-screen w-full px-6 pt-24 pb-32 max-w-5xl mx-auto">
      
      {/* 1. NEW BIO SECTION */}
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


      {/* 2. LIVE TELEMETRY GRID */}
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-primary" />  Activities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* --- STRAVA WIDGET --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="h-full">
          <StatCard 
            title="Fitness" 
            icon={Dumbbell} 
            value={strava ? strava.weeklyVolume : "Loading..."} 
            subtext={strava ? strava.lastActivity : "Syncing..."}
          >
            {/* Visual: Actual Volume Chart */}
            <div className="flex flex-col w-full h-full px-2 pb-1">
              {/* Bars */}
              <div className="flex-1 flex items-end gap-1 border-b border-secondary/10 pb-1">
                {strava ? (
                  strava.chartData.map((val, i) => {
                    const pct = (val / maxVolume) * 100;
                    const isActive = val > 0;
                    return (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-t-sm transition-all duration-300 ${isActive ? 'bg-emerald-500' : 'bg-secondary/20'}`}
                      style={{ height: `${Math.max(pct, 15)}%` }}
                      title={`${val} mins`}
                    />
                    );
                  })
                ) : (
                  // Skeleton
                  [40, 60, 45, 70, 50, 30, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-secondary/10 rounded-t-sm animate-pulse" style={{ height: `${h}%` }} />
                  ))
                )}
              </div>
              
              {/* Day Labels */}
              <div className="flex justify-between px-0.5 pt-1">
                {Array(7).fill(0).map((_, i) => {
                  // Calculate day letter (Today is index 6)
                  const d = new Date();
                  d.setDate(d.getDate() - (6 - i));
                  const letter = d.toLocaleDateString("en-US", { weekday: "narrow" });
                  return (
                    <span key={i} className="text-[9px] text-secondary font-mono w-full text-center">
                      {letter}
                    </span>
                  );
                })}
              </div>
            </div>
          </StatCard>
        </motion.div>

        {/* --- LEETCODE WIDGET --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-full">
          <StatCard 
            title="LeetCode" 
            icon={Code2} 
            value={leetcode ? `Solved: ${leetcode.solved}` : "Loading..."} 
            subtext={leetcode ? leetcode.ranking : "Fetching..."}
            color="text-yellow-500"
          >
            {/* Visual: Difficulty Stack */}
            <div className="flex flex-col gap-1 w-full h-full justify-center px-2">
              <div className="flex items-center gap-2 text-[10px] text-secondary">
                <span className="w-8">Easy</span>
                <div className="flex-1 h-1.5 bg-secondary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500/80" style={{ width: leetcode ? `${(leetcode.easy / (leetcode.solved || 1)) * 100}%` : '0%' }} />
                </div>
                <span className="font-mono text-foreground">{leetcode ? leetcode.easy : "-"}</span>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] text-secondary">
                <span className="w-8">Med</span>
                <div className="flex-1 h-1.5 bg-secondary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500/80" style={{ width: leetcode ? `${(leetcode.medium / (leetcode.solved || 1)) * 100}%` : '0%' }} />
                </div>
                <span className="font-mono text-foreground">{leetcode ? leetcode.medium : "-"}</span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-secondary">
                <span className="w-8">Hard</span>
                <div className="flex-1 h-1.5 bg-secondary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500/80" style={{ width: leetcode ? `${(leetcode.hard / (leetcode.solved || 1)) * 100}%` : '0%' }} />
                </div>
                <span className="font-mono text-foreground">{leetcode ? leetcode.hard : "-"}</span>
              </div>
            </div>
          </StatCard>
        </motion.div>

        {/* --- DUOLINGO WIDGET --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="h-full">
          <StatCard 
            title="Duolingo" 
            icon={Flame} 
            value={duolingo ? `${duolingo.streak} 🔥` : "Loading..."} 
            subtext={duolingo ? `${duolingo.language}` : "Fetching..."}
            color="text-orange-500"
          >
            <div className="flex items-center justify-center h-full">
               <Flame className="w-12 h-12 text-orange-500 animate-bounce" fill="currentColor" />
            </div>
          </StatCard>
        </motion.div>

        {/* --- MUSIC WIDGET (Static) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="h-full">
          <StatCard 
            title="Production" 
            icon={Music} 
            value="Ableton" 
            subtext="Learning..."
            color="text-purple-500"
          >
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
