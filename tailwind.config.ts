import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ALL colors from your CSS
        'primary': '#3c50e0',
        'gray-2': '#f8fafc',
        'dark-5': '#64748b',
        'dark-6': '#94a3b8',
        'stroke-dark': '#334155',
        'dark-2': '#1e293b',
        'dark-3': '#334155',
        'stroke': '#e2e8f0',
        'neutral-200': '#e5e7eb',
        'gray-dark': '#0f172a',
        'dark': '#020D1A',
        'gray': '#6b7280',
      },
      spacing: {
        '7.5': '1.875rem',
        '8.125': '2.03125rem',
        '5.625': '1.40625rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem',
        '100': '25rem',
        '23': '5.75rem',
      },
      fontSize: {
        'body-sm': '0.875rem',
        'xs': '0.75rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'card-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        '3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'datepicker': '-5px 0 0 #1e293b, 5px 0 0 #1e293b',
      },
      borderRadius: {
        '7': '1.75rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config
