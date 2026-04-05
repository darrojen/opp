// 'use client';

// import { useState } from "react";
// import { FiSearch, FiGrid, FiList, FiChevronDown, FiArrowUp, FiGithub, FiGlobe } from "react-icons/fi";
// import {Build, BuildCardProps, BuildListProps, ViewMode } from "@/features/sub_components/build/types/build-list";

// // ── Category badge ────────────────────────────────────────────────────────────
// const categoryColors: Record<string, string> = {
//   "AI / Robotics": "text-orange-400",
//   "DeFi": "text-emerald-400",
//   "NFT": "text-violet-400",
//   "Gaming": "text-sky-400",
//   "DAO": "text-amber-400",
//   "Infrastructure": "text-rose-400",
//   "Social": "text-pink-400",
//   "Other": "text-zinc-400",
// };

// function CategoryLabel({ category }: { category: string }) {
//   const color = categoryColors[category] ?? "text-zinc-400";
//   return (
//     <span className={`text-[11px] font-bold tracking-wide ${color}`}>
//       {category}
//     </span>
//   );
// }

// // ── Author avatar ─────────────────────────────────────────────────────────────
// function AuthorAvatar({ username, avatarUrl }: { username: string; avatarUrl?: string }) {
//   const [errored, setErrored] = useState(false);
//   const gradients = [
//     "from-emerald-500 to-teal-700",
//     "from-violet-500 to-indigo-700",
//     "from-rose-500 to-pink-700",
//     "from-amber-500 to-orange-700",
//     "from-sky-500 to-blue-700",
//     "from-fuchsia-500 to-purple-700",
//   ];
//   const gradient = gradients[username.charCodeAt(0) % gradients.length];

//   if (avatarUrl && !errored) {
//     return (
//       <img
//         src={avatarUrl}
//         alt={username}
//         onError={() => setErrored(true)}
//         className="w-5 h-5 rounded-full object-cover flex-shrink-0"
//       />
//     );
//   }

//   return (
//     <div
//       className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-black bg-gradient-to-br ${gradient}`}
//     >
//       {username.charAt(0).toUpperCase()}
//     </div>
//   );
// }

// // ── Thumbnail ─────────────────────────────────────────────────────────────────
// function Thumbnail({ build }: { build: Build }) {
//   const [errored, setErrored] = useState(false);
//   const gradients = [
//     "from-zinc-700 to-zinc-800",
//     "from-orange-900/60 to-zinc-800",
//     "from-sky-900/60 to-zinc-800",
//     "from-violet-900/60 to-zinc-800",
//   ];
//   const gradient = gradients[build.id.charCodeAt(0) % gradients.length];

//   if (build.thumbnailUrl && !errored) {
//     return (
//       <img
//         src={build.thumbnailUrl}
//         alt={build.title}
//         onError={() => setErrored(true)}
//         className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
//       />
//     );
//   }

//   return (
//     <div
//       className={`w-16 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br ${gradient} flex items-center justify-center`}
//     >
//       <span className="text-2xl font-black text-zinc-500">
//         {build.title.charAt(0)}
//       </span>
//     </div>
//   );
// }

// // ── Build Card (Grid) ─────────────────────────────────────────────────────────
// function BuildCardGrid({ build, onClick }: BuildCardProps) {
//   return (
//     <div
//       onClick={() => onClick?.(build)}
//       className="
//         group relative flex flex-col
//         bg-zinc-900 border border-zinc-800
//         rounded-2xl overflow-hidden
//         hover:border-zinc-600 hover:bg-zinc-800/70
//         transition-all duration-200 cursor-pointer
//       "
//     >
//       {/* Author row */}
//       <div className="flex items-center gap-2 px-4 pt-3.5 pb-2">
//         <AuthorAvatar username={build.author.username} avatarUrl={build.author.avatarUrl} />
//         <span className="text-[11px] text-zinc-500 font-medium truncate">
//           {build.author.username}
//         </span>
//       </div>

//       {/* Main content */}
//       <div className="flex items-start gap-3 px-4 pb-3">
//         <Thumbnail build={build} />
//         <div className="flex-1 min-w-0">
//           <div className="flex items-start justify-between gap-1">
//             <p className="font-semibold text-zinc-100 text-sm leading-snug line-clamp-2 tracking-tight">
//               {build.title}
//             </p>
//             <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
//               {build.hasGithub && (
//                 <FiGithub size={13} className="text-zinc-500 hover:text-zinc-300 transition-colors" />
//               )}
//               {build.hasWebsite && (
//                 <FiGlobe size={13} className="text-zinc-500 hover:text-zinc-300 transition-colors" />
//               )}
//             </div>
//           </div>
//           <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2 leading-relaxed">
//             {build.description}
//           </p>
//         </div>
//       </div>

//       {/* Category */}
//       <div className="px-4 pb-3">
//         <CategoryLabel category={build.category} />
//       </div>

//       {/* Track footer */}
//       <div className="flex items-center gap-1.5 px-4 py-2.5 border-t border-zinc-800 bg-zinc-900/60">
//         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 flex-shrink-0">
//           <rect x="3" y="3" width="7" height="7" rx="1" />
//           <rect x="14" y="3" width="7" height="7" rx="1" />
//           <rect x="3" y="14" width="7" height="7" rx="1" />
//           <rect x="14" y="14" width="7" height="7" rx="1" />
//         </svg>
//         <span className="text-[10px] text-zinc-600 font-semibold tracking-wide uppercase truncate">
//           TRACK
//         </span>
//         <span className="text-[11px] text-zinc-500 truncate">{build.track}</span>
//       </div>
//     </div>
//   );
// }

// // ── Build Card (List) ─────────────────────────────────────────────────────────
// function BuildCardList({ build, onClick }: BuildCardProps) {
//   return (
//     <div
//       onClick={() => onClick?.(build)}
//       className="
//         group flex items-center gap-4 px-4 py-3
//         bg-zinc-900 border border-zinc-800
//         rounded-2xl
//         hover:border-zinc-600 hover:bg-zinc-800/70
//         transition-all duration-200 cursor-pointer
//       "
//     >
//       <Thumbnail build={build} />
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-2 mb-0.5">
//           <AuthorAvatar username={build.author.username} avatarUrl={build.author.avatarUrl} />
//           <span className="text-[11px] text-zinc-500">{build.author.username}</span>
//         </div>
//         <p className="font-semibold text-zinc-100 text-sm truncate">{build.title}</p>
//         <p className="text-[11px] text-zinc-500 truncate mt-0.5">{build.description}</p>
//       </div>
//       <div className="flex-shrink-0 text-right space-y-1">
//         <CategoryLabel category={build.category} />
//         <p className="text-[10px] text-zinc-600 truncate max-w-[160px]">{build.track}</p>
//       </div>
//       <div className="flex items-center gap-1.5 flex-shrink-0">
//         {build.hasGithub && <FiGithub size={14} className="text-zinc-500" />}
//         {build.hasWebsite && <FiGlobe size={14} className="text-zinc-500" />}
//       </div>
//     </div>
//   );
// }

// // ── Skeleton ──────────────────────────────────────────────────────────────────
// function SkeletonGrid() {
//   return (
//     <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden animate-pulse">
//       <div className="flex items-center gap-2 px-4 pt-3.5 pb-2">
//         <div className="w-5 h-5 rounded-full bg-zinc-800" />
//         <div className="h-2 bg-zinc-800 rounded w-20" />
//       </div>
//       <div className="flex gap-3 px-4 pb-3">
//         <div className="w-16 h-16 rounded-xl bg-zinc-800 flex-shrink-0" />
//         <div className="flex-1 space-y-2 pt-1">
//           <div className="h-3 bg-zinc-800 rounded w-4/5" />
//           <div className="h-2 bg-zinc-800/60 rounded w-full" />
//           <div className="h-2 bg-zinc-800/60 rounded w-3/4" />
//         </div>
//       </div>
//       <div className="px-4 pb-3">
//         <div className="h-2 bg-zinc-800 rounded w-16" />
//       </div>
//       <div className="px-4 py-2.5 border-t border-zinc-800">
//         <div className="h-2 bg-zinc-800/60 rounded w-3/4" />
//       </div>
//     </div>
//   );
// }

// // ── Toolbar ───────────────────────────────────────────────────────────────────
// function Toolbar({
//   viewMode,
//   onViewModeChange,
//   onSearch,
//   onSortChange,
//   onTrackChange,
//   searchPlaceholder = "Search BUIDL by name",
//   tracks = [],
// }: {
//   viewMode: ViewMode;
//   onViewModeChange: (v: ViewMode) => void;
//   onSearch?: (q: string) => void;
//   onSortChange?: (s: string) => void;
//   onTrackChange?: (t: string) => void;
//   searchPlaceholder?: string;
//   tracks?: string[];
// }) {
//   return (
//     <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
//       {/* Left: Sort + Tracks */}
//       <div className="flex items-center gap-2">
//         <button
//           onClick={() => onSortChange?.("default")}
//           className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800 transition-all"
//         >
//           <FiArrowUp size={13} className="rotate-180" />
//           <span className="font-medium text-xs">Sort</span>
//         </button>

//         {tracks.length > 0 && (
//           <button
//             onClick={() => onTrackChange?.("all")}
//             className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800 transition-all"
//           >
//             <span className="font-medium text-xs">Tracks</span>
//             <FiChevronDown size={13} />
//           </button>
//         )}
//       </div>

//       {/* Right: Search + View toggle */}
//       <div className="flex items-center gap-2">
//         {/* Search */}
//         <div className="relative">
//           <FiSearch size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
//           <input
//             type="text"
//             placeholder={searchPlaceholder}
//             onChange={(e) => onSearch?.(e.target.value)}
//             className="
//               pl-8 pr-4 py-2 text-xs
//               bg-zinc-900 border border-zinc-700
//               rounded-xl text-zinc-200 placeholder-zinc-600
//               focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50
//               transition-all w-52
//             "
//           />
//         </div>

//         {/* Grid / List toggle */}
//         <div className="flex items-center border border-zinc-700 rounded-xl overflow-hidden">
//           <button
//             onClick={() => onViewModeChange("grid")}
//             className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-all ${
//               viewMode === "grid"
//                 ? "bg-zinc-700 text-zinc-100"
//                 : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
//             }`}
//           >
//             <FiGrid size={13} />
//             Grid
//           </button>
//           <button
//             onClick={() => onViewModeChange("list")}
//             className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-all ${
//               viewMode === "list"
//                 ? "bg-zinc-700 text-zinc-100"
//                 : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
//             }`}
//           >
//             <FiList size={13} />
//             List
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── BuildList ─────────────────────────────────────────────────────────────────
// export default function BuildList({
//   builds,
//   isLoading = false,
//   onBuildClick,
//   onSearch,
//   onSortChange,
//   onTrackChange,
//   searchPlaceholder,
//   tracks = [],
// }: BuildListProps) {
//   const [viewMode, setViewMode] = useState<ViewMode>("grid");

//   return (
//     <div className="font-sans">
//       <Toolbar
//         viewMode={viewMode}
//         onViewModeChange={setViewMode}
//         onSearch={onSearch}
//         onSortChange={onSortChange}
//         onTrackChange={onTrackChange}
//         searchPlaceholder={searchPlaceholder}
//         tracks={tracks}
//       />

//       {viewMode === "grid" ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
//           {isLoading
//             ? Array.from({ length: 8 }).map((_, i) => <SkeletonGrid key={i} />)
//             : builds.map((build) => (
//                 <BuildCardGrid key={build.id} build={build} onClick={onBuildClick} />
//               ))}
//         </div>
//       ) : (
//         <div className="flex flex-col gap-2.5">
//           {isLoading
//             ? Array.from({ length: 6 }).map((_, i) => <SkeletonGrid key={i} />)
//             : builds.map((build) => (
//                 <BuildCardList key={build.id} build={build} onClick={onBuildClick} />
//               ))}
//         </div>
//       )}

//       {!isLoading && builds.length === 0 && (
//         <p className="text-center text-zinc-600 text-sm mt-16 font-medium">
//           No BUIDLs found.
//         </p>
//       )}
//     </div>
//   );
// }




'use client';

import { useState } from "react";
import { FiSearch, FiGrid, FiList, FiChevronDown, FiArrowUp, FiGithub, FiGlobe } from "react-icons/fi";
import { Build, BuildCardProps, BuildListProps, ViewMode } from "@/features/sub_components/build/types/build-list";

// ── Category badge ─────────────────────────────────────────
const categoryColors: Record<string, string> = {
  "AI / Robotics": "text-orange-600",
  "DeFi": "text-emerald-600",
  "NFT": "text-violet-600",
  "Gaming": "text-sky-600",
  "DAO": "text-amber-600",
  "Infrastructure": "text-rose-600",
  "Social": "text-pink-600",
  "Other": "text-zinc-500",
};

function CategoryLabel({ category }: { category: string }) {
  const color = categoryColors[category] ?? "text-zinc-500";
  return (
    <span className={`text-[11px] font-semibold ${color}`}>
      {category}
    </span>
  );
}

// ── Avatar ─────────────────────────────────────────
function AuthorAvatar({ username, avatarUrl }: { username: string; avatarUrl?: string }) {
  const [errored, setErrored] = useState(false);

  if (avatarUrl && !errored) {
    return (
      <img
        src={avatarUrl}
        alt={username}
        onError={() => setErrored(true)}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-200 text-zinc-700 text-xs font-bold">
      {username.charAt(0).toUpperCase()}
    </div>
  );
}

// ── Thumbnail ─────────────────────────────────────────
function Thumbnail({ build }: { build: Build }) {
  const [errored, setErrored] = useState(false);

  if (build.thumbnailUrl && !errored) {
    return (
      <img
        src={build.thumbnailUrl}
        alt={build.title}
        onError={() => setErrored(true)}
        className="w-16 h-16 rounded-xl object-cover"
      />
    );
  }

  return (
    <div className="w-16 h-16 rounded-xl bg-zinc-100 flex items-center justify-center">
      <span className="text-lg font-bold text-zinc-400">
        {build.title.charAt(0)}
      </span>
    </div>
  );
}

// ── Grid Card ─────────────────────────────────────────
function BuildCardGrid({ build, onClick }: BuildCardProps) {
  return (
    <div
      onClick={() => onClick?.(build)}
      className="
        group flex flex-col
        bg-white border border-zinc-200
        rounded-2xl
        hover:shadow-md hover:-translate-y-[2px]
        transition-all duration-200 cursor-pointer
      "
    >
      {/* Author */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-2">
        <AuthorAvatar username={build.author.username} avatarUrl={build.author.avatarUrl} />
        <span className="text-xs text-zinc-500 truncate">
          {build.author.username}
        </span>
      </div>

      {/* Content */}
      <div className="flex gap-3 px-4 pb-3">
        <Thumbnail build={build} />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <p className="font-semibold text-sm text-zinc-800 line-clamp-2">
              {build.title}
            </p>
            <div className="flex gap-1">
              {build.hasGithub && <FiGithub size={14} className="text-zinc-400 hover:text-zinc-700" />}
              {build.hasWebsite && <FiGlobe size={14} className="text-zinc-400 hover:text-zinc-700" />}
            </div>
          </div>

          <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
            {build.description}
          </p>
        </div>
      </div>

      {/* Category */}
      <div className="px-4 pb-3">
        <CategoryLabel category={build.category} />
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-zinc-100 text-xs text-zinc-500 flex gap-2">
        <span className="font-medium text-zinc-400 uppercase">Track</span>
        <span className="truncate">{build.track}</span>
      </div>
    </div>
  );
}

// ── List Card ─────────────────────────────────────────
function BuildCardList({ build, onClick }: BuildCardProps) {
  return (
    <div
      onClick={() => onClick?.(build)}
      className="
        flex items-center gap-4 px-4 py-3
        bg-white border border-zinc-200
        rounded-2xl
        hover:shadow-sm hover:bg-zinc-50
        transition-all cursor-pointer
      "
    >
      <Thumbnail build={build} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <AuthorAvatar username={build.author.username} avatarUrl={build.author.avatarUrl} />
          <span className="text-xs text-zinc-500">{build.author.username}</span>
        </div>

        <p className="font-semibold text-sm text-zinc-800 truncate">
          {build.title}
        </p>

        <p className="text-xs text-zinc-500 truncate">
          {build.description}
        </p>
      </div>

      <div className="text-right">
        <CategoryLabel category={build.category} />
        <p className="text-xs text-zinc-400 truncate max-w-[150px]">
          {build.track}
        </p>
      </div>

      <div className="flex gap-2">
        {build.hasGithub && <FiGithub size={15} className="text-zinc-400" />}
        {build.hasWebsite && <FiGlobe size={15} className="text-zinc-400" />}
      </div>
    </div>
  );
}

// ── Skeleton ─────────────────────────────────────────
function SkeletonGrid() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-4 animate-pulse space-y-3">
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-zinc-200 rounded-full" />
        <div className="h-2 bg-zinc-200 w-20 rounded" />
      </div>
      <div className="flex gap-3">
        <div className="w-16 h-16 bg-zinc-200 rounded-xl" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-zinc-200 w-3/4 rounded" />
          <div className="h-2 bg-zinc-200 w-full rounded" />
        </div>
      </div>
    </div>
  );
}

// ── Toolbar ─────────────────────────────────────────
function Toolbar({
  viewMode,
  onViewModeChange,
  onSearch,
  onSortChange,
  onTrackChange,
  searchPlaceholder = "Search builds...",
  tracks = [],
}: any) {
  return (
    <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
      {/* Left */}
      <div className="flex gap-2">
        <button className="px-3 py-2 text-xs border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 flex items-center gap-1">
          <FiArrowUp size={13} />
          Sort
        </button>

        {tracks.length > 0 && (
          <button className="px-3 py-2 text-xs border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50 flex items-center gap-1">
            Tracks <FiChevronDown size={13} />
          </button>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative">
          <FiSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch?.(e.target.value)}
            className="
              pl-9 pr-3 py-2 text-sm
              border border-zinc-200 rounded-xl
              bg-white text-zinc-700
              placeholder-zinc-400
              focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500
              outline-none
              w-56
            "
          />
        </div>

        {/* Toggle */}
        <div className="flex border border-zinc-200 rounded-xl overflow-hidden">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`px-3 py-2 text-xs ${
              viewMode === "grid"
                ? "bg-zinc-100 text-zinc-800"
                : "text-zinc-500 hover:bg-zinc-50"
            }`}
          >
            <FiGrid size={14} />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`px-3 py-2 text-xs ${
              viewMode === "list"
                ? "bg-zinc-100 text-zinc-800"
                : "text-zinc-500 hover:bg-zinc-50"
            }`}
          >
            <FiList size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────
export default function BuildList({
  builds,
  isLoading = false,
  onBuildClick,
  onSearch,
  onSortChange,
  onTrackChange,
  searchPlaceholder,
  tracks = [],
}: BuildListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  return (
    <div className="font-sans">
      <Toolbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onSearch={onSearch}
        onSortChange={onSortChange}
        onTrackChange={onTrackChange}
        searchPlaceholder={searchPlaceholder}
        tracks={tracks}
      />

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <SkeletonGrid key={i} />)
            : builds.map((b) => (
                <BuildCardGrid key={b.id} build={b} onClick={onBuildClick} />
              ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonGrid key={i} />)
            : builds.map((b) => (
                <BuildCardList key={b.id} build={b} onClick={onBuildClick} />
              ))}
        </div>
      )}

      {!isLoading && builds.length === 0 && (
        <p className="text-center text-zinc-400 mt-16">
          No builds found.
        </p>
      )}
    </div>
  );
}




// 'use client';

// import { useState } from "react";
// import {
//   FiSearch,
//   FiGrid,
//   FiList,
//   FiChevronDown,
//   FiArrowUp,
//   FiGithub,
//   FiGlobe,
// } from "react-icons/fi";
// import {
//   Build,
//   BuildCardProps,
//   BuildListProps,
//   ViewMode,
// } from "@/features/sub_components/build/types/build-list";

// // ── Category badge ────────────────────────────────────────────────────────────
// const categoryColors: Record<string, string> = {
//   "AI / Robotics": "text-orange-300",
//   "DeFi": "text-emerald-300",
//   "NFT": "text-violet-300",
//   "Gaming": "text-sky-300",
//   "DAO": "text-amber-300",
//   "Infrastructure": "text-rose-300",
//   "Social": "text-pink-300",
//   "Other": "text-zinc-300",
// };

// function CategoryLabel({ category }: { category: string }) {
//   const color = categoryColors[category] ?? "text-zinc-300";
//   return (
//     <span className={`text-[11px] font-bold tracking-wide ${color}`}>
//       {category}
//     </span>
//   );
// }

// // ── Avatar ────────────────────────────────────────────────────────────────────
// function AuthorAvatar({
//   username,
//   avatarUrl,
// }: {
//   username: string;
//   avatarUrl?: string;
// }) {
//   const [errored, setErrored] = useState(false);

//   const gradients = [
//     "from-emerald-500 to-teal-700",
//     "from-violet-500 to-indigo-700",
//     "from-rose-500 to-pink-700",
//     "from-amber-500 to-orange-700",
//     "from-sky-500 to-blue-700",
//   ];


//   const gradient = gradients[username.charCodeAt(0) % gradients.length];

//   if (avatarUrl && !errored) {
//     return (
//       <img
//         src={avatarUrl}
//         onError={() => setErrored(true)}
//         className="w-6 h-6 rounded-full object-cover"
//       />
//     );
//   }

//   return (
//     <div
//       className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold bg-gradient-to-br ${gradient}`}
//     >
//       {username.charAt(0).toUpperCase()}
//     </div>
//   );
// }

// // ── Thumbnail ─────────────────────────────────────────────────────────────────
// function Thumbnail({ build }: { build: Build }) {
//   const [errored, setErrored] = useState(false);

//   if (build.thumbnailUrl && !errored) {
//     return (
//       <img
//         src={build.thumbnailUrl}
//         onError={() => setErrored(true)}
//         className="w-16 h-16 rounded-xl object-cover"
//       />
//     );
//   }

//   return (
//     <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-xl">
//       {build.title.charAt(0)}
//     </div>
//   );
// }

// // ── Grid Card ─────────────────────────────────────────────────────────────────
// function BuildCardGrid({ build, onClick }: BuildCardProps) {
//   return (
//     <div
//       onClick={() => onClick?.(build)}
//       className="
//         group flex flex-col
//         bg-white/5 backdrop-blur-xl border border-white/10
//         rounded-2xl overflow-hidden
//         hover:bg-white/10 hover:border-white/20
//         hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]
//         transition-all duration-300 cursor-pointer
//       "
//     >
//       <div className="flex items-center gap-2 px-4 pt-4 pb-2">
//         <AuthorAvatar {...build.author} />
//         <span className="text-xs text-zinc-300/70 truncate">
//           {build.author.username}
//         </span>
//       </div>

//       <div className="flex gap-3 px-4 pb-3">
//         <Thumbnail build={build} />
//         <div className="flex-1">
//           <div className="flex justify-between">
//             <p className="text-sm text-white font-semibold line-clamp-2">
//               {build.title}
//             </p>

//             <div className="flex gap-1">
//               {build.hasGithub && <FiGithub size={14} className="text-zinc-400" />}
//               {build.hasWebsite && <FiGlobe size={14} className="text-zinc-400" />}
//             </div>
//           </div>

//           <p className="text-xs text-zinc-300/70 mt-1 line-clamp-2">
//             {build.description}
//           </p>
//         </div>
//       </div>

//       <div className="px-4 pb-3">
//         <CategoryLabel category={build.category} />
//       </div>

//       <div className="px-4 py-2 border-t border-white/10 text-xs text-zinc-400">
//         {build.track}
//       </div>
//     </div>
//   );
// }

// // ── List Card ─────────────────────────────────────────────────────────────────
// function BuildCardList({ build, onClick }: BuildCardProps) {
//   return (
//     <div
//       onClick={() => onClick?.(build)}
//       className="
//         flex items-center gap-4 px-4 py-3
//         bg-white/5 backdrop-blur-xl border border-white/10
//         rounded-2xl
//         hover:bg-white/10 hover:border-white/20
//         transition-all duration-300 cursor-pointer
//       "
//     >
//       <Thumbnail build={build} />

//       <div className="flex-1">
//         <div className="flex items-center gap-2">
//           <AuthorAvatar {...build.author} />
//           <span className="text-xs text-zinc-300/70">
//             {build.author.username}
//           </span>
//         </div>

//         <p className="text-white text-sm font-semibold truncate">
//           {build.title}
//         </p>
//         <p className="text-xs text-zinc-400 truncate">
//           {build.description}
//         </p>
//       </div>

//       <CategoryLabel category={build.category} />

//       <div className="flex gap-1">
//         {build.hasGithub && <FiGithub />}
//         {build.hasWebsite && <FiGlobe />}
//       </div>
//     </div>
//   );
// }

// // ── Toolbar ───────────────────────────────────────────────────────────────────
// function Toolbar({
//   viewMode,
//   onViewModeChange,
//   onSearch,
// }: any) {
//   return (
//     <div className="
//       flex justify-between items-center mb-6 flex-wrap gap-4
//       bg-white/5 backdrop-blur-xl border border-white/10
//       rounded-2xl px-4 py-3
//     ">
//       <div className="flex gap-2">
//         <button className="px-3 py-2 text-xs text-zinc-300 border border-white/10 rounded-xl flex items-center gap-1">
//           <FiArrowUp size={12} /> Sort
//         </button>

//         <button className="px-3 py-2 text-xs text-zinc-300 border border-white/10 rounded-xl flex items-center gap-1">
//           Tracks <FiChevronDown size={12} />
//         </button>
//       </div>

//       <div className="flex items-center gap-2">
//         <div className="relative">
//           <FiSearch className="absolute left-3 top-2.5 text-zinc-400" size={13} />
//           <input
//             onChange={(e) => onSearch?.(e.target.value)}
//             placeholder="Search builds..."
//             className="
//               pl-8 pr-3 py-2 text-xs
//               bg-white/5 backdrop-blur-md border border-white/10
//               rounded-xl text-white placeholder-zinc-400
//               focus:outline-none focus:ring-2 focus:ring-indigo-500/40
//             "
//           />
//         </div>

//         <div className="flex border border-white/10 rounded-xl overflow-hidden">
//           <button
//             onClick={() => onViewModeChange("grid")}
//             className={`px-3 py-2 text-xs ${
//               viewMode === "grid" ? "bg-white/10 text-white" : "text-zinc-400"
//             }`}
//           >
//             <FiGrid />
//           </button>
//           <button
//             onClick={() => onViewModeChange("list")}
//             className={`px-3 py-2 text-xs ${
//               viewMode === "list" ? "bg-white/10 text-white" : "text-zinc-400"
//             }`}
//           >
//             <FiList />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── MAIN ──────────────────────────────────────────────────────────────────────
// export default function BuildList({
//   builds,
//   isLoading,
//   onBuildClick,
//   onSearch,
// }: BuildListProps) {
//   const [viewMode, setViewMode] = useState<ViewMode>("grid");

//   return (
//     <div className="relative min-h-screen overflow-hidden font-sans">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-900 opacity-60" />
//       <div className="absolute inset-0 backdrop-blur-3xl bg-black/40" />

//       {/* Glow blobs */}
//       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[120px] opacity-30" />
//       <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-orange-500 rounded-full blur-[120px] opacity-30" />

//       {/* Content */}
//       <div className="relative z-10 p-4">
//         <Toolbar
//           viewMode={viewMode}
//           onViewModeChange={setViewMode}
//           onSearch={onSearch}
//         />

//         {viewMode === "grid" ? (
//           <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
//             {builds.map((build) => (
//               <BuildCardGrid
//                 key={build.id}
//                 build={build}
//                 onClick={onBuildClick}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col gap-3">
//             {builds.map((build) => (
//               <BuildCardList
//                 key={build.id}
//                 build={build}
//                 onClick={onBuildClick}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }