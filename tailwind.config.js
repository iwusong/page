/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: (theme) => {
        const percentages = {}
        for (let i = 1; i <= 100; i++) {
          percentages[`${i}/100`] = `${i}%`
        }
        return percentages
      }
    }
  },
  plugins: []
}
