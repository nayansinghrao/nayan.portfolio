import React, { useState } from 'react';
import {
  ABOUT_DATA,
  SKILLS_TAGS,
  DESIGN_TOOLS,
  AI_TOOLS,
  EXPERIENCE_ITEMS,
  CONCEPT_BRANDS,
} from '../data/portfolioData';
import {
  EMAIL_ADDRESS,
  BEHANCE_URL,
  LINKEDIN_URL,
  EmailIcon,
  BehanceIcon,
  LinkedInIcon,
} from '../components/SocialIcons';
import { FadeInSection } from '../components/FadeInSection';

interface HomeScreenProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigateSection }) => {
  const [copied, setCopied] = useState(false);

  const scrollToSection = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

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
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* ======================================================== */}
      {/* 1. Hero Section (#home) */}
      {/* ======================================================== */}
      <FadeInSection>
        <section
          id="home"
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-center pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Name, Subtitle & 2 Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[80px] text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold leading-[1.08] text-balance transition-colors">
                Nayan Singh Rao
              </h1>

              <h2 className="mt-3 sm:mt-4 font-display text-xl sm:text-2xl md:text-3xl text-[#5f6368] dark:text-[#a2a09c] font-medium tracking-tight transition-colors">
                Graphic Designer
              </h2>

              {/* Two Buttons: 'View My Work' -> #work & 'Hire Me' -> #contact */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('work')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff5a1f] text-white font-display text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-[#e04810] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <span>View My Work</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#111111] dark:border-white/30 text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] font-display text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Hire Me</span>
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </button>
              </div>
            </div>

            {/* Right Column: User Portrait */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] aspect-[4/5] sm:h-[480px] rounded-2xl sm:rounded-[28px] overflow-hidden border border-[#e5e2dc]/80 dark:border-[#2d3034] shadow-2xl bg-[#efeeeb] dark:bg-[#1a1b1e] group">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  alt="Portrait of Nayan Singh Rao, Graphic Designer in Rajasthan, India"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoVHF9BbNDImzTFuT3IugkRudPiiqXiQozXOmUzd_LAP26aTt_A9kag7bH256UwbSjs0cyLyJqF0zScQU8J9LJh56O9sXEwugGwcmUZfdiv0qw5ee9-ncQ12i7HzllkJSKgy4MBrNnm5CwgjST6brhdohMDZp9TSHZUFBas1M3mDS-AcjA5qZ5jZulXH8J940iX9JdVH-2Ov7YMRcLUMlEjP9EUA_rRi9_BX5sTkNFqMbU36f4-rk4TA"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-display text-xl font-bold">Nayan Singh Rao</p>
                  <p className="font-sans text-xs text-white/80">Rajasthan, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ======================================================== */}
      {/* 2. My Work Section (#work) */}
      {/* ======================================================== */}
      <FadeInSection>
        <section
          id="work"
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 scroll-mt-24"
        >
          <div className="flex items-end justify-between pb-4 border-b border-[#e5e2dc]/60 dark:border-[#222428] mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                My Work
              </h2>
            </div>
          </div>

          {/* Single Folder-Style Card titled "Concept Brands" */}
          <div className="w-full flex flex-col rounded-2xl sm:rounded-3xl bg-[#f5f3f0] dark:bg-[#151619] border border-[#e2dfd9] dark:border-[#27292e] shadow-sm overflow-hidden transition-colors">
            {/* Folder Tab Header */}
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 border-b border-[#e2dfd9] dark:border-[#27292e] bg-[#ebe8e2] dark:bg-[#1a1c20] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#ff5a1f]/10 text-[#ff5a1f] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">folder</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                    Concept Brands
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold bg-[#e0ded8] dark:bg-[#25282d] text-[#5f6368] dark:text-[#a2a09c]">
                    3 Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Folder Contents: Exactly 3 Case-Study Cards */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {CONCEPT_BRANDS.map((brand, idx) => (
                  <article
                    key={brand.id}
                    className="bg-[#fbf9f6] dark:bg-[#1d1f23] rounded-2xl overflow-hidden border border-[#e5e2dc] dark:border-[#2b2e34] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    {/* Clean Neutral Cover Placeholder */}
                    <div className="relative w-full aspect-[16/10] bg-[#e8e6e1] dark:bg-[#23252a] flex flex-col items-center justify-center p-6 border-b border-[#e5e2dc] dark:border-[#2b2e34] overflow-hidden select-none">
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c8c5bd_1px,transparent_1px)] dark:bg-[radial-gradient(#3a3d45_1px,transparent_1px)] [background-size:16px_16px]"></div>

                      <div className="relative z-10 flex flex-col items-center text-center gap-2">
                        <div className="w-14 h-14 rounded-2xl bg-white/70 dark:bg-[#18191c]/80 backdrop-blur-xs border border-[#dad6ce] dark:border-[#353840] flex items-center justify-center text-[#5f6368] dark:text-[#a2a09c] font-display font-bold text-lg tracking-wider shadow-2xs group-hover:scale-105 transition-transform duration-300">
                          {brand.title.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="font-display text-xs tracking-widest uppercase font-semibold text-[#75777a] dark:text-[#8e9198]">
                          {brand.title}
                        </span>
                      </div>

                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#141518]/90 backdrop-blur-md text-[11px] font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#dad6ce]/70 dark:border-[#353840] shadow-2xs">
                          {brand.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 text-[11px] font-mono font-medium text-[#8f9196] dark:text-[#6e7178]">
                        0{idx + 1}
                      </div>
                    </div>

                    {/* Card Content & Action Button */}
                    <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                      <div className="flex flex-col gap-2">
                        <h4 className="font-display text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#ff5a1f] transition-colors">
                          {brand.title}
                        </h4>
                        <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                          {brand.description}
                        </p>
                      </div>

                      <div className="pt-2">
                        <a
                          href={brand.behanceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1b1c1a] hover:bg-[#ff5a1f] dark:bg-[#282a30] dark:hover:bg-[#ff5a1f] text-white font-display text-sm font-semibold py-3 px-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 group/btn"
                        >
                          <BehanceIcon className="w-4 h-4 shrink-0" />
                          <span>View on Behance</span>
                          <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">
                            north_east
                          </span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ======================================================== */}
      {/* 3. About Section (#about) */}
      {/* ======================================================== */}
      <FadeInSection>
        <section
          id="about"
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 scroll-mt-24"
        >
          <div className="flex items-end justify-between pb-4 border-b border-[#e5e2dc]/60 dark:border-[#222428] mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                About Me
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Bio Card */}
            <div className="lg:col-span-7 bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-3">
                  Bio
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed transition-colors">
                  {ABOUT_DATA.bio}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#e2dfd8] dark:border-[#27292e] flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c] font-sans">
                <span className="font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  Based in:
                </span>
                <span>{ABOUT_DATA.location}</span>
                <span>•</span>
                <span className="font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  Current workplace:
                </span>
                <span>{ABOUT_DATA.currentWorkplace}</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="lg:col-span-5 bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <h3 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                Education
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eae8e5] dark:bg-[#202226] flex items-center justify-center text-[#111111] dark:text-white shrink-0">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base sm:text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                    {ABOUT_DATA.education.degree}
                  </span>
                  <span className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                    {ABOUT_DATA.education.university}
                  </span>
                  <span className="font-display text-xs font-semibold text-[#ff5a1f] mt-2">
                    {ABOUT_DATA.education.years}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ======================================================== */}
      {/* 4. Skills & Tools Section (#skills) */}
      {/* ======================================================== */}
      <FadeInSection>
        <section
          id="skills"
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 scroll-mt-24"
        >
          <div className="flex items-end justify-between pb-4 border-b border-[#e5e2dc]/60 dark:border-[#222428] mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                Skills & Tools
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Skills as tags */}
            <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <h3 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {SKILLS_TAGS.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-display font-medium bg-[#fbf9f6] dark:bg-[#212328] text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#e2dfd8] dark:border-[#2d3036] shadow-2xs hover:border-[#ff5a1f] dark:hover:border-[#ff5a1f] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools as icon cards */}
            <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 sm:p-7 md:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors flex flex-col gap-6">
              <div>
                <h3 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                  Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
                  {DESIGN_TOOLS.map((tool) => (
                    <div
                      key={tool.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#fbf9f6] dark:bg-[#202227] border border-[#e2dfd8] dark:border-[#2d3036] flex items-center gap-2.5 sm:gap-3 transition-colors hover:border-[#ff5a1f] dark:hover:border-[#ff5a1f]"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#111111] dark:bg-[#2c2e35] text-white flex items-center justify-center font-display font-bold text-xs tracking-wider shrink-0 shadow-2xs">
                        {tool.shortTag}
                      </div>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] truncate">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Tools */}
              <div className="pt-4 border-t border-[#e5e2dc]/80 dark:border-[#26282c]">
                <h3 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                  AI Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {AI_TOOLS.map((tool) => (
                    <div
                      key={tool.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#fbf9f6] dark:bg-[#202227] border border-[#e2dfd8] dark:border-[#2d3036] flex items-center gap-2.5 transition-colors hover:border-[#ff5a1f] dark:hover:border-[#ff5a1f]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#ff5a1f]/15 text-[#ff5a1f] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                      </div>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] truncate">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ======================================================== */}
      {/* 5. Experience Section (#experience) */}
      {/* ======================================================== */}
      <FadeInSection>
        <section
          id="experience"
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 scroll-mt-24"
        >
          <div className="flex items-end justify-between pb-4 border-b border-[#e5e2dc]/60 dark:border-[#222428] mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                Experience
              </h2>
            </div>
          </div>

          <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 sm:p-7 md:p-9 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e2dfd8] dark:border-[#2d3036] flex flex-col gap-6 sm:gap-8">
              {EXPERIENCE_ITEMS.map((item) => (
                <div key={item.id} className="relative flex flex-col gap-1.5">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#ff5a1f] ring-4 ring-[#f5f3f0] dark:ring-[#16171a]"></div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                      {item.role}
                    </h3>
                    <span className="font-display text-xs sm:text-sm font-semibold text-[#ff5a1f]">
                      {item.period}
                    </span>
                  </div>

                  <p className="font-display text-sm font-medium text-[#5f6368] dark:text-[#a2a09c]">
                    {item.company}
                  </p>

                  {item.description && (
                    <p className="font-sans text-xs sm:text-sm text-[#1b1c1a] dark:text-[#f3f2ee] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ======================================================== */}
      {/* 6. Contact Section (#contact) */}
      {/* ======================================================== */}
      <FadeInSection>
        <section
          id="contact"
          className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14 scroll-mt-24"
        >
          <div className="bg-[#f5f3f0] dark:bg-[#151619] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#e2dfd9] dark:border-[#27292e] shadow-sm flex flex-col items-center text-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                Let's work together
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#5f6368] dark:text-[#a2a09c] max-w-xl">
                Graphic designer based in Rajasthan, India.
              </p>
            </div>

            {/* Email display with "Copy email" button */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 pl-3 sm:pl-4 pr-2 rounded-2xl bg-[#fbf9f6] dark:bg-[#1c1e22] border border-[#e5e2dc] dark:border-[#2b2e34] shadow-xs max-w-full">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="font-sans text-sm sm:text-base md:text-lg font-medium text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#ff5a1f] dark:hover:text-[#ff5a1f] transition-colors flex items-center gap-2 break-all sm:break-normal"
              >
                <EmailIcon className="w-5 h-5 text-[#ff5a1f] shrink-0" />
                <span className="truncate">{EMAIL_ADDRESS}</span>
              </a>

              <div className="relative">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#282a30] dark:hover:bg-[#32353c] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#dad6ce] dark:border-[#3a3d46] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
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
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0077b5] hover:bg-[#005f93] text-white font-display text-sm sm:text-base font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <LinkedInIcon className="w-5 h-5 shrink-0" />
                <span>Message me on LinkedIn</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </a>

              <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#ff5a1f] dark:bg-[#25282d] dark:hover:bg-[#ff5a1f] text-white font-display text-sm sm:text-base font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <BehanceIcon className="w-5 h-5 shrink-0" />
                <span>View my Behance</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </a>
            </div>

            {/* Download Resume Button */}
            <div className="pt-1 sm:pt-2 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download="Nayan_Singh_Rao_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#fbf9f6] hover:bg-white dark:bg-[#202227] dark:hover:bg-[#282a30] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-sm font-semibold border border-[#dad6ce] dark:border-[#33363e] shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px] text-[#ff5a1f]">download</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};
