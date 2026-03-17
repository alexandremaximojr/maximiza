import React from 'react';
import { cn } from '../utils';

export type BadgeVariant = 'primary' | 'success' | 'cyan' | 'warning' | 'neutral';

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-brand-primary/10 text-brand-primary',
  success: 'bg-brand-green/15 text-brand-green',
  cyan: 'bg-brand-cyan/15 text-brand-cyan',
  warning: 'bg-yellow-400/15 text-yellow-300',
  neutral: 'bg-white/10 text-white/70',
};

export const Badge = ({
  variant = 'primary',
  className,
  children,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
