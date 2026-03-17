import React from 'react';
import { cn } from '../utils';

interface SkeletonProps {
  className?: string;
  /** Número de linhas (cria um bloco de texto skeleton) */
  lines?: number;
}

/** Linha/bloco de loading state. Respeita prefers-reduced-motion. */
export const Skeleton = ({ className, lines }: SkeletonProps) => {
  if (lines && lines > 1) {
    return (
      <div className="space-y-2" aria-busy="true" aria-label="Carregando...">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-4 rounded-lg bg-gray-200 animate-pulse',
              i === lines - 1 ? 'w-3/4' : 'w-full'
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-busy="true"
      aria-label="Carregando..."
      className={cn('rounded-lg bg-gray-200 animate-pulse', className)}
    />
  );
};

/** Skeleton pré-montado para um card */
export const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn('bg-white rounded-2xl p-6 shadow-card space-y-4', className)} aria-busy="true">
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
    <Skeleton lines={3} />
    <Skeleton className="h-9 w-full rounded-xl" />
  </div>
);
