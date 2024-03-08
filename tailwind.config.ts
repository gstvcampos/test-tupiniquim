import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5712A6',
          secondary: '#ffffff',
          accent: '#2678FA',
          neutral: '#82809C',
          'base-100': '#ffffff',
          info: '#00ffff',
          success: '#00ff00',
          warning: '#00ff00',
          error: '#ff0000',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
export default config
