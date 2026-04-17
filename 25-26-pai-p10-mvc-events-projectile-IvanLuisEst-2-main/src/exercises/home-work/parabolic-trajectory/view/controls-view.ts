/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @autor Iván Luis Estévez
 * @desde Apr 12 2026
 * @desc ControlsView
 *       Clase que representa la vista de los controles para configurar el lanzamiento del proyectil.
 */

/**
 * @desc Clase que representa la vista de los controles para configurar el lanzamiento del proyectil.
 */
type LaunchParams = {
  v0: number;
  angle: number;
  height: number;
  gravity: number;
};

/**
 * @desc Tipo de función que se utiliza como callback para manejar el evento de lanzamiento del proyectil.
 */
type LaunchCallback = (params: LaunchParams) => void;

/**
 * @desc Clase que representa la vista de los controles para configurar el lanzamiento del proyectil.
 */
export class ControlsView {
  private readonly button: HTMLButtonElement;
  private readonly velocityInput: HTMLInputElement;
  private readonly angleInput: HTMLInputElement;
  private readonly heightInput: HTMLInputElement;
  private readonly gravityInput: HTMLInputElement;
  private readonly onLaunch: LaunchCallback;

  /**
   * @desc Constructor de la clase ControlsView.
   * @param {LaunchCallback} onLaunch 
   */
  constructor(onLaunch: LaunchCallback) {
    this.onLaunch = onLaunch;
    this.button = document.getElementById('launch') as HTMLButtonElement;
    this.velocityInput = document.getElementById('v0') as HTMLInputElement;
    this.angleInput = document.getElementById('angle') as HTMLInputElement;
    this.heightInput = document.getElementById('height') as HTMLInputElement;
    this.gravityInput = document.getElementById('gravity') as HTMLInputElement;
  }

  /**
   * @desc Configura el evento click del botón de lanzamiento para que llame a la función onLaunch con los parámetros ingresados por el usuario.
   */
  bind(): void {
    this.button.addEventListener('click', () => {
      this.onLaunch({
        v0: Number(this.velocityInput.value),
        angle: Number(this.angleInput.value),
        height: Number(this.heightInput.value),
        gravity: Number(this.gravityInput.value),
      });
    });
  }
}