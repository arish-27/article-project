import React from 'react';
import { fresherComparisonData, fresherSurvivalRules } from '../data/freshersData';
import { DataStatusBadge } from './DataStatusBadge';
import { FresherOpportunityChart } from './ResearchCharts';
import { Sparkles } from 'lucide-react';

export const FreshersSection: React.FC = () => {
  return (
    <section id="freshers" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 13 • COLLEGE STUDENTS &amp; FRESHERS
              </span>
              <DataStatusBadge status="ESTIMATED" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              WILL FRESHERS STILL GET IT JOBS?
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 max-w-md text-left md:text-right">
            Getting your first IT job may become more competitive, but learning real-world problem solving and modern AI tools opens strong new doors.
          </div>
        </div>

        {/* Graph 07: Fresher Campus Intake vs Skill Competition Index */}
        <FresherOpportunityChart />

        {/* Linear Progression Contrast (2026 vs 2030) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-mono text-xs">
          {/* 2026 Pipeline */}
          <div className="bg-bone border border-hairline p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-hairline">
              <span className="font-bold text-neutral-500 uppercase">THE OLD WAY (2026 AND EARLIER)</span>
              <span className="bg-neutral-200 text-neutral-800 px-2 py-0.5 text-[0.6rem] font-bold">
                LESS EFFECTIVE TODAY
              </span>
            </div>
            
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="p-3 bg-cream border border-hairline flex items-center gap-3">
                <span className="font-bold text-neutral-400">STEP 1</span>
                <span>Get any computer or engineering degree</span>
              </div>
              <div className="flex justify-center text-neutral-400">↓</div>
              <div className="p-3 bg-cream border border-hairline flex items-center gap-3">
                <span className="font-bold text-neutral-400">STEP 2</span>
                <span>Learn basic syntax &amp; pass aptitude tests</span>
              </div>
              <div className="flex justify-center text-neutral-400">↓</div>
              <div className="p-3 bg-cream border border-hairline flex items-center gap-3">
                <span className="font-bold text-neutral-400">STEP 3</span>
                <span>Join mass company training for repetitive tasks</span>
              </div>
            </div>

            <p className="font-sans text-xs text-neutral-600 leading-relaxed pt-2">
              In the past, IT companies hired tens of thousands of college students in mass batches and spent months training them on basic tasks. Today, AI can do much of that starter coding, so companies hire more selectively.
            </p>
          </div>

          {/* 2030 Pipeline */}
          <div className="bg-ink text-bone border border-darkhairline p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <span className="font-bold text-amberAccent uppercase">THE NEW WAY (2026 TO 2030)</span>
              <span className="bg-amberAccent text-bone px-2 py-0.5 text-[0.6rem] font-bold">
                WHAT WORKS NOW
              </span>
            </div>

            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="p-3 bg-neutral-900 border border-neutral-800 flex items-center gap-3 text-neutral-200">
                <span className="font-bold text-amberAccent">BASE</span>
                <span>College Degree + Solid Problem-Solving Basics</span>
              </div>
              <div className="flex justify-center text-amberAccent font-bold">+</div>
              <div className="p-3 bg-neutral-900 border border-neutral-800 flex items-center gap-3 text-neutral-200">
                <span className="font-bold text-amberAccent">TOOLS</span>
                <span>Using AI Coding Assistants + Cloud Basics</span>
              </div>
              <div className="flex justify-center text-amberAccent font-bold">+</div>
              <div className="p-3 bg-neutral-900 border border-neutral-800 flex items-center gap-3 text-neutral-200">
                <span className="font-bold text-amberAccent">PROOF</span>
                <span>Real Working Projects You Built &amp; Put Online</span>
              </div>
              <div className="flex justify-center text-emerald-400 font-bold">↓</div>
              <div className="p-3 bg-emerald-950 border border-emerald-700 text-emerald-200 font-bold flex items-center justify-between">
                <span>FASTER CAREER GROWTH &amp; HIGHER SALARY</span>
                <span className="text-[0.65rem] bg-emerald-800 text-bone px-2 py-0.5">HIGH VALUE</span>
              </div>
            </div>

            <p className="font-sans text-xs text-neutral-300 leading-relaxed pt-2">
              Freshers who show they can build real apps, fix tricky bugs, and use modern AI tools will stand out immediately and command better job offers.
            </p>
          </div>
        </div>

        {/* 6-Dimension Comparison Table */}
        <div className="bg-bone border border-hairline p-6 shadow-sm overflow-x-auto">
          <div className="border-b border-hairline pb-3 mb-4 flex justify-between items-center">
            <h3 className="font-serif font-bold text-xl text-ink">
              How the Fresher Experience Is Changing
            </h3>
            <span className="font-mono text-[0.65rem] text-neutral-500 uppercase font-bold">
              6 COMPARISONS
            </span>
          </div>

          <table className="w-full text-left font-sans text-xs border-collapse">
            <thead>
              <tr className="border-b border-hairline font-mono text-[0.65rem] text-neutral-500 uppercase">
                <th className="py-2.5 pr-4">WHAT TO LOOK AT</th>
                <th className="py-2.5 px-4">HOW IT WAS (2026)</th>
                <th className="py-2.5 px-4">HOW IT IS BECOMING (2030)</th>
                <th className="py-2.5 pl-4">WHAT IT MEANS FOR YOU</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {fresherComparisonData.map(row => (
                <tr key={row.dimension} className="hover:bg-cream/70 transition-colors">
                  <td className="py-3 pr-4 font-mono font-bold text-ink">
                    {row.dimension}
                  </td>
                  <td className="py-3 px-4 text-neutral-700">
                    {row.baseline2026}
                  </td>
                  <td className="py-3 px-4 text-neutral-900 font-medium">
                    {row.scenario2030}
                  </td>
                  <td className="py-3 pl-4 text-neutral-600 italic text-[0.75rem]">
                    {row.implication}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Rules for Fresher Survival */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amberAccent" />
            <h3 className="font-serif font-bold text-xl text-ink">
              IF YOU ARE A FRESHER IN 2026, WHAT SHOULD YOU LEARN FOR 2030?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans text-xs">
            {fresherSurvivalRules.map(rule => (
              <div key={rule.ruleNumber} className="bg-bone border border-hairline p-5 space-y-2 hover:border-ink transition-colors">
                <div className="font-mono text-xs font-bold text-amberAccent">RULE {rule.ruleNumber}</div>
                <h4 className="font-serif font-bold text-sm text-ink">{rule.title}</h4>
                <p className="text-neutral-600 leading-relaxed text-[0.75rem]">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
