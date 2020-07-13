import React from 'react'

export default (props) => 
    <>
      <h2>O numero é {props.numero}</h2>
      {props.numero % 2 === 0 ? 
        <div>Par </div>
        :
        <div>Impar </div>
    
      }
    </>
    
