import React, { Component } from 'react';

import categorias from '../categoriaDados'

class Categorias extends Component {
  render() {
    return (
      <div className="menu">
        <nav className="container categorias">
          <ul>
              {
                categorias.map((valor, index) => {

                  return (
                    <li key={index}>
                      <a href="#">{valor}</a>
                    </li>
                  )
                })
              }
          </ul>
        </nav>

      </div>
    );
  }
}

export default Categorias;