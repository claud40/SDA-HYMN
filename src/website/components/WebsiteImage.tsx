import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface WebsiteImageProps {
  src: string;
  alt: string;
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
  caption?: string;
}

/**
 * Responsive image component with graceful fallback and accessibility attributes.
 */
export const WebsiteImage: React.FC<WebsiteImageProps> = ({
  src,
  alt,
  aspectClassName = 'aspect-4/3',
  className = '',
  priority = false,
  caption,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`overflow-hidden rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 ${className}`}>
      <div className={`relative w-full ${aspectClassName} overflow-hidden bg-stone-100 dark:bg-stone-900`}>
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 gap-2">
            <BookOpen className="w-8 h-8 text-amber-800/60 dark:text-amber-400/60" />
            <span className="text-xs font-medium max-w-xs">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="px-4 py-2.5 text-xs text-stone-500 dark:text-stone-400 bg-white dark:bg-stone-900 border-t border-stone-200/70 dark:border-stone-800">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
