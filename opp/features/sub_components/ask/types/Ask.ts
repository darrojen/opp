// ask.ts — types & API helpers for the Hackathon Q&A feature

export type QuestionStatus = "open" | "resolved" | "pending";

export interface QuestionReply {
  id: string;
  body: string;
  author: {
    name: string;
    avatarUrl?: string;
    role?: string; // e.g. "Organizer Assistant"
    badge?: string; // e.g. "AIGC"
  };
  publishedAt: string;
  isOfficialAnswer?: boolean;
}

export interface Question {
  id: string;
  title: string;
  body: string;
  status: QuestionStatus;
  author: {
    name: string;
    avatarUrl?: string;
  };
  publishedAt: string;
  replyCount: number;
  replies?: QuestionReply[];
}

export interface AskProps {
  questions?: Question[];
  /** Link URL for "Looking for teammates? Check here" */
  teammatesHref?: string;
  /** Called when user submits a new question */
  onAskQuestion?: (data: { title: string; body: string }) => Promise<void>;
  /** Called when a question card is clicked to expand */
  onSelectQuestion?: (question: Question) => void;
}

// ---------------------------------------------------------------------------
// Status config
// ---------------------------------------------------------------------------

export const QUESTION_STATUS_CONFIG: Record<
  QuestionStatus,
  { label: string; color: string; bg: string; icon: string }
> = {
  resolved: { label: "Resolved", color: "#16a34a", bg: "#f0fdf4", icon: "✅" },
  open:     { label: "Open",     color: "#2563eb", bg: "#eff6ff", icon: "💬" },
  pending:  { label: "Pending",  color: "#b45309", bg: "#fffbeb", icon: "⏳" },
};

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

export async function fetchQuestions(): Promise<Question[]> {
  // Replace with: const res = await fetch('/api/questions'); return res.json();
  return [
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
          body: "The hackathon description does not specify a maximum team size, so there does not appear to be any limit on the number of people who can form a team for this challenge. Everyone is welcome, and multiple submissions are encouraged.",
          author: {
            name: "Organizer Assistant",
            badge: "AIGC",
          },
          publishedAt: "2026/03/27",
          isOfficialAnswer: true,
        },
      ],
    },
    {
      id: "q-002",
      title: "Can we use third-party APIs?",
      body: "Are we allowed to integrate third-party APIs (like OpenAI, Stripe) alongside AWS services in our submission?",
      status: "open",
      author: { name: "dev_martina" },
      publishedAt: "2026/03/26",
      replyCount: 0,
    },
  ];
}

export async function submitQuestion(data: {
  title: string;
  body: string;
}): Promise<Question> {
  // Replace with real API call
  console.log("[ask] submitting question", data);
  return {
    id: `q-${Date.now()}`,
    title: data.title,
    body: data.body,
    status: "open",
    author: { name: "You" },
    publishedAt: new Date().toLocaleDateString("en-CA"),
    replyCount: 0,
    replies: [],
  };
}