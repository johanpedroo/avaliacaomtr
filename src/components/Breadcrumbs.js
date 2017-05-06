import React, { Component } from 'react';

class Breadcrumbs extends Component {
  render() {
    return (
      <nav className="breadcrumbs">
        <div className="container">
          <a href="#" className="breadcrumbs-links">Início</a>
          <span className="breadcrumbs-separador">»</span>
          <a href="#" className="breadcrumbs-links">Eletrônicos</a>
          <span className="breadcrumbs-separador">»</span>
          <a href="#" className="breadcrumbs-links">TV</a>
          <span className="breadcrumbs-separador">»</span>
          <span>Smart TV Samsung Série 4 UN32J4300AG 32 polegadas LED Plana</span>
        </div>
      </nav>
    );
  }
}

export default Breadcrumbs;