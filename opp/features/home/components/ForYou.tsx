import ThreeBodyLoader from '@/components/loading/page';
import Box from '@/components/ui/box';
import BootcampBox, {
  BootcampBoxProps,
} from '@/features/home/components/sub/boot-box';
import FellowshipBox from '@/features/home/components/sub/fellowship';
import GrantBox from '@/features/home/components/sub/grant-box';
import HackBox from '@/features/home/components/sub/hack-box';
import InternBox from '@/features/home/components/sub/intern-box';
import JobBox from '@/features/home/components/sub/job-box';
import { bootcamps } from '@/features/home/lib/bootcamps';
import {
  CategoryFilter,
  categoryFilters,
} from '@/features/home/lib/categoryFilters';
import { fellowships } from '@/features/home/lib/fellowships';
import { grants } from '@/features/home/lib/grants';
import { hackathons } from '@/features/home/lib/hackathons';
import { internships } from '@/features/home/lib/internships';
import { jobs } from '@/features/home/lib/jobs';
import { SortFilter, sortFilters } from '@/features/home/lib/sortFilters';

import { FellowshipBoxProps } from '@/features/home/props/FellowshipBoxProps';
import { GrantBoxProps } from '@/features/home/props/GrantBoxProps';
import { InternBoxProps } from '@/features/home/props/InternBoxProps';
import { JobBoxProps } from '@/features/home/props/JobBoxProps';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer select-none
        ${active ? 'bg-orange-50 border-orange-400 text-orange-500' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'}`}
    >
      {label}
    </button>
  );
}

function SortPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer select-none
        ${active ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900'}`}
    >
      {label}
    </button>
  );
}

// ─── Mobile drawer ────────────────────────────────────────────────────────────

function MobileDrawer({
  open,
  category,
  sort,
  onCategory,
  onSort,
  onClose,
  activeCount,
}: {
  open: boolean;
  category: CategoryFilter;
  sort: SortFilter;
  onCategory: (v: CategoryFilter) => void;
  onSort: (v: SortFilter) => void;
  onClose: () => void;
  activeCount: number;
}) {
  const handleReset = () => {
    onCategory('all');
    onSort('for-you');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl
          transition-transform duration-300 ease-out
          ${open ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-2 pb-4 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Filter</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5 space-y-6 overflow-y-auto max-h-[60vh]">
          {/* Featured / sort section */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Featured
            </p>
            <div className="flex flex-wrap gap-2">
              {sortFilters.map(f => (
                <SortPill
                  key={f.id}
                  label={f.label}
                  active={sort === f.id}
                  onClick={() => onSort(f.id)}
                />
              ))}
            </div>
          </div>

          {/* Category section */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map(f => (
                <CategoryPill
                  key={f.id}
                  label={f.label}
                  active={category === f.id}
                  onClick={() => onCategory(f.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-gray-100">
          <button
            onClick={handleReset}
            disabled={activeCount === 0}
            className="w-full py-3 rounded-2xl text-sm font-semibold border border-gray-200 text-gray-500 bg-gray-50
              disabled:opacity-40 disabled:cursor-not-allowed
              hover:bg-gray-100 transition-colors"
          >
            Reset ({activeCount})
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Filter bar ───────────────────────────────────────────────────────────────

function FilterBar({
  category,
  sort,
  onCategory,
  onSort,
}: {
  category: CategoryFilter;
  sort: SortFilter;
  onCategory: (v: CategoryFilter) => void;
  onSort: (v: SortFilter) => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeCount =
    (category !== 'all' ? 1 : 0) + (sort !== 'for-you' ? 1 : 0);

  return (
    <>
      {/* ── Desktop: two pill rows (hidden on mobile) ── */}
      <Box as="div" className="hidden sm:flex flex-col gap-2.5">
        <Box as="div" className="flex items-center gap-2 flex-wrap">
          {categoryFilters.map(f => (
            <CategoryPill
              key={f.id}
              label={f.label}
              active={category === f.id}
              onClick={() => onCategory(f.id)}
            />
          ))}
        </Box>
        <Box as="div" className="flex items-center gap-2 flex-wrap">
          {sortFilters.map(f => (
            <SortPill
              key={f.id}
              label={f.label}
              active={sort === f.id}
              onClick={() => onSort(f.id)}
            />
          ))}
        </Box>
      </Box>

      {/* ── Mobile: filter icon button (hidden on desktop) ── */}
      <Box as="div" className="flex sm:hidden items-center gap-2">
        <button
          onClick={() => setDrawerOpen(true)}
          className={`relative flex items-center justify-center w-11 h-11 rounded-xl border-2 transition-all duration-200
            ${activeCount > 0 ? 'border-orange-400 bg-orange-50 text-orange-500' : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'}`}
        >
          {/* Filter / sliders icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M3 5h14M6 10h8M9 15h2" />
          </svg>
          {/* Active badge */}
          {activeCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center leading-none">
              {activeCount}
            </span>
          )}
        </button>

        {/* Show active pills as summary chips next to button */}
        {category !== 'all' && (
          <CategoryPill
            label={categoryFilters.find(f => f.id === category)?.label ?? ''}
            active
            onClick={() => onCategory('all')}
          />
        )}
        {sort !== 'for-you' && (
          <SortPill
            label={sortFilters.find(f => f.id === sort)?.label ?? ''}
            active
            onClick={() => onSort('for-you')}
          />
        )}
      </Box>

      {/* ── Mobile drawer ── */}
      <MobileDrawer
        open={drawerOpen}
        category={category}
        sort={sort}
        onCategory={onCategory}
        onSort={onSort}
        onClose={() => setDrawerOpen(false)}
        activeCount={activeCount}
      />
    </>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  title,
  viewAllHref,
  children,
  showMore,
}: {
  title: string;
  viewAllHref?: string;
  children: React.ReactNode;
  showMore?: { href: string };
}) {
  return (
    <Box as="div" className="space-y-4">
      <Box as="div" className="flex items-center justify-between gap-2">
        <Box as="h2" className="text-xl font-semibold text-gray-900">
          {title}
        </Box>
        {viewAllHref && (
          <Box
            as="a"
            href={viewAllHref}
            className="text-sm font-medium flex gap-1 text-gray-400 hover:text-gray-700 transition-colors whitespace-nowrap"
          >
            View All
            <ArrowRight className='h-4 w-4'/>
          </Box>
        )}
      </Box>

      {children}

      {showMore && (
        <Box as="div" className="flex justify-center pt-1">
          <Box
            as="a"
            href={showMore.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 10a6 6 0 1 0 1.93-4.38" />
              <polyline points="1 4.5 4 7.5 7 4.5" />
            </svg>
            Show More
          </Box>
        </Box>
      )}
    </Box>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function applySort<T extends { status?: string }>(
  items: T[],
  sort: SortFilter,
): T[] {
  if (sort === 'closing-soon') {
    return [...items].sort(
      (a, b) =>
        (a.status === 'closing-soon' ? 0 : 1) -
        (b.status === 'closing-soon' ? 0 : 1),
    );
  }
  if (sort === 'new') return [...items].reverse();
  if (sort === 'featured') {
    return [...items].sort((a, b) => {
      const active = (s?: string) =>
        s === 'open' || s === 'ongoing' || s === 'enrolling' ? 0 : 1;
      return active(a.status) - active(b.status);
    });
  }
  return items;
}

// ─── Section loader ───────────────────────────────────────────────────────────
// Each section mounts and after `delay` ms flips from loading → ready.

function SectionLoader({
  title,
  viewAllHref,
  showMore,
  delay,
  visible,
  children,
}: {
  title: string;
  viewAllHref?: string;
  showMore?: { href: string };
  delay: number;
  visible: boolean;
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!visible) {
      setReady(false);
      return;
    }
    setReady(false);
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [visible, delay]);

  if (!visible) return null;

  return (
    <Section
      title={title}
      viewAllHref={viewAllHref}
      showMore={ready ? showMore : undefined}
    >
      {ready ? (
        <Box as="div" className="animate-in fade-in duration-300">
          {children}
        </Box>
      ) : (
        <Box as="div" className="flex items-center justify-center py-10">
          <ThreeBodyLoader />
          {/* <HoneycombLoader /> */}
        </Box>
      )}
    </Section>
  );
}


export default function ForYou() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [sort, setSort] = useState<SortFilter>('for-you');

  const show = (c: CategoryFilter) => category === 'all' || category === c;

  const h = applySort(hackathons, sort);
  const i = applySort(
    internships as (InternBoxProps & { status?: string })[],
    sort,
  ) as InternBoxProps[];
  const j = applySort(
    jobs as (JobBoxProps & { status?: string })[],
    sort,
  ) as JobBoxProps[];
  const g = applySort(
    grants as (GrantBoxProps & { status?: string })[],
    sort,
  ) as GrantBoxProps[];
  const f = applySort(
    fellowships as (FellowshipBoxProps & { status?: string })[],
    sort,
  ) as FellowshipBoxProps[];
  const b = applySort(
    bootcamps as (BootcampBoxProps & { status?: string })[],
    sort,
  ) as BootcampBoxProps[];

  return (
    <Box as="div" className="space-y-8">
      {/* ── Filter bar — always visible immediately ── */}
      <FilterBar
        category={category}
        sort={sort}
        onCategory={setCategory}
        onSort={setSort}
      />

      {/* ── Sections — each loads independently with a staggered delay ── */}
      <Box as="div" className="space-y-10">
        <SectionLoader
          title="Hackathons for you"
          viewAllHref="/hackathons"
          showMore={{ href: '/hackathons?page=2' }}
          delay={300}
          visible={show('hackathons')}
        >
          <Box as="div" className="grid md:grid-cols-2 gap-4">
            {h.map(hack => (
              <HackBox key={hack.id} {...hack} />
            ))}
          </Box>
        </SectionLoader>

        <SectionLoader
          title="Internships for you"
          viewAllHref="/internships"
          showMore={{ href: '/internships?page=2' }}
          delay={600}
          visible={show('internships')}
        >
          <Box as="div" className="grid md:grid-cols-2 gap-4">
            {i.map(intern => (
              <InternBox key={intern.role + intern.company} {...intern} />
            ))}
          </Box>
        </SectionLoader>

        <SectionLoader
          title="Jobs for you"
          viewAllHref="/jobs"
          showMore={{ href: '/jobs?page=2' }}
          delay={900}
          visible={show('jobs')}
        >
          <Box as="div" className="grid md:grid-cols-2 gap-4">
            {j.map(job => (
              <JobBox key={job.title + job.company} {...job} />
            ))}
          </Box>
        </SectionLoader>

        <SectionLoader
          title="Grants & Funding"
          viewAllHref="/grants"
          showMore={{ href: '/grants?page=2' }}
          delay={1200}
          visible={show('grants')}
        >
          <Box as="div" className="grid md:grid-cols-2 gap-4">
            {g.map(grant => (
              <GrantBox key={grant.title} {...grant} />
            ))}
          </Box>
        </SectionLoader>

        <SectionLoader
          title="Fellowships for you"
          viewAllHref="/fellowships"
          showMore={{ href: '/fellowships?page=2' }}
          delay={1500}
          visible={show('fellowships')}
        >
          <Box as="div" className="grid md:grid-cols-2 gap-4">
            {f.map(fellowship => (
              <FellowshipBox key={fellowship.title} {...fellowship} />
            ))}
          </Box>
        </SectionLoader>

        <SectionLoader
          title="Bootcamps"
          viewAllHref="/bootcamps"
          showMore={{ href: '/bootcamps?page=2' }}
          delay={1800}
          visible={show('bootcamps')}
        >
          <Box as="div" className="flex flex-col gap-3">
            {b[0] && <BootcampBox featured {...b[0]} />}
            {b.slice(1).map(bootcamp => (
              <BootcampBox
                key={bootcamp.title + bootcamp.provider}
                {...bootcamp}
              />
            ))}
          </Box>
        </SectionLoader>
      </Box>
    </Box>
  );
}
