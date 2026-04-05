// components/ProfileCard.tsx
'use client';

import { Status } from '@/components/layout/UserStatus';
import Box from '@/components/ui/box';
import { HackerProfile } from '@/features/hacker/types/hacker.types';
import MessageModal from '@/features/modal/message-modal/MessageModal';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiBriefcase } from 'react-icons/hi2';
import { IoMail } from 'react-icons/io5';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { TbMapPinFilled } from 'react-icons/tb';
import { FaSchool } from 'react-icons/fa6';
import Title from '@/components/ui/title';

interface ProfileCardProps {
  profile: HackerProfile;
  isOwner?: boolean;
  onEditProfile?: () => void;
  onFollow?: () => void;
  //   onMessage?: () => void;
}

// ---- Sub-components ----

const MetaRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
    <span style={{ color: '#4e4f50', flexShrink: 0, marginTop: 2 }}>
      {icon}
    </span>
    <span style={{ fontSize: 14, color: '#374151' }}>{text}</span>
  </div>
);

const Stat = ({ count, label }: { count: number; label: string }) => (
  <div style={{ display: 'flex', gap: 5, alignItems: 'baseline' }}>
    <span
      style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 700,
        fontSize: 16,
        color: '#111827',
      }}
    >
      {count}
    </span>
    <span style={{ fontSize: 14, color: '#9CA3AF' }}>{label}</span>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3
      style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 15,
        fontWeight: 700,
        color: '#111827',
        margin: '0 0 10px',
      }}
    >
      {title}
    </h3>
    {children}
  </div>
);

// ---- Main Component ----

export function ProfileCard({
  profile,
  isOwner = false,
  onEditProfile,
  onFollow,
}: ProfileCardProps) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <aside
      style={{
        fontFamily: "'DM Sans', sans-serif",
        width: '100%',
        maxWidth: 340,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          paddingBottom: 24,
        }}
      >
        {/* Avatar Container with Status */}

        <div className="relative shrink-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-75 lg:h-75 rounded-full overflow-hidden border border-gray-300">
            <Image
              src={profile.avatarUrl}
              alt={profile.username}
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>

          {/* Status */}
          <div
            className="absolute bottom-0 right-0 translate-x-[-10%] translate-y-[-7%] z-10       lg:translate-x-[-65%] lg:translate-y-[-45%]
"
          >
            <Status status={profile.status} />
          </div>
        </div>
      </div>

      {/* Name Section */}

      <Box as="div" className="w-full pb-2 mb-2">
        <Box as="div" className="flex items-center gap-2">
          <h1
            className="flex items-center gap-2 text-[25px] font-bold text-gray-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {profile.username}
            <VscVerifiedFilled className="h-6 w-6 text-gray-500" />
          </h1>
        </Box>

        <p className="text-gray-400 text-[16px] font-medium mt-1">
          {profile.handle}
        </p>
      </Box>
      {/* Social Icons */}
      <Box as="div" className="flex gap-14 mb-6 pb-3 border-b">
        <Box as="div" className="flex gap-4">
          <Title title="Github">
            <Link
              href="https://github.com/yourhandle"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="Github"
                className="h-7 w-7 "
                width={30}
                height={30}
              />
            </Link>
          </Title>

          <Title title="X">
            <Link
              href="https://x.com/yourhandle"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/x.svg"
                alt="X (Twitter)"
                className="h-6 w-6 "
                width={30}
                height={30}
              />
            </Link>
          </Title>

          {/* LinkedIn */}
          <Title title="LinkedIn">
            <Link
              href="https://linkedin.com/company/yourcompany"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
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
          </Title>

          {/* Facebook */}

          <Title title="Facebook">
            <Link
              href="https://facebook.com/yourpage"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
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
          </Title>

          {/* Website */}
          <Title title="Website">
            <Link
              href={
                profile.socialLinks?.website
                  ? profile.socialLinks.website.startsWith('http')
                    ? profile.socialLinks.website
                    : `https://${profile.socialLinks.website}`
                  : '#'
              }
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/website.svg"
                alt="Website"
                className="h-7 w-7"
                width={30}
                height={30}
              />
            </Link>
          </Title>
        </Box>
      </Box>

      {/* Meta Info */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginBottom: 20,
        }}
      >
        <MetaRow icon={<TbMapPinFilled size={20} />} text={profile.location} />
        <MetaRow
          icon={<HiBriefcase size={20} />}
          text={profile.roles.join(' / ')}
        />
        <MetaRow icon={<FaSchool size={18} />} text={profile.organization} />
        <p
          style={{
            fontSize: 14,
            color: '#374151',
            lineHeight: 1.6,
            marginTop: 6,
          }}
        >
          {profile.bio}
        </p>
      </div>

      <hr
        style={{
          border: 'none',
          borderTop: '1px solid #E5E7EB',
          margin: '4px 0 20px',
        }}
      />

      {/* Follow Stats */}
      <Box as="div" style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
        <Stat count={profile.following} label="Following" />
        <Stat count={profile.followers} label="Followers" />
      </Box>

      {/* Actions — conditional on isOwner */}
      {isOwner ? (
        <button
          onClick={onEditProfile}
          style={{
            width: '100%',
            background: '#F9FAFB',
            color: '#374151',
            border: '1.5px solid #D1D5DB',
            borderRadius: 8,
            padding: '10px 0',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            cursor: 'pointer',
            marginBottom: 28,
          }}
        >
          ✏ Edit Profile
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
          <button
            onClick={onFollow}
            style={{
              flex: 1,
              background: '#F97316',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 0',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <span>＋</span> Follow
          </button>
          <Title title="Message">
            <button
              className="p-2 border rounded-full cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setIsMessageOpen(true)}
            >
              <IoMail size={27} />
            </button>
          </Title>
        </div>
      )}

      <hr
        style={{
          border: 'none',
          borderTop: '1px solid #E5E7EB',
          margin: '0 0 20px',
        }}
      />

      {/* Skills */}
      <Section title="Skills">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {profile.skills.map(s => (
            <span
              key={s}
              style={{
                background: '#FFF7ED',
                color: '#F97316',
                border: '1px solid #FED7AA',
                borderRadius: 6,
                padding: '4px 12px',
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </Section>
      <hr
        style={{
          border: 'none',
          borderTop: '1px solid #E5E7EB',
          margin: '20px 0',
        }}
      />

      {/* Interest */}
      <Section title="Interest">
        <p
          style={{ fontSize: 14, color: '#374151', lineHeight: 1.6, margin: 0 }}
        >
          {profile.interest}
        </p>
      </Section>
      <MessageModal
        isOpen={isMessageOpen}
        onClose={() => setIsMessageOpen(false)}
        recipientName={'you'}
        recipientAvatar={'me'}
        isVerified
      />
    </aside>
  );
}
