import React, { useEffect } from 'react';
import { chennaiCorridors } from '../data/citiesData';

interface ChennaiAreaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChennaiAreaModal: React.FC<ChennaiAreaModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-cream p-4 border-b border-hairline flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
            CHENNAI 8-CORRIDOR DETAILED SUB-MARKET DOSSIER
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs font-bold text-ink hover:text-amberAccent cursor-pointer px-2 py-1"
          >
            ✕ CLOSE [ESC]
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[80vh] custom-scrollbar space-y-4">
          {chennaiCorridors.map(c => (
            <div key={c.id} className="p-5 bg-cream border border-hairline hover:border-ink transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-serif font-bold text-lg text-ink">{c.name}</span>
                <span className={`badge-mono ${c.zoneBadgeClass}`}>{c.zone}</span>
              </div>
              <p className="font-mono text-xs text-amberAccent font-bold mb-2">{c.tagline}</p>
              <p className="font-sans text-xs text-neutral-700 leading-relaxed mb-4">{c.summary}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[0.7rem] bg-bone p-3 border border-hairline mb-3">
                <div>
                  <span className="text-neutral-500 block text-[0.6rem] uppercase">COMMERCIAL VACANCY</span>
                  <span className="font-bold text-ink">{c.commercialVacancy}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[0.6rem] uppercase">PG VS LUXURY YIELD</span>
                  <span className="font-bold text-neutral-800">{c.pgVsLuxuryYield}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[0.6rem] uppercase">INFORMAL MULTIPLIER</span>
                  <span className="font-bold text-emerald-800">{c.informalMultiplier}</span>
                </div>
              </div>

              <div className="text-[0.75rem] font-sans text-neutral-600">
                <strong className="font-mono text-neutral-800 uppercase text-[0.65rem]">Anchor Campuses:</strong> {c.anchors}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
