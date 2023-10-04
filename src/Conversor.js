// src/Conversor.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Conversor = ({ onConversion }) => {
  const [dolares, setDolares] = useState('');

  const handleConversion = () => {
    const cantidadDolares = parseFloat(dolares);
    onConversion(cantidadDolares);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="dolares">Ingresa la Cantidad en dolares:</label>
        <input
          type="number"
          className="form-control"
          id="dolares"
          value={dolares}
          onChange={(e) => setDolares(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleConversion}>
        ConvertirNOW
      </button>
    </div>
  );
};

export default Conversor;