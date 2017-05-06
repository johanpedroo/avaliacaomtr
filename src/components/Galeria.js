import React, { Component } from 'react';

class Galeria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexFoto: 1
    };
    this.setTransform = (translate, duration = .3) => {
        this.setState(() => {
          return {
            indexFoto: translate,
            styleGaleria: {
              transform: `translate3d(${-272 * translate}px,0,0)`,
              transitionDuration: `${duration}s`
            }
          }
        })

    };

    this.proximo = () => {
      console.log(this.state.indexFoto);
      if (this.state.indexFoto === this.state.fotosLen + 1) {
        console.log('hora de trocar ultimo');

        this.setTransform(1, 0);

        setTimeout(() => {
          this.setTransform(2, .3);
        }, 10)
      } else {
        this.setTransform(this.state.indexFoto + 1, .3)
      }
    };

    this.anterior = () => {
      console.log(this.state.indexFoto);
      if (this.state.indexFoto === 1) {
        console.log('hora de trocar pimeiro');
        this.setTransform(6, 0);
        setTimeout(() => {
          this.setTransform(5, .3);
        }, 10)
      } else {
        this.setTransform(this.state.indexFoto - 1, .3)
      }

    };
  }

  render() {
    return (
      <div className="galeria">
        <div className="galeria-container" style={this.state.styleGaleria}>
          {this.state.fotos.map((foto, i) => {
            return (<div className="galeria-item" key={i}>
              <img className="foto" src={foto} alt={this.props.nome}/>
            </div>)
          })}
        </div>
        <div className="nav-fotos">
          {this.props.fotos.map((value, i) => {
            return (<span key={i} className={this.state.indexFoto === i + 1 ? 'active' : ''} onClick={this.setTransform.bind(this ,i + 1)}/>)
          })}
        </div>
        <i className="material-icons nav-galeria anterior" onClick={this.anterior}>chevron_left</i>
        <i className="material-icons nav-galeria proximo" onClick={this.proximo}>chevron_right</i>
      </div>
    );
  }

  componentWillMount() {
    let fotos = [];
    const fotosLen = this.props.fotos.length;
    fotos.push(this.props.fotos[fotosLen-1]);

    for(let foto of this.props.fotos){
      fotos.push(foto)
    }

    fotos.push(this.props.fotos[0]);
    this.setState({
      fotos,
      indexFoto: 1,
      fotosLen,
      styleGaleria: {
        transform: "translate3d(-272px,0,0)",
        transitionDuration: ".3s"
      }
    });
  }
}

export default Galeria;
