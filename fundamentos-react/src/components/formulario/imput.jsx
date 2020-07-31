import React , { useState } from 'react'


export default (props) => {
  const [valor, setValor] = useState('Inicial')

  return (
    <>
      <h2>{ valor }</h2>
      <input value={valor} onChange={e => setValor(e.target.value)} /> <br/>
      <hr/>
      <input value={valor} readOnly/> <br/>
      <hr/>
      <input value={undefined} /> <br/>
      <hr/>
    </>
  )
}