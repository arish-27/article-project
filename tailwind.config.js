/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#F6F4EE',
        cream: '#FAF8F3',
        parchment: '#EFECE3',
        ink: '#111111',
        obsidian: '#0C0C0C',
        graphite: '#1C1C1C',
        hairline: '#E3DFD4',
        darkhairline: '#262626',
        amberAccent: '#C97A3E',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        display: ['"Cinzel"', '"Didot"', 'Georgia', 'serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
        monumental: '0.3em',
      },
    },
  },
  plugins: [],
}
