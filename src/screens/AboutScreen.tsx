import React from 'react';
import {
  ABOUT_DATA,
  SKILLS_TAGS,
  DESIGN_TOOLS,
  AI_TOOLS,
  EXPERIENCE_ITEMS,
} from '../data/portfolioData';

interface AboutScreenProps {
  onNavigate: (tab: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Portrait photo */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#efeeeb] dark:bg-[#18191c] shadow-xl border border-[#e5e2dc] dark:border-[#26282c]">
              <img
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                alt="Portrait photo of Nayan Singh Rao, Graphic Designer in Rajasthan, India"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoVHF9BbNDImzTFuT3IugkRudPiiqXiQozXOmUzd_LAP26aTt_A9kag7bH256UwbSjs0cyLyJqF0zScQU8J9LJh56O9sXEwugGwcmUZfdiv0qw5ee9-ncQ12i7HzllkJSKgy4MBrNnm5CwgjST6brhdohMDZp9TSHZUFBas1M3mDS-AcjA5qZ5jZulXH8J940iX9JdVH-2Ov7YMRcLUMlEjP9EUA_rRi9_BX5sTkNFqMbU36f4-rk4TA"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-display text-xl font-bold">Nayan Singh Rao</p>
                <p className="font-sans text-xs text-white/80">Rajasthan, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Education, Skills, Tools & Experience */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-4">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-5xl sm:text-6xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                About Me
              </h1>
              <p className="font-display text-xl sm:text-2xl text-[#fd591e] font-medium transition-colors">
                Graphic Designer
              </p>
            </div>

            {/* Bio Card */}
            <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-6 sm:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <h2 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-3">
                Bio
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed transition-colors">
                {ABOUT_DATA.bio}
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-6 sm:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <h2 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                Education
              </h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eae8e5] dark:bg-[#202226] flex items-center justify-center text-[#111111] dark:text-white shrink-0">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                    {ABOUT_DATA.education.degree}
                  </span>
                  <span className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                    {ABOUT_DATA.education.university}
                  </span>
                  <span className="font-display text-xs font-semibold text-[#fd591e] mt-2">
                    {ABOUT_DATA.education.years}
                  </span>
                </div>
              </div>
            </div>

            {/* Skills Section (Tags only, no percentage bars) */}
            <div id="skills" className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-6 sm:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <h2 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS_TAGS.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-display font-medium bg-[#fbf9f6] dark:bg-[#212328] text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#e2dfd8] dark:border-[#2d3036] shadow-2xs hover:border-[#fd591e] dark:hover:border-[#fd591e] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Section (Icon Cards) */}
            <div id="tools" className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-6 sm:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors flex flex-col gap-6">
              <div>
                <h2 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                  Tools
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {DESIGN_TOOLS.map((tool) => (
                    <div
                      key={tool.id}
                      className="p-3.5 rounded-xl bg-[#fbf9f6] dark:bg-[#202227] border border-[#e2dfd8] dark:border-[#2d3036] flex items-center gap-3 transition-colors hover:border-[#fd591e] dark:hover:border-[#fd591e]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#111111] dark:bg-[#2c2e35] text-white flex items-center justify-center font-display font-bold text-xs tracking-wider shrink-0 shadow-2xs">
                        {tool.shortTag}
                      </div>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Tools */}
              <div className="pt-2 border-t border-[#e5e2dc]/80 dark:border-[#26282c]">
                <h3 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-4">
                  AI Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {AI_TOOLS.map((tool) => (
                    <div
                      key={tool.id}
                      className="p-3.5 rounded-xl bg-[#fbf9f6] dark:bg-[#202227] border border-[#e2dfd8] dark:border-[#2d3036] flex items-center gap-2.5 transition-colors hover:border-[#fd591e] dark:hover:border-[#fd591e]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#fd591e]/15 text-[#fd591e] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                      </div>
                      <span className="font-display text-xs sm:text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Section (Simple Vertical Timeline with 2 Entries) */}
            <div id="experience" className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-6 sm:p-8 shadow-xs border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <h2 className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold mb-6">
                Experience
              </h2>

              <div className="relative pl-6 border-l-2 border-[#e2dfd8] dark:border-[#2d3036] flex flex-col gap-8">
                {EXPERIENCE_ITEMS.map((item) => (
                  <div key={item.id} className="relative flex flex-col gap-1">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#fd591e] ring-4 ring-[#f5f3f0] dark:ring-[#16171a]"></div>

                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                        {item.role}
                      </h3>
                      <span className="font-display text-xs font-semibold text-[#fd591e]">
                        {item.period}
                      </span>
                    </div>

                    <p className="font-sans text-sm font-medium text-[#5f6368] dark:text-[#a2a09c]">
                      {item.company}
                    </p>

                    {item.description && (
                      <p className="font-sans text-sm text-[#1b1c1a] dark:text-[#e4e2de] mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="inline-flex items-center gap-2 bg-[#FF5A1F] text-white font-display text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-[#e04810] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#111111] dark:border-white/30 text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] font-display text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Hire Me</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
