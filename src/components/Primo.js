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