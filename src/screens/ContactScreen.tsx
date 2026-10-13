import React, { useState } from 'react';
import {
  EMAIL_ADDRESS,
  BEHANCE_URL,
  LINKEDIN_URL,
  EmailIcon,
  BehanceIcon,
  LinkedInIcon,
} from '../components/SocialIcons';
import { ContactForm } from '../components/ContactForm';

export const ContactScreen: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
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
        <div className="bg-[#f5f3f0] dark:bg-[#151619] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e2dfd9] dark:border-[#27292e] shadow-sm flex flex-col gap-8 sm:gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-2 border-b border-[#e5e2dc]/70 dark:border-[#24262b] pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5a1f]/10 text-[#ff5a1f] font-display text-xs font-semibold">
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Get in Touch</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
              Let's build something remarkable
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#5f6368] dark:text-[#a2a09c] max-w-2xl">
              Graphic designer based in Rajasthan, India. Specializing in brand identity, packaging systems, and kinetic visual creative.
            </p>
          </div>

          {/* Grid: Direct Contact Channels & Interactive Validated Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct channels and info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Email Card */}
              <div className="bg-[#fbf9f6] dark:bg-[#1a1b1f] rounded-2xl p-5 border border-[#e2dfd9] dark:border-[#27292e] shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#5f6368] dark:text-[#a2a09c] text-xs font-display font-semibold uppercase tracking-wider">
                  <EmailIcon className="w-4 h-4 text-[#ff5a1f]" />
                  <span>Direct Email</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 p-2 pl-3 pr-2 rounded-xl bg-[#efeeeb]/70 dark:bg-[#131417] border border-[#dad6ce]/60 dark:border-[#26282c]">
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="font-sans text-sm font-medium text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] transition-colors truncate max-w-[200px] sm:max-w-none"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <div className="relative">
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#202226] hover:bg-[#faf8f5] dark:hover:bg-[#292c32] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#dad6ce] dark:border-[#33363e] shadow-xs cursor-pointer transition-all active:scale-95"
                      title="Copy email to clipboard"
                      aria-label="Copy email to clipboard"
                    >
                      <span className="material-symbols-outlined text-[15px] text-[#ff5a1f]">
                        {copied ? 'check' : 'content_copy'}
                      </span>
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                    {copied && (
                      <span
                        role="status"
                        aria-live="polite"
                        className="absolute -top-8 right-0 px-2 py-0.5 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[11px] font-display font-semibold rounded shadow-md animate-fadeIn whitespace-nowrap"
                      >
                        Copied!
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-4 rounded-2xl bg-[#0077b5] hover:bg-[#005f93] text-white font-display text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedInIcon className="w-5 h-5 shrink-0" />
                    <span>Message on LinkedIn</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                    north_east
                  </span>
                </a>

                <a
                  href={BEHANCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-4 rounded-2xl bg-[#111111] hover:bg-[#ff5a1f] dark:bg-[#212328] dark:hover:bg-[#ff5a1f] text-white font-display text-sm font-semibold shadow-xs hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <BehanceIcon className="w-5 h-5 shrink-0" />
                    <span>Explore Behance Portfolio</span>
                  </div>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                    north_east
                  </span>
                </a>
              </div>

              {/* Resume Download & Details */}
              <div className="p-4 rounded-2xl bg-[#fbf9f6] dark:bg-[#1a1b1f] border border-[#e2dfd9] dark:border-[#27292e] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c]">
                    Verified Resume
                  </span>
                  <span className="font-sans text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Updated
                  </span>
                </div>
                <a
                  href="/resume.pdf"
                  download="Nayan_Singh_Rao_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#23252a] dark:hover:bg-[#2c2f35] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#dad6ce] dark:border-[#33363e] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ff5a1f]">download</span>
                  <span>Download PDF Resume</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Validated Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm idPrefix="screen-contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
