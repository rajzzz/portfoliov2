"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { config } from "@/portfolio.config";
import { clamp } from "date-fns";

export default function TimelineSystem() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"],
    });

    // Smooth scroll on iOS/Safari
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const lineScale = useTransform(smoothProgress, [0, 1], [0, 1],
        {clamp: true}
    );
    const timelineData = [...config.timeline].reverse();

    return (

        <div
            id="timeline"
            ref={containerRef} // IMPORTANT: The spy is attached here
            className="w-full max-w-3xl px-6 snap-start pt-20"
            style={{
                WebkitOverflowScrolling: 'touch',
                transform: 'translateZ(0)'
            }}
        >
            <div className="relative w-full ml-4 sm:ml-8 pb-32">

                {/* --- THE LINES --- */}

                {/* 2. DYNAMIC GLOW (Fills on scroll) */}
                {/* Same position, lays ON TOP of the static track */}
                <motion.div
                    style={{ scaleY: lineScale,
                        transformOrigin: "top"
                    }}
                    className="absolute left-3 top-4 bottom-0 w-1 bg-(--foreground) shadow-[0_0_20px_var(--primary)] rounded-full"
                    initial={{backfaceVisibility: "hidden"}}
                />

                {/* --- THE ITEMS --- */}
                <div className="flex flex-col gap-24 py-4">
                    {timelineData.map((item) => (
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
                            <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-4 border-background bg-(--foreground) group-hover:bg-secondary group-hover:scale-125 transition-all duration-300 z-20 shadow-sm">
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

    );
}