
'use client';

import Image from 'next/image';

interface Achievement {
  id: string;
  imageUrl: string;
  label?: string;
  multiplier?: number;
}

interface AchievementsProps {
  achievements?: Achievement[];
    className?: string;

}

const defaultAchievements: Achievement[] = [
  {
    id: 'shark',
    imageUrl: 'https://picsum.photos/id/237/300/300',
    label: 'Shark Badge',
    multiplier: 2,
  },
  {
    id: 'yolo',
    imageUrl: 'https://picsum.photos/id/1015/300/300',
    label: 'YOLO',
  },
];

export default function Achievements({
  achievements = defaultAchievements,
  className,
}: AchievementsProps) {
  return (
    <    div className={className}>
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '17px',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '16px',
        }}
      >
        Achievements
      </h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'absolute' }}>
        {achievements.map((achievement) => (
          <div key={achievement.id} style={{  }}>
            {/* Badge Container */}
            <div
              style={{
                width: 57,
                height: 57,
                borderRadius: '50%',
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
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
                unoptimized 
              />
            </div>

            {/* Multiplier Badge (x2) */}
            {achievement.multiplier && (
              <div
                style={{
                  position: 'absolute',
                  bottom: -8,
                  right: -8,
                  backgroundColor: '#FB923C',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '3px 11px',
                  borderRadius: '9999px',
                //   boxShadow: '0 3px 10px rgba(0, 0, 0, 0.4)',
                  minWidth: '32px',
                  textAlign: 'center',
                }}
              >
                x{achievement.multiplier}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}