// sum.test.js
import { expect, test, describe } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparación
    const a = 2;
    const b = 1;
    const res = sum(a, b);

    //Estímulo
    expect(res).toBe(3);

    //El comportamiento esperado
    expect(res).toBe(a + b);
  });
});

describe('Add array function', () => {
  test('should return 0 if the array is empty', () => {
    //   Prueba con array
    const numberArray = [];

    //   Estímulo
    const result = addArray(numberArray);
    expect(result).toBe(0);
  });
});

test('should return proper value of the addArray function', () => {
  //   Prueba con array
  const numberArray = [1, 2, 3, 4, 5];

  //   Estímulo
  const result = addArray(numberArray);
  expect(result).toBe(15);
});
