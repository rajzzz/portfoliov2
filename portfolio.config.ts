import { Github, Linkedin, Mail, FileText } from "lucide-react";

export const config = {
  // Personal Details
  name: "Raj Singh",
  birthDate: "2003-12-29T11:10:00", // YYYY-MM-DD - Adjust this to your actual birthdate

  avatar: "/me.jpg",

  // Social Stats (Top Left)
  socials: [
    { name: "GitHub", icon: Github, link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: Linkedin, link: "https://linkedin.com/in/yourusername" },
    { name: "Email", icon: Mail, link: "mailto:your@email.com" },
    { name: "Resume", icon: FileText, link: "/resume.pdf" },
  ],

  // Navigation (Bottom Bar / Map Modes)
  routes: [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    // Ready for expansion:
    // { label: "Reading List", path: "/reading" },
  ],
projects: [
    {
      name: "Flashcard SaaS",
      description: "AI-powered flashcard generator via browser extension.",
      tech: ["FastAPI", "Python", "Manifest V3"],
      link: "https://github.com/yourusername/flashcard-ai", // Replace with real link
      type: "SaaS", // e.g., "SaaS", "Tool", "Infrastructure"
      image: "/w2a.gif" // <--- Add this (Put actual gif in /public folder)
    },

    {
      name: "",
      description: "Personal lead-tracking application for daily goals.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      link: "https://github.com/yourusername/lead-follower",
      type: "Productivity",
      image: "/1.gif"
    },
    {
      name: "SmartScape",
      description: "Urban infrastructure planning assistant (IBM Skillsbuild).",
      tech: ["Machine Learning", "Data Science"],
      link: "#", 
      type: "AI Model",
      image: "/2.gif"
    },
    {
      name: "Web Atlas",
      description: "AI-powered flashcard generator via browser extension.",
      tech: ["FastAPI", "Python", "Manifest V3"],
      link: "https://github.com/yourusername/flashcard-ai", // Replace with real link
      type: "SaaS", // e.g., "SaaS", "Tool", "Infrastructure"
      image: "/w2a.gif" // <--- Add this (Put actual gif in /public folder)
    },
  ], 
  // Timeline Data (The "Tech Tree")
  timeline: [
    {
      id: 1,
      title: "Frontend Dev @ Lowfied.com",
      date: "June 2024",
      description: "Worked on frontend architecture and UI implementation.",
      tags: ["React", "Frontend", "Web Dev"],
    },
    {
      id: 2,
      title: "Cybersecurity Internship @ STPI",
      date: "June 2025",
      description: "Focused on network security and ethical hacking methodologies.",
      tags: ["Network Security", "Linux", "Ethical Hacking"],
    },
    {
      id: 3,
      title: "Summer Trainee at CSRBOX(IBM Skillsbuild)",
      date: "August 2025",
      description: "Worked with AI agents and various IBM Granite models",
      tags: ["Machine Learning", "Python", "Data Science"],
    },
  ],
};