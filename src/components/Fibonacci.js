// const Fibonacci = {
//     getFibonacci: (n) => {
//       if (n <= 0) throw new Error("Invalid input: n must be a positive integer");
//       const memo = [0, 1];
//       for (let i = 2; i < n; i++) {
//         memo[i] = memo[i - 1] + memo[i - 2];
//       }
//       return memo[n - 1];
//     },
//   };
  
//   export default Fibonacci;

export function getFibonacci(n) {
  if (n <= 0) throw new Error("Invalid input: n must be a positive integer");
  const memo = [0, 1];
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n - 1];
}
  