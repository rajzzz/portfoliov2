"use client";

import { useEffect, useState } from "react";
import { config } from "@/portfolio.config";

export default function AgeTicker() {
    const [age, setAge] = useState("");

    useEffect(() => {
        const birthDate = new Date(config.birthDate);

        const updateAge = () => {
            const now = new Date()
            const diff = now.getTime() - birthDate.getTime();
            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setAge(
                `${years}Y ${String(months).padStart(2, "0")}M ${String(days).padStart(2, "0")}D ${String(hours).padStart(2, "0")}H ${String(minutes).padStart(2, "0")}M ${String(seconds).padStart(2, "0")}S`
            )
        }
        const timer = setInterval(updateAge, 1000);
        updateAge();

        return () => clearInterval(timer)

    })
    if (!age) return <span className="opacity-50">CALCULATING...</span>;

    return <span>{age}</span>;
}