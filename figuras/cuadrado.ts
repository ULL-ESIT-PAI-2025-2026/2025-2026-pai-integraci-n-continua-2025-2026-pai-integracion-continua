/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Mar 14 2026
 * @desc Cuadrado
 *       Clase para la implementación de un cuadrado como figura
 *       calculando su área.
 */

import { type Figura } from './figuras.js';

/**
 * Representa un cuadrado en un lienzo de dibujo.
 */
export class Cuadrado implements Figura {
  /**
   * @desc Crea una nueva instancia de un rectángulo.
   * @param {number} lado - Longitud de los lados del cuadrado.
   * @param {number} posCanvasAncho - Posición en el eje X del canvas.
   * @param {number} posCanvasAltura - Posición en el eje Y del canvas.
   * @param {string} color - Color del rectángulo.
   */
  constructor(private readonly lado: number,
    private readonly posCanvasAncho: number,
    private readonly posCanvasAltura: number,
    private readonly color: string) {}

  /**
   * @desc Calcula el área del cuadrado.
   * @return {number} El área del cuadrado.
   */
  getArea(): number {
    return this.lado ** 2;
  }

  /**
   * @desc Dibuja el cuadrado en el contexto del canvas.
   * @param {CanvasRenderingContext2D} context - Contexto 2D del canvas.
   * @return {void}
   */
  dibujar(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.moveTo(this.posCanvasAncho, this.posCanvasAltura);
    context.lineTo(this.posCanvasAncho + this.lado, this.posCanvasAltura);
    context.lineTo(this.posCanvasAncho + this.lado, this.posCanvasAltura - this.lado);
    context.lineTo(this.posCanvasAncho, this.posCanvasAltura - this.lado);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
  }
}
