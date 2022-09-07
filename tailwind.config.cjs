/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      fontSize:{
        
      },
      screens:{
        '320':'320px',
        '375':'375px',
        '425':'425px',
        '490':'490px',
      },
      colors:{
        'primary-color':'#081613',
        'primary-color-2':'#0F2822',
        'primary-color-3':'#030D18',
        'secondary-color': '#54CC94',
        'tertiary-color': '#047B62',
        'tertiary-color-2': '#8DB9B0',

      },
      backgroundImage:{
        'hero-section': "url('./assets/images/background-image.png')",
        'mission-section': "url('./assets/images/Mission.png')",
        'frame-1': "url('./assets/images/Frame-1.png')",
        'frame-2': "url('./assets/images/Frame-2.png')",
        'frame-3': "url('./assets/images/Frame-3.png')",
        'frame-4': "url('./assets/images/Frame-4.png')",
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
