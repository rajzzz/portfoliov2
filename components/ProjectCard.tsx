import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image"; // Optimization for images

interface ProjectProps {
  project: {
    name: string;
    description: string;
    tech: string[];
    link: string;
    type: string;
    image?: string; // Optional property
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group relative p-5 rounded-xl border border-secondary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_-10px_var(--primary)] flex flex-col h-full">
      
      {/* 1. GIF/IMAGE AREA */}
      {project.image && (
        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden border border-secondary/10 group-hover:border-primary/20 transition-colors">
          {/* Using Next/Image for optimization */}
          <Image 
            src={project.image} 
            alt={project.name} 
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay gradient so text remains readable if it overlaps */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      )}

      {/* HEADER: Icon + Type */}
      <div className="flex justify-between items-start mb-3">
        <div className="p-2 rounded-lg bg-secondary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
          <Folder className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono text-secondary uppercase tracking-widest border border-secondary/20 px-2 py-1 rounded">
          {project.type}
        </span>
      </div>

      {/* BODY */}
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-secondary/10">
        <div className="flex gap-2 flex-wrap">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] text-secondary/80 bg-secondary/5 px-2 py-1 rounded border border-secondary/10">
              {t}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}