
'use client';

import { useState, useRef, useEffect } from 'react';
import Box from '@/components/ui/box';
import { HackerProfile } from '@/features/hacker/types/hacker.types';
import { ACTIVITY_TABS } from '@/features/hacker/components/sub/tabs/types/tabs.config';

interface Props {
  profile: HackerProfile;
}

export default function ActivityTabs({ profile }: Props) {
  const [activeTab, setActiveTab] = useState('overview');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🔥 Animate underline
  useEffect(() => {
    const index = ACTIVITY_TABS.findIndex(t => t.id === activeTab);
    const el = tabRefs.current[index];

    if (el && underlineRef.current) {
      underlineRef.current.style.width = `${el.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [activeTab]);

  // 🔥 Scroll state
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === 'left' ? -160 : 160,
      behavior: 'smooth',
    });
  };

  const activeConfig = ACTIVITY_TABS.find(t => t.id === activeTab);
  const ActiveComponent = activeConfig?.component;

  return (
    <main className="flex-1 ">
      {/* Tabs */}
      <Box className="relative flex items-end border-b border-gray-200 mb-6">

        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          style={{
            opacity: canScrollLeft ? 1 : 0,
            pointerEvents: canScrollLeft ? 'auto' : 'none',
          }}
          className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full mr-2"
        >
          ‹
        </button>

        {/* Scrollable tabs */}
        <Box
          ref={scrollRef}
          className="relative flex gap-6 overflow-x-auto flex-1"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`.activity-tabs::-webkit-scrollbar { display: none; }`}</style>

          {ACTIVITY_TABS.map((tab, i) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                ref={el => { tabRefs.current[i] = el; }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative pb-3 cursor-pointer px-1 text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${isActive ? 'text-orange-500' : 'text-gray-500 hover:text-gray-900'}
                `}
              >
                {tab.label}

                {/* glow */}
                {isActive && (
                  <span className="absolute inset-x-0 bottom-1 h-1.5 bg-orange-100 rounded-full blur-sm opacity-60" />
                )}
              </button>
            );
          })}

          {/* Animated underline */}
          <Box className="absolute bottom-0 left-0 right-0">
            <Box
              ref={underlineRef}
              className="h-0.5 bg-orange-500 transition-all duration-300 ease-in-out rounded-full"
              style={{ width: 0, transform: 'translateX(0)' }}
            />
          </Box>
        </Box>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          style={{
            opacity: canScrollRight ? 1 : 0,
            pointerEvents: canScrollRight ? 'auto' : 'none',
          }}
          className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full ml-2"
        >
          ›
        </button>
      </Box>

      {/* Content */}
      <Box>
        {ActiveComponent && <ActiveComponent profile={profile} />}
      </Box>
    </main>
  );
}