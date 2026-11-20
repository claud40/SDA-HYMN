import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import type { Hymn } from '../data/hymns';

type ProjectorLangMode = 'side-by-side' | 'bemba' | 'english';

interface HymnSlide {
  id: string;
  type: 'stanza' | 'chorus';
  stanzaNumber?: number;
  label: string;
  englishLabel: string;
  selectLabel: string;
  localLines: string[];
  englishLines: string[];
}

interface HymnProjectorProps {
  hymn: Hymn;
  initialStanzaNumber?: number;
  initialLang: ProjectorLangMode;
  languageLabel: string;
  onClose: () => void;
}

function getStanzaTypographyClass(
  lines: string[],
  isDual: boolean
): string {
  const lineCount = lines.length;
  const maxLineChars = lines.reduce((max, l) => Math.max(max, l.length), 0);

  if (isDual) {
    if (lineCount <= 4 && maxLineChars <= 42) {
      return 'text-xl sm:text-3xl md:text-4xl leading-[1.4]';
    }
    if (lineCount <= 6 && maxLineChars <= 52) {
      return 'text-lg sm:text-2xl md:text-3xl leading-[1.4]';
    }
    return 'text-base sm:text-xl md:text-2xl leading-[1.42]';
  }

  if (lineCount <= 4 && maxLineChars <= 42) {
    return 'text-2xl sm:text-4xl md:text-5xl leading-[1.38]';
  }
  if (lineCount <= 6 && maxLineChars <= 52) {
    return 'text-xl sm:text-3xl md:text-[2.6rem] leading-[1.4]';
  }
  return 'text-lg sm:text-2xl md:text-4xl leading-[1.42]';
}

export const HymnProjector: React.FC<HymnProjectorProps> = ({
  hymn,
  initialStanzaNumber = 1,
  initialLang,
  languageLabel,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const isHoveringControlsRef = useRef<boolean>(false);

  const hasEnglish = Boolean(hymn.englishVerses && hymn.englishVerses.length > 0);
  const [langMode, setLangMode] = useState<ProjectorLangMode>(
    hasEnglish ? initialLang : 'bemba'
  );
  const [isDarkSlide, setIsDarkSlide] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const slides = useMemo<HymnSlide[]>(() => {
    const built: HymnSlide[] = [];
    const chorusLocal = hymn.chorus || [];
    const chorusEnglish = hymn.englishChorus || [];
    const hasChorus = chorusLocal.length > 0 || chorusEnglish.length > 0;
    const chorusHeading = (hymn.chorusLabel || 'Chibwekesho').replace(/:$/, '');
    const stanzaTotal = Math.max(
      hymn.verses.length,
      hasEnglish && hymn.englishVerses ? hymn.englishVerses.length : 0
    );

    for (let i = 0; i < stanzaTotal; i++) {
      const stanzaNum = i + 1;
      const localLines = hymn.verses[i] || [];
      const englishLines = hymn.englishVerses?.[i] || [];

      built.push({
        id: `stanza-${stanzaNum}`,
        type: 'stanza',
        stanzaNumber: stanzaNum,
        label: `Stanza ${stanzaNum}`,
        englishLabel: `Stanza ${stanzaNum}`,
        selectLabel: `Stanza ${stanzaNum}`,
        localLines,
        englishLines,
      });

      if (hasChorus) {
        built.push({
          id: `chorus-after-${stanzaNum}`,
          type: 'chorus',
          label: chorusHeading,
          englishLabel: 'Chorus',
          selectLabel: `${chorusHeading} (after ${stanzaNum})`,
          localLines: chorusLocal,
          englishLines: chorusEnglish,
        });
      }
    }

    return built;
  }, [hymn, hasEnglish]);

  const [slideIdx, setSlideIdx] = useState<number>(() => {
    if (initialStanzaNumber > 1) {
      const target = slides.findIndex(
        (s) => s.type === 'stanza' && s.stanzaNumber === initialStanzaNumber
      );
      if (target >= 0) return target;
    }
    return 0;
  });

  const safeSlideIdx =
    slides.length > 0 ? Math.max(0, Math.min(slides.length - 1, slideIdx)) : 0;
  const activeSlide = slides[safeSlideIdx];

  const scheduleHideControls = useCallback(() => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
    }
    setShowControls(true);
    hideTimerRef.current = window.setTimeout(() => {
      if (!isHoveringControlsRef.current) {
        setShowControls(false);
      }
    }, 2800);
  }, []);

  useEffect(() => {
    scheduleHideControls();
    return () => {
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, [scheduleHideControls, safeSlideIdx]);

  const goToPrevSlide = useCallback(() => {
    setSlideIdx((prev) => Math.max(0, prev - 1));
  }, []);

  const goToNextSlide = useCallback(() => {
    setSlideIdx((prev) => Math.min(Math.max(0, slides.length - 1), prev + 1));
  }, [slides.length]);

  const handleToggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement && containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      } else if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be restricted in embedded preview frames
    }
  }, []);

  const handleExit = useCallback(async () => {
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Ignore fullscreen exit errors
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLSelectElement ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        if (e.key === 'Escape') {
          e.preventDefault();
          handleExit();
        }
        return;
      }

      if (
        e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageDown' ||
        e.key === ' '
      ) {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setSlideIdx(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setSlideIdx(Math.max(0, slides.length - 1));
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleExit();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, handleExit, handleToggleFullscreen, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const diff = endX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(diff) > 55) {
      if (diff < 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
  };

  const isDual = langMode === 'side-by-side' && hasEnglish;
  const activeSingleLines =
    langMode === 'english' && hasEnglish && activeSlide?.englishLines.length
      ? activeSlide.englishLines
      : activeSlide?.localLines || [];
  const combinedLinesForSizing = isDual
    ? [...(activeSlide?.localLines || []), ...(activeSlide?.englishLines || [])]
    : activeSingleLines;
  const typographyClass = getStanzaTypographyClass(combinedLinesForSizing, isDual);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Nyimbo ${hymn.number} ${hymn.title} Projector View`}
      onMouseMove={scheduleHideControls}
      onClick={scheduleHideControls}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`fixed inset-0 z-[60] flex flex-col justify-between select-none transition-colors duration-200 ${
        isDarkSlide ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Top Subtle Slide Tag (Stanza / Chorus indicator like a PowerPoint slide) */}
      <div className="w-full px-6 sm:px-14 md:px-20 pt-6 sm:pt-10 flex items-center justify-between shrink-0">
        <div
          className={`font-sans text-sm sm:text-lg font-semibold uppercase tracking-widest ${
            isDarkSlide ? 'text-stone-400' : 'text-stone-500'
          }`}
        >
          {activeSlide
            ? isDual && activeSlide.type === 'chorus'
              ? `${activeSlide.label} · ${activeSlide.englishLabel}`
              : langMode === 'english' && hasEnglish
              ? activeSlide.englishLabel
              : activeSlide.label
            : ''}
        </div>
        <div
          className={`font-sans text-sm sm:text-base font-medium tabular-nums ${
            isDarkSlide ? 'text-stone-400' : 'text-stone-500'
          }`}
        >
          {slides.length > 0 ? `${safeSlideIdx + 1} / ${slides.length}` : ''}
        </div>
      </div>

      {/* Main Centered Stanza / Chorus Body */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-12 md:px-20 pt-4 pb-12 sm:pb-16 overflow-y-auto">
        {!activeSlide ? (
          <p className="font-sans text-2xl text-center">No lyrics available</p>
        ) : isDual ? (
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="text-center space-y-2 sm:space-y-3">
              <div
                className={`font-sans text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 ${
                  isDarkSlide ? 'text-amber-400' : 'text-amber-900'
                }`}
              >
                {languageLabel}
              </div>
              <div className={`font-sans font-normal select-text ${typographyClass} ${activeSlide.type === 'chorus' ? 'italic' : ''}`}>
                {activeSlide.localLines.map((line, i) => (
                  <p key={`l-${i}`} className="mb-1.5 sm:mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div
              className={`text-center space-y-2 sm:space-y-3 pt-6 md:pt-0 border-t md:border-t-0 md:border-l md:pl-14 ${
                isDarkSlide ? 'border-stone-800' : 'border-stone-200'
              }`}
            >
              <div
                className={`font-sans text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 ${
                  isDarkSlide ? 'text-amber-400' : 'text-amber-900'
                }`}
              >
                English
              </div>
              <div className={`font-sans font-normal select-text ${typographyClass} ${activeSlide.type === 'chorus' ? 'italic' : ''}`}>
                {activeSlide.englishLines.map((line, i) => (
                  <p key={`e-${i}`} className="mb-1.5 sm:mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`font-sans font-normal text-center max-w-5xl mx-auto select-text ${typographyClass} ${
              activeSlide.type === 'chorus' ? 'italic' : ''
            }`}
          >
            {activeSingleLines.map((line, i) => (
              <p key={i} className="mb-2 sm:mb-3">
                {line}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Auto-Hiding Bottom-Left PowerPoint Operator Controls */}
      <div
        onMouseEnter={() => {
          isHoveringControlsRef.current = true;
          setShowControls(true);
        }}
        onMouseLeave={() => {
          isHoveringControlsRef.current = false;
          scheduleHideControls();
        }}
        onClick={(e) => e.stopPropagation()}
        className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex flex-wrap items-center gap-1.5 px-2.5 py-2 rounded-2xl border shadow-lg backdrop-blur-md transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } ${
          isDarkSlide
            ? 'bg-stone-900/90 border-stone-700 text-stone-100'
            : 'bg-white/95 border-stone-200 text-stone-800'
        }`}
      >
        <button
          type="button"
          onClick={goToPrevSlide}
          disabled={safeSlideIdx <= 0}
          aria-label="Previous slide"
          title="Previous slide (Left arrow)"
          className="h-9 px-2.5 rounded-xl flex items-center gap-1 text-xs font-semibold hover:bg-stone-500/15 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <select
          aria-label="Jump to slide"
          value={safeSlideIdx}
          onChange={(e) => setSlideIdx(parseInt(e.target.value, 10))}
          className={`h-9 px-2.5 rounded-xl text-xs font-semibold border focus:outline-hidden ${
            isDarkSlide
              ? 'bg-stone-800 border-stone-700 text-stone-100'
              : 'bg-stone-100 border-stone-200 text-stone-900'
          }`}
        >
          {slides.map((s, idx) => (
            <option key={s.id} value={idx}>
              {idx + 1}/{slides.length} · {s.selectLabel}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={goToNextSlide}
          disabled={safeSlideIdx >= slides.length - 1}
          aria-label="Next slide"
          title="Next slide (Right arrow / Space)"
          className="h-9 px-2.5 rounded-xl flex items-center gap-1 text-xs font-semibold hover:bg-stone-500/15 disabled:opacity-30 transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {hasEnglish && (
          <>
            <div
              className={`w-px h-5 mx-0.5 ${
                isDarkSlide ? 'bg-stone-700' : 'bg-stone-200'
              }`}
            />
            <select
              aria-label="Projector language"
              value={langMode}
              onChange={(e) => setLangMode(e.target.value as ProjectorLangMode)}
              className={`h-9 px-2.5 rounded-xl text-xs font-semibold border focus:outline-hidden ${
                isDarkSlide
                  ? 'bg-stone-800 border-stone-700 text-stone-100'
                  : 'bg-stone-100 border-stone-200 text-stone-900'
              }`}
            >
              <option value="bemba">{languageLabel}</option>
              <option value="english">English</option>
              <option value="side-by-side">Dual</option>
            </select>
          </>
        )}

        <div
          className={`w-px h-5 mx-0.5 ${
            isDarkSlide ? 'bg-stone-700' : 'bg-stone-200'
          }`}
        />

        <button
          type="button"
          onClick={() => setIsDarkSlide((prev) => !prev)}
          aria-label={isDarkSlide ? 'Switch to white projector slide' : 'Switch to dark projector slide'}
          title={isDarkSlide ? 'White Slide' : 'Dark Slide'}
          className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-stone-500/15 transition-colors"
        >
          {isDarkSlide ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={handleToggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          title={isFullscreen ? 'Exit fullscreen (F)' : 'Fullscreen (F)'}
          className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-stone-500/15 transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        <button
          type="button"
          onClick={handleExit}
          aria-label="Exit projector"
          title="Exit projector (Esc)"
          className="h-9 px-2.5 rounded-xl flex items-center gap-1 text-xs font-semibold bg-amber-900 hover:bg-amber-950 text-white transition-colors"
        >
          <X className="w-4 h-4" />
          <span>Exit</span>
        </button>
      </div>
    </div>
  );
};
