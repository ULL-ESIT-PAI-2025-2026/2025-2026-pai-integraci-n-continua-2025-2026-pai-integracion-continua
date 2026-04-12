import { Triangulo } from './triangulo';
import { Figura } from './figuras';

describe('Clase Triangulo', () => {
  test('se puede crear una instancia de Triangulo', () => {
    const triangulo = new Triangulo(10, 5, 30, 30, 'orange');
    expect(triangulo).toBeInstanceOf(Triangulo);
  });

  test('Triangulo implementa Figura', () => {
    const triangulo: Figura = new Triangulo(10, 5, 0, 0, 'purple');
    expect(typeof triangulo.getArea).toBe('function');
    expect(typeof triangulo.dibujar).toBe('function');
  });

  test('calcula correctamente el área', () => {
    const base = 10;
    const altura = 6;
    const triangulo = new Triangulo(base, altura, 0, 0, 'red');
    expect(triangulo.getArea()).toBe((base * altura) / 2);
  });
});