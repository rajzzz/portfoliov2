"use client";

import { motion } from "framer-motion";

export default function AboutBio() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-secondary/20 pb-12"
    >
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold">
          About Me
        </h1>
        <div className="text-lg text-secondary leading-relaxed space-y-4">
          <p>
            I am an Engineer. I like to make and break things.
          </p>
          <p>
            Other than <span className="font-semibold">softwares</span> I am very curious about robotics, music, health, history and Geography.
          </p>
        </div>
      </div>
      
      {/* Quick Tech Stack Pill List */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono text-secondary uppercase tracking-widest mb-4">Core Stack</h3>
        <div className="flex flex-wrap gap-2">
          {["FastAPI","Flask", "Next.js", "Python", "Linux", "Bash", "Neovim", "C++"].map((tech) => (
            <span key={tech} className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-md text-sm text-secondary hover:text-primary hover:border-primary/50 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
