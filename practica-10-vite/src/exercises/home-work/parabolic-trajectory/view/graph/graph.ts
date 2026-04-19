/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc Graph
 *       Clase encargada de manejar el canvas y coordinar el dibujo de los ejes, marcas y etiquetas en el gráfico.
 */

import { GraphConfig } from './graph-config';

/**
 * @desc Clase encargada de dibujar los ejes X e Y en el canvas.
 */
export class AxesDrawer {
  /**
   * @desc Constructor de la clase AxesDrawer.
   * @param context 
   * @param graph 
   */
  constructor(
    private context: CanvasRenderingContext2D,
    private graph: {
      getWidth: () => number;
      getHeight: () => number;
    }
  ) {}

  /**
   * @desc Dibujar los ejes de la grafica
   * @param zeroX 
   * @param zeroY 
   */
  draw(zeroX: number, zeroY: number): void {
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;

    this.line(0, zeroY, this.graph.getWidth(), zeroY);
    this.line(zeroX, 0, zeroX, this.graph.getHeight());
  }

  /**
   * @desc Dibuja una línea entre dos puntos dados en el canvas.
   * @param coordX1 
   * @param coordY1 
   * @param coordX2 
   * @param coordY2 
   */
  private line(x1: number, coordY1: number, coordX2: number, coordY2: number): void {
    this.context.beginPath();
    this.context.moveTo(x1, coordY1);
    this.context.lineTo(coordX2, coordY2);
    this.context.stroke();
  }
}

/**
 * @desc Clase encargada de dibujar las marcas de los ejes (ticks) y sus etiquetas (labels) en el canvas.
 */
export class TicksAndLabelsDrawer {
  /**
   * @desc Constructor de la clase TicksAndLabelsDrawer.
   * @param context 
   * @param graph 
   * @param toCanvasX 
   * @param toCanvasY 
   */
  constructor(
    private context: CanvasRenderingContext2D,
    private graph: CanvasGraphView,
    private toCanvasX: (x: number) => number,
    private toCanvasY: (y: number) => number
  ) {}

  /**
   * @desc Dibuja las marcas de los ejes (ticks) y sus etiquetas (labels) en el canvas. Recorre los valores de los ejes X e Y según la configuración del gráfico y dibuja las líneas de las marcas y las etiquetas correspondientes.
   * @param {number} zeroX 
   * @param {number} zeroY 
   */
  draw(zeroX: number, zeroY: number): void {
    const tick = 5;
    const config = this.graph.getConfig();
    this.context.fillStyle = 'black';
    this.context.font = '11px Arial';
    for (let x = config.xMin; x <= config.xMax; x += 10) {
      if (x === 0) continue;
      const cx = this.toCanvasX(x);
      this.drawLine(cx, zeroY, cx, zeroY - this.graph.getHeight(), 'lightgrey');
      this.drawLine(cx, zeroY - tick, cx, zeroY + tick, 'black');
      this.context.fillText(String(x), cx - 10, zeroY - 7);
    }

    for (let y = config.yMin; y <= config.yMax; y += 10) {
      if (y === 0) continue;
      const cy = this.toCanvasY(y);
      this.drawLine(zeroX, cy, this.graph.getWidth(), cy, 'lightgrey');
      this.drawLine(zeroX - tick, cy, zeroX + tick, cy, 'black');
      this.context.fillText(String(y), zeroX + 7, cy + 4);
    }
  }

  /**
   * @desc Dibuja una línea entre dos puntos dados en el canvas con un color específico. Se utiliza para dibujar las líneas de las marcas de los ejes (ticks) y las líneas de fondo de la cuadrícula.
   * @param {number} coordX1 
   * @param {number} coordY1 
   * @param {number} coordX2 
   * @param {number} coordY2 
   * @param {string} color 
   */
  private drawLine(coordX1: number, coordY1: number, coordX2: number, coordY2: number, color: string): void {
    this.context.strokeStyle = color;
    this.context.beginPath();
    this.context.moveTo(coordX1, coordY1);
    this.context.lineTo(coordX2, coordY2);
    this.context.stroke();
  }
}

/**
 * @desc Clase principal encargada de manejar el canvas y coordinar el dibujo de los ejes, marcas y etiquetas en el gráfico.
 */
export class CanvasGraphView {
  private context: CanvasRenderingContext2D;
  private axes: AxesDrawer;
  private ticks: TicksAndLabelsDrawer;

  /**
   * @desc Constuctor de la clase CanvasGraphView. Inicializa el contexto del canvas y crea instancias de AxesDrawer y TicksAndLabelsDrawer para manejar el dibujo de los ejes, marcas y etiquetas en el gráfico.
   * @param canvas 
   * @param config 
   */
  constructor(
    private canvas: HTMLCanvasElement,
    private config: GraphConfig
  ) {
    this.context = canvas.getContext('2d')!;
    this.axes = new AxesDrawer(this.context, this);
    this.ticks = new TicksAndLabelsDrawer(
      this.context,
      this,
      this.toCanvasX.bind(this),
      this.toCanvasY.bind(this)
    );
  }

  /**
   * @desc Devuelve el elemento canvas utilizado para dibujar el gráfico. Este método se utiliza para acceder al canvas desde otras partes de la aplicación, como la clase TrajectoryView, para dibujar las trayectorias del proyectil en el gráfico.
   * @returns Devuelve el elemento canvas utilizado para dibujar el gráfico. Este método se utiliza para acceder al canvas desde otras partes de la aplicación, como la clase TrajectoryView, para dibujar las trayectorias del proyectil en el gráfico.
   */
  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  /**
   * @desc Devuelve el ancho del canvas ajustado por el dispositivo de pixel ratio. Este método se utiliza para acceder al ancho del canvas desde otras partes de la aplicación, como la clase AxesDrawer, para dibujar los ejes y las marcas en el gráfico de manera correcta, teniendo en cuenta la resolución del dispositivo.
   * @returns Devuelve el ancho del canvas ajustado por el dispositivo de pixel ratio. Este método se utiliza para acceder al ancho del canvas desde otras partes de la aplicación, como la clase AxesDrawer, para dibujar los ejes y las marcas en el gráfico de manera correcta, teniendo en cuenta la resolución del dispositivo.
   */
  getWidth(): number {
    return this.canvas.width / (window.devicePixelRatio || 1);
  }

  /**
   * @desc Devuelve la altura del canvas ajustada por el dispositivo de pixel ratio. Este método se utiliza para acceder a la altura del canvas desde otras partes de la aplicación, como la clase AxesDrawer, para dibujar los ejes y las marcas en el gráfico de manera correcta, teniendo en cuenta la resolución del dispositivo.
   * @returns Devuelve la altura del canvas ajustada por el dispositivo de pixel ratio. Este método se utiliza para acceder a la altura del canvas desde otras partes de la aplicación, como la clase AxesDrawer, para dibujar los ejes y las marcas en el gráfico de manera correcta, teniendo en cuenta la resolución del dispositivo.
   */
  getHeight(): number {
    return this.canvas.height / (window.devicePixelRatio || 1);
  }

  /**
   * @desc Devuelve la configuración actual del gráfico, que incluye los límites de los ejes X e Y. Este método se utiliza para acceder a la configuración del gráfico desde otras partes de la aplicación, como la clase TicksAndLabelsDrawer, para determinar dónde dibujar las marcas de los ejes (ticks) y sus etiquetas (labels) en el canvas.
   * @returns Devuelve la configuración actual del gráfico, que incluye los límites de los ejes X e Y. Este método se utiliza para acceder a la configuración del gráfico desde otras partes de la aplicación, como la clase TicksAndLabelsDrawer, para determinar dónde dibujar las marcas de los ejes (ticks) y sus etiquetas (labels) en el canvas.
   */
  getConfig(): GraphConfig {
    return this.config;
  }

  /**
   * @desc Dibuja los ejes X e Y en el canvas utilizando la clase AxesDrawer y las marcas de los ejes (ticks) y sus etiquetas (labels) utilizando la clase TicksAndLabelsDrawer. Este método se llama después de configurar el canvas para mostrar el gráfico, asegurando que los ejes y las marcas estén correctamente dibujados antes de mostrar las trayectorias del proyectil.
   */
  drawAxes(): void {
    const zeroX = this.toCanvasX(0);
    const zeroY = this.toCanvasY(0);
    this.axes.draw(zeroX, zeroY);
    this.ticks.draw(zeroX, zeroY);
  }

  /**
   * @desc Convierte una posición dada en coordenadas del gráfico a coordenadas del canvas. Este método se utiliza para dibujar las trayectorias del proyectil en el gráfico, ya que las posiciones del proyectil se calculan en coordenadas del gráfico y deben ser convertidas a coordenadas del canvas para ser dibujadas correctamente.
   * @param x 
   * @returns Posicion convertida a coordenadas del canvas. Este método se utiliza para dibujar las trayectorias del proyectil en el gráfico, ya que las posiciones del proyectil se calculan en coordenadas del gráfico y deben ser convertidas a coordenadas del canvas para ser dibujadas correctamente.
   */
  toCanvasX(x: number): number {
    return (x - this.config.xMin) * this.getWidth() /
      (this.config.xMax - this.config.xMin);
  }

  /**
   * @desc Convierte una posición dada en coordenadas del gráfico a coordenadas del canvas. Este método se utiliza para dibujar las trayectorias del proyectil en el gráfico, ya que las posiciones del proyectil se calculan en coordenadas del gráfico y deben ser convertidas a coordenadas del canvas para ser dibujadas correctamente.
   * @param y 
   * @returns Posicion convertida a coordenadas del canvas. Este método se utiliza para dibujar las trayectorias del proyectil en el gráfico, ya que las posiciones del proyectil se calculan en coordenadas del gráfico y deben ser convertidas a coordenadas del canvas para ser dibujadas correctamente.
   */
  toCanvasY(y: number): number {
    return this.getHeight() -
      (y - this.config.yMin) * this.getHeight() /
      (this.config.yMax - this.config.yMin);
  }

  /**
   * @desc Convierte una posición dada en coordenadas del gráfico a coordenadas del canvas. Este método se utiliza para dibujar las trayectorias del proyectil en el gráfico, ya que las posiciones del proyectil se calculan en coordenadas del gráfico y deben ser convertidas a coordenadas del canvas para ser dibujadas correctamente.
   * @param pos 
   * @returns 
   */
  toCanvas(pos: { coordX: number; coordY: number }) {
    return {
      coordX: this.toCanvasX(pos.coordX),
      coordY: this.toCanvasY(pos.coordY)
    };
  }

  updateConfig(config: GraphConfig): void {
    this.config = config;
    this.clear();
    this.drawAxes();
  }

  clear(): void {
    this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
  }
}