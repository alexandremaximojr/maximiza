import React from 'react';
import { cn } from '../utils';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type AvatarVariant = 'circular' | 'rounded';

interface AvatarProps {
  src?: string;
  alt?: string;
  /** Initials to show when no image is provided */
  initials?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-20 w-20 text-xl',
};

const variantClasses: Record<AvatarVariant, string> = {
  circular: 'rounded-full',
  rounded:  'rounded-xl',
};

export const Avatar = ({
  src,
  alt = '',
  initials,
  size = 'md',
  variant = 'circular',
  className,
}: AvatarProps) => {
  const base = cn(
    'inline-flex items-center justify-center overflow-hidden shrink-0',
    'bg-gradient-brand text-white font-semibold font-body select-none',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn(base, 'object-cover')}
      />
    );
  }

  return (
    <span className={base} aria-label={alt || initials}>
      {initials ?? '?'}
    </span>
  );
};
