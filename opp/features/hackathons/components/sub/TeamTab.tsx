import JoinTeam from "@/features/sub_components/team/coponents/JoinTeam";
import { TeamRole } from "@/features/sub_components/team/types/join-team";
import React from "react";


const MOCK_ROLES: TeamRole[] = [
  {
    id: "role-001",
    title: "Aws Service event lead",
    projectName: "AI Climate Action Prompt Generator using AWS",
    projectLogo: "https://placehold.co/48x48/0a3d62/38bdf8?text=CA",
    openCount: 1,
    status: "pending",
  },
  {
    id: "role-002",
    title: "EduSlab (EdTech)",
    projectName: "DeFi Dashboard for Emerging Markets",
    openCount: 2,
    // status: "rejected",
  },

  // ── Added roles ─────────────────────────────────────────

  {
    id: "role-003",
    title: "Frontend Developer (React)",
    projectName: "AI-Powered Mental Health Companion",
    projectLogo: "https://placehold.co/48x48/1e293b/22c55e?text=MH",
    openCount: 2,
    status: "pending",
  },
  {
    id: "role-004",
    title: "Backend Engineer (Node.js)",
    projectName: "Decentralized Voting System",
    projectLogo: "https://placehold.co/48x48/111827/f59e0b?text=DV",
    openCount: 1,
    status: "approved",
  },
  {
    id: "role-005",
    title: "UI/UX Designer",
    projectName: "Gamified Learning Platform for Kids",
    projectLogo: "https://placehold.co/48x48/4c1d95/e879f9?text=GL",
    openCount: 1,
    status: "pending",
  },
  {
    id: "role-006",
    title: "AI/ML Engineer",
    projectName: "Smart Resume Analyzer with GPT",
    projectLogo: "https://placehold.co/48x48/064e3b/34d399?text=AI",
    openCount: 3,
    status: "pending",
  },
  {
    id: "role-007",
    title: "Mobile Developer (Flutter)",
    projectName: "Cross-Platform Health Tracker",
    projectLogo: "https://placehold.co/48x48/0f172a/38bdf8?text=HT",
    openCount: 2,
    status: "rejected",
  },
  {
    id: "role-008",
    title: "DevOps Engineer",
    projectName: "Scalable Microservices Deployment Tool",
    projectLogo: "https://placehold.co/48x48/1f2937/f87171?text=DO",
    openCount: 1,
    status: "approved",
  },
  {
    id: "role-009",
    title: "Blockchain Developer",
    projectName: "NFT Marketplace for African Creators",
    projectLogo: "https://placehold.co/48x48/312e81/a78bfa?text=NFT",
    openCount: 2,
    status: "pending",
  },
];

export default function App() {
  const handleJoinBuidl = () => {
    // Navigate to the BUIDL registration page, open a modal, etc.
    console.log("Join a BUIDL clicked");
  };

  const handleContactRole = (role: TeamRole) => {
    // Open a contact modal, pre-fill an email form, etc.
    console.log("Contact role:", role.title);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#fafafa" }}>
      {/* ── Option A: inject roles as props ── */}
      <JoinTeam
        roles={MOCK_ROLES}
        onJoinBuidl={handleJoinBuidl}
        onContactRole={handleContactRole}
      />

      {/* ── Option B: pass no roles → component auto-fetches via fetchOpenRoles() ── */}
      {/*
      <JoinTeam
        roles={[]}
        onJoinBuidl={handleJoinBuidl}
        onContactRole={handleContactRole}
      />
      */}
    </main>
  );
}

/*
  File structure
  ─────────────────────────────
  src/
  ├── join-team.ts      ← types + fetchOpenRoles() + contactRole()
  ├── JoinTeam.tsx      ← React component
  └── App.tsx           ← this file (usage example)

  Install / run
  ─────────────────────────────
  npm create vite@latest my-app -- --template react-ts
  cd my-app
  # copy the three files into src/
  npm run dev
*/