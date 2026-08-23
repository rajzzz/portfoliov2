import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";

export const config = {
  // Personal Details
  name: "Raj Singh",
  birthDate: "2003-12-29T11:10:00", // YYYY-MM-DD - Adjust this to your actual birthdate

  avatar: "/me3.jpg",

  socials: [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/rajzzz",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/raj-singh-8124201ba/",
    },
    {
      name: "X.com",
      icon: Twitter,
      link: "https://www.x.com/jaaarzz",
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:rajsm029@gmail.com",
    },
    {
      name: "Resume",
      icon: FileText,
      link: "/resume.pdf",
    },
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
      name: "Web to Anki",
      description:
        "AI-powered SaaS — LLM pipeline extracts web content into Anki flashcards. Manifest V3 extension handling 1,000+ weekly requests. 50k+ impressions, 16 recurring paid users.",
      tech: ["FastAPI", "Python", "PostgreSQL", "LLM APIs", "Manifest V3"],
      link: "https://chromewebstore.google.com/detail/web-to-anki/opbaagipfhncddobbmojaegmdpnmlenf?hl=en",
      type: "SaaS",
      image: "/w2a.gif",
    },

    {
      name: "SmartScape",
      description:
        "Geospatial urban planning assistant leveraging Google Gemini multimodal AI. Ranked Top 4 pan-India at IBM SkillsBuild; showcased at IBM Summit 2025 & AI Impact Global Summit 2026.",
      tech: ["Flask", "Vertex AI", "GCP", "Google Maps API"],
      link: "https://smartscape.in",
      type: "AI Agent",
      image: "/sc.gif",
    },
    {
      name: "Web Atlas",
      description:
        "Interactive 3D globe with raycasting and real-time geographic statistics.",
      tech: ["Three.js", "WebGL", "TopoJSON", "REST API"],
      link: "https://web-atlas.onrender.com/",
      type: "Interactive Web",
      image: "/cs.gif",
    },
  ],
  // Timeline Data (The "Tech Tree")
  timeline: [
    {
      id: 1,
      title: "B.Tech CSE @ VIPS, GGSIPU",
      date: "November 2022 - June 2026",
      description:
        "B.Tech in Computer Science and Engineering at Vivekananda Institute of Professional Studies, Pitampura, Delhi.",
      tags: ["Computer Science", "Engineering"],
    },
    {
      id: 2,
      title: "CyberSec Intern @ STPI",
      date: "June - August 2025",
      description:
        "Software Technology Parks of India (autonomous body under MeitY). Conducted vulnerability assessments across 50+ websites; mapped findings to OWASP Top 10 and CVE/CWE IDs.",
      tags: ["Nmap", "Wireshark", "Burp Suite", "OWASP Top 10", "Linux"],
    },
    {
      id: 3,
      title: "Trainee @ CSRBOX — IBM SkillsBuild",
      date: "July - August 2025",
      description:
        "Built SmartScape — ranked Top 4 pan-India. Showcased at IBM Summit 2025 and AI Impact Global Summit 2026.",
      tags: ["Generative AI", "Python", "Vertex AI", "GCP"],
    },
    {
      id: 4,
      title: "AI Engineering Intern @ Ravan.ai",
      date: "January 2026 - June 2026",
      description:
        "Built production features across 3 AI-calling products (CloserX, Snowie.ai, Agni.ai). Built an end-to-end AI video ad generation platform integrating Claude Opus, Kling, and Gemini. Designed backend with Django, PostgreSQL, and BullMQ for long-running AI job orchestration.",
      tags: [
        "Next.js",
        "React",
        "Django",
        "PostgreSQL",
        "BullMQ",
        "Zustand",
        "TanStack Query",
        "LLM APIs",
      ],
    },
    {
      id: 5,
      title: "Full-Stack Engineer @ Lowfied.com",
      date: "July 2026 - Present",
      description:
        "Building core product systems for a pre-launch music marketplace (300+ waitlist). Engineered Razorpay payment infrastructure. Redesigned core modules with domain-driven architecture, migrating 79+ API routes. Achieved 4× load time improvement via catalog architecture optimization.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Razorpay", "DDD"],
    },
  ],
};
