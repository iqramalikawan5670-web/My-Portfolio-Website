import React from 'react';

export interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'symbol-only' | 'full' | 'avatar' | 'favicon';
  theme?: 'gradient' | 'dark' | 'white' | 'metallic';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const OFFICIAL_LOGO_SRC = '/src/assets/images/iqra_malik_official_logo.jpg';

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'gradient',
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick
}) => {
  const sizeMap = {
    xs: { h: 'h-8 sm:h-9', icon: 'w-8 h-8' },
    sm: { h: 'h-10 sm:h-11', icon: 'w-10 h-10' },
    md: { h: 'h-12 sm:h-14', icon: 'w-12 h-12' },
    lg: { h: 'h-16 sm:h-20', icon: 'w-16 h-16' },
    xl: { h: 'h-24 sm:h-28', icon: 'w-24 h-24' },
    '2xl': { h: 'h-32 sm:h-40', icon: 'w-32 h-32' }
  };

  const currentSize = sizeMap[size];

  // Symbol only (Circular crop of the 3D orbital mark)
  if (variant === 'symbol-only' || variant === 'favicon') {
    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-2xl overflow-hidden bg-white border border-purple-200/80 shadow-xs transition-transform duration-300 group-hover:scale-105 cursor-pointer ${currentSize.icon} ${className}`}
        onClick={onClick}
      >
        <img
          src={OFFICIAL_LOGO_SRC}
          alt="Iqra Malik Brand Symbol"
          className="w-[185%] h-[185%] max-w-none object-cover object-top -translate-y-1.5"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Avatar Badge variant
  if (variant === 'avatar') {
    return (
      <div
        className={`relative rounded-2xl p-1 bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] shadow-md group cursor-pointer ${className}`}
        onClick={onClick}
      >
        <div className="w-full h-full rounded-[14px] bg-white p-1.5 flex items-center justify-center overflow-hidden">
          <img
            src={OFFICIAL_LOGO_SRC}
            alt="Iqra Malik Official Avatar"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // Full & Stacked variants
  if (variant === 'stacked' || variant === 'full') {
    return (
      <div
        className={`inline-flex flex-col items-center text-center cursor-pointer group transition-transform duration-300 hover:scale-105 ${className}`}
        onClick={onClick}
      >
        <div className="p-2 sm:p-2.5 rounded-2xl bg-white/95 border border-purple-200/80 shadow-md">
          <img
            src={OFFICIAL_LOGO_SRC}
            alt="Iqra Malik - WordPress & Web Developer Official Logo"
            className={`${currentSize.h} w-auto object-contain rounded-xl`}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  // Horizontal variant (default used in Navbar & Header)
  return (
    <div
      className={`inline-flex items-center cursor-pointer group select-none transition-transform duration-300 hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className="relative p-1 sm:p-1.5 rounded-xl bg-white/95 border border-purple-200/80 shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
        <img
          src={OFFICIAL_LOGO_SRC}
          alt="Iqra Malik - WordPress & Web Developer"
          className={`${currentSize.h} w-auto object-contain rounded-lg`}
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};
