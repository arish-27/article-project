import { MacroIndicator, DataStatusType } from '../types';

export const macroMetrics2026: MacroIndicator[] = [
  {
    id: 'it-workforce',
    label: 'TOTAL IT WORKFORCE',
    current2026: '5.43 Million People',
    scenario2030: '5.85M – 6.20M (Projected)',
    trend: 'UP',
    status: 'REPORTED',
    source: 'NASSCOM Strategic Review & Ministry of Electronics & IT (MeitY)',
    period: '2024–2026',
    insight: 'Total IT jobs are still growing slowly, but companies are getting more work done per person using AI tools.'
  },
  {
    id: 'ai-adoption',
    label: 'COMPANIES USING AI TOOLS',
    current2026: '68% of IT Companies',
    scenario2030: '94% (Everyday Use)',
    trend: 'UP',
    status: 'INDUSTRY ESTIMATE',
    source: 'Gartner & NASSCOM Enterprise AI Survey',
    period: 'FY2025–2026',
    insight: 'Over two-thirds of IT companies now use AI tools to help write code, fix bugs, and speed up project delivery.'
  },
  {
    id: 'fresher-hiring',
    label: 'CAMPUS & FRESHER HIRING',
    current2026: '~160,000 – 190,000 / yr',
    scenario2030: '~120,000 – 140,000 / yr (Selective)',
    trend: 'DOWN',
    status: 'ESTIMATED',
    source: 'TeamLease & Industry Placement Disclosures',
    period: 'Academic Cycles 2024–2026',
    insight: 'Hiring straight out of college is more selective now compared to the record hiring boom of 2021–2022.'
  },
  {
    id: 'bench-pressure',
    label: 'PEOPLE WAITING FOR PROJECTS (BENCH)',
    current2026: '14.5% – 16.8% of Workforce',
    scenario2030: '8% – 11% (Leaner Model)',
    trend: 'TRANSFORMING',
    status: 'INDUSTRY ESTIMATE',
    source: 'Aggregated Tier-1/2 Utilization Filings',
    period: 'FY2025–2026',
    insight: 'Instead of just sitting idle while waiting for a project, employees on the bench are actively trained in new AI skills.'
  },
  {
    id: 'ai-exposed-work',
    label: 'TASKS AI CAN HELP WITH',
    current2026: '38% of Daily Tasks',
    scenario2030: '62% of Daily Tasks',
    trend: 'UP',
    status: 'SCENARIO',
    source: 'ILO & WEF Future of Jobs Framework',
    period: '2026 Baseline → 2030 Scenario',
    insight: 'Represents routine parts of work (like writing standard code templates or testing) where AI can save time.'
  },
  {
    id: 'new-ai-roles',
    label: 'NEW AI SPECIALIST JOBS',
    current2026: '~320,000 Jobs',
    scenario2030: '~950,000+ Jobs',
    trend: 'UP',
    status: 'FORECAST',
    source: 'NASSCOM Talent Intelligence & LinkedIn Workforce Reports',
    period: '2026 Current → 2030 Forecast',
    insight: 'Growing demand for AI engineers, data specialists, and security experts who connect AI into everyday systems.'
  }
];

export interface LandscapeKPICard {
  title: string;
  metric: string;
  subtext: string;
  badgeLabel: string;
  status: DataStatusType;
  source: string;
}

export const landscape2026KPIs: LandscapeKPICard[] = [
  {
    title: 'INDIAN IT WORKFORCE',
    metric: '5.43M',
    subtext: '5.43 million people working across big tech companies, global centres, and startups',
    badgeLabel: 'REPORTED',
    status: 'REPORTED',
    source: 'NASSCOM Strategic Review 2025'
  },
  {
    title: 'COMPANIES USING AI',
    metric: '68%',
    subtext: '68% of IT companies use AI helpers to write code and test software in daily projects',
    badgeLabel: 'INDUSTRY ESTIMATE',
    status: 'INDUSTRY ESTIMATE',
    source: 'Gartner Global Tech Survey'
  },
  {
    title: 'CAMPUS HIRING SLOWDOWN',
    metric: '-35%',
    subtext: 'Fewer mass campus offers compared to the all-time peak hiring years of 2021–2022',
    badgeLabel: 'ESTIMATED',
    status: 'ESTIMATED',
    source: 'TeamLease Employment Outlook'
  },
  {
    title: 'PEOPLE LEARNING AI SKILLS',
    metric: '850K+',
    subtext: 'Over 850,000 IT employees actively enrolled in official company AI training programs',
    badgeLabel: 'REPORTED',
    status: 'REPORTED',
    source: 'Combined Corporate Reports (TCS, Infy, Wipro, HCL)'
  }
];

export interface MasterComparisonRow {
  dimension: string;
  state2026: string;
  scenario2030: string;
  verdict: string;
  dataStatus: DataStatusType;
}

export const master2026vs2030Comparison: MasterComparisonRow[] = [
  {
    dimension: 'How Widely AI Is Used',
    state2026: 'AI helpers are used for basic code writing, explaining syntax, and drafting tests (used in ~68% of companies).',
    scenario2030: 'AI handles connected workflows, self-checking code, and automated testing across full projects (expected 94%+).',
    verdict: 'AI shifts from a simple helper tool to an everyday team partner.',
    dataStatus: 'SCENARIO'
  },
  {
    dimension: 'Total IT Jobs in India',
    state2026: '5.43 million professionals; growing at a steady modest pace (~2.5% per year).',
    scenario2030: '5.85M – 6.20M expected; companies earn more revenue without needing to hire as many people in bulk.',
    verdict: 'Companies grow revenue faster than they add new headcount.',
    dataStatus: 'FORECAST'
  },
  {
    dimension: 'The Bench (Waiting for Projects)',
    state2026: 'About 14%–16% of employees wait between projects to provide backup staffing.',
    scenario2030: 'Leaner project staffing (8%–10% on bench); fast automated matching connects workers to new projects quickly.',
    verdict: 'The bench becomes an active learning hub instead of a waiting room.',
    dataStatus: 'SCENARIO'
  },
  {
    dimension: 'Campus & Fresher Hiring',
    state2026: 'More selective hiring (~170K/year); companies test whether candidates know how to use modern tools.',
    scenario2030: 'Project-focused hiring (~130K/year); companies look for real projects, problem solving, and AI skills.',
    verdict: 'A degree alone is no longer enough; hands-on project proof is essential.',
    dataStatus: 'FORECAST'
  },
  {
    dimension: 'Beginner & Daily Tasks',
    state2026: 'Writing repetitive code, manual bug checking, monitoring system logs, and basic database setup.',
    scenario2030: 'Guiding AI tools, checking AI-generated code for accuracy, connecting systems, and testing real user flows.',
    verdict: 'Junior engineers spend more time reviewing and guiding AI than typing boilerplate code.',
    dataStatus: 'SCENARIO'
  },
  {
    dimension: 'Traditional vs Modern AI Roles',
    state2026: '80% traditional software roles / 20% specialized AI, cloud, and data roles.',
    scenario2030: '45% updated core software roles / 55% AI platform, data engineering, and automation specialists.',
    verdict: 'Existing employees upgrade their skills rather than being replaced all at once.',
    dataStatus: 'SCENARIO'
  },
  {
    dimension: 'IT Hubs (Chennai, Bengaluru, Hyd)',
    state2026: 'High physical clustering in tech corridors (OMR, ORR, HITEC City); hybrid work at ~3 days in-office.',
    scenario2030: 'Companies keep key innovation hubs while allowing flexible work; nearby housing and local businesses adjust.',
    verdict: 'Cities and local businesses benefit by supporting diverse industries beyond IT alone.',
    dataStatus: 'SCENARIO'
  }
];
