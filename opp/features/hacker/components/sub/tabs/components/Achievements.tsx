'use client';

import Image from 'next/image';
import { ActivityTabProps } from '../types/types';
import Box from '@/components/ui/box';

interface Achievement {
  id: string;
  imageUrl: string;
  label?: string;
  multiplier?: number;
}

// Data lives inside the component
const defaultAchievements: Achievement[] = [
  { id: 'shark', imageUrl: 'https://picsum.photos/id/237/300/300', label: 'Shark Badge', multiplier: 2 },
  { id: 'yolo', imageUrl: 'https://picsum.photos/id/1015/300/300', label: 'YOLO' },
];

export default function AchievementsTab({}: ActivityTabProps) {
  const achievements = defaultAchievements;

  return (
    <Box as="div" className="relative">
   
            <Box as="h2" className="font-syne text-lg font-bold mb-4">Achievements</Box>


      <Box as="div"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          position: 'relative', 
        }}
      >
        {achievements.map((achievement) => (
          <Box as="div" key={achievement.id} className="relative">
            {/* Badge Container */}
            <Box as="div"
              style={{
                width: 67,
                height: 67,
                borderRadius: '20%',
                overflow: 'hidden',
                border: '3.5px solid #ffffff',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5)',
                backgroundColor: '#1f2937',
              }}
            >
              <Image
                src={achievement.imageUrl}
                alt={achievement.label || 'Achievement'}
                width={57}
                height={57}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                unoptimized
              />
            </Box>

            {/* Multiplier Badge */}
            {achievement.multiplier && (
              <Box as="div"
                style={{
                  position: 'absolute',
                  bottom: -8,
                  right: -8,
                  backgroundColor: '#FB923C',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 700,
                  padding: '3px 11px',
                  borderRadius: '9999px',
                  minWidth: 32,
                  textAlign: 'center',
                }}
              >
                x{achievement.multiplier}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}