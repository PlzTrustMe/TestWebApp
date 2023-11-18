/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tg-theme-bg': 'var(--tg-theme-bg-color)',
        'tg-theme-secondary-bg': 'var(--tg-theme-secondary-bg-color)',
        'tg-theme-header-bg': 'var(--tg-theme-header-bg-color)',
        'tg-theme-section-bg': 'var(--tg-theme-section-bg-color)',
        'tg-theme-text': 'var(--tg-theme-text-color)',
        'tg-theme-hint': 'var(--tg-theme-hint-color)',
        'tg-theme-link': 'var(--tg-theme-link-color)',
        'tg-theme-accent': 'var(--tg-theme-accent-text-color)',
        'tg-theme-button': 'var(--tg-theme-button-color)',
        'tg-theme-button-text': 'var(--tg-theme-button-text-color)',
        'tg-theme-section-header-text': 'var(--tg-theme-section-header-text-color)',
        'tg-theme-subtitle-text': 'var(--tg-theme-subtitle-text-color)',
        'tg-theme-destructive-text': 'var(--tg-theme-destructive-text-color)',
        'color-box-shadow': 'var(--tg-theme-secondary-bg-color)'
      },

      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}