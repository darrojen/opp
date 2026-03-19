"use client"

import { useTheme } from "next-themes"
import { Sun, Moon, Laptop } from "lucide-react"
import { useState, useEffect } from "react"

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-white dark:bg-[#11212D] shadow-xl overflow-hidden">

      <button
        onClick={() => setTheme("light")}
        className={`flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#253745] ${theme === "light" && "font-semibold"}`}
      >
        <Sun size={18} />
        Light
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#253745] ${theme === "dark" && "font-semibold"}`}
      >
        <Moon size={18} />
        Dark
      </button>

      <button
        onClick={() => setTheme("system")}
        className={`flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#253745] ${theme === "system" && "font-semibold"}`}
      >
        <Laptop size={18} />
        System
      </button>

    </div>
  )
}