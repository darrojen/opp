

"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  Search,
  Plus,
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  X,
} from "lucide-react"

import Sidebar from "@/components/ui/SidebarT"
import { supabase } from "@/lib/supabase"
import toast from "react-hot-toast"

interface NavbarProps {
  isLoggedIn?: boolean
  user?: any
}

export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
  const [communityOpen, setCommunityOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const displayName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "User"

  const avatarUrl = user?.user_metadata?.avatar_url
  const avatarInitial = displayName[0]?.toUpperCase()

  const handleSignOut = async () => {
    const t = toast.loading("Logging out...")
    await supabase.auth.signOut()
    toast.success("Logged out", { id: t })
    window.location.href = "/"
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto h-16 flex items-center justify-between px-4 md:px-6">

          {/* LEFT */}
          <div className="flex items-center gap-4 md:gap-6">

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
            >
              <Menu size={22} />
            </button>

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow"
              >
                O
              </motion.div>
              <p className="font-large text-lg">Opphex</p>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-3 text-[15px] text-gray-700">

              {/* SIMPLE ITEMS */}
              {["Donate", "GIVeconomy"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -1 }}
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  {item} <ChevronDown size={16} />
                </motion.button>
              ))}

              {/* COMMUNITY */}
              <div
                className="relative"
                onMouseEnter={() => setCommunityOpen(true)}
                onMouseLeave={() => setCommunityOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -1 }}
                  className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100"
                >
                  Community <ChevronDown size={16} />
                </motion.button>

                <AnimatePresence>
                  {communityOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 w-64 bg-white rounded-xl shadow-xl p-3 space-y-2 border"
                    >
                      {[
                        "Get Started",
                        "Givers NFT",
                        "About Us",
                        "Vote",
                        "Join Us",
                        "Leave Feedback",
                      ].map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SEARCH */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                Search <Search size={16} />
              </motion.button>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-3">

            {!isLoggedIn && (
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90 transition"
              >
                Login
              </Link>
            )}

            {isLoggedIn && (
              <>
                {/* CREATE */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md text-sm shadow hover:shadow-md transition"
                >
                  <Plus size={16} /> Create
                </motion.button>

                <button className="sm:hidden p-2 rounded-full bg-orange-500 text-white">
                  <Plus size={18} />
                </button>

                {/* NOTIFICATIONS */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <Bell size={18} />
                </motion.button>

                {/* PROFILE */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 bg-gray-100 px-2 py-1.5 rounded-full"
                  >
                    {avatarUrl ? (
                      <img src={avatarUrl} className="h-8 w-8 rounded-full" />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center">
                        {avatarInitial}
                      </div>
                    )}
                  </button>

                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border overflow-hidden"
                      >
                        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex gap-2">
                          <Settings size={16} /> Settings
                        </button>
                        <button
                          onClick={handleSignOut}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500 flex gap-2"
                        >
                          <LogOut size={16} /> Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />

            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-lg p-4"
            >
              <div className="max-w-3xl mx-auto flex items-center gap-3">
                <Search size={20} />
                <input
                  autoFocus
                  placeholder="Search..."
                  className="w-full outline-none text-lg"
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="h-16" />
    </>
  )
}