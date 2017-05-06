import React, { Component } from 'react';

class Categorias extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="container categorias">
          <ul>
            <li>
              <a href="#">CELULARES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">ELETRÔNICOS</a>
            </li>
            <li>
              <a href="#">INFORMÁTICA</a>
            </li>
            <li>
              <a href="#">ELETRODOMÉSTICOS</a>
            </li>
            <li>
              <a href="#">CASA E DECORAÇÃO</a>
            </li>
            <li>
              <a href="#">ESPORTE E LAZER</a>
            </li>
            <li>
              <a href="#">VIAGENS</a>
            </li>
            <li>
              <a href="#">MAIS CATEGORIAS</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Categorias;