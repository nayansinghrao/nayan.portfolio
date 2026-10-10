import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  EMAIL_ADDRESS,
  BEHANCE_URL,
  LINKEDIN_URL,
  EmailIcon,
  BehanceIcon,
  LinkedInIcon,
} from './SocialIcons';

interface HeaderProps {
  activeSection?: string;
  onNavigateSection?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection: propActiveSection,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(propActiveSection || 'home');
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  // Sync internal activeSection if prop updates
  useEffect(() => {
    if (propActiveSection) {
      setActiveSection(propActiveSection);
    }
  }, [propActiveSection]);

  // Section observer to highlight current in-view section
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'work', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140; // sticky header offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      }
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fbf9f6]/90 dark:bg-[#0d0e0f]/90 backdrop-blur-xl border-b border-[#e5e2dc]/60 dark:border-[#222428] shadow-[0_1px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_12px_rgba(0,0,0,0.25)] transition-colors duration-200">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Lockup */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="w-10 h-10 bg-[#ff5a1f] text-white rounded-lg flex items-center justify-center font-display font-bold text-lg select-none tracking-tight shadow-sm group-hover:scale-105 transition-transform">
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

        {/* Desktop Navigation Dock with in-view highlighting */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f5f3f0] dark:bg-[#17181b] p-1.5 rounded-full border border-[#e5e2dc]/60 dark:border-[#26282c] shadow-xs transition-colors">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full font-display text-sm tracking-tight transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#ff5a1f] text-white font-bold shadow-xs'
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

          {/* Download Resume Button (Navbar) */}
          <a
            href="/resume.pdf"
            download="Nayan_Singh_Rao_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Nayan Singh Rao's Resume"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#1f2125] dark:hover:bg-[#282a30] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#e5e2dc] dark:border-[#2d3034] transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-[#ff5a1f]">download</span>
            <span>Download Resume</span>
          </a>

          {/* Hire Me CTA Button -> smooth scrolls to #contact */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 bg-[#ff5a1f] hover:bg-[#e04810] text-white font-display text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Hire Me</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-[#efeeeb] dark:bg-[#1f2125] flex items-center justify-center text-[#1b1c1a] dark:text-[#f3f2ee] cursor-pointer border border-transparent dark:border-[#2d3034]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e5e2dc] dark:border-[#26282c] bg-[#fbf9f6] dark:bg-[#121316] px-5 py-5 flex flex-col gap-3 shadow-lg animate-fadeIn max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl font-display text-base transition-colors ${
                    isActive
                      ? 'bg-[#ff5a1f] text-white font-bold shadow-xs'
                      : 'text-[#5f6368] dark:text-[#9ea3a8] hover:text-[#1b1c1a] dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3 border-t border-[#e5e2dc]/60 dark:border-[#26282c]">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Nayan_Singh_Rao_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-[#efeeeb] dark:bg-[#1f2125] text-xs font-display font-semibold flex items-center justify-center gap-2 cursor-pointer text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#2d3034]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#ff5a1f]">download</span>
              <span>Download Resume</span>
            </a>

            {/* Email Contact in Mobile Drawer */}
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="w-full text-center py-2.5 px-3 rounded-xl bg-[#f5f3f0] dark:bg-[#1a1b1e] text-xs font-sans font-medium text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] border border-transparent dark:border-[#26282c] flex items-center justify-center gap-2 truncate"
            >
              <EmailIcon className="w-4 h-4 shrink-0 text-[#ff5a1f]" />
              <span className="truncate">{EMAIL_ADDRESS}</span>
            </a>

            {/* Social Icons (Email, Behance, LinkedIn) */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                title="Email"
                aria-label="Email Nayan Singh Rao"
                className="flex-1 text-center py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#1a1b1e] text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#26282c] flex items-center justify-center gap-1.5"
              >
                <EmailIcon className="w-4 h-4 text-[#ff5a1f]" />
                <span>Email</span>
              </a>
              <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Behance"
                aria-label="Behance Profile"
                className="flex-1 text-center py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#1a1b1e] text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#26282c] flex items-center justify-center gap-1.5"
              >
                <BehanceIcon className="w-4 h-4" />
                <span>Behance</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
                className="flex-1 text-center py-2.5 rounded-xl bg-[#f5f3f0] dark:bg-[#1a1b1e] text-xs font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#26282c] flex items-center justify-center gap-1.5"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
