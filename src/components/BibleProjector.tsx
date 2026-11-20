import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import type { BibleBook } from './BibleReader';

interface BibleProjectorProps {
  books: BibleBook[];
  bookIdx: number;
  chapterIdx: number;
  verseNum: number;
  versionLabel: string;
  onNavigate: (nextBookIdx: number, nextChapterIdx: number, nextVerseNum: number) => void;
  onClose: () => void;
}

function getVerseTypographyClass(charCount: number): string {
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

export const BibleProjector: React.FC<BibleProjectorProps> = ({
  books,
  bookIdx,
  chapterIdx,
  verseNum,
  versionLabel,
  onNavigate,
  onClose,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const isHoveringControlsRef = useRef<boolean>(false);

  const [isDarkSlide, setIsDarkSlide] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);

  const currentBook = books[bookIdx] || books[0];
  const safeChapterIdx =
    currentBook && chapterIdx >= 0 && chapterIdx < currentBook.chapters.length ? chapterIdx : 0;
  const verses = currentBook ? currentBook.chapters[safeChapterIdx] || [] : [];
  const safeVerseNum =
    verses.length > 0 ? Math.max(1, Math.min(verses.length, verseNum)) : 1;
  const verseText = verses[safeVerseNum - 1] || '';

  const isAtVeryStart = bookIdx === 0 && safeChapterIdx === 0 && safeVerseNum <= 1;
  const isAtVeryEnd =
    bookIdx === books.length - 1 &&
    safeChapterIdx === currentBook.chapters.length - 1 &&
    safeVerseNum >= verses.length;

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
  }, [scheduleHideControls, safeVerseNum, safeChapterIdx, bookIdx]);

  const goToPrevVerse = useCallback(() => {
    if (!currentBook) return;
    if (safeVerseNum > 1) {
      onNavigate(bookIdx, safeChapterIdx, safeVerseNum - 1);
      return;
    }
    if (safeChapterIdx > 0) {
      const prevChapVerses = currentBook.chapters[safeChapterIdx - 1] || [];
      onNavigate(bookIdx, safeChapterIdx - 1, Math.max(1, prevChapVerses.length));
      return;
    }
    if (bookIdx > 0) {
      const prevBook = books[bookIdx - 1];
      const lastChapIdx = Math.max(0, prevBook.chapters.length - 1);
      const lastChapVerses = prevBook.chapters[lastChapIdx] || [];
      onNavigate(bookIdx - 1, lastChapIdx, Math.max(1, lastChapVerses.length));
    }
  }, [books, bookIdx, currentBook, safeChapterIdx, safeVerseNum, onNavigate]);

  const goToNextVerse = useCallback(() => {
    if (!currentBook) return;
    if (safeVerseNum < verses.length) {
      onNavigate(bookIdx, safeChapterIdx, safeVerseNum + 1);
      return;
    }
    if (safeChapterIdx < currentBook.chapters.length - 1) {
      onNavigate(bookIdx, safeChapterIdx + 1, 1);
      return;
    }
    if (bookIdx < books.length - 1) {
      onNavigate(bookIdx + 1, 0, 1);
    }
  }, [books.length, bookIdx, currentBook, safeChapterIdx, safeVerseNum, verses.length, onNavigate]);

  const handleToggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement && containerRef.current?.requestFullscreen) {
        await containerRef.current.requestFullscreen();
      } else if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be restricted inside sandboxed frames
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

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNextVerse();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevVerse();
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
  }, [goToNextVerse, goToPrevVerse, handleExit, handleToggleFullscreen]);

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
        goToNextVerse();
      } else {
        goToPrevVerse();
      }
    }
  };

  const typographyClass = getVerseTypographyClass(verseText.length);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentBook.name} ${safeChapterIdx + 1}:${safeVerseNum} Projector View`}
      onMouseMove={scheduleHideControls}
      onClick={scheduleHideControls}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`fixed inset-0 z-50 flex flex-col justify-between select-none transition-colors duration-200 ${
        isDarkSlide ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Main Centered Verse Slide */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-14 md:px-24 pt-10 pb-6 overflow-y-auto">
        <p
          className={`font-sans font-normal text-center max-w-5xl mx-auto select-text ${typographyClass}`}
        >
          <span className="tabular-nums">{safeVerseNum}</span> {verseText}
        </p>
      </div>

      {/* Bottom-Right Reference Citation (matches projector slide layout) */}
      <div className="w-full px-6 sm:px-14 md:px-20 pb-8 sm:pb-12 flex justify-end shrink-0">
        <p className="font-sans font-normal text-lg sm:text-2xl md:text-[2rem] leading-tight text-right">
          {currentBook.name} {safeChapterIdx + 1}:{safeVerseNum} {versionLabel}
        </p>
      </div>

      {/* Unobtrusive Auto-Hiding Operator Controls */}
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
          onClick={goToPrevVerse}
          disabled={isAtVeryStart}
          aria-label="Previous verse"
          title="Previous verse (Left arrow)"
          className="h-9 px-2.5 rounded-xl flex items-center gap-1 text-xs font-semibold hover:bg-stone-500/15 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        <select
          aria-label="Jump to verse in chapter"
          value={safeVerseNum}
          onChange={(e) => onNavigate(bookIdx, safeChapterIdx, parseInt(e.target.value, 10))}
          className={`h-9 px-2.5 rounded-xl text-xs font-semibold border focus:outline-hidden ${
            isDarkSlide
              ? 'bg-stone-800 border-stone-700 text-stone-100'
              : 'bg-stone-100 border-stone-200 text-stone-900'
          }`}
        >
          {verses.map((_, i) => (
            <option key={i + 1} value={i + 1}>
              Verse {i + 1} of {verses.length}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={goToNextVerse}
          disabled={isAtVeryEnd}
          aria-label="Next verse"
          title="Next verse (Right arrow)"
          className="h-9 px-2.5 rounded-xl flex items-center gap-1 text-xs font-semibold hover:bg-stone-500/15 disabled:opacity-30 transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

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
