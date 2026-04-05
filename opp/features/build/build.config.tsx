import { Build } from './types';
export type TeamMember = {
  id: string | number;
  name: string;
  role: string;    // e.g. "Engineer" | "Designer" | "PM" | "QA"
  title: string;   // e.g. "Senior Frontend Engineer"
  avatar?: string; // URL – falls back to initials if omitted or broken
  url?: string;
  isLead?: boolean;
};

type Builds = {
  team: TeamMember[];
};
export const MOCK_BUILDS: Build[] = [
  {
    id: '1111',
    name: 'Aria Protocol',
    tagline:
      "ARIA solves institutional DeFi's compliance problem — combining ZK-KYC identity, AI risk scoring, and compliant yield vaults into one protocol on HashKey Chain.",
    description:
      'ARIA is a compliance middleware that enables institutional participation in DeFi on HashKey Chain by combining zero-knowledge identity verification, AI-driven risk assessment, compliant yield strategies, and HSP-based settlement into one unified infrastructure layer.',
    logoColor: '#22c55e',
    logoIcon: 'hexagon',
    logoUrl:'https://i.pinimg.com/736x/8d/4c/c2/8d4cc2a6a6efd4ae598887fe1d068f45.jpg',
    category: ['Crypto / Web3'],
    status: 'in_progress',
    upvotes: 1,
    followers: 1,
    updatedAt: '2026-04-01T23:00:00Z',
    createdAt: '2026-04-01T00:00:00Z',
    links: [
      {
        type: 'demo',
        url: 'https://drive.google.com/file/d/1jsoF93BGdKi35khtZa_sXP_PWFnMrHqZ/',
        label: 'drive.google.com/file/d/1jsoF93BGdKi35khtZa_sXP_PWFnMrHqZ/...',
      },
      {
        type: 'github',
        url: 'https://github.com/HuydZzz/aria-protocol',
        label: 'github.com/HuydZzz/aria-protocol',
      },
      {
        type: 'website',
        url: 'https://huydzzz.github.io/aria-protocol/#',
        label: 'huydzzz.github.io/aria-protocol/#',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Huy30600',
        label: '@Huy30600',
      },
    ],
    team: [
      {
        id: 'huy',
        name: 'Huy',
        avatar: '',
        role: 'Founder',
        url: '#',
      },
    ],
    problem: [
      'Regulatory Compliance Uncertainty — No automated compliance layer exists for on-chain DeFi strategies across HK SFC, EU MiCA, and SG MAS frameworks.',
      'Identity-Privacy Paradox — Institutions need KYC verification, but DeFi demands privacy. Current solutions force a binary choice.',
      'Risk Blindness — No real-time AI-driven risk assessment for DeFi protocols means institutions cannot meet fiduciary obligations.',
    ],
    solution: [
      {
        title: 'ZK-KYC Passport',
        description:
          'Groth16 zero-knowledge proofs verify identity and compliance status without exposing any personal data. Users complete KYC once and receive a portable on-chain credential that works across all DeFi protocols on HashKey Chain. No PII ever touches the blockchain.',
      },
      {
        title: 'Neural Risk Engine',
        description:
          'ML-powered real-time risk scoring across 7 weighted factors:',
        bullets: [
          'Smart contract security (25%)',
          'Liquidity depth (20%)',
          'Protocol track record (20%)',
          'Regulatory standing (15%)',
          'Market volatility (10%)',
          'Team credibility (5%)',
          'On-chain activity (5%)',
        ],
      },
      {
        title: 'Compliant Yield Vaults',
        description:
          'Institutional-grade yield strategies that automatically route capital through only compliance-verified protocols. Vaults enforce jurisdiction-specific rules and rebalance in response to risk score changes.',
      },
      {
        title: 'HSP Settlement Layer',
        description:
          'HashKey-native settlement infrastructure that ensures all transactions flow through licensed intermediaries, satisfying reporting requirements across HK SFC, EU MiCA, and SG MAS frameworks simultaneously.',
      },
    ],
    milestones: [
      {
        id: 'm1',
        title: 'ZK-KYC Passport MVP',
        description:
          'Deploy Groth16 proof system and credential issuance on HashKey testnet.',
        completed: true,
      },
      {
        id: 'm2',
        title: 'Neural Risk Engine v1',
        description:
          'Launch ML scoring pipeline with 7-factor weighting model.',
        completed: true,
      },
      {
        id: 'm3',
        title: 'Compliant Yield Vault Alpha',
        description: 'First vault strategy integrated with compliance gating.',
        completed: false,
        dueDate: '2026-05-01',
      },
      {
        id: 'm4',
        title: 'HSP Settlement Integration',
        description: 'Full HashKey HSP settlement layer live on mainnet.',
        completed: false,
        dueDate: '2026-06-15',
      },
    ],
  },

  // ── NEW BUILD 1 ─────────────────────────────────────────

  {
    id: '2222',
    name: 'SkyCast AI',
    tagline:
      'Hyper-accurate weather forecasting powered by AI for emerging regions.',
    description:
      'SkyCast AI is a machine learning-powered weather forecasting platform designed to deliver highly accurate, localized predictions in underserved regions. It combines satellite data, historical weather patterns, and real-time atmospheric signals to provide actionable insights for individuals, farmers, and businesses.',
    logoColor: '#3b82f6',
    logoIcon: 'cloud',
        logoUrl:'https://i.pinimg.com/avif/1200x/cd/d1/6f/cdd16f961e7004249d7794374477f8f4.avf',

    category: ['AI / Climate'],
    status: 'completed',

    upvotes: 42,
    followers: 18,
    updatedAt: '2026-04-02T10:00:00Z',
    createdAt: '2025-12-20T09:00:00Z',
  links: [
      {
        type: 'demo',
        url: 'https://drive.google.com/file/d/1jsoF93BGdKi35khtZa_sXP_PWFnMrHqZ/',
        label: 'drive.google.com/file/d/1jsoF93BGdKi35khtZa_sXP_PWFnMrHqZ/...',
      },
      {
        type: 'github',
        url: 'https://github.com/HuydZzz/aria-protocol',
        label: 'github.com/HuydZzz/aria-protocol',
      },
      {
        type: 'website',
        url: 'https://huydzzz.github.io/aria-protocol/#',
        label: 'huydzzz.github.io/aria-protocol/#',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Huy30600',
        label: '@Huy30600',
      },
    ],
    team: [
      {
        id: 'darlington',
        name: 'Darlington',
        avatar: '',
        role: 'Founder',
        url: '#',
      },
    ],
    problem: [
      'Inaccurate weather predictions in developing regions.',
      'Lack of localized forecasting tools for farmers and small businesses.',
      'Limited access to real-time climate insights.',
    ],
    solution: [
      {
        title: 'AI Forecast Engine',
        description:
          'Uses machine learning models trained on global and regional datasets to improve prediction accuracy.',
      },
      {
        title: 'Hyperlocal Predictions',
        description:
          'Delivers precise weather forecasts tailored to specific locations using geospatial data.',
      },
      {
        title: 'Real-Time Alerts',
        description:
          'Provides instant notifications for extreme weather conditions.',
      },
    ],
    milestones: [
      {
        id: 'm1',
        title: 'Prototype Launch',
        description: 'Initial ML model deployed with basic forecasts.',
        completed: true,
      },
      {
        id: 'm2',
        title: 'Mobile Optimization',
        description: 'Fully responsive UI for mobile users.',
        completed: true,
      },
      {
        id: 'm3',
        title: 'AI Model v2',
        description: 'Improved accuracy using deeper datasets.',
        completed: false,
        dueDate: '2026-05-20',
      },
    ],
  },

  // ── NEW BUILD 2 ─────────────────────────────────────────

  {
    id: '3333',
    name: 'Opphex',
    tagline:
      'Discover hackathons, internships, and opportunities — all in one place.',
    description:
      'Opphex is an opportunity aggregation platform that helps students and builders discover hackathons, internships, grants, and fellowships in one unified interface. It focuses on simplicity, personalization, and actionable discovery.',
    logoColor: '#f97316',
    logoIcon: 'hexagon',
        logoUrl:'https://i.pinimg.com/avif/1200x/27/df/a3/27dfa32e3d85962cf7456c4c232a85a9.avf',

    category: ['Productivity / Education'],
        status: 'launched',

    upvotes: 128,
    followers: 64,
    updatedAt: '2026-04-03T08:00:00Z',
    createdAt: '2026-01-10T12:00:00Z',
   links: [
      {
        type: 'demo',
        url: 'https://drive.google.com/file/d/1jsoF93BGdKi35khtZa_sXP_PWFnMrHqZ/',
        label: 'drive.google.com/file/d/1jsoF93BGdKi35khtZa_sXP_PWFnMrHqZ/...',
      },
      {
        type: 'github',
        url: 'https://github.com/HuydZzz/aria-protocol',
        label: 'github.com/HuydZzz/aria-protocol',
      },
      {
        type: 'website',
        url: 'https://huydzzz.github.io/aria-protocol/#',
        label: 'huydzzz.github.io/aria-protocol/#',
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/Huy30600',
        label: '@Huy30600',
      },
    ],
    team: [
      {
        id: '134',
        name: 'Darlington',
        avatar: 'https://i.pinimg.com/736x/3d/fe/db/3dfedbbb3605f84cacec10f2aa5036db.jpg',
        role: 'Lead',
        url: '#',
      },
      {
        id: '234',
        name: 'Divine',
        avatar: 'https://i.pinimg.com/1200x/62/87/6b/62876baf178e4a2681faffae74976b90.jpg',
        role: 'Developer',
        url: '#',
      },
    ],
    problem: [
      'Opportunities are scattered across multiple platforms.',
      'Students miss deadlines due to lack of centralized tracking.',
      'No personalized discovery for relevant opportunities.',
    ],
    solution: [
      {
        title: 'Opportunity Aggregation',
        description:
          'Collects hackathons, internships, and grants into a single platform.',
      },
      {
        title: 'Smart Filters',
        description:
          'Allows users to filter opportunities by interest, skill, and deadlines.',
      },
      {
        title: 'Activity Tracking',
        description:
          'Tracks user engagement, bookmarks, and submissions across opportunities.',
      },
    ],
    milestones: [
      {
        id: 'm1',
        title: 'Hackathon Module',
        description: 'Launch hackathon listing and detail pages.',
        completed: true,
      },
      {
        id: 'm2',
        title: 'User Profiles',
        description: 'Add profiles with activity tracking.',
        completed: true,
      },
      {
        id: 'm3',
        title: 'AI Recommendations',
        description: 'Personalized opportunity suggestions.',
        completed: false,
        dueDate: '2026-06-01',
      },
    ],
  },
];

export const exampleBuild: Builds = {
  team: [
    {
      id: 1,
      name: 'Amara Osei',
      role: 'Product Lead',
      title: 'Head of Product',
      avatar: 'https://i.pinimg.com/736x/2f/31/45/2f3145c915157beb7d7da31d7017f83d.jpg',
      url: '/profile/amara',
      isLead: true,
    },
    {
      id: 2,
      name: 'Leo Martinez',
      role: 'Engineer',
      title: 'Senior Frontend Engineer',
      avatar: 'https://i.pinimg.com/736x/11/6b/e1/116be1cff9b6649458b9d85731bd8582.jpg',
      url: '/profile/leo',
    },
    {
      id: 3,
      name: 'Priya Nair',
      role: 'Designer',
      title: 'UX Designer',
      avatar: 'https://i.pinimg.com/1200x/4e/c3/cc/4ec3ccb1e11a27b8b3f2564e696fd4f3.jpg',
      url: '/profile/priya',
    },
    {
      id: 4,
      name: 'Sam Iwata',
      role: 'Engineer',
      title: 'Backend Engineer',
      avatar: 'https://i.pinimg.com/1200x/bd/b6/06/bdb60630d0b5cde205142d3533f23aaf.jpg',
      url: '/profile/sam',
    },
    {
      id: 5,
      name: 'Chisom Eze',
      role: 'PM',
      title: 'Associate Product Manager',
      avatar: 'https://i.pinimg.com/736x/ba/3f/4f/ba3f4fb1a0fe50fc3ae5e79105e9dce1.jpg',
      url: '/profile/chisom',
    },
    {
      id: 6,
      name: 'Yuki Tanaka',
      role: 'QA',
      title: 'QA Engineer',
      avatar: 'https://i.pinimg.com/1200x/a2/d4/8b/a2d48b973ee62594e15387a1d4e72157.jpg',
      url: '/profile/yuki',
    },
  ],
};

export function getBuildById(id: string): Build | undefined {
  return MOCK_BUILDS.find(b => b.id === id);
}

