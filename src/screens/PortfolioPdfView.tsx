import React, { useState, useEffect } from 'react';
import {
  CONCEPT_BRANDS_DEEPDIVE,
  FEATURED_PROJECTS,
  PROFILE_DATA,
} from '../data/portfolioData';
import {
  BrandPdfRecord,
  getAllBrandPdfs,
  openBrandPdfInNewTab,
} from '../utils/brandPdfStorage';

interface PortfolioPdfViewProps {
  onBack?: () => void;
}

export const PortfolioPdfView: React.FC<PortfolioPdfViewProps> = ({ onBack }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [brandPdfs, setBrandPdfs] = useState<Record<string, BrandPdfRecord>>({});

  useEffect(() => {
    document.title = 'Nayan Singh Rao | Graphic Designer';
    getAllBrandPdfs().then(setBrandPdfs);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    if (window.opener && !window.opener.closed) {
      window.close();
    } else if (onBack) {
      onBack();
    } else {
      window.location.hash = '#home';
    }
  };

  return (
    <div className="min-h-screen bg-[#2c2d30] text-[#1b1c1a] flex flex-col items-center print:bg-white print:p-0">
      {/* Top Floating Document Toolbar (Hidden when printing) */}
      <header className="sticky top-0 z-50 w-full bg-[#1b1c1a]/95 text-white backdrop-blur-md px-4 sm:px-8 py-3 flex items-center justify-between border-b border-white/10 shadow-xl print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#fd591e] text-white flex items-center justify-center font-display font-bold text-sm">
            PDF
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-white">
              Nayan_Singh_Rao_Portfolio_2025.pdf
            </span>
            <span className="font-sans text-[11px] text-white/60">
              5 Pages • Editorial Archive • 300 DPI Press Ready
            </span>
          </div>
        </div>

        {/* Center Zoom Controls (Desktop only) */}
        <div className="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 10, 70))}
            className="hover:text-[#fd591e] transition-colors cursor-pointer"
            title="Zoom Out"
          >
            <span className="material-symbols-outlined text-[16px]">remove</span>
          </button>
          <span className="font-mono text-white/90">{zoomLevel}%</span>
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 10, 140))}
            className="hover:text-[#fd591e] transition-colors cursor-pointer"
            title="Zoom In"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
          <button
            onClick={() => setZoomLevel(100)}
            className="text-[10px] uppercase text-white/60 hover:text-white ml-1 cursor-pointer"
          >
            Reset
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs font-semibold shadow-md transition-all cursor-pointer hover:scale-[1.02]"
            title="Print or Save as PDF"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={handleClose}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-xs font-medium transition-colors cursor-pointer"
            title="Return to Website"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </header>

      {/* Document Pages Container */}
      <main
        style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
        className="w-full max-w-[900px] flex flex-col gap-10 my-8 px-4 transition-transform duration-200 print:max-w-none print:w-full print:my-0 print:p-0 print:transform-none"
      >
        {/* ======================================================== */}
        {/* PAGE 1: COVER SPREAD */}
        {/* ======================================================== */}
        <article className="w-full min-h-[1160px] bg-[#fbf9f6] rounded-xl shadow-2xl p-12 sm:p-16 flex flex-col justify-between border border-[#e5e2dc] relative overflow-hidden print:shadow-none print:rounded-none print:border-none print:min-h-screen print:break-after-page">
          {/* Top Geometry Line */}
          <div className="flex items-center justify-between border-b border-[#1b1c1a]/15 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#111111] text-white rounded-xl flex items-center justify-center font-display font-bold text-xl select-none">
                NR
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-tight text-[#1b1c1a]">
                  NAYAN SINGH RAO
                </span>
                <span className="font-display text-[11px] font-semibold uppercase tracking-wider text-[#5f6368]">
                  GRAPHIC DESIGNER
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold block">
                OFFICIAL PORTFOLIO DOSSIER
              </span>
              <span className="font-sans text-xs text-[#5f6368]">
                2025 EDITION • CURATED WORKS
              </span>
            </div>
          </div>

          {/* Hero Typography Block */}
          <div className="my-auto py-12 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#efeeeb] px-4 py-1.5 rounded-full w-fit border border-[#e5e2dc]">
              <span className="w-2 h-2 rounded-full bg-[#fd591e]"></span>
              <span className="font-display text-xs uppercase tracking-wider text-[#1b1c1a] font-bold">
                VISUAL IDENTITY • REELS • AI VIDEO ADS
              </span>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-[#1b1c1a] leading-[1.05]">
              Engineering Brands & Kinetic Motion with Precision.
            </h1>

            <p className="font-sans text-xl text-[#5f6368] max-w-2xl leading-relaxed">
              A comprehensive showcase of brand identity architectures, tactile retail packaging systems, social media reels, and AI video ads.
            </p>

            {/* Spec Box */}
            <div className="grid grid-cols-2 gap-4 p-6 rounded-2xl bg-[#f5f3f0] border border-[#e5e2dc] mt-6">
              <div>
                <span className="font-display text-[10px] uppercase tracking-wider text-[#5f6368] font-bold block">
                  LOCATION
                </span>
                <span className="font-display text-sm font-bold text-[#1b1c1a]">
                  Rajasthan, India
                </span>
              </div>
              <div>
                <span className="font-display text-[10px] uppercase tracking-wider text-[#5f6368] font-bold block">
                  DIRECT EMAIL
                </span>
                <span className="font-display text-sm font-bold text-[#fd591e]">
                  {PROFILE_DATA.email}
                </span>
              </div>
            </div>
          </div>

          {/* Cover Footer */}
          <div className="flex items-center justify-between border-t border-[#1b1c1a]/15 pt-6 text-xs text-[#5f6368] font-display">
            <span>{PROFILE_DATA.email}</span>
            <span>Document 01 / 05</span>
            <span>© {new Date().getFullYear()} Nayan Singh Rao</span>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PAGE 2: STORY, EDUCATION & 3 PILLARS */}
        {/* ======================================================== */}
        <article className="w-full min-h-[1160px] bg-[#fbf9f6] rounded-xl shadow-2xl p-12 sm:p-16 flex flex-col justify-between border border-[#e5e2dc] print:shadow-none print:rounded-none print:border-none print:min-h-screen print:break-after-page">
          <div className="flex items-center justify-between border-b border-[#1b1c1a]/15 pb-4">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              02 / EXECUTIVE PROFILE & CORE DISCIPLINES
            </span>
            <span className="font-sans text-xs text-[#5f6368]">NAYAN SINGH RAO</span>
          </div>

          <div className="flex flex-col gap-8 my-6">
            {/* Bio Header */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1b1c1a]">
                Visual Designer & Motion Creator
              </h2>
              <p className="font-sans text-base text-[#1b1c1a] mt-3 leading-relaxed">
                I'm a graphic designer based in Rajasthan, India, focused on branding, visual identity, logo design and packaging design. I currently work at Jundalo Technologies, creating AI-generated video ads, social media reels and graphic design work.
              </p>
            </div>

            {/* Academic Credential Card */}
            <div className="p-5 rounded-xl bg-[#efeeeb] flex items-center justify-between border border-[#e5e2dc]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#111111] font-bold shadow-xs">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1b1c1a]">
                    Arts
                  </h4>
                  <span className="font-sans text-xs text-[#5f6368]">
                    Govind Guru Tribal University (GGTU), Banswara • 2023 - 2026
                  </span>
                </div>
              </div>
              <span className="font-display text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#1b1c1a]">
                2023 - 2026
              </span>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#e5e2dc] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#efeeeb] flex items-center justify-center text-[#1b1c1a] mb-3">
                    <span className="material-symbols-outlined text-[20px]">draw</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1b1c1a]">
                    Branding & Visual Identity
                  </h3>
                  <p className="font-sans text-xs text-[#5f6368] mt-2 leading-relaxed">
                    Brand marks, typography architectures, color systems, and packaging design built for enduring distinction.
                  </p>
                </div>
                <span className="font-display text-[10px] text-[#fd591e] uppercase font-bold mt-4 block">
                  01 / System Design
                </span>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#e5e2dc] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#efeeeb] flex items-center justify-center text-[#1b1c1a] mb-3">
                    <span className="material-symbols-outlined text-[20px]">movie_edit</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1b1c1a]">
                    Reels & Social Media
                  </h3>
                  <p className="font-sans text-xs text-[#5f6368] mt-2 leading-relaxed">
                    High-retention kinetic typography reels, vertical short-form formats, and audio-synced video micro-content.
                  </p>
                </div>
                <span className="font-display text-[10px] text-[#fd591e] uppercase font-bold mt-4 block">
                  02 / Motion & Rhythm
                </span>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#e5e2dc] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#efeeeb] flex items-center justify-center text-[#1b1c1a] mb-3">
                    <span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#1b1c1a]">
                    AI Video Ads
                  </h3>
                  <p className="font-sans text-xs text-[#5f6368] mt-2 leading-relaxed">
                    Prompt-directed visuals, Runway Gen-3 Alpha passes, and synthetic concept spots.
                  </p>
                </div>
                <span className="font-display text-[10px] text-[#fd591e] uppercase font-bold mt-4 block">
                  03 / GenAI Pipelines
                </span>
              </div>
            </div>


          </div>

          <div className="flex items-center justify-between border-t border-[#1b1c1a]/15 pt-4 text-xs text-[#5f6368] font-display">
            <span>Portfolio Dossier</span>
            <span>Document 02 / 05</span>
            <span>Nayan Singh Rao</span>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PAGE 3: CONCEPT BRANDS DEEP DIVE */}
        {/* ======================================================== */}
        <article className="w-full min-h-[1160px] bg-[#fbf9f6] rounded-xl shadow-2xl p-12 sm:p-16 flex flex-col justify-between border border-[#e5e2dc] print:shadow-none print:rounded-none print:border-none print:min-h-screen print:break-after-page">
          <div className="flex items-center justify-between border-b border-[#1b1c1a]/15 pb-4">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              03 / FEATURED IN-DEPTH DOSSIERS — CONCEPT BRANDS
            </span>
            <span className="font-sans text-xs text-[#5f6368]">IDENTITY & PACKAGING</span>
          </div>

          <div className="flex flex-col gap-6 my-4">
            {CONCEPT_BRANDS_DEEPDIVE.map((study) => (
              <div
                key={study.id}
                className="p-5 rounded-2xl bg-white border border-[#e5e2dc] shadow-xs flex flex-col md:flex-row gap-6 items-center"
              >
                {/* Visual Thumbnail */}
                <div className="w-full md:w-56 h-44 rounded-xl overflow-hidden bg-[#efeeeb] shrink-0 relative">
                  <img
                    src={study.image}
                    alt={study.imageAlt || `Design showcase visual for ${study.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/75 text-white font-display text-[9px] uppercase font-bold">
                    {study.category}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-bold text-[#1b1c1a]">
                        {study.title}
                      </h3>
                      <span className="font-display text-xs font-semibold text-[#5f6368]">
                        {study.year}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#5f6368] mt-1 leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Swatches Ribbon */}
                  {study.colorPalette && (
                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-[#f5f3f0]">
                      <span className="font-display text-[10px] text-[#5f6368] uppercase font-bold">
                        Tokens:
                      </span>
                      <div className="flex items-center gap-1.5">
                        {study.colorPalette.map((col, idx) => (
                          <div
                            key={idx}
                            title={`${col.name}: ${col.hex}`}
                            className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#f5f3f0] text-[10px] font-mono border border-[#e5e2dc]"
                          >
                            <span
                              style={{ backgroundColor: col.hex }}
                              className="w-2.5 h-2.5 rounded-full inline-block border border-black/10"
                            ></span>
                            <span>{col.hex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#f5f3f0]">
                    <div className="flex flex-wrap gap-1">
                      {study.deliverables?.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2 py-0.5 rounded bg-[#efeeeb] font-display text-[9px] font-semibold text-[#1b1c1a]"
                        >
                          {del}
                        </span>
                      ))}
                    </div>

                    {brandPdfs[study.id] && (
                      <button
                        onClick={() => openBrandPdfInNewTab(brandPdfs[study.id])}
                        className="print:hidden inline-flex items-center gap-1 text-[10px] font-display font-bold text-[#fd591e] hover:underline cursor-pointer ml-2"
                        title="Open brand presentation PDF"
                      >
                        <span className="material-symbols-outlined text-[13px]">picture_as_pdf</span>
                        <span>Open {study.title} PDF ↗</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-[#1b1c1a]/15 pt-4 text-xs text-[#5f6368] font-display">
            <span>Concept Brands Series</span>
            <span>Document 03 / 05</span>
            <span>Nayan Singh Rao</span>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PAGE 4: FEATURED SHOWCASE WORKS */}
        {/* ======================================================== */}
        <article className="w-full min-h-[1160px] bg-[#fbf9f6] rounded-xl shadow-2xl p-12 sm:p-16 flex flex-col justify-between border border-[#e5e2dc] print:shadow-none print:rounded-none print:border-none print:min-h-screen print:break-after-page">
          <div className="flex items-center justify-between border-b border-[#1b1c1a]/15 pb-4">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              04 / CURATED SHOWCASE — REELS & AI VIDEO ADS
            </span>
            <span className="font-sans text-xs text-[#5f6368]">SELECTED PORTFOLIO</span>
          </div>

          <div className="flex flex-col gap-6 my-4">
            {FEATURED_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="p-5 rounded-2xl bg-white border border-[#e5e2dc] shadow-xs flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="w-full md:w-56 h-44 rounded-xl overflow-hidden bg-[#efeeeb] shrink-0 relative">
                  <img
                    src={proj.image}
                    alt={proj.imageAlt || `Portfolio showcase visual for ${proj.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#fd591e] text-white font-display text-[9px] uppercase font-bold">
                    {proj.badge}
                  </div>
                  {proj.location && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/75 text-white font-display text-[9px]">
                      {proj.location}
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#1b1c1a]">
                      {proj.title}
                    </h3>
                    <span className="font-display text-xs text-[#fd591e] font-bold uppercase tracking-wider block mt-0.5">
                      {proj.category}
                    </span>
                    <p className="font-sans text-xs text-[#5f6368] mt-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {proj.metrics && (
                    <div className="p-3 rounded-lg bg-[#f5f3f0] mt-3 border border-[#e5e2dc]">
                      <span className="font-display text-[10px] uppercase tracking-wider text-[#5f6368] font-bold block">
                        HIGHLIGHT:
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#1b1c1a]">
                        {proj.metrics}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-[#1b1c1a]/15 pt-4 text-xs text-[#5f6368] font-display">
            <span>Selected Showreels</span>
            <span>Document 04 / 05</span>
            <span>Nayan Singh Rao</span>
          </div>
        </article>

        {/* ======================================================== */}
        {/* PAGE 5: TOOLKIT, WORKFLOW & CONTACT PROTOCOLS */}
        {/* ======================================================== */}
        <article className="w-full min-h-[1160px] bg-[#fbf9f6] rounded-xl shadow-2xl p-12 sm:p-16 flex flex-col justify-between border border-[#e5e2dc] print:shadow-none print:rounded-none print:border-none print:min-h-screen">
          <div className="flex items-center justify-between border-b border-[#1b1c1a]/15 pb-4">
            <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
              05 / PRODUCTION TOOLKIT & DIRECT BOOKING
            </span>
            <span className="font-sans text-xs text-[#5f6368]">NAYAN SINGH RAO</span>
          </div>

          <div className="flex flex-col gap-8 my-6">
            {/* Focus Disciplines Card */}
            <div className="p-6 rounded-xl bg-white border border-[#e5e2dc] shadow-xs">
              <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold block mb-2">
                CORE FOCUS
              </span>
              <p className="font-sans text-sm text-[#1b1c1a] leading-relaxed">
                Branding, visual identity, logo design, packaging design, social media reels, and AI video ads.
              </p>
            </div>

            {/* Direct Channels Card */}
            <div className="p-8 rounded-2xl bg-[#111111] text-white flex flex-col justify-between">
              <div>
                <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                  COMMISSION BOOKING & INQUIRIES
                </span>
                <h2 className="font-display text-3xl font-bold text-white mt-2">
                  Have a project in mind? Let's connect.
                </h2>
                <p className="font-sans text-sm text-white/70 mt-2 leading-relaxed">
                  Accepting direct commissions for brand identity revamps, retail packaging overhauls, social media reels, and AI video ads.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                <div>
                  <span className="font-display text-[10px] uppercase tracking-wider text-white/50 block">
                    DIRECT EMAIL
                  </span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="font-display text-sm font-bold text-white hover:text-[#fd591e] transition-colors"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
                <div>
                  <span className="font-display text-[10px] uppercase tracking-wider text-white/50 block">
                    ONLINE PROFILES
                  </span>
                  <div className="flex items-center gap-4 mt-1">
                    <a
                      href={PROFILE_DATA.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm font-bold text-white hover:text-[#fd591e] transition-colors"
                    >
                      Behance ↗
                    </a>
                    <span className="text-white/30">•</span>
                    <a
                      href={PROFILE_DATA.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-sm font-bold text-white hover:text-[#fd591e] transition-colors"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#1b1c1a]/15 pt-4 text-xs text-[#5f6368] font-display">
            <span>End of Document</span>
            <span>Document 05 / 05</span>
            <span>Nayan Singh Rao Portfolio</span>
          </div>
        </article>
      </main>
    </div>
  );
};
