import { Suspense } from "react";
import AboutBio from "@/components/AboutBio";
import ActivityFeed from "@/components/ActivityFeed";
import ActivitySkeleton from "@/components/ActivitySkeleton";

// Revalidate every hour
export const revalidate = 3600;

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-6 pt-24 pb-32 max-w-5xl mx-auto">
      {/* Bio Section (Client Component - Instant Interactive) */}
      <AboutBio />

      {/* Activity Grid (Server Component - Suspended/Streamed) */}
      <Suspense fallback={<ActivitySkeleton />}>
        <ActivityFeed />
      </Suspense>
    </div>
  );
}
