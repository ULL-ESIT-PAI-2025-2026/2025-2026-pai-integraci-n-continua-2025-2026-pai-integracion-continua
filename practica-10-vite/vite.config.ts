/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 16 2026
 * @desc vite.config
 *       Archivo de configuración de Vite para el proyecto.
 *       Define la configuración de construcción,
 *       incluyendo los puntos de entrada para las distintas páginas del proyecto.
 */
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