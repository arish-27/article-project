import React from 'react';

export const TopUtilityBar: React.FC = () => {
  return (
    <aside className="bg-obsidian text-neutral-400 text-[11px] uppercase tracking-widest2 py-2 px-4 sm:px-8 border-b border-darkhairline" data-purpose="utility-header">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium text-neutral-200">NATIONAL RESEARCH INITIATIVE • URBAN RESILIENCE DOSSIER</span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline">DATA CYCLE 2024–2030</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <a className="hover:text-white transition-colors" href="#simulator">SCENARIO ENGINE V2.4</a>
          <span>•</span>
          <span className="text-neutral-200 font-semibold tracking-normal">CHENNAI • BENGALURU • HYDERABAD</span>
        </div>
      </div>
    </aside>
  );
};
