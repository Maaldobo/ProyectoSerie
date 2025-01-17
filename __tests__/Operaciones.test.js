import { getSerie, getFibonacci, getPrimo, getTriangular } from '../src/services/Operaciones.mjs';


describe('Operaciones - Pruebas unitarias', () => {
  test('Cálculo de la serie con los primeros 10 números naturales', () => {
    const resultadosEsperados = [
      null, // No se calcula para 1, ya que Fibonacci lanza un error.
      null, // No se calcula para 2, ya que Fibonacci lanza un error.
      -1,   // Fibonacci(3 - 2) = 1; Triangular(3) = 6; Primo(3) = 5; Resultado = -1 porque fibonacci = 0.
      210,  // Fibonacci(4 - 2) = 1; Triangular(4) = 10; Primo(4) = 7; Resultado = 3 * 7 * 10 / 1.
      495,  // Fibonacci(5 - 2) = 2; Triangular(5) = 15; Primo(5) = 11; Resultado = 3 * 11 * 15 / 2.
      409.5, // Fibonacci(6 - 2) = 3; Triangular(6) = 21; Primo(6) = 13; Resultado = 3 * 13 * 21 / 3.
      476,  // Fibonacci(7 - 2) = 5; Triangular(7) = 28; Primo(7) = 17; Resultado = 3 * 17 * 28 / 5.
      410.4, // Fibonacci(8 - 2) = 8; Triangular(8) = 36; Primo(8) = 19; Resultado = 3 * 19 * 36 / 8.
      388.125, // Fibonacci(9 - 2) = 13; Triangular(9) = 45; Primo(9) = 23; Resultado = 3 * 23 * 45 / 13.
    ];

    for (let i = 1; i <= 10; i++) {
      if (i === 1 || i === 2) {
        expect(() => getSerie(i)).toThrow(Error);
      } else {
        expect(getSerie(i)).toBeCloseTo(resultadosEsperados[i - 1]);
      }
    }
  });
});
