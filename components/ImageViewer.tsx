import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  imageLabel?: string;   // e.g. "Vista frontal"
  imageIndex?: number;   // e.g. 0
  imageCount?: number;   // e.g. 3
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, isOpen, onClose, onPrev, onNext, imageLabel, imageIndex, imageCount }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom when opening or when navigating to a different image
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, src]);

  // Keyboard: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) { e.preventDefault(); onPrev(); }
      if (e.key === 'ArrowRight' && onNext) { e.preventDefault(); onNext(); }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.5, 5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale(prev => {
      const newScale = Math.max(prev - 0.5, 1);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  }, []);

  const handleReset = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Mouse drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  }, [scale, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch drag
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
  }, [scale, position]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    // Prevent scroll on iOS Safari when dragging zoomed image
    if (scale > 1) {
      e.preventDefault();
      e.stopPropagation();
    }
    const touch = e.touches[0];
    setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
  }, [isDragging, dragStart, scale]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale(prev => Math.min(prev + 0.3, 5));
    } else {
      setScale(prev => {
        const newScale = Math.max(prev - 0.3, 1);
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        return newScale;
      });
    }
  }, []);

  // Double tap/click to zoom
  const handleDoubleClick = useCallback(() => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2.5);
    }
  }, [scale, handleReset]);

  // Click on backdrop to close (only if not zoomed)
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === containerRef.current && scale <= 1) {
      onClose();
    }
  }, [scale, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      style={{ touchAction: 'none' }} // Prevent iOS Safari gestures
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 z-[110] flex gap-2">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={handleReset}
          className="w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={onClose}
          className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Zoom indicator */}
      {scale > 1 && (
        <div className="absolute top-4 left-4 z-[110] bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 text-white text-xs font-bold">
          {Math.round(scale * 100)}%
        </div>
      )}

      {/* Navigation arrows */}
      {onPrev && scale <= 1 && (
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-[110] w-11 h-11 bg-white/15 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {onNext && scale <= 1 && (
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-[110] w-11 h-11 bg-white/15 hover:bg-white/30 active:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Bottom info: label + counter + hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center gap-1.5">
        {imageLabel && scale <= 1 && (
          <div className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-xs font-bold">
            {imageLabel}
            {imageIndex != null && imageCount != null && (
              <span className="text-white/50 ml-2">{imageIndex + 1} / {imageCount}</span>
            )}
          </div>
        )}
        {scale <= 1 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/50 text-[10px] font-medium">
            {(onPrev || onNext) ? 'Flechas para navegar · ' : ''}Doble clic para zoom
          </div>
        )}
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        onClick={handleBackdropClick}
        style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[90vw] max-h-[85vh] object-contain select-none pointer-events-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
          draggable={false}
        />
      </div>
    </div>,
    document.body
  );
};

export default ImageViewer;
