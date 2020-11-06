import React from 'react'
import { connect } from 'react-redux'

import Card from './Card';
import './Intervalo.css'
import {alterarNumeroMin, alterarNumeroMax} from '../store/actions/numeros'

function Intervalo(props) {
  const {min, max} = props 

  return (
    <Card title="Intervalo de Numeros" red >
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number" 
            value={min} 
            onChange={e => props.alterarMin(+e.target.value)}     
            />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number" 
            value={max}
            onChange={e => props.alterarMax(+e.target.value)}     
          />
        </span>
      </div>
        
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMin(novoNumero) {
      const action = alterarNumeroMin(novoNumero)
      dispatch(action)
    },

    alterarMax(novoNumero) {
      const action = alterarNumeroMax(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);