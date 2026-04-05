// Ask.tsx — Hackathon Q&A section

"use client";

import React, { useEffect, useState } from "react";
import { IoMail } from "react-icons/io5";
import { HiPlus, HiChatAlt2 } from "react-icons/hi";

import { AskProps,
  Question,
  QuestionReply,
  QUESTION_STATUS_CONFIG,
  fetchQuestions, submitQuestion } from "@/features/sub_components/ask/types/Ask";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function initials(name: string) {
  return name
    .split(/[\s_]/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// ---------------------------------------------------------------------------
// StatusBadge
// ---------------------------------------------------------------------------

function StatusBadge({ status }: { status: Question["status"] }) {
  const cfg = QUESTION_STATUS_CONFIG[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 12,
        fontWeight: 700,
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.color}25`,
        borderRadius: 20,
        padding: "3px 10px 3px 8px",
      }}
    >
      {cfg.icon} {cfg.label}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------

function Avatar({
  name,
  avatarUrl,
  size = 36,
}: {
  name: string;
  avatarUrl?: string;
  size?: number;
}) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        style={{ width: size, height: size, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
      />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#1a1a2e",
        color: "#e2e8f0",
        fontSize: size * 0.33,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        letterSpacing: "0.02em",
      }}
    >
      {initials(name)}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ReplyCard
// ---------------------------------------------------------------------------

function ReplyCard({ reply }: { reply: QuestionReply }) {
  return (
    <div
      style={{
        background: "#fafafa",
        border: "1px solid #f0f0f0",
        borderRadius: 10,
        padding: "14px 16px",
        marginTop: 12,
      }}
    >
      {/* Reply header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 8,
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {reply.isOfficialAnswer && <StatusBadge status="resolved" />}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {reply.author.avatarUrl ? (
            <img
              src={reply.author.avatarUrl}
              alt={reply.author.name}
              style={{ width: 18, height: 18, borderRadius: "50%" }}
            />
          ) : (
            <IoMail size={15} style={{ color: "#9ca3af" }} />
          )}
          <span style={{ fontSize: 12, color: "#6b7280" }}>{reply.author.name}</span>
          {reply.author.badge && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#e07b39",
                background: "#fff4ee",
                borderRadius: 4,
                padding: "1px 5px",
                letterSpacing: "0.04em",
              }}
            >
              {reply.author.badge}
            </span>
          )}
        </div>
      </div>

      {/* Reply body */}
      <p style={{ fontSize: 13.5, color: "#374151", margin: 0, lineHeight: 1.7 }}>
        {reply.body}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// QuestionCard
// ---------------------------------------------------------------------------

function QuestionCard({
  question,
  onClick,
}: {
  question: Question;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((e) => !e);
    onClick();
  };

  const visibleReplies = question.replies ?? [];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "#e07b3930" : "#e5e7eb"}`,
        borderRadius: 12,
        background: "#fff",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 4px 20px rgba(0,0,0,0.06)"
          : "0 1px 3px rgba(0,0,0,0.04)",
        transition: "all 0.2s ease",
      }}
    >
      {/* Card body */}
      <div style={{ padding: "18px 20px", cursor: "pointer" }} onClick={handleClick}>
        {/* Top row: avatar + name + date */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
            gap: 8,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar name={question.author.name} avatarUrl={question.author.avatarUrl} size={32} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
              {question.author.name}
            </span>
          </div>
          <span style={{ fontSize: 12, color: "#9ca3af", flexShrink: 0 }}>
            {question.publishedAt}
          </span>
        </div>

        {/* Title */}
        <h4 style={{ fontSize: 15, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>
          {question.title}
        </h4>

        {/* Body */}
        <p style={{ fontSize: 13.5, color: "#6b7280", margin: "0 0 12px", lineHeight: 1.6 }}>
          {question.body}
        </p>

        {/* Footer: reply count */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <HiChatAlt2 size={15} style={{ color: "#9ca3af" }} />
          <span style={{ fontSize: 12, color: "#9ca3af" }}>{question.replyCount}</span>
        </div>
      </div>

      {/* Replies */}
      {visibleReplies.length > 0 && (
        <div style={{ borderTop: "1px solid #f3f4f6", padding: "0 20px 16px" }}>
          {visibleReplies.map((reply) => (
            <ReplyCard key={reply.id} reply={reply} />
          ))}
          {question.replyCount > visibleReplies.length && (
            <button
              style={{
                background: "none",
                border: "none",
                fontSize: 12,
                color: "#9ca3af",
                cursor: "pointer",
                padding: "10px 0 0",
                display: "block",
                width: "100%",
                textAlign: "center",
              }}
            >
              View all {question.replyCount} {question.replyCount === 1 ? "reply" : "replies"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Ask Question modal / inline form
// ---------------------------------------------------------------------------

function AskQuestionForm({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (data: { title: string; body: string }) => Promise<void>;
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setLoading(true);
    await onSubmit({ title: title.trim(), body: body.trim() });
    setLoading(false);
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: "10px 12px",
    fontSize: 14,
    color: "#111",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    background: "#fafafa",
    resize: "none",
    transition: "border-color 0.15s",
  };

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: "20px",
        background: "#fff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111" }}>
        Ask a Question
      </h4>

      <input
        placeholder="Short, specific title (e.g. Team Size Limit)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="Provide more details about your question…"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        style={inputStyle}
      />

      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "1px solid #e5e7eb",
            borderRadius: 7,
            padding: "7px 14px",
            fontSize: 13,
            color: "#6b7280",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={!title.trim() || loading}
          style={{
            background: title.trim() ? "#e07b39" : "#e5e7eb",
            border: "none",
            borderRadius: 7,
            padding: "7px 18px",
            fontSize: 13,
            fontWeight: 600,
            color: title.trim() ? "#fff" : "#9ca3af",
            cursor: title.trim() ? "pointer" : "not-allowed",
            transition: "background 0.18s",
          }}
        >
          {loading ? "Submitting…" : "Submit"}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function Ask({
  questions: questionsProp,
  teammatesHref = "#",
  onAskQuestion,
  onSelectQuestion,
}: AskProps) {
  const [questions, setQuestions] = useState<Question[]>(questionsProp ?? []);
  const [showForm, setShowForm] = useState(false);
  const [sortDesc, setSortDesc] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!questionsProp || questionsProp.length === 0) {
      fetchQuestions().then(setQuestions);
    }
  }, [questionsProp]);

  const handleAsk = async (data: { title: string; body: string }) => {
    if (onAskQuestion) {
      await onAskQuestion(data);
    } else {
      const newQ = await submitQuestion(data);
      setQuestions((prev) => [newQ, ...prev]);
    }
  };

  const sorted = [...questions].sort((a, b) => {
    const da = new Date(a.publishedAt).getTime();
    const db = new Date(b.publishedAt).getTime();
    return sortDesc ? db - da : da - db;
  });

  return (
    <div
      style={{
        display: "flex",
        gap: isMobile ? 0 : 40,
        alignItems: "flex-start",
        flexDirection: isMobile ? "column" : "row",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        maxWidth: 1200,
        width: "100%",
      }}
    >
      {/* ── Left sidebar ─────────────────────────────────── */}
      <div
        style={{
          width: isMobile ? "100%" : 240,
          flexShrink: 0,
          position: isMobile ? "static" : "sticky",
          top: 80,
          marginBottom: isMobile ? 24 : 0,
        }}
      >
        <h2 style={{ fontSize: isMobile ? 20 : 22, fontWeight: 700, color: "#111", margin: "0 0 6px" }}>
          Hackathon Q&amp;A
        </h2>
        <p style={{ fontSize: 13.5, color: "#6b7280", margin: "0 0 18px", lineHeight: 1.6 }}>
          Have any questions about the hackathon? Feel free to ask the organizers here and get the answers you need.
        </p>

        <button
          onClick={() => setShowForm((s) => !s)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: showForm ? "#c96a2e" : "#e07b39",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            fontWeight: 700,
            fontSize: 13.5,
            padding: "9px 18px",
            cursor: "pointer",
            marginBottom: 16,
            transition: "background 0.18s",
          }}
        >
          <HiPlus size={15} />
          {showForm ? "Cancel" : "+ Ask a Question"}
        </button>

        <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
          Looking for teammates? Check{" "}
          <a
            href={teammatesHref}
            style={{ color: "#e07b39", fontWeight: 600, textDecoration: "none" }}
          >
            here
          </a>{" "}
          .
        </p>
      </div>

      {/* ── Right content ─────────────────────────────────── */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Ask form (inline, appears above list) */}
        {showForm && (
          <AskQuestionForm onClose={() => setShowForm(false)} onSubmit={handleAsk} />
        )}

        {/* Sort control */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <button
            onClick={() => setSortDesc((s) => !s)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              color: "#6b7280",
              fontWeight: 500,
              padding: "4px 0",
            }}
          >
            <span style={{ fontSize: 15 }}>⇅</span> Sort
          </button>
        </div>

        {/* Questions list */}
        {sorted.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              color: "#9ca3af",
              fontSize: 14,
            }}
          >
            No questions yet — be the first to ask!
          </div>
        ) : (
          sorted.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              onClick={() => onSelectQuestion?.(q)}
            />
          ))
        )}
      </div>
    </div>
  );
}