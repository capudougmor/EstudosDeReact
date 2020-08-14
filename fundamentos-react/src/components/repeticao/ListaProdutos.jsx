import React from 'react'

import './styles.css'
import produtos from '../../data/products'

export default (props) => {

  const produtosJSX = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : ''}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>          
        
    )
  })
 
  return (
    <>
      <div className='tabelaProdutos'>
        <table >
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtosJSX}
          </tbody>
        </table>
      </div>
    </>
  )
}