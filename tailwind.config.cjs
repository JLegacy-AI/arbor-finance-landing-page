/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      colors:{
        'primary-color':'#081613',
        'primary-color-2':'#0F2822',
        'primary-color-3':'#030D18',
        'secondary-color': '#54CC94',
        'tertiary-color': '#047B62',
        'tertiary-color-2': '#8DB9B0',

      },
      // background: #030D18;

      backgroundImage:{
        'hero-section': "url('./assets/images/background-image.png')",
        'mission-section': "url('./assets/images/Mission.png')",
        'frame-1': "url('./assets/images/Frame-1.png')",
        'frame-2': "url('./assets/images/Frame-2.png')",
        'frame-3': "url('./assets/images/Frame-3.png')",
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))', 
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))', 
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))', 
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))', 
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))', 
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))', 
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))', 
      },
      animation: {
        'slide': 'slide 50s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0px)'},
          '100%': { transform: 'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [],
}
