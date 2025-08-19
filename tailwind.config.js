/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,jsx}"

  ],
   theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: '1px',
        '2': '2px',
        '3': '3px',
      },
      textStrokeColor: {
        DEFAULT: '#000',
        white: '#fff',
        black: '#000',
        red: '#f00',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const widths = theme('textStrokeWidth');
      const colors = theme('textStrokeColor');

      const newUtilities = {};

      // Largura do contorno
      for (const [key, value] of Object.entries(widths)) {
        newUtilities[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-width': value,
        };
      }

      // Cor do contorno
      for (const [key, value] of Object.entries(colors)) {
        newUtilities[`.text-stroke-${key}`] = {
          '-webkit-text-stroke-color': value,
        };
      }

      addUtilities(newUtilities);
    }
  ],
}
