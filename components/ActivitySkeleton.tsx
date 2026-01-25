import Image from "next/image";
import { Terminal, Dumbbell, Code2, Music } from "lucide-react";
import StatCard from "@/components/StatCard";

// Custom Owl Icon using local asset
const OwlIcon = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <Image 
      src="/duo.svg" 
      alt="Duolingo Owl" 
      fill 
      className="object-contain" 
    />
  </div>
);

export default function ActivitySkeleton() {
  return (
    <>
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-primary" />  Activities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Fitness Skeleton */}
        <div className="h-full">
          <StatCard title="Fitness" icon={Dumbbell} value="..." subtext="Loading...">
             <div className="flex flex-col w-full h-full px-2 pb-1 animate-pulse">
               <div className="flex-1 flex items-end gap-1 border-b border-secondary/10 pb-1">
                 {Array(7).fill(0).map((_, i) => (
                    <div key={i} className="flex-1 bg-secondary/10 rounded-t-sm" style={{ height: "30%" }} />
                 ))}
               </div>
               <div className="h-3 mt-1 bg-secondary/10 rounded w-full" />
             </div>
          </StatCard>
        </div>

        {/* LeetCode Skeleton */}
        <div className="h-full">
          <StatCard title="LeetCode" icon={Code2} value="..." subtext="Loading..." color="text-yellow-500">
             <div className="flex flex-col gap-2 w-full h-full justify-center px-2 animate-pulse">
                <div className="h-2 bg-secondary/10 rounded w-full" />
                <div className="h-2 bg-secondary/10 rounded w-full" />
                <div className="h-2 bg-secondary/10 rounded w-full" />
             </div>
          </StatCard>
        </div>

        {/* Duolingo Skeleton */}
        <div className="h-full">
          <StatCard title="Duolingo" icon={OwlIcon} value="..." subtext="Loading..." color="text-green-500">
             <div className="flex items-center justify-center h-full animate-pulse">
                <div className="w-10 h-10 bg-secondary/10 rounded-full" />
             </div>
          </StatCard>
        </div>

        {/* Music Skeleton */}
        <div className="h-full">
          <StatCard title="Production" icon={Music} value="..." subtext="Loading..." color="text-purple-500">
             <div className="flex items-center justify-center gap-1 h-full animate-pulse">
               <div className="w-2 h-8 bg-secondary/10 rounded-full" />
               <div className="w-2 h-10 bg-secondary/10 rounded-full" />
               <div className="w-2 h-6 bg-secondary/10 rounded-full" />
             </div>
          </StatCard>
        </div>

      </div>
    </>
  );
}
