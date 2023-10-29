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
          height: '100vh',
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
        '.text-paragraph-1': {
          fontSize: '1.125rem',
          fontWeight: 400,
          lineHeight: '110%',
          color: theme('colors.zinc.500'),
          fontFamily: theme('fontFamily.sans')
        },
        '.btn-primary': {
          background: 'rgb(255, 198, 50)',
          width: '25rem',
          borderRadius: '4px',
          paddingBlock: '0.75rem',
          marginTop: '1,5rem',
          boxShadow: 'rgba(0, 0, 0, 0.15) 4px 4px 4px',
          display: 'grid',
          placeItems: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          fontWeight: 600,
          fontSize: '1.125rem',
          color: 'rgb(54, 54, 54)',
          transition: 'all 0.3s'
        }
      })
    })
  ]
}
