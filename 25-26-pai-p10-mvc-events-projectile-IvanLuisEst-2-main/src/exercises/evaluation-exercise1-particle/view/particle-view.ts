/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 14 2026
 * @desc ProgramView
 *       Clase que representa la vista del canvas y de la particula.
 */

import type { Point2D } from "../model/particle-model";

/**
 * @desc Clase ParticleModel.
 */
export class ParticleView {
  /**
   * @desc Constructor de la clase ParticleView.
   * @param {number} radius 
   * @param {string} color 
   */
  constructor(private readonly radius: number, private readonly color: string) {}

  /**
   * @desc Método para dibujar tanto la particula como la trayectoria.
   * @param {CanvasRenderingContext2D} context 
   * @param {Point2D} position 
   * @param {Point2D[]} path 
   */
  draw(
    context: CanvasRenderingContext2D,
    position: Point2D,
    path: Point2D[]
  ): void {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    if (path.length > 1) {
      context.beginPath();
      context.strokeStyle = 'white';
      context.lineWidth = 3;
      context.moveTo(path[0].coordX, path[0].coordY);
      for (let i = 1; i < path.length; i++) {
        context.lineTo(path[i].coordX, path[i].coordY);
      }
      context.stroke();
    }
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(position.coordX, position.coordY, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}