/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Mar 14 2026
 * @desc Main
 *       Programa principal en que se llamarán a las distintas clases
 *       para poder obtener una página donde se creen un conjunto de figuras aleatorias.
 */

import { Vista } from './vista.js'

/**
 * @desc Funcion main donde se crea un canvas en el que se almacenarán la cantidad de
 * figuras que se indiquen con unas caracteristicas aleatorias.
 * @return {void}
 */
export function main(): void {
  const canvas = document.getElementById('barChart') as HTMLCanvasElement;
  if (canvas === null) {
    console.error('No se encontró el elemento canvas en el DOM.');
    return;
  }
  const vista = new Vista(canvas);
  const cantidadFiguras = vista.solicitarCantidadFiguras();
  if (cantidadFiguras > 0) {
    vista.generarFiguras(cantidadFiguras);
  } else {
    alert('Debes ingresar un número válido de figuras.');
  }
}

main()
