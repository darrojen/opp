// src/components/landing/CTASection.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Box from '@/components/ui/box';

export default function CTASection() {
  return (
    <Box as="section" className="relative overflow-hidden bg-indigo-600 py-24 text-white">
      <Box as="div" className="container mx-auto px-6 text-center lg:px-8">
        <Box as="h2" className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to Unlock Your Next Opportunity?
        </Box>
        <Box as="p" className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-indigo-100">
          Join thousands of students and developers already discovering hackathons, internships, scholarships, jobs, and more — all in one place.
        </Box>

        <Box as="div" className="flex flex-col justify-center gap-6 sm:flex-row">
          <Button asChild size="lg" className="bg-white px-10 py-7 text-lg font-semibold text-indigo-700 hover:bg-gray-100">
            <Link href="/signup">Get Started — It&apos;s Free</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white px-10 py-7 text-lg hover:bg-white/10">
            <Link href="/opportunities">Browse Opportunities Now</Link>
          </Button>
        </Box>

        <Box as="p" className="mt-8 text-sm text-indigo-200">
          No credit card required • Cancel anytime
        </Box>
      </Box>

      {/* Background decoration */}
      <Box as="div" className="absolute inset-0 -z-10 opacity-20">
        <Box as="div" className="absolute left-10 top-10 h-64 w-64 rounded-full bg-purple-400 blur-3xl" />
        <Box as="div" className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-pink-400 blur-3xl" />
      </Box>
    </Box>
  );
}