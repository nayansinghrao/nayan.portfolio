import React, { useEffect, useState } from 'react';

interface ScrollProgressBarProps {
  /** Optional container element ref to track instead of window scroll */
  containerRef?: React.RefObject<HTMLElement | null>;
  /** Optional class name customizations */
  className?: string;
  /** Whether to show a tiny discreet reading percentage pill */
  showPercentage?: boolean;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  containerRef,
  className = '',
  showPercentage = false,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element = containerRef.current;
      const handleElementScroll = () => {
        const total = element.scrollHeight - element.clientHeight;
        if (total <= 0) {
          setProgress(0);
          return;
        }
        const current = element.scrollTop;
        const pct = Math.min(100, Math.max(0, (current / total) * 100));
        setProgress(pct);
      };

      element.addEventListener('scroll', handleElementScroll, { passive: true });
      handleElementScroll();
      return () => element.removeEventListener('scroll', handleElementScroll);
    }

    // Default: Window scroll tracking
    const handleWindowScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      const current = window.scrollY || document.documentElement.scrollTop;
      const pct = Math.min(100, Math.max(0, (current / scrollHeight) * 100));
      setProgress(pct);
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    window.addEventListener('resize', handleWindowScroll, { passive: true });
    handleWindowScroll();

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('resize', handleWindowScroll);
    };
  }, [containerRef]);

  // Hide bar if page/container has no scrollable overflow
  if (progress <= 0 && !containerRef) {
    // Keep 0 width rendered but subtle
  }

  return (
    <div
      className={`fixed top-0 inset-x-0 z-[100] h-[3px] pointer-events-none bg-black/5 dark:bg-white/5 ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#fd591e] via-[#ff7843] to-[#fd591e] transition-[width] duration-150 ease-out shadow-[0_1px_6px_rgba(253,89,30,0.5)] origin-left"
        style={{
          width: `${progress}%`,
        }}
      />

      {showPercentage && progress > 2 && (
        <div
          className="absolute top-1.5 right-4 px-2 py-0.5 rounded-full bg-[#1b1c1a]/85 backdrop-blur-md text-white font-mono text-[10px] tracking-tight opacity-75 shadow-xs"
        >
          {Math.round(progress)}% read
        </div>
      )}
    </div>
  );
};
