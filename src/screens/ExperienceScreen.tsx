import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

interface ExperienceScreenProps {
  onNavigate: (tab: string) => void;
}

export const ExperienceScreen: React.FC<ExperienceScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Header */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 pt-8 lg:pt-14 pb-8">
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae8e5] dark:bg-[#1f2125] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs uppercase tracking-widest shadow-xs border border-[#e5e2dc]/60 dark:border-[#2d3034]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fd591e] animate-pulse"></span>
              Career & Trajectory
            </span>
            <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] uppercase tracking-wider font-semibold">
              / 05 — 6+ Years
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold mt-1 transition-colors">
            Experience & Journey
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#5f6368] dark:text-[#a2a09c] leading-relaxed max-w-3xl transition-colors">
            A track record of crafting high-precision brand systems, viral kinetic motion reels, and generative AI ad pipelines for visionary founders and global direct-to-consumer labels.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 py-4">
        <div className="flex flex-col gap-6">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5f3f0] dark:bg-[#141517] rounded-2xl p-6 lg:p-8 shadow-xs border border-[#e5e2dc]/70 dark:border-[#26282c] hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-start justify-between gap-6"
            >
              {/* Left Column: Period & Company */}
              <div className="lg:w-1/3 flex flex-col gap-2">
                <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                  {item.period}
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#5f6368] dark:text-[#a2a09c] font-sans">
                  <span className="font-medium text-[#1b1c1a] dark:text-[#f3f2ee]">{item.company}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
                <div className="mt-2">
                  <span className="px-3 py-1 rounded-full bg-[#eae8e5] dark:bg-[#202226] font-display text-[11px] font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Right Column: Narrative & Highlights */}
              <div className="lg:w-2/3 flex flex-col gap-4">
                <p className="font-sans text-sm sm:text-base text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                    Key Milestones & Outcomes:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-[#5f6368] dark:text-[#a2a09c]">
                        <span className="material-symbols-outlined text-[#fd591e] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#e5e2dc] dark:border-[#26282c]">
                  {item.skills.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-md bg-white dark:bg-[#1f2125] font-display text-xs font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#e5e2dc] dark:border-[#2d3034]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Sector Matrix */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 py-10">
        <div className="bg-[#efeeeb] dark:bg-[#141517] rounded-2xl p-6 lg:p-10 border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
                Industry Versatility
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
                Sectors & Domain Experience
              </h2>
            </div>
            <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
              Collaborating seamlessly across global markets
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#191a1d] p-5 rounded-xl shadow-xs border border-[#e5e2dc] dark:border-[#26282c]">
              <span className="material-symbols-outlined text-[#fd591e] text-[24px]">
                local_bar
              </span>
              <h4 className="font-display text-base font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-2">
                Beverage & Functional Wellness
              </h4>
              <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1">
                Eco glass packaging, botanical dielines, organic typography, and wellness positioning.
              </p>
            </div>

            <div className="bg-white dark:bg-[#191a1d] p-5 rounded-xl shadow-xs border border-[#e5e2dc] dark:border-[#26282c]">
              <span className="material-symbols-outlined text-[#fd591e] text-[24px]">
                diamond
              </span>
              <h4 className="font-display text-base font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-2">
                Luxury Jewelry & Heritage Maisons
              </h4>
              <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1">
                Marwari gold foil boxes, royal monogram heraldry, velvet cases, and archival art direction.
              </p>
            </div>

            <div className="bg-white dark:bg-[#191a1d] p-5 rounded-xl shadow-xs border border-[#e5e2dc] dark:border-[#26282c]">
              <span className="material-symbols-outlined text-[#fd591e] text-[24px]">
                precision_manufacturing
              </span>
              <h4 className="font-display text-base font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-2">
                Consumer Tech & Hardware
              </h4>
              <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1">
                Precision grooming tools, aerospace ergonomics, 3D renders, and Amazon A+ high-converting modules.
              </p>
            </div>

            <div className="bg-white dark:bg-[#191a1d] p-5 rounded-xl shadow-xs border border-[#e5e2dc] dark:border-[#26282c]">
              <span className="material-symbols-outlined text-[#fd591e] text-[24px]">
                movie
              </span>
              <h4 className="font-display text-base font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-2">
                Spatial Art & Generative AI Video
              </h4>
              <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-1">
                Diffusion-rendered commercial spots, Runway Gen-3 camera passes, and futuristic architectural sets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-12 pb-16">
        <div className="bg-[#111111] dark:bg-[#16171a] text-white rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-transparent dark:border-[#26282c]">
          <div className="flex flex-col gap-1 max-w-xl text-center md:text-left">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              Looking for a Senior Creative?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Let's build something exceptional for your brand.
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Open to fractional design leadership, end-to-end identity commissions, and bespoke commercial productions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3.5 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-sm font-semibold transition-colors flex items-center gap-2 shadow-md cursor-pointer hover:scale-[1.02]"
          >
            <span>Start a Conversation</span>
            <span className="material-symbols-outlined text-[18px]">north_east</span>
          </button>
        </div>
      </section>
    </div>
  );
};
