import { useEffect } from "react";

export function getFibonacci(n) {
    if (n <= 0){
        alert(`el termino ${n+2} no se encuentra en la serie de fibonacci`)
        return null;
    };
    const memo = [0, 1];
    for (let i = 2; i < n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n - 1];
  }

  export function getPrimo(n){
    if (n <= 0) throw new Error("Invalid input: n must be a positive integer");

    const esPrimo = (num) => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
    }
        return true;
        }

    let count = 0;
    let num = 2;
    while (true) {
      if (esPrimo(num)) {
        count++;
        if (count === n) return num;
      }
      num++;
    }
    
  
}

export function getTriangular(n){
    if (n <= 0) throw new Error("Invalid input: n must be a positive integer");
    return n*(n+1)/2;
}

export function getSerie(n){
    const prime = getPrimo(n);
    const triangular = getTriangular(n);
    const fibonacci = getFibonacci(n-2);
    if(fibonacci === null){
        return null;
    }
    else if(fibonacci === 0){
        alert('Se está intentando dividir entre cero');
        return null
    }
    return 3*prime * triangular / fibonacci;
}

export function Calculador({ n, onResult }) {
    useEffect(() => {
      if (n !== null) {
        const resultado = getSerie(n);
        onResult(resultado);
      }
    }, [n, onResult]);
  
    return null; 
  }