// src/components/landing/FeaturedOpportunities.tsx
export default function FeaturedOpportunities() {
  return (
    <section className="bg-gray-100 py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold">Featured Opportunities</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Map real data later — server fetch */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-1 dark:bg-gray-800">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600" /> {/* Placeholder banner */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">AI Hackathon 2026</h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">Remote • Deadline: Apr 15</p>
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Featured</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



// export default function FeaturedOpportunities() {
//   return (
//     <section className="bg-slate-950 py-24 text-white">
//       <div className="container mx-auto px-6 lg:px-8">

//         <h2 className="reveal mb-16 text-center text-4xl font-bold sm:text-5xl">
//           Featured Opportunities
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

//           {Array.from({ length: 8 }).map((_, i) => (

//             <div
//               key={i}
//               className={`reveal delay-${(i % 5) + 1} card-hover glow-hover group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg`}
//             >

//               <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 transition duration-500 group-hover:scale-110" />

//               <div className="p-6">

//                 <h3 className="mb-2 text-xl font-semibold">
//                   AI Hackathon 2026
//                 </h3>

//                 <p className="mb-4 text-sm text-slate-400">
//                   Remote • Deadline: Apr 15
//                 </p>

//                 <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-400">
//                   Featured
//                 </span>

//               </div>

//             </div>

//           ))}

//         </div>
//       </div>
//     </section>
//   )
// }