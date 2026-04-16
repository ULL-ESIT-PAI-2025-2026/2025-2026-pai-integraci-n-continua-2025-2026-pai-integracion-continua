import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: 'read-JSON-app/www',
  server: {
    proxy: {
      '/data': {
        target: 'https://www.santacruzdetenerife.es',
        changeOrigin: true,
        secure: false,
        rewrite: (path) =>
          path.replace(
            /^\/data/,
            '/opendata/dataset/93b7d1bd-1b21-4f43-9316-671e2021f7fc/resource/0fa54a6d-35ef-41c1-ab1c-9af6efe0e9f0/download/canchas_deportivas.json'
          ),
        configure: (proxy) => {
          proxy.on('error', (err) => console.error(' Proxy error:', err));
          proxy.on('proxyReq', (proxyReq, req) => {
            console.log('📡 Proxying:', req.url, '→', proxyReq.path);
          });
        },
      },
    },
  },
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
});