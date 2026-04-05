// // features/hacker/tabs/tabs.config.ts

import Achievements from '@/features/hacker/components/sub/tabs/components/Achievements';
import ActivityTab from '@/features/hacker/components/sub/tabs/components/ActivityTab';
import BookmarksTab from '@/features/hacker/components/sub/tabs/components/BookmarksTab';
import BuildsTab from '@/features/hacker/components/sub/tabs/components/BuildsTab';
import CommunityTab from '@/features/hacker/components/sub/tabs/components/CommunityTab';
import HackathonsTab from '@/features/hacker/components/sub/tabs/components/HackathonsTab';
import Overview from '@/features/hacker/components/sub/tabs/components/OverviewTab';
import { ActivityTabConfig } from '@/features/hacker/components/sub/tabs/types/types';

export const ACTIVITY_TABS: ActivityTabConfig[] = [
  { id: 'overview', label: 'Overview', component: Overview },
  { id: 'bookmarks', label: 'Bookmarks', component: BookmarksTab },
  { id: 'builds', label: 'Builds', component: BuildsTab },
  { id: 'hackathons', label: 'Hackathons', component: HackathonsTab },
  { id: 'community', label: 'Communities', component: CommunityTab },
  { id: 'achievements', label: 'Achievements', component: Achievements },
  { id: 'activity', label: 'Activity', component: ActivityTab },
];
