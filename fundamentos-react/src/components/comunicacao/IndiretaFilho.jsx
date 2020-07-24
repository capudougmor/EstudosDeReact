import React from 'react'

export default (props) => {
  const cb = props.quandoClicar
  
  return (
    <div>
      <div>
        Filho
      </div>
      <button onClick={ e => { cb('Joao', 53, true)}
      }>Fornecer Informações</button>
    </div>
  )
}