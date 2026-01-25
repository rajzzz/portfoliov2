import { Github, Linkedin,  Mail, FileText, Twitter } from "lucide-react";

export const config = {
  // Personal Details
  name: "Raj Singh",
  birthDate: "2003-12-29T11:10:00", // YYYY-MM-DD - Adjust this to your actual birthdate

  avatar: "/me3.jpg",

socials: [
    { 
      name: "GitHub", 
      icon: Github, 
      link: "https://github.com/rajzzz" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      link: "https://www.linkedin.com/in/raj-singh-8124201ba/" 
    },
    {
      name: "X.com",
      icon: Twitter,
      link: "https://www.x.com/jaaarzz"
    },
    { 
      name: "Email", 
      icon: Mail, 
      link: "mailto:rajsm029@gmail.com" 
    },
    { 
      name: "Resume", 
      icon: FileText, 
      link: "/resume.pdf" 
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
      description: "Makes flashcards for you while you read via a browser extension.",
      tech: ["FastAPI", "SQLAlchemy", "Manifest V3"],
      link: "https://chromewebstore.google.com/detail/web-to-anki/opbaagipfhncddobbmojaegmdpnmlenf?hl=en", // Replace with real link
      type: "SaaS", // e.g., "SaaS", "Tool", "Infrastructure"
      image: "/w2a.gif" // <--- Add this (Put actual gif in /public folder)
    },

    {
      name: "SmartScape",
      description: "Urban infrastructure planning assistant. Showcased at IBM AI summit 2025",
      tech: ["Flask", "GCP", "Vertex AI"],
      link: "https://smartscape.in", 
      type: "AI Agent",
      image: "/sc.gif"
    },
{
      name: "Web Atlas",
      description: "Interactive 3D globe with raycasting and real-time geographic statistics.",
      tech: ["Three.js", "WebGL", "TopoJSON", "REST API"],
      link: "https://web-atlas.onrender.com/", 
      type: "Interactive Web",
      image: "/cs.gif" // Ensure you have a placeholder gif for this
    },
  ], 
  // Timeline Data (The "Tech Tree")
  timeline: [
    
    {
      id: 1,
      title: "CSE @ GGSIPU",
      date: "November 2022 - July 2026*",
      description: "Studying CS at VIPS Pitampura, Delhi.",
      tags: ["Engineering"],
    },
    {
      id: 2,
      title: "Frontend Dev @ Lowfied.com",
      date: "June - July 2024",
      description: "Worked on frontend architecture and UI implementation.",
      tags: ["React", "Tailwind CSS", "Frontend", "Web Dev"],
    },
    {
      id: 3,
      title: "Summer Intern @ STPI",
      date: "June - August 2025",
      description: "Software Technology Parks of India, (an autonomous body under MeitY), Focused on network security and ethical hacking methodologies.",
      tags: ["Network Security", "Linux", "Owasp Top 10", "BurpSuite", "N-map", "WireShark"],
    },
    {
      id: 4,
      title: "Trainee at CSRBOX - IBM Skillsbuild",
      date: "July - August 2025",
      description: "Worked with AI agents and various IBM Granite models",
      tags: ["Generative AI", "Python", "Data Science"],
    },
  ],
};