
'use client';

import BuildList from "@/features/sub_components/build/components/BuildList";
import { Build } from "@/features/sub_components/build/types/build-list";



const MOCK_BUILDS: Build[] = [
  {
    id: "1",
    title: "Serverless AI Backend Prompt",
    description: "Setting up AWS backends is often overcomplicated and expensive early o...",
    category: "AI / Robotics",
    track: "AWS Prompt the Planet: Transform Ideas into P...",
    author: { username: "anukulKun" },
    hasGithub: true,
  },
  {
    id: "2",
    title: "AWS Infrastructure Automation...",
    description: "5 expert-level prompts for AWS cloud infrastructure automation - IaC...",
    category: "AI / Robotics",
    track: "AWS Prompt the Planet: Transform Ideas into P...",
    author: { username: "hacker19095c3" },
    hasGithub: true,
  },
  {
    id: "3",
    title: "Serverless AI Chatbot (RAG)...",
    description: "Serverless AI Chatbot (RAG) Deployment Prompt",
    category: "Other",
    track: "AWS Prompt the Planet: Transform Ideas into P...",
    author: { username: "hackerxpen" },
    hasGithub: true,
  },
];

export default function BUIDLsTab() {
  return (
    <div className="space-y-4">
      <BuildList
        builds={MOCK_BUILDS}
        tracks={["AWS Prompt the Planet", "Web3 Track", "AI Track"]}
        onBuildClick={(build) => console.log("Clicked:", build.title)}
        onSearch={(q) => console.log("Search:", q)}
        onSortChange={(s) => console.log("Sort:", s)}
        onTrackChange={(t) => console.log("Track:", t)}
      />
    </div>
  );
}