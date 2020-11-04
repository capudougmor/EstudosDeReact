import React from 'react'
import Card from './Card';

function Soma(props) {
  
  return (
    <Card title="Soma dos Numeros" blue >
      <div >
        <span>
          <strong>Resultado:</strong>
          <strong>{10} </strong>
        </span>
      </div>
        
    </Card>
  );
}

export default Soma;