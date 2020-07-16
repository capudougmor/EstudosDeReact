import React from 'react'

export default (props) => {
  const sub = props.subtitulo
  
  const resultado = props.nota >=7 ? 'Aprovado' : 'Reprovado'
  return (
    <>
      <h1>{props.titulo}</h1>
      <h2>{sub}</h2>
      <strong>Aluno: {props.aluno} </strong>
      <p>A nota foi {props.nota} e o aluno está {resultado}</p>
    </>

  )
    
}