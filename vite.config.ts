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
                'circles': resolve(__dirname, 'marco-perez-padilla-circles.html'),
                'figures': resolve(__dirname, 'marco-perez-padilla-figures.html')
            },
        },
    },
});