import React, { useEffect, useRef, useState } from 'react';
import { AdventistLogo } from './AdventistLogo';
import type { LiveProjectorState } from '../utils/projectorBus';
import {
  getStoredTypography,
  type LineSpacingPreference,
  type TextSizePreference,
} from '../utils/typography';

const CREATION_SLIDES = [
  {
    src: '/assets/creation/01_river.jpg',
    alt: 'Clear river flowing through sunlit forest and mossy rocks',
  },
  {
    src: '/assets/creation/02_animals.jpg',
    alt: 'Zebras standing peacefully in tall green savanna grass beneath trees',
  },
  {
    src: '/assets/creation/03_forest.jpg',
    alt: 'Golden sunbeams streaming through forest pine trees in morning mist',
  },
  {
    src: '/assets/creation/04_pastures.jpg',
    alt: 'Lush green grassy pastures and rolling hills beneath bright sky',
  },
  {
    src: '/assets/creation/05_waterfall.jpg',
    alt: 'Cascading waterfall into a clear forest pool surrounded by green foliage',
  },
] as const;

interface ProjectorCanvasProps {
  state: LiveProjectorState;
  isFullViewport?: boolean;
  onRequestClose?: () => void;
  onStepSlide?: (delta: -1 | 1) => void;
}

function getLeadingClass(lineSpacing: LineSpacingPreference): string {
  if (lineSpacing === 'normal') return 'leading-[1.32]';
  if (lineSpacing === 'loose') return 'leading-[1.65]';
  return 'leading-[1.45]';
}

function getLineGapClass(lineSpacing: LineSpacingPreference): string {
  if (lineSpacing === 'normal') return 'mb-1 sm:mb-1.5';
  if (lineSpacing === 'loose') return 'mb-3 sm:mb-4';
  return 'mb-2 sm:mb-3';
}

function getBibleTypographyClass(
  charCount: number,
  textSize: TextSizePreference,
  leadingClass: string
): string {
  const tier =
    charCount <= 85 ? 0 : charCount <= 170 ? 1 : charCount <= 270 ? 2 : charCount <= 380 ? 3 : 4;

  const map: Record<TextSizePreference, string[]> = {
    standard: [
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-4xl',
      'text-lg sm:text-2xl md:text-3xl',
      'text-base sm:text-xl md:text-2xl',
      'text-sm sm:text-lg md:text-xl',
    ],
    large: [
      'text-3xl sm:text-5xl md:text-6xl',
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-[2.65rem]',
      'text-lg sm:text-2xl md:text-4xl',
      'text-base sm:text-xl md:text-3xl',
    ],
    xlarge: [
      'text-3xl sm:text-6xl md:text-[4.25rem]',
      'text-2xl sm:text-5xl md:text-6xl',
      'text-xl sm:text-4xl md:text-5xl',
      'text-lg sm:text-3xl md:text-[2.65rem]',
      'text-base sm:text-2xl md:text-4xl',
    ],
    elder: [
      'text-4xl sm:text-6xl md:text-[4.75rem]',
      'text-3xl sm:text-5xl md:text-[4rem]',
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-[2.75rem]',
      'text-lg sm:text-2xl md:text-4xl',
    ],
  };

  return `${map[textSize][tier]} ${leadingClass}`;
}

function getBibleRefTypographyClass(textSize: TextSizePreference): string {
  switch (textSize) {
    case 'standard':
      return 'text-base sm:text-xl md:text-2xl';
    case 'xlarge':
      return 'text-xl sm:text-3xl md:text-4xl';
    case 'elder':
      return 'text-2xl sm:text-3xl md:text-[2.5rem]';
    case 'large':
    default:
      return 'text-lg sm:text-2xl md:text-[2rem]';
  }
}

function getStanzaTypographyClass(
  lines: string[],
  isDual: boolean,
  textSize: TextSizePreference,
  leadingClass: string
): string {
  const lineCount = lines.length;
  const maxLineChars = lines.reduce((max, l) => Math.max(max, l.length), 0);
  const density = lineCount <= 4 && maxLineChars <= 42 ? 0 : lineCount <= 6 && maxLineChars <= 52 ? 1 : 2;

  const dualMap: Record<TextSizePreference, string[]> = {
    standard: [
      'text-lg sm:text-2xl md:text-3xl',
      'text-base sm:text-xl md:text-2xl',
      'text-sm sm:text-lg md:text-xl',
    ],
    large: [
      'text-xl sm:text-3xl md:text-4xl',
      'text-lg sm:text-2xl md:text-3xl',
      'text-base sm:text-xl md:text-2xl',
    ],
    xlarge: [
      'text-2xl sm:text-4xl md:text-[2.6rem]',
      'text-xl sm:text-3xl md:text-4xl',
      'text-lg sm:text-2xl md:text-3xl',
    ],
    elder: [
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-[2.5rem]',
      'text-lg sm:text-2xl md:text-3xl',
    ],
  };

  const singleMap: Record<TextSizePreference, string[]> = {
    standard: [
      'text-xl sm:text-3xl md:text-4xl',
      'text-lg sm:text-2xl md:text-3xl',
      'text-base sm:text-xl md:text-2xl',
    ],
    large: [
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-[2.6rem]',
      'text-lg sm:text-2xl md:text-4xl',
    ],
    xlarge: [
      'text-3xl sm:text-5xl md:text-6xl',
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-[2.65rem]',
    ],
    elder: [
      'text-3xl sm:text-5xl md:text-[4.25rem]',
      'text-2xl sm:text-4xl md:text-5xl',
      'text-xl sm:text-3xl md:text-4xl',
    ],
  };

  const sizeClass = isDual ? dualMap[textSize][density] : singleMap[textSize][density];
  return `${sizeClass} ${leadingClass}`;
}

export const ProjectorCanvas: React.FC<ProjectorCanvasProps> = ({
  state,
  isFullViewport = true,
  onRequestClose,
  onStepSlide,
}) => {
  const touchStartXRef = useRef<number | null>(null);
  const [blankSlideIdx, setBlankSlideIdx] = useState<number>(0);
  const { isDarkSlide, isBlank, kind } = state;
  const typography = state.typography || getStoredTypography();
  const fontClass = typography.fontFamily === 'serif' ? 'font-projector-serif' : 'font-projector-sans';
  const weightClass = typography.isBold ? 'font-bold' : 'font-normal';
  const leadingClass = getLeadingClass(typography.lineSpacing);
  const lineGapClass = getLineGapClass(typography.lineSpacing);

  useEffect(() => {
    if (!isBlank) {
      setBlankSlideIdx(0);
      return;
    }
    const timer = window.setInterval(() => {
      setBlankSlideIdx((prev) => (prev + 1) % CREATION_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isBlank]);

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
        className={`${
          isFullViewport
            ? 'fixed inset-0 z-[70] w-screen h-screen h-[100dvh]'
            : 'relative w-full h-full'
        } overflow-hidden bg-stone-950 select-none flex items-center justify-center`}
        onDoubleClick={onRequestClose}
        aria-label="Projector Creation Slideshow"
      >
        {CREATION_SLIDES.map((slide, idx) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === blankSlideIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/45" />
        <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center gap-4">
          <div className="w-20 h-20 sm:w-28 sm:h-28 p-3 sm:p-4 rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center">
            <AdventistLogo className="w-full h-full" />
          </div>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white drop-shadow-lg">
            Kristu mu Nyimbo
          </h1>
        </div>
      </div>
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
    const typographyClass = getBibleTypographyClass(
      verseText.length,
      typography.textSize,
      leadingClass
    );
    const refSizeClass = getBibleRefTypographyClass(typography.textSize);

    return (
      <div
        className={wrapperClass}
        onDoubleClick={onRequestClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={`${bookName} ${chapterIdx + 1}:${safeVerse} Projector Display`}
      >
        <div className="flex-1 flex items-center justify-center px-6 sm:px-14 md:px-24 pt-10 pb-6 overflow-y-auto">
          <p
            className={`${fontClass} ${weightClass} text-center max-w-5xl mx-auto select-text ${typographyClass}`}
          >
            <span className="tabular-nums">{safeVerse}</span> {verseText}
          </p>
        </div>

        <div className="w-full px-6 sm:px-14 md:px-20 pb-8 sm:pb-12 flex justify-end shrink-0">
          <p className={`${fontClass} ${weightClass} ${refSizeClass} leading-tight text-right`}>
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
    const typographyClass = getStanzaTypographyClass(
      combinedLinesForSizing,
      isDual,
      typography.textSize,
      leadingClass
    );

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
            <p className={`${fontClass} text-2xl text-center`}>No lyrics available</p>
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
                  className={`${fontClass} ${weightClass} select-text ${typographyClass} ${
                    activeSlide.type === 'chorus' ? 'italic' : ''
                  }`}
                >
                  {activeSlide.localLines.map((line, i) => (
                    <p key={`l-${i}`} className={lineGapClass}>
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
                  className={`${fontClass} ${weightClass} select-text ${typographyClass} ${
                    activeSlide.type === 'chorus' ? 'italic' : ''
                  }`}
                >
                  {activeSlide.englishLines.map((line, i) => (
                    <p key={`e-${i}`} className={lineGapClass}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`${fontClass} ${weightClass} text-center max-w-5xl mx-auto select-text ${typographyClass} ${
                activeSlide.type === 'chorus' ? 'italic' : ''
              }`}
            >
              {activeSingleLines.map((line, i) => (
                <p key={i} className={lineGapClass}>
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
