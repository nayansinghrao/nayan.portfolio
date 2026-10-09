import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenHire: () => void;
  onOpenPdf: () => void;
  onOpenUploadPdf?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenHire,
  onOpenPdf,
  onOpenUploadPdf,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fbf9f6]/90 dark:bg-[#0d0e0f]/90 backdrop-blur-xl border-b border-[#e5e2dc]/60 dark:border-[#222428] shadow-[0_1px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.25)] transition-colors duration-200">
      <div className="h-20 max-w-[1440px] mx-auto px-5 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 bg-[#111111] dark:bg-[#1f2125] text-white rounded-lg flex items-center justify-center font-display font-bold text-lg select-none tracking-tight shadow-sm group-hover:scale-105 transition-transform border border-transparent dark:border-white/10">
            NR
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-[#1b1c1a] dark:text-[#f3f2ee] group-hover:text-[#ff5a1f] dark:group-hover:text-[#ff5a1f] tracking-tight transition-colors">
              Nayan Singh Rao
            </span>
            <span className="font-display text-[11px] font-semibold uppercase tracking-wider text-[#5f6368] dark:text-[#9ea3a8]">
              Graphic Designer
            </span>
          </div>
        </div>

        {/* Desktop Navigation Pill Dock */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#f5f3f0] dark:bg-[#17181b] p-1.5 rounded-full border border-[#e5e2dc]/60 dark:border-[#26282c] shadow-xs transition-colors">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full font-display text-sm tracking-tight transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#efeeeb] text-[#1b1c1a] dark:bg-[#25282d] dark:text-white font-bold shadow-xs'
                    : 'text-[#5f6368] hover:text-[#1b1c1a] dark:text-[#9ea3a8] dark:hover:text-[#f3f2ee] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1f2125] dark:hover:bg-[#282a30] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-all duration-200 border border-[#e5e2dc]/70 dark:border-[#2d3034] hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
          >
            <span className="material-symbols-outlined text-[19px] transition-transform duration-300">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Upload Brand PDFs Button */}
          {onOpenUploadPdf && (
            <button
              onClick={onOpenUploadPdf}
              title="Upload PDFs for Cocona, Seth Dhanraj, and Sharpix"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#efeeeb] dark:bg-[#18191c] dark:hover:bg-[#232528] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#e5e2dc] dark:border-[#2d3034] transition-all hover:scale-[1.02] cursor-pointer shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px] text-[#fd591e]">upload_file</span>
              <span>Upload Brand PDFs</span>
            </button>
          )}

          {/* PDF Portfolio Button */}
          <button
            onClick={onOpenPdf}
            title="Open styled PDF Portfolio in new tab"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1f2125] dark:hover:bg-[#282a30] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#e5e2dc] dark:border-[#2d3034] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-[#fd591e]">description</span>
            <span>PDF Portfolio</span>
          </button>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-1.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1a1b1e] dark:hover:bg-[#25272c] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-colors border border-[#e5e2dc]/40 dark:border-[#26282c]"
            >
              <span className="material-symbols-outlined text-[18px]">link</span>
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              title="Behance"
              className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1a1b1e] dark:hover:bg-[#25272c] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-colors border border-[#e5e2dc]/40 dark:border-[#26282c]"
            >
              <span className="material-symbols-outlined text-[18px]">palette</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              title="Email"
              className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1a1b1e] dark:hover:bg-[#25272c] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center transition-colors border border-[#e5e2dc]/40 dark:border-[#26282c] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </button>
          </div>

          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenHire}
            className="inline-flex items-center gap-1.5 bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            <span>Hire Me</span>
          </button>

          {/* Avatar Profile Indicator */}
          <div 
            onClick={() => handleNavClick('about')}
            title="About Nayan"
            className="w-8 h-8 rounded-full bg-[#111111] dark:bg-[#25282d] text-white flex items-center justify-center ml-0.5 cursor-pointer hover:ring-2 hover:ring-[#ff5a1f] transition-all border border-transparent dark:border-white/10"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-full bg-[#efeeeb] dark:bg-[#1f2125] flex items-center justify-center text-[#1b1c1a] dark:text-[#f3f2ee] cursor-pointer border border-transparent dark:border-[#2d3034]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#e5e2dc] dark:border-[#26282c] bg-[#fbf9f6] dark:bg-[#121316] px-5 py-4 flex flex-col gap-2 shadow-lg animate-fadeIn">
          {/* Mobile Theme Switcher Bar */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#f5f3f0] dark:bg-[#1a1b1e] border border-[#e5e2dc]/60 dark:border-[#26282c] mb-1">
            <div className="flex items-center gap-2 text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
              <span className="material-symbols-outlined text-[18px] text-[#fd591e]">
                {isDark ? 'dark_mode' : 'light_mode'}
              </span>
              <span>Appearance: {isDark ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1 rounded-full bg-white dark:bg-[#25282d] text-xs font-display font-bold text-[#1b1c1a] dark:text-white shadow-2xs border border-[#e5e2dc] dark:border-[#35383d] cursor-pointer"
            >
              Toggle
            </button>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left px-4 py-2.5 rounded-xl font-display text-base transition-colors ${
                currentTab === item.id
                  ? 'bg-[#efeeeb] dark:bg-[#25282d] text-[#1b1c1a] dark:text-white font-bold'
                  : 'text-[#5f6368] dark:text-[#9ea3a8] hover:text-[#1b1c1a] dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-[#e5e2dc]/60 dark:border-[#26282c] mt-1">
            {onOpenUploadPdf && (
              <button
                onClick={() => {
                  onOpenUploadPdf();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2.5 rounded-lg bg-white dark:bg-[#1a1b1e] border border-[#e5e2dc] dark:border-[#2d3034] text-xs font-display font-semibold flex items-center justify-center gap-2 cursor-pointer text-[#1b1c1a] dark:text-[#f3f2ee] shadow-2xs"
              >
                <span className="material-symbols-outlined text-[16px] text-[#fd591e]">upload_file</span>
                <span>Upload Brand PDFs (Cocona • Seth Dhanraj • Sharpix)</span>
              </button>
            )}
            <button
              onClick={() => {
                onOpenPdf();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-lg bg-[#efeeeb] dark:bg-[#1f2125] text-xs font-display font-semibold flex items-center justify-center gap-2 cursor-pointer text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#2d3034]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#fd591e]">description</span>
              <span>Open PDF Portfolio ↗</span>
            </button>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1e] text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#26282c]"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-lg bg-[#f5f3f0] dark:bg-[#1a1b1e] text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#26282c]"
              >
                Behance ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
