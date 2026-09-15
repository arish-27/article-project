import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Section04NewRoles: React.FC = () => {
  // Exactly 8 roles with exactly ONE short sentence each, as instructed
  const roles = [
    {
      title: 'AI Engineer',
      sentence: 'Builds, fine-tunes, and deploys production machine learning models and foundational architectures.',
    },
    {
      title: 'AI Application Developer',
      sentence: 'Integrates foundation model APIs, context retrieval, and intelligent features directly into user-facing software.',
    },
    {
      title: 'AI Agent / Automation Engineer',
      sentence: 'Designs multi-step autonomous agent workflows that plan, execute, and self-correct tasks across enterprise systems.',
    },
    {
      title: 'AI Security Engineer',
      sentence: 'Protects model weights, prevents prompt injection vulnerabilities, and ensures defensive robustness against adversarial manipulation.',
    },
    {
      title: 'AI Governance Specialist',
      sentence: 'Audits algorithmic compliance, mitigates bias, and enforces enterprise risk standards across model lifecycles.',
    },
    {
      title: 'AI Product Engineer',
      sentence: 'Translates ambiguous business problems into functional, model-powered software solutions with measurable utility.',
    },
    {
      title: 'AI Infrastructure Engineer',
      sentence: 'Provisions and optimizes high-throughput GPU clusters, vector datastores, and low-latency inference runtimes.',
    },
    {
      title: 'AI Integration Engineer',
      sentence: 'Connects proprietary legacy business databases and operational ERP systems with modern intelligent agent frameworks.',
    },
  ];

  return (
    <section id="section-new-roles" className="py-20 md:py-24 border-b border-[#E5E0D8] bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 04
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              EMERGENT TITLES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-4">
            NEW ROLES ARE EMERGING
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            As automation compresses routine maintenance, organizational capital shifts toward eight specialized engineering functions.
          </p>
        </div>

        {/* Minimal Editorial List Layout (No bulky cards) */}
        <div className="border-t border-[#111111] divide-y divide-[#E5E0D8] bg-white">
          {roles.map((role, idx) => (
            <div
              key={role.title}
              className="py-4 px-5 sm:px-8 flex flex-col md:flex-row md:items-baseline justify-between gap-3 sm:gap-6 hover:bg-[#FAF8F5] transition-colors group"
            >
              {/* Role Title with Index */}
              <div className="flex items-baseline gap-4 md:w-1/3 flex-shrink-0">
                <span className="font-mono text-xs text-[#C25E2E] font-semibold">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#C25E2E] transition-colors">
                  {role.title}
                </h3>
              </div>

              {/* Exactly One Short Sentence Description */}
              <p className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed md:w-2/3">
                {role.sentence}
              </p>

              <div className="hidden md:flex items-center justify-end w-8 text-neutral-300 group-hover:text-neutral-900 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Footnote note */}
        <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>SOURCE: WORKFORCE TAXONOMY ANALYSIS • 2026–2030</span>
          <span>8 EMERGING SPECIALIZATIONS</span>
        </div>
      </div>
    </section>
  );
};
