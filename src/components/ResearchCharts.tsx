import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DataStatusBadge } from './DataStatusBadge';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from 'lucide-react';
import { getCompanyLogoComponent } from './CompanyLogos';

// 1. AI ADOPTION SCENARIO LINE CHART (2026 -> 2030)
export const AIAdoptionScenarioChart: React.FC = () => {
  const points = [
    { year: '2026', value: 68, status: 'INDUSTRY ESTIMATE', label: '68%', desc: 'Assisted Co-Pilots' },
    { year: '2027', value: 76, status: 'FORECAST', label: '76%', desc: 'Agentic Workflows' },
    { year: '2028', value: 84, status: 'FORECAST', label: '84%', desc: 'Autonomous Scaffolding' },
    { year: '2029', value: 90, status: 'SCENARIO', label: '90%', desc: 'Self-Healing Pods' },
    { year: '2030', value: 94, status: 'SCENARIO', label: '94%', desc: 'Universal AI Native' }
  ];

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 01 • SCENARIO TRAJECTORY
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            AI Adoption in Enterprise IT (2026 → 2030)
          </h4>
        </div>
        <DataStatusBadge status="SCENARIO" />
      </div>

      <p className="text-xs text-neutral-600 mb-4 font-sans leading-relaxed">
        Illustrates the projected transition from individual developer co-pilots in 2026 to autonomous multi-agent software engineering pipelines by 2030 across enterprise IT services and GCCs.
      </p>

      {/* SVG Responsive Line/Area Chart */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[480px]">
          <svg viewBox="0 0 520 200" className="w-full h-48">
            {/* Grid Lines */}
            <line x1="45" y1="20" x2="495" y2="20" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="45" y1="60" x2="495" y2="60" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="45" y1="100" x2="495" y2="100" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="45" y1="140" x2="495" y2="140" stroke="#E3DFD4" />

            {/* Y Axis Labels */}
            <text x="36" y="24" textAnchor="end" className="text-[10px] font-mono fill-neutral-500 font-bold">100%</text>
            <text x="36" y="64" textAnchor="end" className="text-[10px] font-mono fill-neutral-500 font-bold">75%</text>
            <text x="36" y="104" textAnchor="end" className="text-[10px] font-mono fill-neutral-500 font-bold">50%</text>
            <text x="36" y="144" textAnchor="end" className="text-[10px] font-mono fill-neutral-500 font-bold">25%</text>

            {/* Shaded Area under curve */}
            <polygon
              points="65,68 165,56 265,42 365,32 465,24 465,140 65,140"
              fill="rgba(201, 122, 62, 0.15)"
            />

            {/* Line Path */}
            <polyline
              points="65,68 165,56 265,42 365,32 465,24"
              fill="none"
              stroke="#C97A3E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data Points and Labels */}
            {points.map((pt, i) => {
              const xCoords = [65, 165, 265, 365, 465];
              const yCoords = [68, 56, 42, 32, 24];
              const x = xCoords[i];
              const y = yCoords[i];

              return (
                <g key={pt.year} className="group cursor-pointer">
                  {/* Vertical drop line */}
                  <line x1={x} y1={y} x2={x} y2="140" stroke="#C97A3E" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
                  {/* Point circle */}
                  <circle cx={x} cy={y} r="6" fill="#111111" stroke="#C97A3E" strokeWidth="2.5" />
                  <circle cx={x} cy={y} r="2.5" fill="#F6F4EE" />
                  {/* Value text above */}
                  <rect x={x - 22} y={y - 24} width="44" height="18" fill="#111111" rx="2" />
                  <text x={x} y={y - 12} textAnchor="middle" className="text-[10px] font-mono font-bold fill-bone">
                    {pt.label}
                  </text>
                  {/* Year text below axis */}
                  <text x={x} y="160" textAnchor="middle" className="text-[11px] font-mono font-bold fill-ink">
                    {pt.year}
                  </text>
                  <text x={x} y="174" textAnchor="middle" className="text-[8px] font-mono fill-neutral-500 uppercase">
                    {pt.desc}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-hairline flex flex-wrap justify-between items-center text-[0.65rem] font-mono text-neutral-500">
        <span>SOURCE: GARTNER / NASSCOM / MACRO SCENARIO EQUATION</span>
        <span className="italic">* Modeled illustrative adoption curve; not an official measured point forecast.</span>
      </div>
    </div>
  );
};

// 2. WORKFORCE TASK COMPOSITION STACKED BAR (2026 vs 2030)
export const WorkforceCompositionChart: React.FC = () => {
  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 02 • COMPOSITION SHIFT
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            IT Workforce Task Allocation: 2026 vs 2030
          </h4>
        </div>
        <DataStatusBadge status="SCENARIO" />
      </div>

      <div className="space-y-6 font-mono text-xs">
        {/* 2026 Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[0.7rem] font-bold">
            <span className="text-ink">2026 CURRENT BASELINE (~5.43M)</span>
            <span className="text-neutral-500">48% Manual Syntax Coding</span>
          </div>
          <div className="h-9 w-full flex border border-hairline overflow-hidden text-[0.7rem] text-bone font-bold shadow-inner">
            <div
              style={{ width: '48%' }}
              className="bg-neutral-800 flex items-center justify-center truncate px-2 hover:opacity-90 transition-opacity"
              title="Traditional Manual Coding/QA (48%)"
            >
              <span>Traditional Syntax (48%)</span>
            </div>
            <div
              style={{ width: '28%' }}
              className="bg-amber-800 flex items-center justify-center truncate px-2 hover:opacity-90 transition-opacity"
              title="AI-Assisted Work (28%)"
            >
              <span>AI-Assisted (28%)</span>
            </div>
            <div
              style={{ width: '14%' }}
              className="bg-emerald-800 flex items-center justify-center truncate px-1 hover:opacity-90 transition-opacity"
              title="Systems & Architecture (14%)"
            >
              <span>14%</span>
            </div>
            <div
              style={{ width: '10%' }}
              className="bg-purple-800 flex items-center justify-center truncate px-1 hover:opacity-90 transition-opacity"
              title="Reskilling / Training (10%)"
            >
              <span>10%</span>
            </div>
          </div>
          {/* Sub-label breakdown */}
          <div className="grid grid-cols-4 gap-1 text-[10px] text-neutral-600">
            <span className="truncate">Syntax: 48%</span>
            <span className="truncate">AI-Assist: 28%</span>
            <span className="truncate">Systems: 14%</span>
            <span className="truncate">Skilling: 10%</span>
          </div>
        </div>

        {/* 2030 Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[0.7rem] font-bold">
            <span className="text-ink">2030 SCENARIO PROJECTION (~6.0M)</span>
            <span className="text-amberAccent">74% AI-Native &amp; Systems Architecture</span>
          </div>
          <div className="h-9 w-full flex border border-hairline overflow-hidden text-[0.7rem] text-bone font-bold shadow-inner">
            <div
              style={{ width: '12%' }}
              className="bg-neutral-800 flex items-center justify-center truncate px-1 hover:opacity-90 transition-opacity"
              title="Legacy Maintenance (12%)"
            >
              <span>12%</span>
            </div>
            <div
              style={{ width: '42%' }}
              className="bg-amber-800 flex items-center justify-center truncate px-2 hover:opacity-90 transition-opacity"
              title="AI Agent Orchestration & Review (42%)"
            >
              <span>AI Agents (42%)</span>
            </div>
            <div
              style={{ width: '32%' }}
              className="bg-emerald-800 flex items-center justify-center truncate px-2 hover:opacity-90 transition-opacity"
              title="Systems, Security & Core Architecture (32%)"
            >
              <span>Architecture (32%)</span>
            </div>
            <div
              style={{ width: '14%' }}
              className="bg-purple-800 flex items-center justify-center truncate px-1 hover:opacity-90 transition-opacity"
              title="Continuous Reskilling (14%)"
            >
              <span>14%</span>
            </div>
          </div>
          {/* Sub-label breakdown */}
          <div className="grid grid-cols-4 gap-1 text-[10px] text-neutral-600">
            <span className="truncate">Legacy: 12%</span>
            <span className="truncate">AI Agents: 42%</span>
            <span className="truncate">Architect: 32%</span>
            <span className="truncate">Skilling: 14%</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 pt-3 border-t border-hairline text-[0.65rem] font-mono text-neutral-700">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-neutral-800 inline-block border border-neutral-700"></span>
          <span>Legacy Syntax (Manual)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-amber-800 inline-block border border-amber-700"></span>
          <span>AI-Assisted / Agents</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-emerald-800 inline-block border border-emerald-700"></span>
          <span>Architecture &amp; Security</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-purple-800 inline-block border border-purple-700"></span>
          <span>Reskilling &amp; Rotation</span>
        </div>
      </div>
    </div>
  );
};

// COMPANY LOGO COMPONENT WITH ORIGINAL VECTOR LOGOS
const CompanyLogoBadge: React.FC<{ name: string; domain: string; color: string }> = ({ name, domain, color }) => {
  const SvgLogo = getCompanyLogoComponent(name);
  const [imgError, setImgError] = useState(false);

  if (SvgLogo) {
    return (
      <div className="h-11 w-32 bg-white px-2.5 py-1.5 rounded border border-hairline/90 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
        <SvgLogo className="w-full h-full max-h-8" />
      </div>
    );
  }

  const initials = name
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="h-11 w-32 bg-white px-2.5 py-1.5 rounded border border-hairline/90 shadow-xs flex items-center justify-center overflow-hidden shrink-0">
      {!imgError ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} brand logo`}
          className="w-full h-full object-contain"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-full rounded flex items-center justify-center font-mono font-bold text-xs text-white uppercase tracking-wider"
          style={{ backgroundColor: color || '#1c1c1c' }}
        >
          {initials}
        </div>
      )}
    </div>
  );
};


// 3. COMPANY WORKFORCE & AI READINESS SLIDING CAROUSEL
export const CompanyComparisonBarChart: React.FC = () => {
  const topCompanies = [
    { name: 'Tata Consultancy Services (TCS)', domain: 'tcs.com', global: 601, india: 470, aiTrained: 350, tier: 'Tier-1 IT', color: '#004F9E', focus: 'TCS AI WisdomNext™ Suite' },
    { name: 'Infosys', domain: 'infosys.com', global: 317, india: 250, aiTrained: 270, tier: 'Tier-1 IT', color: '#007CC3', focus: 'Infosys Topaz™ AI Platform' },
    { name: 'Wipro', domain: 'wipro.com', global: 234, india: 180, aiTrained: 180, tier: 'Tier-1 IT', color: '#E02B20', focus: 'Wipro ai360 Ecosystem' },
    { name: 'HCLTech', domain: 'hcltech.com', global: 227, india: 185, aiTrained: 120, tier: 'Tier-1 IT', color: '#0054A6', focus: 'AI Force™ & Foundry Labs' },
    { name: 'Cognizant', domain: 'cognizant.com', global: 344, india: 250, aiTrained: 100, tier: 'Tier-1 IT', color: '#0033A0', focus: 'Synapse AI Skilling Academy' },
    { name: 'Accenture', domain: 'accenture.com', global: 774, india: 300, aiTrained: 80, tier: 'Global Tech', color: '#A100FF', focus: 'Enterprise GenAI Architecture' },
    { name: 'Capgemini', domain: 'capgemini.com', global: 340, india: 175, aiTrained: 100, tier: 'Global Tech', color: '#0070AD', focus: 'RAISE Enterprise GenAI Studio' },
    { name: 'Tech Mahindra', domain: 'techmahindra.com', global: 148, india: 115, aiTrained: 60, tier: 'Tier-1 IT', color: '#E31837', focus: 'Project Indus Indic LLMs' },
    { name: 'IBM (India Systems & Consulting)', domain: 'ibm.com', global: 280, india: 100, aiTrained: 85, tier: 'Global Tech', color: '#0530AD', focus: 'watsonx™ Orchestration' },
    { name: 'LTIMindtree', domain: 'ltimindtree.com', global: 82, india: 68, aiTrained: 50, tier: 'Tier-1 IT', color: '#1D2A44', focus: 'Canvas.ai Delivery Framework' },
    { name: 'Mphasis', domain: 'mphasis.com', global: 33, india: 27, aiTrained: 22, tier: 'Specialized Mid-Tier', color: '#D8232A', focus: 'Mphasis.ai Cognitive Unit' },
    { name: 'Persistent Systems', domain: 'persistent.com', global: 24, india: 20, aiTrained: 18, tier: 'Specialized Mid-Tier', color: '#F37021', focus: 'SASVA™ Acceleration Platform' },
    { name: 'DXC Technology', domain: 'dxc.com', global: 125, india: 40, aiTrained: 28, tier: 'Global Tech', color: '#5F259F', focus: 'DXC Platform X™ Automation' },
    { name: 'Oracle (India IDC & Cloud)', domain: 'oracle.com', global: 160, india: 45, aiTrained: 42, tier: 'Global Tech', color: '#C74634', focus: 'OCI Supercluster & GenAI' },
    { name: 'Microsoft (India R&D)', domain: 'microsoft.com', global: 228, india: 20, aiTrained: 20, tier: 'Global Tech', color: '#00A4EF', focus: 'Copilot & Azure AI Studio' },
    { name: 'Amazon (AWS India)', domain: 'amazon.com', global: 1500, india: 45, aiTrained: 40, tier: 'Global Tech', color: '#FF9900', focus: 'Bedrock & Q Developer Hubs' },
    { name: 'Google (Alphabet India)', domain: 'google.com', global: 180, india: 15, aiTrained: 15, tier: 'Global Tech', color: '#4285F4', focus: 'Gemini & Vertex AI Labs' },
    { name: 'Zoho Corporation', domain: 'zoho.com', global: 16, india: 15, aiTrained: 15, tier: 'Product & SaaS', color: '#EA212D', focus: 'Zia AI & In-House Models' },
    { name: 'Freshworks', domain: 'freshworks.com', global: 5.2, india: 4.2, aiTrained: 4.0, tier: 'Product & SaaS', color: '#FF6B35', focus: 'Freddy AI Suite & Copilot' },
    { name: 'Coforge', domain: 'coforge.com', global: 26.5, india: 20, aiTrained: 16, tier: 'Specialized Mid-Tier', color: '#0084CA', focus: 'Quasar™ AI Platform' },
    { name: 'Hexaware Technologies', domain: 'hexaware.com', global: 31, india: 24, aiTrained: 19, tier: 'Specialized Mid-Tier', color: '#005A9C', focus: 'Tensai® Intelligent Automation' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);

  // Determine items visible per view based on typical viewport
  const totalItems = topCompanies.length;

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Continuous auto play sliding carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 2200);
    return () => clearInterval(timer);
  }, [isAutoPlay, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-hairline pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
              BENCHMARK 03 • CORPORATE WORKFORCE AI CERTIFICATION
            </span>
            <span className="bg-amberAccent/15 text-amber-800 text-[0.6rem] font-mono px-2 py-0.5 font-bold uppercase border border-amberAccent/30 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              SLIDING CAROUSEL
            </span>
          </div>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink mt-0.5">
            India Workforce AI-Trained &amp; Certified Percentage (Top IT Employers)
          </h4>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            type="button"
            onClick={() => setIsAutoPlay(prev => !prev)}
            title={isAutoPlay ? 'Pause auto-slide' : 'Resume auto-slide'}
            className="p-1.5 border border-hairline bg-bone hover:border-ink text-neutral-600 transition-colors"
            aria-label={isAutoPlay ? 'Pause carousel' : 'Play carousel'}
          >
            {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <span className="text-[0.68rem] text-neutral-500 font-bold px-1">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
          </span>

          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center justify-center w-7 h-7 bg-bone border border-hairline text-ink hover:bg-ink hover:text-bone transition-all cursor-pointer"
            aria-label="Previous company slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center w-7 h-7 bg-bone border border-hairline text-ink hover:bg-ink hover:text-bone transition-all cursor-pointer"
            aria-label="Next company slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-xs text-neutral-600 mb-4 font-sans leading-relaxed">
        Swipe or browse through benchmarked tech employers to explore reported corporate AI readiness, headcount scale, and verified AI certifications across India delivery centres.
      </p>

      {/* Sliding Carousel Track Container */}
      <div
        className="overflow-hidden relative select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out gap-3.5"
          style={{
            transform: `translateX(-${currentIndex * 260}px)`
          }}
        >
          {topCompanies.map((c) => {
            const pct = Math.min(100, Math.round((c.aiTrained / c.india) * 100));

            return (
              <div
                key={c.name}
                className="w-[250px] shrink-0 p-4 bg-bone border border-hairline/90 hover:border-ink transition-all flex flex-col justify-between shadow-xs group"
              >
                {/* Card Top: Logo & Meta */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <CompanyLogoBadge name={c.name} domain={c.domain} color={c.color} />
                    <span className="text-[0.62rem] font-mono text-neutral-500 uppercase bg-cream px-1.5 py-0.5 border border-hairline">
                      {c.tier}
                    </span>
                  </div>

                  <h5 className="font-serif font-bold text-ink text-sm truncate group-hover:text-amber-800 transition-colors">
                    {c.name}
                  </h5>
                  <p className="text-[0.65rem] font-mono text-neutral-500 truncate mb-3">
                    {c.focus}
                  </p>

                  {/* Headcount Specs */}
                  <div className="space-y-1 text-[0.68rem] font-mono text-neutral-600 bg-cream p-2 border border-hairline/60">
                    <div className="flex justify-between">
                      <span>India Base:</span>
                      <strong className="text-ink font-bold">{c.india}K</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Certified:</span>
                      <strong className="text-amber-800 font-bold">{c.aiTrained}K</strong>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Big Percentage Stat */}
                <div className="mt-3.5 pt-2.5 border-t border-hairline flex items-baseline justify-between">
                  <span className="text-[0.62rem] font-mono font-bold text-neutral-500 uppercase">
                    AI Trained
                  </span>
                  <span className="font-mono text-2xl font-extrabold text-amberAccent">
                    {pct}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex justify-center items-center gap-1.5 mt-5 pt-3 border-t border-hairline/70">
        {topCompanies.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentIndex
                ? 'w-7 bg-ink'
                : 'w-2 bg-neutral-300 hover:bg-neutral-500'
            }`}
            aria-label={`Jump to company slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Footer Meta Note */}
      <div className="mt-3 flex flex-wrap justify-between items-center text-[0.65rem] font-mono text-neutral-500">
        <span>SOURCE: COMPANY QUARTERLY EARNINGS CALLS &amp; DISCLOSURES (FY24–FY26)</span>
        <span className="italic">* Percentage computed as reported AI-certified headcount over India workforce.</span>
      </div>
    </div>
  );
};

// 4. BENCH RATE VS UTILIZATION TREND CHART (2021 -> 2030)
export const BenchTrendVisualChart: React.FC = () => {
  const points = [
    { period: '2021', util: 88.5, bench: 11.5, status: 'REPORTED' },
    { period: '2022', util: 85.0, bench: 15.0, status: 'REPORTED' },
    { period: '2023', util: 81.0, bench: 19.0, status: 'REPORTED' },
    { period: '2024', util: 84.0, bench: 16.0, status: 'REPORTED' },
    { period: '2026', util: 85.2, bench: 14.8, status: 'ESTIMATED' },
    { period: '2028', util: 88.0, bench: 12.0, status: 'SCENARIO' },
    { period: '2030', util: 90.5, bench: 9.5, status: 'SCENARIO' }
  ];

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 04 • BENCH DYNAMICS
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            Billable Utilization Rate vs Bench Buffer (2021 → 2030)
          </h4>
        </div>
        <DataStatusBadge status="INDUSTRY ESTIMATE" />
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[500px]">
          <svg viewBox="0 0 520 180" className="w-full h-44">
            {/* Grid Lines */}
            <line x1="40" y1="20" x2="490" y2="20" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="40" y1="70" x2="490" y2="70" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="40" y1="120" x2="490" y2="120" stroke="#E3DFD4" strokeDasharray="3,3" />

            {/* Labels */}
            <text x="32" y="24" textAnchor="end" className="text-[9px] font-mono fill-neutral-500">100%</text>
            <text x="32" y="74" textAnchor="end" className="text-[9px] font-mono fill-neutral-500">50%</text>
            <text x="32" y="124" textAnchor="end" className="text-[9px] font-mono fill-neutral-500">0%</text>

            {/* Bars for Each Year */}
            {points.map((pt, i) => {
              const x = 60 + i * 65;
              const utilHeight = (pt.util / 100) * 110;
              const benchHeight = (pt.bench / 100) * 110;

              return (
                <g key={pt.period} className="group cursor-pointer">
                  {/* Utilization Bar (Bottom) */}
                  <rect
                    x={x - 14}
                    y={130 - utilHeight}
                    width="28"
                    height={utilHeight}
                    fill="#1C1C1C"
                    rx="1"
                  />
                  {/* Bench Bar (Stacked Top) */}
                  <rect
                    x={x - 14}
                    y={130 - utilHeight - benchHeight}
                    width="28"
                    height={benchHeight}
                    fill="#C97A3E"
                    rx="1"
                  />
                  {/* Labels */}
                  <text x={x} y={130 - utilHeight - benchHeight - 6} textAnchor="middle" className="text-[9px] font-mono font-bold fill-amberAccent">
                    {pt.bench}%
                  </text>
                  <text x={x} y="150" textAnchor="middle" className="text-[10px] font-mono font-bold fill-ink">
                    {pt.period}
                  </text>
                  <text x={x} y="164" textAnchor="middle" className="text-[8px] font-mono fill-neutral-500">
                    {pt.util}% Util
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-3 pt-2 border-t border-hairline text-[0.65rem] font-mono text-neutral-600">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-neutral-800 inline-block"></span>
          <span>Billable Utilization (%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 bg-amberAccent inline-block"></span>
          <span>Non-Allocated Bench Buffer (%)</span>
        </div>
      </div>
    </div>
  );
};

// 5. TRI-CITY MULTI-METRIC RADAR / COMPARISON BARS
export const TriCityComparisonBars: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);

  const cityHighlights = [
    {
      id: 'che',
      name: 'CHENNAI',
      role: 'PRIMARY DOSSIER SITE',
      tagline: 'Industrial Tech & SaaS Powerhouse',
      headcount: '650,000',
      aiGrowth: '+18% YoY',
      resilience: '79 / 100',
      color: 'border-amberAccent bg-amber-50/40 text-amberAccent',
      badgeBg: 'bg-amberAccent text-bone',
      primaryStrength: 'Automotive embedded software, deep engineering & global SaaS (Zoho/Freshworks).'
    },
    {
      id: 'blr',
      name: 'BENGALURU',
      role: 'BENCHMARK CAPITAL',
      tagline: 'Scale, Startups & Global GCCs',
      headcount: '1,650,000',
      aiGrowth: '+32% YoY',
      resilience: '92 / 100',
      color: 'border-hairline bg-bone text-ink',
      badgeBg: 'bg-ink text-bone',
      primaryStrength: 'Highest pure AI venture deployment, 550+ global captive GCCs & frontier LLM research.'
    },
    {
      id: 'hyd',
      name: 'HYDERABAD',
      role: 'HIGH-GROWTH HUB',
      tagline: 'Cloud Infrastructure & Enterprise R&D',
      headcount: '1,050,000',
      aiGrowth: '+26% YoY',
      resilience: '85 / 100',
      color: 'border-hairline bg-bone text-ink',
      badgeBg: 'bg-neutral-800 text-bone',
      primaryStrength: 'Mega hyperscaler cloud campuses (AWS/Microsoft/Google) & scalable Cyberabad SEZ nodes.'
    }
  ];

  const metrics = [
    {
      id: 'scale',
      label: 'IT Workforce Scale (Formal IT & GCC)',
      subtitle: 'Normalized against regional tech GDP and verified enterprise payrolls',
      che: 39.4,
      blr: 100,
      hyd: 63.6,
      cheVal: '650,000',
      blrVal: '1,650,000',
      hydVal: '1,050,000',
      cheNote: 'Dense engineering hubs along OMR & Guindy',
      leader: 'Bengaluru (2.54x Chennai scale)'
    },
    {
      id: 'growth',
      label: 'AI & Deep-Tech Hiring Velocity',
      subtitle: 'YoY growth in machine learning, agent orchestration, and MLOps vacancies',
      che: 56,
      blr: 100,
      hyd: 81,
      cheVal: '+18% YoY',
      blrVal: '+32% YoY',
      hydVal: '+26% YoY',
      cheNote: 'Concentrated in vertical SaaS & Auto IoT',
      leader: 'Bengaluru (+32% annual expansion)'
    },
    {
      id: 'vulnerability',
      label: 'Campus Intake & Freshers Vulnerability',
      subtitle: 'Percentage of legacy entry-level roles vulnerable to immediate generative AI automation',
      che: 74,
      blr: 58,
      hyd: 68,
      cheVal: '74% (High Exposure)',
      blrVal: '58% (Moderate Exposure)',
      hydVal: '68% (High Exposure)',
      cheNote: 'Higher share of legacy manual testing & ERP maintenance',
      leader: 'Bengaluru (Lowest vulnerability due to product density)'
    },
    {
      id: 'diversification',
      label: 'Industrial & GCC Ecosystem Diversification',
      subtitle: 'Breadth of non-pure-services sectors (Automotive, Hardware, SaaS, FinTech, Life Sciences)',
      che: 92,
      blr: 96,
      hyd: 88,
      cheVal: '#1 Auto/SaaS Anchor',
      blrVal: '550+ Global GCCs',
      hydVal: 'Cloud Mega-Hub',
      cheNote: 'Unmatched EV, avionics & vertical software moats',
      leader: 'Chennai (#1 National Auto-Tech & SaaS Hub)'
    },
    {
      id: 'resilience',
      label: 'Composite Urban Tech Resilience Index',
      subtitle: 'Multi-factor score spanning talent redeployment, cost-of-living buffer & wage sustainability',
      che: 79,
      blr: 92,
      hyd: 85,
      cheVal: '79 / 100 (Balanced)',
      blrVal: '92 / 100 (Superior)',
      hydVal: '85 / 100 (Strong)',
      cheNote: 'High stability anchored by lower real-estate inflation',
      leader: 'Bengaluru (92/100 composite index)'
    }
  ];

  return (
    <div className="bg-cream p-5 md:p-8 border border-hairline shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
              SCREEN 08 • DIRECT TRI-CITY COMPARATIVE BENCHMARK
            </span>
            <DataStatusBadge status="ESTIMATED" />
          </div>
          <h4 className="font-serif font-black text-xl md:text-2xl text-ink mt-1">
            Chennai (Primary Focus) vs Bengaluru vs Hyderabad
          </h4>
          <p className="font-sans text-xs text-neutral-600 mt-1 max-w-3xl">
            A granular comparative analysis benchmarking the structural resilience, AI workforce shift, entry-level vulnerability, and economic diversification across Southern India’s three premier IT epicenters.
          </p>
        </div>
      </div>

      {/* Top Tri-City Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cityHighlights.map(c => (
          <div
            key={c.id}
            className={`p-4 border transition-all ${c.id === 'che' ? 'bg-bone border-amberAccent/60 shadow-xs' : 'bg-bone border-hairline'}`}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className={`font-mono text-[0.65rem] font-bold px-2 py-0.5 ${c.badgeBg}`}>
                {c.name}
              </span>
              <span className="font-mono text-[0.6rem] text-neutral-500 uppercase font-semibold">
                {c.role}
              </span>
            </div>
            <div className="font-serif font-bold text-ink text-sm mb-1">{c.tagline}</div>
            <div className="grid grid-cols-3 gap-1 my-3 py-2 border-y border-hairline text-center font-mono text-[0.68rem]">
              <div>
                <span className="text-neutral-500 block text-[0.6rem]">HEADCOUNT</span>
                <span className="font-bold text-ink">{c.headcount}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[0.6rem]">AI GROWTH</span>
                <span className="font-bold text-ink">{c.aiGrowth}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[0.6rem]">RESILIENCE</span>
                <span className="font-bold text-amberAccent">{c.resilience}</span>
              </div>
            </div>
            <p className="font-sans text-[0.72rem] text-neutral-600 leading-relaxed">
              {c.primaryStrength}
            </p>
          </div>
        ))}
      </div>

      {/* 5 Deep Comparative Metric Cards */}
      <div className="space-y-4 pt-2">
        <span className="font-mono text-xs uppercase font-bold text-neutral-500 tracking-widest block">
          STRUCTURAL BENCHMARK PARAMETERS:
        </span>

        <div className="grid grid-cols-1 gap-4 font-mono text-xs">
          {metrics.map((m, idx) => (
            <div
              key={m.id}
              className="p-4 md:p-5 bg-bone border border-hairline hover:border-ink transition-all space-y-3.5 shadow-xs"
            >
              {/* Metric Title & Leader */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-hairline pb-2.5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400 font-bold text-xs">0{idx + 1}.</span>
                    <h5 className="font-serif font-bold text-base text-ink">{m.label}</h5>
                  </div>
                  <p className="font-sans text-xs text-neutral-600 mt-0.5">{m.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-[0.62rem] text-neutral-500 uppercase block font-mono">CATEGORY LEADER</span>
                  <span className="text-xs font-bold text-ink bg-cream px-2.5 py-0.5 border border-hairline inline-block mt-0.5">
                    {m.leader}
                  </span>
                </div>
              </div>

              {/* Progress Bars for 3 Cities */}
              <div className="space-y-2.5 pt-1">
                {/* Chennai */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  <div className="sm:col-span-3 flex items-center justify-between sm:justify-start gap-1.5">
                    <span className="font-bold text-amberAccent text-xs">★ CHENNAI</span>
                    <span className="text-[0.6rem] bg-amber-50 text-amber-900 border border-amber-200 px-1 py-0.2">PRIMARY</span>
                  </div>
                  <div className="sm:col-span-6 bg-parchment h-4 border border-hairline overflow-hidden relative">
                    <div
                      className="bg-amberAccent h-full transition-all duration-700 flex items-center justify-end pr-1.5"
                      style={{ width: `${Math.max(12, m.che)}%` }}
                    ></div>
                  </div>
                  <div className="sm:col-span-3 text-left sm:text-right font-bold text-ink text-xs">
                    {m.cheVal}
                  </div>
                </div>

                {/* Bengaluru */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  <div className="sm:col-span-3 font-bold text-neutral-700 text-xs">
                    BENGALURU
                  </div>
                  <div className="sm:col-span-6 bg-parchment h-3.5 border border-hairline overflow-hidden">
                    <div
                      className="bg-neutral-800 h-full transition-all duration-700"
                      style={{ width: `${Math.max(12, m.blr)}%` }}
                    ></div>
                  </div>
                  <div className="sm:col-span-3 text-left sm:text-right font-medium text-neutral-700 text-xs">
                    {m.blrVal}
                  </div>
                </div>

                {/* Hyderabad */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  <div className="sm:col-span-3 font-bold text-neutral-700 text-xs">
                    HYDERABAD
                  </div>
                  <div className="sm:col-span-6 bg-parchment h-3.5 border border-hairline overflow-hidden">
                    <div
                      className="bg-neutral-600 h-full transition-all duration-700"
                      style={{ width: `${Math.max(12, m.hyd)}%` }}
                    ></div>
                  </div>
                  <div className="sm:col-span-3 text-left sm:text-right font-medium text-neutral-700 text-xs">
                    {m.hydVal}
                  </div>
                </div>
              </div>

              {/* Chennai Context Footer */}
              <div className="pt-2 border-t border-hairline flex flex-wrap items-center justify-between gap-2 text-[0.7rem] font-sans text-neutral-600">
                <div>
                  <span className="font-mono font-bold text-ink uppercase text-[0.65rem]">CHENNAI PROFILE: </span>
                  <span>{m.cheNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 6. NEW AI ROLES GROWTH VELOCITY RANKING CHART
export const NewAIRolesGrowthChart: React.FC = () => {
  const rolesGrowth = [
    { role: 'AI Agent Developer', growth: 95, tier: 'CRITICAL DEMAND', cat: 'Core AI & Agents', desc: 'Builds multi-step AI systems that execute complex end-to-end coding workflows.' },
    { role: 'LLM Engineer', growth: 92, tier: 'CRITICAL DEMAND', cat: 'Core AI Models', desc: 'Fine-tunes large language models with company knowledge and specialized datasets.' },
    { role: 'AI Security Engineer', growth: 88, tier: 'CRITICAL DEMAND', cat: 'Security & Safety', desc: 'Defends AI pipelines against data prompt injections, model poisoning, and leaks.' },
    { role: 'MLOps Engineer', growth: 86, tier: 'CRITICAL DEMAND', cat: 'Cloud Infrastructure', desc: 'Deploys, monitors, and scales automated AI models on live enterprise servers.' },
    { role: 'AI Infrastructure Engineer', growth: 84, tier: 'CRITICAL DEMAND', cat: 'Cloud Infrastructure', desc: 'Optimizes high-performance GPU clusters, vector databases, and model latency.' },
    { role: 'AI Engineer', growth: 82, tier: 'CRITICAL DEMAND', cat: 'Core AI & Software', desc: 'Connects modern generative AI APIs and reasoning layers into business applications.' },
    { role: 'AI Solutions Architect', growth: 80, tier: 'CRITICAL DEMAND', cat: 'Enterprise Strategy', desc: 'Designs end-to-end technical blueprints for how large organizations adopt AI safely.' },
    { role: 'AI Product Manager', growth: 76, tier: 'RAPID EXPANSION', cat: 'Product & Leadership', desc: 'Translates real user problems into AI-powered software features and user experiences.' },
    { role: 'AI Cybersecurity Specialist', growth: 75, tier: 'CRITICAL DEMAND', cat: 'Security & Defense', desc: 'Protects enterprise systems as AI-powered cyber threats and automated attacks grow.' },
    { role: 'AI Automation Engineer', growth: 72, tier: 'RAPID EXPANSION', cat: 'Process Automation', desc: 'Automates manual repetitive back-office workflows using intelligent AI bots.' },
    { role: 'AI Trainer / Evaluator', growth: 68, tier: 'RAPID EXPANSION', cat: 'Core AI & Quality', desc: 'Tests and grades AI outputs for factual correctness, bias, and business accuracy.' },
    { role: 'AI Governance Specialist', growth: 65, tier: 'EMERGING STRATEGIC', cat: 'Ethics & Compliance', desc: 'Ensures corporate AI deployments follow global privacy, safety, and legal standards.' }
  ];

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 06 • EMERGING JOB VELOCITY
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            Relative Growth Velocity Across 12 New AI Titles (2026 → 2030)
          </h4>
        </div>
        <DataStatusBadge status="FORECAST" />
      </div>

      <p className="text-xs text-neutral-600 font-sans leading-relaxed">
        Compares expected hiring demand momentum and creation rate across newly emerging AI job specializations in Indian IT and Global Capability Centres (GCCs).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
        {rolesGrowth.map((r, i) => (
          <div
            key={r.role}
            className="p-3 bg-bone border border-hairline hover:border-ink hover:bg-cream transition-all flex flex-col justify-between gap-2 shadow-xs rounded-xs"
          >
            <div>
              {/* Card Top: Index, Role Title, Category, and Score */}
              <div className="flex justify-between items-start gap-2 mb-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="w-5 h-5 rounded-xs bg-ink text-bone font-bold text-[10px] flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif font-bold text-ink text-sm leading-tight">
                    {r.role}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-amberAccent shrink-0 bg-amber-50 px-2 py-0.5 border border-amber-200 rounded-xs">
                  {r.growth}% Velocity
                </span>
              </div>

              {/* Category & Description */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[0.58rem] uppercase font-bold text-neutral-500 bg-neutral-100 px-1.5 py-0.2 border border-neutral-200 rounded-xs">
                  {r.cat}
                </span>
              </div>
              <p className="text-[0.68rem] font-sans text-neutral-600 leading-snug">
                {r.desc}
              </p>
            </div>

            {/* Standard Theme Progress Bar */}
            <div className="pt-1.5 border-t border-hairline/60">
              <div className="w-full bg-neutral-200/90 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amberAccent transition-all duration-300 rounded-full"
                  style={{ width: `${r.growth}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Standard Palette Footer Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-hairline text-[0.65rem] font-mono text-neutral-600">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amberAccent inline-block"></span>
            <span className="font-bold text-ink">High Growth Velocity (85%–95%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ink inline-block"></span>
            <span className="font-bold text-ink">Rapid Expansion (70%–84%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-500 inline-block"></span>
            <span className="font-bold text-ink">Emerging Strategic (65%–69%)</span>
          </div>
        </div>
        <span className="text-neutral-400">Projected demand momentum across 2026–2030</span>
      </div>
    </div>
  );
};

// 7. FRESHER OPPORTUNITY & COMPETITION INDEX CHART
export const FresherOpportunityChart: React.FC = () => {
  const points = [
    { year: '2021', intake: 95, competition: 35, label: 'Pandemic Peak Surge' },
    { year: '2023', intake: 60, competition: 65, label: 'Headcount Normalization' },
    { year: '2024', intake: 52, competition: 78, label: 'Aptitude Filter Surge' },
    { year: '2026', intake: 48, competition: 88, label: 'AI Skills Filter Mandate' },
    { year: '2028', intake: 42, competition: 92, label: 'Project-Proof Intake' },
    { year: '2030', intake: 38, competition: 95, label: 'Multi-Skilled High Leverage' }
  ];

  const getCoordinates = (index: number, val: number) => {
    const x = 55 + index * 75;
    const y = 145 - (val / 100) * 115;
    return { x, y };
  };

  const intakePolyline = points
    .map((pt, i) => `${getCoordinates(i, pt.intake).x},${getCoordinates(i, pt.intake).y}`)
    .join(' ');
  const compPolyline = points
    .map((pt, i) => `${getCoordinates(i, pt.competition).x},${getCoordinates(i, pt.competition).y}`)
    .join(' ');

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 07 • GRADUATE EMPLOYABILITY INDEX
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            Fresher Campus Intake vs Skill Competition Index (2021 → 2030)
          </h4>
        </div>
        <DataStatusBadge status="ESTIMATED" />
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[480px]">
          <svg viewBox="0 0 500 180" className="w-full h-48 select-none">
            {/* Gridlines */}
            <line x1="40" y1="30" x2="480" y2="30" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="40" y1="87" x2="480" y2="87" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="40" y1="145" x2="480" y2="145" stroke="#E3DFD4" />

            <text x="32" y="34" textAnchor="end" className="text-[9px] font-mono fill-neutral-500">100</text>
            <text x="32" y="91" textAnchor="end" className="text-[9px] font-mono fill-neutral-500">50</text>
            <text x="32" y="149" textAnchor="end" className="text-[9px] font-mono fill-neutral-500">0</text>

            {/* Intake Line (Declining - Red) */}
            <polyline
              points={intakePolyline}
              fill="none"
              stroke="#B91C1C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Competition Line (Rising - Amber) */}
            <polyline
              points={compPolyline}
              fill="none"
              stroke="#C97A3E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map((pt, i) => {
              const intakePos = getCoordinates(i, pt.intake);
              const compPos = getCoordinates(i, pt.competition);

              return (
                <g key={pt.year} className="group cursor-pointer">
                  {/* Vertical Guideline */}
                  <line
                    x1={intakePos.x}
                    y1={30}
                    x2={intakePos.x}
                    y2={145}
                    stroke="#E3DFD4"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />

                  {/* Intake Node (Red) */}
                  <circle cx={intakePos.x} cy={intakePos.y} r="5" fill="#B91C1C" stroke="#FAF8F3" strokeWidth="2" />
                  <text
                    x={intakePos.x}
                    y={intakePos.y - 8}
                    textAnchor="middle"
                    className="text-[9px] font-mono font-bold fill-rose-800"
                  >
                    {pt.intake}
                  </text>

                  {/* Competition Node (Amber) */}
                  <circle cx={compPos.x} cy={compPos.y} r="5" fill="#C97A3E" stroke="#FAF8F3" strokeWidth="2" />
                  <text
                    x={compPos.x}
                    y={compPos.y - 8}
                    textAnchor="middle"
                    className="text-[9px] font-mono font-bold fill-amberAccent"
                  >
                    {pt.competition}
                  </text>

                  {/* Year Label on X-Axis */}
                  <text x={intakePos.x} y="164" textAnchor="middle" className="text-[11px] font-mono font-bold fill-ink">
                    {pt.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 mt-3 pt-2 border-t border-hairline text-[0.65rem] font-mono text-neutral-600">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1 bg-rose-700 inline-block"></span>
          <span>Routine Campus Batch Intake Volume Index (Indexed)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1 bg-amberAccent inline-block"></span>
          <span>Technical Skill Competition &amp; Bar Index (Rising)</span>
        </div>
      </div>
    </div>
  );
};

// 8. REAL ESTATE & RENTAL SHIFT SCENARIO CHART
export const UrbanRentalShiftChart: React.FC = () => {
  const rentalMarkets = [
    { zone: 'Chennai OMR Bachelor PGs', current: 100, future: 84, change: '-16%', color: 'bg-rose-700' },
    { zone: 'Chennai OMR Gated 2BHK/3BHK', current: 100, future: 122, change: '+22%', color: 'bg-emerald-700' },
    { zone: 'Bengaluru ORR Tech Belt PGs', current: 100, future: 92, change: '-8%', color: 'bg-rose-600' },
    { zone: 'Bengaluru Premium Gated Societies', current: 100, future: 128, change: '+28%', color: 'bg-emerald-700' },
    { zone: 'Hyderabad HITEC City Co-Living', current: 100, future: 118, change: '+18%', color: 'bg-emerald-700' },
    { zone: 'Hyderabad Financial District High-Rise', current: 100, future: 125, change: '+25%', color: 'bg-emerald-700' }
  ];

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 08 • URBAN HOUSING SCENARIO
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            Rental Yield &amp; Occupancy Shift: Baseline (100) vs 2030 Scenario
          </h4>
        </div>
        <DataStatusBadge status="SCENARIO" />
      </div>

      <div className="space-y-3 font-mono text-xs">
        {rentalMarkets.map(m => (
          <div key={m.zone} className="p-3 bg-bone border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-bold text-ink sm:w-1/3 truncate">{m.zone}</span>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-neutral-200 h-3 relative">
                <div className="bg-neutral-400 h-full absolute left-0 w-1/2" title="Baseline 100"></div>
                <div
                  className={`h-full absolute left-0 ${m.future >= 100 ? 'bg-emerald-700' : 'bg-rose-700'}`}
                  style={{ width: `${(m.future / 150) * 100}%` }}
                ></div>
              </div>
              <span className={`text-[0.7rem] font-bold w-12 text-right ${m.future >= 100 ? 'text-emerald-700' : 'text-rose-700'}`}>
                {m.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 9. JOB RISK & AUTOMATION MATRIX SCATTER / GRID CHART
export const JobRiskMatrixChart: React.FC = () => {
  const [activeRoleIndex, setActiveRoleIndex] = React.useState<number | null>(null);

  // Harmonized with site palette: Ink (#111111), Amber Accent (#C97A3E), Warm Stone (#78716C)
  const rolesScatter = [
    { id: 1, title: 'Manual Data Entry', exposure: 88, autoRate: 88, tier: 'HIGH', x: 88, y: 88, color: '#111111' },
    { id: 2, title: 'Manual Testing', exposure: 82, autoRate: 80, tier: 'HIGH', x: 82, y: 80, color: '#111111' },
    { id: 3, title: 'Repetitive Coding', exposure: 78, autoRate: 75, tier: 'HIGH', x: 78, y: 75, color: '#111111' },
    { id: 4, title: 'L1 Tech Support', exposure: 75, autoRate: 72, tier: 'HIGH', x: 75, y: 72, color: '#111111' },
    { id: 5, title: 'Routine NOC Monitoring', exposure: 68, autoRate: 55, tier: 'MEDIUM', x: 68, y: 55, color: '#C97A3E' },
    { id: 6, title: 'Basic Reporting', exposure: 64, autoRate: 50, tier: 'MEDIUM', x: 64, y: 50, color: '#C97A3E' },
    { id: 7, title: 'Basic DBA Ops', exposure: 62, autoRate: 48, tier: 'MEDIUM', x: 62, y: 48, color: '#C97A3E' },
    { id: 8, title: 'Repetitive Tech Writing', exposure: 58, autoRate: 40, tier: 'MEDIUM', x: 58, y: 40, color: '#C97A3E' },
    { id: 9, title: 'Cybersecurity Specialist', exposure: 35, autoRate: 20, tier: 'HUMAN CORE', x: 35, y: 20, color: '#78716C' },
    { id: 10, title: 'AI Solutions Architect', exposure: 28, autoRate: 12, tier: 'HUMAN CORE', x: 28, y: 12, color: '#78716C' },
    { id: 11, title: 'Enterprise Architect', exposure: 25, autoRate: 15, tier: 'HUMAN CORE', x: 25, y: 15, color: '#78716C' }
  ];

  const activeRole = activeRoleIndex !== null ? rolesScatter.find(r => r.id === activeRoleIndex) : null;

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 09 • OCCUPATIONAL RISK MATRIX
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            AI Task Exposure (%) vs Automation Probability (2026 → 2030)
          </h4>
        </div>
        <DataStatusBadge status="SCENARIO" />
      </div>

      <p className="text-xs text-neutral-600 font-sans leading-relaxed">
        Visualizes the degree of daily routine task assist (horizontal axis) versus projected end-to-end automation feasibility (vertical axis) across benchmarked IT job profiles.
      </p>

      {/* Main Scatter Quadrant Canvas */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[540px]">
          <svg viewBox="0 0 540 230" className="w-full h-56 bg-bone border border-hairline select-none">
            {/* Quadrant Background Highlights (Standard Palette Tones) */}
            <rect x="270" y="15" width="230" height="90" fill="rgba(201, 122, 62, 0.08)" />
            <rect x="40" y="105" width="230" height="90" fill="rgba(17, 17, 17, 0.03)" />

            {/* Grid Lines */}
            <line x1="40" y1="60" x2="500" y2="60" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="40" y1="150" x2="500" y2="150" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="155" y1="15" x2="155" y2="195" stroke="#E3DFD4" strokeDasharray="3,3" />
            <line x1="385" y1="15" x2="385" y2="195" stroke="#E3DFD4" strokeDasharray="3,3" />

            {/* Quadrant Center Divider Lines */}
            <line x1="270" y1="15" x2="270" y2="195" stroke="#78716C" strokeWidth="1.2" strokeDasharray="4,4" />
            <line x1="40" y1="105" x2="500" y2="105" stroke="#78716C" strokeWidth="1.2" strokeDasharray="4,4" />

            {/* Axis Labels */}
            <text x="495" y="190" textAnchor="end" className="text-[9px] font-mono fill-neutral-500 uppercase font-bold tracking-wider">
              AI Task Exposure →
            </text>
            <text x="48" y="28" textAnchor="start" className="text-[9px] font-mono fill-neutral-500 uppercase font-bold tracking-wider">
              ↑ Automation Feasibility
            </text>

            {/* Axis % Markers */}
            <text x="36" y="20" textAnchor="end" className="text-[8px] font-mono fill-neutral-400">100%</text>
            <text x="36" y="108" textAnchor="end" className="text-[8px] font-mono fill-neutral-400">50%</text>
            <text x="36" y="196" textAnchor="end" className="text-[8px] font-mono fill-neutral-400">0%</text>
            <text x="40" y="208" textAnchor="middle" className="text-[8px] font-mono fill-neutral-400">0%</text>
            <text x="270" y="208" textAnchor="middle" className="text-[8px] font-mono fill-neutral-400">50%</text>
            <text x="500" y="208" textAnchor="middle" className="text-[8px] font-mono fill-neutral-400">100%</text>

            {/* Quadrant Watermark Badges */}
            <g transform="translate(485, 30)">
              <rect x="-115" y="-12" width="120" height="18" fill="#F7F4EC" stroke="#C97A3E" strokeWidth="1" rx="1" />
              <text x="-55" y="1" textAnchor="middle" className="text-[8px] font-mono fill-amberAccent uppercase font-bold tracking-wider">
                HIGH AUTOMATION ZONE
              </text>
            </g>

            <g transform="translate(50, 185)">
              <rect x="0" y="-12" width="120" height="18" fill="#F7F4EC" stroke="#78716C" strokeWidth="1" rx="1" />
              <text x="60" y="1" textAnchor="middle" className="text-[8px] font-mono fill-neutral-700 uppercase font-bold tracking-wider">
                HUMAN CORE / MOAT ZONE
              </text>
            </g>

            {/* Plot Points with Numbered Badges */}
            {rolesScatter.map((r) => {
              const cx = 40 + (r.x / 100) * 460;
              const cy = 195 - (r.y / 100) * 180;
              const isSelected = activeRoleIndex === r.id;

              return (
                <g
                  key={r.id}
                  className="cursor-pointer group"
                  onMouseEnter={() => setActiveRoleIndex(r.id)}
                  onMouseLeave={() => setActiveRoleIndex(null)}
                  onClick={() => setActiveRoleIndex(r.id)}
                >
                  {/* Highlight Glow Ring */}
                  {isSelected && (
                    <circle cx={cx} cy={cy} r="14" fill={r.color} opacity="0.2" className="animate-pulse" />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 10 : 8.5}
                    fill={r.color}
                    stroke="#FAF8F3"
                    strokeWidth="2"
                    className="transition-all duration-150 shadow-xs"
                  />

                  {/* Number inside Circle */}
                  <text
                    x={cx}
                    y={cy + 3}
                    textAnchor="middle"
                    className="text-[8px] font-mono font-bold fill-bone pointer-events-none select-none"
                  >
                    {r.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Role Interactive Callout Card */}
      {activeRole && (
        <div className="p-3 bg-bone border border-ink text-xs font-mono flex flex-wrap items-center justify-between gap-3 animate-fadeIn shadow-xs">
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-full text-bone font-bold text-[10px] flex items-center justify-center shrink-0"
              style={{ backgroundColor: activeRole.color }}
            >
              {activeRole.id}
            </span>
            <span className="font-bold text-ink text-sm">{activeRole.title}</span>
            <span
              className={`text-[9px] px-2 py-0.5 font-bold uppercase border ${
                activeRole.tier === 'HIGH'
                  ? 'bg-neutral-900 text-bone border-ink'
                  : activeRole.tier === 'MEDIUM'
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-neutral-100 text-neutral-800 border-neutral-300'
              }`}
            >
              {activeRole.tier} EXPOSURE
            </span>
          </div>
          <div className="text-neutral-600 text-[11px]">
            AI Task Assist: <strong className="text-ink">{activeRole.exposure}%</strong> • Automation Probability: <strong className="text-ink">{activeRole.autoRate}%</strong>
          </div>
        </div>
      )}

      {/* 11-Role Matrix Grid with Clean Bars */}
      <div className="space-y-2 font-mono text-xs">
        <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase font-bold px-1">
          <span>ROLE OCCUPATIONAL INDEX (1–11)</span>
          <span>AI EXPOSURE ESTIMATE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {rolesScatter.map((r) => {
            const isSelected = activeRoleIndex === r.id;
            return (
              <div
                key={r.id}
                onMouseEnter={() => setActiveRoleIndex(r.id)}
                onMouseLeave={() => setActiveRoleIndex(null)}
                className={`p-2.5 bg-bone border transition-all cursor-pointer flex flex-col justify-between gap-1.5 rounded-xs ${
                  isSelected ? 'border-ink shadow-sm bg-cream ring-1 ring-ink/20' : 'border-hairline hover:border-neutral-400 hover:bg-cream/50'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 truncate">
                    <span
                      className="w-4 h-4 rounded-full text-bone font-bold text-[9px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.id}
                    </span>
                    <span className="font-bold text-ink text-[11px] truncate">{r.title}</span>
                  </div>
                  <span className="text-[10px] font-bold shrink-0 font-mono text-ink">
                    {r.exposure}%
                  </span>
                </div>

                {/* Progress bar with theme standard colors */}
                <div className="w-full bg-neutral-200/90 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${r.exposure}%`, backgroundColor: r.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Standard Palette Footer Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-hairline text-[0.65rem] font-mono text-neutral-600">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ink inline-block"></span>
            <span className="font-bold text-ink">High Routine Assist (&gt;70%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amberAccent inline-block"></span>
            <span className="font-bold text-ink">Moderate Transition (50–69%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-500 inline-block"></span>
            <span className="font-bold text-ink">Human Core / Moat (&lt;50%)</span>
          </div>
        </div>
        <span className="text-neutral-400">Hover or click nodes (1–11) to inspect details</span>
      </div>
    </div>
  );
};

// 10. MASTER 2026 vs 2030 SCENARIO RADAR / COMPARISON CHART
export const MasterRadarComparisonChart: React.FC = () => {
  const dimensions = [
    { label: 'AI Adoption Penetration', val2026: 68, val2030: 94, unit: '%' },
    { label: 'Revenue per Tech Employee (Index)', val2026: 100, val2030: 165, unit: 'Idx' },
    { label: 'Automated Routine Task Share', val2026: 38, val2030: 62, unit: '%' },
    { label: 'Specialized AI Roles Headcount', val2026: 32, val2030: 95, unit: 'Idx' },
    { label: 'Campus Volume Contraction', val2026: 65, val2030: 45, unit: 'Idx' },
    { label: 'Bench Buffer Lean Optimization', val2026: 85, val2030: 91, unit: '% Util' }
  ];

  return (
    <div className="bg-cream p-5 md:p-6 border border-hairline shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-hairline pb-2">
        <div>
          <span className="text-[0.65rem] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
            GRAPH 10 • MASTER HORIZON BENCHMARK
          </span>
          <h4 className="font-serif font-bold text-base md:text-lg text-ink">
            Master 6-Dimensional Index: 2026 Current vs 2030 Scenario
          </h4>
        </div>
        <DataStatusBadge status="SCENARIO" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
        {dimensions.map(d => (
          <div key={d.label} className="p-3 bg-bone border border-hairline space-y-2">
            <span className="font-bold text-ink text-[0.7rem] block leading-tight">{d.label}</span>
            <div className="space-y-1">
              <div className="flex justify-between text-[0.65rem]">
                <span className="text-neutral-500">2026: <strong>{d.val2026} {d.unit}</strong></span>
                <span className="text-amberAccent font-bold">2030: <strong>{d.val2030} {d.unit}</strong></span>
              </div>
              <div className="w-full bg-neutral-200 h-2 flex">
                <div className="bg-neutral-700 h-full" style={{ width: `${(d.val2026 / 180) * 100}%` }}></div>
                <div className="bg-amberAccent h-full" style={{ width: `${((d.val2030 - d.val2026) / 180) * 100}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
