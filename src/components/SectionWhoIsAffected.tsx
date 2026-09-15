import React, { useState } from 'react';
import { Users, AlertTriangle, ShieldCheck, TrendingUp, Sparkles, Building2, UserX, Cpu, ArrowRight } from 'lucide-react';

interface Cohort {
  id: string;
  category: string;
  title: string;
  tagline: string;
  exposureLevel: 'HIGH AUTOMATION EXPOSURE' | 'SUBSTANTIAL TRANSFORMATION' | 'HIGH LEVERAGE EXPANSION';
  exposureBadge: string;
  headcountTrajectory: 'Compressing entry-level volume' | 'Steady demand, mutated skill set' | 'Rapidly expanding leverage';
  tasksCompressed: string[];
  durableHumanMoat: string[];
  strategicPrescription: string;
}

export const SectionWhoIsAffected: React.FC = () => {
  const [selectedCohortId, setSelectedCohortId] = useState<string>('freshers');

  const cohorts: Cohort[] = [
    {
      id: 'freshers',
      category: 'ENTRY-LEVEL WORKFORCE',
      title: 'Fresh Graduates & Junior Developers',
      tagline: 'The apprenticeship model breaks; entry requires architectural comprehension on day one.',
      exposureLevel: 'HIGH AUTOMATION EXPOSURE',
      exposureBadge: 'bg-[#9B2C2C]/10 text-[#9B2C2C] border-[#9B2C2C]/30',
      headcountTrajectory: 'Compressing entry-level volume',
      tasksCompressed: [
        'Writing boilerplate CRUD code',
        'Basic syntax lookups and routine debugging',
        'Simple bug fixes and documentation drafting',
        'Manual database seed scripts and scaffolding',
      ],
      durableHumanMoat: [
        'Fundamental CS knowledge (memory, execution, networking)',
        'Understanding how systems break under edge workloads',
        'Ability to prompt, direct, and audit synthetic code outputs',
      ],
      strategicPrescription:
        'Stop building generic portfolio clones. Build complete full-stack products using AI as leverage, demonstrating you understand system design, state management, and real-world deployment.',
    },
    {
      id: 'manual-qa',
      category: 'TESTING & QUALITY ASSURANCE',
      title: 'Manual QA & Repetitive Test Engineers',
      tagline: 'Deterministic clicking and manual regression testing are heavily automated by agents.',
      exposureLevel: 'HIGH AUTOMATION EXPOSURE',
      exposureBadge: 'bg-[#9B2C2C]/10 text-[#9B2C2C] border-[#9B2C2C]/30',
      headcountTrajectory: 'Compressing entry-level volume',
      tasksCompressed: [
        'Manual test script execution and regression clicks',
        'Hand-writing basic unit test assertions',
        'Repetitive cross-browser verification runs',
        'Standard boundary value documentation',
      ],
      durableHumanMoat: [
        'Exploratory testing and unpredictable user behavior analysis',
        'Model evaluation (Evals), hallucination auditing & prompt security',
        'Reliability, chaos, and load engineering architecture',
      ],
      strategicPrescription:
        'Pivot immediately toward Automated Test Architecture, LLM Evaluation (Evals), and Chaos Engineering. Move from clicking interfaces to engineering verification frameworks.',
    },
    {
      id: 'software-engineers',
      category: 'CORE ENGINEERING',
      title: 'Mid & Senior Software Engineers',
      tagline: 'Velocity multiplies 3x–5x. The bottleneck moves from typing code to system design.',
      exposureLevel: 'SUBSTANTIAL TRANSFORMATION',
      exposureBadge: 'bg-neutral-900/10 text-neutral-900 border-neutral-900/30',
      headcountTrajectory: 'Steady demand, mutated skill set',
      tasksCompressed: [
        'Writing repetitive feature boilerplate',
        'Manual refactoring and syntax conversions',
        'Searching StackOverflow and API documentation',
        'Drafting routine internal API endpoints',
      ],
      durableHumanMoat: [
        'Distributed systems architecture and concurrency models',
        'Domain business logic translation and system trade-offs',
        'Zero-trust security and data integrity guarantees',
      ],
      strategicPrescription:
        'Embrace AI copilots as active pair partners. Treat your job not as typing syntax, but as orchestrating and verifying synthetic modules that integrate with production backends.',
    },
    {
      id: 'it-support',
      category: 'OPERATIONS & SUPPORT',
      title: 'IT Support, Helpdesk & L1/L2 Operations',
      tagline: 'Conversational agents and self-healing scripts resolve routine incidents instantly.',
      exposureLevel: 'HIGH AUTOMATION EXPOSURE',
      exposureBadge: 'bg-[#9B2C2C]/10 text-[#9B2C2C] border-[#9B2C2C]/30',
      headcountTrajectory: 'Compressing entry-level volume',
      tasksCompressed: [
        'Password resets and access permission ticketing',
        'Basic hardware and network troubleshooting FAQs',
        'Routine server log checks and manual disk cleanups',
        'Repetitive software license provisioning',
      ],
      durableHumanMoat: [
        'Physical data center & edge hardware infrastructure',
        'Identity governance and zero-trust perimeter security',
        'Critical incident escalation and emergency command center leadership',
      ],
      strategicPrescription:
        'Upskill rapidly into Cloud Platform Engineering, DevOps, and Cybersecurity. Move away from answering tickets to building automated self-service infrastructure.',
    },
    {
      id: 'tech-leads',
      category: 'LEADERSHIP & ARCHITECTURE',
      title: 'Tech Leads, Architects & Product Leads',
      tagline: 'A 3-person team with AI delivers what previously required a 20-engineer division.',
      exposureLevel: 'HIGH LEVERAGE EXPANSION',
      exposureBadge: 'bg-[#C25E2E]/10 text-[#C25E2E] border-[#C25E2E]/30',
      headcountTrajectory: 'Rapidly expanding leverage',
      tasksCompressed: [
        'Manual architecture documentation diagrams',
        'Prototyping baseline proof-of-concept features',
        'Drafting initial PR reviews and style checks',
      ],
      durableHumanMoat: [
        'Strategic clarity: knowing WHAT to build and WHY',
        'Evaluating model safety, legal compliance, and latency trade-offs',
        'Interdisciplinary alignment across product, business, and tech',
      ],
      strategicPrescription:
        'Master the orchestration of autonomous development agents. The most valuable tech leads in 2030 will be those who can deploy synthetic teams while maintaining zero architectural debt.',
    },
    {
      id: 'services-firms',
      category: 'ENTERPRISE ECOSYSTEM',
      title: 'IT Services Companies & Outsourcing Hubs',
      tagline: 'Billing by hourly developer headcount is disrupted by fixed-outcome synthetic delivery.',
      exposureLevel: 'SUBSTANTIAL TRANSFORMATION',
      exposureBadge: 'bg-neutral-900/10 text-neutral-900 border-neutral-900/30',
      headcountTrajectory: 'Steady demand, mutated skill set',
      tasksCompressed: [
        'Low-complexity offshore maintenance contracts',
        'Linear headcount billing models (Time & Materials)',
        'Basic legacy migration and code translation sweeps',
      ],
      durableHumanMoat: [
        'Deep enterprise domain relationships and regulatory trust',
        'Complex multi-cloud enterprise modernization at scale',
        'Custom private model deployments and sovereign data pipelines',
      ],
      strategicPrescription:
        'Pivoting from hourly labor arbitrage to outcome-based AI integration. Delivering specialized enterprise agent ecosystems that run securely inside clients’ virtual private clouds.',
    },
  ];

  const currentCohort = cohorts.find((c) => c.id === selectedCohortId) || cohorts[0];

  return (
    <section id="section-who-is-affected" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              IMPACT AUDIT
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              STAKEHOLDER INTELLIGENCE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-6">
            WHO ALL WILL BE AFFECTED BY THIS AI GROWTH?
          </h2>

          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            The consequences of generative infrastructure are not distributed equally. From university freshers to enterprise service firms, here is how each tier of the technology ecosystem is impacted between 2026 and 2030.
          </p>
        </div>

        {/* Interactive Cohort Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 font-mono text-xs">
          {cohorts.map((cohort) => {
            const isSelected = cohort.id === selectedCohortId;
            return (
              <button
                key={cohort.id}
                onClick={() => setSelectedCohortId(cohort.id)}
                className={`p-3 text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-[#F8F6F1] border-neutral-900 shadow-sm'
                    : 'bg-white text-neutral-700 border-[#E5E0D8] hover:border-neutral-400'
                }`}
              >
                <span className="text-[9px] uppercase tracking-wider block text-neutral-400 mb-1">
                  {cohort.category}
                </span>
                <span className="font-serif text-xs sm:text-sm font-bold block leading-tight">
                  {cohort.title.split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Cohort Deep-Dive Dossier */}
        <div className="bg-white border border-[#E5E0D8] p-6 sm:p-10 relative shadow-sm">
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between pb-6 mb-8 border-b border-[#F0EBE1] gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C25E2E] font-bold block mb-1">
                {currentCohort.category} • COHORT DOSSIER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900">
                {currentCohort.title}
              </h3>
              <p className="font-serif italic text-neutral-600 text-sm sm:text-base mt-1">
                “{currentCohort.tagline}”
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className={`font-mono text-xs uppercase px-3 py-1 border font-semibold ${currentCohort.exposureBadge}`}>
                {currentCohort.exposureLevel}
              </span>
              <span className="font-mono text-xs px-3 py-1 bg-[#FAF8F5] border border-[#E5E0D8] text-neutral-700">
                Trajectory: {currentCohort.headcountTrajectory}
              </span>
            </div>
          </div>

          {/* Core 2-Column Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Column 1: Tasks Being Compressed */}
            <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#9B2C2C] border-y border-r border-[#EAE5DC]">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-[#9B2C2C]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#9B2C2C] font-bold">
                  WHAT IS SUBJECT TO AUTOMATION COMPRESSION
                </span>
              </div>
              <p className="font-sans text-xs text-neutral-500 mb-4">
                These tasks are increasingly handled in seconds by modern models, copilots, and multi-agent loops:
              </p>
              <ul className="space-y-2.5 font-mono text-xs text-neutral-800">
                {currentCohort.tasksCompressed.map((task) => (
                  <li key={task} className="flex items-start gap-2">
                    <span className="text-[#9B2C2C] font-bold mt-0.5">✕</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: The Durable Human Moat */}
            <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#C25E2E] border-y border-r border-[#EAE5DC]">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#C25E2E]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#C25E2E] font-bold">
                  THE DURABLE HUMAN VALUE MOAT
                </span>
              </div>
              <p className="font-sans text-xs text-neutral-500 mb-4">
                Where irreplaceable human judgment, system reasoning, and critical accountability live:
              </p>
              <ul className="space-y-2.5 font-mono text-xs text-neutral-800">
                {currentCohort.durableHumanMoat.map((moat) => (
                  <li key={moat} className="flex items-start gap-2">
                    <span className="text-[#C25E2E] font-bold mt-0.5">✓</span>
                    <span>{moat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategic Prescription Callout */}
          <div className="p-6 bg-[#111111] text-[#F8F6F1] border border-[#222222]">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#C25E2E] font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>TACTICAL MANDATE FOR 2026 → 2030</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-neutral-200">
              {currentCohort.strategicPrescription}
            </p>
          </div>
        </div>

        {/* Global Summary Grid Across All 6 Cohorts */}
        <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
              MACRO AT-A-GLANCE MATRIX
            </span>
            <h4 className="font-serif text-xl font-bold text-neutral-900 mt-1">
              Cross-Disciplinary Exposure Summary
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cohorts.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelectedCohortId(c.id)}
                className={`p-4 border text-left cursor-pointer transition-colors ${
                  c.id === selectedCohortId
                    ? 'bg-white border-neutral-900 shadow-sm'
                    : 'bg-[#FAF8F5] border-[#E5E0D8] hover:bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[10px] uppercase text-[#C25E2E] font-bold">
                    {c.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">
                    {c.id === selectedCohortId ? 'VIEWING' : 'CLICK TO INSPECT'}
                  </span>
                </div>
                <h5 className="font-serif text-base font-bold text-neutral-900 mb-1">
                  {c.title}
                </h5>
                <p className="font-sans text-xs text-neutral-600 line-clamp-2">
                  {c.tagline}
                </p>
              </div>
            ))}
          </div>

          {/* Magazine Editorial Photo for Stakeholders */}
          <div className="mt-12 border border-[#E5E0D8] bg-white p-2.5 sm:p-3 shadow-sm">
            <div className="relative overflow-hidden aspect-[16/7] sm:aspect-[2.8/1]">
              <img
                src="/images/hyderabad_hitec_city.jpg"
                alt="Hyderabad HITEC City innovation hub and enterprise campuses"
                className="w-full h-full object-cover filter contrast-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider">
                REGIONAL DISPATCH • HYDERABAD HITEC
              </div>
            </div>
            <div className="pt-2.5 pb-1 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-mono text-neutral-600">
              <p className="font-sans text-xs text-neutral-700">
                <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 3.2</span>
                Workforce Restructuring: Global Capability Centers (GCCs) and product campuses in Hyderabad, Bengaluru, and Pune reconfiguring recruitment funnels from bulk campus hiring to experienced systems architects.
              </p>
              <span className="text-[10px] text-neutral-400 uppercase whitespace-nowrap">
                ENTERPRISE REBALANCING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
