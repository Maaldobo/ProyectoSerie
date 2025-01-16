export function Resultado({ result }) {
  return (
    <div>
      <h3>Resultado de la Serie:</h3>
      {result !== null ? <p>{result}</p> : <p>No se ha calculado ningún resultado.</p>}
    </div>
  );
}
