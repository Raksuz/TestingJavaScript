import { numbres } from '../numbers.js';

describe('Comparacion de numeros', () => {
    test('Mayor que', () => {
        expect(numbres(2,2)).toBeGreaterThan(3);
    });
    test('Mayor que o igual', () => {
        expect(numbres(2,2)).toBeGreaterThanOrEqual(4);
    });
    test('menor que', () => {
        expect(numbres(2,2)).toBeLessThan(6);
    });
    test('Menor que o igual', () => {
        expect(numbres(2,2)).toBeLessThanOrEqual(4);
    });
    test('Numeros Flotantes', () =>  {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.5);
    });
});