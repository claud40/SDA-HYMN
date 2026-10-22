import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-18 md:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/95 dark:bg-stone-100/95 text-stone-100 dark:text-stone-900 text-[11px] font-medium shadow-lg backdrop-blur-sm border border-stone-700/60 dark:border-stone-300/60 pointer-events-none animate-in fade-in duration-200"
    >
      <WifiOff className="w-3.5 h-3.5 text-amber-400 dark:text-amber-700 shrink-0" />
      <span>Offline Mode — All hymns available from local cache</span>
    </div>
  );
};
