import { unstable_cache } from "next/cache";

/* --- TYPES --- */

export interface StravaStats {
  lastActivity: string; // e.g., "Run • Yesterday"
  weeklyVolume: string; // e.g., "5.4 hrs" or "42 km"
  chartData: number[]; // Array of 7 numbers (last 7 days volume in minutes/km)
}

export interface LeetCodeStats {
  solved: number;
  ranking: string; // e.g., "Top 15%"
  easy: number;
  medium: number;
  hard: number;
}

export interface DuolingoStats {
  streak: number;
  language: string;
  xp: number;
}

/* --- FETCHERS --- */

// 1. STRAVA
export async function getStravaStats(): Promise<StravaStats | null> {
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;

  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    console.warn("Strava credentials missing");
    return null;
  }

  try {
    // A. Get Access Token
    const tokenRes = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        refresh_token: STRAVA_REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
      next: { revalidate: 3600 },
    });

    if (!tokenRes.ok) {
      const errorText = await tokenRes.text();
      console.error(`Strava Token Error: ${errorText}`);
      return null;
    }
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // B. Get Activities (Last 30 days)
    const thirtyDaysAgo = Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60;
    const activitiesRes = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?after=${thirtyDaysAgo}&per_page=50`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
        next: { revalidate: 3600 },
      }
    );

    if (!activitiesRes.ok) {
      const errorText = await activitiesRes.text();
      console.error(`Strava Activity Error: ${errorText}`);
      return null;
    }
    const activities = await activitiesRes.json();

    // C. Process Data
    // Broadened filter for debugging/completeness
    const relevantActivities = activities.filter((a: any) =>
      ["Run", "TrailRun", "WeightTraining", "Ride", "Walk", "Hike", "Workout", "Crossfit"].includes(a.type)
    );
    
    console.log(`[Strava Debug] Found ${relevantActivities.length} relevant activities out of ${activities.length} total.`);

    if (relevantActivities.length === 0) {
      return { lastActivity: "No recent activity", weeklyVolume: "0 hrs", chartData: Array(7).fill(0) };
    }

    // Sort by date descending
    relevantActivities.sort((a: any, b: any) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());

    const lastAct = relevantActivities[0];
    // Use local time for display
    const lastDate = new Date(lastAct.start_date_local);
    const today = new Date();
    const isYesterday =
      lastDate.getDate() === today.getDate() - 1 &&
      lastDate.getMonth() === today.getMonth() &&
      lastDate.getFullYear() === today.getFullYear();
    const isToday =
      lastDate.getDate() === today.getDate() &&
      lastDate.getMonth() === today.getMonth() &&
      lastDate.getFullYear() === today.getFullYear();
    
    let dateStr = lastDate.toLocaleDateString("en-US", { weekday: "short" });
    if (isToday) dateStr = "Today";
    if (isYesterday) dateStr = "Yesterday";

    const lastActivityStr = `${lastAct.type} • ${dateStr}`;

    // Chart Data (Last 7 Days by YYYY-MM-DD)
    const chartData = Array(7).fill(0);
    
    // Generate dates for last 7 days (index 0 = 6 days ago, index 6 = Today)
    const last7DaysMap = new Map<string, number>();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      // Construct YYYY-MM-DD using local time components to match Strava's start_date_local
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const dateString = `${year}-${month}-${day}`;
      last7DaysMap.set(dateString, i);
    }
    
    console.log("[Strava Debug] Date Map:", Array.from(last7DaysMap.keys()));

    relevantActivities.forEach((act: any) => {
      // Use local date string from Strava (format: "YYYY-MM-DDTHH:MM:SSZ")
      // We just take the date part "YYYY-MM-DD"
      const actDate = act.start_date_local.split("T")[0];
      
      console.log(`[Strava Debug] Activity: ${act.type} on ${actDate} (${act.moving_time}s)`);
      
      if (last7DaysMap.has(actDate)) {
        const index = last7DaysMap.get(actDate)!;
        chartData[index] += (act.moving_time || 0) / 60; // Minutes
      }
    });

    const weeklyMinutes = chartData.reduce((a, b) => a + b, 0);
    const weeklyVolume = `${Math.round(weeklyMinutes / 60 * 10) / 10} hrs`;
    
    console.log("[Strava Debug] Final Chart Data:", chartData);

    return {
      lastActivity: lastActivityStr,
      weeklyVolume,
      chartData: chartData.map(Math.round),
    };

  } catch (error) {
    console.error("Strava Error:", error);
    return null;
  }
}


// 2. LEETCODE
export async function getLeetCodeStats(): Promise<LeetCodeStats | null> {
  const { LEETCODE_USERNAME } = process.env;
  if (!LEETCODE_USERNAME) return null;

  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
              }
            }
          }
        `,
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    const stats = data.data?.matchedUser?.submitStats?.acSubmissionNum;
    if (!stats) return null;

    const all = stats.find((s: any) => s.difficulty === "All")?.count || 0;
    const easy = stats.find((s: any) => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find((s: any) => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find((s: any) => s.difficulty === "Hard")?.count || 0;

    return {
      solved: all,
      ranking: "Top 15%", 
      easy,
      medium,
      hard,
    };
  } catch (error) {
    console.error("LeetCode Error:", error);
    return null;
  }
}

// 3. DUOLINGO
export async function getDuolingoStats(): Promise<DuolingoStats | null> {
  const { DUOLINGO_USERNAME } = process.env;
  if (!DUOLINGO_USERNAME) return null;

  try {
    const res = await fetch(`https://www.duolingo.com/2017-06-30/users?username=${DUOLINGO_USERNAME}`, {
       headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" },
       next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error("Duolingo fetch failed");
    
    const data = await res.json();
    const users = data.users;
    if (!users || users.length === 0) return null;
    
    const user = users[0];
    const currentCourse = user.courses.find((c: any) => c.id === user.currentCourseId);
    
    return {
      streak: user.streak,
      language: currentCourse ? currentCourse.title : "Language",
      xp: user.totalXp
    };

  } catch (error) {
    console.error("Duolingo Error:", error);
    return null;
  }
}
