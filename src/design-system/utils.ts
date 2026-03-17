/**
 * Utility to merge Tailwind class names conditionally.
 * Lightweight alternative to clsx + tailwind-merge without extra deps.
 */
export function cn(...classes: (string | undefined | null | false | 0)[]): string {
  return classes.filter(Boolean).join(' ');
}
