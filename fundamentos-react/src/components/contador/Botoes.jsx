import React from 'react'

export default (props) => {
  return (
    <>
      <button onClick={props.incrementar} >+</button>
      <button onClick={props.decrementar} >-</button>

    </>
  )
}