"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
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
  );
}