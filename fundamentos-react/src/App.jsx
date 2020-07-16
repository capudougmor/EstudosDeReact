import React from 'react'

import Primeiro from './components/primeiro'
import Primeiro2 from './components/basicos/Primeiro'
import ComParametros from './components/ComParametros'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'

export default props => (
  <div className='App'>
    <Card titulo='Exercicio 1'>
      <Primeiro />
    </Card>
    <Card titulo='Exercicio 2'>
      <Primeiro2 />
    </Card>
    <Card titulo='Exercicio 3'>
      <ComParametros 
        titulo='Com parametros'
        subtitulo='Aqui podemos enviar os props'
        aluno='Douglas'
        nota={9.5}
      />       
    </Card>
    <Card titulo='Exercicio 4'>
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Maria</li>
          <li>Leu</li>
          <li>Gesica</li>
        </ul>
      </ComFilhos>      
    </Card>
    <Card titulo='Exercicio 5'>
      <Repeticao />
    </Card>
    <Card titulo='Exercicio 6'>
      <Condicional numero={10} />
    </Card>

  
  </div>  
)