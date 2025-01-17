import { useEffect } from "react";

export function getFibonacci(number) {
  if (typeof number !== "number" || number <= 0) {
    return -2; // Entrada inválida
  }
  const memo = [0, 1];
  for (let i = 2; i < number; i++) { // Se calcula el número de Fibonacci por memoria para priorizar en velocidad
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[number - 1] ; 
}

export function getPrimo(number) {
  if (typeof number !== "number" || number <= 0) {
    return -2; // Entrada inválida
  }

  const esPrimo = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) { // Validacion si el numero es primo
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  let num = 2;
  while (true) {
    if (esPrimo(num)) { // Se revisa el término solicitado
      count++;
      if (count === number) return num;
    }
    num++;
  }
}

export function getTriangular(number) {
  if (typeof number !== "number" || number <= 0) {
    return -2; // Entrada inválida
  }
  return (number * (number + 1)) / 2; // Aplicacion de la formula para obtener el numero triangular
}

export function getSerie(number) {
  if (typeof number !== "number" || number <= 0) {
    return -2; // Entrada inválida
  }

  const primo = getPrimo(number);
  const triangular = getTriangular(number);
  const fibonacci = getFibonacci(number - 2);

  if (primo === -2 || triangular === -2 || fibonacci === -2) {
    return -2; // Alguna función devolvió entrada inválida
  }

  if (fibonacci === 0) {
    return -1; // valida el numero de fibonacci para evitar division entre 0
  }

  return (3 * primo * triangular) / fibonacci;
}
export function Calculador({ number, onResult }) {
  useEffect(() => {
    if (number !== null) {
      const resultado = getSerie(number); // Se calcula el resultado de la serie
      onResult(resultado);
    }
  }, [number, onResult]);

  return null;
}
