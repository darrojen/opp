// // src/components/landing/TrendingOpportunities.tsx
// import { Flame } from 'lucide-react'; // assuming you have lucide-react installed

// export default function TrendingOpportunities() {
//   const trending = [
//     {
//       title: "Google Africa Developer Scholarship 2026",
//       org: "Google Developer Programs",
//       views: "18.2k",
//       deadline: "Mar 31, 2026",
//       tags: ["Scholarship", "Remote", "Africa"],
//     },
//     {
//       title: "Lagos AI Hackathon 2026",
//       org: "CcHUB & Partners",
//       views: "14.7k",
//       deadline: "Apr 10, 2026",
//       tags: ["Hackathon", "AI", "₦5M Prize"],
//     },
//     {
//       title: "Andela Learning Community Internship",
//       org: "Andela",
//       views: "11.9k",
//       deadline: "Rolling",
//       tags: ["Internship", "Remote", "Paid"],
//     },
//     {
//       title: "Flutterwave Startup Grant Round 3",
//       org: "Flutterwave",
//       views: "9.8k",
//       deadline: "May 15, 2026",
//       tags: ["Grant", "Startup", "Up to $50k"],
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-6 lg:px-8">
//         <div className="mb-12 flex items-center justify-center gap-3">
//           <Flame className="h-8 w-8 text-orange-500" />
//           <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
//             Trending Right Now
//           </h2>
//         </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {trending.map((item, i) => (
//             <div
//               key={i}
//               className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800"
//             >
//               <div className="h-48 bg-gradient-to-r from-orange-400 to-pink-500" />
//               <div className="p-6">
//                 <div className="mb-2 flex items-center gap-2">
//                   <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
//                     Trending
//                   </span>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">
//                     • {item.views} views
//                   </span>
//                 </div>
//                 <h3 className="mb-2 text-xl font-semibold line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
//                   {item.title}
//                 </h3>
//                 <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
//                   {item.org} • Deadline: {item.deadline}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// // src/components/landing/TrendingOpportunities.tsx
// import { Flame, Eye, CalendarDays } from "lucide-react";

// export default function TrendingOpportunities() {
//   const trending = [
//     {
//       title: "Google Africa Developer Scholarship 2026",
//       org: "Google Developer Programs",
//       views: "18.2k",
//       deadline: "Mar 31, 2026",
//       tags: ["Scholarship", "Remote", "Africa"],
//       image:
//         "https://source.unsplash.com/600x400/?programming,students",
//     },
//     {
//       title: "Lagos AI Hackathon 2026",
//       org: "CcHUB & Partners",
//       views: "14.7k",
//       deadline: "Apr 10, 2026",
//       tags: ["Hackathon", "AI", "₦5M Prize"],
//       image:
//         "https://source.unsplash.com/600x400/?hackathon,developers",
//     },
//     {
//       title: "Andela Learning Community Internship",
//       org: "Andela",
//       views: "11.9k",
//       deadline: "Rolling",
//       tags: ["Internship", "Remote", "Paid"],
//       image:
//         "https://source.unsplash.com/600x400/?software,developer",
//     },
//     {
//       title: "Flutterwave Startup Grant Round 3",
//       org: "Flutterwave",
//       views: "9.8k",
//       deadline: "May 15, 2026",
//       tags: ["Grant", "Startup", "Up to $50k"],
//       image:
//         "https://source.unsplash.com/600x400/?startup,teamwork",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
//       <div className="container mx-auto px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="mb-14 flex items-center justify-center gap-3">
//           <Flame className="h-8 w-8 text-orange-500" />
//           <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
//             Trending Opportunities
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

//           {trending.map((item, i) => (
//             <div
//               key={i}
//               className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900"
//             >
              
//               {/* Image */}
//               <div className="relative h-52 w-full overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

//                 {/* views */}
//                 <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white">
//                   <Eye size={14} />
//                   {item.views}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">

//                 <h3 className="mb-2 text-lg font-semibold leading-snug line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
//                   {item.title}
//                 </h3>

//                 <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
//                   {item.org}
//                 </p>

//                 <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
//                   <CalendarDays size={14} />
//                   Deadline: {item.deadline}
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }


// // src/components/landing/DiscoverOpportunities.tsx
// import { Flame, CalendarDays, Eye } from "lucide-react";
// import Box from "@/components/ui/box";

// export default function DiscoverOpportunities() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
//       <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">

//         {/* Left: Content */}
//         <Box as="div" className="lg:w-1/2">
//           <div className="mb-6 flex items-center gap-3">
//             <Flame className="h-8 w-8 text-orange-500" />
//             <h2 className="text-4xl font-bold sm:text-5xl">
//               Discover Opportunities
//             </h2>
//           </div>

//           <p className="mb-10 text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
//             Explore a variety of hackathons, scholarships, internships, and grants—all curated to help students and developers grow their skills and advance their careers.
//           </p>

//           {/* Example Opportunity Card */}
//           <div className="space-y-6">
//             {[1, 2, 3].map((i) => (
//               <Box
//                 key={i}
//                 className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-900"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
//                     Example Opportunity {i}
//                   </h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">Organization {i}</p>
//                   <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
//                     <Eye size={14} /> 12k views
//                     <CalendarDays size={14} /> Deadline: Apr {10 + i}, 2026
//                   </div>
//                 </div>

//                 {/* Tag */}
//                 <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
//                   Hackathon
//                 </span>
//               </Box>
//             ))}
//           </div>
//         </Box>

//         {/* Right: Image / Illustration */}
//         <Box as="div" className="lg:w-1/2 flex justify-center">
//           {/* Hardcoded illustration using HTML/CSS imitation */}
//           <div className="h-80 w-full max-w-md rounded-2xl border border-gray-200 bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-800 relative overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xl font-semibold">
//               {/* Fake code-style image */}
//               &lt;OpportunitiesImage /&gt;
//             </div>
//           </div>
//         </Box>

//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Flame, Eye, CalendarDays } from "lucide-react";

// const opportunities = [
//   {
//     number: "01",
//     title: "Discover & Match",
//     desc: "AI-powered recommendations tailored to your skills, location and career goals.",
//     views: "18.2k",
//     tags: ["Scholarship", "Remote"],
//   },
//   {
//     number: "02",
//     title: "Apply In-Platform",
//     desc: "Submit CV, cover letter & documents instantly — no redirects or external sites.",
//     views: "14.7k",
//     tags: ["Internship", "Paid"],
//   },
//   {
//     number: "03",
//     title: "Stay Alerted",
//     desc: "Smart deadline reminders & real-time notifications so you never miss out.",
//     views: "11.9k",
//     tags: ["Hackathon", "AI"],
//   },
//   {
//     number: "04",
//     title: "Launch Your Future",
//     desc: "Access curated Africa-first grants, programs & global opportunities.",
//     views: "9.8k",
//     tags: ["Grant", "Startup"],
//   },
// ];

// export default function TrendingOpportunities() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const lineRef = useRef<SVGPathElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Progress from 0 → 1 while section is in view
//       let progress = 0;
//       if (rect.top < windowHeight && rect.bottom > 0) {
//         progress = Math.min(
//           Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0),
//           1
//         );
//       }
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll(); // initial

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Animate SVG dashed line stroke-dashoffset based on scroll
//   useEffect(() => {
//     if (lineRef.current) {
//       const length = lineRef.current.getTotalLength();
//       lineRef.current.style.strokeDasharray = `${length}`;
//       lineRef.current.style.strokeDashoffset = `${length * (1 - scrollProgress)}`;
//     }
//   }, [scrollProgress]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/80 to-purple-950/60 text-white overflow-hidden"
//     >
//       {/* Subtle background glows */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16 md:mb-20">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
//             Discover Opportunities
//           </h2>
//           <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
//             Explore curated scholarships, hackathons, internships, grants and programs built for African talent — ready to launch your next big step.
//           </p>
//         </div>

//         {/* Process / Opportunities with connecting line */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Animated curvy dashed line */}
//           <svg
//             className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
//             viewBox="0 0 1200 600"
//             preserveAspectRatio="none"
//           >
//             <path
//               ref={lineRef}
//               d="M 150 150 Q 300 80, 450 180 T 750 220 Q 900 280, 1050 180"
//               fill="none"
//               stroke="#c084fc"
//               strokeWidth="3"
//               strokeDasharray="10 8"
//               strokeLinecap="round"
//               className="transition-all duration-300 ease-out"
//               style={{
//                 strokeDashoffset: "100%", // starts hidden, fills on scroll
//                 opacity: scrollProgress > 0 ? 0.7 : 0,
//               }}
//             />
//           </svg>

//           {/* Cards */}
//           <div className="grid gap-10 md:gap-16 lg:grid-cols-4 relative">
//             {opportunities.map((item, i) => (
//               <div
//                 key={i}
//                 className={`
//                   relative bg-slate-900/60 backdrop-blur-md border border-purple-500/20 
//                   rounded-2xl p-7 shadow-xl shadow-purple-900/20 
//                   transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-800/30
//                   group
//                 `}
//                 style={{
//                   transform: `rotate(${i % 2 === 0 ? "2" : "-2"}deg)`,
//                 }}
//               >
//                 {/* Number tag */}
//                 <div className="absolute -top-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-black text-xl shadow-lg border-4 border-slate-950 z-10">
//                   {item.number}
//                 </div>

//                 <h3 className="mt-6 mb-3 text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
//                   {item.title}
//                 </h3>

//                 <p className="mb-5 text-slate-300 text-base leading-relaxed">
//                   {item.desc}
//                 </p>

//                 {/* Meta */}
//                 <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
//                   <Eye size={16} />
//                   <span>{item.views} views</span>
//                 </div>

//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-2">
//                   {item.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 rounded-full bg-purple-950/50 text-purple-300 text-xs font-medium border border-purple-800/30"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Final call-to-action tag */}
//           <div className="mt-16 text-center">
//             <div className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-purple-900/40">
//               Ready to Explore Opportunities?
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Define",
    desc: "Understand your goals and identify the right opportunities tailored to your skills, location and career ambitions.",
  },
  {
    number: "02",
    title: "Design",
    desc: "Build a personalized opportunity roadmap including scholarships, internships, grants and hackathons.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Apply seamlessly within the platform using your CV, documents and portfolio.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Track applications, receive reminders and unlock global opportunities designed for African talent.",
  },
];

export default function HowItWorks() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();

    pathRef.current.style.strokeDasharray = `${length}`;
    pathRef.current.style.strokeDashoffset = `${length}`;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / height;

      pathRef.current!.style.strokeDashoffset = `${length - length * progress}`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const positions = [
    "top-0 right-10 rotate-3",
    "top-40 left-10 -rotate-3",
    "top-[380px] right-24 rotate-2",
    "bottom-0 left-20 -rotate-2",
  ];

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-xl mb-20">
          <span className="text-sm bg-gray-200 px-4 py-1 rounded-full border-gray">
            How we work
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Let us show you how we drive your brand to new heights
          </h2>

          <p className="mt-4 text-gray-600">
            Discover opportunities, apply instantly and stay updated with
            curated programs designed to help African talent grow globally.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto h-[650px] hidden lg:block">

          {/* Curved dashed path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 650"
          >
            <path
              ref={pathRef}
              d="M250 120 C 420 20, 560 250, 750 200 
                 S 950 350, 1050 260"
              fill="none"
              stroke="#d1d5db"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Cards */}
          {steps.map((step, i) => (
            <div
              key={i}
              className={`absolute ${positions[i]} w-[360px] bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition hover:-translate-y-2`}
            >
              {/* Pin */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gray-800 border-4 border-white shadow-md"></div>

              {/* Number */}
              <span className="text-gray-400 text-sm font-semibold">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile version */}
        <div className="lg:hidden grid gap-8 mt-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md"
            >
              <span className="text-gray-400 text-sm font-semibold">
                {step.number}
              </span>

              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}