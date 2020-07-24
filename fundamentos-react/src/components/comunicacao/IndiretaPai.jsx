import React from 'react'

import IndiretaFilho from './IndiretaFilho'

export default (props) => {

  function fornecerInformaçoes(nome, idade, nerd) {
    console.log(nome, idade, nerd)
  }
  return (
    <div>
      <strong>Pai</strong><br/>
      <IndiretaFilho quandoClicar={fornecerInformaçoes}></IndiretaFilho>
    </div>
  )
}