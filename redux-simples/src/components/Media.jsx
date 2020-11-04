import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

function Media(props) {
  const {min, max} = props  
  console.log(props);
  return (
    <Card title="Média dos Numeros" green >
      <div >
        <span>
          <strong>Resultado:</strong>
          <strong>{(max + min) / 2} </strong>
        </span>
      </div>
        
    </Card>
  );
}

function mapStateToProps(state) {
  return{
    min: state.numeros.min,
    max: state.numeros.max,
    nome: state.nomes[0]
  }  
}

export default connect(mapStateToProps)(Media);