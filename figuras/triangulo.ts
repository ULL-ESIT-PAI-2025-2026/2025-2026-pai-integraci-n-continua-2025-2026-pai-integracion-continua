/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Mar 14 2026
 * @desc Triangulo
 *       Clase para la implementación de un triangulo como firgura
 *       calculando su área.
 */

import { type Figura } from './figuras.js';

/**
 * Representa un triángulo en un lienzo de dibujo.
 */
export class Triangulo implements Figura {
  /**
   * @desc Crea una nueva instancia de un triángulo.
   * @param {number} base - Longitud de la base del triángulo.
   * @param {number} altura - Altura del triángulo.
   * @param {number} posCanvasAncho - Posición en el eje X del canvas.
   * @param {number} posCanvasAltura - Posición en el eje Y del canvas.
   * @param {string} color - Color del triángulo.
   */
  constructor(private readonly base: number,
      private readonly altura: number,
      private readonly posCanvasAncho: number,
      private readonly posCanvasAltura: number,
      private readonly color: string) {}

  /**
   * @desc Calcula el área del triángulo.
   * @return {number} El área del triángulo.
   */
  getArea(): number {
    return (this.base * this.altura) / 2;
  }

  /**
   * @desc Dibuja el triángulo en el contexto del canvas.
   * @param {CanvasRenderingContext2D} context - Contexto 2D del canvas.
   * @return {void}
   */
  dibujar(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(this.posCanvasAncho, this.posCanvasAltura);
    context.lineTo(this.posCanvasAncho + this.base, this.posCanvasAltura);
    context.lineTo(this.posCanvasAncho + this.base / 2, this.posCanvasAltura - this.altura);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
  }
}
