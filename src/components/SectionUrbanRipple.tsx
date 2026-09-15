import React, { useState } from 'react';
import { Home, Building, Users, Utensils, Car, Building2, TrendingDown, ArrowRight, MapPin, Layers } from 'lucide-react';

interface SectorImpact {
  id: string;
  category: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  exposureStatus: 'HIGH VULNERABILITY' | 'STRUCTURAL CORRECTION' | 'DECENTRALIZING SHIFT';
  badgeStyle: string;
  whatChanges: string;
  keyMetrics: { label: string; value: string; trend: 'down' | 'up' | 'neutral' }[];
  corridorNotes: string;
  adaptationStrategy: string;
}

export const SectionUrbanRipple: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('pg-coliving');

  const sectors: SectorImpact[] = [
    {
      id: 'pg-coliving',
      category: 'HOSPITALITY & TEMPORARY HOUSING',
      title: 'PGs (Paying Guests) & Co-Living Hostels',
      icon: Home,
      tagline: 'The era of cramming four freshers per room along tech corridors faces a sharp reality check.',
      exposureStatus: 'HIGH VULNERABILITY',
      badgeStyle: 'bg-[#9B2C2C]/10 text-[#9B2C2C] border-[#9B2C2C]/30',
      whatChanges:
        'Because traditional bulk fresher onboarding (10,000–30,000 campus hires per IT services giant) is moderating and turning hybrid, bachelor PG occupancy rates along primary tech corridors are dropping 18%–30%.',
      keyMetrics: [
        { label: 'Corridor Occupancy Rates', value: '72% down from 94%', trend: 'down' },
        { label: 'Fresher Intake Density', value: '-35% in campus batches', trend: 'down' },
        { label: 'Average Bed Pricing', value: 'Flat to -12% correction', trend: 'down' },
      ],
      corridorNotes:
        'High impact across Chennai OMR (Navalur, Sholinganallur), Bengaluru ORR (Marathahalli, Bellandur), and Hyderabad Gachibowli.',
      adaptationStrategy:
        'Converting crowded 3-to-4 sharing rooms into single-occupancy co-living units equipped with dedicated power backups, ergonomic setups, and 500Mbps fiber for remote/hybrid contractors.',
    },
    {
      id: 'rentals',
      category: 'RESIDENTIAL HOUSING',
      title: 'Rental Housing & Gated Communities',
      icon: Building,
      tagline: 'Unprecedented 40% annual rent hikes cool down as tech workers regain spatial leverage.',
      exposureStatus: 'STRUCTURAL CORRECTION',
      badgeStyle: 'bg-neutral-900/10 text-neutral-900 border-neutral-900/30',
      whatChanges:
        'The desperate scramble to rent within a 3km radius of tech parks is easing. As high-value AI engineers operate on flexible hybrid schedules (2–3 days in-office), tenant leverage shifts toward suburban and periphery developments.',
      keyMetrics: [
        { label: 'Corridor Rent Spikes', value: 'Normalized to 5–8% CAGR', trend: 'neutral' },
        { label: 'Vacancy Duration', value: '18 to 35 days average', trend: 'up' },
        { label: 'Deposit Inflation', value: 'Capped by rising supply', trend: 'down' },
      ],
      corridorNotes:
        'Tech corridors like Bengaluru Sarjapur/Whitefield and Chennai Thoraipakkam transition from landlord seller-markets to negotiated tenant equilibrium.',
      adaptationStrategy:
        'Landlords must invest in acoustic soundproofing, dedicated home-office alcoves, and EV charging infrastructure to maintain premium long-term tenancies.',
    },
    {
      id: 'population',
      category: 'URBAN DEMOGRAPHICS',
      title: 'City Inflow & Population Decentralization',
      icon: Users,
      tagline: 'Tier-2 retention: The annual exodus of young graduates to megacities begins to reverse.',
      exposureStatus: 'DECENTRALIZING SHIFT',
      badgeStyle: 'bg-[#C25E2E]/10 text-[#C25E2E] border-[#C25E2E]/30',
      whatChanges:
        'Historically, 70%+ of engineering graduates had to relocate to Tier-1 hubs for entry-level tech employment. AI-native tools allow smaller teams in Tier-2/3 cities (Coimbatore, Kochi, Indore, Bhubaneswar, Vizag) to deliver enterprise software, slowing metro strain.',
      keyMetrics: [
        { label: 'Metro Fresher Migration', value: 'Decelerating 22%', trend: 'down' },
        { label: 'Tier-2 GCC & Tech Hubs', value: '+40% expansion rate', trend: 'up' },
        { label: 'Urban Public Strain', value: 'Marginal transit relief', trend: 'neutral' },
      ],
      corridorNotes:
        'Reduces severe peak infrastructure pressure on water supply, traffic bottlenecks, and municipal sanitation in primary IT capital zones.',
      adaptationStrategy:
        'Tier-1 cities rebrand as strategic headquarters and innovation centers, while operational execution disperses across distributed regional micro-campuses.',
    },
    {
      id: 'transport',
      category: 'MOBILITY & TRANSIT',
      title: 'Corporate Cabs, Autos & Local Mobility',
      icon: Car,
      tagline: 'Mid-week peak clustering replaces the rigid five-day rush hour crush.',
      exposureStatus: 'STRUCTURAL CORRECTION',
      badgeStyle: 'bg-neutral-900/10 text-neutral-900 border-neutral-900/30',
      whatChanges:
        'Corporate employee transport cab contracts have dropped 25–35% compared to pre-2024 levels. Tech corridors see dramatic Tuesday–Thursday mid-week traffic spikes, while Mondays and Fridays resemble holiday flows.',
      keyMetrics: [
        { label: 'Corporate Fleet Contracts', value: '-30% volume shift', trend: 'down' },
        { label: 'Peak Mid-Week Clustering', value: 'Tue–Thu concentrated', trend: 'up' },
        { label: 'Feeder Auto Incomes', value: 'Shift to dynamic routing', trend: 'neutral' },
      ],
      corridorNotes:
        'App-based drivers stationed outside tech park gates experience longer idle queues outside 10:00 AM and 6:30 PM shift windows.',
      adaptationStrategy:
        'Fleet operators diversifying beyond IT corporate contracts into general urban logistics, on-demand parcel deliveries, and inter-city travel.',
    },
    {
      id: 'food-retail',
      category: 'LOCAL COMMERCE',
      title: 'Cafés, Tech Park Food Courts & Micro-Vendors',
      icon: Utensils,
      tagline: 'Weekday corporate lunch footfall drops; weekend experiential dining stays resilient.',
      exposureStatus: 'HIGH VULNERABILITY',
      badgeStyle: 'bg-[#9B2C2C]/10 text-[#9B2C2C] border-[#9B2C2C]/30',
      whatChanges:
        'The dense ecosystem of tea kiosks, food trucks, quick-service cafeterias, and cloud kitchens clustered around IT corridors sees compressed weekday margins. The "midnight biryani" and 3:00 AM chai economy slows as night-shift support teams shrink.',
      keyMetrics: [
        { label: 'IT Park Food Court Footfall', value: '-28% weekday volume', trend: 'down' },
        { label: 'Night-Shift Street Kiosks', value: '-40% late-night revenue', trend: 'down' },
        { label: 'Weekend Leisure Dining', value: 'Stable to +12%', trend: 'up' },
      ],
      corridorNotes:
        'High density food strips outside major SEZs in Navalur (OMR) and Electronic City phase-1 feel the immediate contraction in fresher consumer spend.',
      adaptationStrategy:
        'Food vendors shifting locations toward residential hubs and doubling down on multi-platform cloud delivery rather than relying solely on park badges.',
    },
    {
      id: 'commercial-re',
      category: 'COMMERCIAL REAL ESTATE',
      title: 'Commercial Office Space & SEZ Campuses',
      icon: Building2,
      tagline: 'From sea-of-cubicles to GPU compute pods and high-collaboration experience centers.',
      exposureStatus: 'STRUCTURAL CORRECTION',
      badgeStyle: 'bg-neutral-900/10 text-neutral-900 border-neutral-900/30',
      whatChanges:
        'Companies no longer lease 500,000 sq.ft. for 5,000 developers typing code at desks. The footprint per employee transitions from rows of workstations to meeting war-rooms, AI testing sandboxes, and client presentation arenas.',
      keyMetrics: [
        { label: 'Desk-to-Employee Ratio', value: 'Shift from 1:1 to 1:2.4', trend: 'down' },
        { label: 'GCC High-Value Leases', value: '+18% space for R&D labs', trend: 'up' },
        { label: 'Power & Cooling Specs', value: '3x GPU load demands', trend: 'up' },
      ],
      corridorNotes:
        'Older Grade-B tech parks with rigid layouts face high vacancy; newer Grade-A eco-friendly campuses with high power density stay leased to GCCs.',
      adaptationStrategy:
        'Developers retrofitting legacy office blocks into specialized AI data clusters, co-working studios, and experiential executive briefing centers.',
    },
  ];

  const currentSector = sectors.find((s) => s.id === selectedId) || sectors[0];

  return (
    <section id="section-urban-ripple" className="py-20 md:py-28 border-b border-[#E5E0D8] bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#C25E2E] tracking-widest uppercase">
              BEYOND THE TERMINAL
            </span>
            <span className="text-[#DDD7CC]">—</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              MACRO URBAN ECONOMICS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-[1.08] mb-6">
            BESIDES IT: WHO ELSE WILL BE AFFECTED?
          </h2>

          <p className="font-sans text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal">
            For every 1 software engineering job in a tech corridor, an estimated 3.5 to 4 secondary jobs exist in housing, food, mobility, and retail. When AI transforms IT headcount velocity, the urban ripple reverberates across the entire city economy.
          </p>
        </div>

        {/* Visual Cascade Flow Strip */}
        <div className="bg-white border border-[#E5E0D8] p-6 mb-10 shadow-sm">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-4">
            THE 5-TIER CAUSAL CASCADE (2026 → 2030)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
            {[
              { step: '01', title: 'AI Productivity Shift', desc: 'Fewer developers build higher-volume systems faster' },
              { step: '02', title: 'Fresher Intake Normalizes', desc: 'Bulk campus hiring slows; higher selectivity begins' },
              { step: '03', title: 'Corridor Density Cools', desc: 'PGs & tech park corridor rentals lose artificial pricing power' },
              { step: '04', title: 'Decentralized Migration', desc: 'Talent stays in Tier-2 hubs; hybrid schedules dominate' },
              { step: '05', title: 'City Equilibrium', desc: 'Peak metro bottlenecks ease; local businesses pivot to quality' },
            ].map((node, i) => (
              <div key={node.step} className="p-3 bg-[#FAF8F5] border border-[#EBE6DD] text-left">
                <span className="font-mono text-[11px] font-bold text-[#C25E2E] block mb-1">
                  STAGE {node.step}
                </span>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-neutral-900 mb-1">
                  {node.title}
                </h4>
                <p className="font-sans text-[11px] text-neutral-500 leading-tight">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 font-mono text-xs">
          {sectors.map((sec) => {
            const isSelected = sec.id === selectedId;
            const Icon = sec.icon;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedId(sec.id)}
                className={`p-3.5 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 text-[#F8F6F1] border-neutral-900 shadow-sm'
                    : 'bg-white text-neutral-700 border-[#E5E0D8] hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#C25E2E]' : 'text-neutral-400'}`} />
                  <span className="text-[9px] uppercase tracking-wider text-neutral-400">
                    {sec.category.split('&')[0]}
                  </span>
                </div>
                <span className="font-serif text-xs sm:text-sm font-bold block leading-tight">
                  {sec.title.split('(')[0].split('&')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Deep-Dive Dossier */}
        <div className="bg-white border border-[#E5E0D8] p-6 sm:p-10 shadow-sm relative">
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between pb-6 mb-8 border-b border-[#F0EBE1] gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C25E2E] font-bold block mb-1">
                {currentSector.category} • URBAN IMPACT DOSSIER
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900">
                {currentSector.title}
              </h3>
              <p className="font-serif italic text-neutral-600 text-sm sm:text-base mt-1">
                “{currentSector.tagline}”
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`font-mono text-xs uppercase px-3 py-1 border font-semibold ${currentSector.badgeStyle}`}>
                {currentSector.exposureStatus}
              </span>
            </div>
          </div>

          {/* Key Metrics Snapshot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {currentSector.keyMetrics.map((metric, i) => (
              <div key={i} className="p-4 bg-[#FAF8F5] border border-[#EBE6DD]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                  {metric.label}
                </span>
                <span className="font-serif text-lg font-bold text-neutral-900 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description & Corridor Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="p-6 bg-[#FAF8F5] border-l-2 border-neutral-900 border-y border-r border-[#EAE5DC]">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-neutral-900 font-bold">
                <Layers className="w-4 h-4 text-[#C25E2E]" />
                <span>HOW THE SHIFT MATERIALIZES</span>
              </div>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                {currentSector.whatChanges}
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#C25E2E] border-y border-r border-[#EAE5DC]">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[#C25E2E] font-bold">
                <MapPin className="w-4 h-4 text-[#C25E2E]" />
                <span>GEOGRAPHIC TECH CORRIDOR GROUND REALITY</span>
              </div>
              <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                {currentSector.corridorNotes}
              </p>
            </div>
          </div>

          {/* Required Adaptation Pivot */}
          <div className="p-6 bg-[#111111] text-[#F8F6F1] border border-[#222222]">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#C25E2E] font-bold uppercase tracking-wider">
              <span>HOW THIS SECTOR MUST ADAPT FOR 2026 → 2030</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-neutral-200">
              {currentSector.adaptationStrategy}
            </p>
          </div>
        </div>

        {/* Two-Column Editorial Photo Spread for Urban Ripple */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photo 1: Co-Living / PGs */}
          <div className="border border-[#E5E0D8] bg-white p-2.5 sm:p-3 shadow-sm">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="/images/urban_coliving.jpg"
                alt="Modern co-living housing and urban workspace along tech corridor"
                className="w-full h-full object-cover filter contrast-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider">
                URBAN DISPATCH • HOUSING
              </div>
            </div>
            <div className="pt-2.5 pb-1 px-1 text-xs font-mono text-neutral-600">
              <p className="font-sans text-xs text-neutral-700">
                <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 4.1</span>
                Secondary Housing Shift: Tech corridor bachelor PGs and hostels re-architecting into high-bandwidth co-living units for remote &amp; hybrid engineers.
              </p>
            </div>
          </div>

          {/* Photo 2: Corridor Transit & Tech Park */}
          <div className="border border-[#E5E0D8] bg-white p-2.5 sm:p-3 shadow-sm">
            <div className="relative overflow-hidden aspect-[16/10]">
              <img
                src="/images/chennai_omr_corridor.jpg"
                alt="Tech corridor transit and urban infrastructure along OMR"
                className="w-full h-full object-cover filter contrast-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-xs text-[#F8F6F1] font-mono text-[10px] uppercase px-2.5 py-1 tracking-wider">
                CORRIDOR GEOGRAPHY • TRANSIT
              </div>
            </div>
            <div className="pt-2.5 pb-1 px-1 text-xs font-mono text-neutral-600">
              <p className="font-sans text-xs text-neutral-700">
                <span className="font-mono font-bold text-[#C25E2E] mr-1.5">FIG 4.2</span>
                Corridor Geography: Transit arteries along Chennai OMR, Bengaluru ORR, and Hyderabad Gachibowli experiencing mid-week clustered commute flows.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Footnote */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-neutral-500">
          <div>
            <span>SOURCE: URBAN WORKFORCE &amp; SECONDARY CORRIDOR STUDIES</span>
            <span className="mx-2">•</span>
            <span>DATA SCOPE: BENGALURU, CHENNAI, HYDERABAD, PUNE</span>
          </div>
          <span className="text-neutral-900 font-semibold">URBAN RESILIENCE MONOGRAPH</span>
        </div>
      </div>
    </section>
  );
};
