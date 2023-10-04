import React, { useState } from 'react';
import Conversor from './Conversor';
import 'bootstrap/dist/css/bootstrap.min.css';


const ConversorDivisas = () => {
  const [bitcoin, setBitcoin] = useState(0);
  const [colones, setColones] = useState(0);

  const handleConversion = (cantidadDolares) => {
    // el cambiob de dolar a Bitcoin y colon salvadoreno 
    const tipoCambioBitcoin = 0.000036022; // un dolar en Bitcoin
    const tipoCambioColones = 8.75000; // 1 dolar en colones salvadorenos

    // equivalente en bitcoin y colones
    const equivalenteBitcoin = cantidadDolares * tipoCambioBitcoin;
    const equivalenteColones = cantidadDolares * tipoCambioColones;

    setBitcoin(equivalenteBitcoin.toFixed(8));
    setColones(equivalenteColones.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <h1>Conversor de Divisas</h1>
      <Conversor onConversion={handleConversion} />
      <div className="mt-4">
        <p>Equivalente en Bitcoin: {bitcoin} BTC</p>
        <p>Equivalente en Colones Salvadoreños: ${colones} SVC</p>
      </div>
    </div>
  );
};

export default ConversorDivisas;
