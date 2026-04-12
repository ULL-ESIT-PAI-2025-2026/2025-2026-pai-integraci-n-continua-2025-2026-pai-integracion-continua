import { Rectangulo } from './rectangulo';
import { Figura } from './figuras';

describe('Clase Rectangulo', () => {
  test('se puede crear una instancia de Rectangulo', () => {
    const rectangulo = new Rectangulo(10, 5, 20, 20, 'yellow');
    expect(rectangulo).toBeInstanceOf(Rectangulo);
  });

  test('Rectangulo implementa Figura', () => {
    const rectangulo: Figura = new Rectangulo(10, 5, 0, 0, 'blue');
    expect(typeof rectangulo.getArea).toBe('function');
    expect(typeof rectangulo.dibujar).toBe('function');
  });

  test('calcula correctamente el área', () => {
    const base = 10;
    const altura = 5;
    const rectangulo = new Rectangulo(base, altura, 0, 0, 'green');
    expect(rectangulo.getArea()).toBe(base * altura);
  });
});