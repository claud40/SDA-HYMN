import React, { useEffect, useRef } from 'react';
import { AdventistLogo } from './AdventistLogo';
import type { LiveProjectorState } from '../utils/projectorBus';

interface ProjectorCanvasProps {
  state: LiveProjectorState;
  isFullViewport?: boolean;
  onRequestClose?: () => void;
  onStepSlide?: (delta: -1 | 1) => void;
}

function getBibleTypographyClass(charCount: number): string {
  if (charCount <= 85) {
    return 'text-3xl sm:text-5xl md:text-6xl leading-[1.32]';
  }
  if (charCount <= 170) {
    return 'text-2xl sm:text-4xl md:text-5xl leading-[1.36]';
  }
  if (charCount <= 270) {
    return 'text-xl sm:text-3xl md:text-[2.65rem] leading-[1.38]';
  }
  if (charCount <= 380) {
    return 'text-lg sm:text-2xl md:text-4xl leading-[1.4]';
  }
  return 'text-base sm:text-xl md:text-3xl leading-[1.42]';
}

function getStanzaTypographyClass(lines: string[], isDual: boolean): string {
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

export const ProjectorCanvas: React.FC<ProjectorCanvasProps> = ({
  state,
  isFullViewport = true,
  onRequestClose,
  onStepSlide,
}) => {
  const touchStartXRef = useRef<number | null>(null);
  const { isDarkSlide, isBlank, kind } = state;

  useEffect(() => {
    if (!onRequestClose && !onStepSlide) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onRequestClose) {
        e.preventDefault();
        onRequestClose();
      } else if (
        onStepSlide &&
        (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ')
      ) {
        e.preventDefault();
        onStepSlide(1);
      } else if (
        onStepSlide &&
        (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp')
      ) {
        e.preventDefault();
        onStepSlide(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onRequestClose, onStepSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!onStepSlide || touchStartXRef.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const diff = endX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(diff) > 55) {
      onStepSlide(diff < 0 ? 1 : -1);
    }
  };

  const wrapperClass = `${
    isFullViewport ? 'fixed inset-0 z-[70]' : 'w-full h-full'
  } flex flex-col justify-between select-none transition-colors duration-200 ${
    isDarkSlide ? 'bg-black text-white' : 'bg-white text-black'
  }`;

  if (isBlank) {
    return (
      <div
        className={wrapperClass}
        onDoubleClick={onRequestClose}
        aria-label="Projector Blank Screen"
      />
    );
  }

  if (kind === 'idle') {
    return (
      <div
        className={wrapperClass}
        onClick={onRequestClose}
        onDoubleClick={onRequestClose}
        aria-label="Projector Standby Screen"
      >
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center opacity-85">
            <AdventistLogo className="w-full h-full" />
          </div>
          <div className="space-y-2 max-w-xl">
            <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-wide">
              Kristu mu Nyimbo
            </h1>
            <p
              className={`font-sans text-sm sm:text-base ${
                isDarkSlide ? 'text-stone-400' : 'text-stone-500'
              }`}
            >
              Projector Standby — Select a Bible verse or Hymn stanza on the Control Console
            </p>
            {onRequestClose && (
              <p
                className={`font-sans text-xs pt-2 ${
                  isDarkSlide ? 'text-stone-500' : 'text-stone-400'
                }`}
              >
                Click anywhere or press Esc to return to Control
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'bible' && state.bible) {
    const { bookName, chapterIdx, verseNum, verses, versionLabel, activeVerseText } = state.bible;
    const safeVerse =
      verses.length > 0 ? Math.max(1, Math.min(verses.length, verseNum)) : Math.max(1, verseNum);
    const verseText = verses[safeVerse - 1] ?? activeVerseText ?? '';
    const typographyClass = getBibleTypographyClass(verseText.length);

    return (
      <div
        className={wrapperClass}
        onDoubleClick={onRequestClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={`${bookName} ${chapterIdx + 1}:${safeVerse} Projector Display`}
      >
        <div className="flex-1 flex items-center justify-center px-6 sm:px-14 md:px-24 pt-10 pb-6 overflow-y-auto">
          <p className={`font-sans font-normal text-center max-w-5xl mx-auto select-text ${typographyClass}`}>
            <span className="tabular-nums">{safeVerse}</span> {verseText}
          </p>
        </div>

        <div className="w-full px-6 sm:px-14 md:px-20 pb-8 sm:pb-12 flex justify-end shrink-0">
          <p className="font-sans font-normal text-lg sm:text-2xl md:text-[2rem] leading-tight text-right">
            {bookName} {chapterIdx + 1}:{safeVerse} {versionLabel}
          </p>
        </div>
      </div>
    );
  }

  if (kind === 'hymn' && state.hymn) {
    const {
      slides,
      slideIndex,
      langMode,
      languageLabel,
      displaySlideNumber,
      displayTotalSlides,
    } = state.hymn;
    const safeIdx =
      slides.length > 0 ? Math.max(0, Math.min(slides.length - 1, slideIndex)) : 0;
    const activeSlide = slides[safeIdx];
    const shownSlideNum = displaySlideNumber ?? safeIdx + 1;
    const shownTotalSlides = displayTotalSlides ?? slides.length;
    const hasEnglish = Boolean(
      activeSlide && activeSlide.englishLines && activeSlide.englishLines.length > 0
    );
    const isDual = langMode === 'side-by-side' && hasEnglish;
    const activeSingleLines =
      langMode === 'english' && hasEnglish && activeSlide
        ? activeSlide.englishLines
        : activeSlide?.localLines || [];
    const combinedLinesForSizing = isDual && activeSlide
      ? [...activeSlide.localLines, ...activeSlide.englishLines]
      : activeSingleLines;
    const typographyClass = getStanzaTypographyClass(combinedLinesForSizing, isDual);

    return (
      <div
        className={wrapperClass}
        onDoubleClick={onRequestClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label="Hymn Projector Display"
      >
        {/* Top Subtle Slide Tag */}
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
            {shownTotalSlides > 0 ? `${shownSlideNum} / ${shownTotalSlides}` : ''}
          </div>
        </div>

        {/* Centered Stanza / Chorus Slide */}
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
                <div
                  className={`font-sans font-normal select-text ${typographyClass} ${
                    activeSlide.type === 'chorus' ? 'italic' : ''
                  }`}
                >
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
                <div
                  className={`font-sans font-normal select-text ${typographyClass} ${
                    activeSlide.type === 'chorus' ? 'italic' : ''
                  }`}
                >
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
      </div>
    );
  }

  return (
    <div
      className={wrapperClass}
      onDoubleClick={onRequestClose}
      aria-label="Projector Standby Screen"
    />
  );
};
