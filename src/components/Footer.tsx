import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f5f3f0] dark:bg-[#0c0d0f] mt-14 border-t border-[#e5e2dc]/60 dark:border-[#222428] transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-12 py-12 flex flex-col gap-8">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span 
              onClick={() => { onNavigate('home'); scrollToTop(); }}
              className="font-display font-semibold text-2xl lg:text-3xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight cursor-pointer hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] transition-colors"
            >
              Nayan Singh Rao
            </span>
            <span className="font-sans text-sm text-[#5f6368] dark:text-[#9ea3a8] flex items-center gap-1.5 mt-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#fd591e]">
                location_on
              </span>
              Rajasthan, India — IST (UTC+5:30)
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-semibold text-[#5f6368] dark:text-[#9ea3a8] hover:text-[#1b1c1a] dark:hover:text-white transition-colors flex items-center gap-1"
            >
              LinkedIn
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-semibold text-[#5f6368] dark:text-[#9ea3a8] hover:text-[#1b1c1a] dark:hover:text-white transition-colors flex items-center gap-1"
            >
              Behance
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
            <button
              onClick={() => { onNavigate('contact'); scrollToTop(); }}
              className="font-display text-sm font-semibold text-[#5f6368] dark:text-[#9ea3a8] hover:text-[#1b1c1a] dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              Email
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="w-10 h-10 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1a1b1f] dark:hover:bg-[#25282d] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-all duration-200 border border-[#e5e2dc]/40 dark:border-[#26282c] hover:-translate-y-0.5 cursor-pointer shadow-xs"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
          </button>
        </div>

        {/* Bottom Sub-strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#e5e2dc]/60 dark:border-[#222428]">
          <p className="font-sans text-xs text-[#5f6368] dark:text-[#8a8e94]">
            © 2025 Nayan Singh Rao. All rights reserved. Crafted with precision.
          </p>
          <div className="flex items-center gap-2 font-sans text-xs text-[#5f6368] dark:text-[#8a8e94]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#fd591e] animate-pulse"></span>
            <span>Available for visual identity & art direction</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
