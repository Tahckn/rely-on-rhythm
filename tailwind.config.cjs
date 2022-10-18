module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#c33e47',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818',
        sidebar: '#000',
      },
      animation: {
        'spin-fast': 'spin 0.3s ease-in-out',
        'spin-reverse': 'reverse-spin 0.3s ease-in-out',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
      fontSize: {
        s: '0.813rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
