import React, { useState, useEffect } from 'react';
import {
  DOSSIER_FOLDERS,
  CONCEPT_BRANDS_DEEPDIVE,
  ProjectItem,
} from '../data/portfolioData';
import {
  BrandPdfRecord,
  getAllBrandPdfs,
  openBrandPdfInNewTab,
  formatFileSize,
} from '../utils/brandPdfStorage';
import { UploadPdfModal } from '../components/UploadPdfModal';
import { BrandPdfCoverThumbnail } from '../components/BrandPdfCoverThumbnail';

interface WorkScreenProps {
  onNavigate: (tab: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenPdf: () => void;
  onOpenBrandDeck?: (brandId: 'sharpix' | 'cocona' | 'seth-dhanraj') => void;
}

export const WorkScreen: React.FC<WorkScreenProps> = ({
  onNavigate,
  onSelectProject,
  onOpenPdf,
  onOpenBrandDeck,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'concept' | 'reels' | 'ai' | 'packaging' | 'amazon'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [brandPdfs, setBrandPdfs] = useState<Record<string, BrandPdfRecord>>({});
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadModalBrand, setUploadModalBrand] = useState<'cocona' | 'seth-dhanraj' | 'sharpix' | null>(null);

  useEffect(() => {
    const fetchPdfs = async () => {
      const records = await getAllBrandPdfs();
      setBrandPdfs(records);
    };
    fetchPdfs();

    const handleUpdate = () => {
      fetchPdfs();
    };
    window.addEventListener('brand-pdf-updated', handleUpdate);
    return () => window.removeEventListener('brand-pdf-updated', handleUpdate);
  }, []);

  const filterTabs = [
    { key: 'all', label: 'All Work', count: 48 },
    { key: 'concept', label: 'Concept Brands', count: 12 },
    { key: 'reels', label: 'Reels & Social', count: 18 },
    { key: 'ai', label: 'AI Video Ads', count: 9 },
    { key: 'packaging', label: 'Labels & Packaging', count: 5 },
    { key: 'amazon', label: 'Amazon A+', count: 4 },
  ];

  const filteredFolders = activeFilter === 'all'
    ? DOSSIER_FOLDERS
    : DOSSIER_FOLDERS.filter(f => f.filterKey === activeFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@nayansinghrao.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFilterClick = (key: string) => {
    setActiveFilter(key as any);
    if (key === 'concept') {
      const el = document.getElementById('concept-brands-deepdive');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full animate-fadeIn">
      {/* Top Ambient Glow Decorator */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#fd591e]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-[#eae8e5]/60 blur-2xl pointer-events-none"></div>

        {/* Main Content Container: 1440px Grid Alignment */}
        <div className="max-w-[1440px] w-full mx-auto px-5 lg:px-12 py-10 lg:py-16 flex flex-col gap-14">
          {/* HERO HEADER SECTION */}
          <section className="flex flex-col gap-4">
            {/* Kicker Badge with pulsating orange live dot */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd591e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fd591e]"></span>
              </span>
              <span className="font-display text-xs uppercase tracking-widest text-[#5f6368] dark:text-[#a2a09c] font-bold">
                Selected Works (2021–2025)
              </span>
              <span className="text-[#5f6368] dark:text-[#a2a09c] font-display text-xs">•</span>
              <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                Archive Index
              </span>
            </div>

            {/* Giant Headline & Sub-statement Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
              <div className="lg:col-span-7">
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight leading-none font-bold select-none transition-colors">
                  My Work<span className="text-[#fd591e]">.</span>
                </h1>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-1 pb-1">
                <p className="font-sans text-base sm:text-lg text-[#5f6368] dark:text-[#a2a09c] leading-relaxed transition-colors">
                  A curated archive of brand identities, viral kinetic motion reels, high-converting synthetic video commercials, and retail packaging systems engineered for global impact.
                </p>
              </div>
            </div>

            {/* Filter / Quick-Nav Filter Pills & PDF Download */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => handleFilterClick(tab.key)}
                      className={`px-4 py-2 rounded-full font-display text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-sm scale-[1.02]'
                          : 'bg-[#f5f3f0] dark:bg-[#18191c] text-[#1b1c1a] dark:text-[#f3f2ee] hover:bg-[#efeeeb] dark:hover:bg-[#232528] border border-transparent dark:border-[#26282c] hover:scale-[1.01]'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={isActive ? 'opacity-70 text-xs' : 'text-[#5f6368] dark:text-[#9ea3a8] text-xs'}>
                        ({String(tab.count).padStart(2, '0')})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* PDF Dossier Trigger */}
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#18191c] dark:hover:bg-[#232528] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs sm:text-sm font-semibold border border-[#e5e2dc] dark:border-[#26282c] transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
              >
                <span className="material-symbols-outlined text-[18px] text-[#fd591e]">picture_as_pdf</span>
                <span>Download Dossier PDF</span>
              </button>
            </div>
          </section>

          {/* FOLDER CARDS ARCHIVE GRID */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-display text-xs uppercase tracking-widest text-[#5f6368] font-bold">
                  Interactive Portfolios
                </span>
                <span className="w-12 h-[1px] bg-[#e5e2dc]"></span>
                <span className="font-display text-xs text-[#5f6368]">
                  Select a dossier
                </span>
              </div>
              <span className="font-sans text-xs text-[#5f6368] hidden sm:inline-block">
                5 Creative Disciplines
              </span>
            </div>

            {/* 12-Column Folder Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              {filteredFolders.map((folder) => {
                return (
                  <div
                    key={folder.id}
                    onClick={() => {
                      if (folder.filterKey === 'concept') {
                        const target = document.getElementById('concept-brands-deepdive');
                        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else {
                        // Open first corresponding deepdive item
                        const item = CONCEPT_BRANDS_DEEPDIVE[0];
                        onSelectProject(item);
                      }
                    }}
                    className={`${folder.span} group cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-1.5`}
                  >
                    {/* Physical Folder Tab Header */}
                    <div className="flex items-end gap-1 px-3">
                      <div className="bg-[#eae8e5] px-4 py-1.5 rounded-t-xl flex items-center gap-3 shadow-xs border-t border-x border-[#e5e2dc]/70">
                        <span className="font-display text-[11px] tracking-wider text-[#1b1c1a] font-bold">
                          {folder.num}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#111111] text-white font-display text-[10px] font-bold">
                          {folder.count}
                        </span>
                      </div>
                      <div className="h-2 w-16 bg-[#eae8e5]/40 rounded-t-md"></div>
                    </div>

                    {/* Folder Body Canvas */}
                    <div className="relative bg-[#efeeeb] p-6 lg:p-8 rounded-2xl rounded-tl-none shadow-md overflow-hidden flex flex-col justify-between min-h-[380px] border border-[#e5e2dc]/80">
                      {/* Peeking Asset Display */}
                      <div className="relative w-full h-44 mb-6 overflow-hidden rounded-xl bg-[#f5f3f0] flex items-center justify-center p-3 border border-[#e5e2dc]/50">
                        {folder.subImages ? (
                          <>
                            {/* Stacked Graphic Plates */}
                            <div className="absolute -bottom-4 left-6 w-44 h-40 bg-white rounded-xl shadow-md rotate-[-8deg] transform transition-transform group-hover:rotate-[-12deg] group-hover:-translate-y-2 duration-300 overflow-hidden p-2 flex flex-col border border-[#e5e2dc]">
                              <div className="w-full h-24 bg-[#e4e2df] rounded-lg overflow-hidden relative">
                                <img
                                  className="w-full h-full object-cover"
                                  alt={folder.subImages[0].title}
                                  src={folder.subImages[0].img}
                                />
                              </div>
                              <span className="font-display text-[9px] uppercase tracking-wider text-[#1b1c1a] mt-2 font-bold truncate">
                                {folder.subImages[0].title}
                              </span>
                              <div className="flex gap-1 mt-1">
                                {folder.subImages[0].colors?.map((c, i) => (
                                  <span key={i} style={{ backgroundColor: c }} className="w-2.5 h-2.5 rounded-full"></span>
                                ))}
                              </div>
                            </div>

                            {folder.subImages[1] && (
                              <div className="absolute -bottom-2 right-10 w-48 h-40 bg-white rounded-xl shadow-md rotate-[6deg] transform transition-transform group-hover:rotate-[10deg] group-hover:-translate-y-3 duration-300 overflow-hidden p-2 flex flex-col z-10 border border-[#e5e2dc]">
                                <div className="w-full h-24 bg-[#e4e2df] rounded-lg overflow-hidden relative">
                                  <img
                                    className="w-full h-full object-cover"
                                    alt={folder.subImages[1].title}
                                    src={folder.subImages[1].img}
                                  />
                                </div>
                                <span className="font-display text-[9px] uppercase tracking-wider text-[#1b1c1a] mt-2 font-bold truncate">
                                  {folder.subImages[1].title}
                                </span>
                                <div className="flex gap-1 mt-1">
                                  {folder.subImages[1].colors?.map((c, i) => (
                                    <span key={i} style={{ backgroundColor: c }} className="w-2.5 h-2.5 rounded-full"></span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Soundwave representation for Reels */}
                            {folder.filterKey === 'reels' && (
                              <div className="absolute -bottom-6 right-8 w-28 h-48 bg-white rounded-xl shadow-lg rotate-[8deg] group-hover:rotate-[4deg] group-hover:-translate-y-3 transition-transform duration-300 overflow-hidden flex flex-col p-2 z-10 border border-[#e5e2dc]">
                                <div className="relative w-full h-full rounded-lg bg-[#efeeeb] overflow-hidden flex flex-col items-center justify-center p-2 text-center">
                                  <svg className="w-full h-12 text-[#fd591e] mb-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 100 40">
                                    <line x1="5" x2="5" y1="20" y2="20"></line>
                                    <line x1="15" x2="15" y1="10" y2="30"></line>
                                    <line x1="25" x2="25" y1="4" y2="36"></line>
                                    <line x1="35" x2="35" y1="12" y2="28"></line>
                                    <line x1="45" x2="45" y1="18" y2="22"></line>
                                    <line x1="55" x2="55" y1="2" y2="38"></line>
                                    <line x1="65" x2="65" y1="8" y2="32"></line>
                                    <line x1="75" x2="75" y1="14" y2="26"></line>
                                    <line x1="85" x2="85" y1="6" y2="34"></line>
                                    <line x1="95" x2="95" y1="18" y2="22"></line>
                                  </svg>
                                  <span className="font-display text-[9px] uppercase font-bold text-[#1b1c1a]">
                                    140 BPM Sync
                                  </span>
                                </div>
                              </div>
                            )}

                            {/* Center focal badge */}
                            <div className="absolute top-3 right-4 px-3 py-1 rounded-full bg-white text-[#1b1c1a] font-display text-[10px] shadow-sm flex items-center gap-1 z-20 border border-[#e5e2dc]">
                              <span className="material-symbols-outlined text-[13px] text-[#fd591e]">
                                verified
                              </span>
                              <span>{folder.tag}</span>
                            </div>
                          </>
                        ) : (
                          /* Single High-Res Image Container */
                          <div className="w-full h-full rounded-xl overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                            <img
                              className="w-full h-full object-cover"
                              alt={folder.title}
                              src={folder.singleImg}
                            />
                            <div className="absolute inset-0 bg-[#111111]/15"></div>
                            <div className="absolute top-2 left-2 px-2.5 py-1 rounded bg-white/95 font-display text-[10px] text-[#1b1c1a] uppercase font-bold tracking-widest shadow-xs">
                              {folder.tag}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Folder Meta Content */}
                      <div className="flex flex-col gap-2 z-10">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-2xl font-bold text-[#1b1c1a] group-hover:text-[#fd591e] transition-colors duration-200">
                            {folder.title}
                          </h3>
                          <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#111111] group-hover:text-white text-[#1b1c1a] flex items-center justify-center transition-all duration-200 shadow-sm border border-[#e5e2dc]">
                            <span className="material-symbols-outlined text-[18px]">
                              {folder.actionIcon}
                            </span>
                          </div>
                        </div>
                        <p className="font-sans text-sm text-[#5f6368] line-clamp-2 leading-relaxed">
                          {folder.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FEATURED DEEP DIVE SECTION: CONCEPT BRANDS */}
          <section className="flex flex-col gap-8 pt-4" id="concept-brands-deepdive">
            {/* Section Title & Descriptor */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#e5e2dc]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fd591e]"></span>
                  <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                    Featured In-Depth
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold transition-colors">
                  Concept Brands<span className="text-[#fd591e]">.</span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-[#5f6368] dark:text-[#a2a09c] max-w-2xl leading-relaxed transition-colors">
                  Comprehensive end-to-end identity explorations built with rigorous art direction, custom typography, tactile materiality, and commercial positioning.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
                <button
                  onClick={() => {
                    setUploadModalBrand(null);
                    setIsUploadModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs sm:text-sm font-semibold transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
                  title="Upload custom presentation PDFs for Cocona, Seth Dhanraj, and Sharpix"
                >
                  <span className="material-symbols-outlined text-[18px]">upload_file</span>
                  <span>Upload Brand PDFs</span>
                </button>
                <span className="font-display text-xs text-[#5f6368] dark:text-[#a2a09c] font-semibold hidden lg:inline">
                  (Cocona • Seth Dhanraj • Sharpix)
                </span>
              </div>
            </div>

            {/* 3 Detailed Case-Study Cards */}
            <div className="flex flex-col gap-10">
              {CONCEPT_BRANDS_DEEPDIVE.map((study) => {
                const brandRecord = brandPdfs[study.id as 'cocona' | 'seth-dhanraj' | 'sharpix'];

                return (
                  <article
                    key={study.id}
                    className="bg-[#f5f3f0] dark:bg-[#141517] rounded-2xl shadow-sm hover:shadow-xl p-5 lg:p-8 flex flex-col gap-6 transition-all duration-300 border border-[#e5e2dc]/70 dark:border-[#26282c]"
                  >
                    {/* Header Row: Meta Tags & Title & PDF Status */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#111111] dark:bg-[#25282d] text-white font-display text-xs uppercase font-bold border border-transparent dark:border-white/10">
                          Concept Project
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#eae8e5] dark:bg-[#202226] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold">
                          {study.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#eae8e5] dark:bg-[#202226] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold">
                          {study.year}
                        </span>

                        {/* Brand PDF Tag */}
                        {brandRecord ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[11px] font-display font-bold border border-emerald-300 dark:border-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                            <span>PDF: {brandRecord.fileName} ({formatFileSize(brandRecord.fileSize)})</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setUploadModalBrand(study.id as any);
                              setIsUploadModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1e2024] hover:bg-[#efeeeb] dark:hover:bg-[#282a30] text-[#5f6368] dark:text-[#a2a09c] hover:text-[#fd591e] dark:hover:text-[#fd591e] text-[11px] font-display font-medium border border-[#e5e2dc] dark:border-[#2d3034] cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[14px]">upload</span>
                            <span>Upload PDF</span>
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-[#5f6368] dark:text-[#a2a09c] font-display text-xs font-semibold">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-[#fd591e]">
                            {study.id === 'cocona' ? 'spa' : study.id === 'seth-dhanraj' ? 'diamond' : 'precision_manufacturing'}
                          </span>
                          <span>Category: {study.location}</span>
                        </div>
                      </div>
                    </div>

                  {/* Visual Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Left: Visual Cover Inset (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                      <div 
                        onClick={() => onSelectProject(study)}
                        className="relative w-full h-[340px] sm:h-[400px] lg:h-[420px] rounded-xl overflow-hidden bg-[#efeeeb] dark:bg-[#1d1f23] shadow-inner group cursor-pointer"
                      >
                        {['cocona', 'seth-dhanraj', 'sharpix'].includes(study.id) ? (
                          <BrandPdfCoverThumbnail brandId={study.id} />
                        ) : (
                          <img
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            alt={study.imageAlt}
                            src={study.image}
                          />
                        )}
                        {/* Floating Spec Pill */}
                        <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-[#141517]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-[#e5e2dc] dark:border-[#2d3034]">
                          <span 
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: study.colorPalette ? study.colorPalette[0].hex : '#fd591e' }}
                          ></span>
                          <span className="font-display text-[11px] text-[#1b1c1a] dark:text-[#f3f2ee] tracking-wider uppercase font-bold">
                            {study.specPill}
                          </span>
                        </div>
                      </div>

                      {/* Color Palette Ribbon */}
                      {study.colorPalette && (
                        <div className="grid grid-cols-4 gap-2">
                          {study.colorPalette.map((col, idx) => (
                            <div
                              key={idx}
                              style={{ backgroundColor: col.hex }}
                              className={`p-2.5 rounded-lg flex flex-col justify-between h-16 shadow-xs border border-black/10 ${
                                col.textDark ? 'text-[#1b1c1a]' : 'text-white'
                              }`}
                            >
                              <span className="font-display text-[10px] uppercase opacity-75 font-bold">
                                {col.name}
                              </span>
                              <span className="font-display text-[11px] font-bold tracking-tight">
                                {col.hex}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: Detailed Structured Dossier (5 cols) */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#191a1d] p-6 lg:p-7 rounded-xl flex flex-col justify-between shadow-sm border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors">
                      <div className="flex flex-col gap-5">
                        <div>
                          <h3 className="font-display text-3xl font-bold text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight">
                            {study.title}
                          </h3>
                          <p className="font-sans text-sm text-[#5f6368] dark:text-[#a2a09c] mt-1.5 leading-relaxed">
                            {study.description}
                          </p>
                        </div>

                        {/* Case Study Structure breakdown */}
                        <div className="flex flex-col gap-3 font-sans text-xs">
                          <div className="flex flex-col">
                            <span className="font-display text-[11px] uppercase tracking-wider text-[#fd591e] font-bold">
                              The Brief
                            </span>
                            <p className="text-[#1b1c1a] dark:text-[#f3f2ee] mt-1 leading-relaxed">
                              {study.clientBrief}
                            </p>
                          </div>

                          <div className="flex flex-col">
                            <span className="font-display text-[11px] uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                              My Role
                            </span>
                            <p className="text-[#1b1c1a] dark:text-[#f3f2ee] mt-1 leading-relaxed">
                              {study.myRole}
                            </p>
                          </div>

                          <div className="flex flex-col">
                            <span className="font-display text-[11px] uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                              Process & Discovery
                            </span>
                            <p className="text-[#1b1c1a] dark:text-[#f3f2ee] mt-1 leading-relaxed">
                              {study.process}
                            </p>
                          </div>

                          <div className="flex flex-col">
                            <span className="font-display text-[11px] uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                              Deliverables Built
                            </span>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                              {study.deliverables?.map((del, dIdx) => (
                                <span
                                  key={dIdx}
                                  className="px-2.5 py-1 rounded bg-[#efeeeb] dark:bg-[#23262b] font-display text-[10px] font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-transparent dark:border-[#2d3034]"
                                >
                                  {del}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom Trigger & PDF Actions */}
                      <div className="pt-6 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#e5e2dc] dark:border-[#26282c]">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <button
                            onClick={() => onSelectProject(study)}
                            className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee] hover:text-[#fd591e] dark:hover:text-[#fd591e] transition-colors group/link cursor-pointer"
                          >
                            <span>Case Study</span>
                            <span className="material-symbols-outlined text-[18px] transform group-hover/link:translate-x-1 transition-transform">
                              arrow_right_alt
                            </span>
                          </button>

                          {/* Explore Full Portfolio Slide Deck */}
                          {onOpenBrandDeck && (
                            <button
                              onClick={() => onOpenBrandDeck(study.id as any)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] dark:bg-[#25282d] hover:bg-[#333333] dark:hover:bg-[#353940] text-white font-display text-xs font-semibold transition-all hover:scale-[1.02] cursor-pointer shadow-xs border border-transparent dark:border-white/10"
                              title="Explore the complete multi-page slide deck"
                            >
                              <span className="material-symbols-outlined text-[15px] text-[#fd591e]">view_carousel</span>
                              <span>Explore Deck ({study.id === 'sharpix' ? '18' : study.id === 'cocona' ? '16' : '20'} Slides) ↗</span>
                            </button>
                          )}

                          {/* PDF Trigger Button */}
                          {brandRecord ? (
                            <button
                              onClick={() => openBrandPdfInNewTab(brandRecord)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#efeeeb] hover:bg-[#eae8e5] dark:bg-[#22252a] dark:hover:bg-[#2c3036] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#e5e2dc] dark:border-[#2d3034] transition-all hover:scale-[1.02] cursor-pointer shadow-2xs"
                              title="Open custom PDF in new browser tab"
                            >
                              <span className="material-symbols-outlined text-[16px] text-red-600">picture_as_pdf</span>
                              <span>PDF Dossier</span>
                              <span className="material-symbols-outlined text-[13px] text-[#5f6368] dark:text-[#a2a09c]">open_in_new</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                setUploadModalBrand(study.id as any);
                                setIsUploadModalOpen(true);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#efeeeb] dark:bg-[#22252a] dark:hover:bg-[#2c3036] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold border border-[#e5e2dc] dark:border-[#2d3034] transition-all hover:scale-[1.02] cursor-pointer shadow-2xs"
                              title="Upload your PDF file for this brand"
                            >
                              <span className="material-symbols-outlined text-[16px] text-[#fd591e]">upload_file</span>
                              <span>Upload PDF</span>
                            </button>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          {brandRecord && (
                            <button
                              onClick={() => {
                                setUploadModalBrand(study.id as any);
                                setIsUploadModalOpen(true);
                              }}
                              className="text-[11px] font-display font-medium text-[#5f6368] dark:text-[#a2a09c] hover:text-[#fd591e] dark:hover:text-[#fd591e] underline cursor-pointer"
                              title="Replace with a new PDF"
                            >
                              Replace PDF
                            </button>
                          )}
                          <span className="font-display text-[11px] text-[#5f6368] dark:text-[#8a8e94] uppercase font-mono">
                            {study.indexNumber}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
            </div>
          </section>

          {/* CREATIVE ARCHIVE METRICS & CRAFT PRINCIPLES STRIP */}
          <section className="bg-[#efeeeb] dark:bg-[#141517] p-8 rounded-2xl shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6 border border-[#e5e2dc] dark:border-[#26282c] transition-colors">
            <div className="flex flex-col">
              <span className="font-display text-4xl lg:text-5xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold">
                48+
              </span>
              <span className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
                Global Deployments
              </span>
              <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                Across US, EU, and India markets
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-4xl lg:text-5xl text-[#fd591e] tracking-tight font-bold">
                12M+
              </span>
              <span className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
                Social Reel Impressions
              </span>
              <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                Organic kinetic video performance
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-4xl lg:text-5xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold">
                100%
              </span>
              <span className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
                Vector & Dieline Precision
              </span>
              <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                Press-ready packaging files
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display text-4xl lg:text-5xl text-[#1b1c1a] dark:text-[#f3f2ee] tracking-tight font-bold">
                &lt;48h
              </span>
              <span className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee] mt-1">
                Fast Turnaround Sprints
              </span>
              <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                Rapid prototyping & AI iterations
              </span>
            </div>
          </section>

          {/* BOTTOM CTA BANNER & COLLABORATION TEASER */}
          <section className="bg-[#111111] dark:bg-[#16171a] text-white rounded-2xl p-8 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden border border-transparent dark:border-[#26282c]">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#fd591e]/20 blur-3xl pointer-events-none"></div>

            <div className="flex flex-col gap-2 max-w-2xl z-10">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#fd591e]"></span>
                <span className="font-display text-xs uppercase tracking-widest text-[#ffb59e] font-bold">
                  Open For Q2 Commission
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl tracking-tight text-white font-bold">
                Need a tailored brand system or high-impact motion assets?
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl leading-relaxed">
                Currently accepting commissions for select identity revamps, retail packaging overhauls, and synthetic AI commercial productions. Let's make something unforgettable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto z-10">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-sm font-semibold text-center transition-all duration-200 shadow-md flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02]"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={onOpenPdf}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-sm font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#fd591e]">description</span>
                <span>Portfolio PDF</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display text-sm font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copiedEmail ? 'check' : 'mail'}
                </span>
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Upload PDF Modal for Cocona, Seth Dhanraj, Sharpix */}
      <UploadPdfModal
        isOpen={isUploadModalOpen}
        onClose={() => {
          setIsUploadModalOpen(false);
          setUploadModalBrand(null);
        }}
        defaultBrand={uploadModalBrand}
        onViewFallbackDossier={(brandId) => {
          const found = CONCEPT_BRANDS_DEEPDIVE.find(b => b.id === brandId);
          if (found) onSelectProject(found);
        }}
      />
    </div>
  );
};
