import { Circulo } from './circulo';
import { Figura } from './figuras';


describe('Clase Circulo', () => {
  test('se puede crear una instancia de Circulo', () => {
    const circulo = new Circulo(10, 50, 50, 'red');

    expect(circulo).toBeInstanceOf(Circulo);
  });

  test('Circulo implementa la interfaz Figura', () => {
    const circulo: Figura = new Circulo(10, 0, 0, 'blue');

    expect(typeof circulo.getArea).toBe('function');
    expect(typeof circulo.dibujar).toBe('function');
  });

  test('calcula correctamente el área', () => {
    const radio = 10;
    const circulo = new Circulo(radio, 0, 0, 'blue');
    const areaEsperada = Math.PI * radio ** 2;
    expect(circulo.getArea()).toBeCloseTo(areaEsperada);
  });
});