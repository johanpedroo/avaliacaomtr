import React, { Component } from 'react';

import Galeria from './Galeria'
import DetalhesProduto from './DetalhesProduto'

class Produto extends Component {
  render() {
    return (
      <div className="container">
        <section className="produto">
          <Galeria nome={this.props.produto.nome} fotos={this.props.produto.fotos}/>
          <DetalhesProduto produto={this.props.produto}/>
        </section>
      </div>
    )
  }
}

export default Produto;
