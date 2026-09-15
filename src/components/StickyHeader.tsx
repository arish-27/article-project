import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const StickyHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 Infrastructure', href: '#section-growth' },
    { label: '02 Demand Index', href: '#section-demand-graph' },
    { label: '03 Transformation', href: '#section-job-impact' },
    { label: 'Who Is Affected', href: '#section-who-is-affected' },
    { label: 'Urban Ripple', href: '#section-urban-ripple' },
    { label: '04 New Roles', href: '#section-new-roles' },
    { label: '05 Skill Shift', href: '#section-skill-shift' },
    { label: '06 2030 Roadmap', href: '#section-roadmap' },
    { label: '07 Principles', href: '#section-principles' },
    { label: '08 2030 Engineer', href: '#section-future-engineer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#E5E0D8] transition-all">
      {/* Top micro-masthead strip */}
      <div className="border-b border-[#EAE5DC] px-4 sm:px-8 py-1 hidden sm:flex items-center justify-between font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-neutral-800">VOL. IV • SPECIAL WORKFORCE INTELLIGENCE REPORT</span>
          <span className="text-[#E5E0D8]">|</span>
          <span>EST. RESEARCH SERIES</span>
        </div>
        <div className="flex items-center gap-4">
          <span>PROJECTED HORIZON: 2026 → 2030</span>
          <span className="text-[#E5E0D8]">|</span>
          <span className="text-[#C25E2E] font-medium">DISPATCH: EDITORIAL</span>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand / Publication Title */}
        <a href="#hero" className="flex items-baseline gap-2.5 group">
          <span className="font-serif font-extrabold text-xl sm:text-2xl tracking-tight text-neutral-900 group-hover:text-[#C25E2E] transition-colors">
            THE IT JOBS SHIFT
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] px-1.5 py-0.5 border border-[#E5E0D8] rounded text-neutral-600 bg-white/70">
            2026 → 2030
          </span>
        </a>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-[11px] tracking-wide text-neutral-600 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C25E2E] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#section-demand-graph"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#111111] text-[#F8F6F1] px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-wider hover:bg-[#C25E2E] transition-colors rounded-none border border-[#111111]"
          >
            <span>VIEW 2026–2030 GRAPH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-neutral-900 border border-[#E5E0D8] bg-[#FCFBF9] hover:bg-[#EFECE3] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <div className="w-full h-[2px] bg-transparent overflow-hidden">
        <div
          className="h-full bg-[#C25E2E] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFBF9] border-b border-[#E5E0D8] px-6 py-5 shadow-xl space-y-3 font-mono text-xs">
          <div className="flex justify-between items-center pb-2 border-b border-[#E5E0D8] text-[11px] text-neutral-500">
            <span>REPORT CONTENTS</span>
            <span className="text-[#C25E2E]">2026 → 2030</span>
          </div>
          <div className="grid grid-cols-1 gap-2.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-neutral-800 hover:text-[#C25E2E] border-b border-[#F0EBE1] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-neutral-400 text-[10px]">→</span>
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#section-demand-graph"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-[#111111] text-[#F8F6F1] py-2.5 font-bold tracking-wider hover:bg-[#C25E2E] transition-colors"
            >
              EXPLORE DEMAND GRAPH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
