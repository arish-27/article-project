import React, { useState } from 'react';
import { specific12NewAIRoles } from '../data/futureRolesData';
import { DataStatusBadge } from './DataStatusBadge';
import { HorizontalCarousel } from './HorizontalCarousel';
import { NewAIRolesGrowthChart } from './ResearchCharts';
import { LayoutGrid, SlidersHorizontal } from 'lucide-react';

export const FutureRolesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const filteredRoles = specific12NewAIRoles.filter(r => {
    if (selectedCategory === 'all') return true;
    return r.growthCategory === selectedCategory;
  });

  const validIndex = Math.min(activeRoleIndex, Math.max(0, filteredRoles.length - 1));
  const currentRole = filteredRoles[validIndex];

  return (
    <section id="new-ai-jobs" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 12 • NEW CAREER PATHS
              </span>
              <DataStatusBadge status="FORECAST" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              WHAT NEW JOBS COULD AI CREATE?
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="font-semibold text-neutral-500 uppercase hidden sm:inline">
              12 IN-DEMAND NEW ROLES
            </span>
            <div className="flex items-center border border-hairline bg-cream p-0.5">
              <button
                onClick={() => setViewMode('carousel')}
                className={`p-1.5 ${viewMode === 'carousel' ? 'bg-ink text-bone' : 'text-neutral-600 hover:text-ink'}`}
                title="Single Card View"
                aria-label="Single card view"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 ${viewMode === 'grid' ? 'bg-ink text-bone' : 'text-neutral-600 hover:text-ink'}`}
                title="Grid View"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Graph 06: New AI Roles Growth Velocity Chart */}
        <NewAIRolesGrowthChart />

        {/* Category Filter Toolbar */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold bg-cream p-3 border border-hairline">
          <span className="text-[0.65rem] text-neutral-500 uppercase mr-2">CHOOSE FIELD:</span>
          {[
            { id: 'all', label: 'ALL 12 NEW ROLES' },
            { id: 'Core AI Engineering', label: 'AI & SOFTWARE ENGINEERING' },
            { id: 'Infrastructure & Ops', label: 'CLOUD & AUTOMATION' },
            { id: 'Security & Governance', label: 'SECURITY & RULES' },
            { id: 'Product & Strategy', label: 'PRODUCT & ARCHITECTURE' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveRoleIndex(0);
              }}
              className={`px-3 py-1 border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-ink text-bone border-ink'
                  : 'bg-bone text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Carousel View */}
        {viewMode === 'carousel' && filteredRoles.length > 0 && currentRole && (
          <HorizontalCarousel
            totalItems={filteredRoles.length}
            currentIndex={validIndex}
            onIndexChange={setActiveRoleIndex}
            itemTitle={currentRole.role}
            categoryLabel={currentRole.growthCategory}
          >
            <div className="bg-cream border border-hairline p-6 md:p-10 shadow-sm space-y-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-hairline">
                <div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-amberAccent font-bold block mb-1">
                    {currentRole.growthCategory}
                  </span>
                  <h3 className="font-serif font-black text-3xl md:text-4xl text-ink">
                    {currentRole.role}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 font-mono text-xs font-bold uppercase">
                    {currentRole.demandTier === 'CRITICAL DEMAND' ? 'HIGH DEMAND' : currentRole.demandTier === 'RAPID EXPANSION' ? 'FAST GROWING' : 'GROWING FIELD'}
                  </span>
                  <DataStatusBadge status="FORECAST" />
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                {/* Left Column: What They Do & Why It Emerges */}
                <div className="space-y-4">
                  <div className="p-4 bg-bone border border-hairline space-y-1.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-amberAccent font-bold block">
                      1. WHAT THIS PERSON DOES
                    </span>
                    <p className="text-neutral-800 leading-relaxed font-medium">
                      {currentRole.responsibilities}
                    </p>
                  </div>

                  <div className="p-4 bg-bone border border-hairline space-y-1.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-neutral-500 font-bold block">
                      2. WHY COMPANIES NEED THIS JOB
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {currentRole.whyItEmerges}
                    </p>
                  </div>
                </div>

                {/* Right Column: Key Skills & Fresher Entry Path */}
                <div className="space-y-4">
                  {/* Skills Required */}
                  <div className="p-4 bg-bone border border-hairline space-y-2">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-emerald-800 font-bold block">
                      3. SKILLS THAT WILL HELP YOU GET STARTED
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs font-semibold">
                      {currentRole.keySkills.map(s => (
                        <span key={s} className="bg-cream px-2.5 py-1 border border-hairline text-ink">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fresher Entry Path */}
                  <div className="p-4 bg-parchment border border-hairline space-y-1.5">
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-neutral-700 font-bold block">
                      4. HOW A FRESHER OR BEGINNER CAN START
                    </span>
                    <p className="text-neutral-800 leading-relaxed">
                      {currentRole.fresherEntryPath}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </HorizontalCarousel>
        )}

        {/* Grid View Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoles.map(role => (
              <div
                key={role.id}
                className="bg-cream border border-hairline p-6 hover:border-ink transition-all flex flex-col justify-between shadow-sm space-y-4"
              >
                <div>
                  <div className="flex justify-between items-center gap-2 pb-2 border-b border-hairline">
                    <span className="font-mono text-[0.6rem] text-neutral-500 uppercase font-bold">
                      {role.growthCategory}
                    </span>
                    <span className="bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.5 text-[0.55rem] font-mono font-bold uppercase">
                      {role.demandTier === 'CRITICAL DEMAND' ? 'HIGH DEMAND' : role.demandTier === 'RAPID EXPANSION' ? 'FAST GROWING' : 'GROWING FIELD'}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-ink mt-2 mb-3">
                    {role.role}
                  </h3>

                  <div className="p-3 bg-bone border border-hairline text-xs font-sans text-neutral-700 mb-3 leading-relaxed">
                    <strong className="font-mono text-[0.65rem] uppercase text-amber-800 block mb-0.5">WHAT THEY DO:</strong>
                    {role.responsibilities}
                  </div>

                  <div className="space-y-2 mb-3">
                    <span className="font-mono text-[0.6rem] uppercase text-neutral-500 font-bold block">USEFUL SKILLS:</span>
                    <div className="flex flex-wrap gap-1 font-mono text-[0.65rem]">
                      {role.keySkills.map(s => (
                        <span key={s} className="px-2 py-0.5 bg-bone border border-hairline text-neutral-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-hairline text-xs font-sans bg-parchment p-3 border border-hairline">
                  <strong className="font-mono text-[0.65rem] uppercase text-neutral-700 block mb-0.5">HOW FRESHERS CAN START:</strong>
                  <p className="text-neutral-800 text-[0.75rem] leading-relaxed">
                    {role.fresherEntryPath}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
