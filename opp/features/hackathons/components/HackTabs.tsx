
'use client';

import { useState, useRef, useEffect } from 'react';
import Box from '@/components/ui/box';
import { HACK_TABS } from '@/features/hackathons/hack.config';
import type { HackathonDetailProps } from '@/features/hackathons/props/HackathonDetailProps';

interface Props {
  hackersCount?: HackathonDetailProps['hackersCount'];
}

export default function HackTabs({ hackersCount }: Props) {
  const [activeTab, setActiveTab] = useState('details');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const underlineRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update underline position
  useEffect(() => {
    const index = HACK_TABS.findIndex(t => t.id === activeTab);
    const el = tabRefs.current[index];
    if (el && underlineRef.current) {
      underlineRef.current.style.width = `${el.offsetWidth}px`;
      underlineRef.current.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [activeTab]);

  // Check scroll arrows visibility
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
    el.scrollBy({ left: dir === 'left' ? -160 : 160, behavior: 'smooth' });
  };

  const activeConfig = HACK_TABS.find(t => t.id === activeTab);
  const ActiveComponent = activeConfig?.component;

  // Active tab index for the counter
  const activeIndex = HACK_TABS.findIndex(t => t.id === activeTab) + 1;

  return (
   
      <Box
        as="div"
        className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100"
      >
        <Box as="div" className="mx-auto px-0 lg:pl-3 lg:pr-6 max-w-screen-2xl">
          {/* Tab bar row */}
          <Box as="div" className="relative flex items-end pt-4 justify-start">

            {/* Left arrow */}
            <button
              aria-label="Scroll tabs left"
              onClick={() => scroll('left')}
              style={{
                opacity: canScrollLeft ? 1 : 0,
                pointerEvents: canScrollLeft ? 'auto' : 'none',
                transition: 'opacity 0.18s ease',
                flexShrink: 0,
              }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white shadow-md ml-2 mr-1 text-sm font-bold leading-none select-none"
            >
              ‹
            </button>

            {/* Tab count — only visible when arrows are active */}
            {(canScrollLeft || canScrollRight) && (
              <span
                className="text-md text-gray-400 font-medium tabular-nums select-none shrink-0 mb-2 pr-4"
                style={{ minWidth: 24, textAlign: 'center' }}
              >
                {activeIndex}
              </span>
            )}

            {/* Scrollable tab strip — hide native scrollbar */}
            <Box
              as="div"
              ref={scrollRef}
              className="relative flex gap-6 overflow-x-auto flex-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              } as React.CSSProperties}
            >
              {/* hide webkit scrollbar via inline style injection */}
              <style>{`.hack-tab-strip::-webkit-scrollbar { display: none; }`}</style>

              {HACK_TABS.map((tab, i) => {
                const isActive = tab.id === activeTab;

                let badge: React.ReactNode = null;

                if (tab.badge === 'New') {
                  badge = (
                    <Box
                      as="span"
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-600"
                    >
                      New
                    </Box>
                  );
                }

                if (tab.badge === 'count' && hackersCount) {
                  badge = (
                    <Box
                      as="span"
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                    >
                      {hackersCount}
                    </Box>
                  );
                }

                return (
                  <button
                    key={tab.id}
                    ref={el => { tabRefs.current[i] = el; }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center gap-2 pb-3 px-1 text-sm font-medium
                      whitespace-nowrap transition-all duration-200
                      ${isActive ? 'text-orange-600' : 'text-gray-500 hover:text-gray-900'}
                    `}
                  >
                    {tab.label}
                    {badge}

                    {/* subtle glow */}
                    {isActive && (
                      <Box
                        as="span"
                        className="absolute inset-x-0 bottom-1 h-1.5 bg-orange-100 rounded-full blur-sm opacity-60"
                      />
                    )}
                  </button>
                );
              })}

              {/* Animated underline */}
              <Box as="div" className="absolute bottom-0 left-0 right-0 h-0.5]">
                <Box
                  as="div"
                  ref={underlineRef}
                  className="h-0.5 bg-orange-500 transition-all duration-300 ease-in-out rounded-full"
                  style={{ width: 0, transform: 'translateX(0)' }}
                />
              </Box>
            </Box>

            {/* Right arrow */}
            <button
              aria-label="Scroll tabs right"
              onClick={() => scroll('right')}
              style={{
                opacity: canScrollRight ? 1 : 0,
                pointerEvents: canScrollRight ? 'auto' : 'none',
                transition: 'opacity 0.18s ease',
                flexShrink: 0,
              }}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 text-white shadow-md ml-1 mr-2 text-sm font-bold leading-none select-none"
            >
              ›
            </button>
          </Box>
        </Box>

        {/* Content */}
        <Box as="div" className="mx-auto px-6 lg:pl-20 lg:pr-6">
          <Box as="div" className="pt-5 pb-6 border-t">
            {ActiveComponent && <ActiveComponent hackersCount={hackersCount} />}
          </Box>
        </Box>
      </Box>
  );
}