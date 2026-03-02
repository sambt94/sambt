// ABOUTME: Tailwind config with sambt.dev design system tokens.
// ABOUTME: Ports v4 CSS variables (colors, fonts, spacing, animations) into Tailwind theme.

import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: 'var(--color-surface)',
        copy: 'var(--color-copy)',
        muted: 'var(--color-muted)',
        faint: 'var(--color-faint)',
        border: 'var(--color-border)',
        pill: 'var(--color-pill)',
        'nav-bg': 'var(--color-nav-bg)',
        'nav-border': 'var(--color-nav-border)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '560px',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            filter: 'blur(8px)',
            transform: 'translateY(12px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
        'nav-entrance': {
          '0%': {
            opacity: '0',
            filter: 'blur(8px)',
            transform: 'translateX(-50%) translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'nav-entrance': 'nav-entrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
