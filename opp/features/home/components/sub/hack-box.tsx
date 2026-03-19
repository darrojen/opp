



// import Box from "@/components/ui/box";
// import { HackBoxProps } from "@/features/home/props/HackBoxProps";

// export type HackathonStatus = "upcoming" | "ongoing" | "ended";



// const statusConfig: Record<
//   HackathonStatus,
//   { label: string; bg: string; text: string; dot: string }
// > = {
//   upcoming: {
//     label: "Upcoming",
//     bg: "bg-amber-100",
//     text: "text-amber-600",
//     dot: "bg-amber-400",
//   },
//   ongoing: {
//     label: "Ongoing",
//     bg: "bg-emerald-100",
//     text: "text-emerald-600",
//     dot: "bg-emerald-400",
//   },
//   ended: {
//     label: "Ended",
//     bg: "bg-gray-100",
//     text: "text-gray-500",
//     dot: "bg-gray-400",
//   },
// };

// export default function HackBox({
//   title,
//   organizer,
//   organizerIcon,
//   coverImage,
//   status,
//   daysLeft,
//   hackersCount,
//   href = "#",
// }: HackBoxProps) {
//   const s = statusConfig[status];

//   return (
//     <Box
//       as="a"
//       href={href}
//       className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer"
//     >
//       {/* Organizer header */}
//       <Box as="div" className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
//         {organizerIcon ? (
//           <Box
//             as="img"
//             src={organizerIcon}
//             alt={organizer}
//             className="w-6 h-6 rounded object-cover flex-shrink-0"
//           />
//         ) : (
//           <Box
//             as="div"
//             className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-500 flex-shrink-0"
//           >
//             {organizer[0]}
//           </Box>
//         )}
//         <Box as="span" className="text-sm font-medium text-gray-700 truncate min-w-0 flex-1">
//           {organizer}
//         </Box>

//         {/* Status badge pushed right */}
//         <Box as="div" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 ml-auto">
//           <Box
//             as="span"
//             className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}
//           >
//             <Box
//               as="span"
//               className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse flex-shrink-0`}
//             />
//             {s.label}
//           </Box>
//           {daysLeft !== undefined && status !== "ended" && (
//             <Box as="span" className="text-xs text-amber-500 font-medium whitespace-nowrap">
//               {daysLeft}d left
//             </Box>
//           )}
//         </Box>
//       </Box>

//       {/* Cover + title row */}
//       <Box as="div" className="flex items-start gap-3 sm:gap-4 px-3 sm:px-4 pb-4">
//         {/* Thumbnail */}
//         <Box
//           as="div"
//           className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100"
//         >
//           <Box
//             as="img"
//             src={coverImage}
//             alt={title}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </Box>

//         {/* Info */}
//         <Box as="div" className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] py-0.5 min-w-0 flex-1">
//           <Box
//             as="h3"
//             className="font-semibold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors"
//           >
//             {title}
//           </Box>

//           {hackersCount && (
//             <Box as="div" className="flex items-center gap-1 sm:gap-1.5 mt-auto flex-wrap">
//               {/* People icon */}
//               <svg
//                 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
//               </svg>
//               <Box
//                 as="span"
//                 className="text-xs font-medium text-amber-600 hover:underline whitespace-nowrap"
//               >
//                 Register
//               </Box>
//               <Box as="span" className="text-xs text-gray-400 whitespace-nowrap">
//                 {hackersCount} Builders
//               </Box>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }




'use client'


import Link from "next/link";
import Box from "@/components/ui/box";
import { HackBoxProps } from "@/features/home/props/HackBoxProps";

export type HackathonStatus = "upcoming" | "ongoing" | "ended";

const statusConfig: Record<
  HackathonStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  upcoming: {
    label: "Upcoming",
    bg: "bg-amber-100",
    text: "text-amber-600",
    dot: "bg-amber-400",
  },
  ongoing: {
    label: "Ongoing",
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    dot: "bg-emerald-400",
  },
  ended: {
    label: "Ended",
    bg: "bg-gray-100",
    text: "text-gray-500",
    dot: "bg-gray-400",
  },
};

export default function HackBox({
  id,
  title,
  organizer,
  organizerIcon,
  coverImage,
  status,
  daysLeft,
  hackersCount,
}: HackBoxProps) {
  const s = statusConfig[status];
  console.log("HackBox ID:", id);

  return (
    <Link href={`/hackathons/${id}`} className="block">
      <Box className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer">
        
        {/* Header */}
        <Box className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
          
          {/* Organizer Icon */}
          {organizerIcon ? (
            <Box
              as="img"
              src={organizerIcon}
              alt={organizer}
              className="w-6 h-6 rounded object-cover"
            />
          ) : (
            <Box className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-500">
              {organizer[0]}
            </Box>
          )}

          {/* Organizer Name */}
          <Box className="text-sm font-medium text-gray-700 truncate flex-1">
            {organizer}
          </Box>

          {/* Status */}
          <Box className="flex items-center gap-2 ml-auto">
            <Box
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`}
              />
              {s.label}
            </Box>

            {daysLeft !== undefined && status !== "ended" && (
              <span className="text-xs text-amber-500 font-medium">
                {daysLeft}d
              </span>
            )}
          </Box>
        </Box>

        {/* Content */}
        <Box className="flex items-start gap-3 sm:gap-4 px-3 sm:px-4 pb-4">
          
          {/* Image */}
          <Box className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-gray-100">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Box>

          {/* Info */}
          <Box className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] flex-1">
            
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 group-hover:text-amber-600 transition-colors">
              {title}
            </h3>

            {hackersCount && (
              <Box className="flex items-center gap-1.5 mt-auto">
                
                {/* Icon */}
                <svg
                  className="w-4 h-4 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5zM12 16v-1a5 5 0 015-5 5 5 0 015 5v1h-10z" />
                </svg>

                <span className="text-xs font-medium text-amber-600">
                  Register
                </span>

                <span className="text-xs text-gray-400">
                  {hackersCount} Builders
                </span>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}






// import Link from "next/link";
// import Box from "@/components/ui/box";
// import { HackBoxProps } from "@/features/home/props/HackBoxProps";

// export type HackathonStatus = "upcoming" | "ongoing" | "ended";

// const statusConfig: Record<
//   HackathonStatus,
//   { label: string; bg: string; text: string; dot: string }
// > = {
//   upcoming: {
//     label: "Upcoming",
//     bg: "bg-amber-100",
//     text: "text-amber-600",
//     dot: "bg-amber-400",
//   },
//   ongoing: {
//     label: "Ongoing",
//     bg: "bg-emerald-100",
//     text: "text-emerald-600",
//     dot: "bg-emerald-400",
//   },
//   ended: {
//     label: "Ended",
//     bg: "bg-gray-100",
//     text: "text-gray-500",
//     dot: "bg-gray-400",
//   },
// };

// export default function HackBox({
//   id,
//   title,
//   organizer,
//   organizerIcon,
//   coverImage,
//   status,
//   daysLeft,
//   hackersCount,
// }: HackBoxProps & { id: string }) {
//   const s = statusConfig[status];

//   // 🔥 Normalize ID (important fix)
//   const safeId = id?.toString().trim().toLowerCase();

//   // 🔍 Debug (remove later)
//   console.log("HackBox ID:", safeId);

//   return (
//     <Link href={`/hackathons/${safeId}`} className="block">
//       <Box className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer">
        
//         {/* Header */}
//         <Box className="flex items-center gap-2 px-3 sm:px-4 pt-3 pb-2 flex-wrap">
          
//           {/* Organizer Icon */}
//           {organizerIcon ? (
//             <Box
//               as="img"
//               src={organizerIcon}
//               alt={organizer}
//               className="w-6 h-6 rounded object-cover"
//             />
//           ) : (
//             <Box className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-500">
//               {organizer[0]}
//             </Box>
//           )}

//           {/* Organizer Name */}
//           <Box className="text-sm font-medium text-gray-700 truncate flex-1">
//             {organizer}
//           </Box>

//           {/* Status */}
//           <Box className="flex items-center gap-2 ml-auto">
//             <Box
//               className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${s.bg} ${s.text}`}
//             >
//               <span className={`w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse`} />
//               {s.label}
//             </Box>

//             {daysLeft !== undefined && status !== "ended" && (
//               <span className="text-xs text-amber-500 font-medium">
//                 {daysLeft}d
//               </span>
//             )}
//           </Box>
//         </Box>

//         {/* Content */}
//         <Box className="flex items-start gap-3 sm:gap-4 px-3 sm:px-4 pb-4">
          
//           {/* Image */}
//           <Box className="w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-gray-100">
//             <img
//               src={coverImage}
//               alt={title}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//           </Box>

//           {/* Info */}
//           <Box className="flex flex-col justify-between min-h-[4rem] sm:min-h-[5rem] flex-1">
            
//             <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 group-hover:text-amber-600 transition-colors">
//               {title}
//             </h3>

//             {hackersCount && (
//               <Box className="flex items-center gap-1.5 mt-auto">
                
//                 <svg
//                   className="w-4 h-4 text-amber-500"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5zM12 16v-1a5 5 0 015-5 5 5 0 015 5v1h-10z" />
//                 </svg>

//                 <span className="text-xs font-medium text-amber-600">
//                   Register
//                 </span>

//                 <span className="text-xs text-gray-400">
//                   {hackersCount} Builders
//                 </span>
//               </Box>
//             )}
//           </Box>
//         </Box>
//       </Box>
//     </Link>
//   );
// }