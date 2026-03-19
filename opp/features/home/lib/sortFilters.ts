export type SortFilter = "for-you" | "trending" | "new" | "featured" | "closing-soon";


export const sortFilters: { id: SortFilter; label: string }[] = [
//   { id: "for-you",      label: "For you"      },
  { id: "trending",     label: "Trending"     },
  { id: "new",          label: "New"          },
  { id: "featured",     label: "Featured"     },
  { id: "closing-soon", label: "Closing Soon" },
];