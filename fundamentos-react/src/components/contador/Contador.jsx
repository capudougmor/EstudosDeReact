import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

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


  auterarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso
    })
  }

  render() {
    return (
      <div className='contador'>
        <Display numero={this.state.numero} ></Display>
        <PassoForm passo={this.state.passo} setPasso={this.auterarPasso} ></PassoForm>
        <Botoes incrementar={this.inc} decrementar={this.dec} ></Botoes>
      </div>
    )
  }
}