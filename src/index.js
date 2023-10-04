import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import ConversorDivisas from './ConversorDivisas';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConversorDivisas />
  </React.StrictMode>
);

