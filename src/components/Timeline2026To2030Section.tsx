import React, { useState } from 'react';
import { timelineYearsData } from '../data/timelineData';
import { DataStatusBadge } from './DataStatusBadge';
import { HorizontalCarousel } from './HorizontalCarousel';
import { Calendar, Cpu, Users, Briefcase, Award, ArrowRight } from 'lucide-react';

export const Timeline2026To2030Section: React.FC = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const currentYear = timelineYearsData[activeYearIndex];

  return (
    <section id="timeline" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 10 • MULTI-YEAR EVOLUTION
              </span>
              <DataStatusBadge status="FORECAST" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              2026 → 2030 HORIZONTAL TIMELINE
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-600 max-w-md text-left md:text-right">
            Year-by-year trajectory of AI development, workforce realignment, hiring filters, and skill mandates.
          </div>
        </div>

        {/* Horizontal Year Selector Ribbon */}
        <div className="flex items-center justify-between border-y border-hairline py-3 bg-cream px-2 sm:px-4 overflow-x-auto gap-2">
          {timelineYearsData.map((pt, idx) => {
            const isSelected = idx === activeYearIndex;
            return (
              <button
                key={pt.year}
                onClick={() => setActiveYearIndex(idx)}
                className={`flex-1 min-w-[100px] py-2.5 px-3 border transition-all text-center cursor-pointer ${
                  isSelected
                    ? 'bg-ink text-bone border-ink font-bold shadow-sm'
                    : 'bg-bone text-neutral-700 border-hairline hover:border-ink'
                }`}
              >
                <div className="font-mono text-xs text-amberAccent font-bold">YEAR</div>
                <div className="font-serif font-black text-xl">{pt.year}</div>
                <div className="text-[0.55rem] font-mono uppercase tracking-wider truncate mt-0.5 opacity-80">
                  {pt.phaseTitle.split(':')[1]?.trim() || pt.year}
                </div>
              </button>
            );
          })}
        </div>

        {/* Horizontal Slide Display */}
        {currentYear && (
          <HorizontalCarousel
            totalItems={timelineYearsData.length}
            currentIndex={activeYearIndex}
            onIndexChange={setActiveYearIndex}
            itemTitle={`YEAR ${currentYear.year} • ${currentYear.phaseTitle}`}
            categoryLabel="ANNUAL PROGRESSION"
          >
            <div className="bg-cream border border-hairline p-6 md:p-10 shadow-sm space-y-6">
              {/* Year Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-hairline">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-amberAccent font-bold block mb-1">
                    FIVE-YEAR CHRONOLOGY
                  </span>
                  <h3 className="font-serif font-black text-3xl md:text-4xl text-ink">
                    {currentYear.year} : {currentYear.phaseTitle}
                  </h3>
                </div>
                <DataStatusBadge status={currentYear.status} />
              </div>

              {/* 4 Multi-Dimensional Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                {/* AI Development & Maturity */}
                <div className="p-5 bg-bone border border-hairline space-y-2">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-neutral-800">
                    <Cpu className="w-4 h-4 text-amberAccent" />
                    AI Tooling &amp; Technical Capabilities
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {currentYear.aiMaturity}
                  </p>
                </div>

                {/* Workforce & Productivity Impact */}
                <div className="p-5 bg-bone border border-hairline space-y-2">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-neutral-800">
                    <Users className="w-4 h-4 text-neutral-700" />
                    Workforce Leverage &amp; Operational Shifts
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {currentYear.workforceImpact}
                  </p>
                </div>

                {/* Hiring Reality & Entry Bars */}
                <div className="p-5 bg-bone border border-hairline space-y-2">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-neutral-800">
                    <Briefcase className="w-4 h-4 text-emerald-700" />
                    Hiring Reality &amp; Recruitment Filters
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {currentYear.hiringReality}
                  </p>
                </div>

                {/* Role Evolution & Transformation */}
                <div className="p-5 bg-bone border border-hairline space-y-2">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase text-neutral-800">
                    <Award className="w-4 h-4 text-indigo-700" />
                    Role Transformation &amp; Displacements
                  </div>
                  <p className="text-neutral-700 leading-relaxed">
                    {currentYear.roleEvolution}
                  </p>
                </div>
              </div>

              {/* Critical Skills for this Year */}
              <div className="p-4 bg-parchment border border-hairline">
                <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-700 block mb-2">
                  CRITICAL SKILL MANDATE FOR {currentYear.year}:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs font-semibold">
                  {currentYear.criticalSkillFocus.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-bone border border-hairline text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </HorizontalCarousel>
        )}
      </div>
    </section>
  );
};
