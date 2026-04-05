// app/hackathons/[id]/loading.tsx

import HoneycombLoader from "@/components/loading/logo-load";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center">
      <HoneycombLoader />
    </div>
  );
}