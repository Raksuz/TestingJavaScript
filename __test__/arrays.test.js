import { arrayFruits, arrayColors } from "../arrays";

describe('Comprobamos si existe un elemento', () => {
    test('Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un Platano', () => {
        expect(arrayFruits()).not.toContain('Platano')
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test('Comprobar que existe un color', () => {
        expect(arrayColors()).toContain('azul');
    });
});