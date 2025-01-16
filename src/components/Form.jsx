import { useState } from "react";

export function Form({ setN }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(input);

    if (n > 2) {
      setN(n)
    } else {
      alert('Please enter an integer greater than 2.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa el término (n) a calcular:
          <br />
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            min="2"
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
    </>
  );
}