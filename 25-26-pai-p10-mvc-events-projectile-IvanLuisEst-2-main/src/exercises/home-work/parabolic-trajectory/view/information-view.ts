/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc InformationView
 *       Clase que representa la vista de la información del lanzamiento del proyectil.
 */

/**
 * @desc Clase que representa la vista de la información del lanzamiento del proyectil.
 */
export class InformationView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private time = 0;
  private distance = 0;
  private maxHeight = 0;

  /**
   * @desc Constructor de la clase InformationView.
   */
  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d')!;
    const h2 = document.querySelector('h2');
    h2?.insertAdjacentElement('afterend', this.canvas);
    this.setup();
    this.draw();
  }

  /**
   * @desc Configura el tamaño del canvas para mostrar la información del lanzamiento del proyectil.
   */
  private setup(): void {
    const width = window.innerWidth * 0.9;
    const height = 120;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  /**
   * @desc Reinicia la información del lanzamiento del proyectil a sus valores iniciales y actualiza la vista para reflejar estos cambios.
   */
  reset(): void {
    this.time = 0;
    this.distance = 0;
    this.maxHeight = 0;
    this.draw();
  }

  /**
   * @desc Actualiza la información del lanzamiento del proyectil con los valores dados y actualiza la vista para mostrar esta información.
   * @param {number} time 
   * @param {number} distance 
   * @param {number} maxHeight 
   */
  show(time: number, distance: number, maxHeight: number): void {
    this.time = time;
    this.distance = distance;
    this.maxHeight = maxHeight;
    this.draw();
  }

  /**
   * @desc Dibuja la información del lanzamiento del proyectil en el canvas.
   */
  private draw(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.font = '16px Arial';
    this.context.fillStyle = 'black';
    this.context.fillText(`Time: ${this.time.toFixed(2)} s`, 20, 30);
    this.context.fillText(`Distance: ${this.distance.toFixed(2)} m`, 20, 60);
    this.context.fillText(`Max height: ${this.maxHeight.toFixed(2)} m`, 20, 90);
  }
}