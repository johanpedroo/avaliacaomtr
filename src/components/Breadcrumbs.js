import React, { Component } from 'react';

class Breadcrumbs extends Component {
  render() {
    return (
      <nav className="breadcrumbs">
        <div className="container">
          <a href="#" className="breadcrumbs-links">Início</a>
          {this.props.categorias.map((value, i) => {
            return (
              <span key={i}>
                <span className="breadcrumbs-separador">»</span>
                <a href="#" className="breadcrumbs-links">{value}</a>
              </span>
            )
          })}
          <span className="breadcrumbs-separador">»</span>
          <span>{this.props.nome}</span>
        </div>
      </nav>
    );
  }
}

export default Breadcrumbs;