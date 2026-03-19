// "use client"

// import { Search, Clock } from "lucide-react"
// import { useState, useRef, useEffect } from "react"

// export default function SearchBar() {

//   const [active, setActive] = useState(false)
//   const [query, setQuery] = useState("")
//   const [recent, setRecent] = useState<string[]>([])
//   const [results, setResults] = useState<string[]>([])

//   const ref = useRef<HTMLDivElement>(null)

//   const data = [
//     "Hackathons",
//     "Jobs",
//     "AI internship",
//     "Google internship",
//     "HackMIT",
//     "OpenAI research",
//     "Web3 hackathon",
//     "React jobs",
//   ]

//   useEffect(() => {

//     const saved = localStorage.getItem("recentSearches")

//     if (saved) {
//       setRecent(JSON.parse(saved))
//     }

//   }, [])

//   const handleSearch = (value: string) => {

//     setQuery(value)

//     if (!value) {
//       setResults([])
//       return
//     }

//     const filtered = data.filter((item) =>
//       item.toLowerCase().includes(value.toLowerCase())
//     )

//     setResults(filtered)

//   }

//   const handleSubmit = (value: string) => {

//     const updated = [value, ...recent.filter((r) => r !== value)].slice(0, 5)

//     setRecent(updated)
//     localStorage.setItem("recentSearches", JSON.stringify(updated))

//   }

//   useEffect(() => {

//     const handleClickOutside = (e: any) => {
//       if (ref.current && !ref.current.contains(e.target)) {
//         setActive(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)

//   }, [])

//   return (
//     <div ref={ref} className="relative w-full max-w-xl">

//       {/* input */}
//       <div
//         className={`
//         flex items-center rounded-xl border
//         bg-white dark:bg-[#0f1620]
//         border-gray-300 dark:border-[#253745]
//         transition-all
//         ${active ? "shadow-lg" : ""}
//       `}
//       >

//         <Search size={18} className="ml-3 text-gray-400" />

//         <input
//           value={query}
//           onFocus={() => setActive(true)}
//           onChange={(e) => handleSearch(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleSubmit(query)
//           }}
//           placeholder="Search opportunities, hackathons, users..."
//           className="flex-1 bg-transparent px-3 py-2 outline-none text-sm"
//         />

//       </div>

//       {/* dropdown */}
//       {active && (

//         <div className="absolute w-full mt-2 rounded-xl border bg-white dark:bg-[#11212D] border-gray-200 dark:border-[#253745] shadow-xl overflow-hidden">

//           {/* recent */}
//           {!query && recent.length > 0 && (
//             <>
//               {recent.map((item, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setQuery(item)}
//                   className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#253745]"
//                 >
//                   <Clock size={16} />
//                   {item}
//                 </button>
//               ))}
//             </>
//           )}

//           {/* suggestions */}
//           {results.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => handleSubmit(item)}
//               className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#253745]"
//             >
//               <Search size={16} />
//               {item}
//             </button>
//           ))}

//         </div>

//       )}

//     </div>
//   )
// }