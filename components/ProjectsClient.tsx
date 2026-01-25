"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export interface Project {
  name: string;
  description: string;
  tech: string[];
  link: string;
  type: string;
  image?: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <div className="min-h-screen w-full px-6 pt-24 pb-32 max-w-5xl mx-auto">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Active Projects
        </h1>
        <p className="text-secondary max-w-lg">
          Current development initiatives and deployed systems.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
