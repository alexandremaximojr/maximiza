import React from 'react';
import { cn } from '../utils';

export type InputVariant = 'default' | 'error' | 'success';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  variant?: InputVariant;
}

const baseInput =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm font-body text-brand-navy ' +
  'placeholder:text-brand-gray transition-all duration-200 ' +
  'focus:outline-none focus:ring-2 focus:ring-offset-0';

const variantClasses: Record<InputVariant, string> = {
  default: 'border-gray-300 focus:border-brand-primary focus:ring-brand-primary/30',
  error:   'border-semantic-error-500 focus:border-semantic-error-500 focus:ring-semantic-error-500/30 bg-semantic-error-50',
  success: 'border-semantic-success-500 focus:border-semantic-success-500 focus:ring-semantic-success-500/30 bg-semantic-success-50',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      variant = 'default',
      id,
      className,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const helperId = inputId ? `${inputId}-helper` : undefined;
    const resolvedVariant: InputVariant = errorMessage ? 'error' : variant;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold font-body text-brand-navy"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-describedby={helperId}
          aria-invalid={resolvedVariant === 'error'}
          className={cn(baseInput, variantClasses[resolvedVariant], className)}
          {...props}
        />

        {(errorMessage || helperText) && (
          <p
            id={helperId}
            className={cn(
              'text-xs font-body',
              errorMessage ? 'text-semantic-error-600' : 'text-brand-gray'
            )}
          >
            {errorMessage ?? helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
