import React from 'react';
import { cn } from '../utils';

export type ButtonVariant = 'primary' | 'cta' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  /** Blue gradient – main action */
  primary: 'bg-gradient-brand text-white hover:shadow-glow-primary',
  /** Green gradient + pulse – highest-priority CTA */
  cta: 'bg-gradient-success text-white hover:shadow-glow-green animate-pulse-gentle',
  /** Dark navy + blue border – secondary actions on dark bg */
  secondary: 'bg-brand-navy-deep text-white border border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary/10',
  /** Transparent text – nav links, tertiary actions */
  ghost: 'text-white hover:text-brand-primary hover:bg-brand-primary/10',
  /** Outlined – on light backgrounds */
  outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
  xl: 'px-10 py-5 text-xl rounded-xl',
};

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

export const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'font-semibold font-body transition-all duration-200 hover:scale-105',
        'inline-flex items-center justify-center gap-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};
