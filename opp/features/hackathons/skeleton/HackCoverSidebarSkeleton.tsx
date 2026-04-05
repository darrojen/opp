
import Box from '@/components/ui/box';

export default function HackCoverSidebarSkeleton() {
  return (
    <Box
      as="div"
      className="max-w-[360 mx-auto px-4 sm:px-6 pt-6 flex flex-col lg:flex-row gap-6 items-start animate-pulse"
    >
      {/* ───────────────── LEFT ───────────────── */}
      <Box as="div" className="flex-1 w-full flex flex-col gap-5">
        
        {/* Cover */}
        <div className="w-full rounded-2xl bg-gray-200 h-55 sm:h-[80 lg:h-135" />

        {/* Organizer */}
        <div className="flex items-center gap-3 sm:gap-4 px-1">
          
          {/* Accent */}
          <div className="w-0.5 h-10 rounded-full bg-gray-200 shrink-0" />

          {/* Avatar */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-200 shrink-0" />

          {/* Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            
            {/* Text */}
            <div className="space-y-2">
              <div className="h-4 w-24 sm:w-32 bg-gray-200 rounded-md" />
              <div className="h-3 w-16 sm:w-20 bg-gray-100 rounded-md" />
            </div>

            {/* Button */}
            <div className="h-8 w-20 sm:w-24 bg-gray-200 rounded-full" />
          </div>
        </div>
      </Box>

      {/* ───────────────── SIDEBAR ───────────────── */}
     <div className="w-full lg:w-90 xl:w-100 shrink-0 rounded-2xl overflow-hidden bg-white border border-[#ede9e4] shadow-sm animate-pulse">
  
  {/* ───── Prize (gradient section) ───── */}
  <div
    className="px-5 pt-5 pb-4 space-y-3"
    style={{
      background: "linear-gradient(145deg, #fff8f4, #fff2eb)",
      borderBottom: "1px solid #f5ede6",
    }}
  >
    {/* Label */}
    <div className="h-2 w-20 bg-orange-100 rounded" />

    {/* Value + status */}
    <div className="flex items-center justify-between">
      <div className="h-7 w-32 bg-orange-200 rounded-md" />
      
      {/* Status chip */}
      <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-100">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-300" />
        <div className="h-2 w-10 bg-orange-200 rounded" />
      </div>
    </div>
  </div>

  {/* ───── Timeline ───── */}
  <div className="px-5 py-4 space-y-3" style={{ borderBottom: "1px solid #f0ece8" }}>
    
    {/* Label */}
    <div className="h-2 w-16 bg-gray-200 rounded" />

    {/* Note */}
    <div className="h-6 w-36 bg-orange-100 rounded-lg" />

    {/* Rows */}
    <div className="space-y-2 pt-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between py-2 border-b border-dashed border-gray-100 last:border-none">
          
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
            <div className="h-3 w-20 bg-gray-200 rounded" />
          </div>

          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  </div>

  {/* ───── Mode ───── */}
  <div
    className="px-5 py-3 flex items-center gap-2.5"
    style={{ background: "#fafaf9", borderBottom: "1px solid #f0ece8" }}
  >
    <div className="w-6 h-6 rounded-lg bg-emerald-100" />
    <div className="h-3 w-16 bg-gray-200 rounded" />
  </div>

  {/* ───── Tags ───── */}
  <div className="px-5 py-4 space-y-2.5" style={{ borderBottom: "1px solid #f0ece8" }}>
    <div className="h-2 w-10 bg-gray-200 rounded" />
    
    <div className="flex flex-wrap gap-1.5">
      {[48, 36, 28, 52, 40].map((w) => (
        <div
          key={w}
          className="h-6 rounded-full bg-orange-100"
          style={{ width: w }}
        />
      ))}
    </div>
  </div>

  {/* ───── Ecosystem ───── */}
  <div className="px-5 py-4 space-y-2.5" style={{ borderBottom: "1px solid #f0ece8" }}>
    <div className="h-2 w-24 bg-gray-200 rounded" />
    
    <div className="flex flex-wrap gap-1.5">
      {[32, 40, 28, 44].map((w) => (
        <div
          key={w}
          className="h-6 rounded-full bg-gray-200"
          style={{ width: w }}
        />
      ))}
    </div>
  </div>

  {/* ───── Requirements ───── */}
  <div className="px-5 py-4 space-y-2" style={{ borderBottom: "1px solid #f0ece8" }}>
    <div className="h-2 w-24 bg-gray-200 rounded" />
    <div className="h-3 w-full bg-gray-100 rounded" />
    <div className="h-3 w-4/5 bg-gray-100 rounded" />
    <div className="h-3 w-3/5 bg-gray-100 rounded" />
  </div>

  {/* ───── Organizer ───── */}
  <div className="px-5 py-4 flex items-center justify-between bg-[#fafaf9]">
    
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-gray-200" />
      
      <div className="space-y-1.5">
        <div className="h-2 w-16 bg-gray-200 rounded" />
        <div className="h-3.5 w-24 bg-gray-200 rounded" />
      </div>
    </div>

    <div className="h-8 w-20 rounded-xl bg-gray-200" />
  </div>

</div>
    </Box>
  );
}