import { useState } from "react";
import { Form } from './components/Form';
import { Resultado } from './components/Resultado';

function App() {
  const [n, setN] = useState(null);

  return (
    <>
      <div>
        <h1>Series Calculator</h1>
        <Form setN={setN} />
        <Resultado n={n} />
      </div>
    </>
  );
}

export default App