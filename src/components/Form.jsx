import { useState } from 'react';

export function Form({ setN }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setN(parsedValue);
    } else {
      alert('Introduce un número válido mayor que 0');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nInput">Introduce un número:</label>
      <input
        id="nInput"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Calcular</button>
    </form>
  );
}
