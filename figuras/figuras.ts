/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Mar 14 2026
 * @desc Figuras
 *       Interfaz preparada para implementar en todas las clases de figuras.
 */

/**
 * @desc Interfaz utilizada para las figuras que contiene tanto
 * el método de área como el de dibujar las figuras.
 */
export interface Figura {
  /**
   * @desc Método para obtener el área de una figura
   * @return {number} Área de la figura.
   */
  getArea(): number;
  /**
   * @desc Método para dibujar la figura en el Canvas.
   * @param {CanvasRenderingContext2D} context contexto en el que se dibujará
   * @return {void}
   */
  dibujar(context: CanvasRenderingContext2D): void;
}
