/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 14 2026
 * @desc ParticleModel
 *       Clase que representa la vista del canvas y de la particula.
 */

export type Point2D = { coordX: number; coordY: number };

/**
 * @desc Clase ParticleModel.
 */
export class ParticleModel {
  private position: Point2D;
  private path: Point2D[] = [];

  /**
   * @desc Constructor clase ParticleModel
   * @param position 
   * @param maxDelta 
   */
  constructor(position: Point2D, private readonly maxDelta: number) {
    this.position = position;
    this.path.push({ ...position });
  }

  /**
   * @desc Método para mostrar cada paso.
   */
  update(): void {
    const deltaX = (Math.random() * 2 - 1) * this.maxDelta;
    const deltaY = (Math.random() * 2 - 1) * this.maxDelta;
    this.position.coordX += deltaX;
    this.position.coordY += deltaY;
    this.path.push({ ...this.position });
  }

  /**
   * @desc devuelve la posicion.
   * @returns {Point2D}
   */
  getPosition(): Point2D {
    return { ...this.position };
  }

  /**
   * @desc Devuelve las posiciones de la trayectoria de la particula.
   * @returns {Point2D[]}
   */
  getPath(): Point2D[] {
    return this.path.map(positions => ({ ...positions }));
  }
}