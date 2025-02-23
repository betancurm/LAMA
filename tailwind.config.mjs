/** @type {import('tailwindcss').Config} */
export default {
  
  content: ['./src/**/*.{astro,html,md,mdx,svelte,vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};