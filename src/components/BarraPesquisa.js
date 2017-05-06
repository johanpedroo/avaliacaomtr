import React, { Component } from 'react';
// import logo from '../assets/misc/logo.svg';
import avatar from '../assets/misc/avatar.jpg'

class BarraPesquisa extends Component {
  render() {
    return (
      <div className="barra-pesquisa container">
        <div className="logo">
          <a href="#">
            <img src="http://image.buscape.com/material/logo-buscape.svg" alt="logo"/>
          </a>
        </div>
        <div className="pesquisa">
          <form action="#" className="form-pesquisa">
            <i className="material-icons">search</i>
            <input type="text" className="campo-pesquisa" placeholder="Digite o produto, marca ou modelo e dá um busca!"/>
            <button type="submit" className="btn btn-pesquisa">BUSCAR</button>
          </form>
        </div>
        <div className="perfil">
          <div className="perfil-container">
            <div className="avatar">
              <img src={avatar} alt="imagem do perfil"/>
              <i className="icone-avatar"> </i>
            </div>
            <div className="dropdown">
              <ul>
                <li>
                  <a href="#" className="fav-ico">Meus favoritos</a>
                </li>
                <li>
                  <a href="#" className="prot-ico">Buscapé te Protege</a>
                </li>
                <li>
                  <a href="#" className="comp-ico">Minhas compras</a>
                </li>
                <li>
                  <a href="#" className="perf-ico">Meu Perfil</a>
                </li>
                <li>
                  <a href="#" className="sair-ico">Sair</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BarraPesquisa;