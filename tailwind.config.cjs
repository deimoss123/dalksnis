/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        invert: {
          css: {
            ':not(pre) > code': {
              backgroundColor: '#282c34',
              borderRadius: '0.25rem',
            },
            pre: {
              borderRadius: '0.25rem',
              padding: '0.25rem 0.5rem',
            },
            a: {
              color: '#3182ce',
              cursor: 'pointer',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
