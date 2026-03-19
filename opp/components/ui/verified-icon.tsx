"use client"

export default function VerifiedIcon({
  className = "w-4 h-4",
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Star / badge shape */}
      <path d="M12 2l2.39 2.39 3.38-.49 1.1 3.23 3.23 1.1-.49 3.38L22 12l-2.39 2.39.49 3.38-3.23 1.1-1.1 3.23-3.38-.49L12 22l-2.39-2.39-3.38.49-1.1-3.23-3.23-1.1.49-3.38L2 12l2.39-2.39-.49-3.38 3.23-1.1 1.1-3.23 3.38.49L12 2z" />
      
      {/* Checkmark */}
      <path
        d="M10.2 13.8l-2-2a1 1 0 10-1.4 1.4l2.7 2.7a1 1 0 001.4 0l5-5a1 1 0 10-1.4-1.4l-4.3 4.3z"
        fill="white"
      />
    </svg>
  )
}