import React from 'react';

interface AboutScreenProps {
  onNavigate: (tab: string) => void;
  onOpenPdf?: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenPdf }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      <section className="max-w-[1440px] mx-auto px-5 lg:px-12 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Media, Tactile Sticky Note, Metadata */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="relative">
              {/* Portrait Container */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#efeeeb] dark:bg-[#18191c] shadow-xl border border-[#e5e2dc] dark:border-[#26282c]">
                <img
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                  alt="Editorial portrait of Nayan Singh Rao, creative designer in studio in Rajasthan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_EpYKL3JylAhUs2UePRnwtVIvlMZWIpQu_uAOJwEZgbqp9EqHHqZpxTxWijQnFUQp-gVhQBxwVU22cfqADzGz5MYf8PLR5VV68Del8C-wThuNuG4VCm8BtKUZ-kzTditN_TEOYJAY9PhnXXfyIiDOKzqBweRpJ3NlMrPSRnDEzTB33xgsh70yo3Jm-xudYbCgMMfju-Hadp8Fe_d0fJga0e_1tCJOsRk4ZqUvuY4SmPs6ZhVsU9Drfg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="font-display text-[11px] uppercase tracking-widest bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-bold">
                    Creative Director
                  </span>
                  <span className="flex items-center gap-1.5 font-display text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#fd591e] animate-pulse"></span>
                    In Studio • IST
                  </span>
                </div>
              </div>

              {/* Tactile Sticky Note */}
              <div className="absolute -bottom-6 -right-2 sm:-right-5 max-w-[260px] sm:max-w-[280px] bg-amber-50 dark:bg-[#232018] shadow-xl p-4 sm:p-5 rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-300 z-10 select-none border border-amber-200/80 dark:border-amber-700/50">
                {/* Simulated Washi Tape Strip */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-amber-200/80 dark:bg-amber-600/40 backdrop-blur-sm -rotate-3 shadow-xs rounded-xs pointer-events-none border-b border-amber-300/50 dark:border-amber-500/30"></div>
                <div className="flex items-center gap-1.5 text-[#ae3200] dark:text-[#ff7843] font-display text-[11px] uppercase tracking-wider mb-1.5 font-bold">
                  <span className="material-symbols-outlined text-[15px] filled">push_pin</span>
                  <span>Daily Dispatch</span>
                </div>
                <p className="font-display text-[14px] leading-snug text-[#1b1c1a] dark:text-amber-100 font-semibold">
                  Crafting visual identities & viral reels from Rajasthan to the world ✦
                </p>
                <div className="mt-2 pt-2 flex items-center justify-between border-t border-amber-200/60 dark:border-amber-700/40">
                  <span className="font-display text-[10px] uppercase tracking-wide text-[#5f6368] dark:text-amber-200/70 font-semibold">
                    Status: Open
                  </span>
                  <span className="font-display text-[10px] text-[#fd591e] font-bold">
                    Freelance & Roles
                  </span>
                </div>
              </div>
            </div>

            {/* Metadata Pills Tray */}
            <div className="pt-8 lg:pt-4 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 bg-[#f5f3f0] dark:bg-[#16171a] px-4 py-2 rounded-full shadow-xs hover:bg-[#efeeeb] dark:hover:bg-[#1e2024] transition-colors border border-[#e5e2dc] dark:border-[#26282c]">
                <span className="material-symbols-outlined text-[#fd591e] text-[18px]">
                  location_on
                </span>
                <span className="font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  Rajasthan, India (IST)
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#f5f3f0] dark:bg-[#16171a] px-4 py-2 rounded-full shadow-xs hover:bg-[#efeeeb] dark:hover:bg-[#1e2024] transition-colors border border-[#e5e2dc] dark:border-[#26282c]">
                <span className="material-symbols-outlined text-[#ae3200] text-[18px]">
                  verified
                </span>
                <span className="font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  6+ Years Practice
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#f5f3f0] dark:bg-[#16171a] px-4 py-2 rounded-full shadow-xs hover:bg-[#efeeeb] dark:hover:bg-[#1e2024] transition-colors border border-[#e5e2dc] dark:border-[#26282c]">
                <span className="material-symbols-outlined text-[#111111] dark:text-white text-[18px]">
                  smart_toy
                </span>
                <span className="font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  Blending AI + Motion
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Education, Pillars, and Actions */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-4">
            {/* Header & Editorial Bio */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fd591e]"></span>
                <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
                  ABOUT NAYAN SINGH RAO • STORY & CRAFT
                </span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                About Me
              </h1>
              <p className="font-display text-xl sm:text-2xl text-[#5f6368] dark:text-[#a2a09c] font-medium transition-colors">
                Visual Designer, Motion Creator & Generative Art Director.
              </p>
              <div className="flex flex-col gap-4 pt-2 font-sans text-base sm:text-lg text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed transition-colors">
                <p>
                  Hi, I'm Nayan Singh Rao — a multi-disciplinary graphic designer driven by brand narrative, kinetic typography, and the cutting edge of AI-assisted visual production. Over the past 6+ years, I've worked with founders, agencies, and D2C brands to engineer visual languages that cut through noise and resonate instantly with audiences.
                </p>
                <p className="text-[#5f6368] dark:text-[#a2a09c] font-sans text-sm sm:text-base">
                  From architecting end-to-end packaging and identity systems to directing viral short-form motion reels and generative commercial ad campaigns, my approach blends classic typography discipline with modern synthetic workflow.
                </p>
              </div>
            </div>

            {/* Academic & Foundations Mini-Card */}
            <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#e5e2dc] dark:border-[#26282c] group hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eae8e5] dark:bg-[#202226] flex items-center justify-center text-[#111111] dark:text-white group-hover:bg-[#fd591e] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px]">school</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-base font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                    Bachelor of Arts / Design Studies
                  </span>
                  <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                    Govind Guru Tribal University, Banswara
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[#efeeeb] dark:bg-[#202226] px-3 py-1 rounded-full text-[#5f6368] dark:text-[#a2a09c] border border-[#e5e2dc] dark:border-[#26282c]">
                <span className="material-symbols-outlined text-[14px]">local_library</span>
                <span className="font-display text-xs font-semibold">Rajasthan, India</span>
              </div>
            </div>

            {/* What I Do Core Pillars */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight transition-colors">
                  What I Do
                </h2>
                <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider font-semibold">
                  Core Capabilities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Pillar 1 */}
                <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group border border-[#e5e2dc] dark:border-[#26282c]">
                  <div className="flex flex-col gap-2">
                    <div className="w-11 h-11 rounded-xl bg-[#eae8e5] dark:bg-[#202226] flex items-center justify-center text-[#1b1c1a] dark:text-white group-hover:bg-[#111111] dark:group-hover:bg-[#fd591e] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[22px]">draw</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] pt-1">
                      Branding & Visual Identity
                    </h3>
                    <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                      Brand marks, typography systems, styleguides, and packaging design built for distinction.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-[#ae3200] dark:text-[#ff7843] font-display text-xs font-bold opacity-80 group-hover:opacity-100">
                    <span>01 / System Design</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group border border-[#e5e2dc] dark:border-[#26282c]">
                  <div className="flex flex-col gap-2">
                    <div className="w-11 h-11 rounded-xl bg-[#eae8e5] dark:bg-[#202226] flex items-center justify-center text-[#1b1c1a] dark:text-white group-hover:bg-[#fd591e] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[22px]">movie_edit</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] pt-1">
                      Reels & Social Media
                    </h3>
                    <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                      High-retention kinetic typography reels, viral vertical short-form, and audio-synced content.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-[#ae3200] dark:text-[#ff7843] font-display text-xs font-bold opacity-80 group-hover:opacity-100">
                    <span>02 / Motion & Rhythm</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="bg-[#f5f3f0] dark:bg-[#16171a] rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group border border-[#e5e2dc] dark:border-[#26282c]">
                  <div className="flex flex-col gap-2">
                    <div className="w-11 h-11 rounded-xl bg-[#eae8e5] dark:bg-[#202226] flex items-center justify-center text-[#1b1c1a] dark:text-white group-hover:bg-[#111111] dark:group-hover:bg-[#fd591e] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[22px]">auto_fix_high</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] pt-1">
                      AI Video Ads
                    </h3>
                    <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                      Prompt-directed commercial visuals, Runway & Midjourney pipelines, and diffusion concept spots.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-[#ae3200] dark:text-[#ff7843] font-display text-xs font-bold opacity-80 group-hover:opacity-100">
                    <span>03 / GenAI Pipelines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action CTA Block */}
            <div className="bg-[#efeeeb] dark:bg-[#141517] rounded-2xl p-6 lg:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  Ready to start a project?
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                  Currently booking Q2/Q3 commissions and direct brand identity briefs.
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02]"
                >
                  <span>Let's Work Together</span>
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </button>
                {onOpenPdf && (
                  <button
                    onClick={onOpenPdf}
                    className="inline-flex items-center justify-center gap-2 bg-[#f5f3f0] hover:bg-[#efeeeb] dark:bg-[#1e2024] dark:hover:bg-[#25282d] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs sm:text-sm font-semibold px-5 py-3 rounded-full shadow-xs hover:shadow transition-colors cursor-pointer border border-[#e5e2dc] dark:border-[#2d3034]"
                    title="Open PDF Portfolio in new tab"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#fd591e]">description</span>
                    <span>PDF Dossier</span>
                    <span className="material-symbols-outlined text-[14px] text-[#5f6368] dark:text-[#a2a09c]">north_east</span>
                  </button>
                )}
                <button
                  onClick={() => onNavigate('work')}
                  className="hidden md:inline-flex items-center justify-center gap-2 bg-white hover:bg-[#eae8e5] dark:bg-[#1e2024] dark:hover:bg-[#25282d] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs sm:text-sm font-semibold px-5 py-3 rounded-full shadow-xs hover:shadow transition-colors cursor-pointer border border-[#e5e2dc] dark:border-[#2d3034]"
                >
                  <span>Explore Work</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
