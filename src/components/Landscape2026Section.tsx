import React from 'react';
import { landscape2026KPIs, macroMetrics2026 } from '../data/macroLandscapeData';
import { DataStatusBadge } from './DataStatusBadge';
import { AIAdoptionScenarioChart, WorkforceCompositionChart } from './ResearchCharts';

export const Landscape2026Section: React.FC = () => {
  return (
    <section id="landscape-2026" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 02 • INDUSTRY SNAPSHOT
              </span>
              <DataStatusBadge status="REPORTED" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              WHERE DOES THE IT INDUSTRY STAND IN 2026?
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 max-w-md text-left md:text-right">
            Real facts about India's 5.43 million software workers — how AI is used, hiring trends, and learning new skills.
          </div>
        </div>

        {/* 4 Core KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {landscape2026KPIs.map((kpi, idx) => (
            <div
              key={idx}
              className="bg-cream p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[0.65rem] font-mono uppercase font-bold text-neutral-500 tracking-wider">
                    {kpi.title}
                  </span>
                  <DataStatusBadge status={kpi.status} />
                </div>
                <div className="font-serif font-black text-3xl md:text-4xl text-ink my-1">
                  {kpi.metric}
                </div>
                <p className="text-xs font-sans text-neutral-700 leading-relaxed mt-2">
                  {kpi.subtext}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-hairline/60 text-[0.6rem] font-mono text-neutral-500">
                SOURCE: {kpi.source}
              </div>
            </div>
          ))}
        </div>

        {/* 2026 Visual Graphs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIAdoptionScenarioChart />
          <WorkforceCompositionChart />
        </div>

        {/* Detailed 2026 Dimensions Grid (Hiring, Layoffs, Bench, Reskilling) */}
        <div className="bg-cream p-6 md:p-8 border border-hairline shadow-sm">
          <div className="border-b border-hairline pb-3 mb-6 flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-ink">
              Six Key Facts About What Is Happening Today
            </h3>
            <span className="text-[0.65rem] font-mono text-neutral-500 font-bold uppercase">
              PLAIN EXPLANATIONS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* IT Workforce & Hiring */}
            <div className="border border-hairline bg-bone p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">01. JOBS &amp; HIRING</span>
                <DataStatusBadge status="REPORTED" />
              </div>
              <h4 className="font-serif font-bold text-base text-ink">Companies Do More with Leaner Teams</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                India has 5.43 million IT workers. While tech company revenues are growing, companies are hiring at a steadier, more careful pace because AI tools help existing teams get more work done.
              </p>
            </div>

            {/* Layoffs Context */}
            <div className="border border-hairline bg-bone p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">02. JOB CUTS &amp; RESTRUCTURING</span>
                <DataStatusBadge status="REPORTED" />
              </div>
              <h4 className="font-serif font-bold text-base text-ink">Why Job Cuts Happened Recently</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                Recent layoffs were mostly caused by companies correcting the huge over-hiring that happened during the pandemic and global budget cuts — not simply because AI replaced everyone overnight.
              </p>
            </div>

            {/* Bench & Project Availability */}
            <div className="border border-hairline bg-bone p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">03. WAITING FOR PROJECTS (BENCH)</span>
                <DataStatusBadge status="INDUSTRY ESTIMATE" />
              </div>
              <h4 className="font-serif font-bold text-base text-ink">Time on Bench is Used for Learning</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                About 14% to 16% of employees are between projects. Instead of sitting idle, major companies now require staff on the bench to attend daily training sessions in AI, cloud computing, and cybersecurity.
              </p>
            </div>

            {/* Fresher Intake */}
            <div className="border border-hairline bg-bone p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">04. HIRING FRESHERS</span>
                <DataStatusBadge status="ESTIMATED" />
              </div>
              <h4 className="font-serif font-bold text-base text-ink">Getting a First Job Takes More Proof</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                Mass hiring directly from colleges has slowed down by ~35% compared to 2022. Companies now test whether students have built real projects, can fix code, and know how to work with modern tools.
              </p>
            </div>

            {/* AI Adoption Depth */}
            <div className="border border-hairline bg-bone p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">05. HOW AI IS USED TODAY</span>
                <DataStatusBadge status="INDUSTRY ESTIMATE" />
              </div>
              <h4 className="font-serif font-bold text-base text-ink">AI as a Helpful Everyday Assistant</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                Over 68% of IT firms use AI tools daily. Rather than replacing entire teams, AI helps developers write repetitive code faster, checks for common bugs, and drafts quick explanations.
              </p>
            </div>

            {/* Reskilling Velocity */}
            <div className="border border-hairline bg-bone p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500">06. MASSIVE SKILL BUILDING</span>
                <DataStatusBadge status="REPORTED" />
              </div>
              <h4 className="font-serif font-bold text-base text-ink">850,000+ Workers Learning AI</h4>
              <p className="text-xs font-sans text-neutral-600 leading-relaxed">
                India's top IT firms (TCS, Infosys, Wipro, HCLTech, Cognizant) have already trained over 850,000 employees in AI and modern tools — the biggest workplace training effort in India's history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
