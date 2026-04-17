/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc ProjectileModel
 *       Clase que representa el modelo de un proyectil en movimiento parabólico.
 */

/**
 * @desc Clase que representa el modelo de un proyectil en movimiento parabólico.
 */
export class ProjectileModel {
  private position: { coordX: number; coordY: number };
  private velocity: { coordX: number; coordY: number };
  private gravity: number;
  /**
   * @desc Constructor de la clase ProjectileModel. Inicializa la posición, velocidad y gravedad del proyectil.
   */
  constructor() {
    this.position = { coordX: 0, coordY: 0 };
    this.velocity = { coordX: 0, coordY: 0 };
    this.gravity = -9.8;
  }

  /**
   * @desc Reinicia la posición y velocidad del proyectil. Se utiliza para configurar el modelo antes de iniciar un nuevo lanzamiento.
   * @param position Posición inicial del proyectil en coordenadas (x, y).  
   * @param velocity Velocidad inicial del proyectil en coordenadas (vx, vy).
   */
  reset(position: { coordX: number; coordY: number }, velocity: { coordX: number; coordY: number }) {
    this.position = position;
    this.velocity = velocity;
  }

  /**
   * @desc Configura la gravedad que afecta al proyectil. Se utiliza para ajustar el modelo antes de iniciar un nuevo lanzamiento.
   * @param gravity Gravedad que afecta al proyectil.
   */
  setGravity(gravity: number) {
    this.gravity = gravity;
  }

  /**
   * @desc Actualiza la posición y velocidad del proyectil en función del tiempo transcurrido.
   * @param {number} elapsedTime 
   */
  update(elapsedTime: number): void {
    this.position.coordX += this.velocity.coordX * elapsedTime;
    this.position.coordY += this.velocity.coordY * elapsedTime;
    this.velocity.coordY += this.gravity * elapsedTime;
  }

  /**
   * @desc Devuelve la posición actual del proyectil en coordenadas (x, y).
   * @returns La posición actual del proyectil en coordenadas (x, y).
   */
  getPosition() {
    return this.position;
  }

  /**
   * @desc Devuelve la velocidad actual del proyectil en coordenadas (vx, vy).
   * @returns La velocidad actual del proyectil en coordenadas (vx, vy).
   */
  getVelocity() {
    return this.velocity;
  }
}