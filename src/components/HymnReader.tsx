import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Sun,
  Moon,
  ScrollText,
  Share2,
  Hash,
  Play,
  Pause,
  ArrowDown
} from 'lucide-react';
import { Hymn } from '../data/hymns';
import { hymnAudio } from '../utils/audioPlayer';
import {
  TYPOGRAPHY_CONFIG,
  getStoredTypography,
  applyTypographyToDOM,
  TextSizePreference as TextSize,
  LineSpacingPreference,
  FontPreference,
} from '../utils/typography';

interface HymnReaderProps {
  hymn: Hymn;
  isFavorite: boolean;
  onToggleFavorite: (hymnId: string) => void;
  onClose: () => void;
  onNavigatePrev: () => void;
  onNavigateNext: () => void;
  onOpenDialpad?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  totalHymnsCount: number;
}

type ReaderTheme = 'parchment' | 'white' | 'dark';

export const HymnReader: React.FC<HymnReaderProps> = ({
  hymn,
  isFavorite,
  onToggleFavorite,
  onClose,
  onNavigatePrev,
  onNavigateNext,
  onOpenDialpad,
  hasPrev,
  hasNext,
  totalHymnsCount,
}) => {
  const [textSize, setTextSize] = useState<TextSize>(() => {
    return getStoredTypography().textSize;
  });
  const [lineSpacing, setLineSpacing] = useState<LineSpacingPreference>(() => {
    return getStoredTypography().lineSpacing;
  });
  const [theme, setTheme] = useState<ReaderTheme>(() => {
    const saved = localStorage.getItem('hymnal_reader_theme') as ReaderTheme;
    if (saved === 'parchment' || saved === 'white' || saved === 'dark') return saved;
    return typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'parchment';
  });
  const [fontPref, setFontPref] = useState<FontPreference>(() => {
    return getStoredTypography().fontFamily;
  });
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeNoteIdx, setActiveNoteIdx] = useState<number>(-1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(() => {
    return localStorage.getItem('hymnal_autoscroll_enabled') === 'true';
  });
  const readerContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync theme changes if app theme changes while reader is open
  useEffect(() => {
    const handleAppThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const savedReaderTheme = localStorage.getItem('hymnal_reader_theme');
      if (!savedReaderTheme) {
        setTheme(isDark ? 'dark' : 'parchment');
      }
    };
    window.addEventListener('hymnal-theme-change', handleAppThemeChange);
    return () => window.removeEventListener('hymnal-theme-change', handleAppThemeChange);
  }, []);

  // Sync settings and typography changes live from SettingsModal or shortcuts
  useEffect(() => {
    const handleTypographyChange = (e: any) => {
      if (e.detail?.textSize) setTextSize(e.detail.textSize);
      if (e.detail?.lineSpacing) setLineSpacing(e.detail.lineSpacing);
      if (e.detail?.fontFamily) setFontPref(e.detail.fontFamily);
      if (typeof e.detail?.autoScrollEnabled === 'boolean') {
        setIsAutoScrolling(e.detail.autoScrollEnabled);
      }
    };
    window.addEventListener('hymnal-typography-change', handleTypographyChange);
    window.addEventListener('hymnal-settings-change', handleTypographyChange);
    return () => {
      window.removeEventListener('hymnal-typography-change', handleTypographyChange);
      window.removeEventListener('hymnal-settings-change', handleTypographyChange);
    };
  }, []);

  // Keep screen awake while reading (Wake Lock API)
  useEffect(() => {
    const shouldWakeLock = localStorage.getItem('hymnal_wake_lock') === 'true';
    if (!shouldWakeLock || typeof navigator === 'undefined' || !('wakeLock' in navigator)) return;

    let lockSentinel: any = null;
    (navigator as any).wakeLock
      ?.request('screen')
      .then((lock: any) => {
        lockSentinel = lock;
      })
      .catch(() => {});

    return () => {
      if (lockSentinel) {
        lockSentinel.release().catch(() => {});
      }
    };
  }, []);

  // Auto-scroll animation frame loop
  useEffect(() => {
    if (!isAutoScrolling) return;

    const speedSetting = localStorage.getItem('hymnal_autoscroll_speed') || 'normal';
    const speedPxPerFrame = speedSetting === 'slow' ? 0.35 : speedSetting === 'fast' ? 1.0 : 0.6;

    let animId: number;
    const step = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop += speedPxPerFrame;
        const maxScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
        if (scrollContainerRef.current.scrollTop >= maxScroll - 2) {
          setIsAutoScrolling(false);
          return;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isAutoScrolling]);

  // Reset scroll to the top whenever a new hymn is opened or navigated
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [hymn.id]);

  const handleToggleAutoScroll = () => {
    if (!isAutoScrolling) {
      // When user starts auto-scroll, ensure scrolling starts from the top to bottom
      if (scrollContainerRef.current) {
        const maxScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
        if (scrollContainerRef.current.scrollTop > 80 || scrollContainerRef.current.scrollTop >= maxScroll - 10) {
          scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      setIsAutoScrolling(true);
    } else {
      setIsAutoScrolling(false);
    }
  };

  const handleCycleTheme = () => {
    setTheme((prev) => {
      const next: ReaderTheme = prev === 'parchment' ? 'white' : prev === 'white' ? 'dark' : 'parchment';
      localStorage.setItem('hymnal_reader_theme', next);
      return next;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        onNavigatePrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNavigateNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasPrev, hasNext, onNavigatePrev, onNavigateNext, onClose, isFullscreen]);

  // Stop tune player on unmount or hymn change
  useEffect(() => {
    hymnAudio.stop();
    setIsPlayingAudio(false);
    setActiveNoteIdx(-1);
    return () => {
      hymnAudio.stop();
    };
  }, [hymn.id]);

  const handleTogglePlayTune = () => {
    if (isPlayingAudio) {
      hymnAudio.stop();
      setIsPlayingAudio(false);
      setActiveNoteIdx(-1);
    } else if (hymn.melodicPreview && hymn.melodicPreview.length > 0) {
      setIsPlayingAudio(true);
      hymnAudio.playMelody(
        hymn.melodicPreview,
        (idx) => setActiveNoteIdx(idx),
        () => {
          setIsPlayingAudio(false);
          setActiveNoteIdx(-1);
        }
      );
    }
  };

  const handleIncreaseTextSize = () => {
    const sequence: TextSize[] = ['standard', 'large', 'xlarge', 'elder'];
    const currIdx = sequence.indexOf(textSize);
    if (currIdx < sequence.length - 1) {
      const next = sequence[currIdx + 1];
      setTextSize(next);
      applyTypographyToDOM({ textSize: next, lineSpacing, fontFamily: fontPref });
    }
  };

  const handleDecreaseTextSize = () => {
    const sequence: TextSize[] = ['standard', 'large', 'xlarge', 'elder'];
    const currIdx = sequence.indexOf(textSize);
    if (currIdx > 0) {
      const next = sequence[currIdx - 1];
      setTextSize(next);
      applyTypographyToDOM({ textSize: next, lineSpacing, fontFamily: fontPref });
    }
  };

  const handleToggleFontPref = () => {
    const next: FontPreference = fontPref === 'serif' ? 'sans' : 'serif';
    setFontPref(next);
    applyTypographyToDOM({ textSize, lineSpacing, fontFamily: next });
  };

  const themeStyles = {
    parchment: {
      wrapper: 'bg-[#FAF8F5] text-stone-900',
      header: 'bg-[#FAF8F5]/90 border-stone-200/80 text-stone-900',
      surface: 'bg-[#FAF8F5]',
      metaText: 'text-stone-600',
      verseNum: 'text-amber-950 bg-amber-100/70 border border-amber-200/60',
      chorusBg: 'bg-stone-200/40 border border-stone-300/60 text-stone-900',
      chorusLabel: 'text-amber-900 font-semibold',
      navBar: 'bg-[#FAF8F5]/95 border-stone-200/80',
      btnSecondary: 'bg-stone-200/60 hover:bg-stone-200 text-stone-800',
    },
    white: {
      wrapper: 'bg-white text-slate-900',
      header: 'bg-white/90 border-slate-200 text-slate-900',
      surface: 'bg-white',
      metaText: 'text-slate-600',
      verseNum: 'text-slate-900 bg-slate-100 border border-slate-200',
      chorusBg: 'bg-slate-50 border border-slate-200 text-slate-900',
      chorusLabel: 'text-slate-800 font-semibold',
      navBar: 'bg-white/95 border-slate-200',
      btnSecondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800',
    },
    dark: {
      wrapper: 'bg-stone-950 text-stone-100',
      header: 'bg-stone-950/90 border-stone-800 text-stone-100',
      surface: 'bg-stone-950',
      metaText: 'text-stone-400',
      verseNum: 'text-amber-400 bg-stone-900 border border-stone-800',
      chorusBg: 'bg-stone-900/60 border border-stone-800 text-stone-100',
      chorusLabel: 'text-amber-400 font-semibold',
      navBar: 'bg-stone-950/95 border-stone-800',
      btnSecondary: 'bg-stone-900 hover:bg-stone-800 text-stone-200',
    },
  }[theme];

  return (
    <div
      ref={readerContainerRef}
      style={{
        fontFamily: TYPOGRAPHY_CONFIG.fontFamily[fontPref],
      }}
      className={`fixed inset-0 z-50 flex flex-col overflow-hidden transition-all ${theme === 'dark' ? 'dark' : ''} ${themeStyles.wrapper}`}
    >
      {/* Top Reader Action Bar */}
      <div className={`shrink-0 border-b backdrop-blur-md no-print ${themeStyles.header}`}>
        {/* Main Header Row */}
        <div className="h-14 sm:h-16 px-3 sm:px-6 flex items-center justify-between gap-2">
          {/* Left: Back / Close & Quick Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className={`h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors ${themeStyles.btnSecondary}`}
              aria-label="Bwelelani ku mutande (Back to hymn list)"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Inyimbo Shonse</span>
              <span className="sm:hidden">Inyimbo</span>
            </button>

            <span className="text-xs tracking-wider uppercase font-sans text-stone-500 dark:text-stone-400 font-bold sm:hidden">
              #{hymn.number}
            </span>

            <span className="text-xs tracking-wider uppercase font-sans text-stone-400 hidden lg:inline">
              Nyimbo {hymn.number} / {totalHymnsCount}
            </span>
          </div>


          {/* Right Controls: Desktop / Tablet Full Actions */}
          <div className="hidden md:flex items-center gap-1.5 sm:gap-2">
            {/* Auto-Scroll Toggle */}
            <button
              onClick={handleToggleAutoScroll}
              className={`h-9 px-2.5 rounded-xl text-xs font-sans font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                isAutoScrolling
                  ? 'bg-amber-900 text-white shadow-xs animate-pulse'
                  : themeStyles.btnSecondary
              }`}
              title={isAutoScrolling ? 'Pause auto-scroll' : 'Start auto-scroll (scrolls from top to bottom)'}
              aria-label="Toggle auto-scroll"
            >
              {isAutoScrolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden xl:inline">{isAutoScrolling ? 'Pause' : 'Auto-Scroll'}</span>
            </button>

            {/* Font Family Switcher */}
            <button
              onClick={handleToggleFontPref}
              className={`h-9 px-2.5 rounded-xl text-xs font-sans font-medium transition-colors cursor-pointer ${themeStyles.btnSecondary}`}
              title={fontPref === 'serif' ? 'Switch to Sans-serif font' : 'Switch to Traditional Serif font'}
            >
              <span className="font-bold">{fontPref === 'serif' ? 'Serif' : 'Sans'}</span>
            </button>

            {/* Text Size Stepper */}
            <div className="flex items-center rounded-xl overflow-hidden border border-stone-300 dark:border-stone-700 text-xs font-sans font-semibold">
              <button
                onClick={handleDecreaseTextSize}
                disabled={textSize === 'standard'}
                className="h-9 px-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 disabled:opacity-40 transition-colors cursor-pointer"
                title="Cefyako amalembo (Smaller text)"
                aria-label="Decrease text size"
              >
                A-
              </button>
              <span className="h-9 px-2 flex items-center justify-center bg-white dark:bg-stone-900 uppercase text-[10px] tracking-tight">
                {textSize === 'elder' ? 'XL+' : textSize === 'xlarge' ? 'XL' : textSize === 'large' ? 'LG' : 'MD'}
              </span>
              <button
                onClick={handleIncreaseTextSize}
                disabled={textSize === 'elder'}
                className="h-9 px-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 disabled:opacity-40 transition-colors cursor-pointer"
                title="Pangilako amalembo (Larger text for seniors)"
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={handleCycleTheme}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${themeStyles.btnSecondary}`}
              title={`Reading surface: ${theme} (Click to change)`}
              aria-label="Switch reading color theme"
            >
              {theme === 'parchment' ? (
                <ScrollText className="w-4 h-4 text-amber-900" />
              ) : theme === 'white' ? (
                <Sun className="w-4 h-4 text-amber-600" />
              ) : (
                <Moon className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Favorite Toggle */}
            <button
              onClick={() => onToggleFavorite(hymn.id)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                isFavorite
                  ? 'text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
                  : themeStyles.btnSecondary
              }`}
              title={isFavorite ? 'Fumyapo pa malumbo' : 'Bikapo pa malumbo'}
              aria-label="Toggle favorite"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Fullscreen / Projector view */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${themeStyles.btnSecondary}`}
              title={isFullscreen ? 'Exit presentation view' : 'Projector / Fullscreen mode'}
              aria-label="Toggle fullscreen presentation"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${themeStyles.btnSecondary}`}
              aria-label="Cala (Close)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Right Controls (Mobile Compact): Bookmark & Close */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={() => onToggleFavorite(hymn.id)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                isFavorite
                  ? 'text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60'
                  : themeStyles.btnSecondary
              }`}
              title={isFavorite ? 'Fumyapo pa malumbo' : 'Bikapo pa malumbo'}
              aria-label="Toggle favorite"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${themeStyles.btnSecondary}`}
              aria-label="Cala (Close)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Reading Quick-Controls Sub-Bar */}
        <div className="md:hidden px-3 py-2 border-t border-stone-200/50 dark:border-stone-800/60 flex items-center justify-between gap-1.5 overflow-x-auto text-xs">
          {/* Melodic Tune Button */}
          {hymn.melodicPreview && hymn.melodicPreview.length > 0 && (
            <button
              onClick={handleTogglePlayTune}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-sans font-medium shrink-0 transition-all ${
                isPlayingAudio
                  ? 'bg-amber-800 text-white animate-pulse'
                  : themeStyles.btnSecondary
              }`}
              title="Tune rehearsal"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Ukwimba</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
                  <span>Umusango</span>
                </>
              )}
            </button>
          )}

          {/* Dialpad Jump */}
          {onOpenDialpad && (
            <button
              onClick={onOpenDialpad}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-sans font-medium shrink-0 transition-colors ${themeStyles.btnSecondary}`}
              title="Jump to hymn #"
            >
              <Hash className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
              <span>Nambala</span>
            </button>
          )}

          {/* Font Toggle */}
          <button
            onClick={handleToggleFontPref}
            className={`px-2.5 py-1.5 rounded-lg font-sans font-medium shrink-0 transition-colors cursor-pointer ${themeStyles.btnSecondary}`}
          >
            <span className="font-bold">{fontPref === 'serif' ? 'Serif' : 'Sans'}</span>
          </button>

          {/* Text Size Stepper */}
          <div className="flex items-center rounded-lg overflow-hidden border border-stone-300 dark:border-stone-700 font-sans font-semibold shrink-0">
            <button
              onClick={handleDecreaseTextSize}
              disabled={textSize === 'standard'}
              className="h-7 px-2 bg-stone-100 dark:bg-stone-800 disabled:opacity-40 cursor-pointer"
              aria-label="Decrease text"
            >
              A-
            </button>
            <span className="h-7 px-1.5 flex items-center justify-center bg-white dark:bg-stone-900 uppercase text-[10px]">
              {textSize === 'elder' ? 'XL+' : textSize === 'xlarge' ? 'XL' : textSize === 'large' ? 'LG' : 'MD'}
            </span>
            <button
              onClick={handleIncreaseTextSize}
              disabled={textSize === 'elder'}
              className="h-7 px-2 bg-stone-100 dark:bg-stone-800 disabled:opacity-40 cursor-pointer"
              aria-label="Increase text"
            >
              A+
            </button>
          </div>

          {/* Auto Scroll Toggle */}
          <button
            onClick={handleToggleAutoScroll}
            className={`px-2.5 py-1.5 rounded-lg font-sans font-medium shrink-0 flex items-center gap-1 transition-colors cursor-pointer ${
              isAutoScrolling
                ? 'bg-amber-900 text-white animate-pulse'
                : themeStyles.btnSecondary
            }`}
            title="Auto-scroll (scrolls from top to bottom)"
          >
            {isAutoScrolling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="text-[10px]">Scroll</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleCycleTheme}
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${themeStyles.btnSecondary}`}
            title="Switch theme"
          >
            {theme === 'parchment' ? (
              <ScrollText className="w-3.5 h-3.5 text-amber-900" />
            ) : theme === 'white' ? (
              <Sun className="w-3.5 h-3.5 text-amber-600" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-amber-400" />
            )}
          </button>
        </div>
      </div>

      {/* Main Reading Viewport */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 pt-3 pb-8 sm:pt-5 sm:pb-10"
      >
        <div className="max-w-2xl mx-auto">
          {/* Hymn Header Block */}
          <div className="text-center pb-4 border-b border-stone-200/60 dark:border-stone-800 mb-4 sm:mb-5">
            {/* Hymn Number */}
            <div className="inline-flex items-center justify-center mb-1">
              <span className="font-display text-base sm:text-lg font-bold tracking-widest text-amber-900 dark:text-amber-400">
                NYIMBO {hymn.number}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-bold tracking-tight text-stone-900 dark:text-stone-100 transition-all"
              style={{
                textWrap: 'balance',
                fontSize: `${TYPOGRAPHY_CONFIG.textSize[textSize].titlePx}px`,
                lineHeight: 1.25,
                fontFamily: TYPOGRAPHY_CONFIG.fontFamily[fontPref],
              }}
            >
              {hymn.title}
            </h1>

            {/* Writer */}
            <p className={`mt-1.5 text-xs sm:text-sm font-medium ${themeStyles.metaText}`}>
              <span className="font-semibold text-amber-900 dark:text-amber-400">Writer:</span> {hymn.writer}
            </p>

            {/* Unboxed Metadata Strip (Zero-Pill Discipline) */}
            <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 text-xs font-sans text-stone-500 dark:text-stone-400 mt-2">
              <span>{hymn.categoryBemba}</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>{hymn.key}</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span>{hymn.timeSignature}</span>
              <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
              <span className="italic">{hymn.scripture}</span>
            </div>
          </div>

          {/* Verses and Chorus */}
          <div className="space-y-4 sm:space-y-5">
            {hymn.verses.map((verseLines, verseIndex) => (
              <React.Fragment key={`verse-${verseIndex}`}>
                {/* Regular Verse */}
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Verse Number Stamp */}
                  <div
                    className={`shrink-0 rounded-full flex items-center justify-center font-bold transition-all ${themeStyles.verseNum}`}
                    style={{
                      width: `${Math.max(28, TYPOGRAPHY_CONFIG.textSize[textSize].numPx * 1.8)}px`,
                      height: `${Math.max(28, TYPOGRAPHY_CONFIG.textSize[textSize].numPx * 1.8)}px`,
                      fontSize: `${TYPOGRAPHY_CONFIG.textSize[textSize].numPx}px`,
                      fontFamily: TYPOGRAPHY_CONFIG.fontFamily[fontPref],
                    }}
                  >
                    {verseIndex + 1}
                  </div>

                  {/* Verse Lyrics */}
                  <div
                    className="space-y-1 sm:space-y-1.5 flex-1 pt-0.5 transition-all"
                    style={{
                      fontSize: `${TYPOGRAPHY_CONFIG.textSize[textSize].versePx}px`,
                      lineHeight: TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier,
                      fontFamily: TYPOGRAPHY_CONFIG.fontFamily[fontPref],
                    }}
                  >
                    {verseLines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-stone-900 dark:text-stone-100">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Chorus rendered after the 1st verse (traditional hymnal arrangement) */}
                {hymn.chorus && verseIndex === 0 && (
                  <div
                    className={`my-3 sm:my-4 p-3.5 sm:p-4 rounded-xl ${themeStyles.chorusBg}`}
                  >
                    <div className="text-xs uppercase tracking-wider font-sans mb-1.5 font-bold flex items-center gap-1.5 text-amber-900 dark:text-amber-400">
                      <span>{hymn.chorusLabel || 'Icililishi (Chorus)'}</span>
                    </div>
                    <div
                      className="space-y-1 italic transition-all"
                      style={{
                        fontSize: `${TYPOGRAPHY_CONFIG.textSize[textSize].versePx}px`,
                        lineHeight: TYPOGRAPHY_CONFIG.lineSpacing[lineSpacing].multiplier,
                        fontFamily: TYPOGRAPHY_CONFIG.fontFamily[fontPref],
                      }}
                    >
                      {hymn.chorus.map((line, chorusLineIndex) => (
                        <p key={chorusLineIndex} className="font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* Sticky Bottom Navigation Bar (Previous / Next Hymn) */}
      <div
        className={`shrink-0 h-12 sm:h-14 px-3 sm:px-6 border-t flex items-center justify-between no-print ${themeStyles.navBar}`}
      >
        <button
          onClick={onNavigatePrev}
          disabled={!hasPrev}
          className={`h-8 sm:h-9 px-3 min-w-[36px] rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium transition-all ${
            hasPrev
              ? `${themeStyles.btnSecondary} hover:scale-[1.02] active:scale-95`
              : 'opacity-30 cursor-not-allowed'
          }`}
          aria-label="Nyimbo ya ku numa (Previous hymn)"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Nyimbo ya ku Numa</span>
          <span className="sm:hidden">Ku Numa</span>
        </button>

        <div className="text-center font-sans">
          <span className="text-[11px] sm:text-xs font-semibold text-stone-600 dark:text-stone-300 md:hidden">
            Nyimbo {hymn.number} / {totalHymnsCount}
          </span>
          <span className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-medium hidden md:inline">
            Keyboard: Use <kbd className="px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-[10px]">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-[10px]">→</kbd>
          </span>
        </div>

        <button
          onClick={onNavigateNext}
          disabled={!hasNext}
          className={`h-8 sm:h-9 px-3 min-w-[36px] rounded-lg flex items-center gap-1.5 text-xs font-sans font-medium transition-all ${
            hasNext
              ? 'bg-amber-900 hover:bg-amber-950 dark:bg-amber-800 dark:hover:bg-amber-700 text-white hover:scale-[1.02] active:scale-95 shadow-sm'
              : 'opacity-30 cursor-not-allowed bg-stone-200 text-stone-400'
          }`}
          aria-label="Nyimbo ya ku ntanshi (Next hymn)"
        >
          <span className="hidden sm:inline">Nyimbo ya ku Ntanshi</span>
          <span className="sm:hidden">Ku Ntanshi</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
