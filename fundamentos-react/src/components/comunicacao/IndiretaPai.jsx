import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default (props) => {
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)

  function fornecerInformaçoes(nome, idade, nerd) {
    setNome(nome)
    setNerd(nerd)
    setIdade(idade)
  }
  return (
    <div>
      <strong>Pai</strong><br />
      <span>{nome} </span>
      <span><strong>{idade} </strong></span>
      <span>{nerd ? 'verdadeiro' : 'falso'} </span>
      <IndiretaFilho quandoClicar={fornecerInformaçoes}></IndiretaFilho>
    </div>
  )
}