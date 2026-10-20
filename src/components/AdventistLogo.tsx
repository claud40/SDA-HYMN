import React, { useState } from 'react';

export const ADVENTIST_LOGO_PATH = '/assets/aistudio/image_0ecea644.png';

interface AdventistLogoProps {
  className?: string;
  size?: number;
  variant?: 'gold' | 'monochrome' | 'white' | 'official-image';
  useImage?: boolean;
}

/**
 * Official Seventh-day Adventist Church Emblem
 * Features:
 * 1. Open Bible at the base
 * 2. Cross of Christ in the center
 * 3. Three dynamic upward-sweeping flames (The Holy Spirit & The Three Angels' Messages)
 */
export const AdventistLogo: React.FC<AdventistLogoProps> = ({
  className = 'w-16 h-16',
  size,
  variant = 'gold',
  useImage = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const style = size ? { width: size, height: size } : undefined;

  // Render official church emblem image if enabled and loaded successfully
  if (useImage && !imageError) {
    return (
      <img
        src={ADVENTIST_LOGO_PATH}
        alt="Seventh-day Adventist Church Emblem"
        className={`object-contain ${className}`}
        style={style}
        onError={() => setImageError(true)}
      />
    );
  }

  // Color schemes
  const colors = {
    gold: {
      flameLeft: '#D97706',
      flameCenter: '#F59E0B',
      flameRight: '#B45309',
      cross: '#FBBF24',
      bible: '#FDE68A',
      biblePage: '#FFFBEB',
      accent: '#78350F',
    },
    monochrome: {
      flameLeft: 'currentColor',
      flameCenter: 'currentColor',
      flameRight: 'currentColor',
      cross: 'currentColor',
      bible: 'currentColor',
      biblePage: 'currentColor',
      accent: 'currentColor',
    },
    white: {
      flameLeft: '#FFFFFF',
      flameCenter: '#F8FAFC',
      flameRight: '#E2E8F0',
      cross: '#FFFFFF',
      bible: '#F1F5F9',
      biblePage: '#FFFFFF',
      accent: '#CBD5E1',
    },
    'official-image': {
      flameLeft: '#D97706',
      flameCenter: '#F59E0B',
      flameRight: '#B45309',
      cross: '#FBBF24',
      bible: '#FDE68A',
      biblePage: '#FFFBEB',
      accent: '#78350F',
    },
  }[variant];

  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Seventh-day Adventist Church Logo"
    >
      <defs>
        <linearGradient id="sdaFlameGradLeft" x1="40" y1="180" x2="110" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="sdaFlameGradCenter" x1="100" y1="170" x2="120" y2="25" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FEF08A" />
        </linearGradient>
        <linearGradient id="sdaFlameGradRight" x1="200" y1="180" x2="130" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="sdaCrossGrad" x1="120" y1="50" x2="120" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <filter id="sdaGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer subtle halo ring */}
      <circle cx="120" cy="120" r="110" stroke={variant === 'gold' ? '#F59E0B' : 'currentColor'} strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 4" />

      {/* --- THREE FLAMES OF THE HOLY SPIRIT & 3 ANGELS' MESSAGES --- */}
      {/* Left Outer Flame */}
      <path
        d="M 52 165 C 44 140, 48 105, 68 78 C 84 56, 106 42, 115 32 C 108 52, 95 72, 85 92 C 75 112, 70 135, 76 155 C 67 160, 58 163, 52 165 Z"
        fill={variant === 'gold' ? 'url(#sdaFlameGradLeft)' : colors.flameLeft}
        opacity={variant === 'gold' ? 0.95 : 0.9}
      />

      {/* Left Inner Flame Line Accent */}
      <path
        d="M 76 155 C 72 135, 78 115, 88 96 C 96 80, 108 65, 116 52 C 112 68, 105 84, 98 100 C 90 120, 86 140, 90 156 Z"
        fill={variant === 'gold' ? '#FEF08A' : colors.flameCenter}
        opacity="0.8"
      />

      {/* Right Outer Flame */}
      <path
        d="M 188 165 C 196 140, 192 105, 172 78 C 156 56, 134 42, 125 32 C 132 52, 145 72, 155 92 C 165 112, 170 135, 164 155 C 173 160, 182 163, 188 165 Z"
        fill={variant === 'gold' ? 'url(#sdaFlameGradRight)' : colors.flameRight}
        opacity={variant === 'gold' ? 0.95 : 0.9}
      />

      {/* Right Inner Flame Line Accent */}
      <path
        d="M 164 155 C 168 135, 162 115, 152 96 C 144 80, 132 65, 124 52 C 128 68, 135 84, 142 100 C 150 120, 154 140, 150 156 Z"
        fill={variant === 'gold' ? '#FBBF24' : colors.flameCenter}
        opacity="0.8"
      />

      {/* Center Rising Flame */}
      <path
        d="M 112 165 C 104 135, 106 100, 114 70 C 117 56, 119 40, 120 26 C 121 40, 123 56, 126 70 C 134 100, 136 135, 128 165 Z"
        fill={variant === 'gold' ? 'url(#sdaFlameGradCenter)' : colors.flameCenter}
        filter={variant === 'gold' ? 'url(#sdaGlow)' : undefined}
      />

      {/* --- THE CENTRAL CROSS OF CHRIST --- */}
      {/* Vertical Cross Beam */}
      <path
        d="M 116 58 L 124 58 L 124 168 L 116 168 Z"
        fill={variant === 'gold' ? 'url(#sdaCrossGrad)' : colors.cross}
        stroke="#78350F"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* Horizontal Cross Beam */}
      <path
        d="M 98 88 L 142 88 L 142 96 L 98 96 Z"
        fill={variant === 'gold' ? 'url(#sdaCrossGrad)' : colors.cross}
        stroke="#78350F"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* Cross Center Highlight */}
      <circle cx="120" cy="92" r="2.5" fill="#FFFFFF" opacity="0.9" />

      {/* --- THE OPEN BIBLE AT THE BASE --- */}
      {/* Left Page Shadow / Base */}
      <path
        d="M 50 178 C 80 168, 105 174, 120 182 L 120 196 C 105 188, 80 182, 50 192 Z"
        fill="#92400E"
        opacity="0.8"
      />

      {/* Right Page Shadow / Base */}
      <path
        d="M 190 178 C 160 168, 135 174, 120 182 L 120 196 C 135 188, 160 182, 190 192 Z"
        fill="#78350F"
        opacity="0.8"
      />

      {/* Left Open Page */}
      <path
        d="M 52 172 C 82 162, 106 167, 120 176 L 120 189 C 106 180, 82 175, 52 185 Z"
        fill={variant === 'gold' ? '#FFFBEB' : colors.biblePage}
        stroke="#B45309"
        strokeWidth="1.2"
      />

      {/* Right Open Page */}
      <path
        d="M 188 172 C 158 162, 134 167, 120 176 L 120 189 C 134 180, 158 175, 188 185 Z"
        fill={variant === 'gold' ? '#FEF3C7' : colors.biblePage}
        stroke="#B45309"
        strokeWidth="1.2"
      />

      {/* Page Lines (representing scriptures) */}
      <line x1="66" y1="174" x2="108" y2="171" stroke="#D97706" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="66" y1="178" x2="108" y2="175" stroke="#D97706" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="132" y1="171" x2="174" y2="174" stroke="#D97706" strokeWidth="1" strokeOpacity="0.6" />
      <line x1="132" y1="175" x2="174" y2="178" stroke="#D97706" strokeWidth="1" strokeOpacity="0.6" />

      {/* Center Spine Marker */}
      <line x1="120" y1="172" x2="120" y2="195" stroke="#78350F" strokeWidth="2" />
    </svg>
  );
};
