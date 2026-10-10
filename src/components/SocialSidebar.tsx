import React from 'react';
import { BehanceIcon, LinkedInIcon, BEHANCE_URL, LINKEDIN_URL } from './SocialIcons';

export const SocialSidebar: React.FC = () => {
  return (
    <aside
      aria-label="Social Profiles"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 bg-white/90 dark:bg-[#16171a]/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-[#e5e2dc] dark:border-[#26282c] transition-colors"
    >
      {/* Behance Link */}
      <div className="relative group flex items-center">
        <a
          href={BEHANCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Behance Profile"
          className="w-10 h-10 rounded-xl bg-[#efeeeb] hover:bg-[#fd591e] dark:bg-[#202226] dark:hover:bg-[#fd591e] text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs"
        >
          <BehanceIcon className="w-5 h-5" />
        </a>

        {/* Hover Tooltip */}
        <span
          role="tooltip"
          className="absolute left-full ml-3 px-3 py-1 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs font-display font-semibold rounded-lg shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-200 whitespace-nowrap z-50"
        >
          Behance
        </span>
      </div>

      {/* Subtle Divider Line */}
      <div className="w-4 h-px bg-[#e5e2dc] dark:bg-[#2a2c30]"></div>

      {/* LinkedIn Link */}
      <div className="relative group flex items-center">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="w-10 h-10 rounded-xl bg-[#efeeeb] hover:bg-[#0077b5] dark:bg-[#202226] dark:hover:bg-[#0077b5] text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs"
        >
          <LinkedInIcon className="w-5 h-5" />
        </a>

        {/* Hover Tooltip */}
        <span
          role="tooltip"
          className="absolute left-full ml-3 px-3 py-1 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs font-display font-semibold rounded-lg shadow-lg opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-200 whitespace-nowrap z-50"
        >
          LinkedIn
        </span>
      </div>
    </aside>
  );
};
