"use client";

import { config } from "@/portfolio.config";
import { motion } from "framer-motion";
import { Cpu, Heart, Music, Terminal, Coffee, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-6 pt-24 pb-32 max-w-4xl mx-auto">
      
      {/* 1. HEADER: The "Ruler" Bio */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b border-secondary/20 pb-10"
      >
        <h1 className="text-4xl font-bold mb-6">
          Nation Overview
        </h1>
        <div className="text-lg text-secondary leading-relaxed space-y-4 max-w-3xl">
          <p>
            I am a 22-year-old developer focused on building systems that last. 
            Currently in my final year of Computer Science Engineering, I specialize in 
            <span className="text-primary font-semibold"> Backend Architecture</span> and 
            <span className="text-primary font-semibold"> Cybersecurity</span>.
          </p>
          <p>
            My philosophy is simple: I am happiest when I am building towards a massive goal 
            or connecting closely with people. I treat discipline like a game mechanic—whether it's 
            optimizing my Neovim config or hitting the gym.
          </p>
        </div>
      </motion.div>

      {/* 2. IDEA GROUPS (Interests & Personality) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* GROUP 1: ADMINISTRATIVE (Lifestyle) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
            <Heart className="w-5 h-5" /> ADMINISTRATIVE IDEAS
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:border-primary/30 transition-colors">
              <div className="pt-1"><Terminal className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="font-bold">Linux Main</h4>
                <p className="text-sm text-secondary mt-1">
                  I live in the terminal. Neovim is my editor of choice. 
                  Efficiency is the priority.
                </p>
              </div>
            </li>
            <li className="flex gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:border-primary/30 transition-colors">
              <div className="pt-1"><Music className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="font-bold">Hindi Hyperpop</h4>
                <p className="text-sm text-secondary mt-1">
                  Exploring the intersection of modern production and traditional sounds. 
                  Currently experimenting with music production.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* GROUP 2: MILITARY (Tech Stack) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
            <Shield className="w-5 h-5" /> MILITARY TECH
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:border-primary/30 transition-colors">
              <div className="pt-1"><Cpu className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="font-bold">Core Stack</h4>
                <p className="text-sm text-secondary mt-1">
                  Python, FastAPI, C++. Building robust backends and scalable architecture.
                </p>
              </div>
            </li>
            <li className="flex gap-4 p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:border-primary/30 transition-colors">
              <div className="pt-1"><Shield className="w-5 h-5 text-secondary" /></div>
              <div>
                <h4 className="font-bold">Security First</h4>
                <p className="text-sm text-secondary mt-1">
                  Cybersecurity enthusiast. Experienced in CTFs, Network Security, 
                  and Ethical Hacking methodologies.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* GROUP 3: DIPLOMATIC (Traits) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
            <Coffee className="w-5 h-5" /> NATIONAL MODIFIERS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10 text-center">
              <div className="text-primary font-mono text-2xl font-bold mb-1">+20%</div>
              <div className="text-sm font-bold">Discipline</div>
              <div className="text-xs text-secondary mt-2">Active Bodybuilder & Fitness enthusiast.</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10 text-center">
              <div className="text-red-500 font-mono text-2xl font-bold mb-1">-100%</div>
              <div className="text-sm font-bold">Caffeine Tolerance</div>
              <div className="text-xs text-secondary mt-2">I avoid caffeine due to anxiety. Natural energy only.</div>
            </div>
            <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10 text-center">
              <div className="text-primary font-mono text-2xl font-bold mb-1">MAX</div>
              <div className="text-sm font-bold">Connection</div>
              <div className="text-xs text-secondary mt-2">Happiest when building deep connections with people.</div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}