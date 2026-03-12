// src/components/landing/Statistics.tsx
export default function Statistics() {
  const stats = [
    {
      value: "12,500+",
      label: "Active Users",
      description: "Students, developers & young professionals",
    },
    {
      value: "340+",
      label: "Organizations & Partners",
      description: "Universities, startups, tech companies",
    },
    {
      value: "$1.2M+",
      label: "Total Value Unlocked",
      description: "Prizes, stipends, salaries & grants facilitated",
    },
    {
      value: "4,800+",
      label: "Applications Submitted",
      description: "Directly through the platform",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl">
          OpportunityHub by the Numbers
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-4 text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{stat.label}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300">
          These numbers are growing every day — join the movement and be part of the next milestone.
        </p>
      </div>
    </section>
  );
}