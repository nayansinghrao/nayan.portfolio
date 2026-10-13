import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!project) return;

    setIsLoading(true);
    setLoadPercentage(10);

    // Progressive loading percentage simulation while iframe streams in
    let currentPct = 10;
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    progressTimerRef.current = setInterval(() => {
      // Natural slowing ramp towards 94% until onLoad fires
      if (currentPct < 90) {
        const step = Math.max(2, Math.floor((90 - currentPct) / 6));
        currentPct = Math.min(92, currentPct + step);
        setLoadPercentage(currentPct);
      }
    }, 120);

    // Lock page scroll behind the modal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Store previous focused element to return focus after closing
    const previouslyFocusedElement = document.activeElement as HTMLElement | null;

    // Focus the close button when opened
    const focusTimeout = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Keyboard navigation: Escape to close, Tab to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), iframe'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimeout);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocusedElement) {
        previouslyFocusedElement.focus?.();
      }
    };
  }, [project, onClose]);

  const handleIframeLoad = () => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    setLoadPercentage(100);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-8 bg-black/80 backdrop-blur-md"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full md:w-[92vw] md:h-[92vh] max-w-7xl bg-[#141518] text-white flex flex-col rounded-none md:rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header bar: Project Name, Concept Project tag, and Close (X) button */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#1b1c20] border-b border-white/10 shrink-0 z-10">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <h2
                  id="project-modal-title"
                  className="font-display text-base sm:text-xl font-bold text-white truncate tracking-tight"
                >
                  {project.title}
                </h2>
                <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#ff5a1f]/15 border border-[#ff5a1f]/35 text-[#ff5a1f] text-[10px] sm:text-[11px] font-display font-semibold uppercase tracking-wider">
                  Concept Project
                </span>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer flex items-center justify-center focus:outline-hidden focus:ring-2 focus:ring-[#ff5a1f]"
              >
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">close</span>
              </button>
            </div>

            {/* Modal Body: Behance iframe with percentage loader */}
            <div className="relative flex-1 w-full h-full bg-[#0d0e10] overflow-hidden">
              {isLoading && (
                <div
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0d0e10] text-white p-6 gap-4 select-none pointer-events-none"
                  role="progressbar"
                  aria-valuenow={loadPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Loading project: ${loadPercentage}%`}
                >
                  {/* Circular Spinner with live percentage inside */}
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-3 border-white/10 border-t-[#ff5a1f] animate-spin" />
                    <span className="font-mono font-bold text-lg text-white tabular-nums">
                      {loadPercentage}%
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-2 max-w-xs w-full text-center">
                    <span className="text-xs sm:text-sm font-sans text-[#a2a09c]">
                      Loading {project.title} presentation...
                    </span>

                    {/* Progress Bar with glowing tip */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#e04810] to-[#ff5a1f] rounded-full transition-all duration-150 relative"
                        style={{ width: `${loadPercentage}%` }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/80 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <iframe
                key={project.behanceUrl}
                src={project.behanceUrl}
                title={`${project.title} - Concept Project`}
                className="w-full h-full border-0"
                onLoad={handleIframeLoad}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
