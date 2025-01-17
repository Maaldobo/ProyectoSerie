import { useState } from 'react';
import { Form } from './components/Form';
import { Resultado } from './components/Resultado';
import { Calculador } from './services/Operaciones.mjs';


function App() {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null);

  return (
   
      <div>
        <h1>Calculadora de Serie</h1>
        <Form setNumber={setNumber} />
        <Calculador number={number} onResult={setResult} />
        <Resultado result={result} />
      </div>
    
  );
}

export default App;
