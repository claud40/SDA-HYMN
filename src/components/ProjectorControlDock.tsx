import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Maximize2,
  Monitor,
  Moon,
  Sun,
} from 'lucide-react';
import {
  LiveProjectorState,
  ProjectorLangMode,
  encodeProjectorSnapshotHash,
  jumpProjectorSlide,
  setProjectorBlank,
  setProjectorHymnLang,
  setProjectorSlideTheme,
  stepProjectorSlide,
} from '../utils/projectorBus';

interface ProjectorControlDockProps {
  state: LiveProjectorState;
  onOpenCleanFullView: () => void;
  hasBottomNavOffset?: boolean;
}

export const ProjectorControlDock: React.FC<ProjectorControlDockProps> = ({
  state,
  onOpenCleanFullView,
  hasBottomNavOffset = false,
}) => {
  const isBible = state.kind === 'bible' && Boolean(state.bible);
  const isHymn = state.kind === 'hymn' && Boolean(state.hymn);
  const hasContent = isBible || isHymn;

  const canPrev = isBible
    ? (state.bible?.verseNum ?? 1) > 1
    : isHymn
    ? (state.hymn?.slideIndex ?? 0) > 0
    : false;

  const canNext = isBible
    ? (state.bible?.verseNum ?? 1) < (state.bible?.verses.length ?? 1)
    : isHymn
    ? (state.hymn?.slideIndex ?? 0) < ((state.hymn?.slides.length ?? 1) - 1)
    : false;

  const hasHymnEnglish = Boolean(
    isHymn &&
      state.hymn?.slides.some((s) => s.englishLines && s.englishLines.length > 0)
  );

  const liveSummary = (() => {
    if (state.isBlank) {
      return 'Blank Screen · Creation Rotation';
    }
    if (state.kind === 'idle') {
      return 'Projector Ready — Select a verse or stanza';
    }
    if (isBible && state.bible) {
      return `${state.bible.bookName} ${state.bible.chapterIdx + 1}:${state.bible.verseNum} ${state.bible.versionLabel}`;
    }
    if (isHymn && state.hymn) {
      const activeSlide = state.hymn.slides[state.hymn.slideIndex];
      return `Nyimbo ${state.hymn.hymnNumber} · ${activeSlide?.selectLabel || ''}`;
    }
    return 'Projector Ready';
  })();

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] max-w-4xl z-[55] px-3 py-2.5 rounded-2xl bg-stone-900/95 dark:bg-stone-900/95 text-stone-100 border border-stone-700/90 shadow-2xl backdrop-blur-md flex flex-wrap items-center justify-between gap-2 transition-all ${
        hasBottomNavOffset ? 'bottom-[calc(4.15rem+env(safe-area-inset-bottom))] md:bottom-3' : 'bottom-3'
      }`}
    >
      {/* Left: Live Indicator & Current Projected Item */}
      <div className="flex items-center gap-2 min-w-0">
        <span
          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
            state.isBlank || state.kind === 'idle'
              ? 'bg-stone-400'
              : 'bg-emerald-400'
          }`}
        />
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 shrink-0">
          Control
        </span>
        <span className="text-xs font-semibold text-white truncate max-w-[180px] sm:max-w-[240px]">
          {liveSummary}
        </span>
      </div>

      {/* Center/Right: Prev / Jump / Next + Slide Controls (visible ONLY on Control Device) */}
      <div className="flex flex-wrap items-center gap-1.5 ml-auto">
        {hasContent && (
          <>
            <button
              type="button"
              onClick={() => stepProjectorSlide(-1)}
              disabled={!canPrev}
              aria-label="Previous projected slide"
              title="Previous slide"
              className="h-8 px-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-35 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {isBible && state.bible && (
              <select
                aria-label="Select projected verse"
                value={state.bible.verseNum}
                onChange={(e) => jumpProjectorSlide(parseInt(e.target.value, 10))}
                className="h-8 px-2 rounded-lg bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-100"
              >
                {state.bible.verses.map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    v.{i + 1}/{state.bible!.verses.length}
                  </option>
                ))}
              </select>
            )}

            {isHymn && state.hymn && (
              <select
                aria-label="Select projected stanza slide"
                value={state.hymn.slideIndex}
                onChange={(e) => jumpProjectorSlide(parseInt(e.target.value, 10))}
                className="h-8 px-2 rounded-lg bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-100 max-w-[130px]"
              >
                {state.hymn.slides.map((s, idx) => (
                  <option key={s.id} value={idx}>
                    {idx + 1}/{state.hymn!.slides.length} · {s.selectLabel}
                  </option>
                ))}
              </select>
            )}

            <button
              type="button"
              onClick={() => stepProjectorSlide(1)}
              disabled={!canNext}
              aria-label="Next projected slide"
              title="Next slide"
              className="h-8 px-2.5 rounded-lg bg-amber-800 hover:bg-amber-700 disabled:opacity-35 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </>
        )}

        {hasHymnEnglish && state.hymn && (
          <select
            aria-label="Projector slide language"
            value={state.hymn.langMode}
            onChange={(e) => setProjectorHymnLang(e.target.value as ProjectorLangMode)}
            className="h-8 px-2 rounded-lg bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-100"
          >
            <option value="bemba">{state.hymn.languageLabel}</option>
            <option value="english">English</option>
            <option value="side-by-side">Dual</option>
          </select>
        )}

        <button
          type="button"
          onClick={() => setProjectorBlank(!state.isBlank)}
          title={
            state.isBlank
              ? 'Return from Blank Creation Slideshow to active slide'
              : 'Show rotating Creation scenes on projector'
          }
          className={`h-8 px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
            state.isBlank
              ? 'bg-emerald-700 hover:bg-emerald-600 text-white'
              : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
          }`}
        >
          {state.isBlank ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{state.isBlank ? 'Show' : 'Blank'}</span>
        </button>

        <button
          type="button"
          onClick={() => setProjectorSlideTheme(!state.isDarkSlide)}
          title={state.isDarkSlide ? 'Switch projector to White slide' : 'Switch projector to Dark slide'}
          aria-label="Toggle projector background theme"
          className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-stone-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          {state.isDarkSlide ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        <button
          type="button"
          onClick={onOpenCleanFullView}
          title="View clean projector output on this screen (Esc or double-click to return)"
          className="h-8 px-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Screen</span>
        </button>

        <a
          href={`/projector${encodeProjectorSnapshotHash(state)}`}
          target="kristu_projector_window"
          title="Open or focus dedicated clean Projector window for second monitor / projector"
          className="h-8 px-2.5 rounded-lg bg-white hover:bg-stone-100 text-stone-900 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <Monitor className="w-3.5 h-3.5 text-amber-900" />
          <span>Projector Display</span>
        </a>
      </div>
    </div>
  );
};
