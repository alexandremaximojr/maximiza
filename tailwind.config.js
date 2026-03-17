/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5B9CFF',
          cyan: '#4FACFE',
          green: '#90FF9F',
          navy: '#0F1848',
          'navy-corp': '#0E2A56',
          'navy-deep': '#1B365D',
          gray: '#64748B',
          'off-white': '#F8FAFC',
        },
        // Semantic colors for form validation and status feedback
        semantic: {
          success: {
            50:  '#F0FFF4',
            100: '#C6F6D5',
            500: '#38A169',
            600: '#2F855A',
          },
          warning: {
            50:  '#FFFBEB',
            100: '#FEF3C7',
            500: '#D97706',
            600: '#B45309',
          },
          error: {
            50:  '#FFF5F5',
            100: '#FED7D7',
            500: '#E53E3E',
            600: '#C53030',
          },
          info: {
            50:  '#EBF8FF',
            100: '#BEE3F8',
            500: '#3182CE',
            600: '#2B6CB0',
          },
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #5B9CFF, #4FACFE)',
        'gradient-success': 'linear-gradient(135deg, #90FF9F, #4FACFE)',
        'gradient-dark': 'linear-gradient(180deg, #0F1848 0%, #0E2A56 100%)',
        'dot-pattern': 'radial-gradient(circle, #5B9CFF 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-primary': '0 0 30px rgba(91,156,255,0.3)',
        'glow-green': '0 0 30px rgba(144,255,159,0.25)',
        'glow-cyan': '0 0 30px rgba(79,172,254,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.16)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
