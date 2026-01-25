import { Terminal, Dumbbell, Code2, Flame, Music } from "lucide-react";
import StatCard from "@/components/StatCard";
import { getStravaStats, getLeetCodeStats, getDuolingoStats } from "@/lib/fetchers";

export default async function ActivityFeed() {
  const [strava, leetcode, duolingo] = await Promise.all([
    getStravaStats(),
    getLeetCodeStats(),
    getDuolingoStats()
  ]);

  const maxVolume = strava ? Math.max(...strava.chartData, 1) : 100;

  return (
    <>
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
        <Terminal className="w-5 h-5 text-primary" />  Activities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* --- STRAVA WIDGET --- */}
        <div className="h-full">
          <StatCard 
            title="Fitness" 
            icon={Dumbbell} 
            value={strava ? strava.weeklyVolume : "Loading..."} 
            subtext={strava ? strava.lastActivity : "Syncing..."}
          >
            <div className="flex flex-col w-full h-full px-2 pb-1">
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
                  // Empty state if null
                  Array(7).fill(0).map((_, i) => (
                    <div key={i} className="flex-1 bg-secondary/10 rounded-t-sm animate-pulse" style={{ height: "15%" }} />
                  ))
                )}
              </div>
              
              <div className="flex justify-between px-0.5 pt-1">
                {Array(7).fill(0).map((_, i) => {
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
        </div>

        {/* --- LEETCODE WIDGET --- */}
        <div className="h-full">
          <StatCard 
            title="LeetCode" 
            icon={Code2} 
            value={leetcode ? `Solved: ${leetcode.solved}` : "Loading..."} 
            subtext={leetcode ? leetcode.ranking : "Fetching..."}
            color="text-yellow-500"
          >
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
        </div>

        {/* --- DUOLINGO WIDGET --- */}
        <div className="h-full">
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
        </div>

        {/* --- MUSIC WIDGET --- */}
        <div className="h-full">
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
        </div>

      </div>
    </>
  );
}
