import { useState } from 'react';
import { Form } from './components/Form';
import { Resultado } from './components/Resultado';
import { Calculador } from './components/Operaciones';


function App() {
  const [n, setN] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <>
      <div>
        <h1>Calculadora de Serie</h1>
        <Form setN={setN} />
        <Calculador n={n} onResult={setResult} />
        <Resultado result={result} />
      </div>
    </>
  );
}

export default App;
