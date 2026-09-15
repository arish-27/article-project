import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const Section05SkillShift: React.FC = () => {
  const shifts = [
    {
      domain: 'Coding',
      oldMode: 'Manual syntax typing & boilerplate assembly',
      newMode: 'AI-assisted coding with prompt & context precision',
      impact: '10x prototype velocity',
    },
    {
      domain: 'Testing',
      oldMode: 'Hand-crafted test assertions & manual regressions',
      newMode: 'AI-assisted testing & synthetic edge-case generation',
      impact: 'Broader invariant coverage',
    },
    {
      domain: 'Documentation',
      oldMode: 'Unmaintained manual wikis & static comments',
      newMode: 'AI-generated documentation + human verification',
      impact: 'Continuous architectural clarity',
    },
    {
      domain: 'Development',
      oldMode: 'Siloed feature implementations from scratch',
      newMode: 'AI-assisted development with composite services',
      impact: 'Higher system level leverage',
    },
    {
      domain: 'Automation',
      oldMode: 'Rigid bash cron scripts & brittle scrapers',
      newMode: 'AI agents + dynamic event-driven workflows',
      impact: 'Autonomous self-healing ops',
    },
  ];

  return (
    <section id="section-skill-shift" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 05
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              PARADIGM INVERSION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-6">
            THE SKILLS THAT BECOME MORE VALUABLE
          </h2>
          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            The core human leverage in technology is shifting from manual syntactical construction toward high-order system direction and critical verification.
          </p>
        </div>

        {/* Central Editorial Banner: Old Approach vs New Approach */}
        <div className="bg-white border border-[#E5E0D8] p-6 sm:p-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
            {/* Old Approach */}
            <div className="p-6 bg-[#F8F6F1] border border-[#EAE5DC] text-center sm:text-left">
              <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 block mb-2">
                LEGACY PARADIGM (PRE-2026)
              </span>
              <h3 className="font-mono text-sm uppercase text-neutral-400 font-bold mb-1">
                OLD APPROACH
              </h3>
              <p className="font-serif text-xl sm:text-2xl text-neutral-800 italic font-semibold">
                “Write everything manually”
              </p>
              <span className="inline-block mt-3 text-xs font-mono text-neutral-500">
                Focus: Line-by-line keyboard throughput
              </span>
            </div>

            {/* Divider Arrow for Desktop */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-900 text-white items-center justify-center z-10 font-bold shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Divider Arrow for Mobile */}
            <div className="md:hidden flex justify-center -my-3 z-10">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* New Approach */}
            <div className="p-6 bg-neutral-900 text-white border border-neutral-900 text-center sm:text-left shadow-md">
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#C25E2E] block mb-2 font-bold">
                EMERGING PARADIGM (2026 → 2030)
              </span>
              <h3 className="font-mono text-sm uppercase text-neutral-300 font-bold mb-1">
                NEW APPROACH
              </h3>
              <p className="font-serif text-xl sm:text-2xl text-[#F8F6F1] italic font-semibold">
                “Design + direct + verify AI-generated work”
              </p>
              <span className="inline-block mt-3 text-xs font-mono text-neutral-300">
                Focus: Architectural framing, specification &amp; verification
              </span>
            </div>
          </div>
        </div>

        {/* Visual Transformation Matrix across 5 Dimensions */}
        <div className="bg-white border border-[#E5E0D8]">
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-[#FAF8F5] border-b border-[#E5E0D8] font-mono text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
            <div className="col-span-2">Dimension</div>
            <div className="col-span-4">Manual Baseline</div>
            <div className="col-span-1 text-center">Shift</div>
            <div className="col-span-5">Augmented Direction</div>
          </div>

          <div className="divide-y divide-[#F0EBE1]">
            {shifts.map((s, idx) => (
              <div
                key={s.domain}
                className="p-5 sm:px-6 sm:py-4 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center hover:bg-[#FAF8F5] transition-colors"
              >
                {/* Domain */}
                <div className="sm:col-span-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-[#C25E2E] font-bold">0{idx + 1}</span>
                  <span className="font-serif text-base font-bold text-neutral-900">{s.domain}</span>
                </div>

                {/* Old Mode */}
                <div className="sm:col-span-4 font-mono text-xs text-neutral-500 flex items-center gap-1.5">
                  <span className="sm:hidden font-sans text-[10px] text-neutral-400 uppercase">From:</span>
                  <span>{s.oldMode}</span>
                </div>

                {/* Arrow */}
                <div className="sm:col-span-1 text-center flex justify-start sm:justify-center text-[#C25E2E]">
                  <ArrowRight className="w-4 h-4 hidden sm:block" />
                  <ArrowDown className="w-4 h-4 sm:hidden" />
                </div>

                {/* New Mode */}
                <div className="sm:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-sans text-xs sm:text-sm font-semibold text-neutral-900">
                    {s.newMode}
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 px-2 py-0.5 bg-[#F8F6F1] border border-[#E5E0D8] rounded-none self-start sm:self-auto">
                    {s.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Subnote */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-neutral-500">
          <span>THE RESULT: Developers operate as tech leads directing tireless synthetic implementers.</span>
          <span className="text-[#C25E2E] font-semibold">VERIFICATION REMAINS HUMAN</span>
        </div>
      </div>
    </section>
  );
};
