
// "use client";

// import React from "react";
// import { Build, BuildTab } from "../types";
// import { BuildTabs } from "@/features/build/components/BuildTabs";
// import { BuildDetails } from "@/features/build/components/BuildDetails";
// import { BuildTeam } from "@/features/build/components/BuildTeam";
// import { BuildMilestones } from "@/features/build/components/BuildMilestones";
// import { Upvoters } from "@/features/build/components/BuildUpvotes";

// interface BuildContentProps {
//   build: Build;
//   activeTab: BuildTab;
// }

// export function BuildContent({ build, activeTab }: BuildContentProps) {
//   return (
//     <div className="flex-1 min-w-0">
//       <BuildTabs activeTab={activeTab} onTabChange={() => {}} build={build} />

//       {activeTab === "details" && <BuildDetails build={build} />}
//       {activeTab === "team" && <BuildTeam build={build} />}
//       {activeTab === "milestones" && <BuildMilestones build={build} />}
//       {activeTab === "followers" && (
//         <div className="text-sm text-gray-500 py-8 text-center">
//           {build.followers} follower{build.followers !== 1 ? "s" : ""}
//         </div>
//       )}
//       {activeTab === "upvoters" && (
//         <div className="text-sm text-gray-500 py-8 text-center">
//           {build.upvotes} upvote{build.upvotes !== 1 ? "s" : ""}
//         </div>

//         <Upvoters/>
//       )}
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import { Build, BuildTab } from "../types";
// import { BuildTabs } from "@/features/build/components/BuildTabs";
// import { BuildDetails } from "@/features/build/components/BuildDetails";
// import { BuildTeam } from "@/features/build/components/BuildTeam";
// import { BuildMilestones } from "@/features/build/components/BuildMilestones";
// import { Upvoters } from "@/features/build/components/BuildUpvotes";

// interface BuildContentProps {
//   build: Build;
//   activeTab: BuildTab;
// }

// export function BuildContent({ build, activeTab }: BuildContentProps) {
//   return (
//     <div className="flex-1 min-w-0">
//       <BuildTabs activeTab={activeTab} onTabChange={() => {}} build={build} />

//       {activeTab === "details" && <BuildDetails build={build} />}
//       {activeTab === "team" && <BuildTeam build={build} />}
//       {activeTab === "milestones" && <BuildMilestones build={build} />}
//       {activeTab === "followers" && (
//         <div className="text-sm text-gray-500 py-8 text-center">
//           {build.followers} follower{build.followers !== 1 ? "s" : ""}
//         </div>
//       )}
//       {activeTab === "upvoters" && (
//         <div className="py-4">
//           <div className="text-sm text-gray-500 pb-4 text-center">
//             {build.upvotes} upvote{build.upvotes !== 1 ? "s" : ""}
//           </div>
//           <Upvoters upvoters={build.upvotes ?? []} />
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import React from "react";
import { Build, BuildTab, Upvoter } from "../types";
import { BuildTabs } from "@/features/build/components/BuildTabs";
import { BuildDetails } from "@/features/build/components/BuildDetails";
import { BuildTeam } from "@/features/build/components/BuildTeam";
import { BuildMilestones } from "@/features/build/components/BuildMilestones";
import { Upvoters } from "@/features/build/components/BuildUpvotes";

interface BuildContentProps {
  build: Build;
  activeTab: BuildTab;
}

const UPVOTERS: Upvoter[] = [
  {
    id: 1,
    name: "Kieran McLoughlin",
    handle: "@kieran_ir_vc",
    bio: "Funding the next gen of RWA & AI Agents at Zynaris. Looking for teams who move fast and break TradFi. $250k upfront checks for production-ready BUIDLs.",
    avatar: "https://i.pinimg.com/736x/02/d4/0e/02d40e84977a224d97f283fe9bf1f6b8.jpg",
    url: "#",
  },
  {
    id: 2,
    name: "Amara Osei",
    handle: "@amara_builds",
    bio: "Founder @ Stacked. Prev Coinbase. Building the next layer of DeFi infrastructure for emerging markets.",
    avatar: "https://i.pinimg.com/736x/ea/66/27/ea66277fe7257a6541f4bd93dc4d0199.jpg",
    url: "#",
  },
  {
    id: 3,
    name: "Leo Martinez",
    handle: "@leomartz_dev",
    bio: "Full-stack engineer turned founder. Passionate about zero-knowledge proofs and open-source tooling.",
    avatar: "https://i.pinimg.com/736x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg",
    url: "#",
  },
  {
    id: 4,
    name: "Priya Nair",
    handle: "@priya_web3",
    bio: "Product designer & Web3 enthusiast. Making complex blockchain UX actually usable for real humans.",
    avatar: "https://i.pinimg.com/736x/25/47/15/254715d4ed7d0b9d456071cefd4d89c6.jpg",
    url: "#",
  },
  {
    id: 5,
    name: "Sam Iwata",
    handle: "@sam_protocol",
    bio: "Protocol researcher. Previously EF. Writing about MEV, PBS, and the future of block production.",
    avatar: "https://i.pinimg.com/1200x/d0/99/32/d099329283292a85affcbc5359e4d89c.jpg",
    url: "#",
  },
  {
    id: 6,
    name: "Chisom Eze",
    handle: "@chisom_vc",
    bio: "Early-stage investor at Horizon Capital. Focused on Africa-first Web3 infrastructure and payments.",
    avatar: "https://i.pinimg.com/1200x/35/ac/f8/35acf871ae1a6f6c8defbe0b43c748a4.jpg",
    url: "#",
  },
  {
    id: 7,
    name: "Yuki Tanaka",
    handle: "@yuki_onchain",
    bio: "Smart contract auditor. Keeping your funds safe one line of Solidity at a time.",
    avatar: "https://i.pinimg.com/736x/49/3e/6d/493e6dfff47fa5e353f817cb84d68dd3.jpg",
    url: "#",
  },
];

export function BuildContent({ build, activeTab }: BuildContentProps) {
  return (
    <div className="flex-1 min-w-0">
      <BuildTabs activeTab={activeTab} onTabChange={() => {}} build={build} />

      {activeTab === "details" && <BuildDetails build={build} />}
      {activeTab === "team" && <BuildTeam build={build} />}
      {activeTab === "milestones" && <BuildMilestones build={build} />}
      {activeTab === "followers" && (
        <div className="text-sm text-gray-500 py-8 text-center">
          {build.followers} follower{build.followers !== 1 ? "s" : ""}
        </div>
      )}
      {activeTab === "upvoters" && (
        <div className="py-4">
          <div className="text-sm text-gray-500 pb-4 text-center">
            {build.upvotes} upvote{build.upvotes !== 1 ? "s" : ""}
          </div>
          <Upvoters upvoters={UPVOTERS} />
        </div>
      )}
    </div>
  );
}