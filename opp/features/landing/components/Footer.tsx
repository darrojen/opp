// src/components/landing/Footer.tsx
import Box from '@/components/ui/box';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box as="footer" className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <Box as="div" className="container mx-auto px-6 lg:px-8">
        <Box as="div" className="grid gap-10 md:grid-cols-4">
          <Box as="div" >
            <Box as="h3" className="mb-4 text-xl font-bold">OpportunityHub</Box>
            <Box as="p" className="text-sm text-gray-600 dark:text-gray-400">
              Connecting African talent with life-changing opportunities.
            </Box>
          </Box>

          <Box as="div">
            <Box as="h4" className="mb-4 font-semibold">Platform</Box>
            <Box as="ul" className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <Box as="li"><Link href="/opportunities">All Opportunities</Link></Box>
              <Box as="li"><Link href="/categories/hackathons">Hackathons</Link></Box>
              <Box as="li"><Link href="/categories/internships">Internships</Link></Box>
              <Box as="li"><Link href="/categories/jobs">Jobs</Link></Box>
            </Box>
          </Box>

          <Box as="div">
            <Box as="h4" className="mb-4 font-semibold">For Organizations</Box>
            <Box as="luli" className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <Box as="li"><Link href="/post-opportunity">Post an Opportunity</Link></Box>
              <Box as="li"><Link href="/pricing">Pricing</Link></Box>
              <Box as="li"><Link href="/for-organizations">Partner with Us</Link></Box>
            </Box>
          </Box>

          <Box as="div">
            <Box as="h4" className="mb-4 font-semibold">Company</Box>
            <Box as="ul" className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <Box as="li"><Link href="/about">About</Link></Box>
              <Box as="li"><Link href="/contact">Contact</Link></Box>
              <Box as="li"><Link href="/privacy">Privacy Policy</Link></Box>
              <Box as="li"><Link href="/terms">Terms of Service</Link></Box>
            </Box>
          </Box>
        </Box>

        <Box as="div" className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          <p>© {new Date().getFullYear()} OpportunityHub. All rights reserved.</p>
        </Box>
      </Box>
    </Box>
  );
}