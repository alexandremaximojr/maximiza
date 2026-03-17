import React from 'react';
import { cn } from '../utils';

export type SectionVariant = 'dark' | 'light' | 'navy';

interface SectionProps {
  variant?: SectionVariant;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<SectionVariant, string> = {
  dark: 'bg-brand-navy text-white',
  light: 'bg-brand-off-white text-brand-navy-corp',
  navy: 'bg-brand-navy-corp text-white',
};

export const Section = ({
  variant = 'light',
  id,
  className,
  children,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('py-20 lg:py-24', variantClasses[variant], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

/** Reusable section header block */
interface SectionHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)}>
      {badge && <div className="mb-6">{badge}</div>}
      <div className="text-3xl lg:text-4xl font-bold font-heading leading-tight mb-6">
        {title}
      </div>
      {subtitle && (
        <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
