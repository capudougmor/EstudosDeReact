import React from 'react'

import Primeiro from './components/primeiro'
import Primeiro2 from './components/basicos/Primeiro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ComParametros from './components/ComParametros'
import Familia from './components/Familia'
import FamiliaMembro from './components/FamiliaMembro'
import Card from './components/layout/card'
import ListaProdutos from './components/repeticao/ListaProdutos'
import Condicional from './components/condicional/Condicional'
import Fragmento from './components/Fragmento'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Imput from './components/formulario/imput'
import Contador from './components/contador/Contador'
import Megasena from './components/Megasena'

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

    <Card title='Repeticao' footer='Exercicio 6' color='#213F20'>
      <ListaAlunos />
    </Card>

    <Card title='Desafio Repetição' footer='Exercicio 7' color='#FFDC00'>
      <ListaProdutos />
    </Card>

    <Card title='Condicional' footer='Exercicio 8' color='#ff2444'>
      <Condicional numero={11} usuario={{nome: "Cintia"}} />
      <Condicional numero={10}  />
    </Card>

    <Card title='Comunicação Indireta' footer='Exercicio 9' color='#F33333'>
      <IndiretaPai ></IndiretaPai>
    </Card>

    <Card title='Componente controlado' footer='Exercicio 10' color='#F5B041'>
      <Imput></Imput>
    </Card>

    <Card title='Contador' footer='Exercicio 11' color='#BDC3C7'>
      <Contador numeroInicial={''}></Contador>
    </Card>

    <Card title='Mega-sena' footer='Desafio 02' color='#F4D03F'>
      <Megasena numeroInicial={''}></Megasena>
    </Card>

  </div>
)