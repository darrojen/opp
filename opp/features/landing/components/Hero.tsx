
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, ArrowUp } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Box from "@/components/ui/box"

// export default function Hero() {
//   return (
//     <Box as="section" className="relative overflow-hidden bg-[#0A1118] pt-40 pb-36 text-[#E0E7E9]">
//       {/* Warmer animated gradient */}
//       <Box as="div" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2C3E50,transparent_55%)] opacity-50" />

//       {/* Warmer floating glow blobs */}
//       <Box as="div" className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#FF950033] opacity-30 blur-[160px] animate-pulse-slow" />
//       <Box as="div" className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#FFD16633] opacity-25 blur-[140px] animate-pulse-slow" />

//       <Box as="div" className="container relative mx-auto px-6 lg:px-8">
//         <Box as="div" className="grid items-center gap-20 lg:grid-cols-2">
//           {/* LEFT CONTENT */}
//           <Box as="div">
//             <Box as="h1" className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//               Discover Opportunities
//               <Box as="span" className="block bg-gradient-to-r from-[#FFD166] to-[#FFAF7A] bg-clip-text text-transparent">
//                 That Change Your Future
//               </Box>
//             </Box>


//             <Box as="div" className="mt-6 max-w-xl">

//   <Box as="p" className="text-lg leading-relaxed text-[#9BA8AB]">
//     Find the best{" "}
//     <Box as="span"  className="text-[#CCD0CF] font-medium">
//       hackathons, internships, fellowships, grants, and tech jobs
//     </Box>{" "}
//     — curated in one place for students, developers, and ambitious builders.
//   </Box>

//   {/* CTA buttons */}
//   <Box as="div" className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

//     {/* Primary CTA */}
//     <Button
//       asChild
//       size="lg"
//       className="
//       group
//       bg-gradient-to-r from-[#CCD0CF] to-white
//       text-[#06141B]
//       px-10 py-7
//       text-lg font-semibold
//       shadow-lg
//       transition-all duration-300
//       hover:scale-[1.03]
//       hover:shadow-2xl
//       "
//     >
//       <Link href="/opportunities" className="flex items-center gap-2">
//         Browse Opportunities
//         <ArrowRight
//           className="
//           h-5 w-5
//           transition-transform
//           duration-300
//           group-hover:translate-x-1
//           "
//         />
//       </Link>
//     </Button>

//      <Button
//       asChild
//       size="lg"
//       variant="outline"
//       className="
//  px-10 py-7
//     text-lg font-medium
//     text-[#E5E9EC]        /* slightly brighter for dark bg */
//     border-2 border-[#4A5C6A]  /* visible on dark bg */
//     backdrop-blur-md
//     rounded-lg
//     transition-all duration-300
//     hover:bg-[#253745]     /* subtle highlight on hover */
//     hover:border-[#6A7B8C] 
//     focus:outline-none focus:ring-2 focus:ring-[#4A5C6A] focus:ring-offset-2
//       "
//     >
//       <Link href="/signup">
//         Sign Up Free
//       </Link>
//     </Button>

 

//   </Box>

//   <Box as="div" className="mt-8 flex items-center gap-3 text-sm text-[#9BA8AB]">
  
//   <Box as="div" className="flex -space-x-3">
//     <Avatar className="h-8 w-8 border border-[#06141B]">
//       <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="Developer" />
//       <AvatarFallback>D1</AvatarFallback>
//     </Avatar>

//     <Avatar className="h-8 w-8 border border-[#06141B]">
//       <AvatarImage src="https://i.pravatar.cc/40?img=5" alt="Developer" />
//       <AvatarFallback>D2</AvatarFallback>
//     </Avatar>

//     <Avatar className="h-8 w-8 border border-[#06141B]">
//       <AvatarImage src="https://i.pravatar.cc/40?img=7" alt="Developer" />
//       <AvatarFallback>D3</AvatarFallback>
//     </Avatar>
//   </Box>

//   <Box as="span">
//     Trusted by{" "}
//     <Box as="span" className="font-medium text-[#CCD0CF]">
//       10,000+ developers
//     </Box>
//   </Box>

// </Box>

// </Box>
//           </Box>

//           {/* RIGHT SIDE DASHBOARD – warmer cards */}
//           <Box as="div" className="relative">
//             <Box as="div" className="absolute inset-0 rounded-3xl bg-[#FF950033] opacity-20 blur-3xl" />

//             <Box as="div" className="
//               relative rounded-3xl border border-[#2A3A48] bg-[#131C26]
//               shadow-2xl transition-transform duration-500 hover:scale-[1.02]
//             ">
//               <Box as="div" className="flex items-center gap-2 border-b border-[#2A3A48] px-4 py-3">
//                 <Box as="div" className="h-3 w-3 rounded-full bg-[#d41212]" />
//                 <Box as="div" className="h-3 w-3 rounded-full bg-[#b4aea7]/70" />
//                 <Box as="div" className="h-3 w-3 rounded-full bg-[#06e746]" />
//               </Box>

//               <Box as="div" className="p-6 space-y-6">
//                 {[
//                   { title: "AI Hackathon 2026", desc: "Remote • Prize: $10,000" },
//                   { title: "Google Internship", desc: "Deadline: May 12" },
//                   { title: "Web3 Fellowship", desc: "Fully Remote" },
//                 ].map((item, i) => (
//                   <Box as="div"
//                     key={i}
//                     className="
//                       rounded-xl bg-[#142231] p-4
//                       hover:bg-[#2A3A48] transition-colors duration-300
//                       group
//                     "
//                   >
//                     <Box as="h3" className="font-semibold text-[#E0E7E9] group-hover:text-[#FFD166]">
//                       {item.title}
//                     </Box>
//                     <Box as="p" className="text-sm text-[#A8B5C2]">{item.desc}</Box>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             {/* Floating stat card – warmer */}
//             <Box as="div" className="
//               absolute -bottom-8 -left-8 hidden lg:block w-48
//               rounded-xl border border-[#2A3A48] bg-[#131C26]/90
//               p-4 shadow-xl backdrop-blur transition-transform duration-500 hover:scale-105
//             ">
//               <Box as="p" className="text-sm text-[#A8B5C2]">New Opportunities</Box>
//               <Box as="span" className="flex">
//               <Box as="p" className="text-2xl font-bold text-[#06e746]">+42</Box> 
//               <Box as="span" className="flex items-center justify-center">
//   <ArrowUp className="text-[#06e746]" />
// </Box>
              
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }


// 'use client'

// import { useEffect, useState } from 'react'
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, ArrowUp } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Box from "@/components/ui/box"

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     // Trigger animation after mount (small delay for smooth entrance)
//     const timer = setTimeout(() => {
//       setIsVisible(true)
//     }, 300) // 300ms delay → feels natural

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <Box
//       as="section"
//       className={`
//         relative overflow-hidden bg-[#0A1118] pt-40 pb-36 text-[#E0E7E9]
//         transition-all duration-1000 ease-out
//         ${isVisible 
//           ? 'opacity-100 scale-100 translate-y-0' 
//           : 'opacity-0 scale-95 translate-y-8'}
//       `}
//     >
//       {/* Warmer animated gradient */}
//       <Box as="div" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2C3E50,transparent_55%)] opacity-50" />

//       {/* Warmer floating glow blobs */}
//       <Box as="div" className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#FF950033] opacity-30 blur-[160px] animate-pulse-slow" />
//       <Box as="div" className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#FFD16633] opacity-25 blur-[140px] animate-pulse-slow" />

//       <Box as="div" className="container relative mx-auto px-6 lg:px-8">
//         <Box as="div" className="grid items-center gap-20 lg:grid-cols-2">
//           {/* LEFT CONTENT */}
//           <Box as="div">
//             <Box as="h1" className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//               Discover Opportunities
//               <Box as="span" className="block bg-gradient-to-r from-[#FFD166] to-[#FFAF7A] bg-clip-text text-transparent">
//                 That Change Your Future
//               </Box>
//             </Box>

//             <Box as="div" className="mt-6 max-w-xl">
//               <Box as="p" className="text-lg leading-relaxed text-[#9BA8AB]">
//                 Find the best{" "}
//                 <Box as="span" className="text-[#CCD0CF] font-medium">
//                   hackathons, internships, fellowships, grants, and tech jobs
//                 </Box>{" "}
//                 — curated in one place for students, developers, and ambitious builders.
//               </Box>

//               {/* CTA buttons */}
//               <Box as="div" className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
//                 {/* Primary CTA */}
//                 <Button
//                   asChild
//                   size="lg"
//                   className="
//                     group
//                     bg-gradient-to-r from-[#CCD0CF] to-white
//                     text-[#06141B]
//                     px-10 py-7
//                     text-lg font-semibold
//                     shadow-lg
//                     transition-all duration-300
//                     hover:scale-[1.03]
//                     hover:shadow-2xl
//                   "
//                 >
//                   <Link href="/opportunities" className="flex items-center gap-2">
//                     Browse Opportunities
//                     <ArrowRight
//                       className="
//                         h-5 w-5
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </Link>
//                 </Button>

//                 <Button
//                   asChild
//                   size="lg"
//                   variant="outline"
//                   className="
//                     px-10 py-7
//                     text-lg font-medium
//                     text-[#E5E9EC]
//                     border-2 border-[#4A5C6A]
//                     backdrop-blur-md
//                     rounded-lg
//                     transition-all duration-300
//                     hover:bg-[#253745]
//                     hover:border-[#6A7B8C]
//                     focus:outline-none focus:ring-2 focus:ring-[#4A5C6A] focus:ring-offset-2
//                   "
//                 >
//                   <Link href="/signup">
//                     Sign Up Free
//                   </Link>
//                 </Button>
//               </Box>

//               <Box as="div" className="mt-8 flex items-center gap-3 text-sm text-[#9BA8AB]">
//                 <Box as="div" className="flex -space-x-3">
//                   <Avatar className="h-8 w-8 border border-[#06141B]">
//                     <AvatarImage src="https://i.pravatar.cc/40?img=1" alt="Developer" />
//                     <AvatarFallback>D1</AvatarFallback>
//                   </Avatar>
//                   <Avatar className="h-8 w-8 border border-[#06141B]">
//                     <AvatarImage src="https://i.pravatar.cc/40?img=5" alt="Developer" />
//                     <AvatarFallback>D2</AvatarFallback>
//                   </Avatar>
//                   <Avatar className="h-8 w-8 border border-[#06141B]">
//                     <AvatarImage src="https://i.pravatar.cc/40?img=7" alt="Developer" />
//                     <AvatarFallback>D3</AvatarFallback>
//                   </Avatar>
//                 </Box>

//                 <Box as="span">
//                   Trusted by{" "}
//                   <Box as="span" className="font-medium text-[#CCD0CF]">
//                     10,000+ developers
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>

//           {/* RIGHT SIDE DASHBOARD */}
//           <Box as="div" className="relative">
//             <Box as="div" className="absolute inset-0 rounded-3xl bg-[#FF950033] opacity-20 blur-3xl" />

//             <Box as="div" className="
//               relative rounded-3xl border border-[#2A3A48] bg-[#131C26]
//               shadow-2xl transition-transform duration-500 hover:scale-[1.02]
//             ">
//               <Box as="div" className="flex items-center gap-2 border-b border-[#2A3A48] px-4 py-3">
//                 <Box as="div" className="h-3 w-3 rounded-full bg-[#d41212]" />
//                 <Box as="div" className="h-3 w-3 rounded-full bg-[#b4aea7]/70" />
//                 <Box as="div" className="h-3 w-3 rounded-full bg-[#06e746]" />
//               </Box>

//               <Box as="div" className="p-6 space-y-6">
//                 {[
//                   { title: "AI Hackathon 2026", desc: "Remote • Prize: $10,000" },
//                   { title: "Google Internship", desc: "Deadline: May 12" },
//                   { title: "Web3 Fellowship", desc: "Fully Remote" },
//                 ].map((item, i) => (
//                   <Box as="div"
//                     key={i}
//                     className="
//                       rounded-xl bg-[#142231] p-4
//                       hover:bg-[#2A3A48] transition-colors duration-300
//                       group
//                     "
//                   >
//                     <Box as="h3" className="font-semibold text-[#E0E7E9] group-hover:text-[#FFD166]">
//                       {item.title}
//                     </Box>
//                     <Box as="p" className="text-sm text-[#A8B5C2]">{item.desc}</Box>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>

//             {/* Floating stat card */}
//             <Box as="div" className="
//               absolute -bottom-8 -left-8 hidden lg:block w-48
//               rounded-xl border border-[#2A3A48] bg-[#131C26]/90
//               p-4 shadow-xl backdrop-blur transition-transform duration-500 hover:scale-105
//             ">
//               <Box as="p" className="text-sm text-[#A8B5C2]">New Opportunities</Box>
//               <Box as="div" className="flex items-center gap-1">
//                 <Box as="p" className="text-2xl font-bold text-[#06e746]">+42</Box>
//                 <ArrowUp className="h-5 w-5 text-[#06e746]" />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }



// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, ArrowUp } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Box from "@/components/ui/box"

// export default function Hero() {
//   return (
//     <>
//       {/* Local animation styles */}
//       <style >{`
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px) scale(0.98);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .reveal {
//           opacity: 0;
//           animation: fadeUp 1.2s cubic-bezier(.16,1,.3,1) forwards;
//         }

//         .delay1 { animation-delay: .2s }
//         .delay2 { animation-delay: .4s }
//         .delay3 { animation-delay: .6s }
//         .delay4 { animation-delay: .8s }
//         .delay5 { animation-delay: 1s }
//         .delay6 { animation-delay: 1.2s }

//         .pulse-slow {
//           animation: pulse 8s ease-in-out infinite;
//         }
//       `}</style>

//       <Box as="section" className="relative overflow-hidden bg-[#0A1118] pt-40 pb-36 text-[#E0E7E9]">
        
//         {/* Background gradient */}
//         <Box as="div" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2C3E50,transparent_55%)] opacity-50" />

//         {/* Glow blobs */}
//         <Box as="div" className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#FF950033] opacity-30 blur-[160px] pulse-slow" />
//         <Box as="div" className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#FFD16633] opacity-25 blur-[140px] pulse-slow" />

//         <Box as="div" className="container relative mx-auto px-6 lg:px-8">
//           <Box as="div" className="grid items-center gap-20 lg:grid-cols-2">

//             {/* LEFT CONTENT */}
//             <Box as="div">

//               <Box
//                 as="h1"
//                 className="reveal text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
//               >
//                 Discover Opportunities
//                 <Box
//                   as="span"
//                   className="block bg-gradient-to-r from-[#FFD166] to-[#FFAF7A] bg-clip-text text-transparent"
//                 >
//                   That Change Your Future
//                 </Box>
//               </Box>

//               <Box as="div" className="mt-6 max-w-xl">

//                 <Box
//                   as="p"
//                   className="reveal delay1 text-lg leading-relaxed text-[#9BA8AB]"
//                 >
//                   Find the best{" "}
//                   <Box as="span" className="text-[#CCD0CF] font-medium">
//                     hackathons, internships, fellowships, grants, and tech jobs
//                   </Box>{" "}
//                   — curated in one place for students, developers, and ambitious builders.
//                 </Box>

//                 {/* Buttons */}
//                 <Box
//                   as="div"
//                   className="reveal delay2 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
//                 >

//                   <Button
//                     asChild
//                     size="lg"
//                     className="
//                     group
//                     bg-gradient-to-r from-[#CCD0CF] to-white
//                     text-[#06141B]
//                     px-10 py-7
//                     text-lg font-semibold
//                     shadow-lg
//                     transition-all duration-300
//                     hover:scale-[1.03]
//                     hover:shadow-2xl
//                     "
//                   >
//                     <Link href="/opportunities" className="flex items-center gap-2">
//                       Browse Opportunities
//                       <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                     </Link>
//                   </Button>

//                   <Button
//                     asChild
//                     size="lg"
//                     variant="outline"
//                     className="
//                     px-10 py-7
//                     text-lg font-medium
//                     text-[#E5E9EC]
//                     border-2 border-[#4A5C6A]
//                     backdrop-blur-md
//                     rounded-lg
//                     transition-all duration-300
//                     hover:bg-[#253745]
//                     hover:border-[#6A7B8C]
//                     "
//                   >
//                     <Link href="/signup">Sign Up Free</Link>
//                   </Button>

//                 </Box>

//                 {/* Avatars */}
//                 <Box
//                   as="div"
//                   className="reveal delay3 mt-8 flex items-center gap-3 text-sm text-[#9BA8AB]"
//                 >

//                   <Box as="div" className="flex -space-x-3">

//                     <Avatar className="h-8 w-8 border border-[#06141B]">
//                       <AvatarImage src="https://i.pravatar.cc/40?img=1" />
//                       <AvatarFallback>D1</AvatarFallback>
//                     </Avatar>

//                     <Avatar className="h-8 w-8 border border-[#06141B]">
//                       <AvatarImage src="https://i.pravatar.cc/40?img=5" />
//                       <AvatarFallback>D2</AvatarFallback>
//                     </Avatar>

//                     <Avatar className="h-8 w-8 border border-[#06141B]">
//                       <AvatarImage src="https://i.pravatar.cc/40?img=7" />
//                       <AvatarFallback>D3</AvatarFallback>
//                     </Avatar>

//                   </Box>

//                   <Box as="span">
//                     Trusted by{" "}
//                     <Box as="span" className="font-medium text-[#CCD0CF]">
//                       10,000+ developers
//                     </Box>
//                   </Box>

//                 </Box>

//               </Box>
//             </Box>

//             {/* RIGHT SIDE DASHBOARD */}
//             <Box as="div" className="reveal delay3 relative">

//               <Box as="div" className="absolute inset-0 rounded-3xl bg-[#FF950033] opacity-20 blur-3xl" />

//               <Box
//                 as="div"
//                 className="
//                 reveal delay4
//                 relative rounded-3xl border border-[#2A3A48] bg-[#131C26]
//                 shadow-2xl transition-transform duration-700 hover:scale-[1.02]
//                 "
//               >

//                 {/* window bar */}
//                 <Box as="div" className="flex items-center gap-2 border-b border-[#2A3A48] px-4 py-3">
//                   <Box as="div" className="h-3 w-3 rounded-full bg-[#d41212]" />
//                   <Box as="div" className="h-3 w-3 rounded-full bg-[#b4aea7]/70" />
//                   <Box as="div" className="h-3 w-3 rounded-full bg-[#06e746]" />
//                 </Box>

//                 <Box as="div" className="p-6 space-y-6">

//                   {[
//                     { title: "AI Hackathon 2026", desc: "Remote • Prize: $10,000" },
//                     { title: "Google Internship", desc: "Deadline: May 12" },
//                     { title: "Web3 Fellowship", desc: "Fully Remote" },
//                   ].map((item, i) => (
//                     <Box
//                       key={i}
//                       as="div"
//                       className="
//                       reveal
//                       rounded-xl bg-[#142231] p-4
//                       hover:bg-[#2A3A48]
//                       transition-colors duration-300
//                       group
//                       "
//                       style={{ animationDelay: `${1 + i * 0.2}s` }}
//                     >
//                       <Box as="h3" className="font-semibold text-[#E0E7E9] group-hover:text-[#FFD166]">
//                         {item.title}
//                       </Box>

//                       <Box as="p" className="text-sm text-[#A8B5C2]">
//                         {item.desc}
//                       </Box>
//                     </Box>
//                   ))}

//                 </Box>

//               </Box>

//               {/* Floating stat card */}
//               <Box
//                 as="div"
//                 className="
//                 reveal delay6
//                 absolute -bottom-8 -left-8 hidden lg:block w-48
//                 rounded-xl border border-[#2A3A48] bg-[#131C26]/90
//                 p-4 shadow-xl backdrop-blur
//                 transition-transform duration-500 hover:scale-105
//                 "
//               >

//                 <Box as="p" className="text-sm text-[#A8B5C2]">
//                   New Opportunities
//                 </Box>

//                 <Box as="span" className="flex">
//                   <Box as="p" className="text-2xl font-bold text-[#06e746]">
//                     +42
//                   </Box>

//                   <Box as="span" className="flex items-center justify-center">
//                     <ArrowUp className="text-[#06e746]" />
//                   </Box>
//                 </Box>

//               </Box>

//             </Box>

//           </Box>
//         </Box>
//       </Box>
//     </>
//   )
// }




"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Box from "@/components/ui/box"

export default function Hero() {

  const [count, setCount] = useState(0)

  // counting animation
  useEffect(() => {
    let start = 0
    const end = 42
    const duration = 1600
    const incrementTime = 30
    const step = end / (duration / incrementTime)

    const counter = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(counter)
      }
      setCount(Math.floor(start))
    }, incrementTime)

    return () => clearInterval(counter)
  }, [])

  return (
    <>
      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
            visibility: hidden;
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            visibility: visible;
          }
        }

        .reveal {
          opacity: 0;
          visibility: hidden;
          animation: fadeUp 1.2s cubic-bezier(.16,1,.3,1) forwards;
        }

        .delay1 { animation-delay: .2s }
        .delay2 { animation-delay: .4s }
        .delay3 { animation-delay: .6s }
        .delay4 { animation-delay: .8s }
        .delay5 { animation-delay: 1s }
        .delay6 { animation-delay: 1.2s }

        .pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
      `}</style>

      <Box as="section" className="relative overflow-hidden bg-[#0A1118] pt-40 pb-36 text-[#E0E7E9]">

        {/* Background gradient */}
        <Box as="div" className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2C3E50,transparent_55%)] opacity-50" />

        {/* Glow blobs */}
        <Box as="div" className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#FF950033] opacity-30 blur-[160px] pulse-slow" />
        <Box as="div" className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#FFD16633] opacity-25 blur-[140px] pulse-slow" />

        <Box as="div" className="container relative mx-auto px-6 lg:px-8">
          <Box as="div" className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <Box as="div">

              <Box
                as="h1"
                className="reveal text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
              >
                Discover Opportunities
                <Box
                  as="span"
                  className="block bg-gradient-to-r from-[#FFD166] to-[#FFAF7A] bg-clip-text text-transparent"
                >
                  That Change Your Future
                </Box>
              </Box>

              <Box as="div" className="mt-6 max-w-xl">

                <Box
                  as="p"
                  className="reveal delay1 text-lg leading-relaxed text-[#9BA8AB]"
                >
                  Find the best{" "}
                  <Box as="span" className="text-[#CCD0CF] font-medium">
                    hackathons, internships, fellowships, grants, and tech jobs
                  </Box>{" "}
                  — curated in one place for students, developers, and ambitious builders.
                </Box>

                {/* Buttons */}
                <Box
                  as="div"
                  className="reveal delay2 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                >

                  <Button
                    asChild
                    size="lg"
                    className="
                    group
                    bg-gradient-to-r from-[#CCD0CF] to-white
                    text-[#06141B]
                    px-10 py-7
                    text-lg font-semibold
                    shadow-lg
                    transition-all duration-300
                    hover:scale-[1.03]
                    hover:shadow-2xl
                    "
                  >
                    <Link href="/opportunities" className="flex items-center gap-2">
                      Browse Opportunities
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="
                    px-10 py-7
                    text-lg font-medium
                    text-[#E5E9EC]
                    border-2 border-[#4A5C6A]
                    backdrop-blur-md
                    rounded-lg
                    transition-all duration-300
                    hover:bg-[#253745]
                    hover:border-[#6A7B8C]
                    "
                  >
                    <Link href="/signup">Sign Up Free</Link>
                  </Button>

                </Box>

                {/* Avatars */}
                <Box
                  as="div"
                  className="reveal delay3 mt-8 flex items-center gap-3 text-sm text-[#9BA8AB]"
                >

                  <Box as="div" className="flex -space-x-3">

                    <Avatar className="h-8 w-8 border border-[#06141B]">
                      <AvatarImage src="https://i.pravatar.cc/40?img=1" />
                      <AvatarFallback>D1</AvatarFallback>
                    </Avatar>

                    <Avatar className="h-8 w-8 border border-[#06141B]">
                      <AvatarImage src="https://i.pravatar.cc/40?img=5" />
                      <AvatarFallback>D2</AvatarFallback>
                    </Avatar>

                    <Avatar className="h-8 w-8 border border-[#06141B]">
                      <AvatarImage src="https://i.pravatar.cc/40?img=7" />
                      <AvatarFallback>D3</AvatarFallback>
                    </Avatar>

                  </Box>

                  <Box as="span">
                    Trusted by{" "}
                    <Box as="span" className="font-medium text-[#CCD0CF]">
                      10,000+ developers
                    </Box>
                  </Box>

                </Box>

              </Box>
            </Box>


            {/* RIGHT SIDE DASHBOARD */}
            <Box as="div" className="reveal delay3 relative">

              <Box as="div" className="absolute inset-0 rounded-3xl bg-[#FF950033] opacity-20 blur-3xl" />

              <Box
                as="div"
                className="
                reveal delay4
                relative rounded-3xl border border-[#2A3A48] bg-[#131C26]
                shadow-2xl transition-transform duration-700 hover:scale-[1.02]
                "
              >

                {/* window bar */}
                <Box as="div" className="flex items-center gap-2 border-b border-[#2A3A48] px-4 py-3">
                  <Box as="div" className="h-3 w-3 rounded-full bg-[#d41212]" />
                  <Box as="div" className="h-3 w-3 rounded-full bg-[#b4aea7]/70" />
                  <Box as="div" className="h-3 w-3 rounded-full bg-[#06e746]" />
                </Box>

                <Box as="div" className="p-6 space-y-6">

                  {[
                    { title: "AI Hackathon 2026", desc: "Remote • Prize: $10,000" },
                    { title: "Google Internship", desc: "Deadline: May 12" },
                    { title: "Web3 Fellowship", desc: "Fully Remote" },
                  ].map((item, i) => (
                    <Box
                      key={i}
                      as="div"
                      className="
                      reveal
                      rounded-xl bg-[#142231] p-4
                      hover:bg-[#2A3A48]
                      transition-colors duration-300
                      group
                      "
                      style={{ animationDelay: `${1 + i * 0.2}s` }}
                    >
                      <Box as="h3" className="font-semibold text-[#E0E7E9] group-hover:text-[#FFD166]">
                        {item.title}
                      </Box>

                      <Box as="p" className="text-sm text-[#A8B5C2]">
                        {item.desc}
                      </Box>
                    </Box>
                  ))}

                </Box>

              </Box>

              {/* Floating stat card */}
              <Box
                as="div"
                className="
                reveal delay6
                absolute -bottom-8 -left-8 hidden lg:block w-48
                rounded-xl border border-[#2A3A48] bg-[#131C26]/90
                p-4 shadow-xl backdrop-blur
                transition-transform duration-500 hover:scale-105
                "
              >

                <Box as="p" className="text-sm text-[#A8B5C2]">
                  New Opportunities
                </Box>

                <Box as="span" className="flex items-center gap-1">
                  <Box as="p" className="text-2xl font-bold text-[#06e746]">
                    +{count}
                  </Box>

                  <ArrowUp className="text-[#06e746]" />
                </Box>

              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
    </>
  )
}