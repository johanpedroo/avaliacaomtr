import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs'
import Produto from './Produto'
import Cards from './Cards'
import produto from '../produtoDados'

class Content extends Component {
  render() {
    return (
      <main className="content">
        <Breadcrumbs categorias={produto.categorias} nome={produto.nome}/>
        <Produto produto={produto}/>
        <Cards/>
      </main>
    );
  }
}

export default Content;
