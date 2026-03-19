import Box from "@/components/ui/box";

export default function GrantDetails({ params }: any) {
  const data = {
    title: decodeURIComponent(params.id),
    organization: "Open Foundation",
    amount: "$10,000",
    description: "Funding for innovative projects.",
  };

  return (
    <Box as="div" className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">{data.title}</h1>

      <p className="text-gray-600">{data.description}</p>

      <div className="bg-green-50 p-4 rounded-xl">
        <p className="font-semibold">Grant Amount</p>
        <p className="text-xl font-bold">{data.amount}</p>
      </div>

      <button className="w-full py-3 bg-black text-white rounded-xl">
        Apply
      </button>
    </Box>
  );
}