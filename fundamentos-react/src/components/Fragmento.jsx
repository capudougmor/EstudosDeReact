import React from 'react'

const Fragmento = (props) => {
    const {num1, num2 } = props
    const numRandom = Math.round( Math.random() * (num2 - num1)) + num1 
    return (
        <>
            <h2>Desafio 1</h2>
            <p>Número aleatorio {numRandom}</p>
            <p>Menor inteiro {Math.ceil(props.num1)}</p>
            <p>Maior inteiro {Math.floor(props.num2)}</p>
        </>
    )
}

export default Fragmento