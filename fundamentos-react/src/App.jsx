import React from 'react'

import Primeiro from './components/primeiro'
import Primeiro2 from './components/basicos/Primeiro'
import ComParametros from './components/ComParametros'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import Fragmento from './components/Fragmento'

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
      <Fragmento num1={40} num2={93} />
    </Card>
    <Card titulo='Exercicio '>
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Maria</li>
          <li>Leu</li>
          <li>Gesica</li>
        </ul>
      </ComFilhos>      
    </Card>
    <Card titulo='Exercicio '>
      <Repeticao />
    </Card>
    <Card titulo='Exercicio '>
      <Condicional numero={10} />
    </Card>

  
  </div>  
)