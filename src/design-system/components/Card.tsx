import React from 'react';
import { cn } from '../utils';

export type CardVariant = 'glass' | 'white' | 'dark' | 'bordered';

interface CardProps {
  variant?: CardVariant;
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  /** Frosted glass – on dark / navy backgrounds */
  glass: 'bg-white/5 backdrop-blur-sm border border-white/10',
  /** Solid white – on light backgrounds */
  white: 'bg-white shadow-card',
  /** Deep navy – on lighter dark backgrounds */
  dark: 'bg-brand-navy-deep border border-white/5',
  /** Highlighted border – for featured cards */
  bordered: 'bg-white/5 border-2 border-brand-primary/40',
};

export const Card = ({
  variant = 'white',
  hoverable = false,
  className,
  children,
}: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-8',
        variantClasses[variant],
        hoverable &&
          'hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-default',
        className
      )}
    >
      {children}
    </div>
  );
};
