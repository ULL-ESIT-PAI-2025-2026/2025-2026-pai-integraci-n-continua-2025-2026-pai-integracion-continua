/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 14 2026
 * @desc ProgramView
 *       Clase que representa la vista del canvas y de la particula.
 */


/**
 * @desc Clase ProgramView el cual contiene la creación del canvas, además de la visualización de la particula.
 */
export class ProgramView {
  private readonly canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement;
  private readonly renderingContext: CanvasRenderingContext2D = this.canvas.getContext('2d')!;

  /**
   * @desc Constructor de la clase ProgramView.
   */
  constructor() {
    document.body.style.margin = '0';
    document.body.appendChild(this.canvas);
    this.canvas.style.display = 'block';
    this.canvas.style.backgroundColor = 'black';
    this.canvas.style.border = '1px solid blue';
    this.canvas.style.boxSizing = 'border-box';
    this.canvas.style.margin = '20px';
    this.resizeCanvas();
    window.addEventListener('resize', this.resizeCanvas.bind(this));
  }

  /**
   * @desc Cambia el tamaño del canvas si cambia la ventana.
   */
  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth - 40;
    this.canvas.height = window.innerHeight - 22;
  }

  /**
   * @desc Devuelve el contexto del canvas.
   * @returns 
   */
  getContext(): CanvasRenderingContext2D {
    return this.renderingContext;
  }

  /**
   * @desc Devuelve el canvas.
   * @returns {HTMLCanvasElement}
   */
  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }
}
