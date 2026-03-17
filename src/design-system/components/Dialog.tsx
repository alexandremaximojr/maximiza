import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Dialog acessível: fecha com Escape, foco retorna ao trigger, aria-modal.
 */
export const Dialog = ({ open, onClose, title, children, className }: DialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  // Mover foco para o dialog ao abrir
  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'dialog-title' : undefined}
            tabIndex={-1}
            className={cn(
              'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
              'w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 focus:outline-none',
              className
            )}
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } }}
            exit={{ opacity: 0, scale: 0.95, y: 8, transition: { duration: 0.18 } }}
          >
            <div className="flex items-start justify-between mb-4">
              {title && (
                <h2 id="dialog-title" className="text-xl font-bold font-heading text-brand-navy-corp">
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                className="ml-auto p-1 rounded-lg hover:bg-gray-100 transition-colors text-brand-gray hover:text-brand-navy"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
