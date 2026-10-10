import React from 'react';
import {
  EMAIL_ADDRESS,
  BEHANCE_URL,
  LINKEDIN_URL,
  EmailIcon,
  BehanceIcon,
  LinkedInIcon,
} from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f5f3f0] dark:bg-[#0c0d0f] border-t border-[#e5e2dc]/60 dark:border-[#222428] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Copyright notice */}
        <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c]">
          © 2026 Nayan Singh Rao
        </p>

        {/* Center: Email mailto link */}
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] transition-colors font-medium flex items-center gap-2"
        >
          <EmailIcon className="w-4 h-4 text-[#ff5a1f]" />
          <span>{EMAIL_ADDRESS}</span>
        </a>

        {/* Social Icons for Email, Behance and LinkedIn */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            aria-label="Email"
            title="Email"
            className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#ff5a1f] dark:bg-[#1a1b1f] dark:hover:bg-[#ff5a1f] text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-[#e5e2dc]/40 dark:border-[#26282c] shadow-2xs hover:scale-105 active:scale-95"
          >
            <EmailIcon className="w-4 h-4" />
          </a>

          <a
            href={BEHANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            title="Behance"
            className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#ff5a1f] dark:bg-[#1a1b1f] dark:hover:bg-[#ff5a1f] text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-[#e5e2dc]/40 dark:border-[#26282c] shadow-2xs hover:scale-105 active:scale-95"
          >
            <BehanceIcon className="w-4 h-4" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="w-9 h-9 rounded-full bg-[#efeeeb] hover:bg-[#0077b5] dark:bg-[#1a1b1f] dark:hover:bg-[#0077b5] text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-white dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-[#e5e2dc]/40 dark:border-[#26282c] shadow-2xs hover:scale-105 active:scale-95"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
