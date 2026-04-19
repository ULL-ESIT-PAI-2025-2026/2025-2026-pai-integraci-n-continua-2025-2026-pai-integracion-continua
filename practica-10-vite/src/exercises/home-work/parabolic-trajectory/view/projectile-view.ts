/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc ProjectileView
 *       Clase encargada de manejar la vista del ejercicio de trayectoria parabólica.
 */

import { TrajectoryView } from './trajectory-view';
import { InformationView } from './information-view';
import { ControlsView } from './controls-view';
import { CanvasGraphView } from './graph/graph';

/**
 * @desc Clase encargada de manejar la vista del ejercicio de trayectoria parabólica.
 */
export class ProjectileView {
  private projectile: TrajectoryView;
  private info: InformationView;
  private controls: ControlsView;
  private graph: CanvasGraphView;

  /**
   * @desc Constructor de la clase ProjectileView.
   * @param {CanvasGraphView} graph 
   * @param {object} onLaunch 
   */
  constructor(
    onLaunch: (params: {
      v0: number;
      angle: number;
      height: number;
      gravity: number;
    }) => void
  ) {
    const canvas = document.createElement('canvas');
    canvas.style.border = '1px solid black';
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';

    this.graph = new CanvasGraphView(canvas, {
      xMin: 0,
      xMax: 305,
      yMin: 0,
      yMax: 205
    });

    this.projectile = new TrajectoryView(this.graph);
    this.info = new InformationView();
    this.controls = new ControlsView(onLaunch);
    this.controls.bind();
  }

  /**
   * @desc Renderiza el proyectil en la posición dada.
   * @param {{coordX: number, coordY: number}} position 
   */
  renderProjectile(position: { coordX: number; coordY: number }): void {
    this.projectile.render(position);
  }

  /**
   * @desc Reinicia la posición del proyectil a su estado inicial. Se utiliza para configurar la vista antes de iniciar un nuevo lanzamiento.
   */
  resetProjectile(): void {
    this.projectile.reset();
  }

  /**
   * @desc Muestra los resultados del lanzamiento del proyectil. Actualiza la vista para mostrar esta información.
   * @param {number} time 
   * @param {number} distance 
   * @param {number} maxHeight 
   */
  showResults(time: number, distance: number, maxHeight: number): void {
    this.info.show(time, distance, maxHeight);
  }

  /**
   * @desc Reinicia la información del lanzamiento del proyectil a sus valores iniciales.
   */
  resetInfo(): void {
    this.info.reset();
  }
}