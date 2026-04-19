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

import { ProgramView } from "../view/program-view";
import { ParticleModel } from "../model/particle-model";
import { ParticleView } from "../view/particle-view";

/**
 * @desc Clase ProgramController
 */
export class ProgramController {
  /**
   * @desc Constructor de la clase ProgramController
   */
  constructor(
    private readonly view: ProgramView,
    private readonly model: ParticleModel,
    private readonly particleView: ParticleView
  ) {
    this.animate();
  }

  /**
   * @desc Método para realizar la animación.
   */
  private animate(): void {
    const context = this.view.getContext();
    const step = () => {
      this.model.update();
      this.particleView.draw(
        context,
        this.model.getPosition(),
        this.model.getPath()
      );
      requestAnimationFrame(step);
    };
    step();
  }
}