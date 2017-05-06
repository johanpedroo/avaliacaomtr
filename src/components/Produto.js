import React, { Component } from 'react';

import Galeria from './Galeria'

class Produto extends Component {
  render() {
    return (
      <div className="container">
        <section className="produto">
          <Galeria nome={this.props.produto.nome} fotos={this.props.produto.fotos}/>
          <article className="detalhes">
            <h1 className="nome">{this.props.produto.nome}</h1>
            <div className="infos">
              <span className="texto-preco">
                A partir de
                <span className="preco">
                  R$
                  <span className="preco-inteiro">
                    1187
                  </span>
                  ,10
                </span>
              </span>
              <div className="historico-preco">
                <a href="#" className="link-azul">Veja o histórico de preços de até 1 ano</a>
              </div>
            </div>
            <div className="avaliacao">
              <div className="rating">
                <span className="estrela"> </span>
                <span className="estrela"> </span>
                <span className="estrela"> </span>
                <span className="estrela"> </span>
                <span className="meia-estrela"> </span>
                <a href="#" className="link-azul">399 Consumidores avaliaram</a>
              </div>
              <div className="enviar-avaliacao">
                <a href="#" className="link-azul">Enviar avaliação</a>
              </div>
            </div>
          </article>
        </section>
      </div>
    )
  }
}

export default Produto;
