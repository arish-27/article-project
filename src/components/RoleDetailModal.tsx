import React, { useEffect } from 'react';
import { ITRole } from '../types';

interface RoleDetailModalProps {
  role: ITRole | null;
  onClose: () => void;
}

export const RoleDetailModal: React.FC<RoleDetailModalProps> = ({ role, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!role) return null;

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-cream p-4 border-b border-hairline flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest">
            ROLE OVERVIEW &amp; FUTURE SKILLS
          </span>
          <button
            onClick={onClose}
            className="font-mono text-xs font-bold text-ink hover:text-amberAccent cursor-pointer px-2 py-1 flex items-center gap-1"
          >
            <span>✕ CLOSE [ESC]</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh] custom-scrollbar space-y-6">
          {/* Header Title */}
          <div className="border-b border-hairline pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase font-bold">{role.categoryLabel}</span>
              <span className={`badge-mono ${role.transformationBadgeClass}`}>
                {role.transformation === 'AT RISK' ? 'HIGH REPETITIVE WORK' : role.transformation === 'TRANSFORMING' ? 'WAY OF WORK CHANGING' : 'GROWING DEMAND'}
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-2">{role.title}</h2>
            <p className="text-sm font-sans text-neutral-600 leading-relaxed">{role.summary}</p>
          </div>

          {/* Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
            <div className="bg-cream p-3 border border-hairline">
              <div className="text-[0.65rem] text-neutral-500 uppercase">TASKS AI CAN HELP WITH</div>
              <div className="text-lg font-bold text-ink mt-1">{role.aiExposure}% of Routine Work</div>
              <div className="text-[0.65rem] text-neutral-400 mt-0.5">Not % of jobs lost</div>
            </div>
            <div className="bg-cream p-3 border border-hairline">
              <div className="text-[0.65rem] text-neutral-500 uppercase">CORE HUMAN STRENGTH</div>
              <div className="text-xs font-semibold text-neutral-800 mt-1 line-clamp-2">{role.humanAnchor}</div>
            </div>
            <div className="bg-cream p-3 border border-hairline">
              <div className="text-[0.65rem] text-neutral-500 uppercase">FUTURE CAREER PATH</div>
              <div className="text-xs font-semibold text-amberAccent mt-1">{role.transformation}</div>
            </div>
          </div>

          {/* Core Responsibilities */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase font-bold text-ink mb-2 flex items-center gap-2">
              <span>■</span> WHAT THIS PERSON DOES
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-sans text-neutral-700">
              {role.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 bg-parchment p-2.5 border border-hairline">
                  <span className="text-neutral-400">›</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Automated vs Durable Tasks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Automated */}
            <div className="bg-bone p-4 border border-hairline">
              <h5 className="font-mono text-[0.7rem] uppercase font-bold text-neutral-600 mb-2 flex items-center gap-1.5">
                <span className="text-neutral-500">✕</span> ROUTINE TASKS AI CAN ASSIST WITH
              </h5>
              <ul className="space-y-1.5 text-xs text-neutral-700">
                {role.tasksAutomated.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-neutral-400 text-sm leading-none">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Durable */}
            <div className="bg-bone p-4 border border-hairline">
              <h5 className="font-mono text-[0.7rem] uppercase font-bold text-neutral-800 mb-2 flex items-center gap-1.5">
                <span className="text-amberAccent">✓</span> SKILLS ONLY HUMANS DO WELL
              </h5>
              <ul className="space-y-1.5 text-xs text-neutral-700">
                {role.tasksDurable.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amberAccent text-sm leading-none">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Future Skills */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase font-bold text-ink mb-2 flex items-center gap-2">
              <span>■</span> SKILLS THAT MAY BECOME MORE USEFUL
            </h4>
            <div className="flex flex-wrap gap-2">
              {role.futureSkills.map(s => (
                <span key={s} className="bg-cream px-3 py-1.5 border border-hairline font-mono text-xs font-semibold text-neutral-800">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Verdict */}
          <div className="bg-ink text-bone p-4 border border-darkhairline font-sans text-xs leading-relaxed">
            <div className="font-mono text-[0.65rem] tracking-widest uppercase font-bold text-amberAccent mb-1">
              SUMMARY &amp; CAREER ADVICE
            </div>
            <p>{role.verdict}</p>
          </div>

          {/* Chennai Context */}
          {role.chennaiContext && (
            <div className="text-[0.75rem] font-mono text-neutral-600 border-l-2 border-amberAccent pl-3">
              <span className="font-bold text-ink">LOCAL IT CORRIDOR CONTEXT:</span> {role.chennaiContext}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
