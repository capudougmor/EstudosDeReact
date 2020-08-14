import React from 'react'

import getNumber from './gerador'
import { useState } from 'react'

export default (props) => {

  const [acount, setAcount] = useState( props.acount || 6)
  const [numbers, setNumbers] = useState(Array(props.acount || 6).fill(0))

  function createNumberNoInclude(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio)
      ? createNumberNoInclude(min, max, array)
      : aleatorio
  }
  
  function createNumbers(amount) {
    const numbers = Array(amount)
      .fill(0)
      .reduce((nums) => {
        const newNumber = createNumberNoInclude(1, 60, nums)
  
        return [ ...nums, newNumber]
      }, [])
      .sort((n1, n2) => n1 - n2)
  
    return numbers
  }

  return(
    <>
      <label>Quantos Números: </label>
      <br/>
      <br/>
      <input type="number" 
        value={acount} onChange={e => setAcount(+e.target.value)}  />
      <br/>
      <br/>
      <button 
        onClick={_ => setNumbers(createNumbers(acount))} 
        >Gerar numeros</button>
      
      <h3>Números sortiados: <br/> {numbers.join(' ')} </h3>
    </>
  )
}