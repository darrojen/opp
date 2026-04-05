// 'use client';

// import Box from "@/components/ui/box";
// import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";
// import HackersList from "@/features/sub_components/hackathon/components/HackersList";
// import { Hacker } from "@/features/sub_components/hackathon/types/hackers-list";

// const MOCK_HACKERS: Hacker[] = [
//   {
//     id: "4",
//     username: "ByteCrafter",
//     organization: "MIT",
//     bio: "Building scalable systems and AI-powered apps.",
//     tags: [{ label: "Build Submitted", variant: "build" }],
//     skills: ["React", "Node.js", "AI"],
//   interests: ["Hackathons", "Startups", "Open Source"],
//   },
//   {
//     id: "5",
//     username: "DevNova",
//     organization: "University of Lagos",
//     bio: "Passionate about frontend and design systems.",
//       skills: ["React", "Node.js", "AI"],
//   interests: ["Hackathons", "Startups", "Open Source"],
//   },
//   {
//     id: "6",
//     username: "ChainWizard",
//     organization: "Ethereum Dev Guild",
//     bio: "Smart contract engineer and Web3 enthusiast.",
//     tags: [{ label: "Build Submitted", variant: "build" }],
//     skills: ["React", "Node.js", "AI"],
//   interests: ["Hackathons", "Startups", "Open Source"],
//   },
//   {
//     id: "7",
//     username: "PixelSmith",
//     organization: "Freelance",
//     bio: "UI/UX designer crafting pixel-perfect interfaces.",
//       skills: ["React", "Node.js", "AI"],
//   interests: ["Hackathons", "Startups", "Open Source"],
//   },
//   {
//     id: "8",
//     username: "DataPhantom",
//     organization: "Stanford University",
//     bio: "Data science + ML = magic.",
//     tags: [{ label: "Build Submitted", variant: "build" }],
//       skills: ["React", "Node.js", "AI"],
//   interests: ["Hackathons", "Startups", "Open Source"],
//   },
//   {
//     id: "9",
//     username: "CodeRift",
//     organization: "Google Developer Student Club",
//     bio: "Fullstack dev who loves hackathons.",
//    skills: ["C", "Python", "Solidity (learning)", "EVM fundamentals"],
//   interests: ["Web3 development, reactive smart contracts, real-time blockchain applications, decentralized systems, DeFi innovation, and building scalable on-chain solutions."],
//   },
//   {
//     id: "10",
//     username: "ZypherX",
//     organization: "Freelance",
//     bio: "Exploring the edges of AI and automation.",
//     tags: [{ label: "Build Submitted", variant: "build" }],
//     skills: ["C", "Node js", "Rust (learning)", "EVM fundamentals"],
//   interests: ["Web3 development, reactive smart contracts, real-time blockchain applications, decentralized systems, DeFi innovation, and building scalable on-chain solutions."],
//   },
//   {
//     id: "11",
//     username: "NovaStack",
//     organization: "Harvard University",
//     bio: "Building products that scale globally.",
//     skills: ["C", "Python", "Solidity (learning)", "EVM fundamentals"],
//   interests: ["Web3 development, reactive smart contracts, real-time blockchain applications, decentralized systems, DeFi innovation, and building scalable on-chain solutions."],
//   },
//   {
//     id: "12",
//     username: "AlgoKnight",
//     organization: "Carnegie Mellon University",
//     bio: "Algorithms, problem-solving, and competitive coding.",
//     tags: [{ label: "Build Submitted", variant: "build" }],
//     skills: ["React", "Node.js", "AI"],
//   interests: ["Hackathons", "Startups", "Open Source"],
//   },
//   {
//     id: "13",
//     username: "SkyBuilder",
//     organization: "Independent",
//     bio: "Turning ideas into deployed products fast.",
//     tags: [{ label: "Build Submitted", variant: "build" }],
//     skills: ["C", "Python", "Solidity (learning)", "EVM fundamentals"],
//   interests: ["Web3 development, reactive smart contracts, real-time blockchain applications, decentralized systems, DeFi innovation, and building scalable on-chain solutions."],
//   },
// ];

// export default function HackersTab({ hackersCount }: Partial<HackathonDetailProps>) {
//   return (
//     <Box as="div" className="">
//       <HackersList
//         hackers={MOCK_HACKERS}
//         onAddFriend={(hacker) => console.log("Add friend:", hacker.username)}
//         onMessage={(hacker) => console.log("Message:", hacker.username)}
//         onViewProfile={(hacker) => console.log("View profile:", hacker.username)}
//         onSearch={(query) => console.log("Search:", query)}
//       />
//     </Box>
//   );
// }



// 'use client';

// import Box from "@/components/ui/box";
// import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";
// import { HackerProfile } from "@/features/hacker/types/hacker.types";
// import { MOCK_HACKERS } from "@/features/hacker/types/mock-hackers";
// import HackersList from "@/features/sub_components/hackathon/components/HackersList";
// import type { Hacker } from "@/features/sub_components/hackathon/types/hackers-list";


// // Map the richer HackerProfile shape → the leaner Hacker card shape
// function toHacker(profile: HackerProfile): Hacker {
//   return {
//     id: profile.id,
//     username: profile.username,
//     organization: profile.organization,
//     bio: profile.bio,
//     avatarUrl: profile.avatarUrl || undefined,
//     skills: profile.techStack,
//     interests: profile.interest ? [profile.interest] : [],
//   };
// }

// const hackers: Hacker[] = MOCK_HACKERS.map(toHacker);

// export default function HackersTab({ hackersCount }: Partial<HackathonDetailProps>) {
//   return (
//     <Box as="div" className="">
//       <HackersList
//         hackers={hackers}
//         onAddFriend={(hacker) => console.log("Add friend:", hacker.username)}
//         onMessage={(hacker) => console.log("Message:", hacker.username)}
//         onViewProfile={(hacker) => console.log("View profile:", hacker.username)}
//         onSearch={(query) => console.log("Search:", query)}
//       />
//     </Box>
//   );
// }

'use client';

import Box from "@/components/ui/box";
import type { HackathonDetailProps } from "@/features/hackathons/props/HackathonDetailProps";
import { HackerProfile } from "@/features/hacker/types/hacker.types";
import { MOCK_HACKERS } from "@/features/hacker/types/mock-hackers";
import HackersList from "@/features/sub_components/hackathon/components/HackersList";
import type { Hacker } from "@/features/sub_components/hackathon/types/hackers-list";


// Map the richer HackerProfile shape → the leaner Hacker card shape
function toHacker(profile: HackerProfile): Hacker {
  return {
    id: profile.id,
    username: profile.username,
    organization: profile.organization,
    bio: profile.bio,
    avatarUrl: profile.avatarUrl || undefined,
    skills: profile.techStack,
    interests: profile.interest ? [profile.interest] : [],
  };
}

const hackers: Hacker[] = Object.values(MOCK_HACKERS).map(toHacker);

export default function HackersTab({ hackersCount }: Partial<HackathonDetailProps>) {
  return (
    <Box as="div" className="">
      <HackersList
        hackers={hackers}
        onAddFriend={(hacker) => console.log("Add friend:", hacker.username)}
        onMessage={(hacker) => console.log("Message:", hacker.username)}
        onViewProfile={(hacker) => console.log("View profile:", hacker.username)}
        onSearch={(query) => console.log("Search:", query)}
      />
    </Box>
  );
}