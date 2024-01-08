import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pinkish:'rgb(255, 4, 57, 100)',
        masturd: '#feb902',
        accent: '#FF8F9C',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       },
    },
  },
  plugins: [],
}
export default config
