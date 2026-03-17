import React from 'react';
import { cn } from '../utils';

interface FormGroupProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Semantic wrapper for form fields.
 * Provides consistent vertical spacing between fields.
 */
export const FormGroup = ({ children, className }: FormGroupProps) => (
  <div className={cn('flex flex-col gap-4', className)}>
    {children}
  </div>
);
