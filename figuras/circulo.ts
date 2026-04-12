/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Mar 14 2026
 * @desc Circulo
 *       Clase para la implementación de un círculo como firgura
 *       calculando su área.
 */

import { type Figura } from './figuras.js';

/**
 * Representa un círculo en un lienzo de dibujo.
 */
export class Circulo implements Figura {
  /**
   * Crea una nueva instancia de un círculo.
   * @param {number} radio - Radio del círculo.
   * @param {number} posCanvasAncho - Posición en el eje X del canvas.
   * @param {number} posCanvasAltura - Posición en el eje Y del canvas.
   * @param {number} color - Color del círculo.
   */
  constructor(private readonly radio: number,
      private readonly posCanvasAncho: number,
      private readonly posCanvasAltura: number,
      private readonly color: string) {}

  /**
   * @desc Calcula el área del círculo.
   * @return {number} El área del círculo.
   */
  getArea(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }

  /**
   * @desc Dibuja el círculo en el contexto del canvas.
   * @param {CanvasRenderingContext2D} context - Contexto 2D del canvas.
   * @return {void}
   */
  dibujar(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(this.posCanvasAncho, this.posCanvasAltura, this.radio, 0, 2 * Math.PI);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
  }
}
