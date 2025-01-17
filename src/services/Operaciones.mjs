export function getFibonacci(number) {
  if (typeof number !== "number" || number <= 0) {
    return -2; // Entrada inválida
  }
  const memo = [0, 1];
  for (let i = 2; i < number; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[number - 1] ; 
}

export function getPrimo(number) {
  if (typeof number !== "number" || number <= 0) {
    return -2; // Entrada inválida
  }

  const esPrimo = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  let num = 2;
  while (true) {
    if (esPrimo(num)) {
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
  return (number * (number + 1)) / 2;
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
    return -1; // Fibonacci específico de error
  }

  return (3 * primo * triangular) / fibonacci;
}
export function Calculador({ number, onResult }) {
  useEffect(() => {
    if (number !== null) {
      const resultado = getSerie(number);
      onResult(resultado);
    }
  }, [number, onResult]);

  return null;
}
