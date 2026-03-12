// src/components/landing/TrendingOpportunities.tsx
import { Flame } from 'lucide-react'; // assuming you have lucide-react installed

export default function TrendingOpportunities() {
  const trending = [
    {
      title: "Google Africa Developer Scholarship 2026",
      org: "Google Developer Programs",
      views: "18.2k",
      deadline: "Mar 31, 2026",
      tags: ["Scholarship", "Remote", "Africa"],
    },
    {
      title: "Lagos AI Hackathon 2026",
      org: "CcHUB & Partners",
      views: "14.7k",
      deadline: "Apr 10, 2026",
      tags: ["Hackathon", "AI", "₦5M Prize"],
    },
    {
      title: "Andela Learning Community Internship",
      org: "Andela",
      views: "11.9k",
      deadline: "Rolling",
      tags: ["Internship", "Remote", "Paid"],
    },
    {
      title: "Flutterwave Startup Grant Round 3",
      org: "Flutterwave",
      views: "9.8k",
      deadline: "May 15, 2026",
      tags: ["Grant", "Startup", "Up to $50k"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-center gap-3">
          <Flame className="h-8 w-8 text-orange-500" />
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Trending Right Now
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trending.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800"
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-pink-500" />
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Trending
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    • {item.views} views
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {item.org} • Deadline: {item.deadline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}