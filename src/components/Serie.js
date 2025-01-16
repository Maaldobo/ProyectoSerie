import { getFibonacci } from "./Fibonacci";
import { getPrimo } from "./Primo";
import { getTriangular } from "./Triangular";

export function getSerie(n){

  const prime = getPrimo(n);
  const triangular = getTriangular(n);
  const fibonacci = getFibonacci(n-2);
   if(fibonacci === 0){
    alert('Se está intentando dividir entre cero');
    return null
  }
  return 3*prime * triangular / fibonacci;

}