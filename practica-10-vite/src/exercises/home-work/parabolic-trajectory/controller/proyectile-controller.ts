/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc ProyectileController
 *       Clase controladora del ejercicio de trayectoria parabólica. Se encarga de manejar la lógica de la simulación, actualizar el modelo y la vista.
 */

import { ProjectileModel } from '../model/projectile-model';
import { ProjectileView } from '../view/projectile-view';

/**
 * @desc Clase controladora del ejercicio de trayectoria parabólica.
 *       Se encarga de manejar la lógica de la simulación, actualizar el modelo y la vista.
 */
export class ProjectileController {
  private time = 0;
  private maxHeight = 0;
  private animationId: number | null = null;

  /**
   * @desc Constructor de la clase ProjectileController.
   * @param {ProjectileModel} model
   * @param {ProjectileView} view 
   */
  constructor(
    private model: ProjectileModel,
    private view: ProjectileView
  ) {}

  /**
   * @desc Inicia el lanzamiento del proyectil con los parámetros dados. Configura el modelo y la vista, y comienza la animación.
   * @param {number} velocity Velocidad inicial del proyectil en m/s.
   * @param {number} angleDeg Ángulo de lanzamiento en grados. 
   * @param {number} height Altura inicial del proyectil en metros.
   * @param {number} gravity Aceleración debida a la gravedad.
   */
  launch(velocity: number, angleDeg: number, height: number, gravity: number): void {
    const angle = (angleDeg * Math.PI) / 180;
    this.model.reset(
      { coordX: 0, coordY: height },
      {
        coordX: velocity * Math.cos(angle),
        coordY: velocity * Math.sin(angle)
      }
    );
    this.model.setGravity(-gravity);
    this.view.resetProjectile();
    this.view.resetInfo();
    this.time = 0;
    this.maxHeight = height;
    this.startAnimation();
  }

  /**
   * @desc Inicia la animación del proyectil. Actualiza el modelo y la vista en cada frame, y detiene la animación cuando el proyectil toca el suelo.
   */
  private startAnimation(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
    }
    const step = () => {
      const dt = 0.016;
      this.time += dt;
      this.model.update(dt);
      const pos = this.model.getPosition();
      this.maxHeight = Math.max(this.maxHeight, pos.coordY);
      this.view.renderProjectile(pos);
      if (pos.coordY <= 0) {
        this.finish();
      } else {
        this.animationId = requestAnimationFrame(step);
      }
    };
    this.animationId = requestAnimationFrame(step);
  }

  /**
   * @desc Finaliza la simulación del proyectil. Detiene la animación y muestra los resultados en la vista.
   */
  private finish(): void {
    const pos = this.model.getPosition();
    this.view.showResults(
      this.time,
      pos.coordX,
      this.maxHeight
    );
  }
}