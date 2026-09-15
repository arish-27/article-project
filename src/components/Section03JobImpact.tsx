import React from 'react';
import { Layers, RefreshCw, Sparkles, ShieldAlert } from 'lucide-react';

export const Section03JobImpact: React.FC = () => {
  const categories = [
    {
      num: '01',
      title: 'HIGHER AUTOMATION EXPOSURE',
      subtitle: 'Structured, deterministic tasks subject to continuous programmatic compression.',
      accent: 'border-[#9B2C2C]',
      tagBg: 'bg-[#9B2C2C]/10 text-[#9B2C2C] border-[#9B2C2C]/30',
      icon: ShieldAlert,
      message: 'Roles heavily centered on routine execution face heightened structural pressure. Adaptation hinges on moving toward orchestration and verification.',
      items: [
        'Data entry',
        'Repetitive manual testing',
        'Basic support tasks',
        'Repetitive documentation',
        'Simple data processing',
        'Routine coding tasks',
      ],
      editorialNote: 'Note: These roles do not instantly vanish; their manual task density is replaced by automated agent workflows.',
    },
    {
      num: '02',
      title: 'JOBS THAT WILL EVOLVE',
      subtitle: 'Core engineering disciplines transforming from syntax creation to system guidance.',
      accent: 'border-neutral-900',
      tagBg: 'bg-neutral-900/10 text-neutral-900 border-neutral-900/30',
      icon: RefreshCw,
      message: 'The role changes. AI becomes part of the workflow.',
      items: [
        'Software Developer',
        'QA Engineer',
        'Backend Engineer',
        'DevOps Engineer',
        'Data Analyst',
        'Technical Support',
      ],
      editorialNote: 'Engineers who integrate generative leverage and automated pipelines multiply individual output velocity.',
    },
    {
      num: '03',
      title: 'AREAS WITH STRONG AI-DRIVEN DEMAND',
      subtitle: 'Emergent specializations creating net-new organizational capability and architecture.',
      accent: 'border-[#C25E2E]',
      tagBg: 'bg-[#C25E2E]/10 text-[#C25E2E] border-[#C25E2E]/30',
      icon: Sparkles,
      message: 'Accelerating enterprise capital expenditure creates acute demand for architects bridging models, data, and production infrastructure.',
      items: [
        'AI Engineering',
        'AI Application Development',
        'AI Security',
        'Cloud & AI Infrastructure',
        'AI Automation',
        'AI Governance',
        'AI Product Engineering',
      ],
      editorialNote: 'High premium placed on deep technical fluency, reliability engineering, and system-level validation.',
    },
  ];

  return (
    <section id="section-job-impact" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 03
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              TAXONOMY ANALYSIS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-6">
            WHAT HAPPENS TO IT JOBS?
          </h2>
          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            Workforce evolution is neither uniform elimination nor frictionless status quo. It segments into three structural dynamics: automation exposure, evolutionary adaptation, and net-new demand.
          </p>
        </div>

        {/* Editorial Photo Break for Section 03 */}
        <div className="mb-12 border border-[#E5E0D8] bg-white p-2.5 sm:p-3 shadow-sm">
          <div className="relative overflow-hidden aspect-[16/7] sm:aspect-[2.8/1]">
            <img
              src="/images/ai_engineers_collaborative_lab_1789297040852.jpg"
              alt="Engineers working collaboratively in an AI software lab"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
            <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider">
              FIELD OBSERVATION • LAB DISPATCH
            </div>
          </div>
          <div className="pt-2.5 pb-1 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-mono text-neutral-600">
            <p className="font-sans text-xs text-neutral-700">
              <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 3.1</span>
              The Human Verification Anchor: Engineering squads navigating the shift from typing boilerplate code to auditing edge-case behaviors and orchestrating synthetic pipelines.
            </p>
            <span className="text-[10px] text-neutral-400 uppercase whitespace-nowrap">
              HUMAN-IN-THE-LOOP SYSTEMS
            </span>
          </div>
        </div>

        {/* 3-Part Editorial Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.num}
                className={`bg-white border ${cat.accent} p-6 sm:p-8 flex flex-col justify-between relative transition-shadow hover:shadow-md`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F0EBE1]">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      CATEGORY {cat.num}
                    </span>
                    <span className={`font-mono text-[10px] uppercase px-2 py-0.5 border ${cat.tagBg}`}>
                      {cat.title === 'JOBS THAT WILL EVOLVE' ? 'EVOLUTION' : cat.title.includes('EXPOSURE') ? 'EXPOSURE' : 'EXPANSION'}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                    {cat.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-500 leading-relaxed mb-6">
                    {cat.subtitle}
                  </p>

                  {/* Key Thesis / Callout Quote */}
                  <div className="p-3.5 bg-[#FAF8F5] border-l-2 border-neutral-900 mb-6">
                    <p className="font-serif italic text-xs text-neutral-800 leading-relaxed">
                      “{cat.message}”
                    </p>
                  </div>

                  {/* Itemized Examples */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2">
                      REPRESENTATIVE FOCUS AREAS
                    </span>
                    <ul className="space-y-2 font-mono text-xs text-neutral-800">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 pb-1 border-b border-[#F5F2EB]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C25E2E]/60 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footnote note */}
                <div className="pt-4 border-t border-[#F0EBE1] text-[11px] font-sans text-neutral-500 italic">
                  {cat.editorialNote}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
