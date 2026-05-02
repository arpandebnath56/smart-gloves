/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0f1c',
          card: '#131b2f',
          border: '#1e293b'
        },
        brand: {
          accent: '#0ea5e9',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444'
        }
      }
    },
  },
  plugins: [],
}
