import React, { useState, useMemo, useRef, useEffect } from 'react';
import { companiesData } from '../data/companiesData';
import { CompanyData } from '../types';
import { DataStatusBadge } from './DataStatusBadge';
import { HorizontalCarousel } from './HorizontalCarousel';
import { CompanyComparisonBarChart } from './ResearchCharts';
import { Search, Building2, MapPin, Users, BrainCircuit, TrendingUp, AlertTriangle, GraduationCap, ArrowRight, ArrowLeft, BarChart3, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { getCompanyLogoComponent } from './CompanyLogos';

// Helper to provide crisp brand and subtitle for cards
const getCompanyDisplayInfo = (name: string) => {
  if (name.includes('Tata Consultancy') || name.includes('TCS')) {
    return { brand: 'TCS', full: 'Tata Consultancy Services', shortTier: 'Tier-1 IT' };
  }
  if (name.includes('Infosys')) {
    return { brand: 'Infosys', full: 'Infosys Limited', shortTier: 'Tier-1 IT' };
  }
  if (name.includes('Wipro')) {
    return { brand: 'Wipro', full: 'Wipro Enterprises', shortTier: 'Tier-1 IT' };
  }
  if (name.includes('HCLTech')) {
    return { brand: 'HCLTech', full: 'HCL Technologies', shortTier: 'Tier-1 IT' };
  }
  if (name.includes('Cognizant')) {
    return { brand: 'Cognizant', full: 'Cognizant Technology Solutions', shortTier: 'Tier-1 IT' };
  }
  if (name.includes('Tech Mahindra')) {
    return { brand: 'Tech Mahindra', full: 'Tech Mahindra Ltd', shortTier: 'Tier-1 IT' };
  }
  if (name.includes('Accenture')) {
    return { brand: 'Accenture', full: 'Accenture Global', shortTier: 'Global MNC' };
  }
  if (name.includes('Capgemini')) {
    return { brand: 'Capgemini', full: 'Capgemini Technology', shortTier: 'Global MNC' };
  }
  if (name.includes('IBM')) {
    return { brand: 'IBM', full: 'IBM India / Global', shortTier: 'Global MNC' };
  }
  if (name.includes('Microsoft')) {
    return { brand: 'Microsoft', full: 'Microsoft India IDC', shortTier: 'Global Tech' };
  }
  if (name.includes('Amazon') || name.includes('AWS')) {
    return { brand: 'Amazon (AWS)', full: 'Amazon Development Centre', shortTier: 'Global Tech' };
  }
  if (name.includes('Google') || name.includes('Alphabet')) {
    return { brand: 'Google', full: 'Google India (Alphabet)', shortTier: 'Global Tech' };
  }
  if (name.includes('Oracle')) {
    return { brand: 'Oracle', full: 'Oracle India IDC', shortTier: 'Global Tech' };
  }
  if (name.includes('LTIMindtree')) {
    return { brand: 'LTIMindtree', full: 'Larsen & Toubro Group', shortTier: 'Mid-Tier' };
  }
  if (name.includes('Mphasis')) {
    return { brand: 'Mphasis', full: 'Mphasis Limited', shortTier: 'Mid-Tier' };
  }
  if (name.includes('Persistent')) {
    return { brand: 'Persistent', full: 'Persistent Systems', shortTier: 'Mid-Tier' };
  }
  if (name.includes('Coforge')) {
    return { brand: 'Coforge', full: 'Coforge Limited', shortTier: 'Mid-Tier' };
  }
  if (name.includes('Hexaware')) {
    return { brand: 'Hexaware', full: 'Hexaware Technologies', shortTier: 'Mid-Tier' };
  }
  if (name.includes('DXC')) {
    return { brand: 'DXC Technology', full: 'DXC Technology India', shortTier: 'Global IT' };
  }
  if (name.includes('Zoho')) {
    return { brand: 'Zoho', full: 'Zoho Corporation (SaaS)', shortTier: 'Product SaaS' };
  }
  if (name.includes('Freshworks')) {
    return { brand: 'Freshworks', full: 'Freshworks Inc (SaaS)', shortTier: 'Product SaaS' };
  }
  return { brand: name, full: name, shortTier: 'Enterprise' };
};

export const CompanyExplorerSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedCityFilter, setSelectedCityFilter] = useState('all');
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  const filteredCompanies = useMemo(() => {
    return companiesData.filter(c => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        c.name.toLowerCase().includes(q) || 
        c.headquarters.toLowerCase().includes(q) ||
        c.aiInitiatives.toLowerCase().includes(q) ||
        c.cityPresence.chennai.toLowerCase().includes(q);

      const matchesTier = selectedTier === 'all' || c.tier === selectedTier;
      
      let matchesCity = true;
      if (selectedCityFilter === 'chennai') {
        matchesCity = !c.cityPresence.chennai.includes('DATA NOT PUBLICLY DISCLOSED') && c.cityPresence.chennai.length > 0;
      } else if (selectedCityFilter === 'bengaluru') {
        matchesCity = !c.cityPresence.bengaluru.includes('DATA NOT PUBLICLY DISCLOSED') && c.cityPresence.bengaluru.length > 0;
      } else if (selectedCityFilter === 'hyderabad') {
        matchesCity = !c.cityPresence.hyderabad.includes('DATA NOT PUBLICLY DISCLOSED') && c.cityPresence.hyderabad.length > 0;
      }

      return matchesSearch && matchesTier && matchesCity;
    });
  }, [searchQuery, selectedTier, selectedCityFilter]);

  // Adjust active index if filtered array changes
  const validIndex = Math.min(activeCompanyIndex, Math.max(0, filteredCompanies.length - 1));
  const currentCompany: CompanyData | undefined = filteredCompanies[validIndex];

  useEffect(() => {
    if (filteredCompanies[validIndex]) {
      const activeEl = document.getElementById(`company-strip-${filteredCompanies[validIndex].id}`);
      if (activeEl && stripRef.current) {
        activeEl.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [validIndex, filteredCompanies]);

  const handlePrevCompany = () => {
    const newIndex = (validIndex - 1 + filteredCompanies.length) % filteredCompanies.length;
    setActiveCompanyIndex(newIndex);
  };

  const handleNextCompany = () => {
    const newIndex = (validIndex + 1) % filteredCompanies.length;
    setActiveCompanyIndex(newIndex);
  };

  return (
    <section id="companies" className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 03 • CORPORATE BENCHMARK
              </span>
              <DataStatusBadge status="REPORTED" />
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink mt-1">
              IT Companies: AI, Workforce &amp; City Presence
            </h2>
          </div>
          <div className="font-mono text-xs font-semibold text-neutral-500 uppercase">
            ANALYZING 21 MAJOR ENTERPRISE IT &amp; SAAS EMPLOYERS
          </div>
        </div>

        {/* Graph: Top IT Companies Headcount & AI Readiness Comparison */}
        <CompanyComparisonBarChart />

        {/* Filter and Search Toolbar */}
        <div className="bg-bone p-4 border border-hairline grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          {/* Search */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">SEARCH COMPANY</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setActiveCompanyIndex(0);
                }}
                placeholder="e.g. TCS, Cognizant, Zoho, Microsoft..."
                className="w-full bg-cream border border-hairline p-2 pl-7 text-ink text-xs focus:outline-none focus:border-ink font-sans"
              />
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2 top-2.5" />
            </div>
          </div>

          {/* Tier Filter */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">CORPORATE TIER</label>
            <select
              value={selectedTier}
              onChange={e => {
                setSelectedTier(e.target.value);
                setActiveCompanyIndex(0);
              }}
              className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
            >
              <option value="all">ALL TIERS (21 COMPANIES)</option>
              <option value="Tier-1 IT Services">TIER-1 IT SERVICES</option>
              <option value="Global Enterprise / Tech">GLOBAL ENTERPRISE / TECH</option>
              <option value="Specialized &amp; Mid-Tier">SPECIALIZED &amp; MID-TIER</option>
              <option value="Product &amp; SaaS">PRODUCT &amp; SAAS</option>
            </select>
          </div>

          {/* City Presence Filter */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">CITY CONCENTRATION</label>
            <select
              value={selectedCityFilter}
              onChange={e => {
                setSelectedCityFilter(e.target.value);
                setActiveCompanyIndex(0);
              }}
              className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
            >
              <option value="all">ALL CITIES</option>
              <option value="chennai">CHENNAI HUBS (PRIMARY FOCUS)</option>
              <option value="bengaluru">BENGALURU HUBS</option>
              <option value="hyderabad">HYDERABAD HUBS</option>
            </select>
          </div>
        </div>

        {/* Horizontal Sliding Company Explorer */}
        {filteredCompanies.length > 0 && currentCompany ? (
          <HorizontalCarousel
            totalItems={filteredCompanies.length}
            currentIndex={validIndex}
            onIndexChange={setActiveCompanyIndex}
            itemTitle={currentCompany.name}
            categoryLabel={currentCompany.tier}
          >
            <div className="bg-bone border border-hairline p-6 md:p-8 shadow-sm">
              {/* Card Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-hairline">
                <div className="flex items-center gap-4">
                  {(() => {
                    const SvgLogo = getCompanyLogoComponent(currentCompany.name);
                    if (SvgLogo) {
                      return (
                        <div className="h-14 w-40 bg-white px-3 py-2 rounded border border-hairline/90 shadow-xs flex items-center justify-center shrink-0">
                          <SvgLogo className="w-full h-full max-h-10" />
                        </div>
                      );
                    }
                    return null;
                  })()}
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-amber-800 font-bold bg-amber-50 px-2 py-0.5 border border-amber-200">
                        {currentCompany.tier}
                      </span>
                      <span className="text-neutral-300">•</span>
                      <span className="font-mono text-[0.68rem] text-neutral-600">
                        HQ: {currentCompany.headquarters}
                      </span>
                    </div>
                    <h3 className="font-serif font-black text-2xl md:text-3xl text-ink">
                      {currentCompany.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <DataStatusBadge status={currentCompany.dataStatus} />
                  <span className="bg-parchment text-neutral-700 px-2.5 py-1 text-[0.65rem] font-mono font-semibold border border-hairline">
                    PERIOD: {currentCompany.dataPeriod}
                  </span>
                </div>
              </div>

              {/* Workforce Headcount Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="bg-cream p-4 border border-hairline">
                  <span className="text-[0.65rem] font-mono uppercase text-neutral-500 block mb-1 font-bold">
                    TOTAL PEOPLE WORKING HERE (GLOBAL)
                  </span>
                  <div className="font-serif font-bold text-xl text-ink">{currentCompany.globalWorkforce}</div>
                </div>
                <div className="bg-cream p-4 border border-hairline">
                  <span className="text-[0.65rem] font-mono uppercase text-neutral-500 block mb-1 font-bold">
                    PEOPLE WORKING IN INDIA
                  </span>
                  <div className="font-serif font-bold text-xl text-ink">{currentCompany.indiaWorkforce}</div>
                </div>
                <div className="bg-parchment p-4 border border-amberAccent/40">
                  <span className="text-[0.65rem] font-mono uppercase text-amberAccent font-bold block mb-1">
                    MAJOR INDIAN HUBS
                  </span>
                  <div className="font-mono text-xs font-semibold text-ink">
                    Chennai • Bengaluru • Hyderabad
                  </div>
                </div>
              </div>

              {/* City Presence Breakdown (Chennai Primary Focus) */}
              <div className="mb-6 p-4 bg-cream border border-hairline space-y-3">
                <div className="flex items-center justify-between border-b border-hairline/60 pb-2 flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold uppercase text-neutral-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amberAccent" />
                    Offices &amp; Work Locations
                  </span>
                  <span className="text-[0.65rem] font-mono text-neutral-500">
                    Showing Chennai, Bengaluru &amp; Hyderabad
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                  <div className="p-3 bg-bone border border-hairline">
                    <span className="font-mono text-[0.65rem] font-bold text-amber-800 uppercase block mb-1">
                      CHENNAI OFFICES (PRIMARY FOCUS)
                    </span>
                    <p className="text-neutral-700 leading-relaxed font-medium">
                      {currentCompany.cityPresence.chennai}
                    </p>
                  </div>

                  <div className="p-3 bg-bone border border-hairline">
                    <span className="font-mono text-[0.65rem] font-bold text-neutral-600 uppercase block mb-1">
                      BENGALURU OFFICES
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {currentCompany.cityPresence.bengaluru}
                    </p>
                  </div>

                  <div className="p-3 bg-bone border border-hairline">
                    <span className="font-mono text-[0.65rem] font-bold text-neutral-600 uppercase block mb-1">
                      HYDERABAD OFFICES
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {currentCompany.cityPresence.hyderabad}
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Initiatives & Operational Diagnostics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* AI Initiatives */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-neutral-700">
                    <BrainCircuit className="w-3.5 h-3.5 text-amberAccent" />
                    How They Use AI in Daily Work
                  </div>
                  <p className="text-xs font-sans text-neutral-700 leading-relaxed bg-cream p-3.5 border border-hairline">
                    {currentCompany.aiInitiatives}
                  </p>
                </div>

                {/* Workforce Transformation */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-neutral-700">
                    <Users className="w-3.5 h-3.5 text-neutral-600" />
                    How Jobs Are Changing
                  </div>
                  <p className="text-xs font-sans text-neutral-700 leading-relaxed bg-cream p-3.5 border border-hairline">
                    {currentCompany.aiWorkforceTransformation}
                  </p>
                </div>

                {/* Hiring Trends & Fresher Intake */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-neutral-700">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-700" />
                    Hiring &amp; College Recruits
                  </div>
                  <div className="text-xs font-sans text-neutral-700 leading-relaxed bg-cream p-3.5 border border-hairline space-y-1.5">
                    <p><strong className="font-mono text-[0.7rem] uppercase">Experienced Hiring:</strong> {currentCompany.hiringTrend}</p>
                    <p><strong className="font-mono text-[0.7rem] uppercase">Fresher Hiring:</strong> {currentCompany.fresherIntake}</p>
                  </div>
                </div>

                {/* Bench & Layoffs Context */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-neutral-700">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                    Bench (Waiting for Projects) &amp; Job Cuts Context
                  </div>
                  <div className="text-xs font-sans text-neutral-700 leading-relaxed bg-cream p-3.5 border border-hairline space-y-1.5">
                    <p><strong className="font-mono text-[0.7rem] uppercase">People on Bench:</strong> {currentCompany.benchProjectAvailability}</p>
                    <p><strong className="font-mono text-[0.7rem] uppercase">Reason for Past Cuts:</strong> {currentCompany.layoffsContext}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stepper Bar Inside Card */}
              <div className="mt-6 pt-4 border-t border-hairline flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3">
                <div className="text-[0.68rem] font-mono text-neutral-500">
                  <span className="font-bold">VERIFIED SOURCE:</span> {currentCompany.source}
                  {currentCompany.disclosureNote && (
                    <span className="text-amber-800 italic block mt-0.5">
                      * {currentCompany.disclosureNote}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrevCompany}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 bg-cream border border-hairline hover:border-ink text-ink font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>PREV FIRM</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextCompany}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 bg-ink text-bone font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    <span>NEXT FIRM</span>
                    <ArrowRight className="w-3 h-3 text-amberAccent" />
                  </button>
                </div>
              </div>
            </div>
          </HorizontalCarousel>
        ) : (
          <div className="bg-bone border border-hairline p-12 text-center space-y-3">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block font-bold">
              NO MATCHING EMPLOYERS
            </span>
            <p className="font-serif text-lg text-ink">
              No companies match your search criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTier('all');
                setSelectedCityFilter('all');
              }}
              className="px-4 py-2 bg-ink text-bone font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800"
            >
              RESET FILTERS
            </button>
          </div>
        )}

        {/* Enhanced Quick Company Thumbnail Strip */}
        <div className="border-t border-hairline pt-6">
          {/* Header & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono uppercase font-bold text-neutral-700 tracking-wider">
                SELECT DIRECTLY FROM 21 BENCHMARKED FIRMS:
              </span>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 border border-amber-300 rounded-xs">
                {validIndex + 1} of {filteredCompanies.length} ACTIVE
              </span>
            </div>

            {/* Navigation & Hint */}
            <div className="flex items-center gap-2">
              <span className="text-[0.65rem] font-mono text-neutral-500 hidden sm:inline">
                Click any card or use arrow keys ← →
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevCompany}
                  className="p-1.5 bg-bone border border-hairline hover:border-ink hover:bg-cream text-ink transition-colors cursor-pointer shadow-xs rounded-xs"
                  aria-label="Previous company"
                  title="Previous company (Left arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextCompany}
                  className="p-1.5 bg-bone border border-hairline hover:border-ink hover:bg-cream text-ink transition-colors cursor-pointer shadow-xs rounded-xs"
                  aria-label="Next company"
                  title="Next company (Right arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Filter Segmented Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-[0.65rem] font-mono font-bold">
            <button
              onClick={() => { setSelectedTier('all'); setSelectedCityFilter('all'); }}
              className={`px-3 py-1.5 border transition-all shrink-0 cursor-pointer rounded-xs ${
                selectedTier === 'all' && selectedCityFilter === 'all'
                  ? 'bg-ink text-bone border-ink shadow-xs'
                  : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
              }`}
            >
              ALL (21)
            </button>
            <button
              onClick={() => { setSelectedTier('Tier-1 IT Services'); setSelectedCityFilter('all'); }}
              className={`px-3 py-1.5 border transition-all shrink-0 cursor-pointer rounded-xs ${
                selectedTier === 'Tier-1 IT Services'
                  ? 'bg-ink text-bone border-ink shadow-xs'
                  : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
              }`}
            >
              TIER-1 IT (6)
            </button>
            <button
              onClick={() => { setSelectedTier('Global Enterprise / Tech'); setSelectedCityFilter('all'); }}
              className={`px-3 py-1.5 border transition-all shrink-0 cursor-pointer rounded-xs ${
                selectedTier === 'Global Enterprise / Tech'
                  ? 'bg-ink text-bone border-ink shadow-xs'
                  : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
              }`}
            >
              GLOBAL TECH &amp; MNC (5)
            </button>
            <button
              onClick={() => { setSelectedTier('Specialized & Mid-Tier'); setSelectedCityFilter('all'); }}
              className={`px-3 py-1.5 border transition-all shrink-0 cursor-pointer rounded-xs ${
                selectedTier === 'Specialized & Mid-Tier'
                  ? 'bg-ink text-bone border-ink shadow-xs'
                  : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
              }`}
            >
              MID-TIER &amp; SPECIALIZED (5)
            </button>
            <button
              onClick={() => { setSelectedTier('Product & SaaS'); setSelectedCityFilter('all'); }}
              className={`px-3 py-1.5 border transition-all shrink-0 cursor-pointer rounded-xs ${
                selectedTier === 'Product & SaaS'
                  ? 'bg-ink text-bone border-ink shadow-xs'
                  : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
              }`}
            >
              PRODUCT &amp; SAAS (5)
            </button>
            <button
              onClick={() => { setSelectedCityFilter('chennai'); setSelectedTier('all'); }}
              className={`px-3 py-1.5 border transition-all shrink-0 cursor-pointer rounded-xs ${
                selectedCityFilter === 'chennai'
                  ? 'bg-amberAccent text-bone border-amberAccent shadow-xs'
                  : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
              }`}
            >
              CHENNAI HUBS
            </button>
          </div>

          {/* Scrolling Horizontal Strip with Hidden Default Scrollbar */}
          <div className="relative">
            <div
              ref={stripRef}
              className="flex gap-3 overflow-x-auto pb-3 pt-1 scroll-smooth select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {filteredCompanies.map((comp, idx) => {
                const SvgLogo = getCompanyLogoComponent(comp.name);
                const isSelected = idx === validIndex;
                const displayInfo = getCompanyDisplayInfo(comp.name);

                return (
                  <button
                    key={comp.id}
                    id={`company-strip-${comp.id}`}
                    onClick={() => setActiveCompanyIndex(idx)}
                    className={`shrink-0 w-48 sm:w-56 p-3.5 border transition-all duration-200 text-left flex flex-col justify-between cursor-pointer group rounded-xs ${
                      isSelected
                        ? 'bg-cream border-amberAccent shadow-md ring-2 ring-amberAccent/40 -translate-y-0.5'
                        : 'bg-bone border-hairline hover:border-ink hover:bg-cream hover:shadow-xs hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Top Status & Tier Row */}
                    <div className="flex items-center justify-between gap-1 mb-2.5">
                      <span className={`px-1.5 py-0.5 border font-mono text-[0.58rem] font-bold uppercase rounded-xs ${
                        isSelected
                          ? 'bg-amber-100/70 border-amber-300 text-amber-900'
                          : 'bg-cream border-hairline text-neutral-600'
                      }`}>
                        {displayInfo.shortTier}
                      </span>

                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 text-[0.56rem] font-mono font-bold uppercase text-amber-900 bg-amber-100/90 px-1.5 py-0.5 border border-amber-300 rounded-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-amberAccent animate-pulse" />
                          ACTIVE
                        </span>
                      ) : (
                        <span className="text-[0.62rem] font-mono text-neutral-400 font-semibold">
                          #{String(idx + 1).padStart(2, '0')}
                        </span>
                      )}
                    </div>

                    {/* High-Contrast Logo Frame */}
                    <div className={`h-12 w-full px-3 py-2 rounded-xs border flex items-center justify-center mb-3 transition-colors ${
                      isSelected
                        ? 'bg-white border-amberAccent/40 shadow-xs'
                        : 'bg-white/90 border-hairline group-hover:border-neutral-400 shadow-xs'
                    }`}>
                      {SvgLogo ? (
                        <SvgLogo className="w-full h-full max-h-8" />
                      ) : (
                        <span className="font-serif font-bold text-sm text-ink truncate">{displayInfo.brand}</span>
                      )}
                    </div>

                    {/* Company Titles */}
                    <div className="space-y-0.5 mb-3">
                      <div className="font-serif font-bold text-ink text-sm leading-snug truncate group-hover:text-amberAccent transition-colors">
                        {displayInfo.brand}
                      </div>
                      <div className="text-[0.65rem] font-sans text-neutral-500 truncate">
                        {displayInfo.full}
                      </div>
                    </div>

                    {/* Footer: India Headcount */}
                    <div className="pt-2 border-t border-hairline/70 flex items-center justify-between text-[0.62rem] font-mono">
                      <span className="text-neutral-500 font-medium">India Staff:</span>
                      <span className="font-bold text-ink bg-parchment px-1.5 py-0.5 border border-hairline rounded-xs">
                        {comp.indiaHeadcount || comp.indiaWorkforce.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unified Bottom Progress & Navigation Control Bar */}
          {filteredCompanies.length > 0 && (
            <div className="mt-3 pt-3 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[0.68rem] font-mono text-neutral-600">
                <span>Viewing</span>
                <span className="font-bold text-ink">{validIndex + 1}</span>
                <span>of</span>
                <span className="font-bold text-ink">{filteredCompanies.length}</span>
                <span>companies</span>
              </div>

              <div className="flex-1 max-w-xs h-1.5 bg-neutral-200/90 rounded-full overflow-hidden mx-2">
                <div
                  className="h-full bg-amberAccent transition-all duration-300 rounded-full"
                  style={{ width: `${((validIndex + 1) / filteredCompanies.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevCompany}
                  className="px-2.5 py-1 bg-bone border border-hairline hover:border-ink hover:bg-cream text-ink font-mono text-[0.65rem] font-bold uppercase transition-colors cursor-pointer flex items-center gap-1 rounded-xs"
                >
                  <ChevronLeft className="w-3 h-3" />
                  <span>PREV</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextCompany}
                  className="px-2.5 py-1 bg-ink text-bone font-mono text-[0.65rem] font-bold uppercase hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-1 rounded-xs"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3 h-3 text-amberAccent" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

