/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc Main
 *       Programa principal en que se llamarán a las distintas clases
 *       para poder obtener una página donde se creen una gráfica en la que se pueda mostrar
 *       una representación de una función dada por el usuario.
 */

import { ProjectileModel } from './model/projectile-model';
import { ProjectileView } from './view/projectile-view';
import { ProjectileController } from './controller/proyectile-controller';

/**
 * @desc Función principal.
 */
function main(): void {
  const model = new ProjectileModel();
  const view = new ProjectileView((params) => {
    controller.launch(
      params.v0,
      params.angle,
      params.height,
      params.gravity
    );
  });
  const controller = new ProjectileController(model, view);
}

main();