import { Cuadrado } from './cuadrado';
import { Figura } from './figuras';

describe('Clase Cuadrado', () => {

  test('se puede crear una instancia de Cuadrado', () => {
    const cuadrado = new Cuadrado(5, 10, 10, 'green');

    expect(cuadrado).toBeInstanceOf(Cuadrado);
  });

  test('Cuadrado implementa Figura', () => {
    const cuadrado: Figura = new Cuadrado(5, 0, 0, 'blue');

    expect(typeof cuadrado.getArea).toBe('function');
    expect(typeof cuadrado.dibujar).toBe('function');
  });

  test('calcula correctamente el área', () => {
    const lado = 5;
    const cuadrado = new Cuadrado(lado, 0, 0, 'red');

    expect(cuadrado.getArea()).toBe(lado ** 2);
  });

});