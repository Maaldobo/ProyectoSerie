export function getTriangular(n) {
  if (n <= 0) throw new Error("Invalid input: n must be a positive integer");
  return (n * (n + 1)) / 2;
}