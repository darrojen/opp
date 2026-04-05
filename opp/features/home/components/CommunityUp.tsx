// import Honeycomb from "@/components/logo/HoneycombLogo";

export default function CommunityUp() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Community Updates</h2>

      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-xl p-4 bg-white">
            <h3 className="font-medium">Update Title</h3>
            <p className="text-sm text-gray-500">
              Latest updates from the community.
            </p>
          </div>
        ))}
      </div>

      {/* <div className="mt-20 pl-30">

                    <Honeycomb size={24} color="#f97316" />
      </div> */}
      
    </div>
  )
}