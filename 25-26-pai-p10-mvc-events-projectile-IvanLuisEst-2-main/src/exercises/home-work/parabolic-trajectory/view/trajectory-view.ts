/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc TrajectoryView
 *       Clase encargada de manejar la vista de las trayectorias en el ejercicio de trayectoria parabólica.
 */

import { CanvasGraphView } from "./graph/graph";

/**
 * @desc Clase encargada de manejar la vista de las trayectorias en el ejercicio de trayectoria parabólica.
 */
type Trajectory = {
  points: { coordX: number; coordY: number }[];
  color: string;
};

/**
 * @desc Clase encargada de manejar la vista de las trayectorias en el ejercicio de trayectoria parabólica.
 */
export class TrajectoryView {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private trajectories: Trajectory[] = [];
  private current: Trajectory | null = null;

  /**
   * @desc Contructor de la clase TrajectoryView.
   * @param {CanvasGraphView} graph 
   */
  constructor(private graph: CanvasGraphView) {
    this.canvas = graph.getCanvas();
    this.context = this.canvas.getContext('2d')!;
    const h1 = document.querySelector('h1');
    h1?.insertAdjacentElement('afterend', this.canvas);
    this.resize();
    this.graph.drawAxes();
  }

  /**
   * @desc Reinicia la trayectoria actual a una nueva trayectoria vacía con un color aleatorio
   *       y la añade a la lista de trayectorias.
   */
  reset(): void {
    const newTrajectory: Trajectory = {
      points: [],
      color: this.randomColor()
    };

    this.trajectories.push(newTrajectory);
    this.current = newTrajectory;
  }

  /**
   * @desc Dibuja el proyectil en la posición dada.
   * @param pos - Posición del proyectil en coordenadas del gráfico.
   */
  drawProjectile(pos: { coordX: number; coordY: number }): void {
    const position = this.graph.toCanvas(pos);

    this.context.beginPath();
    this.context.fillStyle = 'red';
    this.context.arc(position.coordX, position.coordY, 6, 0, Math.PI * 2);
    this.context.fill();
  }

  /**
   * @desc Dibuja todas las trayectorias almacenadas en la lista de trayectorias.
   */
  private drawAllTrajectories(): void {
    for (const traj of this.trajectories) {
      if (traj.points.length < 2) continue;
      this.context.strokeStyle = traj.color;
      this.context.lineWidth = 2;
      this.context.beginPath();
      const start = this.graph.toCanvas(traj.points[0]);
      this.context.moveTo(start.coordX, start.coordY);
      for (let i = 1; i < traj.points.length; i++) {
        const position = this.graph.toCanvas(traj.points[i]);
        this.context.lineTo(position.coordX, position.coordY);
      }
      this.context.stroke();
    }
  }

  /**
   * @desc Limpia el canvas para preparar el dibujo de una nueva trayectoria o actualización de la trayectoria actual.
   */
  clear(): void {
    const weight = this.canvas.width / (window.devicePixelRatio || 1);
    const height = this.canvas.height / (window.devicePixelRatio || 1);
    this.context.clearRect(0, 0, weight, height);
  }

  /**
   * @desc Renderiza la trayectoria actual y el proyectil en la posición dada. Si hay una trayectoria actual.
   * @param {{coordX: number, coordY: number}} position 
   */
  render(position: { coordX: number; coordY: number }): void {
    this.clear();
    this.graph.drawAxes();
    if (this.current) {
      this.current.points.push({ ...position });
    }
    this.drawAllTrajectories();
    this.drawProjectile(position);
  }

  /**
   * @desc Ajusta el tamaño del canvas para adaptarse al tamaño de la ventana y a la densidad de píxeles del dispositivo.
   */
  private resize(): void {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.5;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.canvas.width = Math.floor(width * dpr);
    this.canvas.height = Math.floor(height * dpr);
    this.context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  /**
   * @desc Genera un color aleatorio en para asignar a cada trayectoria.
   */
  private randomColor(): string {
    const colors: string[] = [
      'red',
      'blue',
      'green',
      'orange',
      'purple',
      'brown',
      'cyan',
      'magenta',
      'black'
    ];
  
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
}