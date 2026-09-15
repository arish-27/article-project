import React from 'react';

export const FourPillarsBar: React.FC = () => {
  return (
    <section className="bg-obsidian text-neutral-300 py-10 border-b border-darkhairline" data-purpose="four-pillars">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          {/* Pillar 1 */}
          <div className="py-4 md:py-0 md:px-6 first:pl-0 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center font-mono text-xs text-bone">01</span>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-100 font-bold">TASK ATOMIZATION</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Jobs do not vanish overnight. Routine syntax generation, boilerplates, and manual QA shrink first; systems design expands.
            </p>
            <a className="text-[11px] font-mono text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1" href="#roles">
              <span>EXPLORE EVOLUTION</span> <span>→</span>
            </a>
          </div>

          {/* Pillar 2 */}
          <div className="py-4 md:py-0 md:px-6 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center font-mono text-xs text-bone">02</span>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-100 font-bold">GCC VALUE SHIFT</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              From low-cost back-office centers to high-agency engineering headquarters: GCCs dictate future compensation and hiring benchmarks.
            </p>
            <a className="text-[11px] font-mono text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1" href="#cities">
              <span>VIEW GCC DYNAMICS</span> <span>→</span>
            </a>
          </div>

          {/* Pillar 3 */}
          <div className="py-4 md:py-0 md:px-6 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center font-mono text-xs text-bone">03</span>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-100 font-bold">URBAN COMMERCE RIPPLE</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Tech engineer salaries fund secondary ecosystems: rental micro-markets, cloud kitchens, auto loans, and ride-hailing networks.
            </p>
            <a className="text-[11px] font-mono text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1" href="#cascade">
              <span>MAP THE CASCADE</span> <span>→</span>
            </a>
          </div>

          {/* Pillar 4 */}
          <div className="py-4 md:py-0 md:px-6 last:pr-0 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center font-mono text-xs text-bone">04</span>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-100 font-bold">TRI-CITY RESILIENCE</h3>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Bengaluru’s product focus, Hyderabad’s campus scale, and Chennai’s industrial SaaS showcase distinct adaptation curves.
            </p>
            <a className="text-[11px] font-mono text-neutral-300 hover:text-white uppercase tracking-wider flex items-center gap-1" href="#cities">
              <span>COMPARE CLUSTERS</span> <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
