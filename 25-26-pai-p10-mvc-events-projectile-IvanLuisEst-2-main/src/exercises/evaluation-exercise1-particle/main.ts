/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 14 2026
 * @desc Main
 *       Programa principal en que se llamarán a las distintas clases
 *       para poder obtener una página donde se creen una gráfica en la que se pueda mostrar
 *       una representación de una función dada por el usuario.
 */

import { ProgramView } from './view/program-view';
import { ParticleModel } from './model/particle-model';
import { ParticleView } from './view/particle-view';
import { ProgramController } from './controller/program-controller';

/**
 * @desc Funcion principal del programa.
 */
function main(): void {
  const programView = new ProgramView();
  const canvas = programView.getCanvas();
  const model = new ParticleModel({coordX: canvas.width / 2, coordY: canvas.height / 2}, 6);
  const particleView = new ParticleView(10, 'white');
  new ProgramController(programView, model, particleView);
}

main();