import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs'
import Produto from './Produto'
import produto from '../produtoDados'

class Content extends Component {
  render() {
    return (
      <main>
        <Breadcrumbs categorias={produto.categorias} nome={produto.nome}/>
        <Produto produto={produto}/>
      </main>
    );
  }
}

export default Content;
