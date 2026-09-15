import React, { useState } from 'react';
import { master2026vs2030Comparison } from '../data/macroLandscapeData';
import { DataStatusBadge } from './DataStatusBadge';
import { MasterRadarComparisonChart } from './ResearchCharts';
import { Sparkles, ArrowRight, ToggleLeft, ToggleRight, Layers } from 'lucide-react';

export const MasterComparisonSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'compare' | '2026' | '2030'>('compare');

  return (
    <section id="master-comparison" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 20 • MASTER SYNTHESIS
              </span>
              <DataStatusBadge status="SCENARIO" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              2026 CURRENT vs 2030 SCENARIO
            </h2>
          </div>

          {/* Interactive 2026 / 2030 / Compare Toggle */}
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold bg-bone p-1 border border-hairline">
            <button
              onClick={() => setActiveView('2026')}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                activeView === '2026'
                  ? 'bg-ink text-bone border-ink'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-ink'
              }`}
            >
              [ 2026 CURRENT ]
            </button>
            <button
              onClick={() => setActiveView('compare')}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                activeView === 'compare'
                  ? 'bg-amberAccent text-bone border-amberAccent shadow-sm'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-ink'
              }`}
            >
              [ SIDE-BY-SIDE COMPARE ]
            </button>
            <button
              onClick={() => setActiveView('2030')}
              className={`px-3 py-1.5 border transition-all cursor-pointer ${
                activeView === '2030'
                  ? 'bg-ink text-bone border-ink'
                  : 'bg-transparent text-neutral-600 border-transparent hover:text-ink'
              }`}
            >
              [ 2030 SCENARIO ]
            </button>
          </div>
        </div>

        {/* Graph 10: Master 6-Dimensional Index Chart */}
        <MasterRadarComparisonChart />

        {/* Master Comparison Table / Grid */}
        <div className="bg-bone border border-hairline shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-hairline flex justify-between items-center bg-cream">
            <h3 className="font-serif font-bold text-lg md:text-xl text-ink">
              Comprehensive Sector Transformation Matrix
            </h3>
            <span className="font-mono text-[0.65rem] text-neutral-500 font-bold uppercase">
              {activeView === 'compare' ? 'DUAL-HORIZON COMPARISON' : `ISOLATED ${activeView.toUpperCase()} VIEW`}
            </span>
          </div>

          <div className="divide-y divide-hairline">
            {master2026vs2030Comparison.map((row, idx) => (
              <div key={row.dimension} className="p-5 sm:p-6 hover:bg-cream/50 transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-neutral-400">0{idx + 1}.</span>
                    <h4 className="font-serif font-bold text-lg text-ink">{row.dimension}</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[0.65rem] text-amberAccent font-bold uppercase bg-amber-50 px-2 py-0.5 border border-amber-200">
                      {row.verdict}
                    </span>
                    <DataStatusBadge status={row.dataStatus} />
                  </div>
                </div>

                {/* Content based on Active View */}
                <div className={`grid gap-4 mt-3 font-sans text-xs ${
                  activeView === 'compare' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                }`}>
                  {/* 2026 Box */}
                  {(activeView === 'compare' || activeView === '2026') && (
                    <div className="p-4 bg-cream border border-hairline space-y-1">
                      <span className="font-mono text-[0.65rem] font-bold uppercase text-neutral-500 block">
                        2026 CURRENT BASELINE:
                      </span>
                      <p className="text-neutral-700 leading-relaxed font-medium">
                        {row.state2026}
                      </p>
                    </div>
                  )}

                  {/* 2030 Box */}
                  {(activeView === 'compare' || activeView === '2030') && (
                    <div className="p-4 bg-parchment border border-hairline space-y-1">
                      <span className="font-mono text-[0.65rem] font-bold uppercase text-amber-800 block">
                        2030 MODELED SCENARIO:
                      </span>
                      <p className="text-neutral-900 leading-relaxed font-medium">
                        {row.scenario2030}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
