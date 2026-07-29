/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#0B0F14',
          900: '#101720',
          800: '#141B22',
          700: '#1C2530',
          600: '#2A343D'
        },
        steel: {
          700: '#2B3A4E',
          600: '#3D5A73',
          500: '#547896',
          400: '#7DA0BB'
        },
        ember: {
          600: '#C2481A',
          500: '#FF6A1A',
          400: '#FF8C4C'
        },
        paper: '#F4F5F3',
        status: {
          run: '#2FAE66',
          warn: '#E0B23C',
          stop: '#D9483B',
          standby: '#7DA0BB'
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(125,160,187,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125,160,187,0.08) 1px, transparent 1px)'
      },
      backgroundSize: {
        grid: '32px 32px'
      }
    }
  },
  plugins: []
};
