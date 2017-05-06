import React, { Component } from 'react';

class Produto extends Component {
  render() {
    return (
      <div className="container">
        <section className="produto">
          <div className="galeria">
            <i className="material-icons nav-galeria anterior">keyboard_arrow_left</i>
            <i className="material-icons nav-galeria proximo">keyboard_arrow_right</i>
          </div>
        </section>
      </div>
    );
  }
}

export default Produto;
