// components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { X, Home, Compass, PlaySquare, Clock, ThumbsUp, Play } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const mainItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Explore', href: '/explore' },
    { icon: PlaySquare, label: 'Library', href: '/library' },
    { icon: Clock, label: 'History', href: '/history' },
    { icon: ThumbsUp, label: 'Liked videos', href: '/liked' },
    { icon: Play, label: 'Your videos', href: '/your-videos' },
  ]

  return (
    <div
      className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-[#0f0f0f] border-r border-[#272727]
        text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-[#272727]">
        <button onClick={onClose} className="p-2 rounded-full hover:bg-[#272727]">
          <X size={24} />
        </button>
        <span className="text-xl font-bold">
          <span className="text-red-600">Your</span>App
        </span>
      </div>

      <nav className="py-2">
        {mainItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center gap-6 px-6 py-3 hover:bg-[#272727] transition"
          >
            <item.icon size={24} />
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* You can add more sections: Sign in prompt, Explore categories, etc. */}
      <div className="px-6 py-4 border-t border-[#272727] text-sm text-gray-400">
        Sign in to like videos, comment, and subscribe.
        <Link
          href="/auth/signin"
          onClick={onClose}
          className="block mt-3 px-4 py-2 border border-gray-500 rounded-full text-center hover:bg-[#272727]"
        >
          Sign in
        </Link>
      </div>
    </div>
  )
}