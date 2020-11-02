import React from 'react'
import Card from './Card';
import './Intervalo.css'

function Intervalo(props) {
  return (
    <Card title="Intervalo de Numeros" red >
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} readOnly />
        </span>
      </div>
        
    </Card>
  );
}

export default Intervalo;