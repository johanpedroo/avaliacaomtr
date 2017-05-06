import React, { Component } from 'react';
// import logo from '../assets/misc/logo.svg';
import BarraPesquisa from './BarraPesquisa'
import Categorias from './Categorias'

class Header extends Component {
  render() {
    return (
      <header className="topo">
        <BarraPesquisa/>
        <Categorias/>
      </header>
    );
  }
}

export default Header;
