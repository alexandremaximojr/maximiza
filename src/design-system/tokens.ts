/**
 * maximiza.AI Design Tokens
 * Single source of truth for brand colors, typography, spacing, and visual identity.
 */

export const colors = {
  brand: {
    primary: '#5B9CFF',   // Electric Blue – CTAs, links, highlights
    cyan: '#4FACFE',      // Smart Cyan – accents, tech feel
    green: '#90FF9F',     // Results Green – success, metrics
    navy: '#0F1848',      // Dark Navy – main bg (dark sections)
    navyCorp: '#0E2A56',  // Corporate Navy – secondary bg
    navyDeep: '#1B365D',  // Deep Blue – cards on dark bg
    gray: '#64748B',      // Neutral Gray – muted text
    offWhite: '#F8FAFC',  // Off White – main bg (light sections)
    white: '#FFFFFF',
  },
  semantic: {
    success: { 50: '#F0FFF4', 100: '#C6F6D5', 500: '#38A169', 600: '#2F855A' },
    warning: { 50: '#FFFBEB', 100: '#FEF3C7', 500: '#D97706', 600: '#B45309' },
    error:   { 50: '#FFF5F5', 100: '#FED7D7', 500: '#E53E3E', 600: '#C53030' },
    info:    { 50: '#EBF8FF', 100: '#BEE3F8', 500: '#3182CE', 600: '#2B6CB0' },
  },
} as const;

export const gradients = {
  brand: 'linear-gradient(135deg, #5B9CFF, #4FACFE)',
  success: 'linear-gradient(135deg, #90FF9F, #4FACFE)',
  dark: 'linear-gradient(180deg, #0F1848 0%, #0E2A56 100%)',
} as const;

export const fonts = {
  heading: '"Plus Jakarta Sans", sans-serif',
  body: '"Inter", sans-serif',
} as const;

export const shadows = {
  glowPrimary: '0 0 30px rgba(91,156,255,0.3)',
  glowGreen: '0 0 30px rgba(144,255,159,0.25)',
  glowCyan: '0 0 30px rgba(79,172,254,0.25)',
  card: '0 4px 24px rgba(0,0,0,0.08)',
  cardHover: '0 12px 40px rgba(0,0,0,0.16)',
} as const;

export const radii = {
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  '2xl': '2rem',   // 32px
  full: '9999px',
} as const;

export const spacing = {
  sectionY: 'py-20 lg:py-24',
  containerX: 'px-4 sm:px-6 lg:px-8',
  containerMax: 'max-w-7xl mx-auto',
} as const;
