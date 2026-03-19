// import { HackBoxProps } from "@/features/home/props/HackBoxProps";

// export const hackathons: HackBoxProps[] = [
//   {
//     title: "ClawBio: Agentic Genomics",
//     organizer: "ClawBio",
//     coverImage: "/images/clawbio-cover.png",
//     status: "upcoming",
//     daysLeft: 1,
//     hackersCount: "5+",
//     href: "/hackathons/clawbio",
//   },
//   {
//     title: "AI for Good: Climate Hack",
//     organizer: "GreenTech Labs",
//     coverImage: "/images/climateai-cover.png",
//     status: "ongoing",
//     daysLeft: 4,
//     hackersCount: "120+",
//     href: "/hackathons/climate-hack",
//   },
//   {
//     title: "Web3 Builders Summit",
//     organizer: "ChainForge",
//     coverImage: "/images/web3-cover.png",
//     status: "upcoming",
//     daysLeft: 7,
//     hackersCount: "30+",
//     href: "/hackathons/web3-summit",
//   },
//   {
//     title: "HealthTech Innovation Sprint",
//     organizer: "MedAI",
//     coverImage: "/images/healthtech-cover.png",
//     status: "ended",
//     hackersCount: "200+",
//     href: "/hackathons/healthtech",
//   },
// ];


// features/home/lib/hackathons.ts

import { HackBoxProps } from "@/features/home/props/HackBoxProps";

export const hackathons: HackBoxProps[] = [
  {
    id: "h1",
    title: "GenLayer Testnet Bradbury",
    organizer: "GenLayer",
    organizerIcon: null,
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    status: "upcoming",
    daysLeft: 17,
    hackersCount: 21,
  },
  {
    id: "h2",
    title: "Solana Breakpoint Hackathon",
    organizer: "Solana Foundation",
    organizerIcon: null,
    coverImage: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
    status: "ongoing",
    daysLeft: 8,
    hackersCount: 340,
  },
  {
    id: "h3",
    title: "ETHGlobal Bangkok",
    organizer: "ETHGlobal",
    organizerIcon: null,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    status: "ended",
    hackersCount: 1200,
  },
];