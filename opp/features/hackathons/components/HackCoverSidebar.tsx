

'use client';

import { useState } from 'react';
import Box from '@/components/ui/box';
import HackSidebar from '@/features/hackathons/components/HackSidebar';
import type { HackathonDetailProps } from '@/features/hackathons/props/HackathonDetailProps';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { IoMail } from 'react-icons/io5';
import MessageModal from '@/features/modal/message-modal/MessageModal';
import Image from 'next/image';

type Props = Pick<
  HackathonDetailProps,
  | 'title'
  | 'coverImage'
  | 'prizePool'
  | 'timeline'
  | 'mode'
  | 'tags'
  | 'ecosystem'
  | 'submissionRequirements'
  | 'organizer'
  | 'organizerIcon'
>;

export default function HackCoverSidebar({
  title,
  coverImage,
  organizer,
  organizerIcon,
  ...sidebarProps
}: Props) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <>
      <Box
        as="div"
        className="max-w-392.5 mx-auto px-6 pt-6 pb-0 flex flex-col lg:flex-row gap-6 items-start"
      >
        {/* Left col */}
        <Box as="div" className="flex-1 min-w-0 flex flex-col gap-5">
          {/* Cover image */}
          <Box
            as="div"
            className="w-full rounded-2xl overflow-hidden bg-gray-900 lg:h-137.5 aspect-video lg:aspect-auto"
          >
            <Image
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
              width={1}
              height={1}
            />
          </Box>

          {/* Organizer row */}
          <Box as="div" className="flex items-center gap-4 px-1">
            {/* Accent line */}
            <Box
              as="div"
              className="w-0.5 h-10 rounded-full shrink-0"
              style={{ background: 'linear-gradient(to bottom, #f97316, #fdba74)' }}
            />

            {/* Avatar */}
            {organizerIcon ? (
              <Image
                src={organizerIcon}
                alt={organizer}
                className="w-11 h-11 rounded-xl object-cover shrink-0 border border-gray-200"
                width={1}
                height={1}
              />
            ) : (
              <Box
                as="div"
                className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #1c1c1c, #444)' }}
              >
                {organizer[0]}
              </Box>
            )}

            {/* Name + meta + actions */}
            <Box as="div" className="flex items-center justify-between flex-1 flex-wrap gap-1 lg:max-w-67.5">
              {/* Left: Name + stats */}
              <Box as="div" className="leading-tight">
                <Box as="div" className="flex items-center gap-1.5">
                  <p className="text-lg font-bold text-gray-900">{organizer}</p>
                  <VscVerifiedFilled className="h-5 w-5 text-orange-500" />
                </Box>

                <Box
                  as="div"
                  className="flex items-center gap-4 text-[13px] text-gray-500 font-medium mt-0.5 hover:underline cursor-pointer"
                >
                  <Box as="span">
                    <Box as="span" className="text-gray-900 font-semibold">1k</Box>{' '}
                    followers
                  </Box>
                </Box>
              </Box>

              {/* Message trigger button */}
              <Box
                as="div"
                className="p-2 border rounded-full cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => setIsMessageOpen(true)}
                title={`Message ${organizer}`}
              >
                <IoMail size={27} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Sidebar */}
        <HackSidebar
          organizer={organizer}
          organizerIcon={organizerIcon}
          {...sidebarProps}
        />
      </Box>

      {/* Message modal — rendered outside the layout box so it overlays everything */}
      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        recipientName={organizer}
        recipientAvatar={organizerIcon}
        isVerified
      />
    </>
  );
}