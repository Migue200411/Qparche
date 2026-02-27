import React, { useState, useRef, useCallback } from 'react';
import { Expand } from 'lucide-react';
import { GalleryImage } from '../types';

interface ProductGalleryProps {
  images: GalleryImage[];
  alt: string;
  price: number;
  teamColor?: string;
  priceTagClasses: string;
  priceTagStyle?: React.CSSProperties;
  onExpand: (src: string) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  alt,
  price,
  teamColor,
  priceTagClasses,
  priceTagStyle,
  onExpand,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track active slide from native scroll (mobile carousel)
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.offsetWidth);
    if (idx !== activeIdx) setActiveIdx(idx);
  }, [activeIdx]);

  // Jump to slide (thumbnails / dots)
  const goTo = useCallback((idx: number) => {
    setActiveIdx(idx);
    scrollRef.current?.scrollTo({ left: idx * (scrollRef.current.offsetWidth || 0), behavior: 'smooth' });
  }, []);

  // Fallback: if an image fails to load, show the last valid image
  const handleImgError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const last = images[images.length - 1]?.src;
    if (last && e.currentTarget.src !== last) e.currentTarget.src = last;
  }, [images]);

  const active = images[activeIdx] ?? images[0];

  return (
    <>
      {/* ── MOBILE: horizontal scroll-snap carousel ── */}
      <div className="md:hidden relative bg-slate-50">
        {/* Slide strip */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none aspect-[4/5]"
          style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-full h-full overflow-hidden"
              onClick={() => onExpand(img.src)}
            >
              <img
                src={img.src}
                alt={`${alt} — ${img.label}`}
                onError={handleImgError}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Price tag */}
        <div
          className={`absolute top-3 right-3 font-black px-3 py-1.5 rounded-lg text-sm shadow-md pointer-events-none ${priceTagClasses}`}
          style={priceTagStyle}
        >
          ${price.toLocaleString()}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={images[i].label}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? 'w-5 bg-white shadow' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Team color accent bar */}
        {teamColor && (
          <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ backgroundColor: teamColor }} />
        )}
      </div>

      {/* ── DESKTOP: main image + thumbnail strip ── */}
      <div className="hidden md:block bg-slate-50">
        {/* Main image */}
        <div
          className="aspect-[4/5] overflow-hidden relative cursor-pointer group"
          onClick={() => onExpand(active.src)}
        >
          <img
            key={activeIdx}
            src={active.src}
            alt={`${alt} — ${active.label}`}
            onError={handleImgError}
            className="w-full h-full object-cover animate-gallery-fade"
            draggable={false}
          />

          {/* Hover: expand icon */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-all shadow-lg scale-90 group-hover:scale-100">
              <Expand className="w-5 h-5" />
            </div>
          </div>

          {/* Hover: label badge */}
          <div className="absolute bottom-5 left-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {active.label}
          </div>

          {/* Price tag */}
          <div
            className={`absolute top-3 right-3 font-black px-3 py-1.5 rounded-lg text-sm shadow-md transition-colors duration-300 ${priceTagClasses}`}
            style={priceTagStyle}
          >
            ${price.toLocaleString()}
          </div>

          {/* Team color accent bar */}
          {teamColor && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-500" style={{ backgroundColor: teamColor }} />
          )}
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-2 px-3 py-2.5 bg-white border-t border-slate-100">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                title={img.label}
                className={`flex-1 aspect-[3/4] overflow-hidden rounded-lg border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ${
                  i === activeIdx
                    ? 'opacity-100 shadow-sm scale-[1.02]'
                    : 'border-transparent opacity-50 hover:opacity-80 hover:scale-[1.01]'
                }`}
                style={
                  i === activeIdx
                    ? { borderColor: teamColor ?? '#0f172a' }
                    : undefined
                }
              >
                <img
                  src={img.src}
                  alt={img.label}
                  onError={handleImgError}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGallery;
