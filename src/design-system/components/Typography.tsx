import React from 'react';
import { cn } from '../utils';

// ─── Heading ─────────────────────────────────────────────────────────────────

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
}

const headingSize: Record<HeadingLevel, string> = {
  1: 'text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight',
  2: 'text-3xl lg:text-4xl font-bold leading-snug',
  3: 'text-2xl font-bold leading-snug',
  4: 'text-xl font-semibold',
};

export const Heading = ({
  level = 2,
  gradient = false,
  className,
  children,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return (
    <Tag
      className={cn(
        'font-heading',
        headingSize[level],
        gradient && 'text-gradient',
        className
      )}
    >
      {children}
    </Tag>
  );
};

// ─── Text ─────────────────────────────────────────────────────────────────────

interface TextProps {
  size?: 'sm' | 'base' | 'lg' | 'xl';
  muted?: boolean;
  className?: string;
  children: React.ReactNode;
}

const textSize: Record<NonNullable<TextProps['size']>, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export const Text = ({
  size = 'base',
  muted = false,
  className,
  children,
}: TextProps) => {
  return (
    <p
      className={cn(
        'font-body leading-relaxed',
        textSize[size],
        muted ? 'opacity-60' : 'opacity-80',
        className
      )}
    >
      {children}
    </p>
  );
};

// ─── GradientText ─────────────────────────────────────────────────────────────

interface GradientTextProps {
  className?: string;
  children: React.ReactNode;
}

export const GradientText = ({ className, children }: GradientTextProps) => (
  <span className={cn('text-gradient', className)}>{children}</span>
);
