import React from 'react'

import If from './If'

export default (props) => {
  const isPar = props.numero % 2 === 0
  const usuario = props.usuario || {nome: "Douglas"}

  return (
    <>
      <div>
        { isPar ? 
          <span>Par</span> :
          <span>Impar</span>
        }
      </div>
      <div>
        <If test={usuario && usuario.nome}>
      <div>Seja bem vindo {usuario.nome}</div>
        </If>
      </div>
    </>
  )
}