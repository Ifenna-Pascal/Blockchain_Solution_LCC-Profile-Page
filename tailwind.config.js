module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx, svg}",  "./node_modules/@themesberg/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '3rem',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [ require('@themesberg/flowbite/plugin')],
}
