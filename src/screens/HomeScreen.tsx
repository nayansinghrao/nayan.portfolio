import React from 'react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';

interface HomeScreenProps {
  onNavigate: (tab: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenHire: () => void;
  onOpenPdf: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProject,
  onOpenHire,
  onOpenPdf,
}) => {
  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Hero Section */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 min-h-[85vh] flex flex-col justify-center py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            {/* Small label/badge: 'Hi, I'm' */}
            <div className="inline-flex items-center gap-2 bg-[#efeeeb] dark:bg-[#1f2125] px-4 py-1.5 rounded-full w-fit shadow-xs mb-5 border border-[#e5e2dc]/60 dark:border-[#2d3034] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse"></span>
              <span className="font-display text-xs uppercase tracking-wider text-[#1b1c1a] dark:text-[#f3f2ee] font-bold">
                Hi, I'm
              </span>
            </div>

            {/* Huge heading: Nayan Singh Rao */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-[80px] text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold leading-[1.05] text-balance transition-colors">
              Nayan Singh Rao
            </h1>

            {/* Subheading */}
            <p className="mt-5 font-display text-xl sm:text-2xl text-[#5f6368] dark:text-[#a2a09c] max-w-xl font-normal leading-relaxed transition-colors">
              Graphic designer creating brands, reels and AI video ads
            </p>

            {/* Three buttons side by side */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Button 1: View My Work in bold accent orange #FF5A1F */}
              <button
                onClick={() => onNavigate('work')}
                className="inline-flex items-center gap-2 bg-[#FF5A1F] text-white font-display text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:bg-[#e04810] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </button>

              {/* Button 2: Hire Me outlined button with dark border */}
              <button
                onClick={onOpenHire}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-[#111111] dark:border-white/30 text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] font-display text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Hire Me</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </button>

              {/* Button 3: Portfolio PDF */}
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 bg-[#f5f3f0] dark:bg-[#1a1b1e] hover:bg-[#efeeeb] dark:hover:bg-[#25282d] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 border border-[#e5e2dc] dark:border-[#2d3034] cursor-pointer hover:scale-[1.02] active:scale-[0.98] shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px] text-[#fd591e]">description</span>
                <span>Portfolio PDF</span>
                <span className="material-symbols-outlined text-[16px] text-[#5f6368] dark:text-[#a2a09c]">north_east</span>
              </button>
            </div>
          </div>

          {/* Right Column: Portrait Photo with Playful Sticker-Style Accent Shape */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Playful sticker-style accent shape placed behind/overlapping */}
            <div className="absolute -top-8 -right-4 w-44 h-44 rounded-full bg-[#FF5A1F]/15 blur-2xl pointer-events-none"></div>

            {/* Playful Craft Sticker Badge */}
            <div className="absolute -top-4 -left-3 sm:-left-6 z-20 bg-[#FF5A1F] text-white px-4 py-1.5 rounded-full shadow-lg -rotate-6 flex items-center gap-1.5 border-2 border-[#fbf9f6] dark:border-[#0d0e0f] font-display text-xs uppercase tracking-wider font-bold select-none hover:rotate-0 transition-transform duration-200">
              <span className="material-symbols-outlined text-[16px]">star</span>
              <span>Visual Alchemist</span>
            </div>

            {/* Secondary playful sticker overlapping bottom right */}
            <div className="absolute -bottom-5 -right-3 z-20 bg-white dark:bg-[#1a1b1e] text-[#1b1c1a] dark:text-[#f3f2ee] px-4 py-2 rounded-2xl shadow-xl rotate-3 border border-[#e5e2dc] dark:border-[#2d3034] flex items-center gap-2 select-none hover:rotate-0 transition-transform duration-200">
              <span className="material-symbols-outlined text-[18px] text-[#FF5A1F]">bolt</span>
              <span className="font-display text-xs font-bold">Open for Q3/Q4</span>
            </div>

            {/* Large portrait photo placeholder in sleek rounded frame */}
            <div className="relative w-full max-w-[420px] h-[480px] rounded-[28px] overflow-hidden border border-[#e5e2dc]/80 dark:border-[#2d3034] shadow-2xl bg-[#efeeeb] dark:bg-[#1a1b1e] group">
              <img
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                alt="Editorial portrait of Indian creative designer Nayan Singh Rao in studio setting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoVHF9BbNDImzTFuT3IugkRudPiiqXiQozXOmUzd_LAP26aTt_A9kag7bH256UwbSjs0cyLyJqF0zScQU8J9LJh56O9sXEwugGwcmUZfdiv0qw5ee9-ncQ12i7HzllkJSKgy4MBrNnm5CwgjST6brhdohMDZp9TSHZUFBas1M3mDS-AcjA5qZ5jZulXH8J940iX9JdVH-2Ov7YMRcLUMlEjP9EUA_rRi9_BX5sTkNFqMbU36f4-rk4TA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <p className="font-display text-xl font-bold">Nayan S. Rao</p>
                  <p className="font-sans text-xs text-white/80">Jaipur • Worldwide</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-[#111111] flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-[20px] text-[#111111]">
                    verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Below Hero: Creative Toolkit & Workflow Dock & Short Stats Row */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 py-8 flex flex-col items-center gap-12">
        {/* Floating Tool Icons App Dock */}
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-semibold">
            Creative Toolkit & Workflow
          </span>
          <div className="bg-[#f5f3f0]/95 dark:bg-[#18191c]/95 backdrop-blur-xl border border-[#e5e2dc] dark:border-[#26282c] shadow-md px-6 sm:px-8 py-3 rounded-full flex items-center gap-5 sm:gap-8 transition-all">
            {/* Photoshop (Ps) */}
            <div 
              onClick={() => onNavigate('skills')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#001E36] text-[#31A8FF] flex items-center justify-center font-display text-[18px] font-bold shadow-sm transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-110">
                Ps
              </div>
              <span className="font-display text-[11px] text-[#5f6368] dark:text-[#a2a09c] group-hover:text-[#1b1c1a] dark:group-hover:text-white font-medium mt-1">
                Photoshop
              </span>
            </div>

            {/* Illustrator (Ai) */}
            <div 
              onClick={() => onNavigate('skills')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#330000] text-[#FF9A00] flex items-center justify-center font-display text-[18px] font-bold shadow-sm transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-110">
                Ai
              </div>
              <span className="font-display text-[11px] text-[#5f6368] dark:text-[#a2a09c] group-hover:text-[#1b1c1a] dark:group-hover:text-white font-medium mt-1">
                Illustrator
              </span>
            </div>

            {/* After Effects (Ae) */}
            <div 
              onClick={() => onNavigate('skills')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00005B] text-[#9999FF] flex items-center justify-center font-display text-[18px] font-bold shadow-sm transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-110">
                Ae
              </div>
              <span className="font-display text-[11px] text-[#5f6368] dark:text-[#a2a09c] group-hover:text-[#1b1c1a] dark:group-hover:text-white font-medium mt-1">
                After Effects
              </span>
            </div>

            {/* Premiere Pro (Pr) */}
            <div 
              onClick={() => onNavigate('skills')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00005B] text-[#EA77FF] flex items-center justify-center font-display text-[18px] font-bold shadow-sm transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-110">
                Pr
              </div>
              <span className="font-display text-[11px] text-[#5f6368] dark:text-[#a2a09c] group-hover:text-[#1b1c1a] dark:group-hover:text-white font-medium mt-1">
                Premiere
              </span>
            </div>

            {/* Figma (Fg) */}
            <div 
              onClick={() => onNavigate('skills')}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] text-white flex items-center justify-center font-display text-[18px] font-bold shadow-sm transition-transform duration-200 group-hover:-translate-y-1.5 group-hover:scale-110 border border-[#e5e2dc]/40 dark:border-white/10">
                Fg
              </div>
              <span className="font-display text-[11px] text-[#5f6368] dark:text-[#a2a09c] group-hover:text-[#1b1c1a] dark:group-hover:text-white font-medium mt-1">
                Figma
              </span>
            </div>
          </div>
        </div>

        {/* Short Stats Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div 
            onClick={() => onNavigate('work')}
            className="bg-[#f5f3f0] dark:bg-[#16171a] hover:bg-[#efeeeb] dark:hover:bg-[#1e2024] transition-all duration-300 p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-[#e5e2dc]/60 dark:border-[#26282c] group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                Identity Focus
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
            </div>
            <div className="my-6">
              <p className="font-display text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                3 Concept Brands
              </p>
              <p className="font-sans text-sm text-[#5f6368] dark:text-[#9ea3a8] mt-2">
                Bespoke systems, packaging & design craft
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#5f6368] dark:text-[#a2a09c] font-display text-xs font-semibold">
              <span>Crafted 2023–2025</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div 
            onClick={() => onNavigate('work')}
            className="bg-[#f5f3f0] dark:bg-[#16171a] hover:bg-[#efeeeb] dark:hover:bg-[#1e2024] transition-all duration-300 p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-[#e5e2dc]/60 dark:border-[#26282c] group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                Generative Craft
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
            </div>
            <div className="my-6">
              <p className="font-display text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                AI Video Ads
              </p>
              <p className="font-sans text-sm text-[#5f6368] dark:text-[#9ea3a8] mt-2">
                Runway Gen-3, Midjourney & synthetic direction
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#5f6368] dark:text-[#a2a09c] font-display text-xs font-semibold">
              <span>Cinema-Grade Commercials</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div 
            onClick={() => onNavigate('work')}
            className="bg-[#f5f3f0] dark:bg-[#16171a] hover:bg-[#efeeeb] dark:hover:bg-[#1e2024] transition-all duration-300 p-8 rounded-2xl shadow-sm flex flex-col justify-between border border-[#e5e2dc]/60 dark:border-[#26282c] group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                Viral Growth
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
            </div>
            <div className="my-6">
              <p className="font-display text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                Reels & Social Media
              </p>
              <p className="font-sans text-sm text-[#5f6368] dark:text-[#9ea3a8] mt-2">
                15M+ organic impressions & kinetic typography
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[#5f6368] dark:text-[#a2a09c] font-display text-xs font-semibold">
              <span>Short-Form Vertical Native</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Showcase Section */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 py-12" id="featured-work">
        <div className="flex items-end justify-between pb-4 border-b border-[#e5e2dc]/60 dark:border-[#222428]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#FF5A1F] font-display text-xs uppercase tracking-wider font-bold mb-1">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]"></span>
              <span>Curated Showcase</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
              Featured Work
            </h2>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="group flex items-center gap-1.5 font-display text-sm font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#FF5A1F] dark:hover:text-[#FF5A1F] transition-colors cursor-pointer"
          >
            <span>View All Work</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-[#efeeeb] dark:bg-[#16171a] flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group border border-[#e5e2dc]/50 dark:border-[#26282c] cursor-pointer"
            >
              <div className="relative w-full h-[280px] bg-[#e4e2df] dark:bg-[#1f2125] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={project.imageAlt}
                  src={project.image}
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`px-3 py-1 rounded-full font-display text-xs font-semibold ${
                    project.badgeType === 'orange'
                      ? 'bg-[#FF5A1F] text-white shadow-sm'
                      : 'bg-white/95 dark:bg-[#1b1c1a]/95 backdrop-blur-md text-[#1b1c1a] dark:text-white shadow-xs'
                  }`}>
                    {project.badge}
                  </span>
                </div>
                {project.location && (
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-[#fbf9f6]/90 dark:bg-[#1b1c1a]/90 backdrop-blur-md px-3 py-1 rounded-full font-display text-[11px] text-[#1b1c1a] dark:text-[#f3f2ee] font-semibold shadow-xs">
                      {project.location}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between bg-[#efeeeb] dark:bg-[#16171a] transition-colors">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight group-hover:text-[#FF5A1F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-[#5f6368] dark:text-[#9ea3a8] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#e5e2dc] dark:border-[#26282c]">
                  <span className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-[#1b1c1a] dark:text-[#f3f2ee] group-hover:text-[#FF5A1F] transition-colors">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                  <span className="font-display text-xs text-[#5f6368] dark:text-[#8a8e94] font-mono">
                    {project.indexNumber}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact & Project Kickoff CTA */}
      <section className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 py-12" id="contact-drawer">
        <div className="bg-[#111111] dark:bg-[#16171a] text-white p-8 lg:p-14 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-transparent dark:border-[#26282c]">
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FF5A1F]/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <span className="font-display text-xs uppercase tracking-wider text-[#FF5A1F] font-bold">
              Let's Collaborate
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-white tracking-tight font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-2 font-sans text-sm sm:text-base text-white/70 leading-relaxed">
              Accepting assignments for brand identities, viral vertical reels, and generative AI video commercial production.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@nayansinghrao.design"
              className="inline-flex items-center gap-2 bg-[#FF5A1F] hover:bg-[#e04810] text-white font-display text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>hello@nayansinghrao.design</span>
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
            <button
              onClick={onOpenPdf}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display text-sm font-semibold px-6 py-3.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#fd591e]">description</span>
              <span>Portfolio PDF (2025)</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display text-sm font-semibold px-6 py-3.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            >
              <span>Project Brief Form</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
