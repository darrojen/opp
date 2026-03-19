import Box from "@/components/ui/box";

export default function InternshipDetails({ params }: any) {
  const data = {
    title: decodeURIComponent(params.id),
    company: "Google",
    description: "Work on real-world projects with top engineers.",
    duration: "3 months",
  };

  return (
    <Box as="div" className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>

      <p className="text-gray-600">{data.description}</p>

      <div className="bg-blue-50 p-4 rounded-xl">
        <p className="font-semibold">Duration</p>
        <p>{data.duration}</p>
      </div>

      <button className="w-full py-3 bg-black text-white rounded-xl">
        Apply
      </button>
    </Box>
  );
}