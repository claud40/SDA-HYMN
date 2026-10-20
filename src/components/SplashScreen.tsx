import React, { useState, useEffect } from 'react';
import { AdventistLogo } from './AdventistLogo';

interface SplashScreenProps {
  onFinish: () => void;
  minDurationMs?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onFinish,
  minDurationMs = 1900,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / minDurationMs) * 100));
      setProgress(pct);

      if (elapsed >= minDurationMs) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [minDurationMs]);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onFinish();
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-label="App Opening Splash Screen"
      onClick={handleDismiss}
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center select-none cursor-pointer transition-all duration-500 ${
        isFadingOut
          ? 'opacity-0 scale-102 pointer-events-none'
          : 'opacity-100 scale-100'
      } bg-[#0c0a09] text-stone-100 overflow-hidden`}
    >
      {/* Background Sacred Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] bg-amber-600/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-amber-400/20 rounded-full blur-[60px]" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full space-y-6">
        {/* Glowing Adventist Emblem */}
        <div className="relative">
          <div className="absolute -inset-6 bg-amber-500/25 rounded-full blur-2xl animate-pulse" />
          <div className="relative p-4 rounded-3xl bg-white shadow-2xl ring-2 ring-amber-500/40 flex items-center justify-center">
            <img
              src="/assets/aistudio/image_0ecea644.png"
              alt="Seventh-day Adventist Church Official Emblem"
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-sm select-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Hymnal Title & Subtitle */}
        <div className="space-y-1.5">
          <div className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
            Seventh-day Adventist Church
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-md">
            Kristu Mu Nyimbo
          </h1>

          <p className="text-xs sm:text-sm text-stone-400 font-sans tracking-wide">
            Bemba Hymnal Edition • Inyimbo sha Basabata
          </p>
        </div>

        {/* Elegant Gold Progress Loading Indicator */}
        <div className="w-full max-w-[200px] pt-3 space-y-2">
          <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(245,158,11,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-stone-500 font-mono">
            <span>Opening...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Tap to skip hint */}
        <div className="pt-4 text-[10px] text-stone-500 tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity">
          Tap anywhere to open
        </div>
      </div>

      {/* Bottom Denominational Note */}
      <div className="absolute bottom-6 text-center text-[10px] text-stone-500/80 tracking-wider">
        Zambia Union Conference • 100% Offline
      </div>
    </div>
  );
};
