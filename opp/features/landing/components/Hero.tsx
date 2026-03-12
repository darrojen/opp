
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#06141B] pt-40 pb-36 text-[#CCD0CF]">

//       {/* animated gradient background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#253745,transparent_60%)] opacity-40" />

//       {/* floating glow blobs */}
//       <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#253745] opacity-40 blur-[140px] animate-pulse" />
//       <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#4A5C6A] opacity-30 blur-[120px] animate-pulse" />

//       <div className="container relative mx-auto px-6 lg:px-8">

//         <div className="grid items-center gap-20 lg:grid-cols-2">

//           {/* LEFT CONTENT */}
//           <div>

//             <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">

//               Discover Opportunities

//               <span className="block bg-gradient-to-r from-[#9BA8AB] to-[#CCD0CF] bg-clip-text text-transparent">
//                 That Change Your Future
//               </span>

//             </h1>

//             <p className="mt-6 max-w-xl text-lg text-[#9BA8AB]">
//               Hackathons, internships, fellowships, grants, and jobs —
//               all in one place for students, developers, and young
//               professionals.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">

//               <Button
//                 asChild
//                 size="lg"
//                 className="
//                 bg-[#CCD0CF]
//                 text-[#06141B]
//                 px-10 py-7
//                 text-lg
//                 shadow-xl
//                 hover:bg-white
//                 hover:scale-[1.03]
//                 transition-all
//                 duration-300
//                 "
//               >
//                 <Link href="/opportunities">
//                   Browse Opportunities
//                 </Link>
//               </Button>

//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="
//                 border-[#253745]
//                 px-10 py-7
//                 text-lg
//                 text-[#CCD0CF]
//                 hover:bg-[#11212D]
//                 transition-all
//                 duration-300
//                 "
//               >
//                 <Link href="/signup">
//                   Sign Up Free
//                 </Link>
//               </Button>

//             </div>

//             <p className="mt-6 text-sm text-[#9BA8AB]">
//               Join 10,000+ developers discovering opportunities
//             </p>

//           </div>

//           {/* RIGHT SIDE DASHBOARD */}
//           <div className="relative">

//             {/* glow */}
//             <div className="absolute inset-0 rounded-3xl bg-[#253745] opacity-40 blur-3xl" />

//             <div className="
//               relative
//               rounded-3xl
//               border border-[#253745]
//               bg-[#11212D]
//               shadow-2xl
//               transition-transform
//               duration-500
//               hover:scale-[1.02]
//             ">

//               {/* header */}
//               <div className="flex items-center gap-2 border-b border-[#253745] px-4 py-3">

//                 <div className="h-3 w-3 rounded-full bg-[#9BA8AB]" />
//                 <div className="h-3 w-3 rounded-full bg-[#4A5C6A]" />
//                 <div className="h-3 w-3 rounded-full bg-[#253745]" />

//               </div>

//               {/* opportunities */}
//               <div className="p-6 space-y-6">

//                 {[
//                   {
//                     title: "AI Hackathon 2026",
//                     desc: "Remote • Prize: $10,000"
//                   },
//                   {
//                     title: "Google Internship",
//                     desc: "Deadline: May 12"
//                   },
//                   {
//                     title: "Web3 Fellowship",
//                     desc: "Fully Remote"
//                   }
//                 ].map((item, i) => (

//                   <div
//                     key={i}
//                     className="
//                     rounded-xl
//                     bg-[#253745]
//                     p-4
//                     hover:bg-[#4A5C6A]
//                     transition-colors
//                     duration-300
//                     "
//                   >
//                     <h3 className="font-semibold text-[#CCD0CF]">
//                       {item.title}
//                     </h3>

//                     <p className="text-sm text-[#9BA8AB]">
//                       {item.desc}
//                     </p>
//                   </div>

//                 ))}

//               </div>

//             </div>

//             {/* floating stat card */}
//             <div className="
//               absolute -bottom-8 -left-8
//               hidden lg:block
//               w-48
//               rounded-xl
//               border border-[#253745]
//               bg-[#11212D]
//               p-4
//               shadow-xl
//               backdrop-blur
//               transition-transform
//               duration-500
//               hover:scale-105
//             ">

//               <p className="text-sm text-[#9BA8AB]">
//                 New Opportunities
//               </p>

//               <p className="text-2xl font-bold text-[#CCD0CF]">
//                 +42
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }


import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUp } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1118] pt-40 pb-36 text-[#E0E7E9]">
      {/* Warmer animated gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2C3E50,transparent_55%)] opacity-50" />

      {/* Warmer floating glow blobs */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#FF950033] opacity-30 blur-[160px] animate-pulse-slow" />
      <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#FFD16633] opacity-25 blur-[140px] animate-pulse-slow" />

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Discover Opportunities
              <span className="block bg-gradient-to-r from-[#FFD166] to-[#FFAF7A] bg-clip-text text-transparent">
                That Change Your Future
              </span>
            </h1>


            <div className="mt-6 max-w-xl">

  <p className="text-lg leading-relaxed text-[#9BA8AB]">
    Find the best{" "}
    <span className="text-[#CCD0CF] font-medium">
      hackathons, internships, fellowships, grants, and tech jobs
    </span>{" "}
    — curated in one place for students, developers, and ambitious builders.
  </p>

  {/* CTA buttons */}
  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

    {/* Primary CTA */}
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
        <ArrowRight
          className="
          h-5 w-5
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />
      </Link>
    </Button>

     <Button
      asChild
      size="lg"
      variant="outline"
      className="
 px-10 py-7
    text-lg font-medium
    text-[#E5E9EC]        /* slightly brighter for dark bg */
    border-2 border-[#4A5C6A]  /* visible on dark bg */
    backdrop-blur-md
    rounded-lg
    transition-all duration-300
    hover:bg-[#253745]     /* subtle highlight on hover */
    hover:border-[#6A7B8C] 
    focus:outline-none focus:ring-2 focus:ring-[#4A5C6A] focus:ring-offset-2
      "
    >
      <Link href="/signup">
        Sign Up Free
      </Link>
    </Button>

 

  </div>

  {/* Social proof */}
  <div className="mt-8 flex items-center gap-3 text-sm text-[#9BA8AB]">

    <div className="flex -space-x-2">
      <div className="h-7 w-7 rounded-full bg-[#253745] border border-[#06141B]" />
      <div className="h-7 w-7 rounded-full bg-[#4A5C6A] border border-[#06141B]" />
      <div className="h-7 w-7 rounded-full bg-[#9BA8AB] border border-[#06141B]" />
    </div>

    <span>
      Trusted by <span className="text-[#CCD0CF] font-medium">10,000+ developers</span>
    </span>

  </div>

</div>
          </div>

          {/* RIGHT SIDE DASHBOARD – warmer cards */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-[#FF950033] opacity-20 blur-3xl" />

            <div className="
              relative rounded-3xl border border-[#2A3A48] bg-[#131C26]
              shadow-2xl transition-transform duration-500 hover:scale-[1.02]
            ">
              <div className="flex items-center gap-2 border-b border-[#2A3A48] px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#d41212]" />
                <div className="h-3 w-3 rounded-full bg-[#b4aea7]/70" />
                <div className="h-3 w-3 rounded-full bg-[#06e746]" />
              </div>

              <div className="p-6 space-y-6">
                {[
                  { title: "AI Hackathon 2026", desc: "Remote • Prize: $10,000" },
                  { title: "Google Internship", desc: "Deadline: May 12" },
                  { title: "Web3 Fellowship", desc: "Fully Remote" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      rounded-xl bg-[#142231] p-4
                      hover:bg-[#2A3A48] transition-colors duration-300
                      group
                    "
                  >
                    <h3 className="font-semibold text-[#E0E7E9] group-hover:text-[#FFD166]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A8B5C2]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating stat card – warmer */}
            <div className="
              absolute -bottom-8 -left-8 hidden lg:block w-48
              rounded-xl border border-[#2A3A48] bg-[#131C26]/90
              p-4 shadow-xl backdrop-blur transition-transform duration-500 hover:scale-105
            ">
              <p className="text-sm text-[#A8B5C2]">New Opportunities</p>
              <span className="flex">
              <p className="text-2xl font-bold text-[#06e746]">+42</p> 
              <span className="flex items-center justify-center">
  <ArrowUp className="text-[#06e746]" />
</span>
              
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}