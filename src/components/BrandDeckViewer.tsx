import React, { useState, useEffect } from 'react';
import { BRAND_DECKS, BrandDeck, BrandSlide } from '../data/brandSlideDecks';

interface BrandDeckViewerProps {
  initialBrandId?: 'sharpix' | 'cocona' | 'seth-dhanraj';
  onClose?: () => void;
  onNavigateContact?: () => void;
}

export const BrandDeckViewer: React.FC<BrandDeckViewerProps> = ({
  initialBrandId = 'sharpix',
  onClose,
  onNavigateContact,
}) => {
  const [activeBrandId, setActiveBrandId] = useState<'sharpix' | 'cocona' | 'seth-dhanraj'>(initialBrandId);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');

  const deck: BrandDeck = BRAND_DECKS[activeBrandId] || BRAND_DECKS.sharpix;
  const currentSlide: BrandSlide = deck.slides.find((s) => s.pageNumber === currentPage) || deck.slides[0];

  useEffect(() => {
    setActiveBrandId(initialBrandId);
    setCurrentPage(1);
  }, [initialBrandId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((p) => Math.min(p + 1, deck.totalPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((p) => Math.max(p - 1, 1));
      } else if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [deck.totalPages, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleSwitchBrand = (brandId: 'sharpix' | 'cocona' | 'seth-dhanraj') => {
    setActiveBrandId(brandId);
    setCurrentPage(1);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141518] text-[#fbf9f6] flex flex-col overflow-hidden animate-fadeIn select-none print:bg-white print:text-black">
      {/* Top Floating Control Bar */}
      <header className="h-16 px-4 sm:px-8 bg-[#1a1b1f]/95 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4 shrink-0 z-20 print:hidden">
        {/* Brand Selector Tabs */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#fd591e] text-white flex items-center justify-center font-display font-bold text-sm shadow-md">
            PDF
          </div>

          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10">
            {(['sharpix', 'cocona', 'seth-dhanraj'] as const).map((bId) => {
              const b = BRAND_DECKS[bId];
              const isActive = activeBrandId === bId;
              return (
                <button
                  key={bId}
                  onClick={() => handleSwitchBrand(bId)}
                  className={`px-3.5 py-1 rounded-full font-display text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#fd591e] text-white shadow-xs'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{b.title}</span>
                  <span className="opacity-75 text-[10px] ml-1">({b.totalPages}p)</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Page Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-colors cursor-pointer"
            title="Previous Page (←)"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
          </button>

          <span className="font-mono text-xs font-semibold text-white/90 px-2">
            Page {currentPage} of {deck.totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, deck.totalPages))}
            disabled={currentPage === deck.totalPages}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-white transition-colors cursor-pointer"
            title="Next Page (→)"
          >
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>

          {/* Toggle Grid vs Slide */}
          <button
            onClick={() => setViewMode(viewMode === 'slide' ? 'grid' : 'slide')}
            className={`ml-2 px-3 py-1 rounded-full text-xs font-display font-medium flex items-center gap-1 border transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-[#1b1c1a] border-white'
                : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/20'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">
              {viewMode === 'grid' ? 'view_carousel' : 'grid_view'}
            </span>
            <span>{viewMode === 'grid' ? 'Slide View' : 'All Slides'}</span>
          </button>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs font-semibold shadow-xs transition-all cursor-pointer hover:scale-[1.02]"
            title="Save as PDF or Print"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span className="hidden sm:inline">Save as PDF</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close Portfolio Viewer (Esc)"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Presentation View */}
      {viewMode === 'slide' ? (
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
          {/* Main Slide Stage */}
          <main className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
            <div className="w-full max-w-5xl aspect-[16/9] min-h-[460px] bg-[#1a1c22] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col justify-between p-6 sm:p-10 relative">
              {/* Slide Meta Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: deck.accentColor }}
                  ></span>
                  <span className="font-display text-xs font-bold uppercase tracking-widest text-white/80">
                    {deck.title} • {currentSlide.metaBadge || `SLIDE ${String(currentSlide.pageNumber).padStart(2, '0')}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-white/50">
                    {String(currentSlide.pageNumber).padStart(2, '0')} / {String(deck.totalPages).padStart(2, '0')}
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="font-display text-xs uppercase tracking-wider text-[#fd591e] font-bold">
                    Official Portfolio
                  </span>
                </div>
              </div>

              {/* Dynamic Slide Content Body */}
              <div className="flex-1 flex flex-col justify-center my-4 py-2">
                <span className="font-display text-xs uppercase tracking-widest text-[#fd591e] font-bold">
                  {currentSlide.title}
                </span>

                {currentSlide.headline && (
                  <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1 leading-tight text-balance">
                    {currentSlide.headline}
                  </h2>
                )}

                {currentSlide.description && (
                  <p className="font-sans text-sm sm:text-base text-white/80 mt-3 leading-relaxed max-w-3xl">
                    {currentSlide.description}
                  </p>
                )}

                {/* Specs or Feature Grid if available */}
                {currentSlide.specs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    {Object.entries(currentSlide.specs).map(([key, val], idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1">
                        <span className="font-display text-[11px] uppercase tracking-wider text-[#fd591e] font-bold">
                          {key}
                        </span>
                        <span className="font-sans text-xs text-white/90">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Color Palette Display if available */}
                {currentSlide.colors && (
                  <div className="flex flex-wrap items-center gap-3 mt-6">
                    {currentSlide.colors.map((c, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2.5 rounded-xl flex items-center gap-2.5 border border-white/15 shadow-sm"
                        style={{ backgroundColor: c.hex, color: c.textDark ? '#1b1c1a' : '#ffffff' }}
                      >
                        <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }}></span>
                        <div className="flex flex-col">
                          <span className="font-display text-xs font-bold leading-none">{c.name}</span>
                          <span className="font-mono text-[10px] opacity-80 mt-0.5">{c.hex}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Typography Specimen if font slide */}
                {currentSlide.fontName && (
                  <div className="mt-5 p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-display text-base font-bold text-white">{currentSlide.fontName}</span>
                      <span className="font-sans text-xs text-white/60">{currentSlide.fontCategory}</span>
                    </div>
                    <p className="font-mono text-sm tracking-wider text-white/90">
                      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                    </p>
                    <p className="font-mono text-sm tracking-wider text-white/70">
                      a b c d e f g h i j k l m n o p q r s t u v w x y z
                    </p>
                    <p className="font-mono text-sm tracking-widest text-[#fd591e]">
                      0 1 2 3 4 5 6 7 8 9
                    </p>
                  </div>
                )}

                {/* Tags if available */}
                {currentSlide.tags && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {currentSlide.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-display font-medium border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Slide Bottom Signature */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-white/80">{deck.designer.name}</span>
                  <span>•</span>
                  <span>{deck.designer.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{deck.year} Archive</span>
                  <span>•</span>
                  <span>{deck.category}</span>
                </div>
              </div>
            </div>
          </main>

          {/* Right Page Thumbnails Sidebar */}
          <aside className="hidden lg:flex w-72 bg-[#1a1b1f] border-l border-white/10 flex-col overflow-hidden shrink-0">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <span className="font-display text-xs font-bold uppercase tracking-wider text-white/80">
                Slide Navigator
              </span>
              <span className="font-mono text-xs text-white/50">{deck.totalPages} Slides</span>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {deck.slides.map((s) => {
                const isSelected = s.pageNumber === currentPage;
                return (
                  <div
                    key={s.pageNumber}
                    onClick={() => setCurrentPage(s.pageNumber)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#fd591e]/20 border-[#fd591e] text-white shadow-sm'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] text-white/50">
                        PAGE {String(s.pageNumber).padStart(2, '0')}
                      </span>
                      <span className="font-display text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/10 text-white/80">
                        {s.type}
                      </span>
                    </div>
                    <p className="font-display text-xs font-bold truncate">
                      {s.title}
                    </p>
                    <p className="font-sans text-[11px] text-white/50 truncate mt-0.5">
                      {s.headline || s.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      ) : (
        /* Full Grid View */
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  {deck.title} — Full Portfolio Deck ({deck.totalPages} Slides)
                </h2>
                <p className="font-sans text-xs text-white/60 mt-1">
                  Click any slide to view high-resolution presentation mode.
                </p>
              </div>

              <button
                onClick={() => setViewMode('slide')}
                className="px-4 py-2 rounded-full bg-[#fd591e] hover:bg-[#ae3200] text-white font-display text-xs font-bold transition-all cursor-pointer"
              >
                Back to Slide View
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {deck.slides.map((s) => (
                <div
                  key={s.pageNumber}
                  onClick={() => {
                    setCurrentPage(s.pageNumber);
                    setViewMode('slide');
                  }}
                  className="bg-[#1a1c22] border border-white/10 hover:border-[#fd591e] rounded-xl p-4 flex flex-col justify-between h-48 cursor-pointer transition-all hover:scale-[1.02] shadow-sm hover:shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-[#fd591e] font-bold">
                        Slide {s.pageNumber}
                      </span>
                      <span className="text-[10px] uppercase font-display px-2 py-0.5 rounded bg-white/10 text-white/80">
                        {s.type}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-bold text-white group-hover:text-[#fd591e] transition-colors line-clamp-1">
                      {s.title}
                    </h3>
                    <p className="font-sans text-xs text-white/60 mt-1 line-clamp-2">
                      {s.headline || s.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
                    <span>{deck.title} Portfolio</span>
                    <span className="text-white/60 group-hover:text-white">View ↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer Bar */}
      <footer className="h-12 px-6 bg-[#16171b] border-t border-white/10 flex items-center justify-between text-xs text-white/60 shrink-0 print:hidden">
        <div className="flex items-center gap-3">
          <span>Designed & Directed by <strong className="text-white">{deck.designer.name}</strong></span>
          <span>•</span>
          <span className="hidden sm:inline">{deck.designer.location}</span>
        </div>

        <div className="flex items-center gap-3">
          {onNavigateContact && (
            <button
              onClick={() => {
                if (onClose) onClose();
                onNavigateContact();
              }}
              className="text-[#fd591e] hover:underline font-display font-semibold cursor-pointer"
            >
              Inquire About {deck.title} ↗
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
