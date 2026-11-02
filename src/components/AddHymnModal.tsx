import React, { useState, useMemo } from 'react';
import { X, Plus, Music, BookOpen, Eye, Check, AlertCircle, FileText } from 'lucide-react';
import { CATEGORIES_LIST, Hymn } from '../data/hymns';

interface AddHymnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveHymn: (hymn: unknown) => Promise<{ success: boolean; hymn?: Hymn; error?: string }>;
  existingNumbers?: number[];
  initialHymn?: Hymn | null;
}

export const AddHymnModal: React.FC<AddHymnModalProps> = ({
  isOpen,
  onClose,
  onSaveHymn,
  existingNumbers = [],
  initialHymn = null,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  // Form State
  const [numberStr, setNumberStr] = useState<string>(() => initialHymn ? String(initialHymn.number) : '');
  const [title, setTitle] = useState<string>(() => initialHymn?.title || '');
  const [categoryId, setCategoryId] = useState<string>(() => initialHymn?.category || 'praise-and-worship');
  const [writer, setWriter] = useState<string>(() => initialHymn?.writer || '');
  const [englishTune, setEnglishTune] = useState<string>(() => initialHymn?.englishTune || '');
  const [keySignature, setKeySignature] = useState<string>(() => initialHymn?.key || 'Ab Major');
  const [timeSignature, setTimeSignature] = useState<string>(() => initialHymn?.timeSignature || '4/4');
  const [scripture, setScripture] = useState<string>(() => initialHymn?.scripture || '');

  // Verses & Chorus Text
  const [versesText, setVersesText] = useState<string>(() => {
    if (!initialHymn) return '';
    return initialHymn.verses.map((v) => v.join('\n')).join('\n\n');
  });

  const [chorusText, setChorusText] = useState<string>(() => {
    if (!initialHymn || !initialHymn.chorus) return '';
    return initialHymn.chorus.join('\n');
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Parse raw text into structured stanzas (separated by 1 or more blank lines)
  const parsedVerses: string[][] = useMemo(() => {
    if (!versesText.trim()) return [];
    return versesText
      .split(/\n\s*\n/)
      .map((block) =>
        block
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => line.length > 0)
      )
      .filter((block) => block.length > 0);
  }, [versesText]);

  // Parse raw chorus into array of lines
  const parsedChorus: string[] | null = useMemo(() => {
    if (!chorusText.trim()) return null;
    const lines = chorusText
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    return lines.length > 0 ? lines : null;
  }, [chorusText]);

  const selectedCategoryObj = CATEGORIES_LIST.find((c) => c.id === categoryId) || CATEGORIES_LIST[0];

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const hymnNum = parseInt(numberStr.trim(), 10);
    if (isNaN(hymnNum) || hymnNum <= 0 || hymnNum > 999) {
      setErrorMessage('Nambala ya nyimbo ifwile ukuba pa kati ka 1 na 999 (Invalid hymn number).');
      return;
    }

    if (!title.trim()) {
      setErrorMessage('Lembani umutwe wa nyimbo mu Cibemba (Hymn title is required).');
      return;
    }

    if (parsedVerses.length === 0) {
      setErrorMessage('Lembani icikomo nangu cimo mu Cibemba (At least one verse is required).');
      return;
    }

    // Check for duplicate number warning if not updating
    if (!initialHymn && existingNumbers.includes(hymnNum)) {
      setErrorMessage(`Nyimbo #${hymnNum} epo ili kale. Esheni nambala imbi nangu londololeni.`);
      return;
    }

    const newHymnCandidate = {
      id: `hymn-${hymnNum}`,
      number: hymnNum,
      title: title.trim(),
      writer: englishTune.trim() || writer.trim() || '',
      englishTune: englishTune.trim() || '',
      category: selectedCategoryObj.id,
      categoryBemba: selectedCategoryObj.bemba,
      key: keySignature.trim() || 'C Major',
      timeSignature: timeSignature.trim() || '4/4',
      scripture: scripture.trim() || 'Amalumbo',
      verses: parsedVerses,
      chorus: parsedChorus,
      chorusLabel: 'Icililishi (Chorus)',
      isSample: false, // Mark as real hymn!
    };

    setIsSubmitting(true);
    try {
      const result = await onSaveHymn(newHymnCandidate);
      if (result.success) {
        setSuccessMessage(`Nyimbo #${hymnNum} yasungwa bwino mu database!`);
        setTimeout(() => {
          onClose();
        }, 800);
      } else {
        setErrorMessage(result.error || 'Failed to save hymn.');
      }
    } catch (err) {
      setErrorMessage((err as Error).message || 'Unexpected database error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-hymn-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 px-4 sm:px-6 py-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50/60 dark:bg-stone-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h2 id="add-hymn-dialog-title" className="text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
                {initialHymn ? `Lundululani Nyimbo #${initialHymn.number}` : 'Lundeniko Nyimbo Ipyani (Add Real Hymn)'}
              </h2>
              <p className="text-[11px] text-stone-500 dark:text-stone-400">
                Kristu Mu Nyimbo Database • Saves 100% offline to IndexedDB
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher: Editor vs Live Preview */}
            <div className="flex bg-stone-200/70 dark:bg-stone-800 p-0.5 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'editor'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                Lembani (Form)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  activeTab === 'preview'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Moneni (Preview)</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Cala (Close)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {errorMessage && (
            <div className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {activeTab === 'editor' ? (
            <form id="add-hymn-form" onSubmit={handleSave} className="space-y-4">
              {/* Row 1: Hymn Number & Title */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="sm:col-span-1 space-y-1">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    Nambala (Number) <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="999"
                    required
                    value={numberStr}
                    onChange={(e) => setNumberStr(e.target.value)}
                    placeholder="e.g. 1"
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm font-mono font-bold text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  />
                </div>

                <div className="sm:col-span-3 space-y-1">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    Umutwe wa Nyimbo (Bemba Title) <span className="text-amber-800">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Lelo Tulelumbanya Lesa"
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm font-semibold text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  />
                </div>
              </div>

              {/* Row 2: Category & English Tune */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    Category (Amalyashi) <span className="text-amber-800">*</span>
                  </label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  >
                    {CATEGORIES_LIST.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.number}. {cat.bemba} ({cat.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    Umutwe wa Cisungu (English Title)
                  </label>
                  <input
                    type="text"
                    value={englishTune}
                    onChange={(e) => setEnglishTune(e.target.value)}
                    placeholder="e.g. Watchman Blow Your Trumpet / The Coming King"
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  />
                </div>
              </div>

              {/* Row 3: Writer & Musical Key */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                    Writer / Author (Optional)
                  </label>
                  <input
                    type="text"
                    value={writer}
                    onChange={(e) => setWriter(e.target.value)}
                    placeholder="e.g. Fanny J. Crosby"
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                    Key (e.g. Ab, G, C)
                  </label>
                  <input
                    type="text"
                    value={keySignature}
                    onChange={(e) => setKeySignature(e.target.value)}
                    placeholder="e.g. Ab Major"
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                    Scripture (Optional)
                  </label>
                  <input
                    type="text"
                    value={scripture}
                    onChange={(e) => setScripture(e.target.value)}
                    placeholder="e.g. Amalumbo 100:1-4"
                    className="w-full h-10 px-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                  />
                </div>
              </div>

              {/* Verses / Fikomo Text Area */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-amber-800 dark:text-amber-400" />
                    <span>Fikomo fya Nyimbo (Verses / Stanzas)</span>
                    <span className="text-amber-800">*</span>
                  </label>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {parsedVerses.length} {parsedVerses.length === 1 ? 'cikomo' : 'fikomo'}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">
                  Lembani amashiwi. Kuti mwalekanya ifikomo, lekeni umupaka umulungatene (Separate stanzas with an empty blank line).
                </p>
                <textarea
                  rows={8}
                  required
                  value={versesText}
                  onChange={(e) => setVersesText(e.target.value)}
                  placeholder={`Lelo tulelumbanya Lesa wa muulu,\nKu fintu fikulu ifyo acitila fwe;\nApeele Umwana wakwe uwatemwikwa,\nUkuti alubule abamutetekela.\n\nO lilumbanyeni ishina lya Mfumu,\nMwe bantu bonse abapemba kuli Wene;\nKuli Yesu Kristu twakwata umutende,\nNo bupe bwa mweo uushakapwe nakalya.`}
                  className="w-full p-3 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm font-serif leading-relaxed text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                />
              </div>

              {/* Chorus / Icililishi Text Area */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-stone-700 dark:text-stone-300">
                    Icililishi (Chorus / Refrain) - Optional
                  </label>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {parsedChorus ? `${parsedChorus.length} lines` : 'None'}
                  </span>
                </div>
                <textarea
                  rows={3}
                  value={chorusText}
                  onChange={(e) => setChorusText(e.target.value)}
                  placeholder={`Lumbanya! Lumbanya! Isuule amashiwi!\nLumbanya! Lumbanya! Iseni kuli Lesa!`}
                  className="w-full p-3 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm font-serif italic leading-relaxed text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-800/30"
                />
              </div>
            </form>
          ) : (
            /* Live Preview Mode */
            <div className="space-y-5">
              <div className="text-center pb-4 border-b border-stone-200 dark:border-stone-800">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-900 dark:text-amber-400">
                  NYIMBO #{numberStr || '?'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mt-1">
                  {title || 'Umutwe wa Nyimbo'}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs text-stone-500 dark:text-stone-400 mt-1.5 flex-wrap">
                  <span>{selectedCategoryObj.bemba}</span>
                  <span>•</span>
                  <span>{englishTune || 'Traditional Tune'}</span>
                  <span>•</span>
                  <span>{keySignature || 'Key'}</span>
                </div>
              </div>

              {parsedVerses.length === 0 ? (
                <div className="py-8 text-center text-xs text-stone-400 italic">
                  Tapali amashiwi yalembelwe. Bweleleni pa Form pa kulemba ifikomo.
                </div>
              ) : (
                <div className="space-y-5">
                  {parsedVerses.map((verseLines, vIdx) => (
                    <div key={vIdx} className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                          {vIdx + 1}
                        </span>
                        <div className="space-y-1 font-serif text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200">
                          {verseLines.map((line, lIdx) => (
                            <p key={lIdx}>{line}</p>
                          ))}
                        </div>
                      </div>

                      {/* Show chorus after verse 1 if chorus exists */}
                      {vIdx === 0 && parsedChorus && (
                        <div className="my-3 p-3.5 rounded-xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 ml-9">
                          <div className="text-[11px] font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider mb-1">
                            Icililishi (Chorus)
                          </div>
                          <div className="space-y-0.5 font-serif italic text-sm text-stone-800 dark:text-stone-200">
                            {parsedChorus.map((cline, cIdx) => (
                              <p key={cIdx}>{cline}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="shrink-0 px-4 sm:px-6 py-3.5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/60 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-medium hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            Cala (Cancel)
          </button>

          <button
            type="submit"
            form="add-hymn-form"
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-950 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Check className="w-4 h-4" />
            <span>{isSubmitting ? 'Pelekeni...' : 'Sungeni mu Database (Save to IndexedDB)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
