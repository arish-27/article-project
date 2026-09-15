import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { itRoles } from '../data/rolesData';
import { ITRole } from '../types';
import { DataStatusBadge } from './DataStatusBadge';
import { Search, ChevronLeft, ChevronRight, Pause, Play, Sparkles, Eye, LayoutGrid, SlidersHorizontal } from 'lucide-react';

interface RoleExplorerProps {
  onSelectRole: (role: ITRole) => void;
}

export const RoleExplorerSection: React.FC<RoleExplorerProps> = ({ onSelectRole }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExposure, setSelectedExposure] = useState('all');
  const [selectedTransformation, setSelectedTransformation] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const filteredRoles = useMemo(() => {
    return itRoles.filter(role => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        role.title.toLowerCase().includes(q) ||
        role.summary.toLowerCase().includes(q) ||
        role.humanAnchor.toLowerCase().includes(q) ||
        role.futureSkills.some(s => s.toLowerCase().includes(q));

      const matchesCat = selectedCategory === 'all' || role.category === selectedCategory;
      const matchesExp = selectedExposure === 'all' || role.aiExposureLevel === selectedExposure;
      const matchesTrans = selectedTransformation === 'all' || role.transformation === selectedTransformation;

      return matchesSearch && matchesCat && matchesExp && matchesTrans;
    });
  }, [searchQuery, selectedCategory, selectedExposure, selectedTransformation]);

  const totalItems = filteredRoles.length;
  const safeIndex = Math.min(currentIndex, Math.max(0, totalItems - 1));

  const scrollToRole = useCallback((index: number) => {
    setCurrentIndex(index);
    const role = filteredRoles[index];
    if (role && cardRefs.current[role.id] && containerRef.current) {
      cardRefs.current[role.id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [filteredRoles]);

  const handleNext = useCallback(() => {
    if (totalItems <= 1) return;
    const nextIdx = (safeIndex + 1) % totalItems;
    scrollToRole(nextIdx);
  }, [totalItems, safeIndex, scrollToRole]);

  const handlePrev = useCallback(() => {
    if (totalItems <= 1) return;
    const prevIdx = (safeIndex - 1 + totalItems) % totalItems;
    scrollToRole(prevIdx);
  }, [totalItems, safeIndex, scrollToRole]);

  // Gentle auto slide effect that pauses on user hover
  useEffect(() => {
    if (!isPlaying || isHovered || totalItems <= 1 || viewMode === 'grid') return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext, totalItems, viewMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName || '')) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section
      id="roles"
      className="py-16 md:py-24 px-4 sm:px-8 border-b border-hairline bg-cream"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="border-b border-hairline pb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">
                SCREEN 09 • 16 IT ROLES EXPLAINED
              </span>
              <DataStatusBadge status="REPORTED" />
              <span className="bg-amberAccent/15 text-amber-900 text-[0.6rem] font-mono px-2 py-0.5 font-bold uppercase border border-amberAccent/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-amberAccent" />
                INTERACTIVE DOSSIER
              </span>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-ink">
              HOW WILL INDIVIDUAL IT JOBS CHANGE?
            </h2>
          </div>

          {/* Controls: View Mode & Carousel Steppers */}
          <div className="flex items-center gap-2 font-mono text-xs">
            {/* View Mode Toggle: Slider vs Grid */}
            <div className="flex items-center bg-bone border border-hairline p-0.5 mr-1">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1 px-2.5 py-1 text-[0.65rem] font-bold uppercase transition-colors cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-ink text-bone shadow-xs'
                    : 'text-neutral-600 hover:text-ink'
                }`}
                title="Slider Carousel View"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>SLIDE</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 px-2.5 py-1 text-[0.65rem] font-bold uppercase transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-ink text-bone shadow-xs'
                    : 'text-neutral-600 hover:text-ink'
                }`}
                title="Grid All Roles View"
              >
                <LayoutGrid className="w-3 h-3" />
                <span>GRID</span>
              </button>
            </div>

            {viewMode === 'slider' && (
              <>
                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(prev => !prev)}
                  title={isPlaying ? 'Click to Pause auto-slide' : 'Click to Play auto-slide'}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 border transition-all cursor-pointer font-bold text-[0.68rem] ${
                    isPlaying
                      ? 'bg-amber-100 border-amber-400 text-amber-900'
                      : 'bg-bone border-hairline text-neutral-700 hover:border-ink'
                  }`}
                  aria-label={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 fill-current" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current" />
                      <span>AUTO</span>
                    </>
                  )}
                </button>

                <span className="bg-ink text-bone px-2 py-1.5 text-[0.68rem] font-bold">
                  {String(safeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
                </span>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-bone border border-hairline text-ink hover:bg-ink hover:text-bone transition-all font-bold cursor-pointer"
                  aria-label="Previous role slide"
                  title="Previous role (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1 px-2.5 py-1.5 bg-bone border border-hairline text-ink hover:bg-ink hover:text-bone transition-all font-bold cursor-pointer"
                  aria-label="Next role slide"
                  title="Next role (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Search & Filters Bar */}
        <div className="bg-bone p-4 border border-hairline grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs shadow-xs">
          {/* Search Query */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">SEARCH JOB OR SKILL</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setCurrentIndex(0);
                }}
                placeholder="e.g. Architect, QA, Java, DevOps..."
                className="w-full bg-cream border border-hairline p-2 pl-7 text-ink text-xs focus:outline-none focus:border-ink font-sans"
              />
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2 top-2.5" />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">JOB FAMILY / CATEGORY</label>
            <select
              value={selectedCategory}
              onChange={e => {
                setSelectedCategory(e.target.value);
                setCurrentIndex(0);
              }}
              className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
            >
              <option value="all">ALL CATEGORIES (16 ROLES)</option>
              <option value="ENGINEERING">ENGINEERING &amp; ARCHITECTURE</option>
              <option value="QA_TESTING">QA &amp; TESTING</option>
              <option value="DATA_AI">DATA &amp; AI</option>
              <option value="OPERATIONS">OPERATIONS &amp; CLOUD</option>
              <option value="SECURITY">CYBERSECURITY</option>
              <option value="LEADERSHIP">PRODUCT &amp; LEADERSHIP</option>
              <option value="MAINTENANCE">SUPPORT &amp; MAINTENANCE</option>
            </select>
          </div>

          {/* AI Exposure Filter */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">TASKS AI CAN ASSIST WITH</label>
            <select
              value={selectedExposure}
              onChange={e => {
                setSelectedExposure(e.target.value);
                setCurrentIndex(0);
              }}
              className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
            >
              <option value="all">ALL LEVELS</option>
              <option value="HIGH">HIGH (65% - 85%)</option>
              <option value="MEDIUM">MEDIUM (45% - 64%)</option>
              <option value="LOW">LOW (&lt; 45%)</option>
            </select>
          </div>

          {/* Transformation Vector Filter */}
          <div>
            <label className="text-[0.65rem] text-neutral-500 uppercase block mb-1 font-bold">FUTURE CAREER OUTLOOK</label>
            <select
              value={selectedTransformation}
              onChange={e => {
                setSelectedTransformation(e.target.value);
                setCurrentIndex(0);
              }}
              className="w-full bg-cream border border-hairline p-2 text-ink text-xs focus:outline-none focus:border-ink font-mono"
            >
              <option value="all">ALL OUTLOOKS</option>
              <option value="GROWING">GROWING (High Demand)</option>
              <option value="TRANSFORMING">TRANSFORMING (Way of Work Changing)</option>
              <option value="SHRINKING">SHRINKING (Repetitive Work Reducing)</option>
            </select>
          </div>
        </div>

        {/* Roles Display (Slider or Grid View) */}
        {filteredRoles.length > 0 ? (
          <div className="space-y-4">
            {viewMode === 'slider' ? (
              /* Smooth Horizontal Scroll Track (No cut-offs or empty ends) */
              <div
                ref={containerRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {filteredRoles.map((role, idx) => {
                  let exposureColor = 'bg-emerald-600';
                  if (role.aiExposure >= 70) exposureColor = 'bg-rose-600';
                  else if (role.aiExposure >= 50) exposureColor = 'bg-amber-600';

                  const isCurrent = idx === safeIndex;

                  return (
                    <article
                      key={role.id}
                      ref={el => { cardRefs.current[role.id] = el; }}
                      onClick={() => {
                        setCurrentIndex(idx);
                        onSelectRole(role);
                      }}
                      className={`w-[320px] sm:w-[360px] md:w-[390px] shrink-0 snap-start p-5 sm:p-6 flex flex-col justify-between border transition-all duration-300 cursor-pointer group shadow-xs bg-bone rounded-xs ${
                        isCurrent
                          ? 'border-ink ring-2 ring-ink/20 shadow-md bg-cream'
                          : 'border-hairline hover:border-ink hover:bg-cream'
                      }`}
                    >
                      <div>
                        {/* Top Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-[0.62rem] tracking-widest text-neutral-500 uppercase font-bold">
                            {role.categoryLabel}
                          </span>
                          <span className={`badge-mono text-[0.58rem] font-bold ${role.transformationBadgeClass}`}>
                            {role.transformation === 'AT RISK' ? 'HIGH REPETITIVE WORK' : role.transformation === 'TRANSFORMING' ? 'WAY OF WORK CHANGING' : 'GROWING DEMAND'}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-xl text-ink group-hover:text-amberAccent transition-colors mb-3 leading-snug">
                          {role.title}
                        </h3>

                        {/* AI Exposure Progress Bar */}
                        <div className="mb-4 bg-bone p-3 border border-hairline">
                          <div className="flex justify-between text-[0.65rem] font-mono mb-1.5">
                            <span className="text-neutral-500 font-bold uppercase">TASKS AI CAN ASSIST WITH</span>
                            <span className="font-bold text-ink">{role.aiExposure}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                            <div
                              className={`${exposureColor} h-full transition-all duration-500 rounded-full`}
                              style={{ width: `${role.aiExposure}%` }}
                            />
                          </div>
                          <div className="text-[0.6rem] text-neutral-500 mt-1.5 font-sans">
                            Represents routine daily tasks AI tools help complete, not jobs lost.
                          </div>
                        </div>

                        {/* Core Human Anchor */}
                        <div className="bg-amber-50/50 p-3 border border-amber-300/80 mb-3.5 rounded-xs">
                          <div className="text-[0.58rem] font-mono tracking-widest text-amber-900 uppercase font-bold mb-1">
                            WHAT ONLY HUMANS DO WELL
                          </div>
                          <div className="text-xs font-sans text-neutral-900 font-semibold leading-snug">
                            {role.humanAnchor}
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="text-xs text-neutral-600 font-sans leading-relaxed mb-3 line-clamp-3">
                          {role.summary}
                        </p>

                        {/* Skills Tag Pills */}
                        <div className="flex flex-wrap gap-1 mb-4 font-mono text-[0.6rem]">
                          {role.futureSkills.slice(0, 3).map(skill => (
                            <span key={skill} className="px-1.5 py-0.5 bg-bone border border-hairline text-neutral-700">
                              {skill}
                            </span>
                          ))}
                          {role.futureSkills.length > 3 && (
                            <span className="px-1.5 py-0.5 bg-bone border border-hairline text-neutral-400">
                              +{role.futureSkills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Footer CTA */}
                      <div className="pt-3 border-t border-hairline flex items-center justify-between text-xs font-mono">
                        <span className="text-[0.65rem] text-neutral-600 group-hover:text-ink font-bold uppercase tracking-wider flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-amberAccent" />
                          VIEW FULL ROLE DETAILS →
                        </span>
                        <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* Grid View: Responsive 1, 2, or 3-column layout */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRoles.map(role => {
                  let exposureColor = 'bg-emerald-600';
                  if (role.aiExposure >= 70) exposureColor = 'bg-rose-600';
                  else if (role.aiExposure >= 50) exposureColor = 'bg-amber-600';

                  return (
                    <article
                      key={role.id}
                      onClick={() => onSelectRole(role)}
                      className="p-5 bg-bone border border-hairline hover:border-ink hover:bg-cream transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs group rounded-xs"
                    >
                      <div>
                        {/* Top Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-[0.62rem] tracking-widest text-neutral-500 uppercase font-bold">
                            {role.categoryLabel}
                          </span>
                          <span className={`badge-mono text-[0.58rem] font-bold ${role.transformationBadgeClass}`}>
                            {role.transformation === 'AT RISK' ? 'HIGH REPETITIVE' : role.transformation === 'TRANSFORMING' ? 'TRANSFORMING' : 'GROWING'}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-lg text-ink group-hover:text-amberAccent transition-colors mb-2.5">
                          {role.title}
                        </h3>

                        {/* AI Exposure Progress Bar */}
                        <div className="mb-3 bg-bone p-2.5 border border-hairline">
                          <div className="flex justify-between text-[0.62rem] font-mono mb-1">
                            <span className="text-neutral-500 font-bold uppercase">TASKS AI CAN ASSIST WITH</span>
                            <span className="font-bold text-ink">{role.aiExposure}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`${exposureColor} h-full rounded-full`}
                              style={{ width: `${role.aiExposure}%` }}
                            />
                          </div>
                        </div>

                        {/* Core Human Anchor */}
                        <div className="bg-amber-50/50 p-2.5 border border-amber-300/80 mb-3 rounded-xs">
                          <div className="text-[0.55rem] font-mono tracking-widest text-amber-900 uppercase font-bold mb-0.5">
                            WHAT ONLY HUMANS DO WELL
                          </div>
                          <div className="text-xs font-sans text-neutral-900 font-semibold leading-snug">
                            {role.humanAnchor}
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="text-xs text-neutral-600 font-sans leading-relaxed mb-3 line-clamp-2">
                          {role.summary}
                        </p>
                      </div>

                      {/* Footer CTA */}
                      <div className="pt-3 border-t border-hairline flex items-center justify-between text-xs font-mono">
                        <span className="text-[0.65rem] text-neutral-600 group-hover:text-ink font-bold uppercase tracking-wider flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-amberAccent" />
                          VIEW FULL ROLE DETAILS →
                        </span>
                        <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Carousel Slide Indicators & Quick Jump Bar */}
            {viewMode === 'slider' && (
              <div className="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-hairline">
                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5">
                  {filteredRoles.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToRole(idx)}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        idx === safeIndex
                          ? 'w-7 bg-ink'
                          : 'w-2 bg-neutral-300 hover:bg-neutral-500'
                      }`}
                      aria-label={`Jump to role slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Quick Jump Buttons for Roles */}
                <div className="flex flex-wrap items-center gap-1 font-mono text-[0.62rem] text-neutral-500">
                  <span className="uppercase font-bold mr-1">QUICK JUMP:</span>
                  {filteredRoles.slice(0, 8).map((role, idx) => (
                    <button
                      key={role.id}
                      onClick={() => scrollToRole(idx)}
                      className={`px-2 py-0.5 border cursor-pointer transition-colors rounded-xs ${
                        idx === safeIndex
                          ? 'bg-ink text-bone border-ink font-bold shadow-xs'
                          : 'bg-bone text-neutral-600 border-hairline hover:border-ink hover:text-ink'
                      }`}
                    >
                      {role.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-bone border border-hairline p-12 text-center space-y-3 font-mono">
            <span className="text-xs text-neutral-400 uppercase tracking-widest block font-bold">
              NO MATCHING JOBS
            </span>
            <p className="font-serif text-lg text-ink">
              No roles match your search filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedExposure('all');
                setSelectedTransformation('all');
                setCurrentIndex(0);
              }}
              className="px-4 py-2 bg-ink text-bone text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
