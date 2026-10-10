import React, { useState, useEffect, useRef } from 'react';
import { ProjectItem } from '../data/portfolioData';
import {
  BrandPdfRecord,
  getBrandPdf,
  openBrandPdfInNewTab,
  downloadBrandPdf,
  formatFileSize,
} from '../utils/brandPdfStorage';
import { ScrollProgressBar } from './ScrollProgressBar';
import { BrandPdfCoverThumbnail } from './BrandPdfCoverThumbnail';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateContact: () => void;
  onOpenUploadPdf?: (brandId: 'cocona' | 'seth-dhanraj' | 'sharpix') => void;
  onOpenBrandDeck?: (brandId: 'sharpix' | 'cocona' | 'seth-dhanraj') => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNavigateContact,
  onOpenUploadPdf,
  onOpenBrandDeck,
}) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [brandPdf, setBrandPdf] = useState<BrandPdfRecord | null>(null);

  useEffect(() => {
    if (project && ['cocona', 'seth-dhanraj', 'sharpix'].includes(project.id)) {
      getBrandPdf(project.id as any).then((rec) => setBrandPdf(rec));
    } else {
      setBrandPdf(null);
    }
  }, [project]);

  useEffect(() => {
    const handleUpdate = () => {
      if (project && ['cocona', 'seth-dhanraj', 'sharpix'].includes(project.id)) {
        getBrandPdf(project.id as any).then((rec) => setBrandPdf(rec));
      }
    };
    window.addEventListener('brand-pdf-updated', handleUpdate);
    return () => window.removeEventListener('brand-pdf-updated', handleUpdate);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div
      ref={modalContainerRef}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
    >
      {/* Subtle Reading Progress Bar for Case Study Reading */}
      <ScrollProgressBar containerRef={modalContainerRef} showPercentage={true} />

      <div 
        className="relative w-full max-w-4xl bg-[#fbf9f6] dark:bg-[#121316] rounded-2xl shadow-2xl border border-[#e5e2dc] dark:border-[#26282c] overflow-hidden my-8 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-[#1f2125]/90 hover:bg-white dark:hover:bg-[#272a30] text-[#1b1c1a] dark:text-[#f3f2ee] flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer border border-[#e5e2dc] dark:border-[#2d3034]"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Hero Visual Area: Uses authentic PDF Page 1 Cover for concept brands */}
        <div className="relative w-full h-80 sm:h-[420px] bg-[#efeeeb] dark:bg-[#191a1d] overflow-hidden">
          {['cocona', 'seth-dhanraj', 'sharpix'].includes(project.id) ? (
            <BrandPdfCoverThumbnail brandId={project.id} />
          ) : (
            <>
              <img
                src={project.image}
                alt={project.imageAlt || `Cover image for ${project.title} branding project`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </>
          )}

          {/* Overlaid Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-black/60 backdrop-blur-md text-white text-xs font-display font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
              {project.category}
            </span>
            {project.year && (
              <span className="bg-white/90 dark:bg-[#1f2125]/90 backdrop-blur-md text-[#1b1c1a] dark:text-[#f3f2ee] text-xs font-display font-semibold px-3 py-1 rounded-full border border-transparent dark:border-[#2d3034]">
                {project.year}
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-16 text-white">
            <span className="font-display text-xs text-[#ff5a1f] uppercase tracking-widest font-bold">
              {project.indexNumber}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              {project.title}
            </h2>
            {project.location && (
              <p className="font-sans text-xs sm:text-sm text-white/80 mt-1">
                {project.location}
              </p>
            )}
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Tagline / Subtitle */}
          <p className="font-sans text-base sm:text-lg text-[#1b1c1a] dark:text-[#f3f2ee] font-normal leading-relaxed transition-colors">
            {project.description}
          </p>

          {/* Color Palette Ribbon if available */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c]">
                  Brand Design Tokens & Swatches
                </span>
                <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
                  Click to copy HEX
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {project.colorPalette.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => copyHex(color.hex)}
                    style={{ backgroundColor: color.hex }}
                    className={`p-3 rounded-xl flex flex-col justify-between h-18 text-left transition-transform hover:scale-[1.02] shadow-sm relative group cursor-pointer border border-black/10 ${
                      color.textDark ? 'text-[#1b1c1a]' : 'text-white'
                    }`}
                  >
                    <span className="font-display text-[10px] uppercase font-bold tracking-wider opacity-80">
                      {color.name}
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs font-bold tracking-wide">
                        {copiedHex === color.hex ? 'COPIED!' : color.hex}
                      </span>
                      <span className="material-symbols-outlined text-[14px] opacity-70 group-hover:opacity-100">
                        content_copy
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Structured Dossier Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f5f3f0] dark:bg-[#18191d] p-6 rounded-xl border border-[#e5e2dc]/60 dark:border-[#26282c] transition-colors">
            {project.clientBrief && (
              <div className="flex flex-col gap-1">
                <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                  The Brief
                </span>
                <p className="font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed">
                  {project.clientBrief}
                </p>
              </div>
            )}

            {project.myRole && (
              <div className="flex flex-col gap-1">
                <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                  My Role & Responsibilities
                </span>
                <p className="font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed">
                  {project.myRole}
                </p>
              </div>
            )}

            {project.process && (
              <div className="flex flex-col gap-1 md:col-span-2">
                <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                  Process & Discovery
                </span>
                <p className="font-sans text-sm text-[#1b1c1a] dark:text-[#f3f2ee] leading-relaxed">
                  {project.process}
                </p>
              </div>
            )}

            {project.deliverables && project.deliverables.length > 0 && (
              <div className="flex flex-col gap-2 md:col-span-2">
                <span className="font-display text-xs uppercase tracking-wider text-[#5f6368] dark:text-[#a2a09c] font-bold">
                  Deliverables Produced
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-[#efeeeb] dark:bg-[#202226] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-medium border border-[#e5e2dc] dark:border-[#2d3034]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Official Brand PDF Dossier Banner (for Cocona, Seth Dhanraj, Sharpix) */}
          {['cocona', 'seth-dhanraj', 'sharpix'].includes(project.id) && (
            <div className="bg-[#f5f3f0] dark:bg-[#18191d] p-4 sm:p-5 rounded-xl border border-[#e5e2dc] dark:border-[#26282c] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-200 dark:border-red-850">
                  <span className="material-symbols-outlined text-[22px]">picture_as_pdf</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-sm font-bold text-[#1b1c1a] dark:text-[#f3f2ee]">
                      Official {project.title} Presentation PDF
                    </h4>
                    {brandPdf && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-[10px] font-display font-bold border border-transparent dark:border-emerald-800/40">
                        Uploaded
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c] mt-0.5">
                    {brandPdf
                      ? `${brandPdf.fileName} • ${formatFileSize(brandPdf.fileSize)}`
                      : 'Comprehensive brand identity deck, packaging dielines & typography manual.'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {brandPdf ? (
                  <>
                    <button
                      onClick={() => openBrandPdfInNewTab(brandPdf)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111111] dark:bg-[#22242a] hover:bg-[#333333] dark:hover:bg-[#2c2f36] text-white font-display text-xs font-semibold shadow-xs cursor-pointer border border-transparent dark:border-[#32363d]"
                      title="Open PDF in new tab"
                    >
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      <span>Open PDF ↗</span>
                    </button>
                    <button
                      onClick={() => downloadBrandPdf(brandPdf)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-white dark:bg-[#22242a] hover:bg-[#eae8e5] dark:hover:bg-[#2c2f36] text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#e5e2dc] dark:border-[#32363d] font-display text-xs font-medium cursor-pointer"
                      title="Download PDF"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                    </button>
                  </>
                ) : null}

                {/* Browse Slides Deck Button */}
                {onOpenBrandDeck && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenBrandDeck(project.id as any);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#111111] dark:bg-[#22242a] hover:bg-[#333333] dark:hover:bg-[#2c2f36] text-white font-display text-xs font-semibold shadow-xs cursor-pointer border border-transparent dark:border-[#32363d]"
                    title="View full slide presentation deck"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#fd591e]">view_carousel</span>
                    <span>Browse {project.id === 'sharpix' ? '18' : project.id === 'cocona' ? '16' : '20'} Slides ↗</span>
                  </button>
                )}

                {onOpenUploadPdf && (
                  <button
                    onClick={() => onOpenUploadPdf(project.id as any)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs font-semibold shadow-xs cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">upload_file</span>
                    <span>{brandPdf ? 'Replace PDF' : 'Upload PDF'}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Outcome Metric Ribbon */}
          {project.metrics && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-[#000000] dark:bg-[#1a1b1f] text-white border border-transparent dark:border-[#2d3034]">
              <span className="material-symbols-outlined text-[#ff5a1f] text-[24px]">
                trending_up
              </span>
              <div>
                <span className="font-display text-[11px] uppercase tracking-wider text-white/60 block">
                  Performance & Impact
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-white">
                  {project.metrics}
                </span>
              </div>
            </div>
          )}

          {/* Bottom Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e5e2dc] dark:border-[#26282c]">
            <span className="font-sans text-xs text-[#5f6368] dark:text-[#a2a09c]">
              Art direction & production led by Nayan Singh Rao
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#efeeeb] dark:bg-[#202226] hover:bg-[#eae8e5] dark:hover:bg-[#282a30] text-[#1b1c1a] dark:text-[#f3f2ee] font-display text-xs font-semibold cursor-pointer transition-colors"
              >
                Close View
              </button>
              <button
                onClick={() => {
                  onClose();
                  onNavigateContact();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer transition-colors"
              >
                <span>Inquire About Similar Project</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
