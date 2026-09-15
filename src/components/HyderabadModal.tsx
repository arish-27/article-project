import React, { useEffect } from 'react';
import { hyderabadZones } from '../data/citiesData';

interface HyderabadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HyderabadModal: React.FC<HyderabadModalProps> = ({ isOpen, onClose }) => {
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
        className="modal-container max-w-3xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-cream p-4 border-b border-hairline flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
            HYDERABAD SUB-MARKETS &amp; GCC EXPANSION
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs font-bold text-ink hover:text-amberAccent cursor-pointer px-2 py-1"
          >
            ✕ CLOSE [ESC]
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[80vh] custom-scrollbar space-y-4">
          {hyderabadZones.map(z => (
            <div key={z.id} className="p-5 bg-cream border border-hairline hover:border-ink transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-serif font-bold text-lg text-ink">{z.name}</span>
                <span className="badge-mono bg-emerald-100 text-emerald-800">{z.occupancy}</span>
              </div>
              <p className="font-mono text-xs text-amberAccent font-bold mb-2">{z.subtext}</p>
              <p className="font-sans text-xs text-neutral-700 leading-relaxed">{z.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
