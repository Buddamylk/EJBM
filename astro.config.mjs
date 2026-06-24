import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ejbm-benin.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static'
});
