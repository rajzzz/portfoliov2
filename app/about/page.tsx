import AboutClient from "@/components/AboutClient";
import { getStravaStats, getLeetCodeStats, getDuolingoStats } from "@/lib/fetchers";

export const revalidate = 3600; // Update every hour

export default async function AboutPage() {
  const stravaData = await getStravaStats();
  const leetcodeData = await getLeetCodeStats();
  const duolingoData = await getDuolingoStats();

  return (
    <AboutClient 
      strava={stravaData}
      leetcode={leetcodeData}
      duolingo={duolingoData}
    />
  );
}
