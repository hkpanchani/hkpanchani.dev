// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Custom domain (hkpanchani.dev) is served from the repo root, so base = '/'.
export default defineConfig({
  site: 'https://hkpanchani.dev',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
