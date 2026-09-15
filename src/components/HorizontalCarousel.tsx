import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalCarouselProps {
  totalItems: number;
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
  children: React.ReactNode;
  itemTitle?: string;
  categoryLabel?: string;
}

export const HorizontalCarousel: React.FC<HorizontalCarouselProps> = ({
  totalItems,
  currentIndex,
  onIndexChange,
  children,
  itemTitle,
  categoryLabel = 'EXPLORER'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex > 0 ? currentIndex - 1 : totalItems - 1);
  }, [currentIndex, totalItems, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex < totalItems - 1 ? currentIndex + 1 : 0);
  }, [currentIndex, totalItems, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if this element or its child has focus, or if visible in viewport
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA' || document.activeElement?.tagName === 'SELECT') {
        return;
      }
      if (e.key === 'ArrowLeft') {
        // Only if container is in view
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
          handlePrev();
        }
      } else if (e.key === 'ArrowRight') {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 60) {
      handleNext();
      setTouchStart(null);
    } else if (diff < -60) {
      handlePrev();
      setTouchStart(null);
    }
  };

  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalItems).padStart(2, '0');

  return (
    <div
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      className="w-full select-none"
    >
      {/* Top Carousel Navigation Bar */}
      <div className="flex items-center justify-between border-b border-hairline pb-3 mb-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="bg-ink text-bone px-2 py-0.5 text-[0.65rem] font-bold tracking-widest">
            {formattedIndex} / {formattedTotal}
          </span>
          {categoryLabel && (
            <span className="text-neutral-500 uppercase tracking-widest text-[0.65rem] font-bold hidden sm:inline">
              {categoryLabel}
            </span>
          )}
          {itemTitle && (
            <span className="text-ink font-serif font-bold text-xs truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {itemTitle}
            </span>
          )}
        </div>

        {/* Carousel Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center gap-1 px-3 py-1.5 bg-cream border border-hairline text-ink hover:bg-ink hover:text-bone transition-all text-xs font-bold font-mono uppercase tracking-wider cursor-pointer"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">PREV</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-1 px-3 py-1.5 bg-cream border border-hairline text-ink hover:bg-ink hover:text-bone transition-all text-xs font-bold font-mono uppercase tracking-wider cursor-pointer"
            aria-label="Next item"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Slide Content with smooth transition */}
      <div className="transition-all duration-300 ease-in-out overflow-hidden">
        {children}
      </div>

      {/* Slide Indicator Dots */}
      {totalItems <= 25 && (
        <div className="flex justify-center items-center gap-1.5 mt-4 pt-2 border-t border-hairline/60">
          {Array.from({ length: totalItems }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onIndexChange(idx)}
              className={`h-1.5 transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-ink'
                  : 'w-2 bg-neutral-300 hover:bg-neutral-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
