import React, { useState } from 'react';
import {
  EMAIL_ADDRESS,
  BEHANCE_URL,
  LINKEDIN_URL,
  EmailIcon,
  BehanceIcon,
  LinkedInIcon,
} from '../components/SocialIcons';

export const ContactScreen: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = EMAIL_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <section
        id="contact"
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 lg:py-16 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto w-full bg-[#f5f3f0] dark:bg-[#151619] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#e2dfd9] dark:border-[#27292e] shadow-sm flex flex-col items-center text-center gap-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
              Let's work together
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#5f6368] dark:text-[#a2a09c] max-w-xl">
              Graphic designer based in Rajasthan, India.
            </p>
          </div>

          {/* Email row with "Copy email" button */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 pl-4 pr-2 rounded-2xl bg-[#fbf9f6] dark:bg-[#1c1e22] border border-[#e5e2dc] dark:border-[#2b2e34] shadow-xs">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="font-sans text-base sm:text-lg font-medium text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] transition-colors flex items-center gap-2"
            >
              <EmailIcon className="w-5 h-5 text-[#ff5a1f] shrink-0" />
              <span>{EMAIL_ADDRESS}</span>
            </a>

            <div className="relative">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#282a30] dark:hover:bg-[#32353c] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#dad6ce] dark:border-[#3a3d46] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                <span className="material-symbols-outlined text-[16px] text-[#ff5a1f]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied' : 'Copy email'}</span>
              </button>

              {copied && (
                <span
                  role="status"
                  aria-live="polite"
                  className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[11px] font-display font-semibold rounded-md shadow-md animate-fadeIn whitespace-nowrap"
                >
                  Copied!
                </span>
              )}
            </div>
          </div>

          {/* Two Large Buttons: LinkedIn & Behance */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0077b5] hover:bg-[#005f93] text-white font-display text-base font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <LinkedInIcon className="w-5 h-5 shrink-0" />
              <span>Message me on LinkedIn</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>

            <a
              href={BEHANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#ff5a1f] dark:bg-[#25282d] dark:hover:bg-[#ff5a1f] text-white font-display text-base font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <BehanceIcon className="w-5 h-5 shrink-0" />
              <span>View my Behance</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>

          {/* Download Resume Button */}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              download="Nayan_Singh_Rao_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#fbf9f6] hover:bg-white dark:bg-[#202227] dark:hover:bg-[#282a30] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-sm font-semibold border border-[#dad6ce] dark:border-[#33363e] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ff5a1f]">download</span>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
