// @ts-nocheck
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
        'bouncing-ball-animation-example':
          resolve(__dirname, 'src/exercises/bouncing-ball-animation-example/animation.html'),
        'parabolic-trajectory':
          resolve(__dirname, 'src/exercises/home-work/parabolic-trajectory/luis-estevez-ivan-parabolic-trajectory.html'),
        'particle':
          resolve(__dirname, 'src/exercises/evaluation-exercise1-particle/luis-estevez-ivan-particle.html')
      }
    }
  }
});