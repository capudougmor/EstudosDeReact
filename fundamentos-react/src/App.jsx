import React from 'react'

import Primeiro from './components/primeiro'
import Primeiro2 from './components/basicos/Primeiro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ComParametros from './components/ComParametros'
import Familia from './components/Familia'
import FamiliaMembro from './components/FamiliaMembro'
import Card from './components/layout/card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import Fragmento from './components/Fragmento'

export default props => (
  <div className='App'>
    <Card
      title='Primeiro componente'
      footer='Exercicio 1'
      color='#001f3f'
    >
      <Primeiro />
    </Card>
    <Card
      title='Componente2 com variavel'
      footer='Exercicio 2'
      color='#7FDBFF'
    >
      <Primeiro2 />
    </Card>
    
    <Card
      title='ComParametros'
      footer='Exercicio 3'
      color='#3D9970'
    >
      <ComParametros
        title='' footer='Com parametros'
        subtitulo='Aqui podemos enviar os props'
        aluno='Douglas'
        nota={9.5}
      />
    </Card>

    <Card title='Fragmento' footer='Exercicio 4' color='#DDDDDD'>
      <Fragmento num1={40} num2={93} />
    </Card>

    <Card title='Familia' footer='Exercicio 5' color='#01FF70'>
      <Familia sobrenome='Mendes' >
        <FamiliaMembro name='Douglas'{...props} />
        <FamiliaMembro name='Ana'{...props} />
        <FamiliaMembro name='Cintia' sobrenome='VAZ' />
      </Familia>
    </Card>

    <Card title='Repeticao' footer='Exercicio ' color='#213F20'>
      <ListaAlunos />
    </Card>

    <Card title='Condicional '>
      <Condicional numero={10} />
    </Card>


  </div>
)