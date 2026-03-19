
// features/hackathons/lib/getHackathon.ts
//
// ⚡ To wire up a real API, replace the body with:
//   const res = await fetch(`${process.env.API_URL}/hackathons/${id}`, { next: { revalidate: 60 } });
//   if (!res.ok) return null;
//   return res.json() as Promise<HackathonDetailProps>;

import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";

const DB: Record<string, HackathonDetailProps> = {
  h1: {
    id: "h1",
    title: "GenLayer Testnet Bradbury",
    organizer: "GenLayer",
    organizerIcon: null,
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
    status: "upcoming",
    daysLeft: 1,
    hackersCount: 21,
    prizePool: "GenLayer Builder Points + $5000",
    timeline: {
      note: "Submission starts in 1 day",
      status: "upcoming",
      rows: [
        { label: "Submission", date: "2026/03/20 12:30" },
        { label: "Deadline",   date: "2026/04/04 02:30" },
      ],
    },
    mode: "Virtual",
    tags: ["Blockchain", "Web3", "AI", "AI x Blockchain", "Subjective Consensus", "GenLayer"],
    ecosystem: ["base", "ai", "web3", "subjective consensus", "ethereum"],
    submissionRequirements:
      "Deploy a working smart contract on GenLayer Testnet Bradbury. Teams of 1–5. Project must use at least one AI validator node.",
    description:
      "More info at https://portal.genlayer.foundation/#hackathon\n\nThe first testnet where AI directly participates in blockchain consensus.\n\nBradbury marks the transition from infrastructure setup (Asimov) to active AI-driven validation and experimentation.",
    bullets: [
      "Validators choose and optimize LLMs",
      "AI-powered smart contracts become testable",
      "Subjective consensus mechanisms go live",
    ],
    outline: [],
  },
  h2: {
    id: "h2",
    title: "Solana Breakpoint Hackathon",
    organizer: "Solana Foundation",
    organizerIcon: null,
    coverImage: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=1200&q=80",
    status: "ongoing",
    daysLeft: 8,
    hackersCount: 340,
    prizePool: "$50,000 in SOL",
    timeline: {
      note: "Submissions close in 8 days",
      status: "ongoing",
      rows: [
        { label: "Submission Opens", date: "2026/03/10 09:00" },
        { label: "Deadline",         date: "2026/03/26 23:59" },
      ],
    },
    mode: "Hybrid",
    tags: ["Solana", "DeFi", "NFT", "Web3"],
    ecosystem: ["solana", "rust", "anchor"],
    submissionRequirements:
      "Projects must be deployed on Solana mainnet or devnet. Open to all developers.",
    description:
      "Build on Solana's blazing-fast blockchain. From DeFi protocols to consumer apps, we want to see what you can create.\n\nCategories include DeFi & Trading, NFTs & Digital Assets, Infrastructure & Tooling, and Consumer Applications.",
    bullets: [
      "DeFi & Trading protocols",
      "NFTs & Digital Assets",
      "Infrastructure & Tooling",
      "Consumer Applications",
    ],
    outline: ["Overview", "Prizes", "Judges", "Schedule"],
  },
  h3: {
    id: "h3",
    title: "ETHGlobal Bangkok",
    organizer: "ETHGlobal",
    organizerIcon: null,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    status: "ended",
    hackersCount: 1200,
    prizePool: "$100,000",
    timeline: {
      note: "This hackathon has ended",
      status: "ended",
      rows: [
        { label: "Submission", date: "2026/01/15 08:00" },
        { label: "Deadline",   date: "2026/01/17 18:00" },
      ],
    },
    mode: "In-Person · Bangkok",
    tags: ["Ethereum", "L2", "ZK", "DeFi"],
    ecosystem: ["ethereum", "optimism", "arbitrum", "zk"],
    submissionRequirements: "Must be physically present in Bangkok. Teams of 2–5.",
    description:
      "48 hours of building the future of Ethereum.\n\nOne of the most prestigious hackathons in the ecosystem with 1,200+ hackers from 60+ countries.",
    bullets: [
      "1,200+ hackers from 60+ countries",
      "$100,000 in prizes across all tracks",
      "Live judging by top Ethereum founders",
    ],
    outline: ["Overview", "Tracks", "Winners"],
  },
};

export async function getHackathon(id: string): Promise<HackathonDetailProps | null> {
  await new Promise(r => setTimeout(r, 80)); // simulate network
  return DB[id] ?? null;
}