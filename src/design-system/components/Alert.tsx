import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';
import { cn } from '../utils';

export type AlertVariant = 'success' | 'warning' | 'error' | 'info';

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const variantConfig: Record<AlertVariant, { icon: React.ElementType; classes: string }> = {
  success: { icon: CheckCircle,    classes: 'bg-semantic-success-50 border-semantic-success-500 text-semantic-success-600' },
  warning: { icon: AlertTriangle,  classes: 'bg-semantic-warning-50 border-semantic-warning-500 text-semantic-warning-600' },
  error:   { icon: XCircle,        classes: 'bg-semantic-error-50   border-semantic-error-500   text-semantic-error-600'   },
  info:    { icon: Info,           classes: 'bg-semantic-info-50    border-semantic-info-500    text-semantic-info-600'    },
};

export const Alert = ({ variant = 'info', title, children, onDismiss, className }: AlertProps) => {
  const { icon: Icon, classes } = variantConfig[variant];

  return (
    <div
      role="alert"
      className={cn('flex gap-3 rounded-xl border p-4', classes, className)}
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold font-heading mb-1">{title}</p>}
        <div className="text-sm font-body leading-relaxed">{children}</div>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-0.5 rounded hover:opacity-70 transition-opacity"
          aria-label="Dispensar alerta"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
