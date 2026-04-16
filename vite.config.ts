import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  publicDir: false,
  server: {
    open: 'index.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './index.html'),
        p07: resolve(__dirname, './src/p07/index.html'),
        p08: resolve(__dirname, './src/p08/index.html'),
        p09: resolve(__dirname, './src/p09/public/index.html'),
        p10: resolve(__dirname, './src/p10/public/index.html'),
      }
    }
  }
});