import React from 'react'
import Card from './Card';

function Sorteio(props) {
  const { max, min } = props
  const aleatorio = parseInt(Math.random() * (max - min)) + min

  return (
    <Card title="Sorteio de um Numeros" purple >
      <div >
        <span>
          <strong>Resultado:</strong>
          <strong>{aleatorio} </strong>
        </span>
      </div>
        
    </Card>
  );
}

export default Sorteio;