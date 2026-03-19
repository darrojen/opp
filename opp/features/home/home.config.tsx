

"use client"

import CommunityUp from "@/features/home/components/CommunityUp"
import ForYou from "@/features/home/components/ForYou"
import JoinTeam from "@/features/home/components/JoinTeam"
import ProfileSide from "@/features/home/components/ProfileSidebar"
import { useState, useRef, useEffect, useCallback } from "react"

type Tab = "foryou" | "join" | "community"

const TABS: { id: Tab; label: React.ReactNode }[] = [
  { id: "foryou", label: "For You" },
  {
    id: "join",
    label: (
      <>
        Join a Team{" "}
        <span className="ml-1 text-sm bg-orange-100 px-2 py-0.5 rounded">New</span>
      </>
    ),
  },
  { id: "community", label: "Community Updates" },
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>("foryou")
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const navRef = useRef<HTMLDivElement>(null)

  const updateIndicator = useCallback(() => {
    const idx = TABS.findIndex((t) => t.id === activeTab)
    const el = tabRefs.current[idx]
    const nav = navRef.current
    if (!el || !nav) return
    const navRect = nav.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()
    setIndicatorStyle({
      left: elRect.left - navRect.left + nav.scrollLeft,
      width: elRect.width,
    })
  }, [activeTab])

  // Recalculate when active tab changes
  useEffect(() => {
    updateIndicator()
  }, [updateIndicator])

  // Recalculate on resize
  useEffect(() => {
    const observer = new ResizeObserver(() => updateIndicator())
    if (navRef.current) observer.observe(navRef.current)
    return () => observer.disconnect()
  }, [updateIndicator])

  // Recalculate on scroll inside nav (mobile swipe)
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    nav.addEventListener("scroll", updateIndicator)
    return () => nav.removeEventListener("scroll", updateIndicator)
  }, [updateIndicator])

  const renderContent = () => {
    switch (activeTab) {
      case "join":      return <JoinTeam />
      case "community": return <CommunityUp />
      default:          return <ForYou />
    }
  }

  return (
    <div className="bg-[#F7F7F9] min-h-screen pt-15 px-4 md:px-8 py-6">

      {/* TOP NAV TABS */}
      <div className="border-b mb-6">
        <div
          ref={navRef}
          className="relative flex gap-4 md:gap-6 overflow-x-auto text-md font-medium"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {TABS.map(({ id, label }, i) => (
            <button
              key={id}
              ref={(el) => { tabRefs.current[i] = el }}
              onClick={() => setActiveTab(id)}
              className={`pb-2 transition-colors duration-200 whitespace-nowrap shrink-0 ${
                activeTab === id ? "text-orange-500" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
            </button>
          ))}

          {/* Animated sliding underline */}
          <span
            className="absolute bottom-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">{renderContent()}</div>
        <div className="hidden lg:block"><ProfileSide /></div>
      </div>
    </div>
  )
}