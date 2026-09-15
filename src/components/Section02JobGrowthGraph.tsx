import React, { useState } from 'react';
import { AlertCircle, TrendingUp, TrendingDown, RefreshCw, Layers } from 'lucide-react';

interface SectorSeries {
  id: string;
  name: string;
  category: 'RISING' | 'TRANSFORMING' | 'AUTOMATION_PRESSURE';
  directionLabel: string;
  color: string;
  strokeDash?: string;
  values: { [year: number]: number };
  note: string;
}

export const Section02JobGrowthGraph: React.FC = () => {
  const years = [2026, 2027, 2028, 2029, 2030];
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(4); // Default to full view (2030)
  const [activeSeriesId, setActiveSeriesId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<'ALL' | 'RISING' | 'TRANSFORMING' | 'AUTOMATION_PRESSURE'>('ALL');

  // Exact dataset specified in instructions (Normalized 2026 = 100)
  const sectors: SectorSeries[] = [
    {
      id: 'ai-ml',
      name: 'AI / Machine Learning',
      category: 'RISING',
      directionLabel: 'STRONG GROWTH',
      color: '#C25E2E', // Editorial rust/amber accent
      values: { 2026: 100, 2027: 115, 2028: 132, 2029: 151, 2030: 172 },
      note: 'Deepening foundational model integration and enterprise autonomous pipeline design.',
    },
    {
      id: 'big-data',
      name: 'Big Data / Data Engineering',
      category: 'RISING',
      directionLabel: 'STRONG GROWTH',
      color: '#2B6CB0', // Scholarly deep blue
      values: { 2026: 100, 2027: 112, 2028: 126, 2029: 142, 2030: 159 },
      note: 'Vector stores, unstructured ingestion fabrics, and high-throughput real-time indexing.',
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      category: 'RISING',
      directionLabel: 'STRONG GROWTH',
      color: '#2F855A', // Forest editorial green
      values: { 2026: 100, 2027: 109, 2028: 120, 2029: 133, 2030: 147 },
      note: 'Defensive agent security, model jailbreak prevention, and supply-chain governance.',
    },
    {
      id: 'cloud-devops',
      name: 'Cloud / Infrastructure / DevOps',
      category: 'RISING',
      directionLabel: 'STEADY GROWTH',
      color: '#4A5568', // Slate graphite
      values: { 2026: 100, 2027: 106, 2028: 113, 2029: 121, 2030: 130 },
      note: 'GPU orchestration, Kubernetes scalability, and hybrid enterprise platform engineering.',
    },
    {
      id: 'software-eng',
      name: 'Software Engineering',
      category: 'TRANSFORMING',
      directionLabel: 'GROWTH + ROLE TRANSFORMATION',
      color: '#111111', // Solid black/ink
      values: { 2026: 100, 2027: 103, 2028: 107, 2029: 112, 2030: 118 },
      note: 'Steady net growth coupled with complete elevation: from line authoring to system design & validation.',
    },
    {
      id: 'it-support',
      name: 'IT Support / Routine Operations',
      category: 'AUTOMATION_PRESSURE',
      directionLabel: 'INCREASING AUTOMATION PRESSURE',
      color: '#9B2C2C', // Deep muted crimson
      strokeDash: '5 3',
      values: { 2026: 100, 2027: 97, 2028: 93, 2029: 88, 2030: 82 },
      note: 'Autonomous ticketing agents, conversational L1 triage, and automated credential rotation.',
    },
    {
      id: 'manual-qa',
      name: 'Manual QA / Repetitive Testing',
      category: 'AUTOMATION_PRESSURE',
      directionLabel: 'INCREASING AUTOMATION PRESSURE',
      color: '#E53E3E', // Vivid red-amber
      strokeDash: '4 4',
      values: { 2026: 100, 2027: 96, 2028: 91, 2029: 85, 2030: 78 },
      note: 'Autonomous test suite synthesis, synthetic regression suites, and continuous visual validation.',
    },
  ];

  // SVG dimensions
  const svgWidth = 820;
  const svgHeight = 440;
  const padding = { top: 40, right: 140, bottom: 50, left: 60 };
  const chartWidth = svgWidth - padding.left - padding.right;
  const chartHeight = svgHeight - padding.top - padding.bottom;

  // Values span from 70 to 180
  const minY = 70;
  const maxY = 180;

  const getX = (yearIdx: number) => padding.left + (yearIdx / (years.length - 1)) * chartWidth;
  const getY = (val: number) => padding.top + chartHeight - ((val - minY) / (maxY - minY)) * chartHeight;

  // Filtered sectors
  const filteredSectors = sectors.filter((s) => {
    if (filterCategory === 'ALL') return true;
    return s.category === filterCategory;
  });

  return (
    <section
      id="section-demand-graph"
      className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#F8F6F1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              SECTION 02 • KEY VISUALIZATION
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              WORKFORCE DEMAND INDEX
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.05] mb-4">
            WHERE IT JOB DEMAND IS MOVING
          </h2>

          <div className="font-serif text-2xl text-neutral-600 italic mb-4">
            2026 → 2030
          </div>

          <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
            A cross-sector comparative projection tracking which technical domains are expanding their organizational footprint versus those undergoing acute automation pressure.
          </p>
        </div>

        {/* The Main Graph Card */}
        <div className="bg-white border border-[#E5E0D8] p-6 sm:p-10 shadow-sm relative">
          {/* Top Bar: Titles, Disclaimers, and Animation Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[#F0EBE1]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block mb-1">
                EXHIBIT 2.0 • RELATIVE DEMAND MULTI-SERIES INDEX
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                IT Workforce Trajectory Analysis
              </h3>
              <p className="font-mono text-xs text-neutral-500 mt-1">
                Baseline Year Normalized: 2026 = 100.0 Index Points
              </p>
            </div>

            {/* Interactive Year Horizon Selector */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-neutral-500 text-[11px] uppercase tracking-wider font-semibold">
                HORIZON:
              </span>
              <div className="flex items-center border border-[#E5E0D8] bg-[#FDFCFB]">
                {years.map((y, idx) => (
                  <button
                    key={y}
                    onClick={() => setCurrentYearIndex(idx)}
                    className={`px-3.5 py-1.5 text-[11px] font-mono font-bold transition-colors cursor-pointer ${
                      idx === currentYearIndex
                        ? 'bg-[#111111] text-[#F8F6F1]'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-[#F4F1EA]'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#F5F2EC] text-xs font-mono">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-neutral-400 mr-1 text-[11px]">FILTER VIEW:</span>
              <button
                onClick={() => setFilterCategory('ALL')}
                className={`px-2.5 py-1 text-[11px] transition-colors border ${
                  filterCategory === 'ALL'
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-600 border-[#E5E0D8] hover:border-neutral-400'
                }`}
              >
                All 7 Sectors
              </button>
              <button
                onClick={() => setFilterCategory('RISING')}
                className={`px-2.5 py-1 text-[11px] transition-colors border ${
                  filterCategory === 'RISING'
                    ? 'bg-[#C25E2E] text-white border-[#C25E2E]'
                    : 'bg-white text-neutral-600 border-[#E5E0D8] hover:border-neutral-400'
                }`}
              >
                Rising (4)
              </button>
              <button
                onClick={() => setFilterCategory('TRANSFORMING')}
                className={`px-2.5 py-1 text-[11px] transition-colors border ${
                  filterCategory === 'TRANSFORMING'
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-600 border-[#E5E0D8] hover:border-neutral-400'
                }`}
              >
                Transforming (1)
              </button>
              <button
                onClick={() => setFilterCategory('AUTOMATION_PRESSURE')}
                className={`px-2.5 py-1 text-[11px] transition-colors border ${
                  filterCategory === 'AUTOMATION_PRESSURE'
                    ? 'bg-[#9B2C2C] text-white border-[#9B2C2C]'
                    : 'bg-white text-neutral-600 border-[#E5E0D8] hover:border-neutral-400'
                }`}
              >
                Automation Pressure (2)
              </button>
            </div>

            <div className="text-[11px] text-neutral-500 font-mono">
              Hover line or legend to inspect series values
            </div>
          </div>

          {/* SVG Multi-Line Chart Canvas */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[760px]">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto overflow-visible font-mono select-none">
                {/* Baseline 100 Reference Band */}
                <rect
                  x={padding.left}
                  y={getY(100) - 1}
                  width={chartWidth}
                  height={2}
                  fill="#111111"
                  opacity="0.12"
                />

                {/* Horizontal Grid Levels */}
                {[80, 100, 120, 140, 160, 180].map((val) => {
                  const y = getY(val);
                  const isBaseline = val === 100;
                  return (
                    <g key={val}>
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={padding.left + chartWidth}
                        y2={y}
                        stroke={isBaseline ? '#111111' : '#EBE6DE'}
                        strokeWidth={isBaseline ? 1.5 : 1}
                        strokeDasharray={isBaseline ? undefined : '3 3'}
                      />
                      <text
                        x={padding.left - 12}
                        y={y + 3.5}
                        fill={isBaseline ? '#111111' : '#888888'}
                        fontSize="10"
                        fontWeight={isBaseline ? 'bold' : 'normal'}
                        textAnchor="end"
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}

                {/* Vertical Year Divider Lines */}
                {years.map((y, idx) => {
                  const x = getX(idx);
                  const isCurrent = idx === currentYearIndex;
                  const isVisible = idx <= currentYearIndex;

                  return (
                    <g key={y}>
                      <line
                        x1={x}
                        y1={padding.top}
                        x2={x}
                        y2={padding.top + chartHeight}
                        stroke={isCurrent ? '#C25E2E' : '#EFEBE4'}
                        strokeWidth={isCurrent ? 1.5 : 1}
                        strokeDasharray={isCurrent ? '4 2' : undefined}
                      />
                      {/* Year Axis Label */}
                      <text
                        x={x}
                        y={svgHeight - 16}
                        fill={isCurrent ? '#C25E2E' : isVisible ? '#111111' : '#A0AEC0'}
                        fontSize="12"
                        fontWeight={isCurrent ? 'bold' : '500'}
                        textAnchor="middle"
                      >
                        {y}
                      </text>
                    </g>
                  );
                })}

                {/* Y-Axis Title */}
                <text
                  x={-(padding.top + chartHeight / 2)}
                  y={18}
                  fill="#555555"
                  fontSize="9.5"
                  letterSpacing="0.14em"
                  transform="rotate(-90)"
                  textAnchor="middle"
                  className="uppercase font-semibold"
                >
                  RELATIVE DEMAND INDEX (2026 = 100)
                </text>

                {/* Draw Each Sector Line progressively up to currentYearIndex */}
                {filteredSectors.map((sector) => {
                  const isHighlighted = activeSeriesId === sector.id;
                  const isDimmed = activeSeriesId !== null && !isHighlighted;
                  
                  // Points up to currentYearIndex
                  const visiblePoints = years.slice(0, currentYearIndex + 1).map((y, i) => {
                    return { x: getX(i), y: getY(sector.values[y]), val: sector.values[y] };
                  });

                  if (visiblePoints.length === 0) return null;

                  const pathString = `M ${visiblePoints.map((p) => `${p.x},${p.y}`).join(' L ')}`;
                  const lastPoint = visiblePoints[visiblePoints.length - 1];

                  return (
                    <g
                      key={sector.id}
                      className="transition-opacity duration-200 cursor-pointer"
                      style={{ opacity: isDimmed ? 0.18 : 1 }}
                      onMouseEnter={() => setActiveSeriesId(sector.id)}
                      onMouseLeave={() => setActiveSeriesId(null)}
                    >
                      {/* Thicker hover stroke hit area */}
                      <path
                        d={pathString}
                        fill="none"
                        stroke="transparent"
                        strokeWidth="16"
                        strokeLinecap="round"
                      />

                      {/* Main Drawn Curve */}
                      <path
                        d={pathString}
                        fill="none"
                        stroke={sector.color}
                        strokeWidth={isHighlighted ? 3.5 : sector.id === 'software-eng' ? 2.5 : 2}
                        strokeDasharray={sector.strokeDash}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />

                      {/* Data Dots along the path */}
                      {visiblePoints.map((pt, pIdx) => (
                        <circle
                          key={pIdx}
                          cx={pt.x}
                          cy={pt.y}
                          r={isHighlighted ? 4.5 : 3}
                          fill={isHighlighted ? sector.color : '#FFFFFF'}
                          stroke={sector.color}
                          strokeWidth={isHighlighted ? 2.5 : 1.5}
                        />
                      ))}

                      {/* Line End Label & Value Tag */}
                      <g transform={`translate(${lastPoint.x + 8}, ${lastPoint.y})`}>
                        <text
                          x={0}
                          y={3}
                          fill={sector.color}
                          fontSize="10"
                          fontWeight={isHighlighted ? 'bold' : '600'}
                        >
                          {sector.name} ({lastPoint.val})
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Graph Label & Disclaimers Required by Prompt */}
          <div className="mt-8 pt-6 border-t border-[#F0EBE1] space-y-3">
            {/* Required prominent Graph Label */}
            <div className="bg-[#FAF8F5] border-l-2 border-[#C25E2E] p-3 text-xs font-mono text-neutral-800">
              <span className="font-bold uppercase tracking-wider text-[#C25E2E]">GRAPH LABEL: </span>
              <span>Directional analytical projection — illustrative index, not employment count.</span>
            </div>

            {/* Required Source / Context Note */}
            <div className="flex items-start gap-2 text-xs font-sans text-neutral-600 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-neutral-500 mt-0.5 flex-shrink-0" />
              <p>
                <span className="font-semibold text-neutral-800">Context &amp; Methodology: </span>
                Trend direction informed by published workforce and technology research, including the World Economic Forum Future of Jobs Report 2025. The WEF research indicates strong expected growth in AI and big data, networks and cybersecurity, and technological literacy through 2030. Index values are illustrative directional projections and are not official job forecasts or headcounts.
              </p>
            </div>
          </div>

          {/* Sector Breakdown & Trajectory Summary (Required concise editorial presentation) */}
          <div className="mt-10 pt-8 border-t-2 border-neutral-900">
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block">
                EDITORIAL SYNTHESIS • 2026 → 2030 TRAJECTORY
              </span>
              <h4 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                Consolidated Demand Movement
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Category 01: Rising */}
              <div className="border-t border-[#C25E2E] pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-[#C25E2E]" />
                  <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
                    RISING
                  </span>
                </div>
                <div className="space-y-3">
                  {sectors
                    .filter((s) => s.category === 'RISING')
                    .map((s) => (
                      <div
                        key={s.id}
                        onMouseEnter={() => setActiveSeriesId(s.id)}
                        onMouseLeave={() => setActiveSeriesId(null)}
                        className={`cursor-pointer p-2 transition-colors border ${
                          activeSeriesId === s.id ? 'bg-[#FAF8F5] border-neutral-900' : 'border-transparent'
                        }`}
                      >
                        <div className="flex justify-between items-baseline">
                          <span className="font-serif text-sm font-bold text-neutral-900">{s.name}</span>
                          <span className="font-mono text-xs text-[#C25E2E] font-semibold">
                            100 → {s.values[2030]}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-neutral-500 mt-0.5">{s.note}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Category 02: Transforming */}
              <div className="border-t border-neutral-900 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <RefreshCw className="w-4 h-4 text-neutral-900" />
                  <span className="font-mono text-xs font-bold text-neutral-900 tracking-widest uppercase">
                    TRANSFORMING
                  </span>
                </div>
                <div className="space-y-3">
                  {sectors
                    .filter((s) => s.category === 'TRANSFORMING')
                    .map((s) => (
                      <div
                        key={s.id}
                        onMouseEnter={() => setActiveSeriesId(s.id)}
                        onMouseLeave={() => setActiveSeriesId(null)}
                        className={`cursor-pointer p-2 transition-colors border ${
                          activeSeriesId === s.id ? 'bg-[#FAF8F5] border-neutral-900' : 'border-transparent'
                        }`}
                      >
                        <div className="flex justify-between items-baseline">
                          <span className="font-serif text-sm font-bold text-neutral-900">{s.name}</span>
                          <span className="font-mono text-xs text-neutral-900 font-semibold">
                            100 → {s.values[2030]}
                          </span>
                        </div>
                        <div className="font-mono text-[10px] text-neutral-600 mt-1 uppercase font-semibold">
                          Moderate net growth + workflow transformation
                        </div>
                        <p className="font-sans text-xs text-neutral-500 mt-1">{s.note}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Category 03: Under Automation Pressure */}
              <div className="border-t border-[#9B2C2C] pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingDown className="w-4 h-4 text-[#9B2C2C]" />
                  <span className="font-mono text-xs font-bold text-[#9B2C2C] tracking-widest uppercase">
                    UNDER AUTOMATION PRESSURE
                  </span>
                </div>
                <div className="space-y-3">
                  {sectors
                    .filter((s) => s.category === 'AUTOMATION_PRESSURE')
                    .map((s) => (
                      <div
                        key={s.id}
                        onMouseEnter={() => setActiveSeriesId(s.id)}
                        onMouseLeave={() => setActiveSeriesId(null)}
                        className={`cursor-pointer p-2 transition-colors border ${
                          activeSeriesId === s.id ? 'bg-[#FAF8F5] border-neutral-900' : 'border-transparent'
                        }`}
                      >
                        <div className="flex justify-between items-baseline">
                          <span className="font-serif text-sm font-bold text-neutral-900">{s.name}</span>
                          <span className="font-mono text-xs text-[#9B2C2C] font-semibold">
                            100 → {s.values[2030]}
                          </span>
                        </div>
                        <div className="font-mono text-[10px] text-[#9B2C2C] mt-1 uppercase font-semibold">
                          Higher automation exposure
                        </div>
                        <p className="font-sans text-xs text-neutral-500 mt-1">{s.note}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Magazine Feature Photo for Section 02 */}
            <div className="mt-10 pt-8 border-t border-[#EAE5DC]">
              <div className="border border-[#E5E0D8] bg-[#FAF8F5] p-2.5 sm:p-3 shadow-sm">
                <div className="relative overflow-hidden aspect-[16/7] sm:aspect-[2.6/1]">
                  <img
                    src="/images/bengaluru_tech_park.jpg"
                    alt="Major technology park and cloud delivery hub"
                    className="w-full h-full object-cover filter contrast-[1.03]"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider">
                    FIELD DISPATCH • TECH CLUSTERS
                  </div>
                </div>
                <div className="pt-2.5 pb-1 px-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs font-mono text-neutral-600">
                  <p className="font-sans text-xs text-neutral-700">
                    <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 2.1</span>
                    High-capacity delivery centers in Bengaluru, Chennai, and Hyderabad reorienting infrastructure toward high-performance GPU clusters, cloud platform engineering, and cybersecurity command hubs.
                  </p>
                  <span className="text-[10px] text-neutral-400 uppercase whitespace-nowrap">
                    CORRIDOR INTELLIGENCE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
