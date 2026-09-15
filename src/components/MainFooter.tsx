import React from 'react';

export const MainFooter: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-[#A0AEC0] border-t border-[#262626] font-mono text-xs py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Masthead Row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-8 border-b border-[#262626] gap-4">
          <div>
            <h3 className="font-serif text-2xl font-black tracking-tight text-[#F8F6F1]">
              THE IT JOBS SHIFT
            </h3>
            <p className="text-[11px] text-neutral-400 mt-1 uppercase tracking-widest">
              2026 → 2030 | A Technology Workforce Intelligence Monograph
            </p>
          </div>

          <div className="text-[11px] text-neutral-400 flex items-center gap-4">
            <span>SPECIAL EDITION: VOL. IV</span>
            <span>•</span>
            <span className="text-[#C25E2E]">EDITORIAL RESEARCH</span>
          </div>
        </div>

        {/* Middle Columns: Research Context & Disclaimers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[11px] leading-relaxed text-neutral-400">
          <div>
            <span className="text-white font-bold block mb-2 uppercase tracking-wider">
              Research Context &amp; Citations
            </span>
            <p>
              Trend analysis informed by published global workforce intelligence, including the World Economic Forum <em>Future of Jobs Report 2025</em>. WEF research projects strong multi-year demand growth in artificial intelligence, big data architectures, cyber defense systems, and technological literacy through 2030.
            </p>
          </div>

          <div>
            <span className="text-white font-bold block mb-2 uppercase tracking-wider">
              Directional Index Disclaimer
            </span>
            <p>
              All quantitative curves and index figures presented (normalized to 2026 = 100) are illustrative directional indicators intended to visualize structural momentum and automation exposure. They do not constitute official employment censuses, government headcounts, or binding labor forecasts.
            </p>
          </div>

          <div>
            <span className="text-white font-bold block mb-2 uppercase tracking-wider">
              Editorial Standards
            </span>
            <p>
              This publication rejects both apocalyptic narratives of total employment collapse and speculative marketing hype. Engineering value remains anchored in rigorous system understanding, domain translation, and human verification.
            </p>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500">
          <div>
            <span>2026 → 2030 | THE IT JOBS SHIFT</span>
            <span className="mx-2">•</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
          <div>
            <span>WORKFORCE INTELLIGENCE &amp; TECHNOLOGY JOURNALISM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
