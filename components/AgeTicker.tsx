"use client";

import { useEffect, useState } from "react";
import { config } from "@/portfolio.config";

export default function AgeTicker() {
  const [time, setTime] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  useEffect(() => {
    const birthDate = new Date(config.birthDate);

    const updateAge = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));

      setTime({
        years: String(years),
        months: String(months).padStart(2, "0"),
        days: String(days).padStart(2, "0"),
      });
    };

    const timer = setInterval(updateAge, 1000);
    updateAge();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-end gap-3 font-mono">
      {/* YEAR */}
      <div className="flex flex-col items-center leading-none">
        <span className="text-xl font-bold text-primary">{time.years}</span>
        <span className="text-[10px] text-secondary tracking-widest uppercase">Years</span>
      </div>

      {/* SEPARATOR */}
      <div className="h-6 w-[1px] bg-secondary/20" />

      {/* MONTH */}
      <div className="flex flex-col items-center leading-none">
        <span className="text-xl font-bold text-foreground">{time.months}</span>
        <span className="text-[10px] text-secondary tracking-widest uppercase">Months</span>
      </div>

      {/* SEPARATOR */}
      <div className="h-6 w-[1px] bg-secondary/20" />

      {/* DAY */}
      <div className="flex flex-col items-center leading-none">
        <span className="text-xl font-bold text-foreground">{time.days}</span>
        <span className="text-[10px] text-secondary tracking-widest uppercase">Days</span>
      </div>
    </div>
  );
}