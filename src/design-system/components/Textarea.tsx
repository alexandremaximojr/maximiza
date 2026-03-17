import React from 'react';
import { cn } from '../utils';

export type TextareaVariant = 'default' | 'glass' | 'minimal';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  label?: string;
  error?: string;
  hint?: string;
}

const variantClasses: Record<TextareaVariant, string> = {
  default: 'bg-white border border-gray-200 focus:border-brand-primary text-brand-navy placeholder-brand-gray',
  glass:   'bg-white/5 border border-white/20 focus:border-brand-primary/60 text-white placeholder-white/40',
  minimal: 'bg-transparent border-b border-gray-300 focus:border-brand-primary rounded-none px-0 text-brand-navy placeholder-brand-gray',
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant = 'default', label, error, hint, className, id, rows = 4, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium font-body text-brand-navy-corp">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          className={cn(
            'w-full rounded-xl px-4 py-3 text-sm font-body transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-brand-primary/30',
            'resize-y min-h-[96px]',
            variantClasses[variant],
            error && 'border-semantic-error-500 focus:border-semantic-error-500 focus:ring-semantic-error-500/20',
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} role="alert" className="text-xs text-semantic-error-500 font-body">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-brand-gray font-body">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
