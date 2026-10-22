import React, { useState } from 'react';
import { Delete, ArrowRight, X, Hash } from 'lucide-react';
import { SAMPLE_HYMNS, Hymn } from '../data/hymns';

interface NumericDialpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectHymn: (hymn: Hymn) => void;
  allHymns?: Hymn[];
}

export const NumericDialpadModal: React.FC<NumericDialpadModalProps> = ({
  isOpen,
  onClose,
  onSelectHymn,
  allHymns = SAMPLE_HYMNS,
}) => {
  const [digits, setDigits] = useState<string>('');

  const currentNumber = parseInt(digits, 10);
  const matchedHymn = !isNaN(currentNumber)
    ? allHymns.find((h) => h.number === currentNumber)
    : null;

  const handleDigit = (digit: string) => {
    if (digits.length < 3) {
      setDigits((prev) => prev + digit);
    }
  };

  const handleBackspace = () => {
    setDigits((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setDigits('');
  };

  const handleConfirm = () => {
    if (matchedHymn) {
      onSelectHymn(matchedHymn);
      setDigits('');
      onClose();
    }
  };

  // Physical keyboard support for Windows desktop / laptops
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Enter') {
        if (matchedHymn) {
          handleConfirm();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, digits, matchedHymn]);

  if (!isOpen) return null;

  const keypadKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[310px] max-h-[90vh] flex flex-col bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Selector 1) */}
        <div className="flex items-center justify-between px-4 py-2.5 sm:py-3 border-b border-stone-100 dark:border-stone-800 shrink-0">
          <div className="flex items-center gap-1.5">
            <Hash className="w-4 h-4 text-amber-700 dark:text-amber-500" />
            <h2 className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
              Nambala ya Nyimbo
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Cala / Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body if screen is short */}
        <div className="overflow-y-auto flex-1">
          {/* Display Field (Selector 2) */}
          <div className="px-4 py-2.5 bg-stone-50 dark:bg-stone-950/40 text-center border-b border-stone-100 dark:border-stone-800">
            <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium mb-0.5">
              Lembani Nambala (Type Hymn Number)
            </div>
            <div className="h-9 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 tracking-wider">
                {digits || <span className="text-stone-300 dark:text-stone-700">—</span>}
              </span>
            </div>
            {/* Real-time matched hymn preview */}
            <div className="min-h-4 mt-0.5">
              {matchedHymn ? (
                <p className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 truncate">
                  #{matchedHymn.number} · {matchedHymn.title}
                </p>
              ) : digits ? (
                <p className="text-[11px] text-stone-400 truncate">
                  Tapali nyimbo #{digits} (Try 1, 7, 18, 33, 49)
                </p>
              ) : null}
            </div>
          </div>

          {/* Keypad Grid (Selector 3) */}
          <div className="p-3 sm:p-3.5 grid grid-cols-3 gap-2">
            {keypadKeys.map((digit) => (
              <button
                key={digit}
                type="button"
                onClick={() => handleDigit(digit)}
                className="h-10 sm:h-11 min-h-[40px] rounded-lg text-lg font-semibold text-stone-800 dark:text-stone-200 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 active:scale-95 transition-all flex items-center justify-center"
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              onClick={handleClear}
              className="h-10 sm:h-11 min-h-[40px] rounded-lg text-xs font-medium text-stone-600 dark:text-stone-400 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/60 dark:hover:bg-stone-700 active:scale-95 transition-all flex items-center justify-center"
            >
              Futa (Clear)
            </button>
            <button
              type="button"
              onClick={() => handleDigit('0')}
              className="h-10 sm:h-11 min-h-[40px] rounded-lg text-lg font-semibold text-stone-800 dark:text-stone-200 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 active:scale-95 transition-all flex items-center justify-center"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleBackspace}
              aria-label="Delete last digit"
              className="h-10 sm:h-11 min-h-[40px] rounded-lg text-stone-600 dark:text-stone-400 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800/60 dark:hover:bg-stone-700 active:scale-95 transition-all flex items-center justify-center"
            >
              <Delete className="w-4 h-4" />
            </button>
          </div>

          {/* Action Button */}
          <div className="p-3 sm:p-3.5 pt-0">
            <button
              type="button"
              disabled={!matchedHymn}
              onClick={handleConfirm}
              className={`w-full h-10 min-h-[40px] rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                matchedHymn
                  ? 'bg-amber-800 hover:bg-amber-900 text-white active:scale-[0.98]'
                  : 'bg-stone-200 text-stone-400 dark:bg-stone-800 dark:text-stone-600 cursor-not-allowed'
              }`}
            >
              <span>Isuleni Nyimbo (Open Hymn)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
