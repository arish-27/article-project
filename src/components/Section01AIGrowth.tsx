import React, { useState } from 'react';
import { Info, TrendingUp } from 'lucide-react';

export const Section01AIGrowth: React.FC = () => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  // Directional relative momentum curve (normalized 2026=100 base)
  const momentumData = [
    { year: 2026, momentum: 100, stage: 'Copilot Assistants', desc: 'Code completion, isolated chat interfaces, initial developer pilots.' },
    { year: 2027, momentum: 135, stage: 'Workflow Integration', desc: 'Integrated CI/CD testing, PR review agents, automated unit generation.' },
    { year: 2028, momentum: 185, stage: 'Agentic Infrastructure', desc: 'Multi-agent pipelines, automated error remediation, service orchestrators.' },
    { year: 2029, momentum: 245, stage: 'Autonomous Subsystems', desc: 'Self-healing deployments, dynamic schema migrations, generative synthesis.' },
    { year: 2030, momentum: 310, stage: 'Native AI Architecture', desc: 'Foundational runtime fabric, pervasive intelligence layer across enterprise stacks.' },
  ];

  // SVG dimensions
  const svgWidth = 720;
  const svgHeight = 280;
  const padding = { top: 30, right: 40, bottom: 40, left: 60 };

  const chartWidth = svgWidth - padding.left - padding.right;
  const chartHeight = svgHeight - padding.top - padding.bottom;

  const minVal = 80;
  const maxVal = 340;

  const getX = (index: number) => padding.left + (index / (momentumData.length - 1)) * chartWidth;
  const getY = (val: number) => padding.top + chartHeight - ((val - minVal) / (maxVal - minVal)) * chartHeight;

  // Generate smooth SVG path
  const linePoints = momentumData.map((d, i) => `${getX(i)},${getY(d.momentum)}`);
  const pathD = `M ${linePoints.join(' L ')}`;

  // Area under line
  const areaD = `M ${getX(0)},${getY(minVal)} L ${linePoints.join(' L ')} L ${getX(momentumData.length - 1)},${getY(minVal)} Z`;

  return (
    <section id="section-growth" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with Editorial Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
                SECTION 01
              </span>
              <span className="text-[#DDD7CC]">—</span>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                MACRO INFRASTRUCTURE SHIFT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-6">
              AI IS MOVING FROM TOOL TO INFRASTRUCTURE
            </h2>
            <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
              AI is moving from an optional productivity tool toward a standard layer inside software development, business operations and digital products.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#E5E0D8] bg-white p-2 shadow-sm">
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src="/images/ai_engineers_lab.jpg"
                  alt="Modern AI research and engineering laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 pb-1 px-1 text-[11px] font-mono text-neutral-600 border-t border-[#F0EBE1] mt-2">
                <span className="font-bold text-[#C25E2E] mr-1">FIG 1.1</span>
                Infrastructure Transition: Foundational model inference runtimes integrated directly into enterprise backend architecture.
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Chart Container */}
        <div className="bg-white border border-[#E5E0D8] p-6 sm:p-10 relative">
          {/* Chart Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 mb-6 border-b border-[#F0EBE1] gap-4">
            <div>
              <span className="font-mono text-[11px] tracking-widest uppercase text-neutral-500 block mb-1">
                EXHIBIT 1.0 • DIRECTIONAL MACRO INDEX
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900">
                AI ADOPTION &amp; TECHNOLOGY MOMENTUM
              </h3>
              <span className="font-mono text-xs text-neutral-500">2026 → 2030</span>
            </div>

            {/* Prominent Disclaimer Badge */}
            <div className="flex items-center gap-2 bg-[#F8F6F1] border border-[#E5E0D8] px-3.5 py-2 text-[11px] font-mono text-neutral-600 max-w-md">
              <Info className="w-4 h-4 text-[#C25E2E] flex-shrink-0" />
              <span>
                Industry trend visualization — directional, not an employment forecast.
              </span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[640px]">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto overflow-visible font-mono">
                <defs>
                  <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C25E2E" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#C25E2E" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid Lines */}
                {[100, 150, 200, 250, 300].map((level) => {
                  const y = getY(level);
                  return (
                    <g key={level}>
                      <line
                        x1={padding.left}
                        y1={y}
                        x2={svgWidth - padding.right}
                        y2={y}
                        stroke="#EFEBE4"
                        strokeDasharray="3 3"
                        strokeWidth="1"
                      />
                      <text
                        x={padding.left - 10}
                        y={y + 3}
                        fill="#999"
                        fontSize="10"
                        textAnchor="end"
                      >
                        {level}
                      </text>
                    </g>
                  );
                })}

                {/* Area fill */}
                <path d={areaD} fill="url(#growthGradient)" />

                {/* Trend line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="#C25E2E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Y-axis Label */}
                <text
                  x={-svgHeight / 2}
                  y={18}
                  fill="#777"
                  fontSize="9"
                  letterSpacing="0.15em"
                  transform="rotate(-90)"
                  textAnchor="middle"
                  className="uppercase font-semibold"
                >
                  RELATIVE MOMENTUM (INDEX)
                </text>

                {/* X-axis ticks & points */}
                {momentumData.map((d, i) => {
                  const x = getX(i);
                  const y = getY(d.momentum);
                  const isHovered = hoveredYear === d.year;

                  return (
                    <g
                      key={d.year}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredYear(d.year)}
                      onMouseLeave={() => setHoveredYear(null)}
                    >
                      {/* Vertical line indicator on hover */}
                      {isHovered && (
                        <line
                          x1={x}
                          y1={padding.top}
                          x2={x}
                          y2={getY(minVal)}
                          stroke="#111111"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      )}

                      {/* Data Point Dot */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 6 : 4}
                        fill={isHovered ? '#111111' : '#FFFFFF'}
                        stroke="#C25E2E"
                        strokeWidth={isHovered ? 2.5 : 2}
                        className="transition-all duration-150"
                      />

                      {/* Year Label on X Axis */}
                      <text
                        x={x}
                        y={svgHeight - 12}
                        fill={isHovered ? '#111111' : '#666'}
                        fontSize="11"
                        fontWeight={isHovered ? 'bold' : 'normal'}
                        textAnchor="middle"
                      >
                        {d.year}
                      </text>

                      {/* Data Value Callout */}
                      <text
                        x={x}
                        y={y - 12}
                        fill={isHovered ? '#111111' : '#C25E2E'}
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {d.momentum}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Dynamic Insight Row below the Chart */}
          <div className="mt-6 pt-6 border-t border-[#F0EBE1] grid grid-cols-1 sm:grid-cols-5 gap-3">
            {momentumData.map((item) => (
              <div
                key={item.year}
                onMouseEnter={() => setHoveredYear(item.year)}
                onMouseLeave={() => setHoveredYear(null)}
                className={`p-3 transition-colors text-left border ${
                  hoveredYear === item.year
                    ? 'bg-[#F8F6F1] border-[#111111]'
                    : 'bg-transparent border-[#EFECE6]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-neutral-900">{item.year}</span>
                  <span className="font-mono text-[10px] text-[#C25E2E] font-semibold">{item.momentum} pts</span>
                </div>
                <div className="font-serif text-xs font-bold text-neutral-800 mb-1">{item.stage}</div>
                <div className="font-sans text-[11px] text-neutral-500 leading-snug">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Bottom Editorial Footnote */}
          <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
            <div>
              <span>X-AXIS: 2026–2030 CALENDAR HORIZON</span>
              <span className="mx-2">•</span>
              <span>Y-AXIS: RELATIVE MOMENTUM (NORMALIZED 2026=100)</span>
            </div>
            <div className="text-neutral-400">
              EDITORIAL INTELLIGENCE UNIT • REPORT EXHIBIT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
