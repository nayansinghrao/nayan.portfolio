import React, { useState } from 'react';
import {
  SKILLS_LIST,
  TOOL_ECOSYSTEM,
  WORKFLOW_STEPS,
} from '../data/portfolioData';

interface SkillsScreenProps {
  onNavigate: (tab: string) => void;
}

export const SkillsScreen: React.FC<SkillsScreenProps> = ({ onNavigate }) => {
  const [activeCluster, setActiveCluster] = useState<string>('all');

  const filterChips = [
    { key: 'all', label: 'All Capabilities (10)' },
    { key: 'identity', label: 'Identity & Packaging' },
    { key: 'motion', label: 'Motion & AI Ads' },
    { key: 'growth', label: 'E-Commerce & Social' },
  ];

  const filteredSkills = activeCluster === 'all'
    ? SKILLS_LIST
    : SKILLS_LIST.filter((s) => s.cluster === activeCluster);

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Editorial Canvas Hero & Header Section */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-8 lg:pt-14 pb-8">
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] dark:bg-[#1f2125] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs uppercase tracking-widest shadow-xs border border-[#e5e2dc]/60 dark:border-[#2d3034]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fd591e] animate-pulse"></span>
              Capability Matrix
            </span>
            <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider font-semibold">
              / 04 — Toolkit
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold mt-1 transition-colors">
            Skills & Tools
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#5f6368] dark:text-[#a2a09c] leading-relaxed max-w-3xl transition-colors">
            Core proficiencies, production software, and synthetic media toolkits engineered for high-impact visual storytelling, distinct identity systems, and conversion-led brand growth.
          </p>
        </div>

        {/* Live Filter Ribbon */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
          <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider mr-2 font-bold">
            Discipline Clusters:
          </span>
          {filterChips.map((chip) => {
            const isActive = activeCluster === chip.key;
            return (
              <button
                key={chip.key}
                onClick={() => setActiveCluster(chip.key)}
                className={`px-4 py-2 rounded-full font-display text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-sm scale-[1.02]'
                    : 'bg-[#efeeeb] dark:bg-[#16171a] text-[#1b1c1a] dark:text-[#f3f2ee] hover:bg-[#eae8e5] dark:hover:bg-[#202226] border border-transparent dark:border-[#26282c]'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Skills Bento Display */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 py-4">
        <div className="bg-[#f5f3f0] dark:bg-[#141517] rounded-2xl p-6 lg:p-10 shadow-xs border border-[#e5e2dc]/70 dark:border-[#26282c] transition-colors">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
                Specialized Disciplines
              </span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1b1c1a] dark:text-[#f3f2ee] font-bold mt-1">
                Design & Creative Mastery
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c] max-w-sm leading-relaxed">
              Hands-on production craftsmanship refined through hundreds of client launches across lifestyle, tech, and D2C spaces.
            </p>
          </div>

          {/* Grid of 10 Mastery Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="group bg-white dark:bg-[#191a1d] p-6 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-[#e5e2dc]/60 dark:border-[#26282c]"
              >
                <div className="flex items-start justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#efeeeb] dark:bg-[#23262b] flex items-center justify-center text-[#1b1c1a] dark:text-[#f3f2ee]">
                    <span className="material-symbols-outlined text-[18px]">
                      {skill.icon}
                    </span>
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full font-display text-[10px] uppercase font-bold tracking-wider ${
                    skill.badgeColor === 'orange'
                      ? 'bg-[#fd591e] text-white'
                      : 'bg-[#eae8e5] dark:bg-[#23262b] text-[#1b1c1a] dark:text-[#f3f2ee]'
                  }`}>
                    {skill.badge}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] group-hover:text-[#fd591e] dark:group-hover:text-[#fd591e] transition-colors">
                    {skill.title}
                  </h3>
                  <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1.5 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f5f3f0] dark:border-[#26282c] flex items-center justify-between text-[#5f6368] dark:text-[#a2a09c] group-hover:text-[#111111] dark:group-hover:text-white font-display text-xs font-semibold">
                  <span>{skill.tag}</span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Software Ecosystem Section */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-14 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fd591e]"></span>
              <span className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold">
                Production Stack
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold mt-1">
              Tools & Software Ecosystem
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#5f6368] dark:text-[#a2a09c] max-w-md leading-relaxed">
            An advanced hybrid pipeline combining industry-standard creative suites with bleeding-edge generative intelligence models.
          </p>
        </div>

        {/* 6 Software Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOL_ECOSYSTEM.map((tool) => {
            if (tool.isAiCore) {
              return (
                <div
                  key={tool.id}
                  className="group bg-[#111111] dark:bg-[#16171a] text-white rounded-2xl p-6 lg:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-white/10 dark:border-[#26282c]"
                >
                  <div className="absolute -right-8 -top-8 w-36 h-36 bg-[#fd591e]/25 rounded-full blur-2xl pointer-events-none"></div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-[#fd591e] text-white flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-[28px]">psychology</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="px-2.5 py-1 rounded-full bg-white text-[#111111] font-display text-[10px] uppercase font-bold shadow-xs">
                          {tool.badge}
                        </span>
                        <span className="font-sans text-xs text-white/70 mt-1">{tool.status}</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-[#ffb59e] transition-colors">
                        {tool.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-white/75 mt-2 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-3 flex flex-wrap gap-1.5 border-t border-white/10">
                    {tool.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded bg-white/10 text-white font-display text-[10px] uppercase font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={tool.id}
                className="group bg-[#efeeeb] dark:bg-[#191a1d] rounded-2xl p-6 lg:p-7 flex flex-col justify-between hover:bg-[#eae8e5] dark:hover:bg-[#22252a] transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 border border-[#e5e2dc]/70 dark:border-[#26282c]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      style={{ backgroundColor: tool.bg, color: tool.fg }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center font-display text-xl font-bold shadow-xs"
                    >
                      {tool.isFigma ? (
                        <span className="material-symbols-outlined text-[28px]">token</span>
                      ) : (
                        tool.logo
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-2.5 py-1 rounded-full bg-white dark:bg-[#23262b] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-[10px] uppercase font-bold shadow-xs border border-[#e5e2dc] dark:border-[#2d3034]">
                        {tool.badge}
                      </span>
                      <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1 font-medium">
                        {tool.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] group-hover:text-[#fd591e] transition-colors">
                      {tool.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c] mt-2 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-3 flex flex-wrap gap-1.5 border-t border-[#e5e2dc] dark:border-[#26282c]">
                  {tool.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-white dark:bg-[#23262b] font-display text-[10px] text-[#1b1c1a] dark:text-[#f3f2ee] font-semibold border border-[#e5e2dc] dark:border-[#2d3034]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Editorial Workflow Visual Strip */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 py-6">
        <div className="bg-[#efeeeb] dark:bg-[#141517] rounded-2xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#e5e2dc] dark:border-[#26282c]">
          <div className="max-w-md">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              Workflow Synthesis
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
              From Neural Prompt to Commercial Export
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c] mt-2 leading-relaxed">
              Visual concepts transition seamlessly between vector grids in Illustrator, camera motion passes in After Effects, and AI syntheses for accelerated speed-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:max-w-2xl">
            {WORKFLOW_STEPS.map((s, i) => (
              <div key={i} className="bg-white dark:bg-[#191a1d] p-4 rounded-xl shadow-xs border border-[#e5e2dc] dark:border-[#26282c] flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs text-[#fd591e] font-bold">
                    {s.step}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-[#5f6368] dark:text-[#a2a09c]">
                    {s.icon}
                  </span>
                </div>
                <span className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                  {s.title}
                </span>
                <span className="font-sans text-[11px] text-[#5f6368] dark:text-[#a2a09c] leading-tight">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Collaboration */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 py-8">
        <div className="flex flex-col gap-2 max-w-xl mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#fd591e]">translate</span>
            <span className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold">
              Global Communication
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
            Languages & Collaboration
          </h2>
          <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
            Fluid cross-border creative direction, async communication, and client alignment across international time zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Hindi */}
          <div className="bg-[#efeeeb] dark:bg-[#141517] rounded-xl p-5 flex items-center justify-between shadow-xs border border-[#e5e2dc] dark:border-[#26282c]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202226] flex items-center justify-center font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] shadow-xs border border-[#e5e2dc] dark:border-[#2d3034]">
                हि
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">Hindi</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#fd591e]/15 text-[#ae3200] dark:text-[#ff7843] font-display text-xs font-bold">
                    Native
                  </span>
                </div>
                <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                  Fluent — Verbal, Written & Cultural Nuance
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="font-display text-xs text-[#1b1c1a] dark:text-[#f3f2ee] uppercase tracking-wider font-bold">
                Primary Tongue
              </span>
              <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">First Language</span>
            </div>
          </div>

          {/* English */}
          <div className="bg-[#efeeeb] dark:bg-[#141517] rounded-xl p-5 flex items-center justify-between shadow-xs border border-[#e5e2dc] dark:border-[#26282c]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#202226] flex items-center justify-center font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee] shadow-xs border border-[#e5e2dc] dark:border-[#2d3034]">
                EN
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">English</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eae8e5] dark:bg-[#202226] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-bold">
                    Professional
                  </span>
                </div>
                <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                  Professional Working Proficiency — Global Client Collaboration
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="font-display text-xs text-[#1b1c1a] dark:text-[#f3f2ee] uppercase tracking-wider font-bold">
                Remote Ready
              </span>
              <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">US, UK, EU, UAE Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Call-to-Action Bar */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-4 pb-16">
        <div className="bg-[#111111] dark:bg-[#16171a] text-white rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-transparent dark:border-[#26282c]">
          <div className="flex flex-col gap-1 max-w-xl text-center md:text-left">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              Ready to Execute
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Have a specific design or motion challenge?
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Whether you need a full brand overhaul, an AI commercial campaign, or high-converting packaging, let's build something unforgettable.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('work')}
              className="px-5 py-3 rounded-full bg-white dark:bg-[#22252a] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs sm:text-sm font-semibold hover:bg-[#efeeeb] dark:hover:bg-[#2c3036] transition-colors flex items-center gap-2 cursor-pointer border border-transparent dark:border-[#2d3034]"
            >
              <span>View Selected Work</span>
              <span className="material-symbols-outlined text-[16px]">visibility</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-[#fd591e] text-white font-display text-xs sm:text-sm font-semibold hover:bg-[#ae3200] transition-colors flex items-center gap-2 shadow-sm cursor-pointer hover:scale-[1.02]"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
