// features/hacker/tabs/components/EmptyTab.tsx

import { ActivityTabProps } from "@/features/hacker/components/sub/tabs/types/types";


export default function EmptyTab({}: ActivityTabProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-60 text-gray-400 text-[15px] gap-2">
      <span className="text-3xl">📭</span>
      <p>Nothing here yet.</p>
    </div>
  );
}