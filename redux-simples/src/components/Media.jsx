import React from 'react'
import Card from './Card';

function Media(props) {
  const {min, max} = props
  return (
    <Card title="Média dos Numeros" green >
      <div >
        <span>
          <strong>Resultado:</strong>
          <strong>{(min + max) / 2} </strong>
        </span>
      </div>
        
    </Card>
  );
}

export default Media;