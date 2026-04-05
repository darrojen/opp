import Honeycomb from '@/components/logo/HoneycombLogo';
import Box from '@/components/ui/box';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      as="footer"
      className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-950"
    >
      <Box as="div" className="container mx-auto px-6 lg:px-8">
        {/* Top */}
        <Box as="div" className="grid gap-12 lg:grid-cols-5">
          {/* Logo + Social */}
          <Box as="div" className="space-y-6 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Box as="div" className="mt-7">
                <Honeycomb size={12} color="#f97316" />
              </Box>
              <Box as="p" className=" text-[23px]">
                Opphex
              </Box>
            </Link>

            <Box
              as="p"
              className="max-w-sm text-sm text-gray-600 dark:text-gray-400"
            >
              Connecting talents with hackathons, scholarships, grants,
              internships and global opportunities.
            </Box>

            <Box as="div">
              <Box
                as="p"
                className="mb-3 text-xs font-semibold tracking-wide text-gray-500"
              >
                FOLLOW US
              </Box>

              <Box as="div" className="flex gap-4">
                <Link
                  href="https://x.com/yourhandle"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/x.svg"
                    alt="X (Twitter)"
                    className="h-6 w-6"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com/yourhandle"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    className="h-6 w-6"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com/company/yourcompany"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/in.svg"
                    alt="LinkedIn"
                    className="h-6 w-6"
                    width={30}
                    height={30}
                  />
                </Link>

                {/* Facebook */}
                <Link
                  href="https://facebook.com/yourpage"
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/face.svg"
                    alt="Facebook"
                    className="h-7 w-7"
                    width={30}
                    height={30}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
          {/* About */}
          <Box as="div">
            <Box as="h4" className="mb-4 font-semibold">
              About
            </Box>

            <Box
              as="ul"
              className="space-y-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <Box as="li">
                <Link href="/about" className="hover:underline">
                  About Opp
                </Link>
              </Box>
              <Box as="li">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </Box>
              <Box as="li">
                <Link href="/changelog" className="hover:underline">
                  Changelog
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Resources */}
          <Box as="div">
            <Box as="h4" className="mb-4 font-semibold">
              Resources
            </Box>

            <Box
              as="ul"
              className="space-y-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <Box as="li">
                <Link href="/opportunities" className="hover:underline">
                  Explore Opportunities
                </Link>
              </Box>
              <Box as="li">
                <Link href="/post-opportunity" className="hover:underline">
                  Post Opportunity
                </Link>
              </Box>
              <Box as="li">
                <Link href="/for-organizations" className="hover:underline">
                  Partner With Us
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Contact */}
          <Box as="div">
            <Box as="h4" className="mb-4 font-semibold">
              Contact
            </Box>

            <Box
              as="ul"
              className="space-y-3 text-sm text-gray-600 dark:text-gray-400"
            >
              <Box as="li">
                <Link href="/contact" className="hover:underline">
                  Message Us
                </Link>
              </Box>
              <Box as="li">
                <Link href="/report" className="hover:underline">
                  Report Issue
                </Link>
              </Box>
              <Box as="li">
                <Link
                  href="mailto:hello@opportunityhub.dev"
                  className="hover:underline"
                >
                  Email
                </Link>
              </Box>
              <Box as="li">
                {' '}
                <Link
                  href="https://t.me/yourtelegram"
                  className="flex items-center gap-1 hover:underline"
                >
                  Telegram <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Box>
              <Box as="li">
                <Link
                  href="mailto:hello@opportunityhub.dev"
                  className="flex items-center gap-1 hover:underline"
                >
                  Discord
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Box>
              <Box as="li">
                <Link
                  href="mailto:hello@opportunityhub.dev"
                  className="flex items-center gap-1 hover:underline"
                >
                  Youtube <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom */}
        <Box
          as="div"
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row dark:border-gray-800"
        >
          <p>© {new Date().getFullYear()} OppHex. All rights reserved.</p>

          <Box as="div" className="flex gap-6">
            <Link href="/code-of-conduct">Code of conduct</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/terms">Affiliate</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
