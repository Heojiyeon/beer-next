import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          defaultBackground: '#F9F9F9',
          hoverBackground: '#FFFAE4',
          hoverBorder: '#FFD400',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
