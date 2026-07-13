import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://josh986.github.io',
  base: '/silvia-ly-realtor',
  output: 'static',
  integrations: [tailwind()],
});
