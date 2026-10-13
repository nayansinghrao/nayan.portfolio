import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Natural variable speed ramp
      const increment = Math.max(1, Math.floor(Math.random() * 8) + 2);
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 300);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0d0e10] text-[#f3f2ee] select-none"
          role="status"
          aria-live="polite"
          aria-label={`Site loading progress: ${progress}%`}
        >
          {/* Subtle background ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,31,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
            {/* Minimalist Monogram Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-16 h-16 rounded-2xl bg-[#191b20] border border-white/10 flex items-center justify-center mb-6 shadow-2xl relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#ff5a1f]/10 animate-pulse" />
              <span className="font-display font-extrabold text-2xl tracking-wider text-[#ff5a1f]">
                NR
              </span>
            </motion.div>

            {/* Title & Role */}
            <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
              Nayan Singh Rao
            </h1>
            <p className="font-sans text-xs tracking-widest uppercase font-semibold text-[#8e9198] mb-8">
              Graphic Designer &bull; Portfolio
            </p>

            {/* Percentage Display */}
            <div className="flex items-baseline justify-between w-full mb-2">
              <span className="font-mono text-xs text-[#a2a09c]">Loading</span>
              <span className="font-mono text-2xl font-bold text-[#ff5a1f] tabular-nums">
                {progress}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-2 bg-[#202227] rounded-full overflow-hidden p-0.5 border border-white/5 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#e04810] via-[#ff5a1f] to-[#ff8447] rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: 'linear' }}
              >
                {/* Glowing head */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/70 rounded-full blur-[1px]" />
              </motion.div>
            </div>

            {/* Milestone Text based on current % */}
            <div className="mt-4 h-5 flex items-center justify-center">
              <span className="text-[11px] font-sans text-[#75777a] transition-all">
                {progress < 30 && 'Initializing visual systems...'}
                {progress >= 30 && progress < 70 && 'Loading brand identity & case studies...'}
                {progress >= 70 && progress < 100 && 'Finalizing layouts & typography...'}
                {progress === 100 && 'Welcome!'}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
