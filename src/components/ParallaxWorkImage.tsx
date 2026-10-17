import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxWorkImageProps {
  src?: string;
  alt: string;
  title: string;
  tag?: string;
  categories?: string[];
  indexText?: string;
  badge?: string;
}

export const ParallaxWorkImage: React.FC<ParallaxWorkImageProps> = ({
  src,
  alt,
  title,
  tag,
  categories,
  indexText,
  badge,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Track the container's scroll progress through viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax translation: moves smoothly from -28px to +28px as user scrolls through #work section
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-28, 28]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] bg-[#e8e6e1] dark:bg-[#202227] flex flex-col items-center justify-center border-b border-[#e5e2dc] dark:border-[#2b2e34] overflow-hidden select-none"
    >
      {/* Background Subtle Texture / Radial Grid */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#c8c5bd_1px,transparent_1px)] dark:bg-[radial-gradient(#3a3d45_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Parallax Image Layer */}
      {src && !imageError && (
        <motion.div
          style={{ y }}
          className="absolute inset-x-0 -top-[16%] -bottom-[16%] w-full h-[132%] will-change-transform pointer-events-none"
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        </motion.div>
      )}

      {/* Rich Scrim Gradient for Readability & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/25 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

      {/* Floating Monogram / Brand Initials watermark */}
      <div className="relative z-10 flex flex-col items-center text-center gap-1.5 pointer-events-none">
        <div className="w-13 h-13 rounded-2xl bg-white/20 dark:bg-[#121316]/60 backdrop-blur-md border border-white/30 dark:border-white/10 flex items-center justify-center text-white font-display font-bold text-lg tracking-wider shadow-lg group-hover:scale-110 transition-transform duration-300">
          {title.substring(0, 2).toUpperCase()}
        </div>
        <span className="font-display text-xs tracking-widest uppercase font-semibold text-white/90 drop-shadow-xs">
          {title}
        </span>
      </div>

      {/* Corner Badges: Project Tag + Categories */}
      <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap gap-1.5 max-w-[80%] pointer-events-none">
        {(tag || badge) && (
          <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#141518]/90 backdrop-blur-md text-[11px] font-display font-semibold text-[#1b1c1a] dark:text-[#f3f2ee] border border-[#dad6ce]/70 dark:border-[#353840] shadow-2xs">
            {tag || badge}
          </span>
        )}
        {categories?.map((cat: string) => (
          <span
            key={cat}
            className="px-2.5 py-1 rounded-full bg-white/85 dark:bg-[#141518]/85 backdrop-blur-md text-[10px] font-display font-semibold text-[#ff5a1f] border border-[#dad6ce]/70 dark:border-[#353840] shadow-2xs"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Bottom Right: Index Number */}
      {indexText && (
        <div className="absolute bottom-3 right-3 z-10 text-[11px] font-mono font-medium text-white/80 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/10 pointer-events-none">
          {indexText}
        </div>
      )}
    </div>
  );
};
