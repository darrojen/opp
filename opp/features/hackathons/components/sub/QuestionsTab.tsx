// 'use client';

// export default function QuestionsTab() {
//   return (
//     <div className="space-y-4">
//       <h2 className="text-lg font-semibold">Ask a Question</h2>
//       <p className="text-gray-600">
//         Have doubts? Ask the organizers or the community.
//       </p>
//     </div>
//   );
// }


// AskUsage.tsx — example usage of the Ask (Q&A) component

"use client";

import Ask from "@/features/sub_components/ask/compoents/Ask";
import { Question } from "@/features/sub_components/ask/types/Ask";



// ---------------------------------------------------------------------------
// Example 1: Auto-fetch (no props needed)
// The component calls fetchQuestions() internally when no data is passed.
// ---------------------------------------------------------------------------

export function AskAutoFetch() {
  return (
    <div style={{ padding: "24px" }}>
      <Ask teammatesHref="/hackathons/my-hackathon/team" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Example 2: Pass questions directly + custom submit handler
// (e.g. you manage state at the page level, or use a real API)
// ---------------------------------------------------------------------------

const MOCK_QUESTIONS: Question[] = [
  {
    id: "q-001",
    title: "Team Size",
    body: "What's the maximum team size we can have?",
    status: "resolved",
    author: { name: "hacker92683ba" },
    publishedAt: "2026/03/27",
    replyCount: 1,
    replies: [
      {
        id: "r-001",
        body: "There is no maximum team size for this challenge. Everyone is welcome, and multiple submissions are encouraged.",
        author: { name: "Organizer Assistant", badge: "AIGC" },
        publishedAt: "2026/03/27",
        isOfficialAnswer: true,
      },
    ],
  },
  {
    id: "q-002",
    title: "Can we use third-party APIs?",
    body: "Are we allowed to integrate third-party APIs alongside AWS services?",
    status: "open",
    author: { name: "dev_martina" },
    publishedAt: "2026/03/26",
    replyCount: 0,
  },
];

export function AskWithData() {
  return (
    <Ask
      questions={MOCK_QUESTIONS}
      teammatesHref="/team"
      onAskQuestion={async ({ title, body }) => {
        // Replace with your real API call, e.g.:
        // await fetch('/api/questions', { method: 'POST', body: JSON.stringify({ title, body }) });
        console.log("New question submitted:", { title, body });
      }}
      onSelectQuestion={(q) => {
        console.log("Question selected:", q.id, q.title);
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// Example 3: Inside a hackathon detail tab (typical integration)
// Pass hackathon slug or ID as needed for your API calls.
// ---------------------------------------------------------------------------

export default function QandATab({ hackathonSlug }: { hackathonSlug: string }) {
  return (
    <section style={{ maxWidth: 1200, margin: "0 0", padding: "32px 0px" }}>
      <Ask
        teammatesHref={`/hackathons/${hackathonSlug}/team`}
        onAskQuestion={async ({ title, body }) => {
          await fetch(`/api/hackathons/${hackathonSlug}/questions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, body }),
          });
        }}
      />
    </section>
  );
}