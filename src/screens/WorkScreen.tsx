import React from 'react';
import { CONCEPT_BRANDS } from '../data/portfolioData';
import { BehanceIcon } from '../components/SocialIcons';

interface WorkScreenProps {
  onNavigate?: (tab: string) => void;
  onSelectProject?: (project: any) => void;
  onOpenPdf?: () => void;
  onOpenBrandDeck?: (brandId: any) => void;
}

export const WorkScreen: React.FC<WorkScreenProps> = () => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Container aligned to uniform 7xl grid */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 lg:py-16 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fd591e]"></span>
            <span className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold">
              Portfolio
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight transition-colors">
            My Work<span className="text-[#fd591e]">.</span>
          </h1>
        </div>

        {/* Single Folder-Style Card titled "Concept Brands" */}
        <div className="w-full flex flex-col rounded-3xl bg-[#f5f3f0] dark:bg-[#151619] border border-[#e2dfd9] dark:border-[#27292e] shadow-sm overflow-hidden transition-colors">
          {/* Folder Tab / Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#e2dfd9] dark:border-[#27292e] bg-[#ebe8e2] dark:bg-[#1a1c20] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fd591e]/10 text-[#fd591e] flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">folder</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2.5">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                    Concept Brands
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold bg-[#e0ded8] dark:bg-[#25282d] text-[#5f6368] dark:text-[#a2a09c]">
                    3 Projects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Folder Contents: Exactly 3 Case-Study Cards Grid */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {CONCEPT_BRANDS.map((brand, idx) => (
                <article
                  key={brand.id}
                  className="bg-[#fbf9f6] dark:bg-[#1d1f23] rounded-2xl overflow-hidden border border-[#e5e2dc] dark:border-[#2b2e34] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Clean Neutral Cover Placeholder */}
                  <div className="relative w-full aspect-[16/10] bg-[#e8e6e1] dark:bg-[#23252a] flex flex-col items-center justify-center p-6 border-b border-[#e5e2dc] dark:border-[#2b2e34] overflow-hidden select-none">
                    {/* Subtle neutral background grid lines */}
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#c8c5bd_1px,transparent_1px)] dark:bg-[radial-gradient(#3a3d45_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    {/* Centered Neutral Typography & Monogram Frame */}
                    <div className="relative z-10 flex flex-col items-center text-center gap-2">
                      <div className="w-14 h-14 rounded-2xl bg-white/70 dark:bg-[#18191c]/80 backdrop-blur-xs border border-[#dad6ce] dark:border-[#353840] flex items-center justify-center text-[#5f6368] dark:text-[#a2a09c] font-display font-bold text-lg tracking-wider shadow-2xs group-hover:scale-105 transition-transform duration-300">
                        {brand.title.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-display text-xs tracking-widest uppercase font-semibold text-[#75777a] dark:text-[#8e9198]">
                        {brand.title}
                      </span>
                    </div>

                    {/* Corner Tag */}
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
                      <h3 className="font-display text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#fd591e] transition-colors">
                        {brand.title}
                      </h3>
                      <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                        {brand.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={brand.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2.5 bg-[#1b1c1a] hover:bg-[#fd591e] dark:bg-[#282a30] dark:hover:bg-[#fd591e] text-white font-display text-sm font-semibold py-3 px-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 group/btn"
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
    </div>
  );
};
