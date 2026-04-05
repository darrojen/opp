// 'use client'

// import Link from "next/link"
// import { useState, useEffect } from "react"
// import { Menu, X } from "lucide-react"

// export default function Navbar() {
//   const [isMobileOpen, setIsMobileOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

// // const [authOpen, setAuthOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 8)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <>
//       {/* Floating Navbar */}
//       <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">

//         <div
//           className={`
//           w-full max-w-6xl
//           rounded-full
//           border border-[#253745]
//           bg-[#11212D]/80
//           backdrop-blur-xl
//           transition-all duration-500 ease-out
//           ${isScrolled ? "scale-[0.99] shadow-xl" : "scale-110"}
//           `}
//         >
//           <div className="flex items-center justify-between h-16 px-6 lg:px-8">

//             {/* Logo */}
//             <Link
//               href="/"
//               className="flex items-center gap-3 text-[#CCD0CF] font-bold tracking-wide"
//             >
//               <div className="
//                 flex h-9 w-9 items-center justify-center
//                 rounded-lg
//                 bg-[#4A5C6A]
//                 text-[#06141B]
//                 font-black
//                 transition-transform duration-300
//                 hover:scale-110
//               ">
//                 O
//               </div>

//               <span className="text-lg">Opp</span>
//             </Link>

//             {/* Desktop Nav */}
//             <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-[#9BA8AB]">

//               {["Home","About","Service","Work","FAQs"].map((item) => (
//                 <Link
//                   key={item}
//                   href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//                   className="
//                   relative
//                    hover:text-[#ffffff]
//                   transition-colors
//                   duration-300
//                   after:absolute
//                   after:-bottom-1
//                   after:left-0
//                   after:h-[2px]
//                   after:w-0
//                   after:bg-[#9BA8AB]
//                   after:transition-all
//                   after:duration-300
//                   hover:after:w-full
//                   "
//                 >
//                   {item}
//                 </Link>
//               ))}

//             </nav>

//             {/* CTA */}
//             <Link
//               href="/auth/signin"
//               className="
//               hidden lg:inline-flex
//               items-center
//               px-5 py-2
//               rounded-full
//               bg-white
//               text-[#06141B]
//               font-semibold
//               hover:bg-[#CCD0CF]
//               transition-all
//               duration-300
//               hover:scale-105
//               "
//             >
//               Sign in
//             </Link>

//             {/* Mobile Button */}
//             <button
//               onClick={() => setIsMobileOpen(!isMobileOpen)}
//               className="lg:hidden text-[#CCD0CF]"
//               aria-label="Toggle menu"
//             >
//               {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>

//           </div>
//         </div>
//       </header>

//       {/* Backdrop */}
//       <div
//         className={`
//         fixed inset-0 z-40
//         bg-black/40 backdrop-blur-sm
//         transition-opacity duration-300
//         lg:hidden
//         ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}
//         `}
//         onClick={() => setIsMobileOpen(false)}
//       />

//       {/* Mobile Drawer */}
//       <div
//         className={`
//         fixed top-0 right-0 z-50
//         h-full w-72
//         bg-[#11212D]
//         border-l border-[#253745]
//         text-[#CCD0CF]
//         p-6
//         transform transition-transform duration-500 ease-out
//         lg:hidden
//         ${isMobileOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >

//         <div className="flex justify-between items-center mb-10">
//           <span className="text-xl font-bold">PIXEL</span>

//           <button onClick={() => setIsMobileOpen(false)}>
//             <X />
//           </button>
//         </div>

//         <nav className="flex flex-col gap-7 text-lg">

//           {["Home","About","Service","Work","FAQs"].map((item) => (
//             <Link
//               key={item}
//               href={`/${item === "Home" ? "" : item.toLowerCase()}`}
//               onClick={() => setIsMobileOpen(false)}
//               className="
//               text-[#9BA8AB]
//               hover:text-[#CCD0CF]
//               transition-colors duration-300
//               "
//             >
//               {item}
//             </Link>
//           ))}

//           <Link
//             href="/auth/signin"
//             onClick={() => setIsMobileOpen(false)}
//             className="
//             mt-4
//             bg-[#CCD0CF]
//             text-[#06141B]
//             font-semibold
//             px-4 py-3
//             rounded-lg
//             text-center
//             hover:bg-white
//             transition
//             "
//           >
//             Sign in
//           </Link>

//         </nav>
//       </div>
//     </>
//   )
// }

// // components/Navbar.tsx
// 'use client'

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import {
//   Menu,
//   X,
//   Search,
//   Mic,
//   Plus,
//   Bell,
//   User,
//   Upload,
// } from 'lucide-react'
// import Sidebar from '@/components/ui/SidebarT'

// interface NavbarProps {
//   isLoggedIn?: boolean // pass from auth context / provider
// }

// export default function Navbar({ isLoggedIn = false }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   // Optional: subtle shadow on scroll
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 0)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* Top Header – YouTube style */}
//       <header
//         className={`
//           fixed top-0 left-0 right-0 z-50
//           bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#272727]
//           transition-shadow duration-300
//           ${isScrolled ? 'shadow-md' : ''}
//         `}
//       >
//         <div className="flex items-center justify-between h-14 px-4 md:px-6 max-w-[2000px] mx-auto">
//           {/* Left: Hamburger + Logo */}
//           <div className="flex items-center gap-4 md:gap-6">
//             <button
//               onClick={() => setIsSidebarOpen(true)}
//               className="p-2 rounded-full hover:bg-[#272727] text-white"
//               aria-label="Open menu"
//             >
//               <Menu size={24} />
//             </button>

//             <Link href="/" className="flex items-center gap-1">
//               <span className="text-white font-bold text-xl tracking-tight">
//                 <span className="text-red-600">Your</span>App
//               </span>
//               {/* Optional: <span className="text-xs text-gray-400 ml-1">NG</span> */}
//             </Link>
//           </div>

//           {/* Center: Search bar */}
//           <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-12 items-center">
//             <div className="flex w-full items-center rounded-full bg-[#121212] border border-[#303030] hover:border-[#505050] focus-within:border-blue-600 overflow-hidden">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="
//                   flex-1 bg-transparent border-none outline-none
//                   px-5 py-2.5 text-white placeholder-gray-400
//                 "
//               />
//               <button className="px-5 py-2.5 bg-[#222] hover:bg-[#333] border-l border-[#303030]">
//                 <Search size={20} className="text-gray-400" />
//               </button>
//             </div>

//             <button className="ml-3 p-3 rounded-full bg-[#222] hover:bg-[#333] text-gray-300">
//               <Mic size={20} />
//             </button>
//           </div>

//           {/* Right: Actions */}
//           <div className="flex items-center gap-2 md:gap-3">
//             {/* Mobile search icon */}
//             <button className="md:hidden p-2 rounded-full hover:bg-[#272727]">
//               <Search size={22} className="text-white" />
//             </button>

//             {isLoggedIn ? (
//               <>
//                 <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#272727] text-white">
//                   <Plus size={20} />
//                   <span className="text-sm font-medium">Create</span>
//                 </button>

//                 <button className="p-2 rounded-full hover:bg-[#272727] relative">
//                   <Bell size={22} className="text-white" />
//                   {/* badge example */}
//                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] flex items-center justify-center">
//                     3
//                   </span>
//                 </button>

//                 <button className="p-1 rounded-full hover:bg-[#272727]">
//                   <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
//                     D
//                   </div>
//                 </button>
//               </>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 className="
//                   px-4 py-1.5 rounded-full bg-white text-black
//                   font-medium hover:bg-gray-200 transition
//                 "
//               >
//                 Sign in
//               </Link>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Backdrop when sidebar open */}
//       <div
//         className={`
//           fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//           transition-opacity duration-300 md:hidden
//           ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
//         `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       {/* Sidebar Drawer – put this here, outside header */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Spacer so content isn't hidden under fixed header */}
//       <div className="h-14" />
//     </>
//   )
// }

// // components/Navbar.tsx
// 'use client'

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import {
//   Menu,
//   X,
//   Search,
//   Mic,
//   Plus,
//   Bell,
// } from 'lucide-react'
// import Sidebar from '@/components/ui/SidebarT' // your existing sidebar

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     avatar_url?: string
//     full_name?: string
//     email?: string
//   } | null // optional: pass real user data if you have it
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 0)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Derive display values
//   const displayName = user?.full_name || user?.email?.split('@')[0] || 'User'
//   const avatarInitial = displayName[0]?.toUpperCase() || 'U'

//   return (
//     <>
//       {/* Fixed top bar – YouTube style */}
//       <header
//         className={`
//           fixed top-0 left-0 right-0 z-50
//           bg-[#0f0f0f] border-b border-[#272727]
//           transition-shadow duration-300
//           ${isScrolled ? 'shadow-md' : ''}
//         `}
//       >
//         <div className="flex items-center justify-between h-14 px-4 md:px-6 max-w-[2000px] mx-auto">
//           {/* Left: Menu + Logo */}
//           <div className="flex items-center gap-4 md:gap-6">
//             <button
//               onClick={() => setIsSidebarOpen(true)}
//               className="p-2 rounded-full hover:bg-[#272727] text-white transition-colors"
//               aria-label="Open menu"
//             >
//               <Menu size={24} />
//             </button>

//             <Link href="/" className="flex items-center gap-1.5">
//               <span className="text-white font-bold text-xl tracking-tight">
//                 <span className="text-red-600">Your</span>App
//               </span>
//             </Link>
//           </div>

//           {/* Center: Search bar + mic (visible on md+) */}
//           <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-10 items-center">
//             <div className="flex w-full items-center rounded-full bg-[#121212] border border-[#303030] hover:border-[#505050] focus-within:border-[#3ea6ff] overflow-hidden transition-colors">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="
//                   flex-1 bg-transparent border-none outline-none
//                   px-5 py-2.5 text-white placeholder-gray-400
//                   text-sm
//                 "
//               />
//               <button
//                 className="px-5 py-2.5 bg-[#222] hover:bg-[#333] border-l border-[#303030] transition-colors"
//                 aria-label="Search"
//               >
//                 <Search size={20} className="text-gray-400" />
//               </button>
//             </div>

//             <button
//               className="ml-3 p-3 rounded-full bg-[#222] hover:bg-[#333] text-gray-300 transition-colors"
//               aria-label="Voice search"
//             >
//               <Mic size={20} />
//             </button>
//           </div>

//           {/* Right side – changes based on login state */}
//           <div className="flex items-center gap-2 md:gap-3">
//             {/* Mobile-only search icon */}
//             <button className="md:hidden p-2 rounded-full hover:bg-[#272727] text-white">
//               <Search size={22} />
//             </button>

//             {isLoggedIn ? (
//               <>
//                 {/* Create button */}
//                 <button className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#272727] hover:bg-[#3d3d3d] text-white text-sm font-medium transition-colors">
//                   <Plus size={18} />
//                   Create
//                 </button>

//                 {/* Notifications */}
//                 <button
//                   className="p-2 rounded-full hover:bg-[#272727] relative text-white transition-colors"
//                   aria-label="Notifications"
//                 >
//                   <Bell size={22} />
//                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center text-white border-2 border-[#0f0f0f]">
//                     9+
//                   </span>
//                 </button>

//                 {/* Profile avatar */}
//                 <button
//                   className="p-1 rounded-full hover:bg-[#272727] transition-colors"
//                   aria-label="Account"
//                 >
//                   {user?.avatar_url ? (
//                     <img
//                       src={user.avatar_url}
//                       alt="Profile"
//                       className="h-8 w-8 rounded-full object-cover border border-gray-600"
//                     />
//                   ) : (
//                     <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
//                       {avatarInitial}
//                     </div>
//                   )}
//                 </button>
//               </>
//             ) : (
//               <>
//                 {/* Sign in button when not logged in */}
//                 <Link
//                   href="/auth/signin"
//                   className="
//                     px-4 py-1.5 rounded-full bg-white text-black
//                     text-sm font-medium hover:bg-gray-200 transition
//                   "
//                 >
//                   Sign in
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Backdrop for mobile sidebar */}
//       <div
//         className={`
//           fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//           transition-opacity duration-300 md:hidden
//           ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
//         `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Spacer */}
//       <div className="h-14" />
//     </>
//   )
// }

// // components/Navbar.tsx
// 'use client'

// import Link from 'next/link'
// import { useState, useEffect, useRef } from 'react'
// import {
//   Menu,
//   X,
//   Search,
//   Mic,
//   Plus,
//   Bell,
//   ChevronDown,
//   LogOut,
//   UserCircle,
//   Settings,
//   SwitchCamera,
// } from 'lucide-react'
// import Sidebar from '@/components/ui/SidebarT'
// import { supabase } from '@/lib/supabase' // for sign out

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     id: string
//     email?: string
//     user_metadata?: {
//       full_name?: string
//       avatar_url?: string
//       [key: string]: any
//     }
//   } | null
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)

//   const profileRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 0)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     setIsProfileOpen(false)
//     // Optional: redirect to home or login
//     window.location.href = '/'
//   }

//   // Derive display values
//   const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'
//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase() || 'U'

//   return (
//     <>
//       {/* Fixed top bar */}
//       <header
//         className={`
//           fixed top-0 left-0 right-0 z-50
//           bg-[#0f0f0f] border-b border-[#272727]
//           transition-shadow duration-300
//           ${isScrolled ? 'shadow-md' : ''}
//         `}
//       >
//         <div className="flex items-center justify-between h-14 px-4 md:px-6 max-w-[2000px] mx-auto">
//           {/* Left: Menu + Logo */}
//           <div className="flex items-center gap-4 md:gap-6">
//             <button
//               onClick={() => setIsSidebarOpen(true)}
//               className="p-2 rounded-full hover:bg-[#272727] text-white transition-colors"
//               aria-label="Open menu"
//             >
//               <Menu size={24} />
//             </button>

//             <Link href="/" className="flex items-center gap-1.5">
//               <span className="text-white font-bold text-xl tracking-tight">
//                 <span className="text-red-600">Your</span>App
//               </span>
//             </Link>
//           </div>

//           {/* Center: Search + mic */}
//           <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-10 items-center">
//             <div className="flex w-full items-center rounded-full bg-[#121212] border border-[#303030] hover:border-[#505050] focus-within:border-[#3ea6ff] overflow-hidden transition-colors">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="flex-1 bg-transparent border-none outline-none px-5 py-2.5 text-white placeholder-gray-400 text-sm"
//               />
//               <button
//                 className="px-5 py-2.5 bg-[#222] hover:bg-[#333] border-l border-[#303030] transition-colors"
//                 aria-label="Search"
//               >
//                 <Search size={20} className="text-gray-400" />
//               </button>
//             </div>

//             <button
//               className="ml-3 p-3 rounded-full bg-[#222] hover:bg-[#333] text-gray-300 transition-colors"
//               aria-label="Voice search"
//             >
//               <Mic size={20} />
//             </button>
//           </div>

//           {/* Right side */}
//           <div className="flex items-center gap-2 md:gap-3">
//             {/* Mobile search */}
//             <button className="md:hidden p-2 rounded-full hover:bg-[#272727] text-white">
//               <Search size={22} />
//             </button>

//             {isLoggedIn ? (
//               <>
//                 {/* Create */}
//                 <button className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#272727] hover:bg-[#3d3d3d] text-white text-sm font-medium transition-colors">
//                   <Plus size={18} />
//                   Create
//                 </button>

//                 {/* Notifications */}
//                 <button
//                   className="p-2 rounded-full hover:bg-[#272727] relative text-white transition-colors"
//                   aria-label="Notifications"
//                 >
//                   <Bell size={22} />
//                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#0f0f0f]">
//                     9+
//                   </span>
//                 </button>

//                 {/* Profile with dropdown */}
//                 <div className="relative" ref={profileRef}>
//                   <button
//                     onClick={() => setIsProfileOpen(!isProfileOpen)}
//                     className="flex items-center gap-2 p-1 rounded-full hover:bg-[#272727] transition-colors"
//                     aria-label="Account menu"
//                     aria-expanded={isProfileOpen}
//                   >
//                     {avatarUrl ? (
//                       <img
//                         src={avatarUrl}
//                         alt="Profile"
//                         className="h-8 w-8 rounded-full object-cover border border-gray-600"
//                       />
//                     ) : (
//                       <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
//                         {avatarInitial}
//                       </div>
//                     )}
//                   </button>

//                   {/* Dropdown menu */}
//                   {isProfileOpen && (
//                     <div className="absolute right-0 mt-2 w-64 bg-[#0f0f0f] border border-[#272727] rounded-xl shadow-2xl overflow-hidden z-50">
//                       {/* Profile header */}
//                       <div className="p-4 border-b border-[#272727]">
//                         <div className="flex items-center gap-3">
//                           {avatarUrl ? (
//                             <img
//                               src={avatarUrl}
//                               alt="Profile"
//                               className="h-10 w-10 rounded-full object-cover"
//                             />
//                           ) : (
//                             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
//                               {avatarInitial}
//                             </div>
//                           )}
//                           <div>
//                             <p className="font-medium">{displayName}</p>
//                             <p className="text-sm text-gray-400">@{user?.email?.split('@')[0]}</p>
//                           </div>
//                         </div>
//                         <Link
//                           href="/profile"
//                           className="mt-3 block text-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
//                         >
//                           View your channel
//                         </Link>
//                       </div>

//                       {/* Menu items */}
//                       <div className="py-2">
//                         <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#272727] transition-colors text-left">
//                           <Settings size={18} className="text-gray-400" />
//                           <span>Google Account</span>
//                         </button>

//                         <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#272727] transition-colors text-left">
//                           <SwitchCamera size={18} className="text-gray-400" />
//                           <span>Switch account</span>
//                         </button>

//                         <button
//                           onClick={handleSignOut}
//                           className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#272727] transition-colors text-left text-red-400"
//                         >
//                           <LogOut size={18} />
//                           <span>Sign out</span>
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <Link
//                 href="/auth/signin"
//                 className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
//               >
//                 Sign in
//               </Link>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Mobile sidebar backdrop */}
//       <div
//         className={`
//           fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//           transition-opacity duration-300 md:hidden
//           ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
//         `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div className="h-14" />
//     </>
//   )
// }

// // components/Navbar.tsx
// 'use client'

// import Link from 'next/link'
// import { useState, useEffect, useRef } from 'react'
// import {
//   Menu,
//   X,
//   Search,
//   Mic,
//   Plus,
//   Bell,
//   ChevronDown,
//   LogOut,
//   Settings,
//   SwitchCamera,
// } from 'lucide-react'
// import Sidebar from '@/components/ui/SidebarT'
// import { supabase } from '@/lib/supabase'

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     id: string
//     email?: string
//     user_metadata?: {
//       full_name?: string
//       avatar_url?: string
//       [key: string]: any
//     }
//   } | null
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)

//   const profileRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 8)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Close profile dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     setIsProfileOpen(false)
//     window.location.href = '/'
//   }

//   // Display values
//   const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'
//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase() || 'U'

//   return (
//     <>
//       {/* Header with floating pill style when not scrolled */}
//       <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
//         <div
//           className={`
//             w-full max-w-7xl
//             rounded-full
//             border border-[#253745]
//             bg-[#11212D]/80 backdrop-blur-xl
//             transition-all duration-500 ease-out
//             shadow-xl
//             ${isScrolled ? 'scale-[0.98] shadow-2xl' : 'scale-105 shadow-xl'}
//           `}
//         >
//           <div className="flex items-center justify-between h-14 sm:h-16 px-5 sm:px-6 lg:px-8">
//             {/* Left: Menu + Logo */}
//             <div className="flex items-center gap-4 sm:gap-6">
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF] transition-colors"
//                 aria-label="Open menu"
//               >
//                 <Menu size={24} />
//               </button>

//               <Link href="/" className="flex items-center gap-2.5">
//                 <div className="
//                   flex h-9 w-9 items-center justify-center
//                   rounded-lg bg-[#4A5C6A] text-[#06141B]
//                   font-black text-xl
//                 ">
//                   O
//                 </div>
//                 <span className="text-lg sm:text-xl font-bold text-[#CCD0CF] tracking-tight">
//                   YourApp
//                 </span>
//               </Link>
//             </div>

//             {/* Center: Search + mic (hidden on mobile) */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-12 items-center">
//               <div className="flex w-full items-center rounded-full bg-[#0f1620] border border-[#253745] hover:border-[#4A5C6A] focus-within:border-[#CCD0CF] overflow-hidden transition-colors">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="
//                     flex-1 bg-transparent border-none outline-none
//                     px-5 py-2.5 text-[#CCD0CF] placeholder-gray-500
//                     text-sm
//                   "
//                 />
//                 <button
//                   className="px-5 py-2.5 bg-[#1a2634] hover:bg-[#253745] border-l border-[#253745] transition-colors"
//                   aria-label="Search"
//                 >
//                   <Search size={20} className="text-gray-400" />
//                 </button>
//               </div>

//               <button
//                 className="ml-3 p-3 rounded-full bg-[#1a2634] hover:bg-[#253745] text-gray-300 transition-colors"
//                 aria-label="Voice search"
//               >
//                 <Mic size={20} />
//               </button>
//             </div>

//             {/* Right side */}
//             <div className="flex items-center gap-2 sm:gap-4">
//               {/* Mobile search icon */}
//               <button className="md:hidden p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF]">
//                 <Search size={22} />
//               </button>

//               {isLoggedIn ? (
//                 <>
//                   {/* Create */}
//                   <button className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#253745] hover:bg-[#4A5C6A] text-[#CCD0CF] text-sm font-medium transition-colors">
//                     <Plus size={18} />
//                     Create
//                   </button>

//                   {/* Notifications */}
//                   <button
//                     className="p-2 rounded-full hover:bg-[#253745]/50 relative text-[#CCD0CF] transition-colors"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={22} />
//                     <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#11212D]">
//                       9+
//                     </span>
//                   </button>

//                   {/* Profile with dropdown */}
//                   <div className="relative" ref={profileRef}>
//                     <button
//                       onClick={() => setIsProfileOpen(!isProfileOpen)}
//                       className="flex items-center gap-2 p-1 rounded-full hover:bg-[#253745]/50 transition-colors"
//                       aria-label="Account menu"
//                       aria-expanded={isProfileOpen}
//                     >
//                       {avatarUrl ? (
//                         <img
//                           src={avatarUrl}
//                           alt="Profile"
//                           className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-[#4A5C6A]"
//                         />
//                       ) : (
//                         <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm sm:text-base">
//                           {avatarInitial}
//                         </div>
//                       )}
//                     </button>

//                     {/* Dropdown */}
//                     {isProfileOpen && (
//                       <div className="absolute right-0 mt-2 w-64 bg-[#11212D] border border-[#253745] rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-sm">
//                         {/* Profile header */}
//                         <div className="p-4 border-b border-[#253745]">
//                           <div className="flex items-center gap-3">
//                             {avatarUrl ? (
//                               <img
//                                 src={avatarUrl}
//                                 alt="Profile"
//                                 className="h-10 w-10 rounded-full object-cover"
//                               />
//                             ) : (
//                               <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
//                                 {avatarInitial}
//                               </div>
//                             )}
//                             <div>
//                               <p className="font-medium text-[#CCD0CF]">{displayName}</p>
//                               <p className="text-sm text-gray-400">@{user?.email?.split('@')[0]}</p>
//                             </div>
//                           </div>
//                           <Link
//                             href="/profile"
//                             className="mt-3 block text-center text-sm text-[#CCD0CF] hover:text-white transition-colors"
//                           >
//                             View your profile
//                           </Link>
//                         </div>

//                         {/* Menu items */}
//                         <div className="py-2">
//                           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-gray-300">
//                             <Settings size={18} />
//                             <span>Account settings</span>
//                           </button>

//                           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-gray-300">
//                             <SwitchCamera size={18} />
//                             <span>Switch account</span>
//                           </button>

//                           <button
//                             onClick={handleSignOut}
//                             className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-red-400"
//                           >
//                             <LogOut size={18} />
//                             <span>Sign out</span>
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <Link
//                   href="/auth/signin"
//                   className="
//                     hidden sm:inline-flex items-center px-5 py-2
//                     rounded-full bg-[#CCD0CF] text-[#06141B]
//                     font-semibold hover:bg-white transition-all
//                     duration-300 hover:scale-105
//                   "
//                 >
//                   Sign in
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile sidebar backdrop */}
//       <div
//         className={`
//           fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//           transition-opacity duration-300 md:hidden
//           ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
//         `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Spacer */}
//       <div className="h-20 sm:h-24" />
//     </>
//   )
// }

// // components/Navbar.tsx
// 'use client'

// import Link from 'next/link'
// import { useState, useEffect, useRef } from 'react'
// import {
//   Menu,
//   X,
//   Search,
//   Mic,
//   Plus,
//   Bell,
//   ChevronDown,
//   LogOut,
//   Settings,
//   SwitchCamera,
// } from 'lucide-react'
// import Sidebar from '@/components/ui/SidebarT'
// import { supabase } from '@/lib/supabase'

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     id: string
//     email?: string
//     user_metadata?: {
//       full_name?: string
//       avatar_url?: string
//       [key: string]: any
//     }
//   } | null
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)

//   const profileRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 8)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Close profile dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleSignOut = async () => {
//     await supabase.auth.signOut()
//     setIsProfileOpen(false)
//     window.location.href = '/'
//   }

//   // Display values
//   const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'
//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase() || 'U'

//   return (
//     <>
//       {/* Floating pill navbar */}
//       <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
//         <div
//           className={`
//             w-full max-w-7xl
//             rounded-full
//             border border-[#253745]
//             bg-[#11212D]/80 backdrop-blur-xl
//             transition-all duration-500 ease-out
//             shadow-xl
//             ${isScrolled ? 'scale-[0.98] shadow-2xl' : 'scale-105 shadow-xl'}
//           `}
//         >
//           <div className="flex items-center justify-between h-14 sm:h-16 px-5 sm:px-6 lg:px-8">
//             {/* Left: Hamburger (only when logged in) + Logo */}
//             <div className="flex items-center gap-4 sm:gap-6">
//               {isLoggedIn && (
//                 <button
//                   onClick={() => setIsSidebarOpen(true)}
//                   className="p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF] transition-colors"
//                   aria-label="Open menu"
//                 >
//                   <Menu size={24} />
//                 </button>
//               )}

//               <Link href="/" className="flex items-center gap-2.5">
//                 <div className="
//                   flex h-9 w-9 items-center justify-center
//                   rounded-lg bg-[#4A5C6A] text-[#06141B]
//                   font-black text-xl
//                 ">
//                   O
//                 </div>
//                 <span className="text-lg sm:text-xl font-bold text-[#CCD0CF] tracking-tight">
//                   YourApp
//                 </span>
//               </Link>
//             </div>

//             {/* Center: Search + mic (hidden on mobile) */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-12 items-center">
//               <div className="flex w-full items-center rounded-full bg-[#0f1620] border border-[#253745] hover:border-[#4A5C6A] focus-within:border-[#CCD0CF] overflow-hidden transition-colors">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="
//                     flex-1 bg-transparent border-none outline-none
//                     px-5 py-2.5 text-[#CCD0CF] placeholder-gray-500
//                     text-sm
//                   "
//                 />
//                 <button
//                   className="px-5 py-2.5 bg-[#1a2634] hover:bg-[#253745] border-l border-[#253745] transition-colors"
//                   aria-label="Search"
//                 >
//                   <Search size={20} className="text-gray-400" />
//                 </button>
//               </div>

//               <button
//                 className="ml-3 p-3 rounded-full bg-[#1a2634] hover:bg-[#253745] text-gray-300 transition-colors"
//                 aria-label="Voice search"
//               >
//                 <Mic size={20} />
//               </button>
//             </div>

//             {/* Right side */}
//             <div className="flex items-center gap-2 sm:gap-4">
//               {/* Mobile search icon */}
//               <button className="md:hidden p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF]">
//                 <Search size={22} />
//               </button>

//               {isLoggedIn ? (
//                 <>
//                   {/* Create */}
//                   <button className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#253745] hover:bg-[#4A5C6A] text-[#CCD0CF] text-sm font-medium transition-colors">
//                     <Plus size={18} />
//                     Create
//                   </button>

//                   {/* Notifications */}
//                   <button
//                     className="p-2 rounded-full hover:bg-[#253745]/50 relative text-[#CCD0CF] transition-colors"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={22} />
//                     <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#11212D]">
//                       9+
//                     </span>
//                   </button>

//                   {/* Profile with dropdown */}
//                   <div className="relative" ref={profileRef}>
//                     <button
//                       onClick={() => setIsProfileOpen(!isProfileOpen)}
//                       className="flex items-center gap-2 p-1 rounded-full hover:bg-[#253745]/50 transition-colors"
//                       aria-label="Account menu"
//                       aria-expanded={isProfileOpen}
//                     >
//                       {avatarUrl ? (
//                         <img
//                           src={avatarUrl}
//                           alt="Profile"
//                           className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-[#4A5C6A]"
//                         />
//                       ) : (
//                         <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm sm:text-base">
//                           {avatarInitial}
//                         </div>
//                       )}
//                     </button>

//                     {/* Dropdown */}
//                     {isProfileOpen && (
//                       <div className="absolute right-0 mt-2 w-64 bg-[#11212D] border border-[#253745] rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-sm">
//                         {/* Profile header */}
//                         <div className="p-4 border-b border-[#253745]">
//                           <div className="flex items-center gap-3">
//                             {avatarUrl ? (
//                               <img
//                                 src={avatarUrl}
//                                 alt="Profile"
//                                 className="h-10 w-10 rounded-full object-cover"
//                               />
//                             ) : (
//                               <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
//                                 {avatarInitial}
//                               </div>
//                             )}
//                             <div>
//                               <p className="font-medium text-[#CCD0CF]">{displayName}</p>
//                               <p className="text-sm text-gray-400">@{user?.email?.split('@')[0]}</p>
//                             </div>
//                           </div>
//                           <Link
//                             href="/profile"
//                             className="mt-3 block text-center text-sm text-[#CCD0CF] hover:text-white transition-colors"
//                           >
//                             View your profile
//                           </Link>
//                         </div>

//                         {/* Menu items */}
//                         <div className="py-2">
//                           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-gray-300">
//                             <Settings size={18} />
//                             <span>Account settings</span>
//                           </button>

//                           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-gray-300">
//                             <SwitchCamera size={18} />
//                             <span>Switch account</span>
//                           </button>

//                           <button
//                             onClick={handleSignOut}
//                             className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-red-400"
//                           >
//                             <LogOut size={18} />
//                             <span>Sign out</span>
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <Link
//                   href="/auth"
//                   className="
//                     hidden sm:inline-flex items-center px-5 py-2
//                     rounded-full bg-[#CCD0CF] text-[#06141B]
//                     font-semibold hover:bg-white transition-all
//                     duration-300 hover:scale-105
//                   "
//                 >
//                   Sign in
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile sidebar backdrop */}
//       <div
//         className={`
//           fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//           transition-opacity duration-300 md:hidden
//           ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
//         `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Spacer – increased for top-6 positioning */}
//       <div className="h-20 sm:h-24" />
//     </>
//   )
// }

// // components/Navbar.tsx
// 'use client'

// import Link from 'next/link'
// import { useState, useEffect, useRef } from 'react'
// import {
//   Menu,
//   X,
//   Search,
//   Mic,
//   Plus,
//   Bell,
//   ChevronDown,
//   LogOut,
//   Settings,
//   SwitchCamera,
// } from 'lucide-react'
// import Sidebar from '@/components/ui/SidebarT'
// import { supabase } from '@/lib/supabase'
// import toast from 'react-hot-toast'

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     id: string
//     email?: string
//     user_metadata?: {
//       full_name?: string
//       avatar_url?: string
//       [key: string]: any
//     }
//   } | null
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)

//   const profileRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 8)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])

//   const handleSignOut = async () => {
//     const toastId = toast.loading('Logging out...')
//     try {
//       const { error } = await supabase.auth.signOut()
//       if (error) throw error

//       toast.success('Logged out successfully', { id: toastId })
//       setIsProfileOpen(false)
//       window.location.href = '/'
//     } catch (err) {
//       toast.error('Logout failed', { id: toastId })
//       console.error(err)
//     }
//   }

//   // Display values
//   const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'
//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase() || 'U'

//   return (
//     <>
//       {/* Floating pill navbar */}
//       <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
//         <div
//           className={`
//             w-full max-w-7xl
//             rounded-full
//             border border-[#253745]
//             bg-[#11212D]/80 backdrop-blur-xl
//             transition-all duration-500 ease-out
//             shadow-xl
//             ${isScrolled ? 'scale-[0.98] shadow-2xl' : 'scale-105 shadow-xl'}
//           `}
//         >
//           <div className="flex items-center justify-between h-14 sm:h-16 px-5 sm:px-6 lg:px-8">
//             {/* Left: Hamburger (only when logged in) + Logo */}
//             <div className="flex items-center gap-4 sm:gap-6">
//               {isLoggedIn && (
//                 <button
//                   onClick={() => setIsSidebarOpen(true)}
//                   className="p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF] transition-colors"
//                   aria-label="Open menu"
//                 >
//                   <Menu size={24} />
//                 </button>
//               )}

//               <Link href="/" className="flex items-center gap-2.5">
//                 <div className="
//                   flex h-9 w-9 items-center justify-center
//                   rounded-lg bg-[#4A5C6A] text-[#06141B]
//                   font-black text-xl
//                 ">
//                   O
//                 </div>
//                 <span className="text-lg sm:text-xl font-bold text-[#CCD0CF] tracking-tight">
//                   YourApp
//                 </span>
//               </Link>
//             </div>

//             {/* Center: Search + mic */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-12 items-center">
//               <div className="flex w-full items-center rounded-full bg-[#0f1620] border border-[#253745] hover:border-[#4A5C6A] focus-within:border-[#CCD0CF] overflow-hidden transition-colors">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="flex-1 bg-transparent border-none outline-none px-5 py-2.5 text-[#CCD0CF] placeholder-gray-500 text-sm"
//                 />
//                 <button
//                   className="px-5 py-2.5 bg-[#1a2634] hover:bg-[#253745] border-l border-[#253745] transition-colors"
//                   aria-label="Search"
//                 >
//                   <Search size={20} className="text-gray-400" />
//                 </button>
//               </div>

//               <button
//                 className="ml-3 p-3 rounded-full bg-[#1a2634] hover:bg-[#253745] text-gray-300 transition-colors"
//                 aria-label="Voice search"
//               >
//                 <Mic size={20} />
//               </button>
//             </div>

//             {/* Right side */}
//             <div className="flex items-center gap-2 sm:gap-4">
//               <button className="md:hidden p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF]">
//                 <Search size={22} />
//               </button>

//               {isLoggedIn ? (
//                 <>
//                   <button className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#253745] hover:bg-[#4A5C6A] text-[#CCD0CF] text-sm font-medium transition-colors">
//                     <Plus size={18} />
//                     Create
//                   </button>

//                   <button
//                     className="p-2 rounded-full hover:bg-[#253745]/50 relative text-[#CCD0CF] transition-colors"
//                     aria-label="Notifications"
//                   >
//                     <Bell size={22} />
//                     <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#11212D]">
//                       9+
//                     </span>
//                   </button>

//                   <div className="relative" ref={profileRef}>
//                     <button
//                       onClick={() => setIsProfileOpen(!isProfileOpen)}
//                       className="flex items-center gap-2 p-1 rounded-full hover:bg-[#253745]/50 transition-colors"
//                       aria-label="Account menu"
//                       aria-expanded={isProfileOpen}
//                     >
//                       {avatarUrl ? (
//                         <img
//                           src={avatarUrl}
//                           alt="Profile"
//                           className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-[#4A5C6A]"
//                         />
//                       ) : (
//                         <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm sm:text-base">
//                           {avatarInitial}
//                         </div>
//                       )}
//                     </button>

//                     {isProfileOpen && (
//                       <div className="absolute right-0 mt-2 w-64 bg-[#11212D] border border-[#253745] rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-sm">
//                         <div className="p-4 border-b border-[#253745]">
//                           <div className="flex items-center gap-3">
//                             {avatarUrl ? (
//                               <img src={avatarUrl} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
//                             ) : (
//                               <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
//                                 {avatarInitial}
//                               </div>
//                             )}
//                             <div>
//                               <p className="font-medium text-[#CCD0CF]">{displayName}</p>
//                               <p className="text-sm text-gray-400">@{user?.email?.split('@')[0]}</p>
//                             </div>
//                           </div>
//                           <Link
//                             href="/profile"
//                             className="mt-3 block text-center text-sm text-[#CCD0CF] hover:text-white transition-colors"
//                           >
//                             View your profile
//                           </Link>
//                         </div>

//                         <div className="py-2">
//                           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-gray-300">
//                             <Settings size={18} />
//                             <span>Account settings</span>
//                           </button>
//                           <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-gray-300">
//                             <SwitchCamera size={18} />
//                             <span>Switch account</span>
//                           </button>
//                           <button
//                             onClick={handleSignOut}
//                             className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 transition-colors text-left text-red-400"
//                           >
//                             <LogOut size={18} />
//                             <span>Sign out</span>
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <Link
//                   href="/auth"
//                   className="
//                     hidden sm:inline-flex items-center px-5 py-2
//                     rounded-full bg-[#CCD0CF] text-[#06141B]
//                     font-semibold hover:bg-white transition-all duration-300 hover:scale-105
//                   "
//                 >
//                   Sign in
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <div
//         className={`
//           fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//           transition-opacity duration-300 md:hidden
//           ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
//         `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div className="h-20 sm:h-24" />
//     </>
//   )
// }

// // components/Navbar.tsx
// "use client"

// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"
// import {
//   Menu,
//   Search,
//   Mic,
//   Plus,
//   Bell,
//   LogOut,
//   Settings,
//   SwitchCamera,
//   Star,
// } from "lucide-react"

// import Sidebar from "@/components/ui/SidebarT"
// import { supabase } from "@/lib/supabase"
// import toast from "react-hot-toast"

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     id: string
//     email?: string
//     user_metadata?: {
//       full_name?: string
//       avatar_url?: string
//       [key: string]: any
//     }
//   } | null
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)

//   const profileRef = useRef<HTMLDivElement>(null)

//   // scroll detection
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // click outside profile
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   // logout
//   const handleSignOut = async () => {
//     const toastId = toast.loading("Logging out...")

//     try {
//       const { error } = await supabase.auth.signOut()

//       if (error) throw error

//       toast.success("Logged out successfully", { id: toastId })
//       setIsProfileOpen(false)

//       window.location.href = "/"
//     } catch (err) {
//       toast.error("Logout failed", { id: toastId })
//       console.error(err)
//     }
//   }

//   const displayName =
//     user?.user_metadata?.full_name ||
//     user?.email?.split("@")[0] ||
//     "User"

//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase() || "U"

//   return (
//     <>
//       {/* NAVBAR */}
//       <header
//         className={`
//         fixed top-0 left-0 right-0 z-50
//         backdrop-blur-xl
//         transition-all duration-300
//         ${isScrolled
//           ? "bg-[#11212D]/95 border-b border-[#253745] shadow-lg"
//           : "bg-transparent"
//         }
//       `}
//       >
//         <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 sm:px-6 lg:px-8">

//           {/* LEFT */}
//           <div className="flex items-center gap-4 sm:gap-6">

//             {isLoggedIn && (
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="p-2 rounded-lg hover:bg-[#253745]/50 text-[#CCD0CF] transition-colors"
//               >
//                 <Menu size={24} />
//               </button>
//             )}

//             <Link href="/" className="flex items-center gap-2.5">

//               <div
//                 className="
//                 flex h-9 w-9 items-center justify-center
//                 rounded-lg bg-[#4A5C6A] text-[#06141B]
//                 font-black text-xl
//               "
//               >
//                 O
//               </div>

//               <span className="text-lg sm:text-xl font-bold text-[#CCD0CF] tracking-tight">
//                 YourApp
//               </span>

//             </Link>

//           </div>

//           {/* CENTER SEARCH */}
//           <div className="hidden md:flex flex-1 max-w-2xl mx-6 lg:mx-12 items-center">

//             <div className="flex w-full items-center rounded-full bg-[#0f1620] border border-[#253745] hover:border-[#4A5C6A] focus-within:border-[#CCD0CF] overflow-hidden transition-colors">

//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="flex-1 bg-transparent border-none outline-none px-5 py-2.5 text-[#CCD0CF] placeholder-gray-500 text-sm"
//               />

//               <button
//                 className="px-5 py-2.5 bg-[#1a2634] hover:bg-[#253745] border-l border-[#253745] transition-colors"
//               >
//                 <Search size={20} className="text-gray-400" />
//               </button>

//             </div>

//             <button
//               className="ml-3 p-3 rounded-full bg-[#1a2634] hover:bg-[#253745] text-gray-300 transition-colors"
//             >
//               <Mic size={20} />
//             </button>

//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-2 sm:gap-4">

//             <button className="md:hidden p-2 rounded-full hover:bg-[#253745]/50 text-[#CCD0CF]">
//               <Search size={22} />
//             </button>

//             {isLoggedIn ? (
//               <>

//                 <button className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#253745] hover:bg-[#4A5C6A] text-[#CCD0CF] text-sm font-medium transition-colors">
//                   <Star size={18} />
//                   Premium
//                 </button>

//                 {/* notifications */}
//                 <button
//                   className="p-2 rounded-full hover:bg-[#253745]/50 relative text-[#CCD0CF] transition-colors"
//                 >
//                   <Bell size={22} />

//                   <span className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-[#11212D]">
//                     9+
//                   </span>
//                 </button>

//                 {/* profile */}
//                 <div className="relative" ref={profileRef}>

//                   <button
//                     onClick={() => setIsProfileOpen(!isProfileOpen)}
//                     className="flex items-center gap-2 p-1 rounded-full hover:bg-[#253745]/50 transition-colors"
//                   >

//                     {avatarUrl ? (
//                       <img
//                         src={avatarUrl}
//                         alt="Profile"
//                         className="h-9 w-9 rounded-full object-cover border border-[#4A5C6A]"
//                       />
//                     ) : (
//                       <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
//                         {avatarInitial}
//                       </div>
//                     )}

//                   </button>

//                   {/* dropdown */}
//                   {isProfileOpen && (

//                     <div className="absolute right-0 mt-2 w-64 bg-[#11212D] border border-[#253745] rounded-xl shadow-2xl overflow-hidden">

//                       <div className="p-4 border-b border-[#253745]">

//                         <div className="flex items-center gap-3">

//                           {avatarUrl ? (
//                             <img
//                               src={avatarUrl}
//                               className="h-10 w-10 rounded-full"
//                             />
//                           ) : (
//                             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold">
//                               {avatarInitial}
//                             </div>
//                           )}

//                           <div>
//                             <p className="font-medium text-[#CCD0CF]">{displayName}</p>
//                             <p className="text-sm text-gray-400">
//                               @{user?.email?.split("@")[0]}
//                             </p>
//                           </div>

//                         </div>

//                         <Link
//                           href="/profile"
//                           className="mt-3 block text-center text-sm text-[#CCD0CF] hover:text-white"
//                         >
//                           View your profile
//                         </Link>

//                       </div>

//                       <div className="py-2">

//                         <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 text-gray-300">
//                           <Settings size={18} />
//                           Account settings
//                         </button>

//                         <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 text-gray-300">
//                           <SwitchCamera size={18} />
//                           Switch account
//                         </button>

//                         <button
//                           onClick={handleSignOut}
//                           className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#253745]/50 text-red-400"
//                         >
//                           <LogOut size={18} />
//                           Sign out
//                         </button>

//                       </div>

//                     </div>

//                   )}

//                 </div>

//               </>
//             ) : (
//               <Link
//                 href="/auth"
//                 className="
//                 hidden sm:inline-flex items-center px-5 py-2
//                 rounded-lg bg-[#CCD0CF] text-[#06141B]
//                 font-semibold hover:bg-white
//                 transition-all duration-300 hover:scale-105
//               "
//               >
//                 Sign in
//               </Link>
//             )}

//           </div>

//         </div>
//       </header>

//       {/* overlay */}
//       <div
//         className={`
//         fixed inset-0 bg-black/60 backdrop-blur-sm z-40
//         transition-opacity duration-300 md:hidden
//         ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
//       `}
//         onClick={() => setIsSidebarOpen(false)}
//       />

//       {/* sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         onClose={() => setIsSidebarOpen(false)}
//       />

//       {/* spacer */}
//       <div className="h-16" />

//     </>
//   )
// }

// // components/Navbar.tsx
// "use client"

// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"
// import {
//   Menu,
//   Search,
//   Plus,
//   Bell,
//   ChevronDown,
//   LogOut,
//   Settings,
//   User,
// } from "lucide-react"

// import Sidebar from "@/components/ui/SidebarT" // assuming you keep this
// import { supabase } from "@/lib/supabase"
// import toast from "react-hot-toast"

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: {
//     id: string
//     email?: string
//     user_metadata?: {
//       full_name?: string
//       avatar_url?: string
//       [key: string]: any
//     }
//   } | null
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [donateOpen, setDonateOpen] = useState(false)
//   const [communityOpen, setCommunityOpen] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)

//   const profileRef = useRef<HTMLDivElement>(null)

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 8)
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Click outside profile & dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false)
//       }
//       setDonateOpen(false)
//       setCommunityOpen(false)
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   const handleSignOut = async () => {
//     const toastId = toast.loading("Logging out...")
//     try {
//       const { error } = await supabase.auth.signOut()
//       if (error) throw error
//       toast.success("Logged out successfully", { id: toastId })
//       window.location.href = "/"
//     } catch (err) {
//       toast.error("Logout failed", { id: toastId })
//     }
//   }

//   const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User"
//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase() || "U"

//   return (
//     <>
//       <header
//         className={`
//           fixed top-0 left-0 right-0 z-50
//           bg-gradient-to-r from-indigo-950 via-purple-950 to-blue-950
//           border-b border-purple-900/40 text-white
//           transition-all duration-300
//           ${isScrolled ? "shadow-2xl" : ""}
//         `}
//       >
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 relative">
//           {/* Logo + wavy accent */}
//           <Link href="/" className="flex items-center gap-3 relative">
//             <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center font-bold text-xl shadow-lg">
//               G
//             </div>
//             <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
//               Giveth
//             </span>

//             {/* Wavy line under logo */}
//             <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-14 h-2 pointer-events-none">
//               <svg viewBox="0 0 56 8" fill="none" className="text-purple-400/80">
//                 <path d="M2 5 Q 14 0 28 5 T 54 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
//               </svg>
//             </div>
//           </Link>

//           {/* Main nav links - hidden on mobile */}
//           <nav className="hidden md:flex items-center gap-1 lg:gap-2">
//             {/* Donate dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDonateOpen(true)}
//               onMouseLeave={() => setDonateOpen(false)}
//             >
//               <button className="flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-white/10 text-sm font-medium transition">
//                 Donate
//                 <ChevronDown size={16} className={`transition-transform ${donateOpen ? "rotate-180" : ""}`} />
//               </button>
//               {donateOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-gray-900/95 backdrop-blur-md border border-purple-500/30 shadow-2xl py-3 text-sm z-50 animate-fade-in">
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Donate Now</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Recurring</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">GIVbacks</Link>
//                   <hr className="my-2 border-purple-900/50" />
//                   <Link href="#" className="block px-5 py-2.5 text-purple-300 hover:bg-purple-800/40 transition">Support Giveth</Link>
//                 </div>
//               )}
//             </div>

//             <Link href="#" className="px-4 py-2 rounded-full hover:bg-white/10 text-sm font-medium transition">
//               GIVeconomy
//             </Link>

//             {/* Community dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => setCommunityOpen(true)}
//               onMouseLeave={() => setCommunityOpen(false)}
//             >
//               <button className="flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-white/10 text-sm font-medium transition">
//                 Community
//                 <ChevronDown size={16} className={`transition-transform ${communityOpen ? "rotate-180" : ""}`} />
//               </button>
//               {communityOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-gray-900/95 backdrop-blur-md border border-purple-500/30 shadow-2xl py-3 text-sm z-50 animate-fade-in">
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Get Started</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Givers NFT</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">About Us</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Vote</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Join Us</Link>
//                   <Link href="#" className="block px-5 py-2.5 hover:bg-purple-800/40 transition">Leave Feedback</Link>
//                 </div>
//               )}
//             </div>

//             <button className="p-2 rounded-full hover:bg-white/10 transition">
//               <Search size={20} />
//             </button>
//           </nav>

//           {/* Right side */}
//           <div className="flex items-center gap-3 sm:gap-4">
//             <button className="md:hidden p-2 rounded-full hover:bg-white/10 transition">
//               <Search size={20} />
//             </button>

//             {isLoggedIn ? (
//               <>
//                 {/* CREATE button */}
//                 <Link
//                   href="/create" // or wherever your create page is
//                   className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 px-5 py-2.5 rounded-full font-semibold shadow-lg transition transform hover:scale-105 text-sm"
//                 >
//                   <Plus size={18} />
//                   CREATE
//                 </Link>

//                 {/* Notifications */}
//                 <button className="p-2 rounded-full hover:bg-white/10 relative transition">
//                   <Bell size={20} />
//                   <span className="absolute top-0.5 right-0.5 h-2 w-2 bg-green-400 rounded-full border-2 border-indigo-950" />
//                 </button>

//                 {/* Profile with chain badge */}
//                 <div className="relative" ref={profileRef}>
//                   <button
//                     onClick={() => setIsProfileOpen(!isProfileOpen)}
//                     className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition"
//                   >
//                     {avatarUrl ? (
//                       <img src={avatarUrl} alt="Profile" className="h-9 w-9 rounded-full object-cover border-2 border-purple-500/40" />
//                     ) : (
//                       <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center font-bold text-sm shadow-md">
//                         {avatarInitial}
//                       </div>
//                     )}
//                   </button>

//                   {isProfileOpen && (
//                     <div className="absolute right-0 mt-3 w-72 bg-gray-900/95 backdrop-blur-md border border-purple-500/30 rounded-xl shadow-2xl overflow-hidden z-50">
//                       <div className="p-4 border-b border-purple-900/50">
//                         <div className="flex items-center gap-3">
//                           {avatarUrl ? (
//                             <img src={avatarUrl} className="h-10 w-10 rounded-full" />
//                           ) : (
//                             <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center font-bold">
//                               {avatarInitial}
//                             </div>
//                           )}
//                           <div>
//                             <p className="font-medium">{displayName}</p>
//                             <p className="text-xs text-purple-300/80">@{user?.email?.split("@")[0]}</p>
//                           </div>
//                         </div>
//                         <Link href="/profile" className="mt-3 block text-center text-sm text-purple-300 hover:text-white">
//                           View profile
//                         </Link>
//                       </div>
//                       <div className="py-2">
//                         <button className="w-full flex items-center gap-3 px-5 py-3 hover:bg-purple-800/40 text-gray-200 transition">
//                           <Settings size={18} />
//                           Settings
//                         </button>
//                         <button
//                           onClick={handleSignOut}
//                           className="w-full flex items-center gap-3 px-5 py-3 hover:bg-purple-800/40 text-red-400 transition"
//                         >
//                           <LogOut size={18} />
//                           Sign out
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <Link
//                 href="/auth"
//                 className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 font-medium transition shadow-md"
//               >
//                 Sign in
//               </Link>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Sidebar overlay & component */}
//       <div
//         className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
//           isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
//         }`}
//         onClick={() => setIsSidebarOpen(false)}
//       />
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       {/* Spacer */}
//       <div className="h-16" />
//     </>
//   )
// }

// "use client"

// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"
// import {
//   Menu,
//   Search,
//   Plus,
//   Bell,
//   ChevronDown,
//   LogOut,
//   Settings,
//   X,
// } from "lucide-react"

// import Sidebar from "@/components/ui/SidebarT"
// import { supabase } from "@/lib/supabase"
// import toast from "react-hot-toast"

// interface NavbarProps {
//   isLoggedIn?: boolean
//   user?: any
// }

// export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
//   const [communityOpen, setCommunityOpen] = useState(false)
//   const [createOpen, setCreateOpen] = useState(false)
//   const [searchOpen, setSearchOpen] = useState(false)
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//   const displayName =
//     user?.user_metadata?.full_name ||
//     user?.email?.split("@")[0] ||
//     "User"

//   const avatarUrl = user?.user_metadata?.avatar_url
//   const avatarInitial = displayName[0]?.toUpperCase()

//   const handleSignOut = async () => {
//     const t = toast.loading("Logging out...")
//     await supabase.auth.signOut()
//     toast.success("Logged out", { id: t })
//     window.location.href = "/"
//   }

//   return (
//     <>
//       {/* NAVBAR */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F9] border-b border-gray-200">
//         <div className="max-w-[1400px] mx-auto h-16 flex items-center justify-between px-6">

//           {/* LEFT */}
//           <div className="flex items-center gap-6">
//             <Link href="/" className="flex items-center gap-2">
//               <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
//                 G
//               </div>
//             </Link>

//             <nav className="hidden md:flex items-center gap-4 text-[15px] text-gray-700">

//               <button className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-gray-100">
//                 Donate <ChevronDown size={16} />
//               </button>

//               <button className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-gray-100">
//                 GIVeconomy <ChevronDown size={16} />
//               </button>

//               {/* COMMUNITY */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setCommunityOpen(true)}
//                 onMouseLeave={() => setCommunityOpen(false)}
//               >
//                 <button className="flex items-center gap-1 px-3 py-2 rounded-full bg-gray-200">
//                   Community <ChevronDown size={16} />
//                 </button>

//                 {communityOpen && (
//                   <div className="absolute top-full mt-3 w-72 bg-white rounded-2xl shadow-xl p-4 text-gray-700 space-y-3">
//                     {[
//                       "Get Started",
//                       "Givers NFT",
//                       "About Us",
//                       "Vote",
//                       "Join Us",
//                       "Leave Feedback",
//                     ].map((item) => (
//                       <Link
//                         key={item}
//                         href="#"
//                         className="block px-3 py-2 rounded-lg hover:bg-gray-100"
//                       >
//                         {item}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* SEARCH BUTTON */}
//               <button
//                 onClick={() => setSearchOpen(true)}
//                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200"
//               >
//                 Search <Search size={16} />
//               </button>
//             </nav>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center gap-3">

//             {isLoggedIn && (
//               <>
//                 {/* CREATE DROPDOWN */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setCreateOpen(true)}
//                   onMouseLeave={() => setCreateOpen(false)}
//                 >
//                   <button className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full font-medium">
//                     <Plus size={16} /> CREATE
//                   </button>

//                   {createOpen && (
//                     <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl p-5 space-y-5">
//                       <div>
//                         <p className="text-xs text-gray-400 mb-1">PROJECT</p>
//                         <p className="text-sm text-gray-600 mb-3">
//                           A project lets you share your mission and collect crypto donations transparently.
//                         </p>
//                         <button className="w-full bg-pink-500 text-white py-2 rounded-full">
//                           + PROJECT
//                         </button>
//                       </div>

//                       <div>
//                         <p className="text-xs text-gray-400 mb-1">CAUSE</p>
//                         <p className="text-sm text-gray-600 mb-3">
//                           A collection of projects that share a common goal, vision or theme
//                         </p>
//                         <button className="w-full bg-pink-500 text-white py-2 rounded-full">
//                           + CAUSE
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* NOTIFICATIONS */}
//                 <button className="p-2 rounded-full bg-gray-100">
//                   <Bell size={18} />
//                 </button>

//                 {/* PROFILE (HOVER DROPDOWN) */}
//                 <div className="relative group">
//                   <div className="flex items-center gap-3 bg-gray-100 px-3 py-1.5 rounded-full cursor-pointer">
//                     {avatarUrl ? (
//                       <img src={avatarUrl} className="h-8 w-8 rounded-full" />
//                     ) : (
//                       <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center">
//                         {avatarInitial}
//                       </div>
//                     )}

//                     <div className="hidden sm:block text-sm">
//                       <p className="font-medium">{displayName}</p>
//                       <p className="text-xs text-gray-400">Connected</p>
//                     </div>
//                   </div>

//                   {/* DROPDOWN */}
//                   <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
//                     <button className="w-full text-left px-4 py-3 hover:bg-gray-100 flex gap-2">
//                       <Settings size={16} /> Settings
//                     </button>
//                     <button
//                       onClick={handleSignOut}
//                       className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500 flex gap-2"
//                     >
//                       <LogOut size={16} /> Sign out
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* SEARCH MODAL */}
//       {searchOpen && (
//         <div className="fixed inset-0 z-50">
//           {/* blurred background */}
//           <div
//             className="absolute inset-0 bg-black/30 backdrop-blur-sm"
//             onClick={() => setSearchOpen(false)}
//           />

//           {/* search panel */}
//           <div className="absolute top-0 left-0 right-0 bg-white shadow-xl p-6">
//             <div className="max-w-3xl mx-auto flex items-center gap-3">
//               <Search size={20} />
//               <input
//                 autoFocus
//                 placeholder="Search projects, causes..."
//                 className="w-full outline-none text-lg"
//               />
//               <button onClick={() => setSearchOpen(false)}>
//                 <X />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* SIDEBAR */}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

//       <div className="h-16" />
//     </>
//   )
// }

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  Search,
  Plus,
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  X,
} from 'lucide-react';

import Sidebar from '@/components/ui/SidebarT';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';
import Honeycomb from '@/components/logo/HoneycombLogo';
import Box from '@/components/ui/box';

interface NavbarProps {
  isLoggedIn?: boolean;
  user?: any;
}

export default function Navbar({ isLoggedIn = false, user }: NavbarProps) {
  const [communityOpen, setCommunityOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const displayName =
    user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';

  const avatarUrl = user?.user_metadata?.avatar_url;
  const avatarInitial = displayName[0]?.toUpperCase();

  const handleSignOut = async () => {
    const t = toast.loading('Logging out...');
    await supabase.auth.signOut();
    toast.success('Logged out', { id: t });
    window.location.href = '/';
  };

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
              <Box as="div" className="mt-7">
                <Honeycomb size={12} color="#f97316" />
              </Box>
              <Box as="p" className=" text-[23px]">Opphex</Box>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-3 text-[15px] text-gray-700">
              {/* SIMPLE ITEMS */}
              {['Donate', 'GIVeconomy'].map(item => (
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
                        'Get Started',
                        'Givers NFT',
                        'About Us',
                        'Vote',
                        'Join Us',
                        'Leave Feedback',
                      ].map(item => (
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
  );
}
