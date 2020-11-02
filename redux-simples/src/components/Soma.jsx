import React from 'react'
import Card from './Card';

function Soma(props) {
  const {min, max} = props

  return (
    <Card title="Soma dos Numeros" blue >
      <div >
        <span>
          <strong>Resultado:</strong>
          <strong>{max + min} </strong>
        </span>
      </div>
        
    </Card>
  );
}

export default Soma;