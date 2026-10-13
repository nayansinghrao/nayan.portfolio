import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false,
}) => {
  const { isDark, toggleTheme } = useTheme();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleTheme();
    }
  };

  const switchButton = (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Currently Dark Mode — Click for Light Mode' : 'Currently Light Mode — Click for Dark Mode'}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={`group relative inline-flex h-8 w-[58px] shrink-0 cursor-pointer items-center rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5a1f] focus-visible:ring-offset-2 ${
        isDark
          ? 'bg-[#18191d] border border-[#2e3138] shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]'
          : 'bg-[#e7e4dc] border border-[#d6d1c8] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]'
      }`}
    >
      {/* Background Icons (Sun on left, Moon on right) */}
      <span
        aria-hidden="true"
        className={`absolute left-2 text-[13px] flex items-center justify-center transition-opacity duration-200 select-none ${
          isDark ? 'text-[#5a6068] opacity-60' : 'text-[#ff5a1f] opacity-20'
        }`}
      >
        <span className="material-symbols-outlined text-[14px]">light_mode</span>
      </span>

      <span
        aria-hidden="true"
        className={`absolute right-2 text-[13px] flex items-center justify-center transition-opacity duration-200 select-none ${
          isDark ? 'text-[#ff5a1f] opacity-20' : 'text-[#8b919a] opacity-60'
        }`}
      >
        <span className="material-symbols-outlined text-[14px]">dark_mode</span>
      </span>

      {/* Sliding Thumb */}
      <span
        className={`pointer-events-none inline-flex h-6 w-6 transform items-center justify-center rounded-full transition-transform duration-300 ease-out ${
          isDark
            ? 'translate-x-[26px] bg-[#ff5a1f] text-white shadow-[0_2px_8px_rgba(255,90,31,0.45)]'
            : 'translate-x-0 bg-white text-[#ff5a1f] shadow-[0_2px_6px_rgba(0,0,0,0.18)]'
        }`}
      >
        <span
          className="material-symbols-outlined text-[14px] leading-none select-none transition-transform duration-300 group-hover:rotate-12"
          aria-hidden="true"
        >
          {isDark ? 'dark_mode' : 'light_mode'}
        </span>
      </span>
    </button>
  );

  if (showLabel) {
    return (
      <div
        className={`flex items-center justify-between gap-3 p-3 rounded-xl bg-[#f5f3f0] dark:bg-[#1a1b1e] border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors ${className}`}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-white dark:bg-[#25282e] flex items-center justify-center text-[#ff5a1f] shadow-2xs">
            <span className="material-symbols-outlined text-[18px]">
              {isDark ? 'dark_mode' : 'light_mode'}
            </span>
          </span>
          <div className="flex flex-col text-left">
            <span className="text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
              Theme
            </span>
            <span className="text-[11px] font-sans text-[#5f6368] dark:text-[#9ea3a8]">
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
        </div>
        {switchButton}
      </div>
    );
  }

  return <div className={`inline-flex items-center ${className}`}>{switchButton}</div>;
};
