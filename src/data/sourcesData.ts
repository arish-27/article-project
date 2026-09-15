export interface SourceCitation {
  id: string;
  category: 'RESEARCH_BACKED' | 'ILLUSTRATIVE_ASSUMPTION' | 'SCENARIO_OUTPUT' | 'FICTIONAL_PERSONA';
  categoryLabel: string;
  categoryBadgeClass: string;
  title: string;
  organization: string;
  year: string;
  summary: string;
  referenceUrlText: string;
}

export const sourcesData: SourceCitation[] = [
  {
    id: 'wef-jobs',
    category: 'RESEARCH_BACKED',
    categoryLabel: 'RESEARCH-BACKED REPORT',
    categoryBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    title: 'Future of Jobs Report (2023–2025 Edition)',
    organization: 'World Economic Forum (WEF)',
    year: '2023 - 2025',
    summary: 'Synthesizes empirical surveys across 800+ global enterprises on task automation velocity, occupational half-life compression, and rising demand for analytical thinking, systems design, and AI literacy.',
    referenceUrlText: 'World Economic Forum Global Labour Assessment'
  },
  {
    id: 'nasscom-review',
    category: 'RESEARCH_BACKED',
    categoryLabel: 'RESEARCH-BACKED REPORT',
    categoryBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    title: 'Strategic Review: India Technology Sector Benchmarks',
    organization: 'NASSCOM & Ministry of Electronics & IT (MeitY)',
    year: '2024',
    summary: 'Comprehensive census of India\'s 5.4 million software workforce, detailing GCC revenue acceleration, Tier-2 engineering expansion, and the shift from headcount-linked billing to outcome-based contracts.',
    referenceUrlText: 'NASSCOM Strategic Review & GCC Perspective'
  },
  {
    id: 'knight-frank-cbre',
    category: 'RESEARCH_BACKED',
    categoryLabel: 'RESEARCH-BACKED REPORT',
    categoryBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    title: 'India Office Market & Tech Corridor Absorption Studies',
    organization: 'Knight Frank India & CBRE Research',
    year: '2024',
    summary: 'Empirical commercial real estate metrics covering Grade-A office leasing, SEZ vacancy rates, and rental yield shifts across Bengaluru Outer Ring Road, Hyderabad HITEC City, and Chennai OMR.',
    referenceUrlText: 'CBRE India Tech Real Estate Intelligence'
  },
  {
    id: 'ilo-ai-work',
    category: 'RESEARCH_BACKED',
    categoryLabel: 'RESEARCH-BACKED REPORT',
    categoryBadgeClass: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    title: 'Generative AI and Jobs: A Global Analysis of Potential Effects on Quantity and Quality',
    organization: 'International Labour Organization (ILO)',
    year: '2023',
    summary: 'Analyzes why generative AI acts predominantly as an augmentation technology for knowledge workers, transforming specific task subcomponents rather than eliminating entire occupational titles.',
    referenceUrlText: 'ILO Research Working Paper Series'
  },
  {
    id: 'urban-multiplier-model',
    category: 'ILLUSTRATIVE_ASSUMPTION',
    categoryLabel: 'ILLUSTRATIVE ASSUMPTION',
    categoryBadgeClass: 'bg-amber-100 text-amber-900 border border-amber-300',
    title: 'Urban Informal Multiplier Formula (1 IT : 3.6 Service Jobs)',
    organization: 'IT 2030 Macro Scenario Engine',
    year: '2024–2030',
    summary: 'Assumes that every formal high-earning software engineering position creates ~3.6 local service livelihoods in transit, residential PG facilities, food delivery, and local retail based on spending multiplier models.',
    referenceUrlText: 'Urban Economics Multiplier Framework'
  },
  {
    id: 'scenario-simulator-matrix',
    category: 'SCENARIO_OUTPUT',
    categoryLabel: 'SCENARIO-BASED ESTIMATE',
    categoryBadgeClass: 'bg-purple-100 text-purple-900 border border-purple-300',
    title: 'Multivariate Equilibrium Engine (V2.4)',
    organization: 'National Research Initiative Dossier',
    year: '2024–2030',
    summary: 'Calculates dynamic reactions across entry-level hiring demand, senior compensation premiums, and PG vacancy percentages based on user-selected AI adoption and work-model variables.',
    referenceUrlText: 'Deterministic Scenario Engine Equations'
  },
  {
    id: 'persona-archetypes',
    category: 'FICTIONAL_PERSONA',
    categoryLabel: 'FICTIONAL ILLUSTRATIVE PERSONA',
    categoryBadgeClass: 'bg-neutral-200 text-neutral-800 border border-neutral-400',
    title: 'Corridor Stakeholder Archetypes (Arun, Meena, Karthik, Priya)',
    organization: 'Qualitative Scenario Research',
    year: '2024',
    summary: 'Fictional illustrative personas constructed to make macro economic transitions relatable to students, developers, property hosts, and restaurant owners.',
    referenceUrlText: 'Qualitative User Research Archetypes'
  }
];
