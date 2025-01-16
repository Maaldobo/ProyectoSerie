import { useEffect, useState } from "react";
import { getSerie } from "./Serie";

export function Resultado({ n }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (n !== null) {
      setResult(getSerie(n));
    }
  }, [n]);

  return (
    <>
      <div>
        <h3>Series Result:</h3>
        {result !== null ? <p>{result}</p> : <p>No result calculated yet.</p>}
      </div>
    </>
  );
}