/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          navy: '#0B2545',
          dark: '#08172E',
          blue: '#1E3A8A',
          ashoka: '#003366',
          sky: '#0284C7',
          saffron: '#E65100',
          'saffron-light': '#FFF7ED',
          'saffron-border': '#FED7AA',
          green: '#0F766E',
          'green-light': '#F0FDF4',
          'green-border': '#BBF7D0',
          gold: '#B45309',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
