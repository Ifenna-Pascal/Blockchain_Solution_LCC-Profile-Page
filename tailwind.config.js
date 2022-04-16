module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, svg}",  "./node_modules/@themesberg/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '280px', 'max': '280px'},
      },
      container: {
        center: true,
        padding: '3rem',
        screens: {
          'small': '320px',
          lg: '1424px',
          xl: '1424px',
          '2xl': '1424px',
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  // mode: 'jit',
  plugins: [ require('@themesberg/flowbite/plugin')],
}
