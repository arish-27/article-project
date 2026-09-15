import React, { useState } from 'react';
import { citiesData } from '../data/citiesData';
import { DataStatusBadge } from './DataStatusBadge';
import { TriCityComparisonBars } from './ResearchCharts';
import { MapPin, Building, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

interface TriCityMatrixProps {
  onOpenChennaiModal: () => void;
  onOpenHyderabadModal: () => void;
}

export const TriCityMatrixSection: React.FC<TriCityMatrixProps> = ({
  onOpenChennaiModal,
  onOpenHyderabadModal
}) => {
  // Default to Chennai as Primary Focus per prompt instructions
  const [activeCityId, setActiveCityId] = useState<'blr' | 'hyd' | 'che'>('che');
  const city = citiesData[activeCityId];

  return (
    <section id="cities" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-bone">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREENS 05–08 • URBAN TECH HUBS
              </span>
              <DataStatusBadge status="REPORTED" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              Chennai, Bengaluru &amp; Hyderabad Tech Matrix
            </h2>
          </div>

          {/* City Selector Tabs (Chennai Highlighted as Primary) */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
            <button
              onClick={() => setActiveCityId('che')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeCityId === 'che'
                  ? 'bg-amberAccent text-bone border-amberAccent shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              ★ CHENNAI (PRIMARY FOCUS)
            </button>
            <button
              onClick={() => setActiveCityId('blr')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeCityId === 'blr'
                  ? 'bg-ink text-bone border-ink shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              BENGALURU (SECONDARY)
            </button>
            <button
              onClick={() => setActiveCityId('hyd')}
              className={`px-3 py-2 border transition-all cursor-pointer ${
                activeCityId === 'hyd'
                  ? 'bg-ink text-bone border-ink shadow-sm'
                  : 'bg-cream text-neutral-700 border-hairline hover:border-ink'
              }`}
            >
              HYDERABAD (THIRD)
            </button>
          </div>
        </div>

        {/* City Deep Dive Dossier */}
        <div className="bg-cream p-6 md:p-8 border border-hairline shadow-sm space-y-6">
          {/* Dossier Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
                <span className="bg-ink text-bone px-2 py-0.5 font-bold">CLUSTER {city.clusterNumber}</span>
                <span className="text-neutral-500 uppercase tracking-widest">{city.coreCorridors}</span>
                {activeCityId === 'che' && (
                  <span className="bg-parchment text-amberAccent border border-hairline px-2 py-0.5 font-bold uppercase text-[0.65rem]">
                    PRIMARY RESEARCH PROFILE
                  </span>
                )}
              </div>
              <h3 className="font-serif font-black text-3xl md:text-4xl text-ink">{city.name}</h3>
              <p className="font-mono text-xs text-amberAccent font-bold uppercase tracking-wider mt-1">{city.tagline}</p>
            </div>

            <div>
              {activeCityId === 'che' && (
                <button
                  onClick={onOpenChennaiModal}
                  className="px-5 py-2.5 bg-amberAccent text-bone font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>INSPECT 8 CHENNAI CORRIDORS (OMR / GUINDY / SIRUSERI)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {activeCityId === 'hyd' && (
                <button
                  onClick={onOpenHyderabadModal}
                  className="px-5 py-2.5 bg-ink text-bone font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>VIEW CYBERABAD SUB-MARKETS (HITEC / GACHIBOWLI)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Balanced 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Visual & Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative overflow-hidden border border-hairline group">
                <img
                  src={
                    activeCityId === 'che'
                      ? '/images/chennai_omr.jpg'
                      : activeCityId === 'blr'
                      ? '/images/bengaluru_orr.jpg'
                      : '/images/hyderabad_hitec.jpg'
                  }
                  alt={`${city.name} Technology Corridor`}
                  className="w-full h-52 sm:h-60 object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent flex items-end p-3.5">
                  <div className="text-bone font-mono text-xs">
                    <span className="text-[10px] text-amberAccent font-bold uppercase tracking-wider block">
                      {activeCityId === 'che' ? '★ PRIMARY DOSSIER SITE' : 'COMPARATIVE HUB'}
                    </span>
                    <span className="font-serif text-base font-bold">{city.coreCorridors}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-sans text-neutral-700 leading-relaxed bg-bone p-4 border border-hairline">
                {city.description}
              </p>

              {/* Urban Multiplier Callout */}
              <div className="p-3.5 bg-bone border border-hairline font-sans text-xs text-neutral-600">
                <div className="font-mono text-[0.65rem] font-bold text-neutral-500 uppercase mb-1">
                  INDIRECT SERVICE MULTIPLIER
                </div>
                <p className="text-[0.72rem] leading-relaxed">
                  Every 1,000 formal tech positions in {city.name} sustain ~3,600 secondary livelihoods across rentals, transit, food services, and retail.
                </p>
              </div>
            </div>

            {/* Right Column: Metrics, Nodes & Assessment */}
            <div className="lg:col-span-7 space-y-4">
              {/* Core 3 Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="bg-bone p-3.5 border border-hairline">
                  <div className="text-[0.65rem] text-neutral-500 uppercase font-bold">WORKFORCE BASE</div>
                  <div className="text-lg font-bold text-ink mt-1">{city.metrics.workforce2024}</div>
                  <div className="text-[0.65rem] text-neutral-600 mt-0.5">{city.metrics.workforce2030Projection}</div>
                </div>

                <div className="bg-bone p-3.5 border border-hairline">
                  <div className="text-[0.65rem] text-neutral-500 uppercase font-bold">GCC / SEZ SHARE</div>
                  <div className="text-lg font-bold text-ink mt-1">{city.metrics.gccShare}</div>
                  <div className="text-[0.65rem] text-neutral-600 mt-0.5">{city.metrics.gccDetails}</div>
                </div>

                <div className="bg-bone p-3.5 border border-hairline">
                  <div className="text-[0.65rem] text-neutral-500 uppercase font-bold">RESILIENCE SCORE</div>
                  <div className="text-lg font-bold text-ink mt-1">{city.resilienceScore}</div>
                  <div className={`text-[0.65rem] text-neutral-700 mt-0.5 font-medium`}>{city.primaryRisk}</div>
                </div>
              </div>

              {/* Major Tech Corridors & Nodes Grid */}
              <div className="bg-bone p-4 border border-hairline space-y-3">
                <div className="flex items-center justify-between border-b border-hairline pb-2">
                  <h4 className="font-mono text-xs tracking-widest uppercase font-bold text-ink">
                    MAJOR TECH CORRIDORS &amp; NODES
                  </h4>
                  <span className="font-mono text-[0.65rem] text-neutral-500 uppercase">CLUSTER STATUS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {city.economicNodes.map((node, i) => (
                    <div
                      key={node}
                      className="p-2.5 bg-cream border border-hairline flex items-center justify-between font-mono text-xs hover:border-ink transition-colors"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-neutral-400 font-bold">0{i + 1}</span>
                        <span className="font-semibold text-ink truncate text-[0.72rem]">{node}</span>
                      </div>
                      <span className="text-[0.6rem] bg-parchment text-neutral-700 border border-hairline px-1.5 py-0.5 font-bold shrink-0">
                        ACTIVE
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chennai-Specific Area Callout */}
                {activeCityId === 'che' && (
                  <div className="pt-2 border-t border-hairline text-[0.65rem] font-mono text-neutral-600">
                    <span className="font-bold text-neutral-800 uppercase">KEY CHENNAI MICRO-MARKETS: </span>
                    <span>OMR • Sholinganallur • Perungudi • Taramani • Guindy • Siruseri SIPCOT • Porur DLF • Ambattur</span>
                  </div>
                )}
              </div>

              {/* Analyst Note */}
              <div className="bg-parchment p-4 border-l-4 border-ink text-xs font-sans text-neutral-800 leading-relaxed">
                <span className="font-mono font-bold text-ink uppercase tracking-wider block mb-1">
                  STRATEGIC URBAN RESILIENCE ASSESSMENT:
                </span>
                {city.analystNote}
              </div>
            </div>
          </div>
        </div>

        {/* SCREEN 08: CHENNAI vs BENGALURU vs HYDERABAD Multi-Metric Comparison */}
        <div className="pt-8 border-t border-hairline">
          <TriCityComparisonBars />
        </div>
      </div>
    </section>
  );
};
