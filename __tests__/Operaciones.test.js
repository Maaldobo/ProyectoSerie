import { getSerie, getFibonacci, getPrimo, getTriangular } from '../src/services/Operaciones.mjs';

describe('Operaciones - Pruebas unitarias', () => {
  test('Cálculo de la serie con los primeros 10 números naturales', () => {
    const resultadosEsperados = [
      -2,   // Entrada inválida para 1 (Fibonacci(1 - 2) no es válido).
      -2,   // Entrada inválida para 2.
      -1,   // Fibonacci(3 - 2) = 0.
      210,  // Fibonacci(4 - 2) = 1; Triangular(4) = 10; Primo(4) = 7.
      495,  // Fibonacci(5 - 2) = 2; Triangular(5) = 15; Primo(5) = 11.
      409.5, // Fibonacci(6 - 2) = 3; Triangular(6) = 21; Primo(6) = 13.
      476,  // Fibonacci(7 - 2) = 5; Triangular(7) = 28; Primo(7) = 17.
      410.4, // Fibonacci(8 - 2) = 8; Triangular(8) = 36; Primo(8) = 19.
      388.125, // Fibonacci(9 - 2) = 13; Triangular(9) = 45; Primo(9) = 23.
      368.0769231 //


    ];

    for (let i = 1; i <= 10; i++) {
      expect(getSerie(i)).toBeCloseTo(resultadosEsperados[i - 1]);
    }
  });
});
