import React from 'react';
import { sourcesData } from '../data/sourcesData';
import { ArrowUpRight } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  return (
    <section id="methodology" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">SECTION 07 • RESEARCH METHODOLOGY</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">Data Tiers &amp; Citations</h2>
          </div>
          <div className="font-mono text-xs text-neutral-500">
            STRICT EVIDENCE TRANSPARENCY
          </div>
        </div>

        {/* 4 Data Tiers Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="bg-emerald-50/70 p-4 border border-emerald-200">
            <span className="text-emerald-900 font-bold uppercase text-[0.65rem] block mb-1">TIER 01 • EMPIRICAL DATA</span>
            <h5 className="font-serif font-bold text-ink text-sm mb-1">Research-Backed</h5>
            <p className="font-sans text-[0.75rem] text-emerald-950">Published industry surveys, NASSCOM census, and commercial leasing indices.</p>
          </div>

          <div className="bg-amber-50/70 p-4 border border-amber-200">
            <span className="text-amber-900 font-bold uppercase text-[0.65rem] block mb-1">TIER 02 • HYPOTHESIS MODEL</span>
            <h5 className="font-serif font-bold text-ink text-sm mb-1">Illustrative Assumptions</h5>
            <p className="font-sans text-[0.75rem] text-amber-950">Urban service multipliers (1:3.6) and PG vacancy sensitivity ratios.</p>
          </div>

          <div className="bg-purple-50/70 p-4 border border-purple-200">
            <span className="text-purple-900 font-bold uppercase text-[0.65rem] block mb-1">TIER 03 • ALGORITHMIC OUTPUT</span>
            <h5 className="font-serif font-bold text-ink text-sm mb-1">Scenario Outputs</h5>
            <p className="font-sans text-[0.75rem] text-purple-950">Dynamic equilibrium simulator states based on user-configured sliders.</p>
          </div>

          <div className="bg-neutral-100 p-4 border border-neutral-300">
            <span className="text-neutral-700 font-bold uppercase text-[0.65rem] block mb-1">TIER 04 • QUALITATIVE ARCHETYPE</span>
            <h5 className="font-serif font-bold text-ink text-sm mb-1">Fictional Personas</h5>
            <p className="font-sans text-[0.75rem] text-neutral-800">Stakeholder archetypes created to illustrate human corridor impacts.</p>
          </div>
        </div>

        {/* Citations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sourcesData.map(source => (
            <div key={source.id} className="bg-bone p-5 border border-hairline hover:border-ink transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[0.65rem] text-neutral-500 uppercase font-semibold">{source.organization}</span>
                  <span className={`badge-mono ${source.categoryBadgeClass}`}>{source.categoryLabel}</span>
                </div>
                <h4 className="font-serif font-bold text-lg text-ink mb-1">{source.title}</h4>
                <div className="font-mono text-[0.7rem] text-amberAccent font-semibold mb-3">Published: {source.year}</div>
                <p className="font-sans text-xs text-neutral-600 leading-relaxed mb-4">{source.summary}</p>
              </div>
              <div className="pt-3 border-t border-hairline flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-500 text-[0.65rem] uppercase">DOCUMENTATION REFERENCE:</span>
                <span className="text-ink font-bold hover:text-amberAccent cursor-pointer flex items-center gap-1">
                  <span>{source.referenceUrlText}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
