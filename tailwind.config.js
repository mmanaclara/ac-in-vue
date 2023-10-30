/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-pure': 'rgb(255, 198, 50)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.page-container': {
          marginInline: 'auto',
          paddingInline: '1.5rem',
          maxWidth: '75rem',
          height: 'calc(100vh - 4rem)',
          fontFamily: theme('fontFamily.sans'),
          overflow: 'hidden'
        },
        '.text-title-1': {
          fontSize: '3.2rem',
          fontWeight: '600',
          lineHeight: '130%',
          letterSpacing: '-0.1rem',
          fontFamily: theme('fontFamily.sans')
        },
        '.text-title-2': {
          fontSize: '1.5rem',
          fontWeight: '600',
          letterSpacing: '-0.05rem',
          fontFamily: theme('fontFamily.sans')
        },
        '.text-paragraph-1': {
          fontSize: '1.125rem',
          fontWeight: 400,
          lineHeight: '110%',
          color: theme('colors.zinc.600'),
          fontFamily: theme('fontFamily.sans')
        },
        '.input-box': {
          paddingInline: '1rem',
          borderRadius: '4px',
          maxWidth: '20rem',
          width: '100%',
          border: '1px solid #52525b',
          height: '2.5rem',
          color: '#52525b',
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.875rem'
        }
      })
    })
  ]
}
