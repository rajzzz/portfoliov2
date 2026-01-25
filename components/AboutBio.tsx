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
