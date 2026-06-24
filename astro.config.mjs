import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://buddamylk.github.io',
  base: '/EJBM/',
  integrations: [tailwind()],
  output: 'static'
});
