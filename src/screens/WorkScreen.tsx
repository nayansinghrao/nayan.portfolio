import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CONCEPT_BRANDS,
  WORK_CATEGORIES,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioData';
import { BEHANCE_URL, BehanceIcon } from '../components/SocialIcons';
import { ProjectModal } from '../components/ProjectModal';

interface WorkScreenProps {
  onNavigate?: (tab: string) => void;
  onSelectProject?: (project: any) => void;
  onOpenPdf?: () => void;
  onOpenBrandDeck?: (brandId: any) => void;
}

export const WorkScreen: React.FC<WorkScreenProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? CONCEPT_BRANDS
      : CONCEPT_BRANDS.filter((brand) => brand.categories?.includes(selectedCategory));

  const getCategoryCount = (catId: ProjectCategory) => {
    if (catId === 'All') return CONCEPT_BRANDS.length;
    return CONCEPT_BRANDS.filter((b) => b.categories?.includes(catId)).length;
  };

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Container aligned to uniform 7xl grid */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 lg:py-16 flex flex-col gap-10">
        {/* Section Header & Clickable Category Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#e5e2dc]/60 dark:border-[#222428]">
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

          {/* Category Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none"
          >
            {WORK_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group/pill relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-display font-semibold transition-all duration-200 cursor-pointer select-none shrink-0 ${
                    isSelected
                      ? 'bg-[#fd591e] text-white shadow-sm shadow-[#fd591e]/30 scale-[1.02]'
                      : 'bg-[#efede8] dark:bg-[#1a1c20] text-[#5f6368] dark:text-[#a2a09c] hover:bg-[#e5e2dc] dark:hover:bg-[#25282e] hover:text-[#1b1c1a] dark:hover:text-[#f3f2ee] border border-[#e2dfd9]/80 dark:border-[#2b2e34]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] sm:text-[18px] transition-colors ${
                      isSelected
                        ? 'text-white'
                        : 'text-[#75777a] dark:text-[#8a8c92] group-hover/pill:text-[#fd591e]'
                    }`}
                  >
                    {cat.icon}
                  </span>
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                      isSelected
                        ? 'bg-white/25 text-white'
                        : 'bg-black/5 dark:bg-white/10 text-[#75777a] dark:text-[#8a8c92]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Single Folder-Style Card */}
        <div className="w-full flex flex-col rounded-3xl bg-[#f5f3f0] dark:bg-[#151619] border border-[#e2dfd9] dark:border-[#27292e] shadow-sm overflow-hidden transition-colors">
          {/* Folder Tab / Header Bar */}
          <div className="px-6 sm:px-8 py-5 border-b border-[#e2dfd9] dark:border-[#27292e] bg-[#ebe8e2] dark:bg-[#1a1c20] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-[#fd591e]/10 text-[#fd591e] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">folder</span>
              </div>
              <div className="flex items-center gap-2.5 min-w-0">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight truncate">
                  {selectedCategory === 'All' ? 'Concept Brands' : `${selectedCategory} Projects`}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold bg-[#e0ded8] dark:bg-[#25282d] text-[#5f6368] dark:text-[#a2a09c] shrink-0">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>
            </div>

            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-display font-medium text-[#75777a] hover:text-[#fd591e] hover:bg-[#e0ded8]/50 dark:text-[#9a9ba0] dark:hover:text-[#fd591e] dark:hover:bg-[#25282d]/50 transition-all cursor-pointer shrink-0"
              >
                <span>Show All</span>
                <span className="material-symbols-outlined text-[15px]">close</span>
              </button>
            )}
          </div>

          {/* Folder Contents */}
          <div className="p-6 sm:p-8 lg:p-10">
            {filteredProjects.length === 0 ? (
              <div className="py-14 sm:py-18 px-6 text-center flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#fd591e]/10 text-[#fd591e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">smart_display</span>
                </div>
                <div className="max-w-md flex flex-col gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                    AI Video Ads & Reels
                  </h3>
                  <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                    AI-generated video ads and social media reels created at Jundalo Technologies. New showcase case studies will be published directly to Behance.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                  <a
                    href={BEHANCE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#fd591e] hover:bg-[#e04810] text-white font-display text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <BehanceIcon className="w-4 h-4 shrink-0" />
                    <span>View Behance Profile</span>
                    <span className="material-symbols-outlined text-[15px]">north_east</span>
                  </a>
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="inline-flex items-center gap-1.5 bg-[#ebe8e2] dark:bg-[#25282d] text-[#1b1c1a] dark:text-[#f3f2ee] hover:bg-[#e0ded8] dark:hover:bg-[#2e3137] font-display text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>View All Work</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((brand: ProjectItem, idx: number) => (
                    <motion.article
                      key={brand.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      whileHover={{ scale: 1.025, y: -4 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      onClick={() => setSelectedProject(brand)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProject(brand);
                        }
                      }}
                      className="bg-[#fbf9f6] dark:bg-[#1d1f23] rounded-2xl overflow-hidden border border-[#e5e2dc] dark:border-[#2b2e34] shadow-xs hover:shadow-xl hover:border-[#fd591e]/40 dark:hover:border-[#fd591e]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#fd591e]"
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

                        {/* Corner Badges: Project Tag + Categories */}
                        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 max-w-[80%]">
                          <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#141518]/90 backdrop-blur-md text-[11px] font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#dad6ce]/70 dark:border-[#353840] shadow-2xs">
                            {brand.tag}
                          </span>
                          {brand.categories?.map((cat: string) => (
                            <span
                              key={cat}
                              className="px-2.5 py-1 rounded-full bg-white/85 dark:bg-[#141518]/85 backdrop-blur-md text-[10px] font-display font-semibold text-[#fd591e] border border-[#dad6ce]/70 dark:border-[#353840] shadow-2xs"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        <div className="absolute bottom-3 right-3 text-[11px] font-mono font-medium text-[#8f9196] dark:text-[#6e7178]">
                          0{idx + 1}
                        </div>
                      </div>

                      {/* Card Content & Action Button */}
                      <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {brand.categories?.map((c: string) => (
                              <span
                                key={c}
                                className="text-[11px] font-display font-bold uppercase tracking-wider text-[#fd591e]"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-display text-2xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#fd591e] transition-colors">
                            {brand.title}
                          </h3>
                          <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] leading-relaxed">
                            {brand.description}
                          </p>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(brand);
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#1b1c1a] hover:bg-[#fd591e] dark:bg-[#282a30] dark:hover:bg-[#fd591e] text-white font-display text-sm font-semibold py-3 px-5 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 group/btn cursor-pointer"
                          >
                            <span>View Project</span>
                            <span className="material-symbols-outlined text-[17px] group-hover/btn:scale-110 transition-transform">
                              open_in_full
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full-Screen Concept Brand Project Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
