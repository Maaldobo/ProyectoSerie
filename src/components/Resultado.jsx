export function Resultado({ result }) {
  return (
    <div>
      <h3>Resultado de la Serie:</h3>
      
      {result === null ? (
        <p>No se ha calculado ningún resultado.</p>
      ) : result === -1 ? (
        <p>Se intentó dividir entre cero</p>
      ) : (
        <p>{result}</p>
      )}
    </div>
  );
}
