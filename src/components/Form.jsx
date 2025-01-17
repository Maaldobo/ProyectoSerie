export function Form({ setNumber }) {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get('numberInput');
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setNumber(parsedValue);
    } else {
      alert('Introduce un número válido mayor de 2');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numberInput">Introduce un número:</label>
      <input
        id="numberInput"
        type="number"
        name="numberInput"
        min="0"
        
      />
      <button type="submit">Calcular</button>
    </form>
  );
}
