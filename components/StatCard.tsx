import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  icon: LucideIcon;
  value: string;
  subtext: string;
  children?: ReactNode; // For graphs, charts, or extra visuals
  color?: string; // Optional override for icon color
}

export default function StatCard({ title, icon: Icon, value, subtext, children, color }: StatCardProps) {
  return (
    <div className="group relative p-5 rounded-2xl bg-secondary/5 border border-secondary/10 overflow-hidden transition-all hover:border-primary/50 hover:bg-secondary/10">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className={`p-2 rounded-lg bg-background/50 border border-secondary/10 ${color ? color : "text-primary"}`}>
          <Icon className="w-5 h-5" />
        </div>
        
        {/* The Value (Big Number) */}
        <div className="text-right">
          <div className="text-2xl font-bold font-mono tracking-tight group-hover:text-primary transition-colors">
            {value}
          </div>
          <div className="text-xs text-secondary uppercase tracking-widest">
            {title}
          </div>
        </div>
      </div>

      {/* Dynamic Content (Charts/Bars) */}
      <div className="relative h-24 w-full mt-3 rounded-lg bg-background/30 border border-secondary/5 overflow-hidden flex items-end justify-center p-2">
        {children}
      </div>

      {/* Footer / Subtext */}
      <div className="mt-3 pt-3 border-t border-secondary/10 flex justify-between items-center">
        <span className="text-xs text-secondary font-medium">
          {subtext}
        </span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
    </div>
  );
}