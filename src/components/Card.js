import React, { Component } from 'react';


class Card extends Component {
  constructor(props) {
    super(props);
    this.favorito = () => {
      console.log(this.state.favorito)
      this.setState((prev) => {
        console.log(prev)
        return {favorito: !prev.favorito}
      });
    };

  }
  render() {
    return (
      <div className="card">
        <div className="card-link">
          <div className="card-favorito" onClick={this.favorito}>
            <svg viewBox="0 0 21 20" width="20" height="20">
              <path className={`coracao ${this.state.favorito? "active":""}`} d="M6.14 1C3.336 1 1.053 3.46 1.032 6.492c-.04.473-.13 3.225 2.993 5.734 2.936 2.36 5.674 5.26 5.7 5.29l.673.713.67-.715c.03-.03 2.763-2.93 5.7-5.29 3.122-2.508 3.033-5.26 2.99-5.733C19.74 3.46 17.456 1 14.652 1c-1.763 0-3.324.956-4.254 2.41C9.466 1.957 7.906 1 6.14 1" strokeWidth="2" stroke="#FEC53A" fill="none">
              </path>
            </svg>
          </div>
          <div className="card-imagem">
            <img src={this.props.card.foto} alt={this.props.card.descricao}/>
          </div>
          <div className="card-descricao">
            {this.props.card.descricao}
          </div>
        </div>
        <a href="#" className="link-azul">Veja preços em mais lojas</a>
        <div className="card-preco">
          <div className="card-preco-container">
            <a href="#" className="card-melhor-preco">MELHOR PREÇO</a>
            <span className="verde card-preco-parcelado">{this.props.card.parcelado}</span>
            <span className="verde card-preco-avista">{this.props.card.aVista}</span>
            <a href="#" className="link-azul">{this.props.card.loja}</a>
          </div>
          <button className="btn btn-card-ver">
            <i className="icone-flecha"/>
          </button>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.setState({
      favorito: false
    });
  }
}

export default Card;
