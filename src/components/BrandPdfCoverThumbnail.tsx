import React from 'react';

interface BrandPdfCoverThumbnailProps {
  brandId: 'cocona' | 'seth-dhanraj' | 'sharpix' | string;
  className?: string;
}

export const BrandPdfCoverThumbnail: React.FC<BrandPdfCoverThumbnailProps> = ({
  brandId,
  className = '',
}) => {
  if (brandId === 'cocona') {
    return (
      <div
        className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-10 select-none bg-[#F8F5EE] text-[#1E2D16] ${className}`}
      >
        {/* Subtle Paper Grain / Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5decc_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        {/* Page 1 Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#e5e2dc] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#4CAF50]" />
          <span className="font-mono text-[10px] font-bold text-[#1E2D16] tracking-wider uppercase">
            PDF Page 01 • Cover
          </span>
        </div>

        {/* Brand Lockup: Cocona Cursive Wordmark + Palm Canopy */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-[440px] w-full transform group-hover:scale-105 transition-transform duration-500">
          {/* Palm Fronds Canopy springing from the cursive "n" stem */}
          <div className="flex flex-col items-center">
            <svg
              className="w-24 sm:w-28 h-16 sm:h-20 mb-[-12px]"
              viewBox="0 0 120 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Palm leaves in #4CAF50 */}
              {/* Center vertical frond */}
              <path d="M60 70 Q60 20 60 4 Q63 20 60 70" fill="#4CAF50" />
              {/* Left fronds */}
              <path d="M60 70 Q50 30 32 16 Q45 28 60 70" fill="#4CAF50" />
              <path d="M60 70 Q45 42 18 36 Q38 46 60 70" fill="#4CAF50" />
              <path d="M60 70 Q45 56 12 58 Q36 60 60 70" fill="#4CAF50" />
              {/* Right fronds */}
              <path d="M60 70 Q70 30 88 16 Q75 28 60 70" fill="#4CAF50" />
              <path d="M60 70 Q75 42 102 36 Q82 46 60 70" fill="#4CAF50" />
              <path d="M60 70 Q75 56 108 58 Q84 60 60 70" fill="#4CAF50" />
            </svg>

            {/* Connecting curving stem into the wordmark */}
            <svg
              className="w-full max-w-[340px] sm:max-w-[400px] h-32 sm:h-36"
              viewBox="0 0 460 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Palm trunk connection from fronds down to letter n */}
              <path
                d="M230 4 Q230 45 255 52 Q330 54 375 75 Q415 95 385 130 Q350 160 300 135 Q250 100 240 100"
                stroke="#1E2D16"
                strokeWidth="14"
                strokeLinecap="round"
                fill="none"
              />

              {/* Bold cursive Cocona wordmark rendered cleanly */}
              <text
                x="30"
                y="125"
                fontFamily="'Space Grotesk', 'Brush Script MT', cursive, sans-serif"
                fontSize="102"
                fontWeight="800"
                fill="#1E2D16"
                letterSpacing="-2"
              >
                Cocona
              </text>
            </svg>
          </div>

          {/* Subtitle */}
          <span className="font-display font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase text-[#1E2D16]/75 mt-1">
            Pure Coconut Water
          </span>
        </div>

        {/* Bottom Tagline / Specs Bar */}
        <div className="absolute bottom-4 inset-x-6 flex items-center justify-between text-[11px] font-display text-[#1E2D16]/70 border-t border-[#1E2D16]/10 pt-3">
          <span className="font-bold">Zing Script Rust • Organic Brand Identity</span>
          <span className="font-mono text-[10px]">16-Page Brand Book</span>
        </div>
      </div>
    );
  }

  if (brandId === 'seth-dhanraj') {
    return (
      <div
        className={`w-full h-full relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none bg-[#090e1d] text-white ${className}`}
      >
        {/* Deep Midnight Navy Gradient & Celestial Stardust */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#04060c] via-[#090e1d] to-[#121c38] opacity-95 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

        {/* Page 1 Badge */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-mono text-[10px] font-bold text-white/90 tracking-wider uppercase">
              PDF Page 01 • Cover
            </span>
          </div>

          <span className="font-display text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold">
            Haute Joaillerie
          </span>
        </div>

        {/* Center Brand Spread */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
          {/* Left: Royal Arch Monogram & Typography */}
          <div className="md:col-span-7 flex flex-col items-start gap-4">
            {/* Architectural Gateway Arch Monogram */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-20 rounded-t-full border-2 border-white/90 flex flex-col items-center justify-center relative p-1">
                {/* 4-point star on arch top */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#D4AF37]" />
                {/* Star on right arch */}
                <div className="absolute top-1/2 -right-1 w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
                <span className="font-serif italic font-bold text-3xl text-white">S</span>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-wide text-white">
                Seth Dhanraj
              </h2>
              <p className="font-serif italic text-xs sm:text-sm text-[#D4AF37] tracking-[0.2em] mt-1">
                Minimal. Bold. Timeless.
              </p>
            </div>
          </div>

          {/* Right: Bespoke Velvet Jewelry Box Visual */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-44 sm:w-52 h-44 sm:h-52 rounded-2xl bg-gradient-to-br from-[#121936] to-[#060a17] p-5 shadow-2xl border border-white/15 flex flex-col items-center justify-center text-center transform group-hover:scale-105 transition-transform duration-500">
              <div className="w-10 h-12 rounded-t-full border border-[#D4AF37] flex items-center justify-center mb-2">
                <span className="font-serif italic text-base text-[#D4AF37]">S</span>
              </div>
              <span className="font-serif text-xs font-bold text-white tracking-wider">
                Seth Dhanraj
              </span>
              <span className="text-[9px] font-sans text-white/60 tracking-widest uppercase mt-0.5">
                Refined. Radiant. Remarkable.
              </span>
              <div className="absolute bottom-2 inset-x-4 h-1 bg-[#D4AF37]/40 rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom Specs Bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-display text-white/60 border-t border-white/10 pt-3">
          <span className="font-serif tracking-wider text-[#D4AF37]">Garamond • Gold Foil Velvet Packaging</span>
          <span className="font-mono text-[10px]">20-Page Brand Book</span>
        </div>
      </div>
    );
  }

  // Default: Sharpix (Page 1)
  return (
    <div
      className={`w-full h-full relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 select-none bg-[#0e0f12] text-white ${className}`}
    >
      {/* High-Tech Stealth Grid & Spotlight Beam */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#171920] via-[#0c0d10] to-[#050608] pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-80 h-80 rounded-full bg-[#00A3FF]/15 blur-3xl pointer-events-none" />

      {/* Subtle Precision Diagonal Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="1000" y2="600" stroke="#00A3FF" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="150" y1="0" x2="1000" y2="500" stroke="#ffffff" strokeWidth="0.5" />
      </svg>

      {/* Page 1 Badge & Kicker */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#00A3FF]" />
          <span className="font-mono text-[10px] font-bold text-white/90 tracking-wider uppercase">
            PDF Page 01 • Cover
          </span>
        </div>

        <span className="font-mono text-[11px] tracking-[0.2em] text-[#00A3FF] font-bold uppercase">
          PRECISION. POWER. PERFECTION.
        </span>
      </div>

      {/* Center Layout: Wordmark + Trimmer Hardware Silhouette */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
        <div className="md:col-span-8 flex flex-col gap-3">
          <div className="flex items-baseline gap-1">
            <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
              SHARPI<span className="text-[#00A3FF]">X</span>
            </h2>
          </div>

          <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
            ENGINEERED FOR EXCELLENCE
          </p>

          {/* Three Feature Badges */}
          <div className="flex items-center gap-4 mt-2 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-white/70">
              <span className="material-symbols-outlined text-[16px] text-[#00A3FF]">crosshair</span>
              <span className="font-mono text-[10px] tracking-wider uppercase">Precision</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-white/70">
              <span className="material-symbols-outlined text-[16px] text-[#00A3FF]">memory</span>
              <span className="font-mono text-[10px] tracking-wider uppercase">Power</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-white/70">
              <span className="material-symbols-outlined text-[16px] text-[#00A3FF]">verified</span>
              <span className="font-mono text-[10px] tracking-wider uppercase">Perfection</span>
            </div>
          </div>
        </div>

        {/* Trimmer Hardware Graphic Stand */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
          <div className="relative w-28 sm:w-32 h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-[#22252e] via-[#15171d] to-[#0c0d11] p-3 border border-white/20 shadow-2xl flex flex-col items-center justify-between transform group-hover:scale-105 transition-transform duration-500">
            {/* Stainless steel blade top */}
            <div className="w-20 h-4 rounded-t bg-gradient-to-r from-gray-300 via-white to-gray-400 border border-black/20" />
            <div className="w-16 h-1 bg-[#00A3FF] rounded-full my-1 shadow-[0_0_8px_#00A3FF]" />

            {/* Sharpix branding on body */}
            <span className="font-display font-bold text-[10px] tracking-widest text-white/90">
              SHARPIX
            </span>

            {/* LCD Telemetry Screen */}
            <div className="w-12 h-14 rounded-lg bg-black/80 border border-cyan-500/40 flex flex-col items-center justify-center p-1 my-auto shadow-inner">
              <span className="font-mono font-bold text-sm text-[#00A3FF] leading-none">100</span>
              <span className="font-mono text-[8px] text-white/60 uppercase">Power</span>
              <span className="material-symbols-outlined text-[12px] text-[#00A3FF] mt-0.5">lock</span>
            </div>

            {/* Chrome bottom ring */}
            <div className="w-18 h-2 rounded-b bg-gradient-to-r from-gray-400 via-white to-gray-500 border border-black/30" />
          </div>
        </div>
      </div>

      {/* Bottom Kicker */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-display text-white/60 border-t border-white/10 pt-3">
        <span className="font-mono text-[#00A3FF] font-semibold">SHARPIX TECHNOLOGY • BUILT TO PERFORM</span>
        <span className="font-mono text-[10px]">18-Page Brand Book</span>
      </div>
    </div>
  );
};
