/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Mar 14 2026
 * @desc Vista
 *       Clase para la implementación de una vista como canva que contendrá
 *       un conjunto de figuras con cxaracteristicar al azar.
 */

import { Cuadrado } from './cuadrado.js'
import { Triangulo } from './triangulo.js'
import { Rectangulo } from './rectangulo.js'
import { Circulo } from './circulo.js'

/**
 * Clase Vista para crear la cantidad de figuras especificadas.
 */
export class Vista {
  /**
   * @desc Constructor de la clase Vista para obtener el canvas a utilizar.
   * @param {HTMLCanvasElement} canvas Entorno en el que se colocaran las figuras
   */
  constructor(private readonly canvas: HTMLCanvasElement) {}

  /**
   * @desc Solicita por pantalla un número de figuras a crear.
   * @return {number} Devuelve la cantidad de figuras a crear.
   */
  solicitarCantidadFiguras(): number {
    const cantidad = parseInt(prompt('¿Cuántas figuras deseas dibujar?') ?? '0');
    return cantidad;
  }

  /**
   * @desc Genera un conjunto de figuras con unas caracteristicas aleatorias
   * @param {number} cantidad Número de figuras a generar.
   * @return {void}
   */
  generarFiguras(cantidad: number): void {
    const context = this.canvas.getContext('2d');
    if (context == null) {
      console.error('No se pudo obtener el contexto del canvas.');
      return;
    }
    for (let i = 0; i < cantidad; i++) {
      const tipo = this.obtenerTipoFiguraAleatorio();
      const color = this.obtenerColorAleatorio();
      const posCanvasAncho = Math.random() * this.canvas.width;
      const posCanvasAltura = Math.random() * this.canvas.height;
      let figura;
      switch (tipo) {
        case 'cuadrado': {
          const lado = Math.random() * 80 + 40;
          figura = new Cuadrado(lado, posCanvasAncho, posCanvasAltura, color);
          break;
        }
        case 'rectangulo': {
          const base = Math.random() * 80 + 40;
          const altura = Math.random() * 80 + 40;
          figura = new Rectangulo(base, altura, posCanvasAncho, posCanvasAltura, color);
          break;
        }
        case 'triangulo': {
          const baseTriangulo = Math.random() * 80 + 40;
          const alturaTriangulo = Math.random() * 80 + 40;
          figura = new Triangulo(baseTriangulo, alturaTriangulo, posCanvasAncho, posCanvasAltura, color);
          break;
        }
        case 'circulo': {
          const radio = Math.random() * 40 + 20;
          figura = new Circulo(radio, posCanvasAncho, posCanvasAltura, color);
          break;
        }
        default: {
          alert('Se intento crear una figura no reconocida.');
        }
      }
      if (figura != null) {
        figura.dibujar(context);
      }
    }
  }

  /**
   * @desc Obtener el nombre del nuevo tipo de figura a crear
   * @return {string} Tipo de figura que se va a generar.
   */
  private obtenerTipoFiguraAleatorio(): string {
    const tipos = ['cuadrado', 'rectangulo', 'triangulo', 'circulo'];
    const indice = Math.floor(Math.random() * tipos.length);
    return tipos[indice];
  }

  /**
   * @desc Obtener el color de la nueva figura de forma aleatoria.
   * @return {string} Color de la nueva figura.
   */
  private obtenerColorAleatorio(): string {
    const colores = ['red', 'blue', 'yellow', 'green', 'pink', 'orange', 'purple'];
    const indice = Math.floor(Math.random() * colores.length);
    return colores[indice];
  }
}
