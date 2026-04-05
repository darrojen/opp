
export const hackerTheme = {
  colors: {
    accent: "#F97316",       // orange-500
    accentLight: "#FED7AA",  // orange-200
    accentMuted: "#FFF7ED",  // orange-50
    surface: "#FFFFFF",
    surfaceAlt: "#F9FAFB",
    border: "#E5E7EB",
    text: "#111827",
    textMuted: "#6B7280",
    textFaint: "#9CA3AF",
  },
  fonts: {
    display: "'Syne', sans-serif",
    body: "'DM Sans', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
};

export type Skill = "Frontend" | "UX/UI" | "Full-Stack" | "Blockchain" | "Backend" | "Mobile";
export type ActivityMonth = { month: string; value: number };

export interface HackerProfile {
  id: string;
  username: string;
  handle: string;
  avatarUrl: string;
  location: string;
  roles: string[];
  organization: string;
  techStack: string[];
  bio: string;
  skills: Skill[];
  interest: string;
  following: number;
  followers: number;
  karma: number;
  activity: ActivityMonth[];
  socialLinks: {
    website?: string;
    github?: string;
    twitter?: string;
  };
}

export const MOCK_HACKERS: Record<string, HackerProfile> = {
  "2366338": {
    id: "2366338",
    username: "eduardo3071",
    handle: "@eduardo_07042007",
    avatarUrl: "https://i.pravatar.cc/150?u=eduardo3071",
    location: "Brazil, São Paulo, Suzano",
    roles: ["Full-stack developer", "Blockchain engineer", "UI engineer"],
    organization: "Student - FATEC",
    techStack: ["Java", "Python", "JavaScript", "Kotlin", "React", "TypeScript", "PostgreSQL", "MongoDB", "MySQL", "Git", "Linux", "Windows", "CI/CD"],
    bio: "Developer of Java • Python • JavaScript • Kotlin • React • TypeScript | PostgreSQL • MongoDB • MySQL | Git • Linux • Windows • CI/CD",
    skills: ["Frontend", "UX/UI", "Full-Stack"],
    interest: "I want to use my knowledge to build new ideas: Java • Python • JavaScript • Kotlin • React • TypeScript | PostgreSQL • MongoDB • MySQL | Git • Linux • Windows • CI/CD",
    following: 0,
    followers: 0,
    karma: 30,
    activity: [
      { month: "Apr", value: 0 },
      { month: "May", value: 0 },
      { month: "Jun", value: 0 },
      { month: "Jul", value: 0 },
      { month: "Aug", value: 0 },
      { month: "Sep", value: 0 },
      { month: "Oct", value: 0 },
      { month: "Nov", value: 0 },
      { month: "Dec", value: 0 },
      { month: "2026", value: 2 },
      { month: "Feb", value: 10 },
      { month: "Mar", value: 30 },
    ],
    socialLinks: {
      website: "#",
      github: "https://github.com/eduardo3071",
      twitter: "#",
    },

    
  },
  "8472910": {
  id: "8472910",
  username: "zara_codes",
  handle: "@zara.dev",
  avatarUrl: "https://i.pravatar.cc/150?u=zara_codes",
  location: "UK, London",
  roles: ["Frontend developer", "UI designer"],
  organization: "Freelancer",
  techStack: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma", "Git"],
  bio: "Frontend developer focused on crafting clean UI with React & TypeScript | Design meets code",
  skills: ["Frontend", "UX/UI", "Blockchain"],
  interest: "Building scalable frontend systems and beautiful interfaces with modern tools like React, Next.js, and Tailwind",
  following: 12,
  followers: 48,
  karma: 85,
  activity: [
    { month: "Apr", value: 2 },
    { month: "May", value: 4 },
    { month: "Jun", value: 6 },
    { month: "Jul", value: 8 },
    { month: "Aug", value: 10 },
    { month: "Sep", value: 6 },
    { month: "Oct", value: 12 },
    { month: "Nov", value: 14 },
    { month: "Dec", value: 18 },
    { month: "2026", value: 20 },
    { month: "Feb", value: 24 },
    { month: "Mar", value: 30 },
  ],
  socialLinks: {
    website: "#",
    github: "https://github.com/zara-codes",
    twitter: "https://twitter.com/zara_dev",
  },
},

"5938201": {
  id: "5938201",
  username: "kofi_ai",
  handle: "@kofi.ai",
  avatarUrl: "https://i.pravatar.cc/150?u=kofi_ai",
  location: "Ghana, Accra",
  roles: ["AI engineer", "Backend developer"],
  organization: "AI Startup",
  techStack: ["Python", "FastAPI", "Node.js", "TensorFlow", "PyTorch", "PostgreSQL", "Docker", "AWS"],
  bio: "AI engineer building intelligent systems with Python & deep learning | Backend + ML",
  skills: ["Blockchain", "Backend"],
  interest: "Interested in building AI-powered products, automation systems, and scalable backend services",
  following: 30,
  followers: 120,
  karma: 140,
  activity: [
    { month: "Apr", value: 5 },
    { month: "May", value: 8 },
    { month: "Jun", value: 10 },
    { month: "Jul", value: 15 },
    { month: "Aug", value: 18 },
    { month: "Sep", value: 20 },
    { month: "Oct", value: 22 },
    { month: "Nov", value: 25 },
    { month: "Dec", value: 28 },
    { month: "2026", value: 32 },
    { month: "Feb", value: 36 },
    { month: "Mar", value: 40 },
  ],
  socialLinks: {
    website: "#",
    github: "https://github.com/kofi-ai",
    twitter: "#",
  },
},
};