import React, { Component } from 'react'

import './contador.css'

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.numeroPasso || 5
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  auterarPasso = (e) => {
    this.setState({
      passo: +e.target.value
    })
  }

  render() {
    return (
      <div className='contador'>
        <p>Valor inicial: {this.state.numero} </p>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input 
            id='passoInput' 
            type="text"
            onChange={this.auterarPasso}/>
        </div>
        <button onClick={this.inc} >+</button>
        <button onClick={this.dec} >-</button>
      </div>
    )
  }
}