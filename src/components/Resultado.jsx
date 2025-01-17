export function Resultado({ result }) {
  return (
    <div>
      <h3>Resultado de la Serie:</h3>
      
      {result === null ? (
        <p>No se ha calculado ningún resultado.</p>
      ) : result === -1 ? (
        <p>Se intentó dividir entre cero</p>
      ) : result === -2 ? (
        <p>El valor ingresado no esta en la serie</p>
      ) :
      (
        <p>{result}</p>
      )}
    </div>
  );
}
