import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, error, hint, placeholder, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium font-body text-brand-navy-corp">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            className={cn(
              'w-full appearance-none rounded-xl px-4 py-3 pr-10 text-sm font-body',
              'bg-white border border-gray-200 text-brand-navy',
              'transition-all duration-200 cursor-pointer',
              'focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary',
              error && 'border-semantic-error-500 focus:border-semantic-error-500 focus:ring-semantic-error-500/20',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray"
            aria-hidden="true"
          />
        </div>
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

Select.displayName = 'Select';
