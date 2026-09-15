import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F1] border-b border-[#E5E0D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        {/* Top Tag */}
        <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-[#C25E2E] font-bold mb-6">
          CONCLUDING THESIS
        </span>

        {/* The Core Contrast Statement */}
        <div className="space-y-4 mb-10">
          <p className="font-mono text-sm sm:text-base uppercase tracking-widest text-neutral-500 font-semibold">
            THE FUTURE IS NOT
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-400 tracking-tight line-through decoration-[#9B2C2C]/50 decoration-2">
            “AI OR DEVELOPERS.”
          </h2>

          <div className="py-2 text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest">
            IT IS:
          </div>

          <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
            “DEVELOPERS WHO KNOW HOW TO USE AI.”
          </h3>
        </div>

        {/* Action / Jump to Graph */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#section-demand-graph"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 text-[#F8F6F1] px-8 py-3.5 font-mono text-xs font-bold tracking-wider hover:bg-[#C25E2E] transition-colors border border-neutral-900"
          >
            <span>REVIEW 2026–2030 DEMAND INDEX</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#section-roadmap"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-neutral-800 px-8 py-3.5 font-mono text-xs font-bold tracking-wider hover:bg-[#FAF8F5] transition-colors border border-[#E5E0D8]"
          >
            <span>VIEW 5-YEAR ROADMAP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
