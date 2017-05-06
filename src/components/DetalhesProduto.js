import React, { Component } from 'react';


class DetalhesProduto extends Component {
  render() {
    return (
      <article className="detalhes">
        <h1 className="nome">{this.props.produto.nome}</h1>
        <div className="infos">
          <span className="texto-preco">
            A partir de:
            <span className="preco">
              R$
              <span className="preco-inteiro">
                1.187
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
    )
  }
}

export default DetalhesProduto;
